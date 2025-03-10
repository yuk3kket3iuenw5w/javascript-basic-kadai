const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
 text.textContent = "ボタンをクリックしてください";

setTimeout(() =>{
  text.textContent = "ボタンをクリックしました";
  console.log("ボタンをクリックしました(非同期処理)");
},2000);
});