$("#div").on('click', '#button', function(e) {
    find()
})

$("#div").on('keydown', '#Prenom', function(e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode == 13) {
        e.preventDefault();
        find()
    }
});

function allert(acqui, name, moy) {
    if (acqui) {
        alert("Nom et Prénom : " + name + "\n\n\nMoyenne : " + moy + "\n\n\n" + "Observation : Admis(e)");
    } else {
        alert("Nom et Prénom : " + name + "\n\n\nMoyenne : " + moy + "\n\n\n" + "Observation : Ajourné(e)");
    }
}

function find() {
    var nom = $('#Nom').val().toUpperCase();
    var Prenom = $('#Prenom').val().toUpperCase();
    var Name = nom +"  "+Prenom

    for (var i = 0; i < jsonData.length; i++) {
        var is = false;
        if (jsonData[i].Name.toUpperCase() === Name) {
            name = jsonData[i].Name
            moy = jsonData[i].moyenne
            var acqui = false
            is = true;
            if (moy >= 10) acqui = true;
            allert(acqui, name, moy)
            window.location.reload();
            break;
        }
    }
    if (!is) {

        $("#err").fadeIn(400)
    }
}
