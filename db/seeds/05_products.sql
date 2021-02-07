-- Product table seeds here (Example)

INSERT INTO products (user_id, name, date_added, is_complete)
VALUES
(1, 'Playstation 5', '2020-12-11', false),
(2, 'Carrot', '2021-02-05', true),
(3, 'Fitbit Versa 2', '2020-10-21', true),
(4, 'Apple MacBook Pro 2020', '2020-10-21', true),
(5, 'Ikea Fado', '2021-01-30', false);

GRANT SELECT, UPDATE, INSERT, UPDATE on products to labber;
