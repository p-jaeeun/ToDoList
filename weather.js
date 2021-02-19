const COORDS = "coords";

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  console.log("성공!");
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
}

function handleGeoError(position) {
  console.log("위치를 불러올 수 없습니다.");
}

// 좌표 요청
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
  console.log("navigator는 되나");
}

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    askForCoords();
    console.log("!!!!!!!!");
  } else {
    // getWeather
    console.log("????????");
  }
}

function init() {
  loadCoords();
}

init();
