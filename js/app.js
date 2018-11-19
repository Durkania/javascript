var calculadora = {
  led: document.getElementById('display'),
  valorled: "0",
  ejercicio: "",
  priValor: 0,
  seguValor: 0,
  valorFinal: 0,
  derivado: 0,
  igualePos: false,

init: (function(){
    this.asignarEfectoBotones(".tecla");
    this.asignarEventosBotones();
  }),

asignarEfectoBotones: function(selector){
    var x = document.querySelectorAll(selector);
    for (var i = 0; i < x.length; i++) {
      x[i].onmousedown = this.eventoMinimizaBoton;
      x[i].onmouseup = this.eventoMaximizaBoton;
    };
  },

eventoMaximizaBoton: function(event){
    calculadora.MaximizaBoton(event.target);
  },

eventoMinimizaBoton: function(event){
    calculadora.MinimizaBoton(event.target);
  },

MaximizaBoton: function(elemento){
    var x = elemento.id;
    if(x=="1" || x=="2" || x=="3" || x=="0" || x=="igual" || x=="punto"){
      elemento.style.width = "29%";
      elemento.style.height = "62.91px";
    } else if( x == "mas") {
      elemento.style.width = "90%";
      elemento.style.height = "100%";
    } else {
      elemento.style.width = "22%";
      elemento.style.height = "62.91px";
    }
  },

MinimizaBoton: function(elemento){
    var x = elemento.id ;
    if(x=="1" || x=="2" || x=="3" || x=="0" || x=="igual" || x=="punto"){
      elemento.style.width = "28%";
      elemento.style.height = "62px";
    } else if (x == "mas") {
      elemento.style.width = "88%";
      elemento.style.height = "98%";
    }else{
      elemento.style.width = "21%";
      elemento.style.height = "62px";
    }
  },

asignarEventosBotones: function(){
    document.getElementById("0").addEventListener("click", function(){
      calculadora.ingresarNumero("0");
    });
    document.getElementById("1").addEventListener("click", function(){
      calculadora.ingresarNumero("1");
    });
    document.getElementById("2").addEventListener("click", function(){
      calculadora.ingresarNumero("2");
    });
    document.getElementById("3").addEventListener("click", function(){
      calculadora.ingresarNumero("3");
    });
    document.getElementById("4").addEventListener("click", function(){
      calculadora.ingresarNumero("4");
    });
    document.getElementById("5").addEventListener("click", function(){
      calculadora.ingresarNumero("5");
    });
    document.getElementById("6").addEventListener("click", function(){
      calculadora.ingresarNumero("6");
    });
    document.getElementById("7").addEventListener("click", function(){
      calculadora.ingresarNumero("7");
    });
    document.getElementById("8").addEventListener("click", function(){
      calculadora.ingresarNumero("8");
    });
    document.getElementById("9").addEventListener("click", function(){
      calculadora.ingresarNumero("9");
    });
    document.getElementById('on').addEventListener("click", function(){
      calculadora.limpiarled();
    });
    document.getElementById('sign').addEventListener("click", function(){
      calculadora.cambiarSigno();
    });
    document.getElementById('punto').addEventListener("click", function(){
      calculadora.puntoDecimal();
    });
    document.getElementById('raiz').addEventListener("click", function(){
      calculadora.ejercicioes("raiz");
    });
    document.getElementById('dividido').addEventListener("click", function(){
      calculadora.ejercicioes("/");
    });
    document.getElementById('por').addEventListener("click", function(){
      calculadora.ejercicioes("*");
    });
    document.getElementById('menos').addEventListener("click", function(){
      calculadora.ejercicioes("-");
    });
    document.getElementById('mas').addEventListener("click", function(){
      calculadora.ejercicioes("+");
    });
    document.getElementById('igual').addEventListener("click", function(){
      calculadora.derivadoled();
    });

  },

  ingresarNumero: function(numero){
    if (this.valorled.length < 9) {
      if(this.valorled == "0"){
        this.valorled = "";
        this.valorled = this.valorled + numero;
      }else{
        this.valorled = this.valorled + numero;
      }
      this.actualizarled();
    }
  },

  limpiarled: function(){
    this.valorled = "0";
    this.ejercicio = "0";
    this.priValor = 0;
    this.seguValor = 0;
    this.derivado = 0;
    this.igualePos = false;
    this.valorFinal = 0;
    this.actualizarled();
  },

  cambiarSigno: function(){
    if (this.valorled != "0") {
      var aux;
      if (this.valorled.charAt(0) == "-") {
        aux = this.valorled.slice(1);
      } else {
        aux = "-" + this.valorled;
      }
      this.valorled = "";
      this.valorled = aux;
      this.actualizarled();
    }
  },

  actualizarled: function(){
    this.led.innerHTML = this.valorled;
  },

  puntoDecimal: function(){
    if (this.valorled.indexOf(".") == -1) {
      if (this.valorled == "") {
        this.valorled = this.valorled + "0.";
      }else {
        this.valorled = this.valorled + ".";
      }
      this.actualizarled();
    }
  },

  ejercicioes: function(oper){
    this.priValor = parseFloat(this.valorled);
    this.valorled = "";
    this.ejercicio = oper;
    this.igualePos = false;
    this.actualizarled();
  },

  derivadoled: function(){
    if(!this.igualePos){
      this.seguValor = parseFloat(this.valorled);
      this.valorFinal = this.seguValor;

      this.ejecutarejercicio(this.priValor, this.seguValor, this.ejercicio);
    } else {
      this.ejecutarejercicio(this.priValor, this.valorFinal, this.ejercicio);
    }

    this.priValor = this.derivado;

    this.valorled = "";

    if(this.derivado.toString().length < 9){
      this.valorled = this.derivado.toString();
    }else{
      this.valorled = this.derivado.toString().slice(0, 9) + "...";
    }

    this.igualePos = true;
    this.actualizarled();
  },

  ejecutarejercicio: function(priValor, seguValor, ejercicio){
    switch (ejercicio) {
      case "+":
        this.derivado = eval(priValor + seguValor);
        break;
      case "-":
        this.derivado = eval(priValor - seguValor);
        break;
      case "*":
        this.derivado = eval(priValor * seguValor);
        break;
      case "/":
        this.derivado = eval(priValor / seguValor);
        break;
      case "raiz":
        this.derivado = eval(Math.sqrt(priValor));
        break;
      default:
        this.derivado = "Error";
    }
  }
}
calculadora.init();
