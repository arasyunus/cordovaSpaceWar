<!DOCTYPE html>
<html lang="TR-tr">
<head>
	<meta charset="UTF-8">
	<title>Space War</title>
	<script src="js/helpers.js"></script>
	<link rel="stylesheet" type="text/css" href="css/style.css">
        <link rel="icon" type="image/png" href="res/favicon.png" />
	<style type="text/css">

	</style>
</head>
<body>
<script>

var screen, frames, input, bgSprite, bgStarSprite, starMeter, bgMeter, player, playerSprite, bullets, enemySprite, enemyImg, enemies, enemySpFrame, elifXY, explosion;

function main () {
    //screen = new Screen(document.body.width, document.body.height);
    screen = new Screen(800,600);
    input = new InputHandler();

    var bgImg = new Image();
    bgImg.src = "res/bg.gif";
    
    var bg2Img = new Image();
    bg2Img.src = "res/bg_star.png";
        
    bgSprite = new Sprite(bgImg,0,0,3564,600);
    bgStarSprite = new Sprite(bg2Img,0,0,1600,600);
    
    player = {
        spriteMeter: [0,50,100,150],
        playerImg: new Image(),
        spriteAnim: function(fr){
            this.playerImg.src = "res/player2.fw.png";
            if(fr%5==0){
                this.spriteY > 2 ? this.spriteY = 0 : this.spriteY++;
            };
            playerSprite = screen.drawSprite(new Sprite(this.playerImg,0,this.spriteMeter[this.spriteY],this.w,this.h), player.x, player.y);
        },
        w:70,
        h:50,
        x:0,
        y:(screen.canvas.height/2)-(25),
        spriteY: 0
    };
    

    enemyImg = new Image();
    enemyImg.src = "res/enemySprite.png";
    enemyImg.onload = function (){
      
        enemySprite = [
            [new Sprite(this,  0,  0,40,30), new Sprite(this,  0, 30,40,30),new Sprite(this,  0, 60,40,30),new Sprite(this,  0, 90,40,30),new Sprite(this,  0,120,40,30),new Sprite(this,  0,150,40,30)],
            [new Sprite(this, 40,  0,40,30), new Sprite(this, 40, 30,40,30),new Sprite(this, 40, 60,40,30),new Sprite(this, 40, 90,40,30),new Sprite(this, 40,120,40,30),new Sprite(this, 40,150,40,30)],
            [new Sprite(this, 80,  0,40,30), new Sprite(this, 80, 30,40,30),new Sprite(this, 80, 60,40,30),new Sprite(this, 80, 90,40,30),new Sprite(this, 80,120,40,30),new Sprite(this, 80,150,40,30)],
            [new Sprite(this,120,  0,40,30), new Sprite(this,120, 30,40,30),new Sprite(this,120, 60,40,30),new Sprite(this,120, 90,40,30),new Sprite(this,120,120,40,30),new Sprite(this,120,150,40,30)],
            [new Sprite(this,160,  0,40,30), new Sprite(this,160, 30,40,30),new Sprite(this,160, 60,40,30),new Sprite(this,160, 90,40,30),new Sprite(this,160,120,40,30),new Sprite(this,160,150,40,30)]
        ];
        run();
        init();
    };


    starMeter = 0;
    bgMeter = 0;
    
    

};
function init () {
    frames = 0;
    bullets = [];
    enemySpFrame = 0;
    input.down.fire = 0;
    elifXY = [ 
                [885,193],
                [924,193],
                [846,193],
                [807,193],
                [807,222],
                [807,251],
                [807,279],
                [846,280],
                [885,280],
                [924,280],
                [807,308],
                [807,337],
                [807,366],
                [846,366],
                [885,366],
                [924,366],
                [1043,194],
                [1043,223],
                [1043,252],
                [1043,280],
                [1043,309],
                [1043,338],
                [1043,367],
                [1082,367],
                [1121,367],
                [1160,367],
                [1265,194],
                [1265,156],
                [1265,223],
                [1265,252],
                [1265,280],
                [1265,309],
                [1265,338],
                [1265,367],
                [1477,191],
                [1516,191],
                [1438,191],
                [1399,191],
                [1399,220],
                [1399,249],
                [1399,277],
                [1438,278],
                [1477,278],
                [1516,278],
                [1399,306],
                [1399,335],
                [1399,364]        
            ];
    
    enemies = [];
    
    for(var j = 0, ln = elifXY.length; j < ln; j++){
        var enIdx = Math.floor(Math.random() * 4) + 1 ;
        
        enemies.push({
                sprite: enemySprite[enIdx],
                x: elifXY[j][0],
                y: elifXY[j][1],
                w: 40,
                h: 30
            });
        
    }
  

};
function run () {
	var loop = function () {
		update();
		render();

		window.requestAnimationFrame(loop, screen.canvas);
	};
	window.requestAnimationFrame(loop, screen.canvas);
};
function update () {
    
        frames++;
        var bull;
        
        if(input.isDown(37)){//LEFT
            player.y > 7 ? player.y -= 3 : player.y;
        };
        if(input.isDown(39)){//RIGHT
            player.y < (screen.height-player.h-7) ? player.y += 3 : player.y;
        };
        if(input.isPressed(32)){//SPACE PRESSED
            console.log("ROCKETT");
        }
	if(input.isPressed(38) || input.down.onclickevt){//UP ARROW PRESSED
            bull = new Bullet(player.x+player.w, player.y+(player.h/2), 3, 7, 3, "#BD4036");
            bullets.push(bull);
            
	};
        
        //------MOBİLE TOUCH EVENT HANDLİNG START
            if(input.isDown("touchY") || input.isDown("touchX")){
                if(input.down.touchY > (player.y+player.h) && input.down.touchX < screen.width/2){
                    player.y += 3;
                }
                if(input.down.touchY < (player.y+player.h) && input.down.touchX < screen.width/2){
                    player.y -= 3;
                }
                if(input.down.touchX > screen.width/2 && input.down.fire){

                    bullett = new Bullet(player.x+player.w, player.y+(player.h/2), 3, 7, 3, "#BD4036");
                    bullets.push(bullett);
                    input.down.fire = false;
                }
            }
        //------MOBİLE TOUCH EVENT HANDLİNG END
        


    for(var i = 0, len = bullets.length; i < len; i++){
        var b = bullets[i];
        b.update();

        if(b.x > screen.width){
            bullets.splice(i, 1);
            i--;
            len--;
        }
        
        
        for(var e = 0, ln = enemies.length; e < ln; e++){
            var enemy = enemies[e];
            if(AABBIntersect(b.x, b.y, b.width, b.height, enemy.x, enemy.y, enemy.w, enemy.h)){     
                enemies.splice(e, 1);
                e--;
                ln--;
                bullets.splice(i, 1);
                i--;
                len--;
            }
        }
        
        
        
        
        
        
        
        
    
    }
    
    for(var e = 0, ln = enemies.length; e < ln; e++){
        var enemy = enemies[e];
        enemy.x -= 0.32;
    }
    
    
    
    starMeter < -800 ? starMeter = 0 : starMeter -= 1.5;
    bgMeter < -2582 ? bgMeter = 0 : bgMeter -= 0.35;
        
    if(frames % 12 == 0){
        enemySpFrame < 5 ? enemySpFrame++ : enemySpFrame=0;
    }
};
function render () {
	screen.clear();
        
        screen.drawSprite(bgSprite, bgMeter, 0);
        screen.drawSprite(bgStarSprite, starMeter, 0);
        
        
        for(var i = 0, len = enemies.length; i < len; i++){
		var enemy = enemies[i];
		screen.drawSprite(enemy.sprite[enemySpFrame], enemy.x, enemy.y);
	};
        
        player.spriteAnim(frames);

	screen.ctx.save();
        
        for(var i = 0, len = bullets.length; i < len; i++){
            screen.drawBullet(bullets[i]);  
	};
        
	screen.ctx.restore();
};

main();
</script>
</body>
</html>