
let ul=document.querySelector('ul')
ul.innerHTML=ul.innerHTML+ul.innerHTML
let lis=document.querySelectorAll('li');
let btns=document.querySelectorAll('.btn');
let spa=-2;

ul.style.width=lis[0].offsetWidth*lis.length+'px';

function move(){
  if(ul.offsetLeft < -ul.offsetWidth/2){
    ul.style.left='0';
  }
  if(ul.offsetLeft > 0){
    ul.style.left=-ul.offsetWidth/2+'px';
  }
  ul.style.left=ul.offsetLeft+spa+'px';
}

let timer=setInterval(move,30);

ul.addEventListener('mousemove',function(){
  clearInterval(timer);
})
ul.addEventListener('mouseout',function(){
  timer=setInterval(move,30);
})

document.getElementsByClassName('formBtn')[0].onclick = function(){
        var radio = document.getElementsByName('radio'),value=null;
        for(var i=0;i<radio.length;i++){
            if(radio[i].checked){
                value=radio[i].value;
                (radio[i].value=="瑞士")? alert('正确'):alert('错误');
            }
        }
    }
