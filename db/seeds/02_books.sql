-- books table seeds here (Example)

INSERT INTO books (title, user_id, author, date_added, is_complete)
VALUES ('The Winds of Winter', 1, 'Fakie Author', '2021-01-01', FALSE);
INSERT INTO books (title, user_id, author, date_added, is_complete) VALUES ( 'Harry Potter', 1, 'J.K Rowling', '2020-10-10', FALSE);
INSERT INTO books (title, user_id, author, date_added, is_complete) VALUES ( 'Bearings', 3, 'Bob Joe', '2021-01-01', FALSE);

GRANT SELECT, UPDATE, INSERT, UPDATE on books to labber;