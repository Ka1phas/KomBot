import time
import json
import requests
import config as cfg

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

def get_last_update_id(updates):
    update_ids = []
    for update in updates["result"]:
        update_ids.append(int(update["update_id"]))
    return max(update_ids)


def get_last_chat_id_and_text(updates):
    num_updates = len(updates["result"])
    last_update = num_updates - 1
    text = updates["result"][last_update]["message"]["text"]
    chat = updates["result"][last_update]["message"]["chat"]["id"]
    return (text, chat)

def answer_all(updates):
    for update in updates["result"]:
        try:
            if "text" in update["message"]:
                answer_text(update)
            elif "photo" in update["message"]:
                answer_photo(update)
            elif "location" in update["message"]:
                answer_location(update)
        except Exception as e:
            print("Exception: " + str(e))

def answer_text(msg):
    print("TEXT")
    try:
        text = msg["message"]["text"]
        chat_id = msg["message"]["chat"]["id"]
        send_message("Eine Nachricht: " + text , chat_id)
    except Exception as e:
        print(e)

def answer_photo(msg):
    print("FOTO")
    try:
        chat_id = msg["message"]["chat"]["id"]
        send_message("Ein Foto", chat_id)
    except Exception as e:
        print(e)

def answer_location(msg):
    print("LOCATION")
    try:
        chat_id = msg["message"]["chat"]["id"]
        send_message("Ein Standort", chat_id)
    except Exception as e:
        print(e)

def send_message(text, chat_id):
    url = URL + "sendMessage?text={}&chat_id={}".format(text, chat_id)
    get_url(url)
    
def main():
    last_update_id = None
    while True:
        updates = get_updates(last_update_id)
        if len(updates["result"]) > 0:
            last_update_id = get_last_update_id(updates) + 1
            answer_all(updates)
        time.sleep(0.5)
        
if __name__ == '__main__':
    main()