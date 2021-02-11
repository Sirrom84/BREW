--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.10
-- Dumped by pg_dump version 9.5.10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

ALTER TABLE ONLY public.books DROP CONSTRAINT books_user_id_fkey;
ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
ALTER TABLE ONLY public.restaurants DROP CONSTRAINT restaurants_pkey;
ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
ALTER TABLE ONLY public.movies DROP CONSTRAINT movies_pkey;
ALTER TABLE ONLY public.books DROP CONSTRAINT books_pkey;
ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.restaurants ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.movies ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.books ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE public.users_id_seq;
DROP TABLE public.users;
DROP SEQUENCE public.restaurants_id_seq;
DROP TABLE public.restaurants;
DROP SEQUENCE public.products_id_seq;
DROP TABLE public.products;
DROP SEQUENCE public.movies_id_seq;
DROP TABLE public.movies;
DROP SEQUENCE public.books_id_seq;
DROP TABLE public.books;
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: books; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE books (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    user_id integer,
    author character varying(255),
    date_added date,
    is_complete boolean
);


ALTER TABLE books OWNER TO vagrant;

--
-- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE books_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE books_id_seq OWNER TO vagrant;

--
-- Name: books_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE books_id_seq OWNED BY books.id;


--
-- Name: movies; Type: TABLE; Schema: public; Owner: labber
--

CREATE TABLE movies (
    id integer NOT NULL,
    user_id integer,
    title character varying(255) NOT NULL,
    date_added date,
    is_complete boolean
);


ALTER TABLE movies OWNER TO labber;

--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: labber
--

CREATE SEQUENCE movies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE movies_id_seq OWNER TO labber;

--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: labber
--

ALTER SEQUENCE movies_id_seq OWNED BY movies.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: labber
--

CREATE TABLE products (
    id integer NOT NULL,
    user_id integer,
    name character varying(255) NOT NULL,
    date_added date,
    is_complete boolean
);


ALTER TABLE products OWNER TO labber;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: labber
--

CREATE SEQUENCE products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE products_id_seq OWNER TO labber;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: labber
--

ALTER SEQUENCE products_id_seq OWNED BY products.id;


--
-- Name: restaurants; Type: TABLE; Schema: public; Owner: labber
--

CREATE TABLE restaurants (
    id integer NOT NULL,
    user_id integer,
    name character varying(255) NOT NULL,
    date_added date,
    city character varying(255),
    address character varying(255),
    is_complete boolean
);


ALTER TABLE restaurants OWNER TO labber;

--
-- Name: restaurants_id_seq; Type: SEQUENCE; Schema: public; Owner: labber
--

CREATE SEQUENCE restaurants_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE restaurants_id_seq OWNER TO labber;

--
-- Name: restaurants_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: labber
--

ALTER SEQUENCE restaurants_id_seq OWNED BY restaurants.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);


ALTER TABLE users OWNER TO vagrant;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_id_seq OWNER TO vagrant;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY books ALTER COLUMN id SET DEFAULT nextval('books_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: labber
--

ALTER TABLE ONLY movies ALTER COLUMN id SET DEFAULT nextval('movies_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: labber
--

ALTER TABLE ONLY products ALTER COLUMN id SET DEFAULT nextval('products_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: labber
--

ALTER TABLE ONLY restaurants ALTER COLUMN id SET DEFAULT nextval('restaurants_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY books (id, name, user_id, author, date_added, is_complete) FROM stdin;
\.


--
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('books_id_seq', 1, false);


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: labber
--

COPY movies (id, user_id, title, date_added, is_complete) FROM stdin;
1	26	King of the Ants	2020-07-15	\N
101	1	blah	2020-02-12	\N
3	22	Taming of the Shrew, The	2020-07-04	\N
4	6	Armed and Dangerous	2020-04-07	\N
5	28	Batman: Mask of the Phantasm	2020-08-07	\N
7	15	Hotline	2020-08-08	\N
9	29	Chronic Town	2020-10-12	\N
10	20	Universal Soldier	2021-02-01	\N
12	18	Sarafina!	2020-12-28	\N
14	28	Reservoir Dogs	2020-03-07	\N
16	15	Secret Life of Bees, The	2020-07-04	\N
18	17	Dungeonmaster, The	2020-05-14	\N
20	16	Heights	2020-09-16	\N
23	29	See No Evil	2021-01-16	\N
24	15	Mr. Wrong	2020-09-07	\N
25	12	Timerider: The Adventure of Lyle Swann	2020-06-11	\N
27	12	Air Hawks	2020-12-18	\N
28	21	BloodRayne: The Third Reich	2020-07-09	\N
30	15	Lightning Bolt: The Power of Salad	2020-03-28	\N
34	20	New Kind of Love, A	2020-10-18	\N
36	9	Defenders of Riga	2020-08-27	\N
44	26	Rated X	2020-11-26	\N
46	17	Get Over It	2020-06-23	\N
48	28	Mutant Chronicles	2020-10-05	\N
50	20	Juche Idea, The	2020-03-10	\N
65	22	Gayniggers From Outer Space	2020-04-06	\N
72	18	Charleston	2021-01-01	\N
73	15	Graveyard Shift (Stephen King's Graveyard Shift)	2020-03-08	\N
74	16	Frozen Fever	2020-07-15	\N
75	19	Piranhaconda	2020-12-08	\N
88	20	7th Voyage of Sinbad, The	2020-08-10	\N
90	23	Beetlejuice	2020-08-28	\N
94	20	Babbitt	2021-02-08	\N
96	15	Sherlock Holmes: The Woman in Green	2020-08-01	\N
97	29	She Hate Me	2020-06-01	\N
99	19	Waking Sleeping Beauty	2020-07-04	\N
\.


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: labber
--

SELECT pg_catalog.setval('movies_id_seq', 101, true);


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: labber
--

COPY products (id, user_id, name, date_added, is_complete) FROM stdin;
1	1	Playstation 5	2020-04-10	f
2	2	Carrot	2020-12-27	f
3	3	Fitbit Versa 2	2020-05-11	t
7	7	Water Bottle	2021-01-03	t
8	8	Toilet Paper	2020-09-22	t
9	9	Planner	2020-07-05	f
10	28	Mac Keyboard Polynesia	2020-10-09	f
11	3	Snowboard	2020-11-14	f
12	2	Mirror	2020-12-21	f
13	4	Nintendo	2020-11-23	f
14	5	iPhone 12 Territory	2020-10-27	f
16	7	Stamps	2020-02-18	f
17	8	Boots	2020-08-01	f
18	28	Runners	2020-11-30	f
19	9	Dog	2020-11-28	f
20	11	Cat	2020-03-21	t
21	12	Bike	2020-07-18	f
22	17	Skateboard	2020-03-07	t
23	17	Skis	2020-08-12	f
24	16	Volleyball	2020-12-05	t
25	18	Soccer Ball	2020-07-01	f
26	1	Basketball	2020-03-16	f
27	19	Tennis Shoes	2020-05-24	f
28	20	Goalie gloves	2020-08-23	t
29	21	Yoga Mat	2020-07-06	t
30	22	Flannel	2020-12-04	f
31	23	Dell Monitor	2021-01-31	t
32	24	Gaming Chair	2020-05-05	f
33	25	Foam Roller	2020-05-02	t
34	26	Thick Socks	2020-07-31	f
35	29	Air Fryer	2020-07-29	f
36	1	Vacuum	2020-02-11	f
37	25	Pillows	2020-02-24	t
38	1	Medical masks	2020-08-19	f
39	29	Lipstick	2020-11-02	f
\.


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: labber
--

SELECT pg_catalog.setval('products_id_seq', 39, true);


--
-- Data for Name: restaurants; Type: TABLE DATA; Schema: public; Owner: labber
--

COPY restaurants (id, user_id, name, date_added, city, address, is_complete) FROM stdin;
1	1	Applebees	2020-09-11	Puncan	\N	f
3	3	Maenam	2020-02-21	Vancouver	\N	t
7	7	Pujol	2020-06-29	Mexico City	\N	f
8	8	SantoPalato	2020-08-30	Roma	\N	f
9	9	Burger King	2020-02-19	Lamongan	\N	t
10	10	Wings	2020-08-14	Glotovka	\N	t
11	21	Baton Rouge	2020-08-22	Velké Hoštice	\N	t
12	12	Chick-Fil-A	2020-12-31	Guanzhuang	\N	t
13	13	Churchs Chicken	2020-04-20	Hodkovičky	\N	t
14	14	Cora	2020-03-27	Kunvald	\N	f
15	15	Dennys	2020-05-16	Lynchburg	\N	f
16	1	Dominos Pizza	2021-01-19	Stara Błotnica	\N	f
18	3	Dairy Queen	2020-02-10	Pereyaslovskaya	\N	t
19	4	Five Guys	2020-03-28	Kihurio	\N	t
20	5	Hooters	2020-02-09	Mata de São João	\N	f
22	7	Harveys	2020-03-17	Sofiyivka	\N	f
23	8	Hard Rock Cafe	2020-09-05	Campos Novos	\N	f
24	9	The Keg	2020-11-26	Ryczywół	\N	f
25	10	Krispy Kreme	2020-09-24	Mentoro Wetan	\N	f
26	19	Juan	2020-10-13	Otradnyy	\N	f
27	12	Little Casesars	2020-02-11	Almere Haven	\N	f
28	13	KFC	2020-10-10	Peuara	\N	t
29	14	Marrybrown	2020-07-01	Muranovo	\N	t
30	15	Nandos	2020-10-03	Buraen	\N	f
31	16	Olive Garden	2020-09-25	Hekou	\N	f
32	17	Panda Express	2020-10-17	Kose	\N	f
33	18	Outback Steakhouse	2020-04-08	Luoyang	\N	t
34	19	Papa Johns Pizza	2020-07-23	Trondheim	\N	t
35	20	Paris Baguette	2020-08-21	Kalbugan	\N	t
36	21	Pizza Hut	2020-12-07	Eusébio	\N	t
37	23	Popeyes	2020-12-07	Miguelópolis	\N	f
38	12	Quiznos	2020-11-15	Sirghāyā	\N	f
39	5	Mercantes	2020-07-27	Shashi	\N	t
40	23	Pizza Express	2020-07-19	Prakhon Chai	\N	f
42	21	Earls	2020-02-27	Kirkkonummi	\N	t
43	20	Tim Hortons	2020-05-15	Bundoc	\N	f
44	29	Danbo	2020-11-27	Guayabetal	\N	t
47	10	Subway	2021-01-21	Mölnlycke	\N	t
48	23	Kurry Up	2020-03-29	Dorotea	\N	f
49	12	Sushi California	2020-05-05	Lisovi Sorochyntsi	\N	t
50	10	Stephos	2020-10-04	Chaltyr	\N	t
51	3	Cactus Club	2020-08-09	Natakoli	\N	t
52	23	Saku	2020-05-11	Plalar	\N	f
53	22	McDonalds	2020-02-27	Dongxin	\N	f
54	20	A&W	2020-11-30	Opatowiec	\N	t
55	13	Coquitlam Grill	2020-11-29	Kīevka	\N	t
56	9	Miku	2020-09-27	Shalya	\N	t
57	9	Blue Water Cafe	2020-11-19	Buriwutung	\N	f
59	10	Forage	2021-02-03	Kalidawe	\N	f
60	27	Le Crocodile	2021-01-02	Ţammūn	\N	f
61	22	The Acorn Restaurant	2020-02-11	Zlaté Hory	\N	t
63	15	Nightingale	2020-10-23	Nyinqug	\N	t
64	21	Lupo	2020-07-01	Itacorubi	\N	t
65	27	Five Sails Restaurant	2020-03-13	Taiping	\N	f
66	20	St Lawrence	2020-03-26	Zlatni Pyasatsi	\N	t
\.


--
-- Name: restaurants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: labber
--

SELECT pg_catalog.setval('restaurants_id_seq', 66, true);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY users (id, name, email, password) FROM stdin;
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('users_id_seq', 1, false);


--
-- Name: books_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- Name: movies_pkey; Type: CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- Name: products_pkey; Type: CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: restaurants_pkey; Type: CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY restaurants
    ADD CONSTRAINT restaurants_pkey PRIMARY KEY (id);


--
-- Name: users_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: books_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY books
    ADD CONSTRAINT books_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: movies; Type: ACL; Schema: public; Owner: labber
--

REVOKE ALL ON TABLE movies FROM PUBLIC;
REVOKE ALL ON TABLE movies FROM labber;
GRANT ALL ON TABLE movies TO labber;


--
-- Name: products; Type: ACL; Schema: public; Owner: labber
--

REVOKE ALL ON TABLE products FROM PUBLIC;
REVOKE ALL ON TABLE products FROM labber;
GRANT ALL ON TABLE products TO labber;


--
-- Name: restaurants; Type: ACL; Schema: public; Owner: labber
--

REVOKE ALL ON TABLE restaurants FROM PUBLIC;
REVOKE ALL ON TABLE restaurants FROM labber;
GRANT ALL ON TABLE restaurants TO labber;


--
-- PostgreSQL database dump complete
--

