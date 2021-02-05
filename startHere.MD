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



