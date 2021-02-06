### Smart TODO List
When you are recommended something it's not always easy to jot it down for later in an organized fashion. Adding the item to your phone or computer ends up taking time and opening up the right app is only part of the problem. You then have to locate the right list ("Movies to watch", "Books to read", etc.) to add to. And if you do get it in to the right list, you don't have much more context about it. This delay and lack of additional information acts as a huge deterrent.

The solution? A smart, auto-categorizing todo list app. The user simply has to add the name of the thing, and it gets put into the correct list.

Requirements:
Each todo created should be categorized as one of:

Film / Series (To watch)
Restaurants, cafes, etc. (To eat)
Books (To read)
Products (To buy)

In order to determine the category the app will probably need to use various API services such as those offered by Google, Wolfram Alpha, Rotten Tomatoes, Amazon, Yelp and others.

API services mentioned above are only suggestions. You will have to investigate how to balance the accurate categorization of items with having to deal with multiple API endpoints.

Users should be able to change a category of an item in case it was mis-categorized or could not be categorized at all.

Users should be able to register, log in, log out and update their profile.



### User Stories

As a user, I want to be able to easily add items to my customized lists because its easy.
As a user, I want to be able to create new categories because my items might not fit into the existing ones.
As a user, Id like my app to easily sort this information.
As a user, I want to share my lists with others.


As a user, I want to be able to save posts, because I want to review them later.

User stories can also be negated: As a __, I shouldn't be able to _, because ___.


As a user, I shouldn't be able to edit other users posts, because I don't own those posts.


## User Scenarios

#;# @Home Page

Displays:
1. User's list
2. Search Box
3. Footer with add, home, user buttons/icons

Functions:
1. When you enter a new item in the search box, it will auto-categorize into the appropriate list.
2. When you click a list, it shows the full list (along with dates added)
3. When you click the plus icon, you can add a new list and give it a name
4. When you click user, you can see the users profile (picture, name, email)

## @List Page

Display:
1. All items in the list with a checkbox and the date it was added
2. Footer with add, home, user buttons/icons

General Functions:
1. When you click __, you can edit or delete items in the list
2. When you click the star, you can favourite and keep the item at the top of the list ---- ?

**For Restaurant:
1. When you click the restaurant, it should direct the user to google maps to the restaurant

**For Films:
1. When you click the title, it should direct to ______

**For Books
1. When you click the title, it should direc to google shopping

**For Products
1. When you click the name, it should direct to google shopping

## APIS for items

When should we use API? --> when the user enters an item to the search box.

That item should filter through the APIs and return the list that it matches.

** Restaurants **

input: text (ex. name of restaurant)

using two step api:

1. find place: takes a text (string) input and returns a place in JSON
-- requires: key, input, inputtype

find place: https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters

2. place details: takes in place_id from find place and returns details of the place in JSON

place details: https://maps.googleapis.com/maps/api/place/details/output?parameters

(source: https://developers.google.com/places/web-service/details)

3. OPTIONAL: directions

** Products **



** Books **

source: google books (https://developers.google.com/books/docs/overview)




## Databases

Table 1: Users
id (PK)
name
email
password

Table 2: Film
id (PK)
user_id (FK)
title
date_added
is_completed

Table 3: Resturants
id (PK)
user_id (FK)
name
date_added
city
address
is_completed

Table 4: Books
id (PK)
user_id (FK)
title
author
date_added
is_completed

Table 5: Products
id (PK)
user_id (FK)
name
date_added
is_completed



