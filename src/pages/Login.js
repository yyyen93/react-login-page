//styled components
import {
    StyledTextInput, 
    StyledLabel, 
    StyledFormArea, 
    StyledFormButton,
    Avatar, 
    StyledTitle,
    colors,
    ButtonGroup,
} from './../components/Styles';

import Logo from './../assets/logo-r.png';

//formik
import {Formik, Form} from 'formik';
//formik text input
import {TextInput} from './../components/FormLib';


//react icons : supply to input field
import {FiMail, FiLock} from 'react-icons/fi';


const Login = () =>{
    return(
        <div>
            <StyledFormArea>
                <Avatar image={Logo}/>
                <StyledTitle color={colors.theme} size={30}>Member Login</StyledTitle>
                {/* Formik tag will take function as a child, and this contain our form */}
                <Formik 
                initialValues={{ email: '', password: '' }} 
                onSubmit={(values , {setSubmitting})=> {console.log(values)}}>
                    {() => (
                        <Form>
                            {/* Ensure usability & high level of abstraction, we want to put formik input in another file. */}
                            <TextInput
                                 // Pass all necessary properties
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="email@example.com"
                                icon={<FiMail/>}
                            />
                            <TextInput 
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="********"
                                icon={<FiLock/>}
                            />

                            <ButtonGroup>
                                <StyledFormButton type="submit">
                                    Login
                                </StyledFormButton>
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
            </StyledFormArea>
        </div>
    )
}
export default Login;

/**
 * Q : above error occurred in the <Formik> component:
A : But there is an issue when i try to change the value of the password field. This is because formik requires the initial values, so that to be able to change, lets set them up in the login.js file inside the formik tag. S we pass the initial values props which takes an object of all the fields and the initial values.

Add onSubmit, this will be called whenever the form is submitted. For the mean time, we just log the values to the console. The values will be passed as a parameter to the onSubmit function.
In addition, there a method call setSubmitting, this will help us to stop forming that we are done with submission of the form.
 */