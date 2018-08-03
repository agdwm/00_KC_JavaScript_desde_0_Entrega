function Vector (x, y ) {
	this.x = x;
	this.y = y;
}

//sum two vectors
Vector.prototype.plus = function (other) {
	return new Vector(this.x + other.x , this.y + other.y);
}

//multiply
Vector.prototype.times = function (factor) {
	return new Vector(this.x * factor , this.y * factor);
}