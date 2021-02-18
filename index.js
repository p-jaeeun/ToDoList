const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

handleClick = () => {
  title.classList.toggle(CLICKED_CLASS); //아래의 코드와 똑같은 기능을 함

  // const hasClass = title.classList.contains(CLICKED_CLASS);

  // if (hasClass) {
  //   title.classList.remove(CLICKED_CLASS);
  // } else {
  //   title.classList.add(CLICKED_CLASS);
  // }
};

function init() {
  title.addEventListener("click", handleClick);
}

init();
