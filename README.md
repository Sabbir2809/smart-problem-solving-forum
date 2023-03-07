# A Smart Problem Solving Forum for DIU Engineering Students

"A Smart Problem Solving Forum for DIU Engineering Students" is a Problem and Solution Based website, which will be accessible to DIU students & alumni. The website serves as a Community for users to ask and answer questions. Those who have a problem or don't understand it can only post images or text connected to it in our forum. Then, after reviewing the image or text, determine what the issue is and notify the expert who is interested in the issue by notification.

##### Packages:

`npm i axios jwt-decode moment react-copy-to-clipboard react-router-dom redux react-redux redux-thunk`

##### Install Client Side Command:

`npm install` - use the this command on the client side to install all dependencies

`npm start` - use the this command on the client side to run client

### Frontend Components:

1. Navbar
1. Auth
   - Login
   - Sign In
1. Sidebar
   - LeftSidebar
   - RightSidebar (Weight)
   - HomeMainBar
1. HomeMainBar
   - Ask Question
   - Display Question
1. Tags
   - Problem Tags
1. Users
   - User Profile
1. Redux
   - reducers Folder (Store Data)
   - actions Folder (use to dispatch any update and modify particular data form reducer)
   - root index.js file wrap `<Provider store={store}></Provider>`

---

### Backend:

##### Packages:

`npm i express nodemon mongoose cors dotenv bcryptjs jsonwebtoken`

##### Install Server Side Command::

`npm install` - use the this command on the server side to install all dependencies

`npm start` - use the this command on the server side to run client

(root)index.js -> (routes)users.js -> (controllers)auth.js

1. index.js File
   - import express, mongoose, cors, dotenv
   - middleware
   - get root api
   - import userRouter(routes/users.js)
   - mongodb
1. routes Folder
   - user.js (import login, signup)
   - questions.js
   - answers.js
1. controllers
   - auth.js
   - questions.js
   - answers.js
   - users.js
1. models
   - userSchema
   - questionSchema
