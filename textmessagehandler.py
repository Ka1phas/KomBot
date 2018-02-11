from kombot import send_message, db

def handle_msg(msg):
    try:
        text = msg["message"]["text"]
        chat = msg["message"]["chat"]["id"]

        if text.startswith('!'):
            handle_command(text, chat)
    except KeyError:
        pass


def handle_command(text, chat):
    lectures = db.get_studentlectures(chat)
    if text[1:] in lectures:
        db.delete_lecture(1, chat)
        lectures = db.get_studentlectures(chat)
    else:
        db.add_lecture(1, chat)
        lectures = db.get_studentlectures(chat)
    message = "\n".join(lectures)
    send_message(message, chat)