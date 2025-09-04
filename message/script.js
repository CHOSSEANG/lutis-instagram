const msgListEl = document.querySelector('#message-list');
const msgContentHeaderEl = document.querySelector('#message-content-header');
const msgContentBodyEL = document.querySelector('#message-content-body');
let userArray = [];

// 대화 1: 친구들과의 일상적인 대화
const user0MessageArray = [
    { sender: 'me', message: '오늘 날씨 진짜 좋다!' },
    { sender: 'other', message: '맞아! 산책하기 딱 좋은 날씨야' },
    { sender: 'me', message: '혹시 시간 되면 같이 한강 갈래?' },
    { sender: 'other', message: '좋아! 몇 시에 만날까?' },
    { sender: 'me', message: '3시 정도 어때?' },
    { sender: 'other', message: '완벽해 👍' },
    { sender: 'me', message: '그럼 반포한강공원에서 보자!' },
    { sender: 'other', message: '응응 치킨도 시켜먹자 ㅋㅋ' },
    { sender: 'me', message: '역시 너야 😂' },
    { sender: 'other', message: '곧 도착해!' }
];

// 대화 2: 연인들의 달달한 대화
const user1MessageArray = [
    { sender: 'me', message: '오늘 하루 어땠어?' },
    { sender: 'other', message: '너 생각하느라 집중이 안 됐어 💕' },
    { sender: 'me', message: '에이~ 그런 소리 하지 마 😊' },
    { sender: 'other', message: '진짜라니까! 회의 중에도 네 생각만...' },
    { sender: 'me', message: '나도 마찬가지야 ㅋㅋㅋ' },
    { sender: 'other', message: '오늘 저녁 뭐 먹을까?' },
    { sender: 'me', message: '너가 좋아하는 파스타 만들어줄게' },
    { sender: 'other', message: '와 진짜? 사랑해 ❤️' },
    { sender: 'me', message: '나도 사랑해 😘' },
    { sender: 'other', message: '빨리 집에 가고 싶다...' },
    { sender: 'me', message: '조금만 기다려, 곧 끝나지?' },
    { sender: 'other', message: '응! 30분 후에 출발할게' }
];


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
            console.log(msgContentBodyEL.children);
            if(dataId==="0"){
                createMessage(user0MessageArray);
            } else if(dataId==="1"){
                createMessage(user1MessageArray);
            } else{
                while(msgContentBodyEL.firstChild) {
                    msgContentBodyEL.removeChild(msgContentBodyEL.firstChild);
                }
            }
            console.log(msgContentBodyEL.children.length);
            document.getElementById('message-content-header').style.border = '1px solid lightgray';
            msgContentHeaderEl.append(messageEl.cloneNode("deep"));
        })

        // 메세지 list에 메세지 div 추가
        msgListEl.append(messageEl);
    }
}

function createMessage(messageArray){
    if(msgContentBodyEL.hasChildNodes()){
        while(msgContentBodyEL.firstChild) {
            msgContentBodyEL.removeChild(msgContentBodyEL.firstChild);
        }
    }
    for(const message of messageArray){
        const messageEL = document.createElement('div');
        messageEL.classList.add('common-message');
        messageEL.innerText = message.message;
        if(message.sender === 'me'){
            messageEL.classList.add('my-message');
        } else{
            messageEL.classList.add('your-message');
        }
        msgContentBodyEL.append(messageEL);
    }
}
createMessageList(3);