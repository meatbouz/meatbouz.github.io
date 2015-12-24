// 線段物件
function Line(x1, y1, x2, y2){
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	
	// 斜率
	this.slope = (x1 - x2) / (y1 - y2);
	
	// 長度
	this.length = Math.sqrt(Math.pow((x1 - x2), 2) 
							+ Math.pow((y1 - y2), 2));
}

// 是否平行
function isParallel(slope1, slope2){
	if(slope1 == slope2){
		alert("平行");
		return true;
	}
	
	alert("非平行");
	return false;
}