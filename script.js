const clickbtn = document.querySelector("#clickbtn"),
  main = document.querySelector(".main"),
  colorIndex = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

const randomColNumIndexGen = function () {
  ranNum = parseInt(Math.random() * colorIndex.length);

  return colorIndex[ranNum];
};

function randomNms() {
  let colorCreated = `#${randomColNumIndexGen()}${randomColNumIndexGen()}${randomColNumIndexGen()}${randomColNumIndexGen()}${randomColNumIndexGen()}${randomColNumIndexGen()}`;

  return (main.style.backgroundColor = colorCreated);
}

clickbtn.addEventListener("click", randomNms);
