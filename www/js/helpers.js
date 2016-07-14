//HELPER FUNCIONS
function AABBIntersect(ax, ay, aw, ah, bx, by, bw, bh){
 	return ax < bx+bw && bx < ax+aw  && ay < by+bh && by < ay+ah;
};
//Bullet
function Bullet (x, y, speed, w, h, color) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.width = w;
		this.height = h;
		this.color = color;		
}

Bullet.prototype.update = function () {
	this.x += this.speed;
}

//SCREEN
function Screen (width, height) {
	this.canvas = document.createElement("canvas");
	this.canvas.width = this.width = width;
	this.canvas.height = this.height = height;
	this.ctx = this.canvas.getContext("2d");
	document.body.appendChild(this.canvas);
        
};
Screen.prototype.clear = function () {
	this.ctx.clearRect(0, 0, this.width, this.height);
};

Screen.prototype.drawSprite = function(sprite, x, y){
	this.ctx.drawImage(sprite.img, sprite.x, sprite.y, sprite.w, sprite.h, x, y, sprite.w, sprite.h);
};

Screen.prototype.drawSpriteBG = function(sprite, x, y){
        this.ctx.scale(2,2);
	this.ctx.drawImage(sprite.img, sprite.x, sprite.y, sprite.w, sprite.h, x, y, sprite.w, sprite.h);
};

Screen.prototype.drawBullet = function (bullet) {
	this.ctx.fillStyle = bullet.color;
	this.ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
}
//SPRITE
function Sprite (img, x, y, w, h) {
	this.img = img;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
};

//INPUT HANDLER
function InputHandler () {
	this.down = {};
	this.pressed = {};
        var touchobj;
        var touchX;
        var touchY;
	var _this = this;
	document.addEventListener("keydown", function(evt){
		_this.down[evt.keyCode] = true;
	});
        
	document.addEventListener("keyup", function(evt){
		delete _this.down[evt.keyCode];
		delete _this.pressed[evt.keyCode];
	});


        /*
        document.addEventListener("click", function(evt){
		_this.down["onclickevt"] = true;
	});
        document.addEventListener("mouseup", function(evt){
		delete _this.down["onclickevt"];
	});
        */
        
        document.addEventListener('touchstart', function(evt){
            touchobj = evt.changedTouches[0];
            touchY = parseInt(touchobj.clientY);
            touchX = parseInt(touchobj.clientX);
            _this.down["touchY"] = touchY;
            _this.down["touchX"] = touchX;
            evt.preventDefault();
        }, false);
        
        document.addEventListener('touchend', function(evt){
            delete _this.down["touchY"];
            delete _this.down["touchX"];
            _this.down.fire = true;
            evt.preventDefault();
        }, false);
};

InputHandler.prototype.isDown = function(code){
	return this.down[code];
};

InputHandler.prototype.isPressed = function(code){
	if(this.pressed[code]){
		return false;
	} else if(this.down[code]){
		return this.pressed[code] = true;
	}
	return false;
};