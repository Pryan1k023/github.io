function addCube(color) {
  let container = document.getElementById("colorCubeContainer");
  let cube = document.createElement("div");
  cube.className = "color-cube";
  cube.style.backgroundColor = color;
  container.appendChild(cube);
}

function removeFirstCube() {
  let container = document.getElementById("colorCubeContainer");
  let cube = container.getElementsByClassName("color-cube");
  if (cube.length > 0) {
    container.removeChild(cube[0]);
  }
}

function removeLastCube() {
  let container = document.getElementById("colorCubeContainer");
  let cube = container.getElementsByClassName("color-cube");
  let lastIndex = cube.length - 1;
  if (lastIndex >= 0) {
    container.removeChild(cube[lastIndex]);
  }
}

function removeCube() {
  const container = document.getElementById("colorCubeContainer");
  let colorRemove = document.getElementById("colorRemove").value.toLowerCase();
  let cube = container.getElementsByClassName("color-cube");
  let j = 0;
  for (let i = cube.length - 1; i >= 0; i--) {
    var cubeColor = cube[i].style.backgroundColor.toLowerCase();
    if (cubeColor === colorRemove) {
      container.removeChild(cube[i]);
      j++;
    }
  }
  let colorOut = (colorRemove == 'red') ? 'красным': // Узнаём какой цвет у нас выбран
  (colorRemove == 'green') ? 'зелёным':
  (colorRemove == 'blue') ? 'синим':
  '';
  if (j == 0) {
    alert(`Квадрата с ${colorOut} цветом нету!`); // Выводим сообщение с выбранным цветом
  }
}

function removeAllCube() {
  let cube = document.getElementsByClassName("color-cube");
  while (cube[0]) {
    cube[0].parentNode.removeChild(cube[0]);
  }
}
