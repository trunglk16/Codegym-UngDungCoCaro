var b = document.getElementById("carogame ");

var board = [];
var data = "";
for(let i = 0; i < 5; i++) {
    board[i] = Array(0,0,0,0,0);
}

for(let i = 0; i < 5; i++) {
    data += "<br/>";
    for(let j = 0; j < 5; j++){
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}

data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>";
b.innerHTML = data;

function changeValue() {
    var positionX = prompt("X: ");
    var positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "x";
    for(var i = 0; i < 5; i++) {
        data += "<br/>";
        for(var j = 0; j < 5; j++){
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
    b.innerHTML = "<hr/>"+ data;
}