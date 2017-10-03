    function red() {
        document.getElementById("color").style.backgroundColor = "red";
    }
function blue() {
        document.getElementById("color").style.backgroundColor = "blue";
    }
function green() {
         document.getElementById("color").style.backgroundColor = "green";
    }
function clickme() {
            var x = Math.round(Math.random()*255);
            var y = Math.round(Math.random()*255);
            var z=  Math.round(Math.random()*255);
            var bg = "background:rgb("+x+","+y+","+z+")";
            var element = document.getElementById("color");
            element.style=bg;
}