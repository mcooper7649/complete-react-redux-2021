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
10. CRA also will automatically create a production ready build if you just run ``npm run build``
    1.  Notice our root directory creates a build folder
    2.  The code in our build folder is all minified

11. CRA uses Babel and Webpack
    1.  Babel will take the JS files and transpile 
        1.  For multibrowser support
    2. Webpack is module bundler
       1. Notice the build folder
          1. look how we only have 3 javascript files
          2. Webpack optimized the code to minify it all

12. Notice our index.html has div with id 'root'
    1.  This is where our react is injected.
    2.  If we put code outide of the div, it will wrap around the React code as normal html

13. React and ReactDOM are the two libraries that come pre-installed to  CRA
    1.  React is the main React library
        1.  State
        2.  JSX
        3.  Components
        4.  Props
    2. ReactDOM is another default library in CRA
       1. Manipulates the DOM like jquery
       2. ``ReactDOM.render(<App />, document.getElementById('root));``
       3. This is the "what, and where" part of React

14. Eject 
    1.  if you were to npm eject you will see ythe scripts and config folder inside your directory
        1.  you can see all the stuff under the hood that CRA does, including webpack.config.js
        2.  we do NOT recommend running eject as their are many skilled developers optimizing this for you

## Hooks vs Classes
--

1. Hooks
   1. Hooks are specific to React
2. Classes
   1. Part of JavaScript and many other languages
   2. We will begin this course with learning everything in classes 
   3. Then we will covert our projects using Hooks

3. Class Components
   1. import React, { Component } from 'react';
   2. class App extends {}
      1. put render(){}
         1. put return in our render body 

class example
```
import React, { Component } from 'react';

class App extends Component {
    render(){
        return (
            <div>
                <h1>test</h1>
            </div>
        )
    }
}
```
4. We can use state when we use a class component
   1. State is a JS object with properties we access inside our class
   2. we first need to add a constructor
   3. Then a super()
   4. Then we can add ``this.state = {}``

class example
```
import React, { Component } from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = {
            message: "hello"
        }
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=this.setState({message: "welcome"})}>ChangeText</button>
            </div>
        )
    }
}
```

5. We are using Curly braces and the this.state.message to access our variable
   1. This is JSX

6. What if we want to change the value of state?
   1. We can use setState = { message: "welcome" }
   2. setState needs to be called form a function
   3. In the example above, our button executes the setState function

7. Thinking in JXS 
   1. If you notice we use className instead of class for attributes in React
   2. Any thing in {} is a JSX  javascript expression
   3. We can NEVER use this.state={} outside of the initial constructor
   4. Whenever State changes, this create a new render
   5. We need to use camelCase for onclick and other event attributes

8. Mapping through our monsters array
   1. In the example below we take our array of monsters from the state
   2. create a ul
      1. inside the ul map through the monsters
      2. return a li for each monster.name


Example of Monster map
```
import React, { Component } from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = {
           monsters:[
             {
               name: 'Frankenstein'
             },
             {
              name: 'Dracula'
             },
             {
              name: 'Zombie'
             }
           ]
        }
    }
    render(){
        return (
            <div>
               <ul>
                 {this.state.monsters.map(monster => {
                   return <li>{monster.name}</li>
                 })}
               </ul>
            </div>
        )
    }
}

export default App;
```

9. Unique Keys for elements in a list or map
   1. We can assign an id inside each of the monsters data (later we can use a 3rd party software uuid to generate unique IDs)
   2. If we don't supply the ID all the html will get re-rendered.
   3. if we do, just the element that changed

10. Optional: map() + key attribute
A good rule of thumb as to when to use the key attribute you saw in the previous video, is this: Anytime you use the map() function inside of render, or you have a list of the same jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it)

If you are new to the concept of using the map() function we saw in the previous video and you would like to learn more, we created a bonus video to explain the function in more detail. Simply go to Appendix 1: Key Developer Concepts at the bottom of the course video player, and watch the video on the map() function.

## Single Page Application
---


1. Lets take a look at our Component in side react
   1. Lifecycle methods are some default methods that come with component
      1. componentDidCatch
      2. componentDidMount
         1. When this component mounts, or renders on the dom for the first time; The block of code inside will be ran once
         2. API requests commonly are used here (** Unless hooks **)
      3. componentDidUpdate
      4. componentWillMount
      5. componentWillReceiveProps
      6. comonentWillUnmount
      7. componentWillUpdate
      8. 

2. Lets Talk about APIs
   1. Remember when we accessed the data from jsonplaceholder.typicode.com ?
      1. These are endpoints
      2. They allows us to do things like 
         1. sign in
         2. sign out
         3. add to cart
         4. etc
      3. API's can be 3rd party, like Google, Facebook, etc
      4. API's can be self-owned, like a DB we setup

3. In a real world scenario we wouldn't grab our monsters information from within the app. We would try and access it from a 3rd party or backend. Lets add componentDidMount above our render.
   1. We can use (jsonplaceholder.typicode.com/users)[jsonplaceholder.typicode.com/users] to simulate endpoint data
   2. Notice how it has basic info like, id, name, email, address obj
   3. Inside our monsters we can add a ``fetch('endpoint')``    
      1. add ``.then(response => response.json())`` to receive it as json
      2. add ``.then(users => this.setState({ monsters: users}))``
      3. lets clear our initial state to have monsters now initialize with an empty array.

4. Take a look at our App.js and Index.js
   1.  you can see with the react component architecture
       1.  we can import components as Tags
           1.  example: ``<SearchBox />``
           2.  Components can built as two types
               1.  functions
               2.  classess

5. Folder Structure is important
   1. in our example you can see
      1. src folder
         1. components
            1. card
               1. card.component.jsx
               2. card.styles.css
            2. card-list
            3. search-box
               1. search-box-components.jsx
               2. search-box.styles.css

    1. At the end of the day, babel converts it all into a javascript file

6. Back to Monster App
   1. Lets add a card list component
      1. create card-list-componenet.jsx inside oc components>card-list directory
      2. We can import the styles file supplies, we don't want to focus to much on css
      3. Pass {props.children} so the child of this div will receive the props

```
import React from 'react';
import './card-list.styles.css';

const CardList = props => {
    
    return <div className="card-list">{props.children}</div>;
}

export default CardList;
```
   2. Wrap it around the monsters.map


## Card Component

1. If we look at our card list component we want to seperate our logic and styling, to keep it more modular
2. Lets create a card component to focus more on the rendering
3. This card component will be
   1. card.component.jsx
   2. a functionional component
      1. using the export const Card = to convey functional
      2. import the styles that were supplied and add to card component
4. Use the Robohash link to generate different monsters
   1. (https://robohash.org/1?set=set2)[https://robohash.org/1?set=set2]
   2. we need to dynamically change the number BEFORE set to get a new monster
   3. We just need append size=180x180 to change the image size to fit on our page better
   4. add an h2 for monster.name
   5. add a p tag for monster.email

Module Complete Now we can pull our api data, render via a grid a card for each monster. We are also grabbing an image from robohash and resizing using string interpolation. Also passing id, props, email, to be used by the card from app and through card-list. 


## State Vs Props
---

State 
    - Mutable piece of data that can be locally accessed by a function or class
    - Object
    - Can be passed down as a prop
    - Can be put anywhere but shoulnd't be put everywhere 

Props
    - Immutable piece of data
    - Object
    - this.props when used in a class 
    - props when used in a function



Next Module Will be based on Adding a Search Feature

## Monster Search feature
--

1. We want to add a search box to our monsters app
   1. this search box will have a placeholder that says "search for monsters"
   2. when you type a character into the search field it will remove the monsters that are no longer valid

2. Lets add an input first
   1. type = 'search'
      1. this lets us add a placeholder
   2. We want to store the characters as they are typed into our state
       1. this is a controlled input
       2. onChange is what we want to add 'e' for the event
       3. target.value will get us the value of the string in the input
       4. ``e.target.value``
   3. We can pass e with a fat arrow
      1. this.setState
         1. searchField: e.target.value 
      2. setState is an asyncronous call
         1. so if we need to log a setState chagne, it needs to done as a callback 

App.js with Search Control
```
class App extends Component {
    constructor(){
        super();
        this.state = {
           monsters:[],
           searchField: ''
        }
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
    }

    componentDidUpdate(){
      console.log(this.state.monsters)
    }

    render(){
        return (
            <div className='App'>
            <input type="search"
            placeholder="search monsters..."
            onChange={e => this.setState({
              searchField: e.target.value
            }/>
            <CardList monsters={this.state.monsters} />
            </div>
        )
    }
}
```

1. Now that we have the search field wired up to the state, we can use the filter method to filter only the monsters that are being searched

2. Next lets add monsters and searchField in our render() but destructured
   1. ``const {monsters, searchField} = this.state;``

3. Create filterMonsters
   1. ``const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))``
      1. this takes our monsters array, filters each monster by monstername to include the searchField query
      2. make sure toLowerCase()

4. Lastly we need to swap the props inside our cardlist component to be ``filterMonsters`` and not ``this.state.monsters`` anymore

5. As we type we can see the filter working now.


## Re-usable SearchBox
1. Great the SearchBox with Filter works but what if we want to create a re-usable search box?
2. lets add SearchBox to our components first
3. This is going to a functional component
   1. we don't always need lifecycle methods
   2. we don't always need state
   3. sometimes we just need to render some html
   4. it can get some props
   5. if you dont need those other features, use a functional component!
4. we will import css (it is supplied)
5. make it a const instead of function

6 For the SearchBox Input
    ```
    <input 
            className="search"
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
        />
    ```
7. We can import SearchBox next in App.js
8. Then we can start finding the props we should pass down from our input then delete our input
   1. we dont need classname, its in the component
   2. we don't need type = search, its in the component
   3. placeholder we can copy from input
   4. handleChange we can make instead of onChange and copy the function from our onChaneg
   5. remove our input from app.js

```
<SearchBox 
            placeholder="search monsters..."
            handleChange={e => this.setState({
              searchField: e.target.value
            })}
             />
```
   
9. This is one of the Huge Advantages of React. It allows for us to break our code into component that are modular and re-usable. 



## Class Methods and Arrow Functions

1. 'this' is a type of data binding for class context
2. We can replace our function in our handleChange with {this.handleChange()}
3. Then we can declare that function and paste the cod that was inside our arrow in handlechange
    ``
    handleChange(e){
      this.setState({
        searchField: e.target.value
      })
    }
    ``
4. We also need to define it in our constructor like below
   1. ``this.handleChange = this.handleChange.bind(this);``

5. Arrow functions allow us to bypass "this" binding in the constructor
    - ``handleChange = (e) => {this.setState({searchField: e.target.value})};``
    - You can't bind arrow functions!
    - Arrows allow us to quickly write the handlers without the need for binding thus saving alot of time!

## Event Binding
--

1. If you were to create a button like ``<button onClick={this.handleClick()}>Click 1</button>``
   1. the handleclick is executed on load due to (), leave off teh brackets
   2. A good rule of thumb is this: Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount())


## Completing the Styles for our Monsters App
--

1. First Import 'Bigelowe Rules" font from Google inside app.css.
2. Add h1 on our App.js file above the searchbar 
3. Add a linear gradient to the body of our app.css and it will set the whole app to have yoru gradient as a bg!


## Next module was on linking to a github page
--- 

I will attempt Netlify, return back to here if you need GH pages.

## Attempting to Yarn to Netlify
--

no success with yarn. will update when needed. I will do npm if urgent.


## React and ReactDOM
--

1. Lets start this module by creating an folder called pure-react
2. inside we will create a src folder
3. then we will create our index.html inside src

index.html with div and upkg cdn for react and react-dom   
```
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root" />
    <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>  
    
</body>
</html>
```


### Yarn and NPM Commands
---

(https://devhints.io/yarn)[https://devhints.io/yarn]

This module was all about the different commands that do the same thing for YARN and NPM, check out the cheetsheet I linked above for a quick reference.

npm equivalents
npm	yarn
npm init	yarn init
npm install	yarn
npm install gulp --save	yarn add gulp
npm install gulp --save-dev --save-exact	yarn add gulp --dev --exact
npm install -g gulp	yarn global add gulp
npm update	yarn upgrade
./node_modules/.bin/gulp	yarn run gulp


## Revisting Virtual DOM and Routing
---

All the components within our Virtual Dom are Children of the Div with the class name "App"

- Updating the DOM is an a slow process
- React copies the actual DOM and creates a VIRTUAL DOM
- React will make a copy of the virtualDOM AGAIN whenever the data changes


* If you want to see on the page where the content is being updated, Go to RENDERING>PAINT FLASHING inside chrome *


## Asyncronous setState
---



1. React will batch process setStates for performance reasons
2. setState is an asyncronous call, not immediately
3. if we console log hte state right after setState, it will log the previous state still, because it hasn't been updated
4. we can add a callback function if we want to immediately use the new state
5. we can use prevState, prevProps to make sure during our batch processing that react does that we return the exact values of the state we wanted
6. we can then change this.examplestate to prevState.examplestate
7. we can use prevProps inside our parent app.js file this.props, inside our constructor.
   

Lifecycle Methods
--

1. Mounting
   1. componentDidMount
   2. componentDidUpdate
   3. ComponentWillUnmount
   4. shouldComponentUpdate


2. Mounting Phase Load order
   constructor
   render
   componentDidMount

3. Updating Phase
   1. New Props, setState, forecUpdate, can trigger an update
   2. during the update it will re-render not re-update
   3. forceUpdate is bad practice and should be avoided
   4. all children components will get re-rendered when a parent gets updated/re-rendered

4. Unmounting Phase
   1. componenentWillUnmount is called
   2. when we want to do anything before we unmount
   3. this is where we wnat to clean up our component



## Cloning My Repo
--

1. Go to github link and copy url
2. git clone paste url
3. git remote will show 'origin'
4. git remote remove origin will remove the origin so we can use our own repo
5. OR we can fork the project into our repo then clone it into our directory