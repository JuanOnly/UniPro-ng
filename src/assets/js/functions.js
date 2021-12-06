function ShowGeneralMessage(message) {
  document.querySelector("#textMensajeGeneral").innerHTML = message;
  var elem = document.querySelector("#generalMessageModal");
  var instance = M.Modal.getInstance(elem);
}
