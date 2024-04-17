status = "";
img="";
objects=[];


function preload(){
    img = loadImage("52dbe148-2c38-477f-9d78-acd794040164.jpg");
}

function setup(){
    canvas = createCanvas(1000,650);
    canvas.position(610,260);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    object_Detector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}


  function draw() {
    image(img, 0, 0, 1000, 650);
  
        if(status != "")
        {
          for (var i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
      
            fill(255, 0, 0);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(255, 0, 0);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
          }
        }
  }