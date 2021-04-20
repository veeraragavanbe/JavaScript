var full_name, password, Rp_password, email_, mobile_, address_;


function getInputValue() {

    full_name = document.getElementById('full_name');
    password = document.getElementById('pass');
    Rp_password = document.getElementById('repeat_pass');
    email_ = document.getElementById('email');
    mobile_ = document.getElementById('mobile');
    address_ = document.getElementById('address');

}


document.getElementById('btnclient_signin').onclick = function() {
    getInputValue();

    firebase.auth().createUserWithEmailAndPassword(email_.value, password.value)
        .then(function(response) {
            console.log('success');
            console.log(response);
            var x1 = firebase.auth().currentUser.uid;

            var s1 = document.getElementById('c_date').value;

            firebase.database().ref('customer_account/' + x1).set({
                Full_name: full_name.value,
                Password1: password.value,
                Repeatps1: Rp_password.value,
                Mobile_number: mobile_.value,
                Address: address_.value,
                UserId: firebase.auth().currentUser.uid,
                Email: firebase.auth().currentUser.email
            })



        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.Message;
            console.log(errorCode);
            console.log(errorMessage);
            alert(errorMessage);
        });
    rd_redirect();
    // window.location.href = "signin.html";
}

function rd_redirect() {

    $(document).ready(function() {
        setTimeout(function() {
            //   alert('You Are SignIn Successfully');
            window.location.href = "./allertms.html";
        }, 5000);
    });
}