$(function(){

	$("a").click(function(event){
		if (this.hash !== "") {
			event.preventDefault();
			//esta previniendo que no envíe el link a otro lado, sino que actue solo como ancla
			
			var gato = this.hash;

			$("html, body").animate({
				scrollTop: $(gato).offset().top 
			}, 800, function(){
			window.location.hash = gato;
		   });
		}
	});
});