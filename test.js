
 $("#div").on('click', '#button', function(e) {
	 	// e.preventDefault(); 
		find()
  })

  $("#div").on('keydown', '#input', function(e) { 
	  var keyCode = e.keyCode || e.which; 

	  if (keyCode == 13) { 
	    e.preventDefault(); 
		find()
	  } 
});  

function allert(acqui,name,moy){
	if(acqui){
		alert("Nom et Prénom : "+name+"\n\n\nMoyenne :"+moy+"\n\n\n"+"Observation : Admis(e)");
	}else {
		alert("Nom et Prénom : "+name+"\n\n\nMoyenne :"+moy+"\n\n\n"+"Observation : Ajourné(e)");

	}
}

function find(){
	    matricule = $('#input').val();
	for (var i = 0; i < jsonData.length; i++) {
			var is = false;
			if (jsonData[i].matricule === matricule){
				name = jsonData[i].Name
				moy = jsonData[i].moyenne
				var acqui = false
				is = true;
				if (moy>=10)acqui = true;
				allert(acqui,name,moy)
				window.location.reload();
				break;
			}
		}
		if(!is){
			$("#err").fadeIn(400)
		}
}
