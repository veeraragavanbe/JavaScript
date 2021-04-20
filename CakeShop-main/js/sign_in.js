firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        //window.location = destination;



        var user = firebase.auth().currentUser;

        if (user != null) {
            var common_client_email = user.email;
            var uname = firebase.auth().currentUser.uid;

            localStorage.setItem("EMAIL_FROM_SIGN_UP", common_client_email);
            localStorage.setItem("UID_FROM_SIGN_UP", uname);

            window.location.assign("./mainpage.html");

        }

    } else {

        console.log('3');

        //window.location.assign("index.html");  

    }
});

function login() {

    const userEmail = document.getElementById("email_field").value;
    const userPass = document.getElementById("password_field").value;

    console.log(userEmail);
    localStorage.setItem("NAME", userEmail);
    localStorage.setItem("EMAIL", userPass);

    var playersRef = firebase.database().ref("customer_account");
    playersRef.orderByChild("Email").equalTo(userEmail).once("value", snapshot => {
        if (snapshot.exists()) {

            firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {

                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;

                window.alert("Error : " + errorMessage);

                // ...
            });
        } else {
            console.log('error')
            alert('Wrong Email or Password');
        }
    });

}