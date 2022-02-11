// Get the modal
var modal = document.getElementById("onExitModal");

// Get the <span> element x that closes the modal
var span = document.getElementsByClassName("close")[0];

var typingBool = false; 
var typingIdx=0; 

// 타이핑될 텍스트를 가져온다 
var typingTxt = document.getElementsByClassName("nagara-txt")[0].innerHTML; 
typingTxt=typingTxt.split(""); // 한글자씩 자른다. 


const  typing=()=>{ 
    if(parseInt(typingIdx)<parseInt(typingTxt.length)){ 
      // 타이핑될 텍스트 길이만큼 반복 
      document.getElementsByClassName("nagara")[0].innerHTML += typingTxt[typingIdx];
      typingIdx += 1; 

     } else{ 
       //끝나면 반복종료 
      clearInterval(tyInt); 
     } 
}  

if(typingBool==false){ 
    // 타이핑이 진행되지 않았다면 
    typingBool=true;     
    var tyInt = setInterval(typing,100); // 반복동작 
} 

const exitEvent = e => {
  console.log("e.toElement: ", e.toElement);
  console.log("e.relatedTarget: ", e.relatedTarget);
  console.log("e.clientY: ", e.clientY);
  if (!e.toElement && !e.relatedTarget && e.clientY < 5) {
    document.removeEventListener('mouseout', exitEvent);
    modal.style.display = "block";
  }
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (e) => {
  console.log(e.target)
  document.getElementsByClassName("nagara")[0].innerHTML="<br><a href=\"https://blog.naver.com/gjtnwjd40\">😊(블로그)📼</a>"
  if (e.target === modal) {
    modal.style.display = "none";
  }
} 

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = "none";
}

document.addEventListener('mouseout', exitEvent);


setTimeout(()=> {
    typing();
}, 5000);