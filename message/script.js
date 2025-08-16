const msgListEl = document.querySelector('#message-list');

function createMessageList(num){
    

    for(let i =0;i<num;i++){
        const messageEl = document.createElement('div');
        const imgEl = document.createElement('img');
        const textEl = document.createElement('div');
        const textUserEl = document.createElement('p');
        const textContentEl = document.createElement('p');

        // 메세지 div에 유저 이미지 요소 추가
        messageEl.append(imgEl);
        
        // 메세지 div에 텍스트 요소 추가
        textEl.append(textUserEl);
        textEl.append(textContentEl);
        textUserEl.innerText='User_' + i;
        textContentEl.innerText='Content_' + i;
        messageEl.append(textEl);

        // 메세지 list에 메세지 div 추가
        msgListEl.append(messageEl);
    }

}

createMessageList(2);