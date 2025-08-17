const msgListEl = document.querySelector('#message-list');
const msgContentHeaderEl = document.querySelector('#message-content-header');
let userArray = [];

function createMessageList(num){
    

    for(let i =0;i<num;i++){
        const messageEl = document.createElement('div');
        const imgEl = document.createElement('img');
        const textEl = document.createElement('div');
        const textUserEl = document.createElement('p');
        const textContentEl = document.createElement('p');

        // 메세지 div에 유저 이미지 요소 추가
        imgEl.src="https://picsum.photos/50/50/?random="+(i+1);
        imgEl.classList.add('user-image');
        messageEl.append(imgEl);
        
        
        // 메세지 div에 텍스트 요소 추가
        textEl.append(textUserEl);
        textEl.append(textContentEl);
        userArray.push({name:"User_"+i,content:"Content_"+i});
        textUserEl.innerText='User_' + i;
        textContentEl.innerText='Content_' + i;
        textEl.classList.add('message-box-text');
        messageEl.append(textEl);
        messageEl.classList.add('message-box');
        messageEl.setAttribute('data-id',''+i);
        messageEl.addEventListener('click',(event)=>{
            const dataId = messageEl.getAttribute('data-id');
            if(msgContentHeaderEl.childElementCount >0){
                msgContentHeaderEl.lastElementChild.remove();
            }
            document.getElementById('message-content-header').style.border = '1px solid lightgray';
            msgContentHeaderEl.append(messageEl.cloneNode("deep"));
        })

        // 메세지 list에 메세지 div 추가
        msgListEl.append(messageEl);
    }
}

createMessageList(3);