//Элементы ввода
let aInput = document.getElementById("aInput");
let bInput = document.getElementById("bInput");
let updateButton = document.getElementById("updateButton");

//Элемент canvas
let canvas = document.getElementById("graphCanvas");
let ctx = canvas.getContext("2d");

// Функция для рисования графика
function drawGraph(a, b) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //Координатная сетка
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();

  //Размер цифр и толщину линий
  ctx.font = "14px Arial";
  ctx.lineWidth = 2;

  //Деления и подписи по оси X
  for (let i = -canvas.width / 2; i <= canvas.width / 2; i += 50) {
    ctx.moveTo(canvas.width / 2 + i, canvas.height / 2 - 8);
    ctx.lineTo(canvas.width / 2 + i, canvas.height / 2 + 8);
    ctx.fillText(i, canvas.width / 2 + i - 5, canvas.height / 2 + 20);
}

  //Деления и подписи по оси Y
  for (let i = -canvas.height / 2; i <= canvas.height / 2; i += 50) {
    ctx.moveTo(canvas.width / 2 - 8, canvas.height / 2 - i);
    ctx.lineTo(canvas.width / 2 + 8, canvas.height / 2 - i);
    ctx.fillText(i, canvas.width / 2 - 25, canvas.height / 2 - i + 10);
}

  ctx.stroke();
  //Толщина линии графика
  ctx.lineWidth = 2;
  //График функции
  ctx.beginPath();
  for (let x = -canvas.width / 2; x < canvas.width / 2; x += 0.1) {
      let y = a * Math.pow(x, 3) + b + 5;
      ctx.lineTo(canvas.width / 2 + x, canvas.height / 2 - y);
  }
  ctx.stroke();
}

//Обработчик изменения значений a и b
function updateGraph() {
  let a = parseFloat(aInput.value);
  let b = parseFloat(bInput.value);
  drawGraph(a, b);
}

//Обработчик события клика на кнопку
updateButton.addEventListener("click", updateGraph);

//График с начальными значениями
updateGraph();
