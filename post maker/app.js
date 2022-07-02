let arr = [] 

const post = ()=>{
let post = document.getElementById('CreatePost');
let mid = document.getElementById('mid');
mid.style.display = 'block'
post.style.display = 'none'

}

const submit=()=>{
    let text = document.getElementById("text");
  let container = document.getElementById("container");

arr.unshift(text.value)

container.innerHTML=""
for(let i =0;i<arr.length;i++){
    container.innerHTML += `<div class="post">
    <h1>${arr[i]}</h1></div>
    <div class="btns">
      <span class="like-btn" onclick="like()">&#128077</span>
      <span class="like-btn" onclick="like()">&#128516</span>
      <span class="like-btn" onclick="like()">&#128525</span>
      <span class="like-btn" onclick="like()">&#128549</span>
      <span class="like-btn" onclick="like()">&#128545</span>
    </div>
  
    `;
}
text.value =""
let mid = document.getElementById('mid');
mid.style.display = 'none'
let post = document.getElementById('CreatePost');
post.style.display = 'block'

}

const like=()=>{
  let btn = document.getElementsByClassName('like-btn');
  btn = alert('You Have Reacted')
}