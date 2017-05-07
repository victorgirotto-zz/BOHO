var drag_div = $("div#draggable");
var warm_div = $("div#warm");
var cold_div = $("div#cold");


var nrow = 5;
var num_helped = 0;

for (var i = 0; i < nrow; i++) {
	warm_div.append("<img src = 'images/warm.png'>")
}

var nrow = 5;
for (var i = 0; i < nrow; i++) {
	cold_div.append("<img src = 'images/cold.png'>")
}

function update_dollar(num_helped) {
	var dollar = 5 * num_helped;
	$("span#numhelp").text(num_helped);
	$("span#dollar").text(dollar);
}

// drag and drop
cold_div.children().each(function() {
	$(this).draggable();
})

$('div#droparea').droppable({
tolerance: 'pointer',
drop: function(event, ui) {
  ui.draggable.attr("src", "images/warm.png")
  num_helped = num_helped + 1;
  update_dollar(num_helped);
}
});

