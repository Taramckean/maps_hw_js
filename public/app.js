const app = function(){

  let coords = [55.8654, -4.2579]
  let zoom = 16
  let container = "main-map"
const mainMap = new MapWrapper(container, coords, zoom);
  mainMap.addMarker(coords);
  
  let BigButtCoords = [35.5976, -82.7990]
  let SuperiorBottomCoords = [37.7490, -81.9993]
  let PunkeydoodlesCoords = [43.3535, -80.7351]

  //when button is clicked change map coords to the ones matching the id of
  //the specific button
mainMap.moveMap(BigButtCoords, "bb");
mainMap.moveMap(SuperiorBottomCoords,"sb" );
mainMap.moveMap(PunkeydoodlesCoords, "pc");
};

window.addEventListener("DOMContentLoaded", app)
