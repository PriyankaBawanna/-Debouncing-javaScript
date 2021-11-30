let counter = 0;
const getData = () => {
  console.log("Fetching Data ..", counter++);
};

var button = document.getElementById("debounce");
const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
      console.log("set time is runing");
    }, d);
  };
};

const betterFunction = debounce(getData, 300);

button.addEventListener(
  "click",
  debounce(function () {
    console.log("Debug...");
  }, 300)
);
