 // firebaseConfig.js
    import { initializeApp } from 'firebase/app';

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDwdFssKc8-QiyrMNwVURNga882xpO4bIY",
        authDomain: "lunchboxweb-7b9c1.firebaseapp.com",
        projectId: "lunchboxweb-7b9c1",
        storageBucket: "lunchboxweb-7b9c1.firebasestorage.app",
        messagingSenderId: "160202746545",
        appId: "1:160202746545:web:087529c4e7432a91329090",
        measurementId: "G-C2E1SK93M1"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Export the initialized app and any other services you need
    export { app };