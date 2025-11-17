var faces = [6]

function preload(){
    faces[0]=new Image(); faces[0].src = "images/dice-1.png";
    faces[1]= new Image(); faces[0].src = "images/dice-1.png";
    faces[2]= new Image(); faces[0].src = "images/dice-1.png";
    faces[3]= new Image(); faces[0].src = "images/dice-1.png";
    faces[4]=new Image(); faces[0].src = "images/dice-1.png";
    faces[5]= new Image(); faces[0].src = "images/dice-1.png";
}

function roll (imgElement){
    let number = Math.floor(Math.random() * 6);
    imgElement.src = faces[number].src;
    console.log (number);
}
