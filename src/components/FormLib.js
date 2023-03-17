//Imports
import {useState} from 'react'; //for eye icon usage
import { useField } from 'formik';
import {
    StyledTextInput,
    StyledLabel,
    StyledIcon,
    ErrorMsg
} from './../components/Styles';


// Eye icon for password
import {FiEye, FiEyeOff} from 'react-icons/fi'



/**Create text input and export
 * 1) {...props} : take props as parameter
 * 2) using the props will set up a formik field
 * 3) field and meta variable contains information about the field.
 * 4) Eye icon for password : From the props we want to check , when the field is a password field, so that we can render the eye correctly.
 */
export const TextInput = ({icon, ...props}) => {
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false);     // Call the 'useState' as show. Our default value will be false.

    return(
        <div style={{position: "relative"}}>
            {/* When we using the input field,we'll pass the label as a property to the component and that's what we are putting in our style label */}
            <StyledLabel htmlFor={props.name}>
                {props.label}
            </StyledLabel>


            {/* To prevent rendering of double password fills. let's check when its not a password so that we render the normal text input. */}
            {props.type !== "password" && (
                <StyledTextInput 
                    invalid={meta.touched && meta.error}//Whenever there is an error we want to pass an invalid property to text input field. We use the meta.touched and meta.error to set the invalid property. if our inout has not been touched,and there is no error, the invalid property will have a false value and therefor the styles will not be applied.
                    {...field} 
                    {...props} 
                />
            )}


            {props.type === "password" && (
                //  Now for the password field we need to use a customized text input so that we can able to vary when the password can be seen and when it cannot be seen. To do this, we make use of the show variable once again 
                <StyledTextInput 
                invalid={meta.touched && meta.error}//Whenever there is an error we want to pass an invalid property to text input field. We use the meta.touched and meta.error to set the invalid property. if our inout has not been touched,and there is no error, the invalid property will have a false value and therefor the styles will not be applied.

                {...field} {...props}
                type={show ? "text" : "password"}
                // The type of input we will toggle between text and password. Usin the text to allow the password to be seen.
                />
            )}


            <StyledIcon>
                {/* The value that applied to the icon will be provided when the text input is being used.
                Remember to add the icon to the parameters of our component */}
                {icon}
            </StyledIcon>

            {/* Eye icon for password */}
            {props.type === "password" && (
                <StyledIcon onClick={()=> setShow(!show)} right>
                    {show && <FiEye/>}
                    {!show && <FiEyeOff/>}
                </StyledIcon>
                // Need to toggle between the two eyes icons; when it is off and when it is on. To do that, we use 'useState'.
                //So now using the show variable state, we can know when to render each of the icon.
                //Now we need to pass the unclick to the icon so we can toggle the value of show. this 'onClick' will make use of setShow to set the value by negating the current value of show.
            )}

            {/* Import and use the error message from Styles.js
                - to know whether we have an error message or not. we use meta property. With meta property we know when our input field has been touched, meaning it has been changed and whether an error is occurred due to that change, if the input field has been touched and also an error exists, then we can go ahead to display our error message.
                - We check for the meta.touched so that the error messages will not be displayed.
            */}
            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
                // if there is no error message displayed, we will still use the error message tag but we'll set the visibility to hidden, so that was to maintain the shape of our form. even though there is no message to be display.   
            ) : (
                <ErrorMsg style={{visibility: "hidden"}}>.</ErrorMsg>
            )}
        </div>
    )
}

/**
 * Q : above error occurred in the <Formik> component:
A : But there is an issue when i try to change the value of the password field. This is because formik requires the initial values, so that to be able to change, lets set them up in the login.js file inside the formik tag. S we pass the initial values props which takes an object of all the fields and the initial values.

Add onSubmit, this will be called whenever the form is submitted. For the mean time, we just log the values to the console. The values will be passed as a parameter to the onSubmit function.
 */