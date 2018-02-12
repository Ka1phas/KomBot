from kombot import send_message


g_skill_text = None
g_text = None
g_chat = None

# Checks for skill match and returns true if an answer was found, else false
# Sends answer to user immediately (if answer was found)
def get_skill_match(skill_name, skill_text, text, chat):
    global g_skill_text, g_text, g_chat
    g_skill_text = skill_text
    g_text = text
    g_chat = chat


    if skill_name == "GetLectureTime":
        return get_lecture_time()
    elif skill_name == "GetFreeSoftware":
        return get_free_software()
    elif skill_name == "HowToUse":
        return get_how_to_use()
    elif skill_name == "GetSemesterFee":
        return get_semester_fee()
    else:
        print("Error: No pattern " + skill_name + " found.")

    return False


def get_lecture_time():
    global g_chat
    send_message("LectureTime", g_chat)
    return True

def get_free_software():
    global g_chat
    send_message("FreeSoftware", g_chat)
    return True

def get_how_to_use():
    global g_chat
    send_message("HowTo", g_chat)
    return True

def get_semester_fee():
    global g_chat
    answer = "Der Sozial- und Studierendenschaftsbeitrag beträgt für das Sommersemester 2018 insgesamt 304,62 €.\n" \
             "Der Beitrag kann bis zum 02.03.2018 überwiesen werden."
    send_message(answer, g_chat)
    return True