Create an application that allows users to add new items and write reviews for those items. The item for review can be any entity of your choosing ( restaurants, food trucks, playlists, tacos, other review sites, etc.).

## Objectives

- Create a monolithic app
- Implement a Spring backend
- Implement a ReactJS frontend
- As part of a team, collaborate on and construct an app using proper git workflow. A **suggested timeline** has been provided at the bottom of this article
- Deploy your app to production using Heroku

## Requirements

### CRUD Behavior

A user must be able to:

- Add an item to be reviewed
- Add a review with a required rating and optional comment
- Edit and delete items/reviews
  - deleted items should delete all related reviews
- All forms should have backend validation
  - Any model level errors generated on the backend should be returned and displayed on the React frontend to provide context on why a form submission did not work.

### React.js Front End

- All index, show, form, etc. pages should be in React
- This frontend should be styled and have an enjoyable and visually pleasing user experience!

### README

Your app should include a README with the following:

- Name and brief description of the project
- A list of authors
- Heroku link to deployed site
- A list of features included in the site
- An outline of the technologies in the project

## Optional Features

Once the required features have been implemented, the group should work to implement the following optional features.

- The ability to search for items using a React search bar
- Upvote or downvote a review. For an extra challenge, you may choose to allow users to change their votes
- Use of an external API (such as Google Maps)
- The **ability to upload an item photo** via [Spring][spring] or [React Dropzone][react-dropzone]
- Other fun ideas! We want you to find cool libraries or packages and integrate them into your projects! Be as creative as you like. If you aren't sure if something is a good fit please ask your favorite EE!

### Production

We will use Heroku as our production environment to serve our application to users. See the [Deploying Spring Boot Apps][deploying-spring-boot-apps] and [Java specific][getting-started-with-java] documentation on Heroku for instructions on getting your Spring app live on the Internet. Note that the instructions also include creating a Java app from scratch, but you will be skipping over this step because you will be using your group project repository. Plan to do this on Wednesday of Week 1! (Note: if you do not designate a name Heroku will make one for you. Don't be the group that gets stuck with `eagle-eyed-tiger` as your app name). You will need to supply a name when running `heroku create <app_name>`.

- In order for the Heroku upload to work you will need to install Heroku CLI tools, and in your application root directory you'll need to create a file called `system.properties`. Inside this file you need to have `java.runtime.version=11`. This will allow Heroku to know we're building from Java 11.

---

## Suggested Timeline

### Week 1

#### Tuesday

- Select item to be reviewed
- ER diagram & wireframes
- Create project on GitHub
- Create user stories to populate Trello/Jamboard, so you can best keep track of and assign tasks
- Split into pairs and begin working on the first two user stories

#### Wednesday

- Create the index page for items to be reviewed

  - Create Rest Controller and/or Repository/Service
  - Create React Component(s) to render the index page

- Create the show page for items to be reviewed (focus on just showing the item, reviews for the item can come in a later story)
  - Create Rest Controller and Repository/Service
  - Create React Component(s) to render the index page

#### Thursday

- Create new item form in React
  - Create Rest Controller and Repository
  - Create React Component(s) to render the index page
- **First deploy to Heroku**

#### Friday

- Talk about the team dynamic, make suggestions for better communication
- Create item new page (cont.)
- Create `reviews` and have them display on their related items show page.

#### Week 2

#### Monday

- Allow user to add review for an item on show page
- Begin styling if it has not been started already
- Reflect and plan for the week ahead
- Deploy to Heroku! (Doing this after new features have been merged will help catch any errors early on!)

#### Tuesday

- Re-evaluate goals for the week
- Ensure that minimal site-wide styling has been started
- Edit page for item
- Daily deploy to Heroku

#### Wednesday

- Styling
- Delete Item
- Upvote/Downvote
- Refactor existing code where possible
- Daily deploy to Heroku

#### Thursday

- Refactor existing code where possible
- Begin preparation for presentations
- This is not the time to begin any new features.
- Daily deploy to Heroku

#### Friday

- Styling
- Finishing touches on styling or WIP features
- Presentations @ 2:30pm ET / 1:30pm CT / 11:30am PT

[getting-started-with-java]: https://devcenter.heroku.com/articles/getting-started-with-java
[deploying-spring-boot-apps]: https://devcenter.heroku.com/articles/deploying-spring-boot-apps-to-heroku
[spring]: https://spring.io/guides/gs/uploading-files
[react-dropzone]: https://react-dropzone.netlify.com/
