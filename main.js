let canvas = document.getElementById("canvas")

let ctx = canvas.getContext("2d")

let X = 360
let Y = 320
let rectHeight = 40
let rectWidth = 40
let moveSize = 40
let moveSizeBoard = 40
let up = true
let right = true
let gameStarted = false
let boardX = 320
let boardY = 360
let boardHeight = 40
let boardWidth = 120
var gameTimer
let change=0

ctx.fillRect(X, Y, rectWidth, rectHeight)
ctx.fillRect(boardX, boardY, boardWidth, boardHeight)

document.addEventListener("keydown", (keyEvent)=>{

    ctx.clearRect(boardX, boardY, boardWidth, boardHeight)

    console.log(keyEvent.code)

    if(keyEvent.code == "ArrowRight"){
        
        if(boardX+boardWidth < 800){
            boardX += moveSizeBoard
            
            if(!gameStarted){
                ctx.clearRect(X,Y,rectWidth,rectHeight)
                X += moveSize
                ctx.fillRect(X, Y, rectWidth, rectHeight)
            }
        }
    }
    else if(keyEvent.code == "ArrowLeft"){
        
        
        if(boardX>0){
            boardX -= moveSizeBoard
            if(!gameStarted){
                ctx.clearRect(X,Y,rectWidth,rectHeight)
                X -= moveSize
                ctx.fillRect(X, Y, rectWidth, rectHeight)
            }
        }
    }
  
    ctx.fillRect(boardX, boardY, boardWidth, boardHeight)
})

startGame = ()=>{
    gameTimer = setInterval(()=>{
        ctx.clearRect(X,Y,rectWidth,rectHeight)
        
        if(change%5 == 0){
            
            if(Y >= 320)
                if( (X+rectWidth) >= boardX && X <= (boardX+boardWidth) )
                    up = true 
                
            if(right)
                if(X < 760)
                    X += moveSize
                else
                    right = false
            else
                if(X > 0)
                    X -= moveSize
                else 
                    right = true


            if(up)
                if(Y > 0)
                    Y -= moveSize
                else
                    up = false
            else
                if(Y >= 360){
                    clearTimeout(gameTimer)
                    ctx.font = "Italic 30px Sans-Serif"
                    ctx.fillText("GAME OVER", 300, 200) 


                    setTimeout(() => {
                        location.reload()
                    }, 500);
                }
                else {
                    Y += moveSize
                }
            
        }
            
        ctx.fillRect(X,Y,rectWidth, rectHeight)
        change++
    }, 20)
}

document.addEventListener("keypress", ()=>{
    if(!gameStarted){
        startGame()
        gameStarted = true
    }
})


// var start = Date.now()
// setInterval(function(){
//     document.getElementById('counter').innerHTML =  Math.floor((Date.now()-start)/1000);
// }, 1000)