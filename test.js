



               jsonData = [{matricule:"X140329",Name:"ADJAL RIMA",Moyenne:10.01},
{matricule:"X140141",Name:"AMROUCHE AMINA",moyenne:10.94},
{matricule:"X140198",Name:"AZROU SAMAH",moyenne:10.09},
{matricule:"X140106",Name:"BAKARI BILLAL",moyenne:10.10},
{matricule:"X140225",Name:"BELHADI MOUNA",moyenne:10.18},
{matricule:"X150295",Name:"BENMEDDOUR IMANE",moyenne:10.05},
{matricule:"X150355",Name:"BOUCHENEB AMIRA",moyenne:10.30},
{matricule:"X130226",Name:"BOUHALOUANE ROUFAIDA",moyenne:10.11},
{matricule:"X140192",Name:"BOUHEZILA AMIRA",moyenne:8.25},
{matricule:"X140280",Name:"BOUKENNA KHAOULA",moyenne:10.03},
{matricule:"X130405",Name:"CHAOU MANAL",moyenne:10.17},
{matricule:"X100117",Name:"CHELBI BILLAL",moyenne:10.10},
{matricule:"X150475",Name:"CHERGUI IDIR",moyenne:10.25},
{matricule:"X150162",Name:"CHERIFI WALID",moyenne:10.41},
{matricule:"X130338",Name:"DAOUD HADJER",moyenne:10.05},
{matricule:"X140185",Name:"DELLALI HOUDA",moyenne:10.24},
{matricule:"X150028",Name:"DIGUER LAMIA",moyenne:10.26},
{matricule:"X130243",Name:"DJEDDI HAYAT",moyenne:10.40},
{matricule:"X140460",Name:"DJEFFAL ABDELMALEK",moyenne:10.04},
{matricule:"X140272",Name:"DOUDANE SAMIA",moyenne:10.03},
{matricule:"X140006",Name:"DOULACHE CYLIA",moyenne:10.14},
{matricule:"X130174",Name:"ELKOUADI ABIR",moyenne:10.05},
{matricule:"X130352",Name:"GHEZLI YASMINE",moyenne:10.01},
{matricule:"X150214",Name:"GOUDJIL FATMA ZOHRA",moyenne:10.10},
{matricule:"X140028",Name:"GOUMIRI ADEL",moyenne:10.07},
{matricule:"X130133",Name:"HARAOUDJ CHAHINEZ",moyenne:10.00},
{matricule:"X130255",Name:"IMESSAOUDENE MAHREZ",moyenne:10.17},
{matricule:"X140364",Name:"ISSOLAH NESRINE",moyenne:10.04},
{matricule:"X130149",Name:"KABECHE RACHIDA",moyenne:10.12},
{matricule:"X150128",Name:"KARTOUS FERIEL",moyenne:10.06},
{matricule:"X140342",Name:"KERCHOU SOUHILA",moyenne:10.10},
{matricule:"X150067",Name:"KERNANI ASSIA",moyenne:10.67},
{matricule:"X140574",Name:"KHENICHE LYLIA",moyenne:9.02}]

 $("#div").on('click', '#button', function(e) {
	 	e.preventDefault(); 
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
				break;
			}
		}
		if(!is){
		
			$("#err").fadeIn(400)
 
		}
}

