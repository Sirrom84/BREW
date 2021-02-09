--Restaurant table seeds here

INSERT INTO restaurants (user_id, name, date_added, city, address, is_complete)
VALUES (1, 'Maenam', '2020-01-02', 'Vancouver', '1938 W 4th Ave', true),
(2, 'Kingyo Izakaya', '2021-02-02', 'Vancouver', '871 Denman St', true),
(3, 'Golden Paramount Seafood Restaurant', '2019-02-02', 'Richmond',  '8071 Park Rd', false),
(4, 'Le Cinq', '2019-09-12', 'Paris', '31 Avenue George V', false),
(4, 'Pujol', '2020-01-02', 'Mexico City', 'Tennyson 133', true),
(5, 'SantoPalato ', '2019-01-02', 'Roma', 'Pizza Tarquinia', false)

GRANT SELECT, UPDATE, INSERT, UPDATE on restaurants to labber;
