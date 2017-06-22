$("#div").on('click', '#button', function(e) {
    find()
})

$("#div").on('keydown', 'input', function(e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode == 13) {
        e.preventDefault();
        find()
    }
});
function find() {
    var nom = $('#Nom').val().toUpperCase();
    var Prenom = $('#Prenom').val().toUpperCase();
    var Name = nom +"  "+Prenom

    for (var id = 0; id < jsonData.length; id++) {
        var is = false;
        if (jsonData[id].Name.toUpperCase() === Name) {
            name = jsonData[id].Name
            moy = jsonData[id].moyenne
            var acqui = false
            is = true;
            if (moy >= 10) acqui = true;
            allert(acqui, name, moy,id);
            // window.location.reload();
            break;
        }
    }
    if (!is) {

        $("#err").fadeIn(400)
    }
}
function allert(acqui, name, moy,id) {
    if (acqui) {
        alert("Nom et Prénom : " + name + "\n\n\nMoyenne : " + moy + "\n\n\n" + "Observation : Admis(e)"+"\n\n\n"+"Classment : " + (1+id));
    } else {
        alert("Nom et Prénom : " + name + "\n\n\nMoyenne : " + moy + "\n\n\n" + "Observation : Ajourné(e)"+"\n\n\n"+"Classment : " + (1+id));
    }
}
