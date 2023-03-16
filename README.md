# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## NPM API INSTALLED

1. styled-components - <https://www.npmjs.com/package/styled-components> : use to style the app components.
2. react-router-dom - <https://www.npmjs.com/package/react-router-dom> :To facilitate movement between our pages.
3. formik - <https://www.npmjs.com/package/formik> : use to build forms
4. react-icons - <https://react-icons.github.io/react-icons/> : icons for login input field.

### Steps

1. Styles.js (All styles components)
    a. import styled-components - style the app
    b. import react-router-dom - to create button
2. All image in assets.
3. App.js
    a. import StyledContainer from components Styles.js
        i. styled components : Not default export. we need to wrap with curly braces.
    b.  wrap whole app in a router that comes from react-router-dom
4. Home.js
    a. import StyledTitle,StyledSubTitle, Avatar, StyledButton, ButtonGroup from components Styles.js
        i.  Avatar is the background image.
    b. import Logo from assets
    c. import StyledButton from Styles.js
        i.  create a button for login and sign up
        ii. specify the links where buttons point 'to'
5. Login.js
    a. use formik to build form.
        i. Formik tag will take function as a child, and this contain our form
        ii. The form must ensure usability & high level of abstraction, we want to put formik input in another file.
        iii. The file name 'FormLib.js'
            i. formik uses 'useField' which comes from itself package.
            ii.{...props} : take props as parameter
            iii. using the props will set up a formik field
            iv. field and meta variable contains information about the field.
            v. import 'StyledIcon' from Styles.js
            vi. Code Eye icon for the password field.
    b. import StyledTextInput,StyledLabel,StyledFormArea,StyledFormButton,Avatar,StyledTitle,colors,ButtonGroup from Styles.js
    c. import Logo from Assets
    d. import react icons that supply to the input field.

