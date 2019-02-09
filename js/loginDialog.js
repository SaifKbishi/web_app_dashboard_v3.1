//open the modal
function myFunction() {
	document.getElementById('loginFormModal').style.display='block';
}
// Get the modal
var modal = document.getElementById('loginFormModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Test for local storage
function supportsLocalStorage() {
  try {
	return 'localStorage' in window && window['localStorage'] !== null;
  } catch(e){
	return false;
  }
}

window.onload = function() {
	// Make sure Local Storage exists before trying to use it
  if (supportsLocalStorage()) {
	const userNameInput = document.getElementById('userNameInput');
	const dialogLoginButton = document.getElementById('dialogLoginButton');
	const userNameOutput = document.getElementById('userNameOutput');
	const btnLogout = document.getElementById('btnLogout');


	dialogLoginButton.onclick = function(){
		const loginName = userNameInput.value;
		if(loginName){
			localStorage.setItem('loginNamevalue', loginName)
		}
		//display the logout button
		//document.getElementById('Logout').style.display='block'
		//document.getElementById('login').style.visibility='hidden'
	};

	const loginNamekey = localStorage.key(0);
	const loginNamevalue = localStorage.getItem(loginNamekey);
	userNameOutput.innerHTML += `${loginNamevalue}`;
  }
  // btnLogout.onclick = function(){
	// should clear login name and all storage
  // };
};

//handling the loign items
/*const login = document.getElementById('login');
const btnLogout = document.getElementById('btnLogout');
const userNameOutput = document.getElementById('userNameOutput');

if(localStorage.loginNamevalue){
	login.style.display = "none";
	}else{
		userNameOutput.style.display = "none";
		btnLogout.style.display = "none";
	}*/
