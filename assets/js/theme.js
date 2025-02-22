const rootget = document.querySelector(':root');
var local = {
	ready: localStorage.getItem("theme"),
	primary: localStorage.getItem("localP"),
//	secondary: ,
//	splash: ,
};
function setStyles() {
	rootget.style.setProperty('--white', local.primary);
}
if (!local.primary) {
	populateStorage();
} else {
	setStyles();
};


