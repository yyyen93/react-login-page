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
    ExtraText,
    TextLink,
    CopyrightText
} from './../components/Styles';

import Logo from './../assets/logo-r.png';

//formik
import {Formik, Form} from 'formik';
//formik text input
import {TextInput} from './../components/FormLib';

// Yup : give all the tools that we need to properly validate our input and also set the apropraite error.
import * as Yup from 'yup';

//react icons : supply to input field
import {FiMail, FiLock, FiUser, FiCalendar} from 'react-icons/fi';


// React loader spinner CSS : RotatingLines
import {RotatingLines} from 'react-loader-spinner';




const Signup = () =>{
    return(
        <div>
            <StyledFormArea>
                <Avatar image={Logo}/>
                <StyledTitle color={colors.theme} size={30}>Member Signup</StyledTitle>
                {/* Formik tag will take function as a child, and this contain our form */}
                <Formik 
                    initialValues={{ 
                        email: '',
                        password: '' ,
                        repeatPassword:'',
                        dateOfBirth:'',
                        name:''
                    }} 
                    validationSchema={
                    /**To use yup with formik, we need to add the validation schema property to our formik component. this will take yup object.
                     *  In this object, we define all the rules for our input fields.
                     * Email : The email we require to be string, it needds to be an email if it does not match the meail property, we return an error message which also need required. So the message return will passes as argument to the app.
                     * Password: need to be a string and we can set the min and max length and pass an error message if password does not obey this rule.
                     * Once the app retains an error message we need to display
                    */
                        Yup.object({
                            email: Yup.string().email("Invalid email address").required("Required"),
                            password: Yup.string().min(8,"Password is too short").max(30,"Password is too long").required("Required"),
                            name: Yup.string().required("Required"),
                            dateOfBirth: Yup.date().required("Required"),
                            repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Password must match.")
                            // formik property 'oneOf()' : to check repeatPassword match the original password. We pass an array to it and put in our password field as a reference, so now the value of our repeatPassword should be at least equal to the referrenced password for it to be accepted. Otherwise, would return error message.
                        })
                    }
                    onSubmit={(values , {setSubmitting})=> {
                        console.log(values)
                    }
                }>
                    {({isSubmitting}) => (
                    /**  Formik Property Submitter.
                     * - isSubmitting as a parameter.
                     */
                        <Form>
                            {/* Ensure usability & high level of abstraction, we want to put formik input in another file. */}
                            <TextInput
                                 // Pass all necessary properties
                                name="name"
                                type="text"
                                label="Full Name"
                                placeholder="Andy? Howard?"
                                icon={<FiUser/>}
                            />
                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="email@example.com"
                                icon={<FiMail/>}
                            />
                            <TextInput
                                name="dateOfBirth"
                                type="date"
                                label="Date of Birth"
                                icon={<FiCalendar/>}
                            />
                            <TextInput 
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="********"
                                icon={<FiLock/>}
                            />
                            <TextInput 
                                name="repeatPassword"
                                type="password"
                                label="Repeat Password"
                                placeholder="********"
                                icon={<FiLock/>}
                            />

                            <ButtonGroup>
                                {/* Check form is not submitted and displayed */}
                                {!isSubmitting && 
                                <StyledFormButton type="submit">
                                    Signup
                                </StyledFormButton>}

                                {isSubmitting && (
                                    <RotatingLines 
                                        strokeColor={colors.theme}
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="50"
                                        visible={true}
                                        height="30"
                                    />
                                )}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>

                {/* 
                - Use ExtraText which is a message for a user who is on the login page but want to go to the sign up page.
                - The sign up needs to be a link, will create a component. Will call the compnane 'testlink'. Want it look lik enormal text.
                */}
                <ExtraText>
                    Already have an account? <TextLink to="/login">Login</TextLink>
                    {/* pass 2 property to TextLink to indicate where we want our link to lead us to */}
                </ExtraText>
            </StyledFormArea>
            
            {/* Copyright */}
            <CopyrightText>
                All rights reserved &copy;2022
            </CopyrightText>
        </div>
    )
}
export default Signup;

/**
 * Q : above error occurred in the <Formik> component:
A : But there is an issue when i try to change the value of the password field. This is because formik requires the initial values, so that to be able to change, lets set them up in the login.js file inside the formik tag. S we pass the initial values props which takes an object of all the fields and the initial values.

Add onSubmit, this will be called whenever the form is submitted. For the mean time, we just log the values to the console. The values will be passed as a parameter to the onSubmit function.
In addition, there a method call setSubmitting, this will help us to stop forming that we are done with submission of the form.
 */


