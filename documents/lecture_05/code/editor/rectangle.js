var editor = CodeMirror.fromTextArea(document.getElementById('code-json'), {
    lineNumbers: true,
    mode: 'application/json',
});
draw(editor);

editor.on('change', function(editor){
    console.log('changed');
    draw(editor);
});

function draw(editor){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    try{
        var json = editor.getValue();
        var obj  = JSON.parse(json);
        console.log(json);

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.rect(obj.x, obj.y, obj.width, obj.height);
        context.fillStyle = obj.color;
        context.fill();
        context.stroke();

        context.font = "10px Arial";
        context.strokeText(obj.author,(obj.x+2),(obj.y+10));
    }
    catch(e){
        context.clearRect(0, 0, canvas.width, canvas.height);
        console.log(e);
    }

}

// firebase wireup
var myDataRef = new Firebase('https://small.firebaseIO.com/'); 

function post(){
    // get text from editor
    var json = editor.getValue(); 

    // remove line breaks and spaces
    json = json.replace(/("[^"]*")|\s/g, "$1");
    console.log(json);

    // push text to server   
    myDataRef.push(json);
    console.log('posted json to server');    
}

/* -------------------------------------------------

Draw rectangle
context.rect(x,y,width,height);

x      = x-coordinate, upper-left corner of the rectangle
y      = y-coordinate, upper-left corner of the rectangle
width  = width of the rectangle
height = height of the rectangle

Clear canvas
context.clearRect(0, 0, canvas.width, canvas.height);

   ------------------------------------------------- */