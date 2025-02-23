const rootget = document.querySelector(':root');
const usersays = {
	primary: document.getElementById("customPrimary"),
	secondary: document.getElementById("customSecondary"),
	splash: document.getElementById("customSplash"),
	ok: document.getElementById("alrighty"),
	nvm: document.getElementById("reboot"),
	input: {primary: null, secondary: null, splash: null}
}
var local = {
	ready: localStorage.getItem("theme"),
	primary: localStorage.getItem("localP"),
//	secondary: ,
//	splash: ,
};
//const gotcha = ["primary", "secondary", "splash"] 
function setStyles() {
	rootget.style.setProperty('--white', local.primary);
}
if (!local.primary) {
	populateStorage();
} else {
	setStyles();
};


