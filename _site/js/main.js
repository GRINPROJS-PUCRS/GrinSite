/* ---- particles.js config ---- */

particlesJS("particles-js", {
	particles: {
	  number: {
		value: 80,
		density: {
		  enable: true,
		  value_area: 800
		}
	  },
	  color: {
		value: ["#00d5c9", "#636363", "#36C5F0"]
	  },
	  shape: {
		type: ["circle"],
		stroke: {
		  width: 0,
		  color: "#fff"
		},
		polygon: {
		  nb_sides: 5
		},
		image: {
		  src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
		  width: 100,
		  height: 100
		}
	  },
	  opacity: {
		value: 1,
		random: false,
		anim: {
		  enable: false,
		  speed: 1,
		  opacity_min: 0.1,
		  sync: false
		}
	  },
	  size: {
		value: 8,
		random: true,
		anim: {
		  enable: false,
		  speed: 10,
		  size_min: 10,
		  sync: false
		}
	  },
	  line_linked: {
		enable: true,
		distance: 150,
		color: "#808080",
		opacity: 0.4,
		width: 1
	  },
	  move: {
		enable: true,
		speed: 5,
		direction: "none",
		random: false,
		straight: false,
		out_mode: "out",
		bounce: false,
		attract: {
		  enable: false,
		  rotateX: 600,
		  rotateY: 1200
		}
	  }
	},
	interactivity: {
	  detect_on: "canvas",
	  events: {
		onhover: {
		  enable: true,
		  mode: "grab"
		},
		onclick: {
		  enable: true,
		  mode: "push"
		},
		resize: true
	  },
	  modes: {
		grab: {
		  distance: 140,
		  line_linked: {
			opacity: 1
		  }
		},
		bubble: {
		  distance: 400,
		  size: 40,
		  duration: 2,
		  opacity: 8,
		  speed: 3
		},
		repulse: {
		  distance: 200,
		  duration: 0.4
		},
		push: {
		  particles_nb: 4
		},
		remove: {
		  particles_nb: 2
		}
	  }
	},
	retina_detect: true
  });

var normal = document.getElementById("nav-menu");
var reverse = document.getElementById("nav-menu-left");

var icon = normal !== null ? normal : reverse;

// Toggle the "menu-open" % "menu-opn-left" classes
function toggle() {
	  var navRight = document.getElementById("nav");
	  var navLeft = document.getElementById("nav-left");
	  var nav = navRight !== null ? navRight : navLeft;

	  var button = document.getElementById("menu");
	  var site = document.getElementById("wrap");
	  
	  if (nav.className == "menu-open" || nav.className == "menu-open-left") {
	  	  nav.className = "";
	  	  button.className = "";
	  	  site.className = "";
	  } else if (reverse !== null) {
	  	  nav.className += "menu-open-left";
	  	  button.className += "btn-close";
	  	  site.className += "fixed";
	  } else {
	  	  nav.className += "menu-open";
	  	  button.className += "btn-close";
	  	  site.className += "fixed";
	    }
	}

// Ensures backward compatibility with IE old versions
function menuClick() {
	if (document.addEventListener && icon !== null) {
		icon.addEventListener('click', toggle);
	} else if (document.attachEvent && icon !== null) {
		icon.attachEvent('onclick', toggle);
	} else {
		return;
	}
}

menuClick();