const rand = function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const postStore = new Map();

// 나머지 makeUser, makeComment, makePost ...



// 랜덤 explore 생성 함수
const exploreBox = document.querySelector(`.Explore-box`);
function createImageItem() {
  const explore = document.createElement('div');
  explore.className = `Explore`;
  
  for (let i = 0; i < 6; i++) {
    const post = makePost();

    // ✅ 포스트 저장
    postStore.set(post.id, post);
    
    const item = document.createElement('div');
    item.className = 'Explore-item';
    item.style.width = '320px';
    item.style.height = '320px';
    item.style.backgroundSize = 'cover';
    item.style.backgroundPosition = 'center';
    item.style.position = `relative`;
    item.style.backgroundImage = `url(${post.media[0].url})`;

    item.dataset.postId    = post.id;
    item.dataset.img       = post.media[0].url;
    item.dataset.title     = post.caption;                 
    item.dataset.likes     = String(post.reactions.likes);
    item.dataset.comments  = String(post.commentsCount);
    item.dataset.username  = post.author.username;
    item.dataset.likeCount = post.reactions.likes;
    item.dataset.avatar    = post.author.avatarUrl;

    explore.appendChild(item);
    
    // overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const heartIcon = document.createElement('i');
    heartIcon.className = 'fa-solid fa-heart';

    const likeCount = document.createElement('span');
    likeCount.className = 'like';
    likeCount.textContent = Math.floor(Math.random() * 5000);

    const commentIcon = document.createElement('i');
    commentIcon.className = 'fa-solid fa-comment';

    const commentCount = document.createElement('span');
    commentCount.className = 'commit';
    commentCount.textContent = Math.floor(Math.random() * 200);

    overlay.appendChild(heartIcon);
    overlay.appendChild(likeCount);
    overlay.appendChild(commentIcon);
    overlay.appendChild(commentCount);

    item.appendChild(overlay);

    item.addEventListener('click', function () {
      this.classList.add('no-overlay');
      openModal(this);
    });
  }

  exploreBox.appendChild(explore);
}

function openModal(card) {
  const modal = document.getElementById('postModal');
  modal.classList.add('is-open');

  const post = postStore.get(card.dataset.postId);

  const media = document.querySelector(`.modalMedia`);
  media.style.backgroundImage = `url(${post.media[0].url})`;
  media.style.backgroundSize = 'contain';
  media.style.backgroundPosition = 'center';
  media.style.backgroundRepeat = "no-repeat";

  const userNickname = document.querySelector(`.introduce-text > .nickName`);
  if (userNickname) userNickname.textContent = post.author.username;

  const userLike = document.querySelector(`.modalLike span`);
  if (userLike) userLike.textContent = String(post.reactions.likes);

  const commentBox = document.querySelector('.commentBox');
  if (commentBox) {
    commentBox.innerHTML = '';

    commentBox.appendChild(
      makeUserBoxDom(post.author.username, post.caption, post.author.avatarUrl)
    );

    for (const c of post.comments) {
      commentBox.appendChild(
        makeUserBoxDom(c.user.username, c.text, c.user.avatarUrl)
      );
      if (c.replies) {
        for (const r of c.replies) {
          const repl = makeUserBoxDom(r.user.username, r.text, r.user.avatarUrl);
          commentBox.appendChild(repl);
        }
      }
    }
  }

  // 닫기
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  modalCloseBtn.onclick= function() {
    modal.classList.remove('is-open');
    card.classList.remove('no-overlay');
  };

  document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modal.classList.remove('is-open');
    card.classList.remove('no-overlay');
  }
});

  const modalBox = document.querySelector(`.modalBox`);
  document.addEventListener(`click`, function(event){
    if(modalBox.onclick){
      modal.classList.remove('is-open');
      card.classList.remove('no-overlay');
    }
  });

}











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
    caption: [
    "✅실시간 소식 @cityano\n@maylongallery\n\n📸 : lol\n\n✅가장 빠른 트렌드는?➡️ @1mintrend 팔로우 + 즐찾!\n\n✅1분트렌드➡️ @1mintrend\n✅1분지식 ➡️ @1mknow\n✅자동차 정보는? ➡️ @motorsjason\n✅마일론 방향제 ➡️ @maylongallery\n✅시티아노 텀블러 ➡️ @cityano\n\n#유머 #이슈",
    "두 번째 예시 캡션\n줄바꿈도 자유롭게 가능\n이모지도 가능 😎",
    "세 번째 캡션입니다!\n이것도 줄바꿈이 여러 개 들어가요."
    ][Math.floor(Math.random() * 3)],

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






// 댓글 랜덤 생성함수 GPT로 간단하게 뽑음
// ===== 랜덤 유틸 =====
const r = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randName = () => `user_${r(1, 9999)}`;
const randAvatar = () => `https://picsum.photos/40?random=${r(1, 10000)}`;
const randCaption = () => ([
`✅실시간 소식 @cityano
@maylongallery

📸 : lol`,
"그냥 테스트 댓글입니다 😎",
`두 줄 테스트
줄바꿈 유지 확인`,
"이모지 👍🔥❤️ 테스트",
])[r(0, 3)];

// ===== user-box DOM 생성 =====
function makeUserBoxDom(username, text, avatarUrl = '../image/image.png') {
  const box = document.createElement('div');
  box.className = 'user-box';
  box.innerHTML = `
    <div class="user-post">
      <img class="user-image" src="${avatarUrl}" alt="user"
           style="width:40px;height:40px;border-radius:50%;object-fit:cover;">
      <div class="user-caption">
        <span class="nickName"></span>
        <p class="comment-text"></p>
      </div>
    </div>
  `;
  box.querySelector('.nickName').textContent = username || '';
  box.querySelector('.comment-text').textContent = text || '';
  return box;
}



// ===== .commentBox에 랜덤 추가 =====
function appendRandomUserBox(parent = document.querySelector('.commentBox')) {
  const node = makeUserBoxDom(randName(), randCaption(), randAvatar());
  parent.appendChild(node);     // 최신이 위로 오게 하려면 .prepend(node)
}

// 여러 개 한 번에
function appendRandomMany(n = 5, parent = document.querySelector('.commentBox')) {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < n; i++) {
    frag.appendChild(makeUserBoxDom(randName(), randCaption(), randAvatar()));
  }
  parent.appendChild(frag);
}
