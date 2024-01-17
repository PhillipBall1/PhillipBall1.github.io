# The Leaf Lounge

### Author: Phillip Ball
### Occupation: Senior in College

|Link| Where To|
|--|--|
|[Technologies](#technologies-used)|The technologies I used for the development of this full-stack website|
|[Log](#developer-log)|Developer log for dates of when components of the website was added or changed|
|[To-Do](#to-do)|Changes I need to make or plans for future components|

## Project  Overview

Welcome to my full-stack website project. The main objective of this website is to show the practical skills I have learned over the years as a programmer. This is a showcase of an application that can be applied to the real-world. I created the front-end and back-end all by myself and this project started on 12/13/23.

### The Significance of This Project

This project is a major milestone for me as it goes beyond what I was doing as a personal hobby, giving practical value and application. This full-stack website demonstrates my dedication to conceptualize ideas and successfully implement them. This is a combination of my front-end and back-end skills as a software engineer. 

### Looking Ahead

While this project demonstrates my current position as a software engineer, it points towards where I want to be. I am extremely committed to learning new skills and enhancing them, I knew nothing about MongoDB and that is the main reason I used it in this project. I am always ready to explore new technologies and innovative approaches to programming. 

### Thank You

### Technologies Used

[Back To Top](#the-leaf-lounge)

|Technologies| Use |
|---|---|
|Angular CLI| Used angular for the whole front-end framework
| REST API| Used for all of my back-end operations along with express
|MongoDB| Used for my database, I usually use MySQL, I just wanted to learn Mongo|
|Github Pages| Used to host my page because Github is nice and free|
|Heroku| Used to host my API, it is only $7 or less per month, can't complain|
|MidJourney| Used to create all of the images you see on the website, such as the plant images and the landing page image|
|JWT Token| Used to generate tokens to authenticate users|
|Bcrypt| Used to hash passwords for higher security|
|Bootstrap| Used for a few front end things, like the navbar|
|Dotenv| Used for environment variables|

### Developer Log

[Back To Top](#the-leaf-lounge)

|Date|Change|Additions|Deletions|
|--|--|--|--|
|1/12/24| **Apparently the slow server response is from OperaGX, every other browser loads fine, weird issue** Added caching, fixed some bugs in the website, I think I am giving up on the database response time for now, mainly because I am using Heroku for a cheap $7 option and if I wanted to upgrade, I would have to pay ~$21 a month for better performing Dynos, looking at the performance of Heroku, the metrics show a response time of on average 200ms+|41|33|
|01/12/24|About a whole week and a half of work, had to wait to push this as I was adding moderator privileges to my website and was just worried something might happen to my database somehow, had to wait until I finished all of the user API endpoints and login/register additions to my website|2,224|610|
|12/30/23|Changed a bunch of things here, not going to make a commit for a while until I make the whole user collection and incorporate it into my website so I can make an admin user that is able to operate on the database from the website, such as create, update, delete plants|583|237|
|12/29/23|Finished the feature section for good, might have some more ideas for it. Finalized the navbar design.|275|131|
|12/26/23|Worked on the responsiveness of all of the components to make sure that it was able to work on every device|462|410|
|12/25/23|Finalized the design of the featured section on the home.component, changes were majority just the featured section and some images|268|677|
|12/24/23|Made a lot of changed to the home page, with a featured section under the landing section. Was using the app.component for just about everything homepage and components started getting out of hand so I split the app.component into a bunch of different components.|696|120|
|12/23/23|Worked on the responsiveness of the website, changed majority of units to either svh/svw|154|103|
|12/20/23|More design idea changes, mainly home page, started work on an image grid|378|133|
|12/19/23|Started to work on the responsiveness of the website|39|22|
|12/15/23|Created the display plant component, messed around with some more designs on the home page|298|141|
|12/14/23| Starting to figure out what the design of the website was going to be, played around with CSS for a while|71|14|
|12/13/23| Started production of The Leaf Lounge, made a few components such as 'list-plants', a model for my plant objects, and a plant service to make requests to my API. Small changes to my home page as well. |555|493|


### To-Do

[Back To Top](#the-leaf-lounge)

|Do|Reason|Date of Decision|Date Finished|
|--|--|--|--|
|Checkout| Might be adding a checkout soon for the cart, not sure if I will because I really want to start working on a new project for my resume|01/11/24| N/A |
|~~Add Caching~~| Added caching to solve the problem of slow response time for the database, ended up doing nothing as my database is tiny and my code is optimal|01/11/24|01/12/24|
|~~Fix Shop Button~~| Shop button functions now|01/11/24|01/12/24|
|~~Navbar Opacity~~| Navbar opacity wasn't changing and it was due to code being in a ngOnInit instead of the constructor|01/11/24|01/12/24|
|~~Nav links~~| Some links were showing improperly, had to fix some html *ngIf statements|01/11/24|01/12/24|
