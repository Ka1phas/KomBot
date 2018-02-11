import sqlite3

class DBManager:
    def __init__(self, dbname="knowledge.db"):
        self.dbname = dbname;
        self.connection = sqlite3.connect(dbname)
        
    def setup_timetable(self):
        stmt = "CREATE TABLE IF NOT EXISTS studentlectures (lecture integer, owner text, FOREIGN KEY (lecture) REFERENCES lecture(lectureid))"
        self.connection.execute(stmt)
        self.connection.commit()
        
    def add_lecture(self, lecture_id, owner):
        stmt = "INSERT INTO studentlectures (lecture, owner) VALUES (?,?)"
        args = (lecture_id, owner)
        self.connection.execute(stmt, args)
        self.connection.commit()
        
    def delete_lecture(self, lecture_id, owner):
        stmt = "DELETE FROM studentlectures WHERE lecture = (?) AND owner = (?)"
        args = (lecture_id, owner)
        self.connection.execute(stmt, args)
        self.connection.commit()
        
    def get_studentlectures(self, owner):
        stmt = "SELECT title FROM lecture INNER JOIN studentlectures ON studentlectures.lecture = lecture.lectureid WHERE studentlectures.owner = (?)"
        args = (owner, )
        return [x[0] for x in self.connection.execute(stmt, args)]