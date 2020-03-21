//alert("CONNECTED");
var colors=randomcolor(6);

var pickedcolor=pickcolor(6);
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedcolor;
var squares=document.querySelectorAll(".square");
var messageDisplay=document.querySelectorAll("#message");
var reset=document.querySelector("#reset");
var h1=document.querySelector("h1");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colors=randomcolor(3);
	pickedcolor=pickcolor(3);
	colorDisplay.textContent=pickedcolor;
	for(var i=0;i<6;i++){
		if(i<3){
			squares[i].style.backgroundColor=colors[i];
		}
		else
			squares[i].style.display="none";
	}
});
hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	colors=randomcolor(6);
	pickedcolor=pickcolor(6);
	colorDisplay.textContent=pickedcolor;
	for(var i=0;i<6;i++){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}
});

for(var i=0;i<6;i++){
	squares[i].style.backgroundColor=colors[i];
	//adding eventlisteners for squares
	squares[i].addEventListener("click",function(){
		//grab color of picked square and compare color to picked color
		if(this.style.backgroundColor===pickedcolor){
			//alert("correct");
			reset.textContent="PlayAgain?";
			messageDisplay[0].textContent="Correct"
			won();
		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay[0].textContent="Try Again"
		}
	})
}
function won(){
	h1.style.backgroundColor=pickedcolor;
	for(var i=0;i<6;i++){
		squares[i].style.backgroundColor=pickedcolor;
	}

}
function randomcolor(a){
	var array=[];
	for(var i=0;i<a;i++){
	var x=Math.floor(Math.random()*256);
	var y=Math.floor(Math.random()*256);
	var z=Math.floor(Math.random()*256);
	//"rgb(x, y, z)"
	
		var str="rgb("+x+", "+y+", "+z+")";
		array[i]=(str);
	}
	return array;
}
function pickcolor(a){
	var x=Math.floor(Math.random()*a);
	return colors[x];
}
reset.addEventListener("click",function(){
	colors=randomcolor(6);
	pickedcolor=pickcolor(6);
	colorDisplay.textContent=pickedcolor;
	for(var i=0;i<6;i++)
	squares[i].style.backgroundColor=colors[i];
	h1.style.backgroundColor="steelblue";
	reset.textContent="New Colors";
	message.textContent="";
})
