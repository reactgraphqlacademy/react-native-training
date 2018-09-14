# React Native Workshop - ReactJSAcademy

## Setup

```
git clone <REPO>
cd react-native-workshop
yarn install
# or
npm install
```

## Run your project

There are Two major ways to run yout Expo projects locally: using EXP, or running it in your Simulator (Xcode or Android Studio, Genymotion...). I recommend installing exp in your cli and login into your account in order to run your project directly into your phone.

### Using EXP

- `npm install exp --global`. You can also install de desktop app (https://github.com/expo/xde)
- `exp login` to login with your account (signup into expo.io required)
- install the Expo client in your phone (and login)
- in the repo directory: `exp start --lan`

This will start the Bundler for the app and enables the app for visualization at your phone. Now you only need to go to your phone to the `Projects` tab and Voila!, there it is!!

Happy Coding!

## Excersice

The Goal of this Excersice is to Introduce you to React Native development, helping you familiarize with its APIs and basic structure.

We are going to build a simple app with **three screens** as you can see below

![App Screens](./rn-workshop-intro.png)

All the instructions are in the corresponding files, here are the headlines of what you have to do:

Tasks FOUNDATION
- App.js returns the src/Auth/LoginScreen.js
- layout:
  - Flexbox: In Login Screen elements must be centered on the screen
  - Styles
    - Textinput, Button, Title of the App, etc
  - Forms
    - Username and password -> Button/ TouchableHighlight to log in
    - the T&C are hidden, and user click on "read T&C" and it's then displayed
        - Tasks: add TouchableHighlight to "read T&C"
        - Does the T&C fit in the screen? what can you do to make them fit?
  - ListView
    - Task: in App.js replace import { LoginScreen } from './src/Auth' by import { UsersScreen } from './src/Users'
    - In src/Users/Screens/UsersScreen.js, create a FlatList and show all the users from the API. Question, why do you think we need to use a FlatList and not just a ScrollView?
  - Bonus, style the ProfileScreen

Tasks NAVIGATION
- git checkout solution-previous-exercise
- yarn add react-navigation
- Create a navigator in src/App/Navigator.
The Navigator should have two screens: LoginScreen and UsersScreen. Example using SwitchNavigator and StackNavigator: https://snack.expo.io/@horacio/composing-navigators

Users should not be able to click on the back button and go back from UsersScreen to LoginScreen. Question, which type of navigator are you going to use? StackNavigator or SwhitchNavigator?

- The initialRouteName for the src/App/Navigator should be the login screen

- in src/screens/LoginScreen.js
  - Set the title for this navigation view to "Sign in"
  - implement the `login()` method. Navigate to the `HOME_SCREEN`

- Implement a navigator in src/Users/Components/UserNavigator.js
  - It should have two screens: UsersScreen and ProfileScreen
  Users should not be able to click on the back button and go back from ProfileScreen to UsersScreen. Question, which type of navigator are you going to use? StackNavigator or SwhitchNavigator?
  - The initialRouteName should be the UsersScreen

- In src/App/Navigator.js replace the UsersScreen by UserNavigator
- In src/Users/Screens/UsersScreen.js
- src/Users/Components/UserItem.js receives a function prop called handleItemPress that is executed when the user presses on the item. Implement that function in the renderItem method in src/Users/Screens/UsersScreen.js. Hint UsersScreen has a prop called navigation https://reactnavigation.org/docs/en/navigation-prop.html. You will need to use the navigation.navigate function https://reactnavigation.org/docs/en/navigation-prop.html#navigate-link-to-other-screens.  Hint 2: you need to pass a parameter to the next screen
- The src/Users/Components/UserNavigator.js should have a Button with the text "Sign out" on the property [headeRright](https://reactnavigation.org/docs/en/stack-navigator.html#headerright) so that when the Button is pressed the app navigates to the login screen

-  In src/screens/ProfileScreen.js read the parameter sent from the previous Screen and use it to dispaly the right data

Tasks Animations
-

### Bonus Excersices

For this its best to checkout the solution branch, because you will need a file that is in there :)

- add a Logo `AuthScreen.js` on top of the Button
- implement InfiniteScroll in HomeScreen with the `NextUrl`
- create an Abstract Component for the Button, and replace them through all the app
- add the `LoadingScreen` to the Switch Navigator as the initial Route
- read the documentation for `react-native-authentication-helpers` and try to implement it.
  - HINT: you can simply `setUser({ type: 'anonymous'})` for the porpuse of the Excersice.
- when `logout`, clean the User and send it to `AUTH_SCREEN`

## Workshop Resources

- [WORKSHOP FEEDBACK (Thanks🙏)](http://bit.ly/rnw-london)
- [EXAMPLE COMPOSING NAVIGATORS](https://snack.expo.io/@horacio/composing-navigators)

## Resources

- https://facebook.github.io/react-native/
- https://docs.expo.io/versions/latest/
- https://reactnavigation.org/docs/en/getting-started.html
- https://react-native-training.github.io/react-native-elements/
- https://callstack.github.io/react-native-paper/
- https://nativebase.io/
- https://native.directory/

## Who to follow:

- https://twitter.com/reactnative
- https://twitter.com/reactiflux
- https://twitter.com/greweb
- https://twitter.com/ReactEurope
- https://twitter.com/react_native_eu
- https://twitter.com/ReactAlicante
- https://twitter.com/R_N_Radio
- https://twitter.com/Baconbrix
- https://twitter.com/dabit3
- https://twitter.com/kurtiskemple
- https://twitter.com/expo
- https://twitter.com/grabbou
- https://twitter.com/notbrent
- https://twitter.com/ferrannp
- https://twitter.com/infinite_red
- https://twitter.com/ChainReactConf
- https://twitter.com/VladimirNovick
- Twitter API auth process: https://stackoverflow.com/questions/45078952/twitter-api-application-only-authentication
