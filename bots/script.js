/* Grmatrix 💚 */


(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
	
	//Navigation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}();

	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$("#switch").addClass("switched");
		}
	});
	
})(jQuery);
let boxes = Array.from(document.querySelectorAll(".box"));
let inView = elem => {
  return (
    window.scrollY >= elem.offsetTop - window.innerHeight + 200 &&
    window.scrollY <= elem.offsetTop + elem.offsetHeight
  );
};
let outView = elem => {
  return (
    window.scrollY >= elem.offsetTop + elem.offsetHeight ||
    window.scrollY <= elem.offsetTop - window.innerHeight
  );
};

let scroller = () => {
  boxes.forEach(i => {
    if (inView(i)) {
      i.classList.add("inView");
    }
    if (outView(i)) {
      i.classList.remove("inView");
    }
  });
};

window.addEventListener("scroll", scroller, false);

var doc = document,
    overlay = doc.querySelector('.overlay');

// Open the modal
doc.querySelector('.btn').addEventListener("click", function(){
  overlay.classList.add('show');
});

// Close the modal
doc.querySelector('.close').addEventListener("click", function(){
  overlay.classList.remove('show');
});
function gr(){
  window.location.href="elephant.html"
}