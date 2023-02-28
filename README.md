# A Smart Problem Solving Forum for DIU Engineering Students

"A Smart Problem Solving Forum for DIU Engineering Students" is a Problem and Solution Based website, which will be accessible to DIU students & alumni. The website serves as a Community for users to ask and answer questions. Those who have a problem or don't understand it can only post images or text connected to it in our forum. Then, after reviewing the image or text, determine what the issue is and notify the expert who is interested in the issue by notification.

#### Client Packages:

`npm i axios jwt-decode moment react-copy-to-clipboard react-router-dom redux react-redux redux-thunk`

### Frontend:

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
1. Redux
   - reducers Folder (Store Data)
   - actions Folder (use to dispatch any update and modify particular data form reducer)
   - root index.js file wrap `<Provider store={store}></Provider>`

#### Server Packages:

`npm i express nodemon mongoose cors dotenv bcryptjs jsonwebtoken`

### Backend:

(root)index.js -> (routes)users.js -> (controllers)auth.js

1. index.js File
   - import express, mongoose, cors, dotenv
   - middleware
   - get root api
   - import userRouter(routes/users.js)
   - mongodb
1. routes Folder
   - user.js (import login, signup)
1. controllers
   - auth.js
