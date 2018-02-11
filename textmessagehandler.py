from kombot import send_message, db
import os

__location__ = os.path.realpath(
    os.path.join(os.getcwd(), os.path.dirname(__file__)))

def handle_msg(msg):
    try:
        text = msg["message"]["text"]
        chat = msg["message"]["chat"]["id"]

        if text.startswith('!'):
            handle_command(text, chat)
        else:
            get_pattern_match(text, chat)
    except KeyError:
        pass


def get_pattern_match(text, chat):
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
    lectures = db.get_studentlectures(chat)
    if text[1:] in lectures:
        db.delete_lecture(1, chat)
        lectures = db.get_studentlectures(chat)
    else:
        db.add_lecture(1, chat)
        lectures = db.get_studentlectures(chat)
    message = "\n".join(lectures)
    send_message(message, chat)