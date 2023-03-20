# Project : React pages

Here’s an example website.

## NPM API INSTALLED

1. __styled-components__ :
    * <https://www.npmjs.com/package/styled-components>
    * use to style the app components.
2. __react-router-dom__ :
    * <https://www.npmjs.com/package/react-router-dom> 
    * To facilitate movement between our pages.
3. __formik__ :
   * <https://www.npmjs.com/package/formik> 
   * use to build forms
4. __react-icons__ :
   * <https://react-icons.github.io/react-icons/> 
   * icons for login input field.
5. __yup__ :
   * <https://www.npmjs.com/package/yup> 
   * Validation input field. yap will give all the tools that we need to properly validate our input and also set the appropriate error.
6. __react-loader-spinner__ :
   * <https://mhnpd.github.io/react-loader-spinner/docs/components/rotating-lines>
   * loader spinner CSS for the form.
7. __redux__ :
   * <https://redux.js.org/introduction/getting-started>
8. __react-redux__ :
   * <https://www.npmjs.com/package/react-redux>
   * Official React bindings for Redux.
9. __redux-thunk__ :
    * <https://www.npmjs.com/package/redux-thunk>
    * Thunk middleware for Redux. It allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.
10. __redux-react-session__ :
    * <https://www.npmjs.com/package/redux-react-session>
    * Redux React Session provides an API that allows to manage sessions through the app, with authorization function for react-router and a persisted session.

### Steps

1. __Styles.js (All styles components)__
   1. import styled-components - style the app
   2. import react-router-dom - to create button

2. __All image in assets.__
3. __App.js__
    1. import StyledContainer from components Styles.js
        i. styled components : Not default export. we need to wrap with curly braces.
    2. wrap whole app in a router that comes from react-router-dom
    3. Set Route for each component so that we don't need to replace each time we want to see the output.
       * to do this, we make use of the Routes and also the Route.
       * the Routes will check for the current link and choose which component to display.
       * Each of the Route will take a path which it associates with our components and also the element props, we can pass a dynamic value to element. dynamic value is that to be rendered component as JSX.
4. __Home.js__
    1. import StyledTitle,StyledSubTitle, Avatar, StyledButton, ButtonGroup from components Styles.js
        1. Avatar is the background image.
    2. import Logo from assets
    3. import StyledButton from Styles.js
        1. create a button for login and sign up
        2. specify the links where buttons point 'to'
5. __Login.js__
    1. use formik to build form.
        1. Formik tag will take function as a child, and this contain our form
        2. The form must ensure usability & high level of abstraction, we want to put formik input in another file.
        3. The file name 'FormLib.js'
            1. formik uses 'useField' which comes from itself package.
            2. {...props} : take props as parameter
            3. using the props will set up a formik field
            4. field and meta variable contains information about the field.
            5. import 'StyledIcon' from Styles.js
            6. Code Eye icon for the password field.
        4. formik property which is 'submitter'
            1. this returns a boolean true or false to indicate when our form is submitted.
            2. using this we can know when to display our loader spinner.
            3. isSubmitting as a parameter.
            4. import react-loader-spinner CSS.
                1. import {RotatingLines} from 'react-loader-spinner';
    2. import StyledTextInput,StyledLabel,StyledFormArea,StyledFormButton,Avatar,StyledTitle,colors,ButtonGroup from Styles.js
    3. import Logo from Assets
    4. import react icons that supply to the input field.
        1. FiMail and FiLock from react-icons/fi
    5. import all from yup
    6. import CopyrightText from Styles.js
    7. import ButtonGroup to style submit button
6. __Signup.js__
    1. Similar to Login.js, just add extra
7. __Dashboard.js__

### Authentication
  
1. Require reacts and redux packages. Npm install them.
    * redux
    * react-redux
    * redux-thunk
    * redux-react-session (Error), try npm install redux-react-session --legacy-peer-deps
    * @reduxjs/toolkit
2. Create folder 'auth'
    * store.js
      * it contains the boilerplate for redux. All are required.
      * Please take note for the sessionService. As it no longer maintains. So it currently installed as '--legacy-peer-deps'
    * Subfolder actions and userActions.js
      1. create functions which will take form input details and work on them such as communicating with the backend. These functions are called action in redux.
      2. Accept various parameters.
         1. loginUser : take in the values as credentials, history, setFieldError, setSubmitting
    * Subfolder reducers and rootReducer.js
      3. Concepts of reducer is to interact with our store and change up values whenever it's needed.
      4. Error:
        * Uncaught Error: "reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers
        * Solution: Make sure the reducer:rootReducer is declared as an object in configureStore.
3. index.js
   1. Provide access to the store.
    * import {Provider} from 'react-redux';
      * ensure that our app and all its components can have access to the details in our redux store
    * import store from './auth/store';
      * import our store and pass it as a property
4. Login.js
   1. Connect login component to the redux store and also import our login action.
    * import {connect} from 'react-redux';
    * import {loginUser} from './../auth/actions/userActions';
    * import {useHistory} from 'react-router-dom';
      * Now on the successful signing or signup, you might want to move to a new page. Be in its dashboard or another page to be able to move. To able to move around successfully, we need to have information about our history and we will ge to this using the 'history hook' from react.
    * Connect login component to redux at the bottom where we export it. Connect is a high order function so we call the connect function which returns another function and we pass our login to it. From this component, we pass null and an object of our actions to our connect function.
      * export default connect(null, {loginUser})(Login);
    * Since redux assigns the action to our props, lets take in the login user action into our login component. so we can use.
      * const Login = ({loginUser}) =>{}
    * Inside the onSubmit property,we want to use the login user action.
      * Firstly, pass in the value
      * Secondly, pass in the history. So create the history variable using our useHistory hook
        * const history = useHistory();
      * Thirdly, when error message return, we want to display it to the user. To do that, we need to use 'setFieldError' provided by formik. Once we use it, we need to add it to the parameters of our onSubmit function.
      * Lastly, pass the setSubmitting function to our loginUser.
      * Once again, this will ensure that we can tell from it when we're done submitting the form.
      * Do the above samething to Signup.js

