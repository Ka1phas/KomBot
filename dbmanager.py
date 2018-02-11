import sqlite3


class DBManager:

    def __init__(self, dbname="knowledge.db"):
        self.dbname = dbname
        self.connection = sqlite3.connect(dbname)

    def setup_timetable(self):
        tblstmt = ("CREATE TABLE IF NOT EXISTS studentlectures ("
                   "lecture integer,"
                   "owner text,"
                   "FOREIGN KEY (lecture) REFERENCES lecture(lectureid))")
        ownidx = ("CREATE INDEX IF NOT EXISTS ownIndex"
                  " ON studentlectures (owner ASC)")
        self.connection.execute(tblstmt)
        self.connection.execute(ownidx)
        self.connection.commit()

    def add_lecture(self, lecture_id, owner):
        stmt = ("INSERT INTO studentlectures (lecture, owner)"
                " VALUES (?,?)")
        args = (lecture_id, owner)
        self.connection.execute(stmt, args)
        self.connection.commit()

    def delete_lecture(self, lecture_id, owner):
        stmt = ("DELETE FROM studentlectures"
                " WHERE lecture = (?)"
                " AND owner = (?)")
        args = (lecture_id, owner)
        self.connection.execute(stmt, args)
        self.connection.commit()

    def get_lecture_id(self, lecture_title):
        stmt = ("SELECT lectureid FROM lecture"
                " WHERE title = (?)")
        args = (lecture_title, )
        result = self.connection.execute(stmt, args).fetchone()
        print(result)
        if result:
            return int(result[0])
        else:
            return -1

    def get_studentlectures(self, owner):
        stmt = ("SELECT title FROM lecture"
                " INNER JOIN studentlectures"
                " ON studentlectures.lecture = lecture.lectureid"
                " WHERE studentlectures.owner = (?)")
        args = (owner, )
        return [x[0] for x in self.connection.execute(stmt, args)]

    def get_lectures(self):
        stmt = "SELECT title FROM lecture"
        return [x[0] for x in self.connection.execute(stmt)]
