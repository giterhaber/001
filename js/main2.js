// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyAZaVfOOPYkw3kFTi1FlynQ41vT4IMXVpQ",
    authDomain: "pamalikasako.firebaseapp.com",
    projectId: "pamalikasako",
    storageBucket: "pamalikasako.appspot.com",
    messagingSenderId: "393016043530",
    appId: "1:393016043530:web:356a22824be3f5d0ce57f3",
    measurementId: "G-FQ4XL0C28F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("infos");
  
  // Listen for a submit
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.querySelector(".name").value;
    let discord = document.querySelector(".discord").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    console.log(name, discord, email, message);
  
    saveContactInfo(name, discord, email, message);
  
    document.querySelector(".contact-form").reset();
  }
  
  // Save infos to Firebase
  function saveContactInfo(name, discord, email, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      discord: discord,
      email: email,
      message: message,
    });
  }