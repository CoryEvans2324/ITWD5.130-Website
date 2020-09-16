var nav_toggle_shown_state = false;

function toggle_nav()
{
	var nav = document.getElementById('layout-nav');
	var btn = document.getElementById('layout-nav-toggle');

	if (nav_toggle_shown_state) {
		// closed
		nav.style.height = null;
		btn.innerHTML = '☰';
	} else {
		// open
		nav.style.height = 'auto';
		btn.innerHTML = '×';
	}

	nav_toggle_shown_state = nav.style.height == 'auto';
}