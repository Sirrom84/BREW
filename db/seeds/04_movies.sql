--Movie table seeds here

INSERT INTO movies (user_id, title, date_added, is_complete)
VALUES (1, 'The Godfather', '2018-10-01', true),
 (3, 'Raiders of the Lost Ark', '2020-05-15', false),
 (3, 'La Dolce Vita', '2021-01-15', true),
 (2, 'In the Mood for Love', '2020-01-15', true),
 (2, 'Top Gun', '2019-01-15', false);

GRANT SELECT, UPDATE, INSERT, UPDATE on movies to labber;
