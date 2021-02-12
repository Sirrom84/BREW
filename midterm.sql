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

ALTER TABLE ONLY public.restaurants DROP CONSTRAINT restaurants_user_id_fkey;
ALTER TABLE ONLY public.products DROP CONSTRAINT products_user_id_fkey;
ALTER TABLE ONLY public.movies DROP CONSTRAINT movies_user_id_fkey;
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
    title character varying(255) NOT NULL,
    user_id integer,
    author character varying(255) NOT NULL,
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
-- Name: movies; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE movies (
    id integer NOT NULL,
    user_id integer,
    title character varying(255) NOT NULL,
    date_added date,
    is_complete boolean
);


ALTER TABLE movies OWNER TO vagrant;

--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE movies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE movies_id_seq OWNER TO vagrant;

--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE movies_id_seq OWNED BY movies.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE products (
    id integer NOT NULL,
    user_id integer,
    name character varying(255) NOT NULL,
    date_added date,
    is_complete boolean
);


ALTER TABLE products OWNER TO vagrant;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE products_id_seq OWNER TO vagrant;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE products_id_seq OWNED BY products.id;


--
-- Name: restaurants; Type: TABLE; Schema: public; Owner: vagrant
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


ALTER TABLE restaurants OWNER TO vagrant;

--
-- Name: restaurants_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE restaurants_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE restaurants_id_seq OWNER TO vagrant;

--
-- Name: restaurants_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
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
-- Name: id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY movies ALTER COLUMN id SET DEFAULT nextval('movies_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY products ALTER COLUMN id SET DEFAULT nextval('products_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY restaurants ALTER COLUMN id SET DEFAULT nextval('restaurants_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY books (id, title, user_id, author, date_added, is_complete) FROM stdin;
1	The Winds of Winter	1	Fakie Author	2021-01-01	f
2	Organic zero defect concept	7	Jaimie Ricardon	2020-02-23	t
3	Diverse cohesive help-desk	6	Celeste Grindell	2020-03-02	t
4	Synchronised analyzing adapter	3	Erma Benedtti	2020-10-28	f
5	Function-based stable strategy	29	Kermie Greave	2020-12-06	f
6	Secured optimal middleware	26	Lynnette Ellgood	2020-06-22	f
7	Right-sized multimedia functionalities	19	Skipton Fosten	2021-01-06	f
8	Quality-focused homogeneous analyzer	18	Mirabella Yitzhakof	2020-05-09	t
9	Universal client-driven alliance	3	Chanda Colbourn	2020-03-11	f
10	Open-source clear-thinking info-mediaries	17	Lemar Marval	2020-08-15	f
11	Assimilated well-modulated flexibility	12	Ronny Skermer	2020-10-12	t
12	Robust explicit artificial intelligence	25	Wheeler Pakeman	2020-06-02	t
13	Face to face disintermediate monitoring	8	Oralia Zanolli	2020-03-21	f
14	Persistent global portal	12	Brendin Jouanet	2020-05-21	t
15	Cloned asynchronous infrastructure	16	Mac Litterick	2020-10-26	f
16	Extended bifurcated info-mediaries	21	Meriel Hardan	2020-04-18	t
17	Integrated modular throughput	5	Montgomery Ashmore	2020-03-25	t
18	User-friendly local open architecture	5	Maire Herety	2020-07-03	t
19	Versatile global knowledge base	15	Murray Haglinton	2020-03-14	f
20	Implemented needs-based structure	23	Addie LaBastida	2020-07-19	t
21	Assimilated multi-state access	16	Louisa Lyddiard	2020-05-04	t
22	Streamlined solution-oriented moderator	19	Angelina Dowman	2020-06-01	t
23	Reduced asynchronous software	4	Bendicty McGibbon	2020-11-12	t
24	Self-enabling bottom-line help-desk	21	Ally Guppy	2020-06-20	t
26	Switchable multi-tasking collaboration	16	Goober Redgewell	2020-03-10	f
27	Self-enabling multi-tasking hierarchy	13	Issy Gorey	2020-09-15	f
28	Re-engineered multi-state circuit	23	Kermit Bindin	2020-08-29	f
29	Organic radical encoding	26	Isa Traher	2020-02-17	t
30	Mandatory heuristic approach	21	Rozanne Avrahamian	2021-01-28	t
31	Front-line interactive conglomeration	5	Emmerich Gayden	2020-09-13	t
32	Open-architected content-based secured line	1	Devland Santacrole	2020-03-18	t
33	Innovative discrete extranet	13	Jackelyn Bourke	2020-07-01	t
34	Distributed analyzing alliance	23	Coral Lawee	2020-04-03	t
35	Enterprise-wide homogeneous focus group	1	Valeda Damsell	2020-10-01	t
36	Down-sized optimal monitoring	6	Addie Farlow	2021-01-03	f
37	User-friendly neutral instruction set	22	Cristiano Maber	2020-06-17	t
38	Polarised intangible database	1	Cornela Rydzynski	2020-07-16	t
39	Operative web-enabled website	13	Karney de Zamora	2020-09-21	f
40	Realigned modular Graphical User Interface	13	Sloan Bertelet	2020-12-06	f
41	Future-proofed analyzing attitude	29	Rodrique Zambonini	2020-04-30	t
42	Triple-buffered content-based workforce	24	Olenka Worsnap	2020-10-12	t
43	User-centric actuating help-desk	4	Rupert Urlich	2020-02-17	f
44	Diverse bi-directional frame	15	Arvy Clelland	2020-08-18	f
45	Cloned bandwidth-monitored hardware	8	Karlie Steaning	2020-10-07	f
46	Monitored analyzing collaboration	13	Mycah Sapir	2021-02-04	f
47	Cross-platform secondary initiative	28	Petronia Orrock	2020-03-27	t
48	Re-contextualized tertiary ability	24	Lorette Pulver	2021-02-06	f
49	Ameliorated modular core	22	Rosina Skinley	2020-04-14	t
50	Open-architected web-enabled definition	22	Cchaddie Pentelo	2021-02-05	f
51	Re-contextualized stable structure	4	Lib Hallums	2020-07-27	f
52	Networked high-level hardware	24	Meagan Eeles	2020-02-24	t
53	Decentralized asymmetric pricing structure	27	Abel Fareweather	2020-03-01	f
54	User-friendly needs-based archive	11	Dimitri Klaggeman	2020-08-19	t
55	Networked directional system engine	3	Freddi Bridle	2020-07-09	t
56	Phased 4th generation budgetary management	2	Loralie Ruppele	2020-10-20	t
57	Synergized object-oriented info-mediaries	21	Gay Syde	2020-05-17	f
58	Visionary solution-oriented workforce	22	Lorie Ohrtmann	2020-07-30	f
59	Business-focused zero tolerance hardware	24	Natasha Hallgath	2020-08-23	f
60	Configurable national throughput	15	Casey Dufaire	2020-07-24	f
61	Face to face methodical infrastructure	23	Bobbie Hedger	2020-07-28	f
62	Streamlined cohesive frame	19	Jesus Gedney	2021-01-14	t
63	Public-key asymmetric algorithm	5	Allyce Gorringe	2020-06-24	f
64	Team-oriented 24/7 website	15	Flynn Naris	2020-04-14	t
65	Front-line fault-tolerant orchestration	23	Enrique Motherwell	2020-04-09	f
67	Optimized 5th generation encoding	6	Mireille Flaunders	2020-10-20	f
68	Right-sized system-worthy strategy	13	Chaunce Haworth	2020-08-21	t
69	Versatile scalable orchestration	24	Laurianne Pardie	2020-11-20	f
70	Inverse secondary collaboration	7	Warden Maplesden	2020-04-07	f
71	Business-focused attitude-oriented structure	1	Melba Polamontayne	2021-01-19	f
72	Versatile mission-critical matrix	5	Margarethe Robjant	2020-10-28	t
73	Public-key global approach	3	Lani Mayer	2020-08-10	f
74	Right-sized motivating local area network	10	Ursa Younghusband	2020-03-13	t
75	Centralized encompassing standardization	21	Barbra Prettyjohn	2020-08-17	t
76	Digitized regional info-mediaries	6	Riane Larking	2020-09-03	t
77	Universal web-enabled array	25	Karlis Baress	2020-02-23	f
78	Exclusive holistic open system	5	Ingrid Carhart	2020-06-04	f
79	Devolved regional focus group	14	Torrey Blackey	2020-10-11	f
80	Intuitive attitude-oriented toolset	13	Simonne Arbuckel	2020-09-08	f
81	Optimized clear-thinking alliance	10	Andreana McClymond	2020-05-15	f
82	Sharable logistical artificial intelligence	18	Aurora Turbitt	2020-07-24	t
83	Switchable uniform leverage	7	Orazio Bisseker	2020-08-12	f
84	Proactive human-resource budgetary management	7	Rollins Soppit	2021-02-08	t
85	Decentralized fault-tolerant system engine	14	Maris Cotesford	2020-06-04	f
86	Advanced fault-tolerant monitoring	13	Camila Meni	2020-07-06	t
87	Universal well-modulated ability	3	Garik Barizeret	2020-05-19	f
88	Virtual system-worthy system engine	4	Gabby Najara	2020-12-06	t
89	Centralized full-range Graphic Interface	7	Dante Tait	2020-10-16	t
90	Balanced multi-state core	5	Oralia Soggee	2020-08-12	f
91	Universal optimizing circuit	15	Jerrylee Valiant	2020-04-24	f
92	Pre-emptive national access	17	Kerwinn Kamen	2020-08-06	f
93	Virtual transitional intranet	2	Beulah Kenen	2020-04-12	f
94	Diverse empowering functionalities	25	Kara Gosney	2020-03-15	t
95	Mandatory neutral superstructure	7	Mikael Bunclark	2020-09-02	f
96	Innovative exuding contingency	25	Ardelle Gimenez	2020-05-22	f
97	Open-source systematic focus group	1	Jerrie Lorincz	2020-02-13	t
98	Organized homogeneous matrices	26	Thelma Creegan	2020-08-15	f
99	Seamless fresh-thinking middleware	29	Georg Smellie	2021-01-22	t
100	Streamlined analyzing architecture	28	Heath Almon	2020-05-28	f
\.


--
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('books_id_seq', 100, true);


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY movies (id, user_id, title, date_added, is_complete) FROM stdin;
1	26	King of the Ants	2020-07-15	\N
2	10	Clint Eastwood: Out of the Shadows	2020-09-01	\N
3	22	Taming of the Shrew, The	2020-07-04	\N
4	6	Armed and Dangerous	2020-04-07	\N
5	28	Batman: Mask of the Phantasm	2020-08-07	\N
6	23	Player's Club, The	2020-05-13	\N
7	15	Hotline	2020-08-08	\N
8	14	Mindwalk	2020-05-13	\N
9	29	Chronic Town	2020-10-12	\N
10	20	Universal Soldier	2021-02-01	\N
11	15	Thrilla in Manila	2020-11-02	\N
12	18	Sarafina!	2020-12-28	\N
13	2	Primary Colors	2020-04-15	\N
14	28	Reservoir Dogs	2020-03-07	\N
15	25	Kleines Arschloch - Der Film	2020-09-27	\N
16	15	Secret Life of Bees, The	2020-07-04	\N
17	27	Guide to Recognizing Your Saints, A	2020-12-17	\N
18	17	Dungeonmaster, The	2020-05-14	\N
19	15	Bitch, The (La chienne)	2020-12-28	\N
20	16	Heights	2020-09-16	\N
21	27	Delivery, The	2020-09-16	\N
22	23	Brigham City	2021-01-03	\N
23	29	See No Evil	2021-01-16	\N
24	15	Mr. Wrong	2020-09-07	\N
25	12	Timerider: The Adventure of Lyle Swann	2020-06-11	\N
26	26	None But the Lonely Heart	2020-05-17	\N
27	12	Air Hawks	2020-12-18	\N
28	21	BloodRayne: The Third Reich	2020-07-09	\N
30	15	Lightning Bolt: The Power of Salad	2020-03-28	\N
31	13	Andy Hardy's Blonde Trouble	2020-10-03	\N
32	9	Katyn	2020-04-23	\N
33	13	Decalogue, The (Dekalog)	2020-12-15	\N
34	20	New Kind of Love, A	2020-10-18	\N
35	11	Theodore Rex	2020-10-27	\N
36	9	Defenders of Riga	2020-08-27	\N
37	15	Ilo Ilo	2020-12-22	\N
38	24	India Song	2020-06-14	\N
40	3	Order, The	2020-11-08	\N
41	4	The Ghosts in Our Machine	2020-10-30	\N
42	24	OSS 117: Cairo, Nest of Spies (OSS 117: Le Caire nid d'espions)	2020-08-13	\N
43	6	Powerpuff Girls, The	2020-06-09	\N
44	26	Rated X	2020-11-26	\N
45	3	Gotcha!	2020-03-25	\N
46	17	Get Over It	2020-06-23	\N
47	27	Bomb the System	2020-03-13	\N
48	28	Mutant Chronicles	2020-10-05	\N
49	9	John Garfield Story, The	2021-01-01	\N
50	20	Juche Idea, The	2020-03-10	\N
51	10	Abbott and Costello in Hollywood	2020-07-14	\N
52	25	Come and See (Idi i smotri)	2020-05-31	\N
53	24	Nightwatch (Nattevagten)	2021-01-29	\N
54	23	Four Days of Naples, The (Le quattro giornate di Napoli)	2020-10-22	\N
55	10	Diminished Capacity	2020-09-09	\N
56	23	Proposition, The	2020-02-27	\N
57	25	Lucy	2020-02-14	\N
58	5	Life Less Ordinary, A	2020-08-08	\N
59	7	Flame and Women (Honô to onna) 	2020-09-13	\N
60	2	Rocky Saga: Going the Distance, The	2020-04-25	\N
61	1	Repo Men	2020-06-13	\N
62	25	Night of the Demons 2	2020-12-05	\N
63	26	Romance on the High Seas	2020-07-21	\N
64	6	Cookers	2020-05-15	\N
65	22	Gayniggers From Outer Space	2020-04-06	\N
66	24	Empty Nest (El nido vacío)	2020-05-14	\N
67	27	Westfront 1918	2020-02-12	\N
68	10	Loveless, The (Breakdown)	2020-03-23	\N
69	3	Blood Trails 	2020-05-26	\N
70	27	Jumping the Broom	2020-11-23	\N
71	11	Alexander's Ragtime Band	2021-01-28	\N
72	18	Charleston	2021-01-01	\N
73	15	Graveyard Shift (Stephen King's Graveyard Shift)	2020-03-08	\N
74	16	Frozen Fever	2020-07-15	\N
75	19	Piranhaconda	2020-12-08	\N
76	7	K-11	2021-01-24	\N
77	24	After the Thin Man	2020-03-08	\N
78	27	Wedding Date, The	2021-01-08	\N
79	24	Dakota	2020-06-08	\N
80	5	Mina Tannenbaum	2021-01-27	\N
81	11	Anna Christie	2020-11-07	\N
82	27	Midnight Chronicles	2020-05-06	\N
83	10	Lovers of Hate	2020-12-30	\N
84	10	All the Pretty Horses	2020-05-18	\N
85	11	Breakfast at Tiffany's	2020-11-23	\N
86	2	Timeline	2020-08-06	\N
87	14	Meatballs 4	2021-01-21	\N
88	20	7th Voyage of Sinbad, The	2020-08-10	\N
89	11	From Time to Time	2021-01-25	\N
90	23	Beetlejuice	2020-08-28	\N
91	3	Werewolf of London	2020-07-29	\N
92	7	Charleston	2021-01-13	\N
93	25	Whistle Blower, The	2020-08-31	\N
94	20	Babbitt	2021-02-08	\N
95	5	Green Light	2020-09-19	\N
96	15	Sherlock Holmes: The Woman in Green	2020-08-01	\N
97	29	She Hate Me	2020-06-01	\N
98	13	Confidence	2020-05-08	\N
99	19	Waking Sleeping Beauty	2020-07-04	\N
100	10	Mifune's Last Song (Mifunes sidste sang)	2020-12-03	\N
\.


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('movies_id_seq', 100, true);


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY products (id, user_id, name, date_added, is_complete) FROM stdin;
1	1	Playstation 5	2020-04-10	f
2	2	Carrot	2020-12-27	f
3	3	Fitbit Versa 2	2020-05-11	t
4	4	Apple MacBook Pro 2020	2020-04-07	f
5	5	Ikea Fado	2020-04-23	t
6	6	Stuffed Animal	2020-04-05	t
7	7	Water Bottle	2021-01-03	t
8	8	Toilet Paper	2020-09-22	t
9	9	Planner	2020-07-05	f
10	28	Mac Keyboard Polynesia	2020-10-09	f
11	3	Snowboard	2020-11-14	f
12	2	Mirror	2020-12-21	f
13	4	Nintendo	2020-11-23	f
14	5	iPhone 12 Territory	2020-10-27	f
15	6	Postcards	2021-01-14	f
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
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('products_id_seq', 39, true);


--
-- Data for Name: restaurants; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY restaurants (id, user_id, name, date_added, city, address, is_complete) FROM stdin;
1	1	Applebees	2020-09-11	Puncan	\N	f
2	2	Arbys	2020-04-21	Xin’an	\N	f
3	3	Maenam	2020-02-21	Vancouver	\N	t
4	4	Kingyo Izakaya	2020-04-28	Vancouver	\N	f
5	5	Golden Paramount Seafood Restaurant	2020-02-12	Richmond	\N	t
6	6	Le Cinq	2021-01-01	Paris	\N	f
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
17	2	Costa Coffee	2020-02-29	Kaiapoi	\N	f
18	3	Dairy Queen	2020-02-10	Pereyaslovskaya	\N	t
19	4	Five Guys	2020-03-28	Kihurio	\N	t
20	5	Hooters	2020-02-09	Mata de São João	\N	f
21	6	IHOP	2020-11-29	Asempapan	\N	f
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
41	5	Pho Express	2020-03-16	Nhà Bè	\N	t
42	21	Earls	2020-02-27	Kirkkonummi	\N	t
43	20	Tim Hortons	2020-05-15	Bundoc	\N	f
44	29	Danbo	2020-11-27	Guayabetal	\N	t
45	2	Green Leaf	2020-07-11	Coelho Neto	\N	t
46	4	Sushi Mori	2020-04-15	Owerri	\N	f
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
58	2	AnnaLena	2020-12-08	Krzeszów	\N	f
59	10	Forage	2021-02-03	Kalidawe	\N	f
60	27	Le Crocodile	2021-01-02	Ţammūn	\N	f
61	22	The Acorn Restaurant	2020-02-11	Zlaté Hory	\N	t
62	6	Carderos	2020-11-12	Dubki	\N	t
63	15	Nightingale	2020-10-23	Nyinqug	\N	t
64	21	Lupo	2020-07-01	Itacorubi	\N	t
65	27	Five Sails Restaurant	2020-03-13	Taiping	\N	f
66	20	St Lawrence	2020-03-26	Zlatni Pyasatsi	\N	t
\.


--
-- Name: restaurants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('restaurants_id_seq', 66, true);


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
-- Name: books_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- Name: movies_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- Name: products_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: restaurants_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
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
-- Name: movies_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY movies
    ADD CONSTRAINT movies_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: products_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY products
    ADD CONSTRAINT products_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: restaurants_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY restaurants
    ADD CONSTRAINT restaurants_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: books; Type: ACL; Schema: public; Owner: vagrant
--

REVOKE ALL ON TABLE books FROM PUBLIC;
REVOKE ALL ON TABLE books FROM vagrant;
GRANT ALL ON TABLE books TO vagrant;
GRANT SELECT,INSERT,UPDATE ON TABLE books TO labber;


--
-- Name: movies; Type: ACL; Schema: public; Owner: vagrant
--

REVOKE ALL ON TABLE movies FROM PUBLIC;
REVOKE ALL ON TABLE movies FROM vagrant;
GRANT ALL ON TABLE movies TO vagrant;
GRANT SELECT,INSERT,UPDATE ON TABLE movies TO labber;


--
-- Name: products; Type: ACL; Schema: public; Owner: vagrant
--

REVOKE ALL ON TABLE products FROM PUBLIC;
REVOKE ALL ON TABLE products FROM vagrant;
GRANT ALL ON TABLE products TO vagrant;
GRANT SELECT,INSERT,UPDATE ON TABLE products TO labber;


--
-- Name: restaurants; Type: ACL; Schema: public; Owner: vagrant
--

REVOKE ALL ON TABLE restaurants FROM PUBLIC;
REVOKE ALL ON TABLE restaurants FROM vagrant;
GRANT ALL ON TABLE restaurants TO vagrant;
GRANT SELECT,INSERT,UPDATE ON TABLE restaurants TO labber;


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

