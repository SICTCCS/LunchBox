# LunchBox
Website for The Lunchbox - SICTC's Culinary Program's Restaurant

## Front-End Overview

### index.html
<img src="mdimages/indexOverview.png" height="300px" width="600px"> <br>
This is the main landing page, which shows the weekly menu, information about the resturaunt, and pricing information. <br>

### contact.html
<img src="mdimages/contactOverview.png" height="300px" width="600px"> <br>
This is the other page that the public can access, which has a 'connect with us' form that allows the user to input their name, comments/questions they have, how they found out about the resturaunt, and whether or not they want to sign up for the weekly newsletter. When the user clicks 'submit', the default mail app will open with the information they entered preloaded in the body of the email. <br><br>
The second card displays a map of SICTC and where the visitors need to park. A link to Google Maps is also provided. <br>

### uploadMenu.html
<img src="mdimages/uploadOverview.png" height="300px" width="600px"> <br>
This is the admin page. Each day (tue, wed, thu) have their own cards that mimic a similar look to the menu seen by the public. The card on the right has a link to the current menu to make it easier for the admin to see what changes need to be made, email and password input areas, and a publish button. *IMPORTANT - Leaving data fields blank will result in the current menu data being erased, NOT unchanged.<br>


# Inside the Code

## index.html

The following code is located at the top of 'index.html' in the head section. <br>

The firebase is imported, configurated, and initialized - This data can be found in the project settings of the firebase console site. <br>
```
<script type="module">
    //imports and configs
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
    import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
    document.addEventListener("DOMContentLoaded", function () {
    const firebaseConfig = {
        apiKey: "AIzaSyCH0Zyzj5tukPUZacOM_xJZk3wFLQIvgNw",
        authDomain: "lunchbox-60fb5.firebaseapp.com",
        databaseURL: "https://lunchbox-60fb5-default-rtdb.firebaseio.com",
        projectId: "lunchbox-60fb5",
        storageBucket: "lunchbox-60fb5.appspot.com",
        messagingSenderId: "534903316915",
        appId: "1:534903316915:web:e7b8e503540d234632ebc6",
        measurementId: "G-TD5GSSYSSY"
        };
        //initialize firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const menuRef = doc(db, 'menu', 'menuDocument');
```




The function 'updateMenu(snapshot)' is called to update the menu data. The function contains each data field that is being updated. <br>
updateMenuItem('{elementId}','{dataKey - found in the 'construct menu data' section in uploadMenu.html}') <br>
```
//function to update the menu content
function updateMenu(snapshot) {
    const menuDocument = snapshot.data();
    //update the HTML based on current data structure
    updateMenuItem('date1', 'tuesday_date');
    updateMenuItem('entree1', 'tuesday_entree');
    updateMenuItem('soup1', 'tuesday_soup');
    updateMenuItem('salad1', 'tuesday_salad');
    updateMenuItem('side1', 'tuesday_side');
    updateMenuItem('dessert1', 'tuesday_dessert');
    updateMenuItem('closed1', 'tuesday_closed');
                
    updateMenuItem('date2', 'wednesday_date');
    updateMenuItem('entree2', 'wednesday_entree');
    updateMenuItem('soup2', 'wednesday_soup');
    updateMenuItem('salad2', 'wednesday_salad');
    updateMenuItem('side2', 'wednesday_side');
    updateMenuItem('dessert2', 'wednesday_dessert');
    updateMenuItem('closed2', 'wednesday_closed');
                
    updateMenuItem('date3', 'thursday_date');
    updateMenuItem('entree3', 'thursday_entree');
    updateMenuItem('soup3', 'thursday_soup');
    updateMenuItem('salad3', 'thursday_salad');
    updateMenuItem('side3', 'thursday_side');
    updateMenuItem('dessert3', 'thursday_dessert');
    updateMenuItem('closed3', 'thursday_closed');
```




This function 'updateMenuItem' checks that the data key is valid and updates the data. The snapshot listener looks for new data to load. <br>
```
function updateMenuItem(elementId, dataKey) {
    //check if the dataKey is defined in menuDocument
    if (menuDocument[dataKey] !== undefined) {
        //update the HTML element with the corresponding data
        document.getElementById(elementId).innerText = menuDocument[dataKey];
        } else {
            console.error(`${dataKey} is undefined in menuDocument`);
            }
        }
    }
    //set up the snapshot listener
    onSnapshot(menuRef, updateMenu);
    });
</script>
```













## contact.html

The following code is located near the bottom of contact.html. This page does not have firebase script. <br>

The  <br>
```
<script>
    function submitForm() {
        //get form input values
            var firstName = document.getElementById('firstname').value;
            var lastName = document.getElementById('lastname').value;
            var comments = document.getElementById('comment').value;
            var foundOut = document.getElementById('foundOut').value;
            var mailingList = document.getElementById('mailingList').checked;
            //check if required fields are not empty
            if (firstName.trim() === '' || lastName.trim() === '' || comments.trim() === '') {
                alert('Please fill in all required fields.');
                return;
                }
                //create email content
                var fullName = `${firstName} ${lastName}`;
                var mailingListText = mailingList ? 'Yes' : 'No';
                //construct the email content as a full sentence with new lines
                var emailContent = `My name is ${fullName} and my comment/question is "${comments}".\n`;
                if (foundOut.trim() !== '') {
                    emailContent += `I found out about this restaurant from ${foundOut}.\n`;
                }
                if (mailingList) {
                    emailContent += `I want to be part of the mailing list.\n`;
                } else {
                    emailContent += `I do not want to be part of the mailing list.\n`;
                }
                //open email client with preloaded content
                window.location.href = 'mailto:samuel.wagoner@evsck12.com?subject=Contact Form Submission&body=' + encodeURIComponent(emailContent);
                }
</script>
```





















## What does each file do?
### Full File List:
<img src="mdimages/fileList.png" height="260px" width="140px"> 

### Inside Public Folder
The 'public' folder contains the HTML files, as well as the CSS file. <br>
The 'content' folder contains the images used within the website. <br>
The 'DS_Store' is a file that can be seen throughout the project and can be ignored.<br>
<img src="mdimages/publicFileList.png" height="225px" width="140px"> 





