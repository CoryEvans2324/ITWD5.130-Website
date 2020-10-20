var slideIndex = 0

function slideshowNext() {
	slideIndex = (slideIndex + 1) % getNumberOfSlides()
	showSlide()
}

function slideshowPrevious() {
	slideIndex = (slideIndex - 1) % getNumberOfSlides()
	showSlide()
}

function showSlide() {
	var panels = document.getElementById('slideshow')
						 .getElementsByClassName('slideshow-panel')
	for (let i = 0; i < panels.length; i++) {
		var p = panels[i]
		p.style.display = 'none'
	}

	panels[slideIndex].style.display = 'unset'
}

function getNumberOfSlides() {
	var slideshow = document.getElementById('slideshow')
	return slideshow.getElementsByClassName('slideshow-panel').length;
}

onload_functions.push(showSlide)
