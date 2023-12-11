function addSquare(color) {
    let container = document.getElementById('colorSquaresContainer');
    let square = document.createElement('div');
    square.className = 'color-square';
    square.style.backgroundColor = color;
    container.appendChild(square);
}

function removeFirstSquare() {
    let container = document.getElementById('colorSquaresContainer');
    let squares = container.getElementsByClassName('color-square');
    if (squares.length > 0) {
        container.removeChild(squares[0]);
    }
}

function removeLastSquare() {
    let container = document.getElementById('colorSquaresContainer');
    let squares = container.getElementsByClassName('color-square');
    let lastIndex = squares.length - 1;
    if (lastIndex >= 0) {
        container.removeChild(squares[lastIndex]);
    }
}
    function removeSquare() {
        const container = document.getElementById('colorSquaresContainer');
        var colorRemove = document.getElementById('colorRemove').value.toLowerCase();
        let squares = container.getElementsByClassName('color-square');
        let j = 0;
        for (let i = squares.length - 1; i >= 0; i--) 
        {
            var squareColor = squares[i].style.backgroundColor.toLowerCase();
            if (squareColor === colorRemove) {
                container.removeChild(squares[i]);
                j++;
            }
            
        }
        if (j == 0)
        {
            alert('Цвета нету!')
        }
    }
