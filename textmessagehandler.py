from kombot import send_message, db
import json
import os

__location__ = os.path.realpath(
    os.path.join(os.getcwd(), os.path.dirname(__file__)))

_wants_to_remove = []

_german_weekdays = {
    "Monday": "Montag",
    "Tuesday": "Dienstag",
    "Wednesday": "Mittwoch",
    "Thursday": "Donnerstag",
    "Friday": "Freitag",
    "Saturday": "Samstag",
    "Sunday": "Sonntag"
}

def handle_msg(msg):
    try:
        text = msg["message"]["text"]
        chat = msg["message"]["chat"]["id"]

        if text.startswith('/'):
            handle_command(text, chat)
        else:
            get_pattern_match(text, chat)
    except KeyError:
        pass


def get_pattern_match(text, chat):
    if(chat in _wants_to_remove):
        lectures = db.get_studentlectures(chat)
        if(text in lectures):
            db.delete_lecture_by_title(text, chat)
            message = "Ich habe die Vorlesung {} aus deinem Studenplan gelöscht.".format(text)
            send_message(message, chat)
            return
    with open(os.path.join(__location__, 'patterns.dat')) as file:
        for line in file:
            skill_name =  line.split(' ', 1)[0]
            skill_text = line.split(' ', 1)[1]
            skill_patterns = skill_text.split("...")
            print(skill_patterns[0])
            print(text)
            if text.startswith(skill_patterns[0]):
                send_message(skill_name, chat)
                break
            print(line)


def handle_command(text, chat):
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


def check_for_command(cmd, chat, args=None):
    sargs = "None"
    if args:
        sargs = ''.join(args)
    print("[BOT]:: Checking for command : " + cmd
          + " with arguments : " + sargs)
    if cmd == "removelecture":
        _wants_to_remove.append(chat)
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
                db.add_lecture(lectureid, chat)
                lectures = db.get_studentlectures(chat)
                message = "\n".join(lectures)
                send_message(message, chat)
    elif cmd == "getlectures":
        lectures = db.get_studentlectures(chat)
        message = ("Diese Vorlesungen hast du "
                   "in deinem Stundenplan:\n")
        for lecture in lectures:
            message += '\n' + lecture
        send_message(message, chat)
    elif cmd == "showlectures":
        lectures = db.get_lectures()
        message = ("Diese Vorlesungen hast du "
                   "in deinem Stundenplan:\n")
        for lecture in lectures:
            message += '\n' + lecture
        send_message(message, chat)
    elif cmd == "getlectureinfos":
        if args:
            lecture_id = -1
            try:
                lecture_id = int(args[0])
            except ValueError as err:
                return
            lecture_infos = db.get_lecture_infos(lecture_id);
            print("[BOT]:: Command detected : GET LECTURE INFOS = " + lecture_infos["title"] + " on " + lecture_infos["weekday"] + " from " + lecture_infos["start"] + " to " + lecture_infos["end"] + " in room " + lecture_infos["room_name"])
            message = "Die Vorlesung {} findet am {} von {} Uhr bis {} Uhr in Raum {} statt.".format(lecture_infos["title"],
                                                                                            _german_weekdays[lecture_infos["weekday"]],
                                                                                            lecture_infos["start"],
                                                                                            lecture_infos["end"],
                                                                                            lecture_infos["room_name"])
            send_message(message, chat)
    else:
        print("[BOT]:: Command not found : " + cmd)

def build_keyboard(lectures):
    keyboard = [[lecture] for lecture in lectures]
    reply_markup = {"keyboard": keyboard, "one_time_keyboard": True}
    return json.dumps(reply_markup)