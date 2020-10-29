var nav_toggle_shown_state = false;
var onload_functions = [];

function toggle_nav()
{
	var nav = document.getElementById('layout-nav');
	var btn = document.getElementById('layout-nav-toggle');

	if (nav_toggle_shown_state) {
		// closed
		nav.style.maxHeight = '0px';
		btn.innerHTML = '☰';
	} else {
		// open
		nav.style.maxHeight = '400px';
		btn.innerHTML = '×';
	}

	nav_toggle_shown_state = nav.style.maxHeight == '400px';
}

function on_layout_resize()
{
	var nav = document.getElementById('layout-nav');

	if (document.body.clientWidth >= 750)
	{

		nav.style.maxHeight = null;
	}
}

function display_scrollToTop() {
	if (window.innerHeight < document.body.clientHeight) {
		document.getElementById('scroll-to-top').style.display = 'block';
	}
}

function sticky_footer() {
	if (window.innerHeight >= document.body.clientHeight) {
		var footer = document.getElementById('layout-footer');
		footer.style.position = 'absolute'
		footer.style.bottom = 0
		footer.style.width = '100%'
	}
}

window.onload = () => {
	for (let i = 0; i < onload_functions.length; i++) {
		onload_functions[i]();
	}
	sticky_footer()
}

document.body.onscroll = () => {
	display_scrollToTop()
}
