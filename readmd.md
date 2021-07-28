## Complete React Developer Zero to Mastery

---

1. First we are going to spend the initial modules on React Basict
2. Then we will be ready to jump into our E-commerce platform and we will use:

   - React Router
   - Redux
   - Firebase
   - Payments Stripe

3. Once we learn the packages above we will have the ability to process payments liek a full fledged ecom site.
4. Then we will elarn CSS in JS
5. Redux-Saga - a scalable way to handle asynconous actions in our app
6. Hooks will be impletmented next
7. Followed by Context-API
8. Finally GraphQL to manage at a larger scale our state
9. We will then learn about how to improve performance
10. Then make our PWA or progressive web app
11. Then we will use the JEST library for testing

## React Key Concepts

--

1. React came out in 2013

   - Before react we had
     - html
     - js
     - css

2. This gave us simple forms

   - All these sites were run on different browsers and developed by different people
   - This gave birth to jquery thus letting us edit the dom and made it more "uniform"

3. jQuery then launched HUGE applications like facebook, insta etc.

   - This gave birth to libraries, like backbone.js that lets us organize these scripts

4. The Birth of SPA | Single Page Application

   - Angular JS became the standard for building SPA
     - Let devs build large containers
     - Google Developed Angular and thus the industry accepted

5. As SPA grew bigger we realized testing the data flow was becoming harder

6. Facebook came out with React in 2016 was Really REALLY GOOD!

## Declaritive vs imperative

--

1. Dont touch the DOM. Ill do it
2. Build website like lego blocks
3. Unidirection Data Flow
4. UI, The rest is up to you

5. Imperitive

   - You Directly Change individual parts of your app in response to your events.

6. Declarative
   - React REACTS to the state instead of of changing the DOM thus massiving improving performance and data flow

## Components Architecture

--

1. Component Architecture
   - React had this idea that you will have components making up the whole all and even nested components!
   - This gave birth to component libraries like react bootstrap or blueprint.
   - These components are created based on the data simply as functions
   - They are JS functions that receive some sort of input or attribute or props
     - returning HTML
2. Use the React Dev Tools Extension
   - We can see that our custom Components are justt basic html tags

## One Way Data Flow

--

1. We Will see that React is a giant function and creates a virtual DOM
   - If we change the state the React function is re-ran and thus the data flow back down

## UI Library

--

1. React Views allows developers design apps for many devices like phones and VR
2. React Electron Allows us to interact with Windows and Linux
3. React also allows us to design for terminal
4. React truly is cross platform

## NPM vs YARN

--

Throughout the course we will be using Yarn, however using NPM or Yarn is a personal choice. You can use this as a reference guide for the two different commands you can use. Don't worry if you are not sure of the below commands as we will explore them throughout the course:
Install dependencies from package.json: npm install == yarn
Install a package and add to package.json: npm install package --save == yarn add package
Install a devDependency to package.json: npm install package --save-dev == yarn add package --dev
Remove a dependency from package.json: npm uninstall package --save == yarn remove package
Upgrade a package to its latest version: npm update --save == yarn upgrade
Install a package globally: npm install package -g == yarn global add package


## Create-React-App
--

1. Create-React-App or CRA for short was developed by facebook to build react projects very quickly
2. This package includes babel and webpack prebundled

3. Before we begin, lets make sure we have node running at least 10.15.3
   1. install via nvm   ``nvm install 10.15.3``
   2. use nvm next ``nvm use 10.15.3`` 
   3. now we can create our monsters rolodex
      1. ``create-react-app monsters-rolodex``
      2. notice that it automatically install react, react-dom and react-scripts
      3. cd into the directory and we can see our packages now

4. lets run ``yarn start`` from the term next and start our project
   1. If yarn isn't installed like mine wasn't ``npm i -g yarn``
   2. Then ``yarn -v`` to see the version
   3. try ``yarn start`` again

5. You will notice our src folder is where our app files go

6. Our Public has our index.html and when we build our app our src files are bundled into our public folder

7. Package.json si where you can see our basic app info, dependencies needed, and the scripts that are ran when we start/build/test/eject 

8. Overview of a default app.js
   1. imports
      1. react
      2. react-dom
   2. function
   3. return 
      1. html tags

9. CRA automatically updates the live-server when we make changes!
