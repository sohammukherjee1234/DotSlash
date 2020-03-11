
var modelButton=document.querySelectorAll(".modal-open");

modelButton.forEach(function(btn){
    btn.onclick=function(){
        var modal=btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
    };
});

var closeButtons=document.querySelectorAll(".modal-close")

closeButtons.forEach(function(btn){
    btn.onclick=function(){
        var modal=btn.closest(".modal").style.display= "none";
        
    };
});