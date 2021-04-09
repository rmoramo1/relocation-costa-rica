function logg() {
    var log = document.getElementById("inputPassword1").value;
    console.log(log)
    if (log === "Confidential") {
        $("#log").addClass("d-none")
    } else {
        aviso();
    }
}

function aviso(){
    $("#aviso").addClass("d-block").removeClass("d-none").text("Wrong Password");
    setTimeout(function(){ 
        $("#aviso").addClass("d-none").removeClass("d-block");
    }, 2000);
}