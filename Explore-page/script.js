const rand = function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 나머지 makeUser, makeComment, makePost ...



// 랜덤 explore 생성 함수
const exploreBox = document.querySelector(`.Explore-box`);

function createImageItem() {
    const explore = document.createElement('div');
    explore.className = `Explore`;
    
    for (let i = 0; i < 6; i++) {
        const post = makePost();
        
        const item = document.createElement('div');
        let random = Math.floor(Math.random() * 30);
        item.className = 'Explore-item';
        item.style.width = '320px';
        item.style.height = '320px';
        item.style.backgroundSize = 'cover';
        item.style.backgroundPosition = 'center';
        item.style.position = `relative`;
            item.style.backgroundImage = `url(${post.media[0].url})`;

        item.dataset.img = post.media[0].url;
        item.dataset.title = post.caption;
        item.dataset.likes = String(post.reactions.likes);
        item.dataset.comments = String(post.commentsCount);


        explore.appendChild(item);
        
        const overlay = document.createElement('div');
        overlay.className = 'overlay';

        const heartIcon = document.createElement('i');
        heartIcon.className = 'fa-solid fa-heart';
        const likeCount = document.createElement('span');
        likeCount.className = 'like';

        likeCount.textContent = Math.floor(Math.random() * 5000); // 랜덤 좋아요 수
        const commentIcon = document.createElement('i');
        commentIcon.className = 'fa-solid fa-comment';

        const commentCount = document.createElement('span');
        commentCount.className = 'commit';
        commentCount.textContent = Math.floor(Math.random() * 200); // 랜덤 댓글 수
        const follower = Math.floor(Math.random() * 10000);
        const following = Math.floor(Math.random() * 10000);


        // overlay에 요소 추가
        overlay.appendChild(heartIcon);
        overlay.appendChild(likeCount);
        overlay.appendChild(commentIcon);
        overlay.appendChild(commentCount);

        item.appendChild(overlay);

        item.addEventListener(`click`,function(e){
        this.classList.add('no-overlay');

        console.log("this:"+this);
        openModal(item); // 모달 여는 함수  



        
        });

    }

    
    exploreBox.appendChild(explore);
    //explore에 explore item 추가, 그리고 explore를 explore box에 추가
    
}

function openModal(card) {
    const modal = document.getElementById('postModal');
    modal.classList.add('is-open');
    const media = document.querySelector(`.modalMedia`);
    media.style.backgroundImage = card.style.backgroundImage;
    media.style.backgroundSize = 'contain';
    media.style.backgroundPosition = 'center';
    media.style.backgroundRepeat = "no-repeat";
    
    const userNickname = querySelector(`.introduce-text > .nickName`);
    //userNickname
    

    // 닫기 버튼 클릭 시 닫히게
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    modalCloseBtn.onclick = function() {
        modal.classList.remove('is-open');
        card.classList.remove('no-overlay');
    };
}




modalCloseBtn.addEventListener('click', () => {
                this.classList.remove('no-overlay');
            });



// 무한드래그 구현 전 클릭으로 대체
/*
const example = document.querySelector(`.Explore`);
example.addEventListener(`click`,function(){ // 클릭 시 이미지 생성 함수 발생
    createImageItem();
});

const makeUser = function(){
    const userInformation = {

    }
}
*/

//게시글 열기 아직 미구현

//const modal = querySelectorAll(``)

/*
const exploreItemClick = querySelectorAll(`.Explore-item`);
for(let exploreItem of exploreItem){
    exploreItem.addEventListener(`click`, function(){
        
    });
}
*/


//GPT로 만든 데이터 랜덤 생성기
/* 아래는 예시 데이터 구조
const examplePost = {
  id: "post_001",
  author: {
    id: "u_100",
    username: "strongman.kr",
    avatarUrl: "https://picsum.photos/80?random=777",
    followers: 102340,
    following: 120,
    isVerified: true,
  },
  caption: "요즘 농산물 이슈 정리했습니다. 의견 남겨주세요! #이슈 #농산물",
  createdAt: new Date().toISOString(),
  media: [
    {
      id: "m1",
      type: "image",
      url: "https://picsum.photos/800/800?random=11",
      thumbUrl: "https://picsum.photos/320/320?random=11",
      aspectRatio: 1,
    },
  ],
  reactions: {
    likes: 7023,
    bookmarks: 120,
  },
  commentsCount: 62,
  comments: [
    {
      id: "c1",
      user: {
        id: "u_201",
        username: "daily_user",
        avatarUrl: "https://picsum.photos/40?random=21",
        isVerified: false,
      },
      text: "정리 깔끔하네요! 더 자세한 자료 있나요?",
      createdAt: new Date(Date.now() - 3600e3).toISOString(),
      likes: 14,
      replies: [
        {
          id: "r1",
          user: {
            id: "u_100",
            username: "strongman.kr",
            avatarUrl: "https://picsum.photos/40?random=777",
            isVerified: true,
          },
          text: "추가 자료는 스토리에 올릴게요!",
          createdAt: new Date(Date.now() - 1800e3).toISOString(),
          likes: 5,
        },
      ],
    },
  ],
  tags: ["이슈", "농산물"],
  location: "Seoul, Korea",
};

*/





const id = (p="id") => `${p}_${Math.random().toString(36).slice(2,9)}`;

function makeUser(idx=rand(1,999)) {
  return {
    id: id("u"),
    username: `user_${idx}`,
    avatarUrl: `https://picsum.photos/40?random=${idx}`,
    followers: rand(0, 200000),
    following: rand(0, 2000),
    isVerified: Math.random() < 0.15,
  };
}

function makeComment(depth=0){
  const me = {
    id: id("c"),
    user: {...makeUser()},
    text: ["좋아요!", "멋져요", "정보 감사합니다", "동의해요", "의견 남겨요"][rand(0,4)],
    createdAt: new Date(Date.now() - rand(1,72)*3600e3).toISOString(),
    likes: rand(0, 200),
  };
  if (depth < 1 && Math.random() < 0.4) {
    me.replies = Array.from({length: rand(1,2)}, ()=>({
      id: id("r"),
      user: {...makeUser()},
      text: ["맞아요", "저도요", "궁금합니다"][rand(0,2)],
      createdAt: new Date(Date.now() - rand(1,24)*3600e3).toISOString(),
      likes: rand(0, 50),
    }));
  }
  return me;
}

function makePost() {
  const author = makeUser();
  const n = rand(1,3); // 미디어 개수
  const media = Array.from({length:n}, (_,i)=>({
    id: id("m"),
    type: "image",
    url: `https://picsum.photos/800/800?random=${rand(1,10000)}`,
    aspectRatio: 1
  }));
  const comments = Array.from({length: rand(1,4)}, ()=>makeComment());

  return {
    id: id("post"),
    author,
    caption: ["오늘도 작업!", "테스트 포스트", "샘플 캡션입니다"][rand(0,2)],
    createdAt: new Date().toISOString(),
    media,
    reactions: { likes: rand(0, 20000), bookmarks: rand(0, 2000) },
    commentsCount: rand(0, 300),
    comments,
    tags: ["sample","demo","explore"].slice(0, rand(1,3)),
    location: Math.random()<0.3 ? "Seoul, Korea" : undefined,
  };
}



//테스트
createImageItem();
createImageItem();
