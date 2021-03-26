var ball;
var database;
var pos;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database()
    var node = database.ref("Ball/Position")
    node.on("value", readop, showErr)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
       writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function writePosition(x,y)
{
    database.ref("Ball/Position").set({X:ball.x + x, Y: ball.y + y})
}

function readop(data)
{
   pos = data.val();
   ball.x = pos.X;
   ball.y = pos.X;

}

function showErr()
{
    console.log("error");
}