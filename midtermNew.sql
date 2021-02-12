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

ALTER TABLE ONLY public.items DROP CONSTRAINT items_user_id_fkey;
ALTER TABLE ONLY public.items DROP CONSTRAINT items_category_id_fkey;
ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
ALTER TABLE ONLY public.items DROP CONSTRAINT items_pkey;
ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.items ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE public.users_id_seq;
DROP TABLE public.users;
DROP SEQUENCE public.items_id_seq;
DROP TABLE public.items;
DROP SEQUENCE public.categories_id_seq;
DROP TABLE public.categories;
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
-- Name: categories; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE categories OWNER TO vagrant;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE categories_id_seq OWNER TO vagrant;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE categories_id_seq OWNED BY categories.id;


--
-- Name: items; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE items (
    id integer NOT NULL,
    category_id integer,
    user_id integer,
    name character varying(255) NOT NULL,
    date_added date NOT NULL
);


ALTER TABLE items OWNER TO vagrant;

--
-- Name: items_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE items_id_seq OWNER TO vagrant;

--
-- Name: items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE items_id_seq OWNED BY items.id;


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

ALTER TABLE ONLY categories ALTER COLUMN id SET DEFAULT nextval('categories_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY items ALTER COLUMN id SET DEFAULT nextval('items_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY categories (id, name) FROM stdin;
1	books
2	movies
3	restaurants
4	product
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('categories_id_seq', 4, true);


--
-- Data for Name: items; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY items (id, category_id, user_id, name, date_added) FROM stdin;
1	1	20	Mandatory encompassing analyzer	2020-05-07
2	1	21	Focused contextually-based hub	2020-08-02
3	1	29	Stand-alone optimal array	2020-02-22
4	1	10	Reverse-engineered neutral help-desk	2020-03-17
5	1	2	Object-based impactful migration	2020-10-11
7	1	8	Profit-focused scalable architecture	2020-10-19
8	1	27	Business-focused encompassing moratorium	2020-07-06
9	1	7	Phased full-range customer loyalty	2021-01-15
10	1	16	Versatile reciprocal ability	2020-07-31
11	1	8	Up-sized intangible support	2020-07-23
12	1	20	Assimilated web-enabled structure	2020-05-07
13	1	9	Persevering bi-directional synergy	2020-11-14
14	1	2	Proactive needs-based benchmark	2021-02-02
15	1	6	Configurable directional array	2020-11-16
16	1	9	Exclusive didactic software	2020-09-05
17	1	5	Multi-lateral zero defect internet solution	2020-04-19
18	1	1	Cross-platform executive budgetary management	2020-09-17
19	1	23	Persistent 24 hour frame	2020-12-31
20	1	9	Optimized reciprocal pricing structure	2020-06-04
21	1	5	Cross-platform discrete frame	2020-05-20
22	1	24	Profit-focused 6th generation interface	2020-05-02
23	1	26	Function-based explicit functionalities	2020-04-19
24	1	22	Polarised tangible adapter	2020-09-03
25	1	1	Networked holistic structure	2020-07-15
26	1	13	Ameliorated 6th generation contingency	2020-10-29
27	1	28	Progressive human-resource encryption	2020-04-19
28	1	14	Secured systemic emulation	2020-06-15
29	1	27	Devolved systematic matrix	2020-12-13
30	1	8	Persistent foreground system engine	2020-06-16
31	1	16	Enhanced real-time Graphical User Interface	2020-03-20
32	1	7	Adaptive directional paradigm	2020-12-17
33	2	16	Buddies (Colegas)	2020-09-01
34	2	2	Albatross	2020-11-21
35	2	10	Cochochi	2021-01-04
36	2	29	Action Jackson	2020-08-13
37	2	2	Visions of Europe	2020-11-16
38	2	28	The Missouri Breaks	2020-09-03
39	2	6	Armageddon (Armaguedon)	2020-12-24
40	2	6	Good Work (Beau travail)	2020-05-21
41	2	20	Capital (Le capital)	2020-07-16
42	2	29	Mighty, The	2020-04-21
43	2	25	Chad Hanna	2021-01-14
44	2	19	Ex-Girlfriends	2020-09-07
45	2	24	It Might Get Loud	2021-01-20
46	2	29	Triumph of the Nerds, The: The Rise of Accidental Empires	2020-09-02
47	2	5	Cialo	2020-05-09
48	2	21	Lust for Life	2020-06-30
49	2	4	Baby Geniuses	2020-07-12
51	2	27	Second Chorus	2020-12-02
52	2	13	Madame Bovary	2020-02-27
53	2	25	King of the Jungle	2020-03-07
54	2	28	Attack on the Iron Coast	2020-11-15
55	2	17	Clockwatchers	2021-01-03
56	2	8	President's Man: A Line in the Sand, The	2020-10-09
57	2	2	Delicate Balance, A	2020-09-24
58	2	27	Page Miss Glory	2020-06-13
59	3	2	Arbys	2020-04-21
60	3	3	Maenam	2020-02-21
61	3	4	Kingyo Izakaya	2020-04-28
62	3	5	Golden Paramount Seafood Restaurant	2020-02-12
63	3	6	Le Cinq	2021-01-01
64	3	7	Pujol	2020-06-29
65	3	8	SantoPalato	2020-08-30
66	3	9	Burger King	2020-02-19
67	3	10	Wings	2020-08-14
68	3	21	Baton Rouge	2020-08-22
69	3	12	Chick-Fil-A	2020-12-31
70	3	13	Churchs Chicken	2020-04-20
71	3	14	Cora	2020-03-27
72	3	15	Dennys	2020-05-16
73	3	1	Dominos Pizza	2021-01-19
74	3	2	Costa Coffee	2020-02-29
75	3	3	Dairy Queen	2020-02-10
76	3	4	Five Guys	2020-03-28
77	3	5	Hooters	2020-02-09
78	3	6	IHOP	2020-11-29
79	3	7	Harveys	2020-03-17
80	3	8	Hard Rock Cafe	2020-09-05
81	3	9	The Keg	2020-11-26
82	3	10	Krispy Kreme	2020-09-24
83	3	19	Juan	2020-10-13
84	3	12	Little Casesars	2020-02-11
85	3	13	KFC	2020-10-10
86	3	14	Marrybrown	2020-07-01
87	3	15	Nandos	2020-10-03
88	3	16	Olive Garden	2020-09-25
89	3	17	Panda Express	2020-10-17
90	3	18	Outback Steakhouse	2020-04-08
91	3	19	Papa Johns Pizza	2020-07-23
92	3	20	Paris Baguette	2020-08-21
93	3	21	Pizza Hut	2020-12-07
94	3	23	Popeyes	2020-12-07
95	3	12	Quiznos	2020-11-15
96	3	5	Mercantes	2020-07-27
97	3	23	Pizza Express	2020-07-19
98	3	5	Pho Express	2020-03-16
99	3	21	Earls	2020-02-27
100	3	20	Tim Hortons	2020-05-15
101	3	29	Danbo	2020-11-27
102	3	2	Green Leaf	2020-07-11
103	3	4	Sushi Mori	2020-04-15
104	3	10	Subway	2021-01-21
105	3	23	Kurry Up	2020-03-29
106	3	12	Sushi California	2020-05-05
107	3	10	Stephos	2020-10-04
108	3	3	Cactus Club	2020-08-09
109	3	23	Saku	2020-05-11
110	4	1	Playstation 5	2020-04-10
111	4	11	Carrot	2020-12-27
112	4	5	Fitbit Versa 2	2020-05-11
113	4	5	Apple MacBook Pro 2020	2020-04-07
114	4	12	Ikea Fado	2020-04-23
115	4	23	Stuffed Animal	2020-04-05
117	4	18	Toilet Paper	2020-09-22
118	4	9	Planner	2020-07-05
119	4	4	Mac Keyboard Polynesia	2020-10-09
120	4	5	Snowboard	2020-11-14
121	4	3	Mirror	2020-12-21
122	4	13	Nintendo	2020-11-23
123	4	15	iPhone 12 Territory	2020-10-27
124	4	16	Postcards	2021-01-14
125	4	18	Stamps	2020-02-18
126	4	21	Boots	2020-08-01
127	4	1	Runners	2020-11-30
128	4	2	Dog	2020-11-28
129	4	28	Cat	2020-03-21
130	4	6	Bike	2020-07-18
131	4	28	Skateboard	2020-03-07
132	4	29	Skis	2020-08-12
133	4	16	Volleyball	2020-12-05
134	4	15	Soccer Ball	2020-07-01
135	4	14	Basketball	2020-03-16
136	4	13	Tennis Shoes	2020-05-24
137	4	12	Goalie gloves	2020-08-23
138	4	11	Yoga Mat	2020-07-06
139	4	10	Flannel	2020-12-04
140	4	9	Dell Monitor	2021-01-31
141	4	8	Gaming Chair	2020-05-05
142	4	7	Foam Roller	2020-05-02
143	4	6	Thick Socks	2020-07-31
144	4	5	Air Fryer	2020-07-29
145	4	4	Vacuum	2020-02-11
146	4	3	Pillows	2020-02-24
147	4	2	Medical masks	2020-08-19
148	4	1	Lipstick	2020-11-02
\.


--
-- Name: items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('items_id_seq', 148, true);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY users (id, name, email, password) FROM stdin;
1	Astrid Pendreigh	apendreigh0@lulu.com	QwOs1c6N82b
2	Ev Bazire	ebazire1@technorati.com	GRlePERPWyZX
3	Alf Crump	acrump2@icq.com	HOcNplC
4	Xymenes Davidavidovics	xdavidavidovics3@time.com	k7EIgHwvNf
5	Georgy Razoux	grazoux4@uiuc.edu	LwpD9FsQE
6	Coral Fisbburne	cfisbburne5@jugem.jp	tcSoe6krho
7	Valina Lafflin	vlafflin6@salon.com	TGjvclf9H
8	Sean Derill	sderill7@sina.com.cn	iV8AaN6GLu
9	Brendin Hammerton	bhammerton8@twitpic.com	tYJit97zMV7
10	Ev Savin	esavin9@storify.com	0lv3fzvBEcMK
11	Holli Krinks	hkrinksa@rediff.com	dhPwaNe6jI
12	Torin Zmitrichenko	tzmitrichenkob@fc2.com	dxuo5ay
13	Pamelina Dasent	pdasentc@tripod.com	eUzWaaK
14	Amery Suttie	asuttied@qq.com	OOiUM9OzrJco
15	Frieda Gonnely	fgonnelye@hexun.com	nusk0r
16	Cortney Rangle	cranglef@si.edu	svGbL9iyhv
17	Pauletta Burgher	pburgherg@mapy.cz	NZNc6bZo3UHt
18	Sheba Mullender	smullenderh@sbwire.com	YFi2Zne0RD
19	Dani Franciottoi	dfranciottoii@drupal.org	9UazfN3Ny
20	Verene Billham	vbillhamj@epa.gov	Z77QML
21	Hilton McWhinnie	hmcwhinniek@ifeng.com	sjzaqdmf
22	Brynne Battersby	bbattersbyl@smh.com.au	hDV2Top
23	Grantley Stealy	gstealym@furl.net	okg8yJ2K9eM
24	Cort Searchfield	csearchfieldn@multiply.com	eXvjezs
25	Alta Kondratovich	akondratovicho@rambler.ru	1ero8YV
26	Denney Beaman	dbeamanp@webeden.co.uk	miii8GZq
27	Callida Corrao	ccorraoq@omniture.com	GcdV4iY7Pgti
28	Suki Blackster	sblacksterr@smh.com.au	v3f7kF6mo
29	Perla Darben	pdarbens@hugedomains.com	S05PPd6R
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('users_id_seq', 29, true);


--
-- Name: categories_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: items_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY items
    ADD CONSTRAINT items_pkey PRIMARY KEY (id);


--
-- Name: users_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: items_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY items
    ADD CONSTRAINT items_category_id_fkey FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE;


--
-- Name: items_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY items
    ADD CONSTRAINT items_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: users; Type: ACL; Schema: public; Owner: vagrant
--

REVOKE ALL ON TABLE users FROM PUBLIC;
REVOKE ALL ON TABLE users FROM vagrant;
GRANT ALL ON TABLE users TO vagrant;
GRANT SELECT,INSERT,UPDATE ON TABLE users TO labber;


--
-- PostgreSQL database dump complete
--

