//imports and configs
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
        import { getFirestore, collection, query, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
        document.addEventListener("DOMContentLoaded", function () {
             const firebaseConfig = {
                 apiKey: "AIzaSyDwdFssKc8-QiyrMNwVURNga882xpO4bIY",
                 authDomain: "lunchboxweb-7b9c1.firebaseapp.com",
                 projectId: "lunchboxweb-7b9c1",
                 storageBucket: "lunchboxweb-7b9c1.firebasestorage.app",
                 messagingSenderId: "160202746545",
                 appId: "1:160202746545:web:087529c4e7432a91329090",
                 measurementId: "G-C2E1SK93M1"
             };
            //initialize firebase
            const app = initializeApp(firebaseConfig);
            const db = getFirestore(app);
            const menuCollectionRef = collection(db, 'menu');
            //create a query to get the most recent menu document
            const queryRef = query(menuCollectionRef, orderBy('timestamp', 'desc'), limit(1));
            //set up the snapshot listener
            onSnapshot(queryRef, updateMenu);
            //function to update the menu
            function updateMenu(snapshot) {
                if (!snapshot.empty) {
                    const mostRecentDocument = snapshot.docs[0];
                    const menuDocument = mostRecentDocument.data();
                    //update the HTML 
                    updateMenuItem('date1', 'tuesday_date');
                    updateMenuItem('entree1', 'tuesday_entree');
                    updateMenuItem('soup1', 'tuesday_soup');
                    updateMenuItem('salad1', 'tuesday_salad');
                    updateMenuItem('side1', 'tuesday_side');
                    updateMenuItem('dessert1', 'tuesday_dessert');
                    updateMenuItem('closed1', 'tuesday_closed');
                    /*updateMenuItem('date2', 'wednesday_date');
                    updateMenuItem('entree2', 'wednesday_entree');
                    updateMenuItem('soup2', 'wednesday_soup');
                    updateMenuItem('salad2', 'wednesday_salad');
                    updateMenuItem('side2', 'wednesday_side');
                    updateMenuItem('dessert2', 'wednesday_dessert');
                    updateMenuItem('closed2', 'wednesday_closed');*/
                    updateMenuItem('date3', 'thursday_date');
                    updateMenuItem('entree3', 'thursday_entree');
                    updateMenuItem('soup3', 'thursday_soup');
                    updateMenuItem('salad3', 'thursday_salad');
                    updateMenuItem('side3', 'thursday_side');
                    updateMenuItem('dessert3', 'thursday_dessert');
                    updateMenuItem('closed3', 'thursday_closed');

                    //update all items
                    function updateMenuItem(elementId, dataKey) {
                        if (menuDocument[dataKey] !== undefined) {
                            document.getElementById(elementId).innerText = menuDocument[dataKey];
                            document.getElementById(elementId).display = 'block';
                        } 
                        else {
                            console.error(`${dataKey} is undefined in menuDocument`);
                        }
                    }
                } 
                else {
                    console.log('No documents found in the "menu" collection.');
                }
            }
        });