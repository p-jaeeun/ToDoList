const COORDS = "coords";

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucees(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  console.log("성공!");
}

function handleGeoError(position) {
  console.log("위치를 불러올 수 없습니다.");
}

// 좌표 요청
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucees, handleGeoError);
  console.log("navigator는 되나");
}

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    askForCoords();
  } else {
    // getWeather
  }
}

function init() {}
loadCoords();
init();
