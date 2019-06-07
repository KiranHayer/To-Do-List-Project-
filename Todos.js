// check off specific Todos By Clicking

$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
});
//click on x to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
     $(this).remove();
 });
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span>" + todoText + "</li>")
			}

});

$(".fa-plus").click(function(){
$("input[type='text']").fadeToggle()
});
/*//if the li is gray
	if( $(this).css("color") === "rgb(128, 128, 128)"){
		//console.log("IT is gray!");
		$(this).css({
			color: "black",
			textDecoration: "none"
	});
		
		//else
		//turn it gray
	}
	else {
	$(this).css({
		color: "gray",
		textDecoration: "line-through"

	});

}*/


