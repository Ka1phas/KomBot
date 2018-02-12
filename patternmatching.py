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

    if skill_name == "GetCertificateOfStudy":
        return get_certificate_of_study()
    elif skill_name == "GetExamRegistration":
        return get_exam_registration()
    elif skill_name == "GetFreeSoftware":
        return get_free_software()
    elif skill_name == "GetHowToUse":
        return get_how_to_use()
    elif skill_name == "GetLectureTime":
        return get_lecture_time()
    elif skill_name == "GetRoom":
        return get_semester_fee()
    elif skill_name == "GetSemesterFee":
        return get_semester_fee()
    elif skill_name == "GetVPN":
        return get_vpn()
    else:
        print("Error: No pattern " + skill_name + " found.")

    return False

def get_certificate_of_study():
    global g_chat
    answer = "Die Studienbescheinigung ist unter folgendem Link verfügbar:\n" \
             "https://campus.uni-due.de/cm/ \n \n" \
             "Schritte:\n" \
             "1.) Mit Unikennung einloggen \n" \
             "2.) Auf \"Mein Studium\" -> \"Studienservice\" -> \"Bescheinigungen\" klicken \n" \
             "3.) .pdf-Datei mit Studienbescheinigung runterladen "
    send_message(answer, g_chat)
    return True


def get_exam_registration():
    global g_chat
    answer = "Die Prüfungsanmeldephase für das Sommersemester 2018 beginnt am 07.05.18 und endet am 18.05.18.\n" \
             "Eine Prüfung kann über folgendes Portal angemeldet werden: \n\n" \
             "https://campus.uni-due.de/lsf  \n\n" \
             "Terminpläne für Bachelor und Master sind unter folgendem Link zu finden: \n\n" \
             "https://www.uni-due.de/verwaltung/pruefungswesen/d_komed_startseite.php"
    send_message(answer, g_chat)
    return True

def get_free_software():
    global g_chat
    send_message("FreeSoftware", g_chat)
    return True

def get_how_to_use():
    global g_chat
    send_message("HowTo", g_chat)
    return True

def get_lecture_time():
    global g_chat


    send_message("LectureTime", g_chat)
    return True


def get_semester_fee():
    global g_chat
    answer = "Der Sozial- und Studierendenschaftsbeitrag beträgt für das Sommersemester 2018 insgesamt 304,62 €.\n" \
             "Der Beitrag kann bis zum 02.03.2018 überwiesen werden."
    send_message(answer, g_chat)
    return True

def get_vpn():
    global g_chat
    answer = "Der Zugriff auf Uni-Dienste von z.B. Zuhause aus kann über eine VPN-Verbindung gewährleistet werden." \
             "Windows-Nutzer können hierfür Cisco AnyConnect verwenden: \n" \
             "https://www.uni-due.de/zim/services/internetzugang/cisco-vpn-anyconnect \n\n" \
             "Für MacOS und Linux bietet sich OpenConnect an: \n" \
             "https://www.uni-due.de/zim/services/internetzugang/openconnect.php"
    send_message(answer, g_chat)
    return True