function getRandomArray(minNum, maxNum, n) {	//隨機產生不重覆的n個數字
	var rdmArray = [n];		//儲存產生的陣列
 
	for(var i=0; i<n; i++) {
		var rdm = 0;		//暫存的亂數
 
		do {
			var exist = false;			//此亂數是否已存在
			rdm = getRandom(minNum, maxNum);	//取得亂數
 
			//檢查亂數是否存在於陣列中，若存在則繼續回圈
			if(rdmArray.indexOf(rdm) != -1) exist = true;
 
		} while (exist);	//產生沒出現過的亂數時離開迴圈
 
		rdmArray[i] = rdm;
	}
	return rdmArray;
}
function generate(){ 
    var A="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    var a="abcdefghijklmnopqrstuvwxyz"; 
    var num="1234567890"; 
    var other="~`!@#$%^&*()-_+=[{]}\\|;:'\",<.>/?"; 
    var sum=""; 
    var length=document.getElementById("length").value; 
    var output=""; 
     
    if(document.getElementById("english_b").checked) 
        sum+=A; 
    if(document.getElementById("english_l").checked) 
        sum+=a; 
    if(document.getElementById("number").checked) 
        sum+=num; 
    if(document.getElementById("other").checked) 
        sum+=other; 
         
    sum=sum.split(''); 
    while(length--){ 
        var r=Math.floor(Math.random()*sum.length); 
        output+=sum[r]; 
    } 
    document.getElementById("output").value=output; 
} 
