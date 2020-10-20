[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# InstaSHAM

This is a full stack application that connects with a database and AWS to allow users to upload and store files.  The application allows you to sign up for your own individual account with an e-mail address and password.  The password is hashed by the system so that it is more secure.  Once signed in the user can upload, edit, and delete files from their account.  The files are uploaded with a description and a tag/tags that are inputted by the user. The file is also given a timestamp so that they know when the file was uploaded, as well as the last time that the metadata was updated.

Once a picture has been uploaded, it is added to the user's profile.  The user's profile is updated in a chornological order with the most recent photo being shown first in the grid.  The grid is a thumbnail view of the photos.  When a photo is clicked, the user is sent to an image page that gives them an option to edit the metadata.  They are given timestamps on when the image was uploaded and it's most recent update. The user is also able to delete the image from this page.

When the picture is uploaded, it also shows up on the news feed in a chornological order, with the most recent item at the top of the list.  The news feed is where the user can see all user's photos in the database.  On the top of each card, the user can see the e-mail address of the user who uploaded the file.

## Planning Story

The first step in the process of planning the site was to identify the functionality of the site based on requirements and the user stories.  We created an ERD and discussed the user experience.  We developed wireframs for the layout we wanted to use.  Based on the user stories, we identified that the requested website was similar to instagram.  We really liked the grid layout and the newfeed idea that Instagram uses, and put our own style on it.

After setting up the authorization tasks we split up our group into pairs.  Two of us worked on back end functionality, while two of us moved on to the front end to work on styling and UI.  Ralph and Rob worked on the UI to start working on the layout of the page, the image cards.  Ergun and Scott worked on back end functionality and then moved on to the newsfeed. Scott was able to get us set up with his AWS account and handled all AWS needs.  After finishing up the layout and design, Rob and Ralph worked on the profile page, edit and delete function, and the image pages.

Communication was necessary between each teammate to ensure that there was no one conflicting with the work of another.  This communication was effective in ensuring that each member was contributing to the project and that there were no conflicts in design.

Some of the challenges that we faced included:  setting up the AWS upload, getting the date to show in an appropriate format, and the update image metadata functionality.

### User stories
    1.  As an unregistered user, I would like to sign up with email and password.
    2.  As a registered user, I would like to sign in with email and password.
    3.  As a signed in user, I would like to change password.
    4.  As a signed in user, I would like to sign out.
    5.  As a signed in user, I would like to upload an image to AWS.
    6.  As a signed in user, I would like to update the meta-data of my image on AWS.
    7.  As a signed in user, I would like to see the name of all images on AWS.
    8.  As a signed in user, I would like to see the thumbnail of all images on AWS.
    9.  As a signed in user, I would like to delete the reference of my image from the database.
    10.  As a signed in user, I would like to see the following meta-data for any image:
      date created/uploaded
      date modified
      owner (user who uploaded the image)
      tag

### Technolgies Used
    1. react
    2. html
    3. JavaScript
    4. jsx
    5. bootstrap
    6. json
    7. MongoDB
    8. Mongoose
    9. axios
    10. Passport JS
    11. Express JS
    12. Bcrypt
    13. CSS/Sass

### Links
  [Deployed Frontend](https://sei-tigers-404brainnotfound.github.io/group-project-front-end/#/) <br>
  [Deployed Backend](https://git.heroku.com/morning-stream-98202.git) <br>
  [Frontend Github Repository](https://github.com/SEI-Tigers-404BrainNotFound/group-project-front-end)<br>
  [Backend Github Repository](https://github.com/SEI-Tigers-404BrainNotFound/group-project-back-end)

### Unsolved Problems/Reach Goals
    - Add search by Tag functionality
    - Add the ability to create profile pictures and bios
    - Like and comment functionality on other people's posts.

### Wireframe
![wireframe](https://i.imgur.com/Y1AM1SU.jpg)
