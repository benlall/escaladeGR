
$(document).ready(function(){

    $("li a, #returnTop").on("click", function(event){
    
        event.preventDefault();
        var hash = this.hash;
        
        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
        
    });

});


$(document).ready(function(){

    $("#archives").on("click", function(event){
    
        alert("page à venir");

	});
});