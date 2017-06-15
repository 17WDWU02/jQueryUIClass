$(document).ready(function(){

	//Draggable
	// $('#box1').draggable();
	$('#box1, #box3').draggable({
		containment: "parent"
	});

	
	//Droppable
	$('#box2').droppable({
		accept: "#box1",
		drop: function(event, ui){
			$(this).addClass("red");
		}
	});

	$("#box4").resizable();

	$("#selectable").selectable();

	$("#sortable").sortable();

	// $(".ListItem").click(function(){
	// 	$(this).addClass("")
	// })

	


});