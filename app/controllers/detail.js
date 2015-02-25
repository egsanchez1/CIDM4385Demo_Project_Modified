//controllers/detail.js
//this is how we accept arguments passed to the controller (usually from another controller)
var args = arguments[0] || {};

//close the window when the button is clicked
$.closeBtn.addEventListener("click", function(){
	$.detailWindow.close();
});


//instance variable use in data binding.
//we do this set here to trigger the events
//that will cause the data to be rendered
$.car.set(args.data); //typed from Dr.Babb code why isnt .attributes here like the book? caused error?

//Free model-view data binding resources when this
//view-controller closes
$.detailWindow.addEventListener("close",function(){
	$.destroy();
});