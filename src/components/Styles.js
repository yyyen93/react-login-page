import styled from 'styled-components';

//background
import background from  './../assets/bg.png';

//React router
import {Link} from 'react-router-dom';



//Define & Export the colors will be used in this project
export const  colors = {
    primary: "#fff",
    theme: "#BE185D",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#DC2626"
}


/*
App.js styled-components
- call as styled-container
- Remember in styled-components, we use `` back tick.
- background : create faint(薄) dark tint on image. <linear-gradient(0deg, rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${background});>
*/
export const StyledContainer = styled.div`
    margin:0;
    min-height: 100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background: linear-gradient(0deg, rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(${background});
    background-size: cover;
    background-attachment fixed;
`;


//Home.js Styled-components
export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align:center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding:5px;
    margin-bottom:20px;
`;

export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align:center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding:5px;
    margin-bottom:25px;
`;

//logo Avatar : putting on top on Home.js
export const Avatar = styled.div`
    width: 205px;
    height: 100px;
    border-radius:50px;
    background: url(${props => props.image});
    background-size:cover;
    background-position:center;
    margin:auto;
`;



/** Button
- the & (ampersand) is a special character that represents the parent selector, or the element that is being modified.
- To make the changing behaviour smooth, add transition
 */
export const StyledButton = styled(Link)`
    padding:10px;
    width:150px;
    background-color:transparent;
    font-size:16px;
    border:3px solid ${colors.primary};
    border-radius:25px;
    color:${colors.primary};
    text-decoration:none;
    text-align:center;
    transition: ease-in-out 0.3s;
    outline:0;

    &:hover{
        background-color ${colors.primary};
        color:${colors.theme};
        cursor: pointer
    }
        
`;

// Fix button styling
export const ButtonGroup = styled.div`
    display:flex;
    justify-content:space-around;
    flex-direction:row;
    margin-top:25px;

`;



/** Login.js Styled-components
- input
- Check for an invalid props in our input. This ivalid props will trigger different stylings when 
- input field is in focus add styling
 */
export const StyledTextInput = styled.input`
    width:280px;
    padding:15px;
    padding-left:50px;
    font-size:17px;
    letter-spacing:1px;
    color: ${colors.dark1};
    background-color: ${colors.light2};
    border:0;
    border-radius:5px;
    outline:0;
    display:block;
    margin:5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && 
    `background-color:${colors.red};
    color:${colors.primary};`
    }

    &:focus{
        background-color: ${colors.dark3};
        color: ${colors.primary};
    }
`;

export const StyledLabel = styled.p`
    text-align:left;
    font-size:13px;
    font-weight:bold;
`;

//Wrap whole form : because it will be reusing,we want to pass the bg color as a property when using it.
export const StyledFormArea = styled.div`
    background-color: ${props => props.bg || colors.light1};
    text-align:center;
    padding: 45px 55px;
    border-radius:10px;
`;

// form style button
export const StyledFormButton = styled.button`
    padding:10px;
    width:150px;
    background-color:transparent;
    font-size:16px;
    border:2px solid ${colors.theme};
    border-radius:25px;
    color:${colors.theme};
    transition: ease-in-out 0.3s;
    outline:0;

    &:hover{
        background-color ${colors.theme};
        color:${colors.primary};
        cursor: pointer
    }
`


/** Icons
- Make sure its properly align in the input field.
- password input field will have icons both on the left and right. So, in the start icon we check for the right property, if the right property has been provided then we start a particular icon on the right side.
- otherwise we stick to the left.
 */
export const StyledIcon = styled.p`
    color: ${colors.dark1};
    position:absolute;
    font-size:21px;
    top:35px;
    ${(props) => props.right && `right:15px;`}
    ${(props) => !props.right && `left:15px;`}
`;


// Display error messages component
export const ErrorMsg = styled.div`
    font-size:11px;
    color: ${colors.red};
    margin-top:-5px;
    margin-bottom: 10px;
    text-align:left;
`;

//Extra test component
//take the font-size as a props when we are using the component
export const ExtraText = styled.p`
    font-size: ${(props) => props.size}px;
    text-align:center;
    color : ${(props) => (props.color ? props.color : colors.dark2)};
    padding:2px;
    margin-top:10px;
`;



//Signup text
export const TextLink = styled(Link)`
    text-decoration:none;
    color:${colors.theme};
    transition: ease-in-out 0.3s;

    &:hover{
        text-decoration: underline;
        letter-spacing:2px;
        font-weight:bold;
    }
`;


// Copyright
export const CopyrightText = styled.p`
    padding:5px;
    margin:20px;
    text-align:center;
    color: ${colors.light2};

`;