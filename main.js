canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverWidth=100;
roverHeight=90;
roverX=10;
roverY=10;

backgroundImage= "mars.jpg";
roverImage="rover.png";

function add() 
{
    backgroundImgTag= new Image();
    backgroundImgTag.onload=uploadBackground;
    backgroundImgTag.src=backgroundImage;

    
    roverImagTag= new Image();
    roverImgTag.onload=uploadrover;
    roverImagTag.src=roverImage;
}

function uploadBackground()
{
    ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height);
}

function uploadrover()
{
    ctx.drawImage(roverImagTag,roverX,roverY,roverWidth,roverHeight);
}

window.addEventListener("keydown",MyKeyDown);

function MyKeyDown(e)
{
    keypresed=e.keyCode;
    console.log(keypresed);
    if( keypresed=="38")
    {
        up();
        console.log("cima");
    }

    if( keypresed=="40")
    {
        down();
        console.log("baixo");
    }

    if( keypresed=="37")
    {
        left();
        console.log("esquerda");
    }

    if( keypresed=="39")
    {
        right();
        console.log("direita");
    }
}