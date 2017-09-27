var imagens =["images/af.jpg","images/bl.jpg","images/jn.png","images/sr.jpg","images/rn.jpg","images/ca.jpg","images/aa.jpg","images/ac.jpg","images/auf.jpg","images/bs.jpg","images/cm.jpg","images/dc.jpg","images/dg.jpg","images/fs.jpg","images/jr.jpg","images/lc.jpg","images/mb.jpg","images/oc.jpg","images/sec.jpg","images/sl.jpg","images/sc.jpg","images/vl.jpg","images/wd.jpg"];
var nomes=["Deputado Abdala Fraxe.","Deputado Berlamino Lins.","Deputado Josué Neto.","Deputado Sabá Reis.","Deputado Ricardo Nicolau.","Deputado Carlos Alberto.","Deputado Adjunto Afonso.","Deputada Alessandra Campelo.","Deputado Augusto Ferraz.","Deputado Bosco Saraiva.","Deputado Bosco Saraiva.","Deputado Cabo Maciel.","Deputado Demilson Chagas.","Deputado Dr. Gomes.","Deputado Francisco Souza","Deputado José Ricardo.","Deputado Luiz Castro.","Deputado Mario Bastos.","Deputado Orlando Cidade.","Deputado Serafim Corrêa.","Deputado Sidney Leite.","Deputado Sinésio Campos.","Deputado Vicente Lopes.","Deputado Wanderley Dias."]
function escolha(el) {
  
  var style = window.getComputedStyle(el).backgroundColor;
  if (style == 'rgb(255, 255, 255)') {
    el.style.backgroundColor = "rgb(204, 242, 255)";
  } else {
    el.style.backgroundColor = "rgb(255, 255, 255)";
  }
}
function mudartexto(){
	document.getElementById("text").innerHTML = "Funcionou";
}
function img() {
	var e = document.getElementById("escoladeputado");
	var strUser = e.options[e.selectedIndex].value;
    switch(strUser){
		case "1":
		document.getElementById("imagem").src = "";
		document.getElementById("nome").innerHTML = ""
		break;
		case "2":
		document.getElementById("imagem").src = "images/af.jpg";
		document.getElementById("nome").innerHTML = "Deputado Abdala Fraxe."		
		break;
		case "3":
		document.getElementById("imagem").src = "images/bl.jpg";
		document.getElementById("nome").innerHTML = "Deputado Berlamino Lins."		
		break;
		case "4":
		document.getElementById("imagem").src = "images/jn.png";
		document.getElementById("nome").innerHTML = "Deputado Josué Neto."		
		break;
		case "5":
		document.getElementById("imagem").src = "images/sr.jpg";
		document.getElementById("nome").innerHTML = "Deputado Sabá Reis."		
		break;
		case "6":
		document.getElementById("imagem").src = "images/rn.jpg";
		document.getElementById("nome").innerHTML = "Deputado Ricardo Nicolau."		
		break;
		case "7":
		document.getElementById("imagem").src = "images/ca.jpg";
		document.getElementById("nome").innerHTML = "Deputado Carlos Alberto."		
		break;
		case "8":
		document.getElementById("imagem").src = "images/aa.jpg";
		document.getElementById("nome").innerHTML = "Deputado Adjunto Afonso."		
		break;
		case "9":
		document.getElementById("imagem").src = "images/ac.jpg";
		document.getElementById("nome").innerHTML = "Deputada Alessandra Campelo."		
		break;
		case "10":
		document.getElementById("imagem").src = "images/auf.jpg";
		document.getElementById("nome").innerHTML = "Deputado Augusto Ferraz."		
		break;
		case "11":
		document.getElementById("imagem").src = "images/bs.jpg";
		document.getElementById("nome").innerHTML = "Deputado Bosco Saraiva."		
		break;
		case "12":
		document.getElementById("imagem").src = "images/cm.jpg";			
		document.getElementById("nome").innerHTML = "Deputado Cabo Maciel."		
		break;
		case "13":
		document.getElementById("imagem").src = "images/dc.jpg";
		document.getElementById("nome").innerHTML = "Deputado Demilson Chagas."		
		break;
		case "14":
		document.getElementById("imagem").src = "images/dg.jpg";
		document.getElementById("nome").innerHTML = "Deputado Dr. Gomes."		
		break;
		case "15":
		document.getElementById("imagem").src = "images/fs.jpg";
		document.getElementById("nome").innerHTML = "Deputado Francisco Souza"		
		break;
		case "16":
		document.getElementById("imagem").src = "images/jr.jpg";
		document.getElementById("nome").innerHTML = "Deputado José Ricardo."		
		break;
		case "17":
		document.getElementById("imagem").src = "images/lc.jpg";
		document.getElementById("nome").innerHTML = "Deputado Luiz Castro."		
		break;
		case "18":
		document.getElementById("imagem").src = "images/mb.jpg";
		document.getElementById("nome").innerHTML = "Deputado Mario Bastos."		
		break;
		case "19":
		document.getElementById("imagem").src = "images/oc.jpg";
		document.getElementById("nome").innerHTML = "Deputado Orlando Cidade."		
		break;
		case "20":
		document.getElementById("imagem").src = "images/sec.jpg";
		document.getElementById("nome").innerHTML = "Deputado Serafim Corrêa."		
		break;
		case "21":
		document.getElementById("imagem").src = "images/sl.jpg";
		document.getElementById("nome").innerHTML = "Deputado Sidney Leite."		
		break;
		case "22":
		document.getElementById("imagem").src = "images/sc.jpg";
		document.getElementById("nome").innerHTML = "Deputado Sinésio Campos."		
		break;
		case "23":
		document.getElementById("imagem").src = "images/vl.jpg";
		document.getElementById("nome").innerHTML = "Deputado Vicente Lopes."		
		break;
		case "24":
		document.getElementById("imagem").src = "images/wd.jpg";
		document.getElementById("nome").innerHTML = "Deputado Wanderley Dias."		
		break;
		}
		if((strUser)!="1"){
			document.getElementById("mensagem").style.visibility = "visible";
		}
		else{
			document.getElementById("mensagem").style.visibility = "hidden";
		}
}
