const text = document.getElementById("text");
const bnt = document.getElementById("btn")

bnt.addEventListener("click",function(){
  text.textContent = "ボタンをクリックしました";
});



/*window.addEventListener("mouseup",() =>{
  if()
})

//htmlの取得　//ボタンを押したかの取得
const Text = document.getElementById(text);
//押していたら表示を変える
if(pushed){
  Text.style.display = "inline";
}
//おしていなければ表示を変えない
else{
  Text.style.display = "none";
}*/
