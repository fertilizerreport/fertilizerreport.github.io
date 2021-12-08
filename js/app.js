// xxxxxxxxxx Working For Sign Up Form xxxxxxxxxx
// xxxxxxxxxx Full dealername Validation xxxxxxxxxx
function checkdealername(){
    var dealername = document.getElementById("dealername");
    var dealernameFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(dealername.value.match(dealernameFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("dealernameError").style.display = "block";
    }else{
        document.getElementById("dealernameError").style.display = "none";
    }
}
// xxxxxxxxxx Full union Validation xxxxxxxxxx
function checkunion(){
    var union = document.getElementById("union");
    var unionFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(union.value.match(unionFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("unionError").style.display = "block";
    }else{
        document.getElementById("unionError").style.display = "none";
    }
}
// xxxxxxxxxx Full ureaallocated Validation xxxxxxxxxx
function checkureaallocated(){
    var ureaallocated = document.getElementById("ureaallocated");
    var ureaallocatedFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(ureaallocated.value.match(ureaallocatedFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("ureaallocatedError").style.display = "block";
    }else{
        document.getElementById("ureaallocatedError").style.display = "none";
    }
}
// xxxxxxxxxx Full lastupdate Validation xxxxxxxxxx
function checklastupdate(){
    var lastupdate = document.getElementById("lastupdate");
    var lastupdateFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(lastupdate.value.match(lastupdateFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("lastupdateError").style.display = "block";
    }else{
        document.getElementById("lastupdateError").style.display = "none";
    }
}
// xxxxxxxxxx Full ureadrawn Validation xxxxxxxxxx
function checkureadrawn(){
    var ureadrawn = document.getElementById("ureadrawn");
    var ureadrawnFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(ureadrawn.value.match(ureadrawnFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("ureadrawnError").style.display = "block";
    }else{
        document.getElementById("ureadrawnError").style.display = "none";
    }
}
// xxxxxxxxxx Full ureastore Validation xxxxxxxxxx
function checkureastore(){
    var ureastore = document.getElementById("ureastore");
    var ureastoreFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(ureastore.value.match(ureastoreFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("ureastoreError").style.display = "block";
    }else{
        document.getElementById("ureastoreError").style.display = "none";
    }
}
// xxxxxxxxxx Full dapallocated Validation xxxxxxxxxx
function checkdapallocated(){
    var dapallocated = document.getElementById("dapallocated");
    var dapallocatedFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(dapallocated.value.match(dapallocatedFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("dapallocatedError").style.display = "block";
    }else{
        document.getElementById("dapallocatedError").style.display = "none";
    }
}
// xxxxxxxxxx Full dapdrawn Validation xxxxxxxxxx
function checkdapdrawn(){
    var dapdrawn = document.getElementById("dapdrawn");
    var dapdrawnFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(dapdrawn.value.match(dapdrawnFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("dapdrawnError").style.display = "block";
    }else{
        document.getElementById("dapdrawnError").style.display = "none";
    }
}
// xxxxxxxxxx Full dapstore Validation xxxxxxxxxx
function checkdapstore(){
    var dapstore = document.getElementById("dapstore");
    var dapstoreFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(dapstore.value.match(dapstoreFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("dapstoreError").style.display = "block";
    }else{
        document.getElementById("dapstoreError").style.display = "none";
    }
}
// xxxxxxxxxx Full tspallocated Validation xxxxxxxxxx
function checktspallocated(){
    var tspallocated = document.getElementById("tspallocated");
    var tspallocatedFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(tspallocated.value.match(tspallocatedFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("tspallocatedError").style.display = "block";
    }else{
        document.getElementById("tspallocatedError").style.display = "none";
    }
}
// xxxxxxxxxx Full tspdrawn Validation xxxxxxxxxx
function checktspdrawn(){
    var tspdrawn = document.getElementById("tspdrawn");
    var tspdrawnFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(tspdrawn.value.match(tspdrawnFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("tspdrawnError").style.display = "block";
    }else{
        document.getElementById("tspdrawnError").style.display = "none";
    }
}
// xxxxxxxxxx Full tspstore Validation xxxxxxxxxx
function checktspstore(){
    var tspstore = document.getElementById("tspstore");
    var tspstoreFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(tspstore.value.match(tspstoreFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("tspstoreError").style.display = "block";
    }else{
        document.getElementById("tspstoreError").style.display = "none";
    }
}
// xxxxxxxxxx Full mopallocated Validation xxxxxxxxxx
function checkmopallocated(){
    var mopallocated = document.getElementById("mopallocated");
    var mopallocatedFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mopallocated.value.match(mopallocatedFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mopallocatedError").style.display = "block";
    }else{
        document.getElementById("mopallocatedError").style.display = "none";
    }
}
// xxxxxxxxxx Full mopdrawn Validation xxxxxxxxxx
function checkmopdrawn(){
    var mopdrawn = document.getElementById("mopdrawn");
    var mopdrawnFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mopdrawn.value.match(mopdrawnFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mopdrawnError").style.display = "block";
    }else{
        document.getElementById("mopdrawnError").style.display = "none";
    }
}
// xxxxxxxxxx Full mopstore Validation xxxxxxxxxx
function checkmopstore(){
    var mopstore = document.getElementById("mopstore");
    var mopstoreFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(mopstore.value.match(mopstoreFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("mopstoreError").style.display = "block";
    }else{
        document.getElementById("mopstoreError").style.display = "none";
    }
}


// xxxxxxxxxx Email Validation xxxxxxxxxx
function checkemail(){
    var email = document.getElementById("email");
    var emailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag;
    if(email.value.match(emailFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("emailError").style.display = "block";
    }else{
        document.getElementById("emailError").style.display = "none";
    }
}
// xxxxxxxxxx password Validation xxxxxxxxxx
function checkpassword(){
    var password = document.getElementById("password");
    //var passwordFormate = /(?=.*\d)(?=.[a-z])(?=.[A-Z]).{10,}/;      
    var flag = false;
    if(password === ""){
        flag = true;
    }    
    if(flag){
        document.getElementById("passwordError").style.display = "block";
    }else{
        document.getElementById("passwordError").style.display = "none";
    }
}
// xxxxxxxxxx Check user bio characters. It'll use later xxxxxxxxxx
function checkUserBio(){
    var userBio = document.getElementById("userBio").value;
    var flag = false;
    if(userBio.length < 10){
        flag = true;
    }
    if(flag){
        document.getElementById("userBioError").style.display = "block";
    }else{
        document.getElementById("userBioError").style.display = "none";
    }
}
// xxxxxxxxxx Submitting and Creating new user in firebase authentication xxxxxxxxxx
function signUp(){
    var dealername = document.getElementById("dealername").value;
	var union = document.getElementById("union").value;
	var lastupdate = document.getElementById("lastupdate").value;
	var ureaallocated = document.getElementById("ureaallocated").value;
    var ureadrawn = document.getElementById("ureadrawn").value;
    var dapdrawn = document.getElementById("dapdrawn").value;
    var ureastore = document.getElementById("ureastore").value;
    var dapallocated = document.getElementById("dapallocated").value;
    var dapstore = document.getElementById("dapstore").value;
    var tspallocated = document.getElementById("tspallocated").value;
    var tspdrawn = document.getElementById("tspdrawn").value;
    var tspstore = document.getElementById("tspstore").value;
    var mopallocated = document.getElementById("mopallocated").value;
	var mopdrawn = document.getElementById("mopdrawn").value;
	var mopstore = document.getElementById("mopstore").value;

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dealernameFormate = /^([A-Za-z.\s_-]).{5,}$/;    
    var emailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //var passwordFormate = /(?=.*\d)(?=.[a-z])(?=.[A-Z]).{5,}/;      

    var checkdealernameValid = dealername.match(dealernameFormate);
    var checkemailValid = email.match(emailFormate);
    //var checkpasswordValid = password.match(passwordFormate);

    if(checkdealernameValid == null){
        return checkdealername();
    }else if(union === ""){
        return checkunion();
    }else if(lastupdate === ""){
        return checklastupdate();
    }else if(ureaallocated === ""){
        return checkureaallocated();
    }else if(ureadrawn === ""){
        return checkureadrawn();
    }else if(ureastore === ""){
        return checkureastore();
    }else if(dapallocated === ""){
        return checkdapallocated();
    }else if(dapdrawn === ""){
        return checkdapdrawn();
    }else if(dapstore === ""){
        return checkdapstore();
    }else if(tspallocated === ""){
        return checktspallocated();
    }else if(tspdrawn === ""){
        return checktspdrawn();
    }else if(tspstore === ""){
        return checktspstore();
    }else if(mopallocated === ""){
        return checkmopallocated();
    }else if(mopdrawn === ""){
        return checkmopdrawn();
    }else if(mopstore === ""){
        return checkmopstore();
    }else if(checkemailValid == null){
        return checkemail();
    }else if(password == null){
        return checkpassword();
    }else{
        firebase.auth().createUserWithEmailAndpassword(email, password).then((success) => {
            var user = firebase.auth().currentUser;
            var uid;
            if (user != null) {
                uid = user.uid;
            }
            var firebaseRef = firebase.database().ref().child('fertilizer');
            var userData = {
                dealername: dealername,
				union: union,
				email: email,
				password: password
            }
            firebaseRef.child(uid).set(userData);
            swal('Account Successfully Created','Your account has been successfully created. Now you can Login to your account','success'
            ).then((value) => {
                setTimeout(function(){
                    window.location.replace("../index.html");
                }, 1000)
            });
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                type: 'error',
                title: 'Error',
                text: errorMessage,
            })
        });
    }
}
// xxxxxxxxxx Working For Sign In Form xxxxxxxxxx
// xxxxxxxxxx Sign In Email Validation xxxxxxxxxx
function checkUserSIEmail(){
    var userSIEmail = document.getElementById("userSIEmail");
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag;
    if(userSIEmail.value.match(userSIEmailFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("userSIEmailError").style.display = "block";
    }else{
        document.getElementById("userSIEmailError").style.display = "none";
    }
}
// xxxxxxxxxx Sign In password Validation xxxxxxxxxx
function checkUserSIpassword(){
    var userSIpassword = document.getElementById("userSIpassword");
    //var userSIpasswordFormate = /(?=.*\d)(?=.[a-z])(?=.[A-Z]).{5,}/;      
    var flag = false;
    if(password === ""){
        flag = true;
    }   
    if(flag){
        document.getElementById("userSIpasswordError").style.display = "block";
    }else{
        document.getElementById("userSIpasswordError").style.display = "none";
    }
}
// xxxxxxxxxx Check email or password exsist in firebase authentication xxxxxxxxxx    
function signIn(){
    var userSIEmail = document.getElementById("userSIEmail").value;
    var userSIPassword = document.getElementById("userSIPassword").value;
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //var userSIPasswordFormate = /(?=.*\d)(?=.[a-z])(?=.[A-Z]).{5,}/;      

    var checkemailValid = userSIEmail.match(userSIEmailFormate);
    //var checkpasswordValid = userSIPassword.match(userSIPasswordFormate);

    if(checkemailValid == null){
        return checkUserSIEmail();
    }else if(checkpassword == null){
        return checkUserSIPassword();
    }else{
        firebase.auth().signInWithEmailAndPassword(userSIEmail, userSIPassword).then((success) => {
            swal({
                type: 'success',
                title: 'Successfully Signed In', 
            }).then((value) => {
                setTimeout(function(){
                    window.location.replace("./pages/profile.html");
                }, 1000)
            });
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                type: 'error',
                title: 'Error',
                text: errorMessage,
            })
        });
    }
}
// admin sign in | xxxxxxxxxx Check email or password exsist in firebase authentication xxxxxxxxxx    
function signIn2(){
    var userSIEmail = document.getElementById("userSIEmail").value;
    var userSIPassword = document.getElementById("userSIPassword").value;
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //var userSIPasswordFormate = /(?=.*\d)(?=.[a-z])(?=.[A-Z]).{5,}/;      

    var checkemailValid = userSIEmail.match(userSIEmailFormate);
    //var checkpasswordValid = userSIPassword.match(userSIPasswordFormate);

    if(checkemailValid == null){
        return checkUserSIEmail();
    }else if(checkpassword == null){
        return checkUserSIPassword();
    }else{
        firebase.auth().signInWithEmailAndPassword(userSIEmail, userSIPassword).then((success) => {
            swal({
                type: 'success',
                title: 'Successfully Signed In', 
            }).then((value) => {
                setTimeout(function(){
                    window.location.replace("./all-dealers.html");
                }, 1000)
            });
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                type: 'error',
                title: 'Error',
                text: errorMessage,
            })
        });
    }
}
// xxxxxxxxxx Working For Profile Page xxxxxxxxxx
// xxxxxxxxxx Get data from server and show in the page xxxxxxxxxx
firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
    //   User is signed in.
        let user = firebase.auth().currentUser;
        let uid
        if(user != null){
            uid = user.uid;
        }
        let firebaseRefKey = firebase.database().ref().child('fertilizer').child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
            document.getElementById("pfdealername").innerHTML = dataSnapShot.val().dealername;
            document.getElementById("pfunion").innerHTML = dataSnapShot.val().union;
            document.getElementById("pflastupdate").innerHTML = dataSnapShot.val().lastupdate;
            document.getElementById("pfureaallocated").innerHTML = dataSnapShot.val().ureaallocated;
			document.getElementById("pfureadrawn").innerHTML = dataSnapShot.val().ureadrawn;
            document.getElementById("pfureastore").innerHTML = dataSnapShot.val().ureastore;
            document.getElementById("pfdapallocated").innerHTML = dataSnapShot.val().dapallocated;
            document.getElementById("pfdapdrawn").innerHTML = dataSnapShot.val().dapdrawn;
            document.getElementById("pfdapstore").innerHTML = dataSnapShot.val().dapstore;
            document.getElementById("pftspallocated").innerHTML = dataSnapShot.val().tspallocated;
            document.getElementById("pftspdrawn").innerHTML = dataSnapShot.val().tspdrawn;
            document.getElementById("pftspstore").innerHTML = dataSnapShot.val().tspstore;
            document.getElementById("pfmopallocated").innerHTML = dataSnapShot.val().mopallocated;
            document.getElementById("pfmopdrawn").innerHTML = dataSnapShot.val().mopdrawn;
            document.getElementById("pfmopstore").innerHTML = dataSnapShot.val().mopstore;
			
        })
    } else {
    //   No user is signed in.
    }
});
// xxxxxxxxxx Show edit profile form with detail xxxxxxxxxx
function showEditProfileForm(){
    document.getElementById("profileSection").style.display = "none"
    document.getElementById("editProfileForm").style.display = "block"
    var pfdealername = document.getElementById("pfdealername").innerHTML;
    var pfunion = document.getElementById("pfunion").innerHTML;
    var pflastupdate = document.getElementById("pflastupdate").innerHTML;
    var pfureaallocated = document.getElementById("pfureaallocated").innerHTML;
	var pfureadrawn = document.getElementById("pfureadrawn").innerHTML;
    var pfureastore = document.getElementById("pfureastore").innerHTML;
    var pfdapallocated = document.getElementById("pfdapallocated").innerHTML;
    var pfdapdrawn = document.getElementById("pfdapdrawn").innerHTML;
    var pfdapstore = document.getElementById("pfdapstore").innerHTML;
    var pftspallocated = document.getElementById("pftspallocated").innerHTML;
    var pftspdrawn = document.getElementById("pftspdrawn").innerHTML;
    var pftspstore = document.getElementById("pftspstore").innerHTML;
    var pfmopallocated = document.getElementById("pfmopallocated").innerHTML;
    var pfmopdrawn = document.getElementById("pfmopdrawn").innerHTML;
    var pfmopstore = document.getElementById("pfmopstore").innerHTML;
    
    document.getElementById("dealername").value = pfdealername; 
    document.getElementById("union").value = pfunion; 
    document.getElementById("ureaallocated").value = pfureaallocated;
	document.getElementById("ureadrawn").value = pfureadrawn; 
    document.getElementById("ureastore").value = pfureastore; 
    document.getElementById("dapallocated").value = pfdapallocated; 
    document.getElementById("dapdrawn").value = pfdapdrawn; 
    document.getElementById("dapstore").value = pfdapstore; 
    document.getElementById("tspallocated").value = pftspallocated; 
    document.getElementById("tspdrawn").value = pftspdrawn; 
    document.getElementById("tspstore").value = pftspstore; 
    document.getElementById("mopallocated").value = pfmopallocated; 
    document.getElementById("mopdrawn").value = pfmopdrawn; 
    document.getElementById("mopstore").value = pfmopstore;
}
// xxxxxxxxxx Hide edit profile form xxxxxxxxxx
function hideEditProfileForm(){
    document.getElementById("profileSection").style.display = "block";
    document.getElementById("editProfileForm").style.display = "none";
}
// xxxxxxxxxx Save profile and update database xxxxxxxxxx
function saveProfile(){
    let dealername = document.getElementById("dealername").value 
    let union = document.getElementById("union").value     
    let lastupdate = document.getElementById("lastupdate").value
    let ureaallocated = document.getElementById("ureaallocated").value
	let ureadrawn = document.getElementById("ureadrawn").value  
    let ureastore = document.getElementById("ureastore").value  
    let dapallocated = document.getElementById("dapallocated").value  
    let dapdrawn = document.getElementById("dapdrawn").value  
    let dapstore = document.getElementById("dapstore").value  
    let tspallocated = document.getElementById("tspallocated").value  
    let tspdrawn = document.getElementById("tspdrawn").value  
    let tspstore = document.getElementById("tspstore").value  
    let mopallocated = document.getElementById("mopallocated").value  
    let mopdrawn = document.getElementById("mopdrawn").value  
    let mopstore = document.getElementById("mopstore").value  
    
    var dealernameFormate = /^([A-Za-z.\s_-]).{5,}$/; 
    var checkdealernameValid = dealername.match(dealernameFormate);
    if(dealername == null){
        return checkdealername();
    }else if(union === ""){
        return checkunion();
    }else if(lastupdate === ""){
        return checklastupdate();
    }else if(ureaallocated === ""){
        return checkureaallocated();
    }else if(ureadrawn === ""){
        return checkureadrawn();
    }else if(ureastore === ""){
        return checkureastore();
    }else if(dapallocated === ""){
        return checkdapallocated();
    }else if(dapdrawn === ""){
        return checkdapdrawn();
    }else if(dapstore === ""){
        return checkdapstore();
    }else if(tspallocated === ""){
        return checktspallocated();
    }else if(tspdrawn === ""){
        return checktspdrawn();
    }else if(tspstore === ""){
        return checktspstore();
    }else if(mopallocated === ""){
        return checkmopallocated();
    }else if(mopdrawn === ""){
        return checkmopdrawn();
    }else if(mopstore === ""){
        return checkmopstore();
    }else{
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref().child('fertilizer');
        var userData = {
            dealername: dealername,
            union: union,
            lastupdate: lastupdate,
            ureaallocated: ureaallocated,
			ureadrawn: ureadrawn,
            ureastore: ureastore,
            dapallocated: dapallocated,
            dapdrawn: dapdrawn,
            dapstore: dapstore,
            tspallocated: tspallocated,
            tspdrawn: tspdrawn,
            tspstore: tspstore,
            mopallocated: mopallocated,
            mopdrawn: mopdrawn,
            mopstore: mopstore
        }
        firebaseRef.child(uid).set(userData);
        swal({
            type: 'success',
            title: 'Successfully Updated',
            text: 'Profile has been successfully updated', 
        }).then((value) => {
            setTimeout(function(){
                document.getElementById("profileSection").style.display = "block";
                document.getElementById("editProfileForm").style.display = "none";
            }, 1000)
        });
    }
}
// xxxxxxxxxx Working For Sign Out xxxxxxxxxx
function signOut(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        swal({
            type: 'success',
            title: 'Successfully Signed Out', 
        }).then((value) => {
            setTimeout(function(){
                window.location.replace("../index.html");
            }, 1000)
        });
    }).catch(function(error) {
        // An error happened.
        let errorMessage = error.message;
        swal({
            type: 'error',
            title: 'Error',
            text: errorMessage,
        })
    });
}
