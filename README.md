[Source Code](https://github.com/im-cr/Chrrp)

# Setup
Run `npm install` to install project dependencies. Then run `npm run start` to start the app in dev mode. 

#Go To Localhost to view this App
[LocalHost](http://localhost:3000/)

# Dependencies
- [Font Awesome v4.7](https://fontawesome.com/v4.7.0/)
- [Node Sass](https://github.com/sass/node-sass)

# Structure
  - Components
    - Routing.js
    - pages/
      - App.js
      - NotFound.js
      - UserPicker.js
    - uiComponents/
      - Footer.js
      - Loader.js
      - Modal.js
      - Search.js
      - Sidebar.js
      - TweetForm.js
      - TweetList.js
      - UserBio.js
      - UserImg.js
  - context
    - AppState.js
    - AppContext.js
  - styles/
    - style.scss
    - partials/
      - vars.scss
      - base.scss
      - header.scss
      - footer.scss
      - layout.scss
      - forms.scss
      - btns.scss
      - modals.scss
      - effects.scss
      


## Scripts

In the project directory, you can run:
### `npm start`

`npm start` Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view this app in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


## Things I would refactor
Given more time to to focus on this application and make it better I would abstract the state logic out of the main App component and place it into a the AppState component and utilize react context to make the app state more accessible to nested components and to avoid additional prop drilling.

Also, I would leverage a data storage resource like mongo cloud or firestore to store and return the submitted tweets for each user. as well as update the search and delete functionality. 

## More About Cortney

Thank You for taking the time to review this demo. If you'd like to learn more about me or want to tell me how bad of a job I did please checkout some of the links below:
- [Linkedin](https://linkedin.com/in/cortneyrobinson)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

