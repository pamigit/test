# test_citrus
Your job is to create a registration page with a form for mobile and email validation. The design can be as you wish. It should have a navigation on the top, where the user can select to register with either a mobile number, or with an email address. When the user selects the appropriate tab option, the visible input field should be the same as the selected option (if mobile tab selected, show input where the user can input the mobile number).
 
The form should contain the input field (email, or mobile number depending on the selected option in the navigation tab), currency selection field (can be in form of radio buttons, custom labels with a sliding animation, etc.), checkmarks for terms and conditions and promo notifications and lastly a submit button, with which the user will finish the registration process.
 
There should be a mobile and email validation, for their respective input fields. You can use a library of choice, or do a custom solution. If the mobile or email are not correctly formatted, you should display an error message, to inform the user that there is a problem. You can also freely style the look and the position of the error message.
 
While the request is being sent, a loader icon like a spinner should show on the screen, to show the user that an action is in effect, and that they should wait until it’s done. If there is an error during the request, the loader should hide, and the user should be notified that something went wrong during the registration process.
 
Finally, after the request is successful, the user should be informed that their account is created, and that they can proceed to login.
 

Requirements:
- You should only use native JS without any frameworks (example: jQuery)
- As said in the description, you can use a library for verifying the mobile and email input fields
- Use BEM for element class naming
- You can use a preprocessor of your choice for CSS, or none at all
- HTML should have no validation errors, and the syntax should make sense for the required content (proper use of <form>, <label>, <fieldset>, etc.)
- Would be ideal if you follow the airbnb style guide for JS
 

Lastly:
- Put the finished source code in a public github repository
- Call the repository “test”
- Time to complete is 3 days. After the 3 days are over, send what you have done in the time limit
