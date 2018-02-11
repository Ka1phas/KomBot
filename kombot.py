import time
import json
import requests
import urllib
import config as cfg
from dbmanager import DBManager

db = DBManager()

TOKEN = cfg.api["key"]
URL = "https://api.telegram.org/bot{}/".format(TOKEN)


def get_url(url):
    response = requests.get(url)
    content = response.content.decode("utf8")
    return content


def get_json_from_url(url):
    content = get_url(url)
    js = json.loads(content)
    return js


def get_updates(offset=None):
    url = URL + "getUpdates"
    if offset:
        url += "?offset={}".format(offset)
    js = get_json_from_url(url)
    return js


def handle_updates(updates):
    for update in updates["result"]:
        try:
            text = update["message"]["text"]
            chat = update["message"]["chat"]["id"]
            lectures = db.get_studentlectures(chat)
            if text[0] == "/":
                # Check for arguments
                args = None
                targs = None
                subs = text.split(" ")
                cmd = text[1:]
                if len(subs) > 1:
                    targs = subs[1:]
                    cmd = subs[0][1:]
                # Construct args
                if targs:
                    first = None
                    args = []
                    for sub in targs:
                        if first:
                            first = first + " " + sub
                            if "\"" in sub or "„" in sub or "“" in sub:
                                args.append(first[:len(first) - 1])
                                first = None
                        else:
                            if "\"" in sub or "„" in sub or "“" in sub:
                                first = sub[1:]
                            else:
                                args.append(sub)
                check_for_command(cmd, chat, args)
            elif text in lectures:
                db.delete_lecture(1, chat)
                lectures = db.get_studentlectures(chat)
            else:
                db.add_lecture(1, chat)
                lectures = db.get_studentlectures(chat)
                message = "\n".join(lectures)
                send_message(message, chat)
        except KeyError:
            pass


def get_last_update_id(updates):
    update_ids = []
    for update in updates["result"]:
        update_ids.append(int(update["update_id"]))
    return max(update_ids)


def send_message(text, chat_id, reply_markup=None):
    text = urllib.parse.quote_plus(text)
    url = URL + "sendMessage?text={}&chat_id={}".format(text, chat_id)
    if reply_markup:
        url += "&reply_markup={}".format(reply_markup)
    print("[BOT]:: Sending new response to telegram bot api: " + url)
    get_url(url)


def build_keyboard(lectures):
    keyboard = [[lecture] for lecture in lectures]
    reply_markup = {"keyboard": keyboard, "one_time_keyboard": True}
    return json.dumps(reply_markup)


def check_for_command(cmd, chat, args=None):
    sargs = "None"
    if args:
        sargs = ''.join(args)
    print("[BOT]:: Checking for command : " + cmd
          + " with arguments : " + sargs)
    if cmd == "removelecture":
        lectures = db.get_studentlectures(chat)
        keyboard = build_keyboard(lectures)
        send_message("Wähle eine Vorlesung aus, die gelöscht werden soll",
                     chat,
                     keyboard)
    elif cmd == "addlecture":
        if args:
            print("ARGS = " + args[0])
            lectureid = -1
            # Check type
            if type(args[0]) is int:
                lectureid = args[0]
            elif type(args[0]) is str:
                # Find lectureID
                name = args[0]
                lectureid = db.get_lecture_id(name)
            print("[BOT]:: Command detected : ADD LECTURE with ID =  "
                  + str(lectureid))
            if lectureid >= 0:
                db.add_lecture(1, chat)
                lectures = db.get_studentlectures(chat)
                message = "\n".join(lectures)
                send_message(message, chat)
    else:
        print("[BOT]:: Command not found : " + cmd)


def main():
    db.setup_timetable()
    last_update_id = None
    while True:
        updates = get_updates(last_update_id)
        if len(updates["result"]) > 0:
            last_update_id = get_last_update_id(updates) + 1
            handle_updates(updates)
        time.sleep(0.5)


if __name__ == '__main__':
    main()
