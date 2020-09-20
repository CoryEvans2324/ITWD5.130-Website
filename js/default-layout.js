var nav_toggle_shown_state = false;

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
