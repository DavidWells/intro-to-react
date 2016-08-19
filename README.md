# Intro to React

# Install the create-react-app CLI
```
npm install -g create-react-app@0.1.0
```

# Create the app with create-react-app CLI
```bash
# create with create-react-app PROJECT_NAME
create-react-app intro-to-react
# change into the directory
cd intro-to-react
```

# Run the react App

```bash
npm start
```

# `/src/index.js` Overview

```js
import React from 'react'; // Import react dependancy
import ReactDOM from 'react-dom';  // Import reactDOM dependancy
import App from './App'; // Import the App Component
import './index.css'; // Import App Styles

ReactDOM.render(
  <App />, // App component
  document.getElementById('root') // DOM node on page to render react app to
)
```

# `/src/App.js` Overview

```jsx
import React, { Component } from 'react'; // Import react dependancy and React.Component
import logo from './logo.svg'; // Import an SVG for use in img tag
import './App.css'; // Import App styles

class App extends Component {
  /* render method will render everything returned from it */
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App; // Export the App component for use in index.js
```

# `/src/App.js` Add Props

# Add Prop type validation

# Add defaultProps

# `/src/App.js` Add State

# Add customMethod to Class

# Attach customMethod as click handler

Checkout `https://github.com/DavidWells/intro-to-react/tree/step-2/src` for the completed code up to this point

# Add `componentDidMount`

# Build to production

`npm run build`

# Deploy to Production

```bash
npm i surge -g
# From build directory
surge
```
