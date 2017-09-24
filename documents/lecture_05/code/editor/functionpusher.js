// Initialize Firebase
var config = {
    apiKey: "AIzaSyC2Eto_FZdxit72Oe0HX7wh0GyQQO-dPTA",
    authDomain: "inspector-9b3a3.firebaseapp.com",
    databaseURL: "https://inspector-9b3a3.firebaseio.com",
    projectId: "inspector-9b3a3",
    storageBucket: "inspector-9b3a3.appspot.com",
    messagingSenderId: "786634246790"
};
firebase.initializeApp(config);

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
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    try{
        var funcString = editor.getValue();
        var func = eval('(' + funcString + ')');

        func();
        console.log(funcString);        
    }
    catch(e){
        context.clearRect(0, 0, canvas.width, canvas.height);
        console.log(e);
    }
}

// firebase wireup
var db        = firebase.database();
var myDataRef = db.ref('/');     

function post(){
    // get text from editor
    var funcString = editor.getValue(); 

    // write to console
    console.log(funcString);

    // push text to server   
    myDataRef.push(funcString);
    console.log('posted function to server');    
}

