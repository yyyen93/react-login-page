/** create functions which will take form input details and work on them such as communicating with the backend. These functions are called action in redux.
 * action for login
 * action for signout
 * action for logout
 * These actions will changes in our redux store when necessary
 */

export const loginUser = (credentials, history, setFieldError, setSubmitting) => {
    //Make checks and get some data and status that either fail or success
    const user = {
        "name": "George",
        "email": "geo@gmail.com"
    }

    const status = true;
    if (status === true){
        // Allow access and redirect
    }else{
        // Display error message to user.
    }
}

export const signupUser = (credentials, history, setFieldError, setSubmitting) => {}

export const logoutUser = () => {}

//login system, we want to make some checks and take an action which will result in a user object being retained with some data and also a status. Now based on the status, either fail or success, based on this and allow user access to our system or deny the user access and provide an error message. Normally the action you take would be to make an api call to a back end or even interact with a database directly. In our case,  We make use of an api end point which refers to a back-end server that we created in our first three videos. We created a server with node.js and mongodb, now after we created them we hosted it on. we did all this in the first three videos. To be able to continue with this tutorial, you need to have that backend server set up.