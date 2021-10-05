let ubicacionPrincipla =  window.pageYOffset;
window.onscroll = function(){
let desplazamiento =window-pageYOffset;
if(ubicacionPrincipla>=desplazamiento){
	this.document.getElementById('navbar').style.top = 'a';
}

}