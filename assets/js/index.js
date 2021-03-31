function navOpen() {
    $("#navMovil").css("left", "0%");
    $("#btnMenuMovil").removeAttr("onclick");
    $("#btnMenuMovil").attr("onclick", "navClose();");
};
function navClose() {
    $("#navMovil").css("left", "-100%");
    $("#btnMenuMovil").removeAttr("onclick");
    $("#btnMenuMovil").attr("onclick", "navOpen();");
}
