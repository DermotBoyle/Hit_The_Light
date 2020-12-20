# Random Lights Game

## To Run

* npm install (for dependencies)
* npm start (run application)
* npm test (run tests)

## The Solution :


### Technologies

The application is a SPA built in React (the app is written in a functional style utilizing __React Hooks__)

#### Storage

This SPA makes use of the __useState__ hook and __useContext/useReducer__ patterns for temporary storage.
Local componenent state is maintained by useState and global state management makes use of the __Redux__ pattern.


#### Styling

The application is built 99% with __styled componenents__ (CSS-In-JS).
The design inspiration is taken from the Adidas 'Yarn' design system : https://adidas.github.io/adidas-yarn-design-system/

#### Responsiveness & Browser Support

The application is built to support from iPhone 5 to desktop and tested in Chrome, Safari and FireFox

#### Unit Testing

The application has been given some coverage using Jest and Enzyme