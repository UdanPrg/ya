$(document).ready(fucntion(){
	// Instance the tour
	var tour = new Tour({
	  steps: [
	  {
	    element: "#paso1",
	    title: "´Título",
	    content: "<h5>Da click en la imagen si quieres verla completa</h5>",
	    placement: "bottom"
	  },
	  {
	    element: "#paso2",
	    title: "´Título",
	    content: "<h5>Si quieres volver al inico solo pulsa mi nombre</h5>",
	    placement: "bottom"
	  }
	],
});

	// Initialize the tour
	tour.init();

	// Start the tour
	tour.start();
});