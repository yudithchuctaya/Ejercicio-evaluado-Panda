$(document).ready(function() {
    $("#cerrar1") .click(function(){
    	$("#imagen-panda1") .hide(function(){
    		$("#cerrar1") .hide();
    	});
     });
    $("#cerrar2") .click(function(){
    	$("#imagen-panda2") .hide(function(){
    		$("#cerrar2") .hide();
    	});
     });
    $("#cerrar3") .click(function(){
    	$("#imagen-panda3") .hide(function(){
    		$("#cerrar3") .hide();
    	});
     });
    $("#cerrar4") .click(function(){
    	$("#imagen-panda4") .hide(function(){
    		$("#cerrar4") .hide();
    	});
     });
    $("#restaurar") .click(function(){
    	$("#imagen-panda1,#imagen-panda2,#imagen-panda3,#imagen-panda4,#cerrar1,#cerrar2,#cerrar3,#cerrar4") .show();
    });

    $("#existencia") .click(function(){
    	$(".primero2") .hide();
    });
    $("#origen") .click(function(){
    	$(".primero2") .show();
    });
  
     $("#origen").addClass("animated fadeInLeft");
     $("#existencia").addClass("animated fadeInUp");
     $("#restaurar").addClass("animated fadeInRight");
     

     $("#imagen-panda1").addClass("animated fadeInLeftBig");
     $("#imagen-panda2,#imagen-panda3").addClass("animated flash");
     $("#imagen-panda4").addClass("animated fadeInRightBig");
   
    



  });