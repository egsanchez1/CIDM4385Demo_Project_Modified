//controllers/cars.js
function transform(model){
	//convert model to a JSON object
	var carObject = model.toJSON();
	var output = 	
	{
	"title" : carObject.model + " by " + carObject.make,
	"id" :model.cid
	};
	return output;
}

//only show vehicles made by Honda
function filter(collection)
{
	return collection.where(
		{
			make: "Honda"
		}
	);
}

// comment from Dr. Babb
//this is an event listener to ensure that the TalbleView bindings are cleaned up
//correctly and no memory leaks are left

//Free the model-view data binding resources when the view-controller closes
$.mainWindow.addEventListener("close", function()
{
	$.destroy();
});

$.table.addEventListener('click', function(_event){
	
	//get the correct model
	//var model
	var model = Alloy.Collections.cars.get(_event.rowData.modeId);
	
	//create the controller and pass the model to it
	var detailController = Alloy.createController("detail",
	{
		data: model
	});
	
	//get view returns to the root view when no view ID is provided
	detailController.getView().open(
		{
			modal: true	
		}
	);
	
});