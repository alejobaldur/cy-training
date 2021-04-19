function myFunction() {
    var selected = document.getElementById("test").value;
    var name = document.getElementById("name").value;
    var text = name + " is " + selected;
    document.getElementById("demo").innerHTML=text;
    document.getElementById("output").style.display = 'block';
}

var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
}

function functionClear() {
    document.getElementById("demo").innerHTML=null;
    document.getElementById("output").style.display = 'none';   
    document.getElementById("name").value = null;
    document.getElementById("file").value = null;
}