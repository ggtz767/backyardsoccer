const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ballBox=[], 
soccerbulletBox=[], 
index= 0, 
b_index= 0, 
soccer_ballpos = canvas.height / 2,
hits_no=0,
bullets_no= 0,
gameOver = false;
//building out the goalpost
const goalpost = {
 draw: function (){
    ctx.beginPath();
    ctx.lineWidth=10;
    ctx.lineJoin='round';
    ctx.fillStyle='black';
    ctx.strokeStyle = 'white';
    ctx.moveTo(150,150);
    ctx.lineTo(150,30);
    ctx.stroke();
 
    ctx.moveTo(150,30);
    ctx.lineTo(440,30);
    ctx.stroke();
 
    ctx.moveTo(440,30);
    ctx.lineTo(440,150);
    ctx.stroke();
    ctx.closePath();
     
    }
}

goalpost.draw();

//building out soccerball
// const soccerBall = {
//     draw: function(){
//       ctx.lineWidth=5
//       ctx.moveTo(300,400)
//       ctx.arc(300, 400, 20, 0, Math.PI *2, true);
//       ctx.strokeStyle = "black"
//       ctx.stroke();
//       ctx.fillStyle = "white"
//       ctx.fill();  
//     }
//   }
// const soccerballimg = new Image();
// soccerballimg.src ='balon.jpg'
// let soccerballx= 50;
// let soccerbally = 375;
// let soccerballvx= 1;
// const balon = {
//     draw: function (){
//         ctx.line
//         ctx.save();
//         ctx.beginPath();
//         ctx.arc(50, 400, 40, 0, Math.PI * 2,false);
//         // ctx.strokeStyle = '#2465D3'
//         ctx.stroke();
//         ctx.clip();
//         ctx.drawImage(soccerballimg, soccerballx, soccerbally,50,50);//circleCtx.drawImage(img, 0, 0, 300, 300)
//         ctx.restore();
//     }
// }
// function updateball(){
//     ctx.clearRect(50,400,canvas.width,120)
//     balon.draw();
//     soccerballx += soccerballvx; 
    
//     if(soccerballx + soccerballvx > 450 || soccerballx + soccerballvx < 50) {
//         soccerballvx *= -1;
//     }
// //     // requestAnimationFrame(updategoalie);
// }

// setInterval(updateball,20)


// // soccerBall.draw();
const soccerballimg = new Image();
soccerballimg.src ='balon.jpg'
let soccerballx= 50;
let soccerbally = 400;
let soccerballvx= 1;


function balldraw(){
    ctx.drawImage(soccerballimg,soccerballx,soccerbally,100,100)
}


function updateball(){
    ctx.clearRect(50,400,canvas.width,120)
    balldraw();
    soccerballx += soccerballvx; 
    
    if(soccerballx + soccerballvx > 450 || soccerballx + soccerballvx < 50) {
        soccerballvx *= -1;
    }
// //     // requestAnimationFrame(updategoalie);
}

setInterval(updateball,20)
//event listner for moving mouse 

canvas.addEventListener('mousemove', function (e) {
  soccer_ballpos = e.pageY ;
});

canvas.addEventListener('click', function (e) {
  bulletBox[b_index] = Bullet(180, attacker_position + 30);
  b_index = b_index + 1 ;
  bullets_no = bullets_no +1;
  if(bullets_no === 1) {
    $('#scoreBoard').html('Game Started! Protect Spaceship!');
  }
});

//square image of goalie moving 
const goalieimg = new Image();
goalieimg.src = 'goalie.jpg';
let goaliex = 150;
let goaliey = 65;
let goalievx = 1;

//draw function 
function goalieDraw(){
    ctx.drawImage(goalieimg,goaliex,goaliey,80,80)
}

  
function updategoalie(){
    ctx.clearRect(150,30,290,120)
    goalieDraw();
    goaliex += goalievx; 
    
    if(goaliex + goalievx > 365 || goaliex + goalievx < 145) {
        goalievx *= -1;
    }
    // requestAnimationFrame(updategoalie);
}

setInterval(updategoalie,20)

