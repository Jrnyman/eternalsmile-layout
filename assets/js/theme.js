const rootget = document.querySelector(':root');
const usersays = {
	primary: document.getElementById("customPrimary"),
	secondary: document.getElementById("customSecondary"),
	splash: document.getElementById("customSplash"),
	ok: document.getElementById("alrighty"),
	nvm: document.getElementById("reboot"),
}
let local = {
	ready: localStorage.getItem("theme"),
	primary: localStorage.getItem("localW"),
	secondary: localStorage.getItem("localB"),
	splash: localStorage.getItem("localS"),
};

function setStyles() {
	rootget.style.setProperty('--white', local.primary);
	rootget.style.setProperty('--black', local.secondary);
	rootget.style.setProperty('--splash', local.splash);
}

if (!local.primary) {
	populateStorage();
} else if (ready=true) {
	setStyles();
	local.ready=false;
} else {
	setStyles();
};


