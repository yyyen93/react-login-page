# Project : React pages

Here’s an example website.

## NPM API INSTALLED

1. styled-components - <https://www.npmjs.com/package/styled-components> : use to style the app components.
2. react-router-dom - <https://www.npmjs.com/package/react-router-dom> :To facilitate movement between our pages.
3. formik - <https://www.npmjs.com/package/formik> : use to build forms
4. react-icons - <https://react-icons.github.io/react-icons/> : icons for login input field.
5. yup - <https://www.npmjs.com/package/yup> : Validation input field. yap will give all the tools that we need to properly validate our input and also set the apropraite error.
6. react-loader-spinner - <https://mhnpd.github.io/react-loader-spinner/docs/components/rotating-lines> : loader spiner CSS for the form.

### Steps

1. __Styles.js (All styles components)__
   1. import styled-components - style the app
   2. import react-router-dom - to create button

2. __All image in assets.__
3. __App.js__
    1. import StyledContainer from components Styles.js
        i. styled components : Not default export. we need to wrap with curly braces.
    2. wrap whole app in a router that comes from react-router-dom
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
