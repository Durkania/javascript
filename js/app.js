var Calculadora = {
	init: function(){
		this.iniciarVariables()
		this.reinicioDisplay()
	},
	iniciarVariables: function(){
		var self = this
		var classname = document.getElementsByClassName("tecla");
	 for (var i = 0; i < classname.length; i++) {
	    (function () {
	        var boxa = classname[i].id;
	        if(boxa!='mas'){
	        classname[i].addEventListener("mouseover", function() {  self.mouseover(boxa); }, false);
	         classname[i].addEventListener("mouseout", function() {  self.mouseout(boxa); }, false);
	     }
