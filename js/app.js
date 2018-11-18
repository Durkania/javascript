var Calculadora = {
    keys: {'0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','punto':'.',
	'sign':'s','mas':'+','menos':'-','por':'*','dividido':'/','raiz':'r','igual':'=','on':'o'},
	ids: {'0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','.':'punto',
	's':'sign','+':'mas','-':'menos','*':'por','/':'dividido','r':'raiz','=':'igual','o':'on'},
	pantalla: document.getElementById('display'),
	pantallaGuardada: '',
	operacionActual: '',
	operacionAnterior: '',
	init: function() {
		document.onmousedown = this.manejadorMouseDown;
		document.onmouseup = this.manejadorMouseUp;
		document.onkeydown = this.manejadorKeyDown;
		document.onkeyup = this.manejadorKeyUp;
	},
}

window.onload = function() {
	Calculadora.init();5
	console.log('calculadora lista')
};
