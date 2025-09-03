const imageArray = [];
const collectionArray = [];
const taggedArray = [];

const IMAGE_WIDTH = 310;
const IMAGE_HEIGHT = 410;

const COLLECTION_IMAGE_WIDTH = 300;
const COLLECTION_IMAGE_HEIGHT = 300;


const imageListEL = document.getElementById('image-list');
const collectionListEL = document.getElementById('collection-list');
const taggedListEL = document.getElementById('tagged-list');

const imageListBtnEl = document.getElementById('image-list-button');
const collectionListBtnEl = document.getElementById('collection-list-button');
const taggedListBtnEl = document.getElementById('tagged-list-button');

function createImgList() {
    for (let i = 0; i < 3; i++) {
        imageArray.push({
            src: `https://picsum.photos/300/400?random=${i}`, width: IMAGE_WIDTH, height: IMAGE_HEIGHT
        })
    }

    for (const image of imageArray) {
        const imgEL = document.createElement('img');
        imgEL.src = image.src;
        imgEL.width = image.width;
        imgEL.height = image.height;
        imgEL.classList.add('big-img');
        imageListEL.append(imgEL);
    }
}

function createCollectionList(){
    for (let i = 0; i < 3; i++){
        if(i === 0){
            collectionArray.push([
                {src:`https://picsum.photos/150/150?random=${i+10}`,width:COLLECTION_IMAGE_WIDTH/2, height:COLLECTION_IMAGE_HEIGHT/2},
                {src:`https://picsum.photos/150/150?random=${i+11}`,width:COLLECTION_IMAGE_WIDTH/2, height:COLLECTION_IMAGE_HEIGHT/2},
                {src:`https://picsum.photos/150/150?random=${i+12}`,width:COLLECTION_IMAGE_WIDTH/2, height:COLLECTION_IMAGE_HEIGHT/2},
                {src:`https://picsum.photos/150/150?random=${i+13}`,width:COLLECTION_IMAGE_WIDTH/2, height:COLLECTION_IMAGE_HEIGHT/2}
                ])
        } else {
            collectionArray.push({
                src:`https://picsum.photos/300/300?random=${i}`,width:COLLECTION_IMAGE_WIDTH,height:COLLECTION_IMAGE_HEIGHT,
            })
        }
    }
    const collectionAllEL = document.createElement('div');
    for (const a of collectionArray[0]) {
        const imgEL = document.createElement('img');
        imgEL.src = a.src;
        imgEL.width = a.width;
        imgEL.height = a.height;
        imgEL.classList.add('collection-small-img');
        collectionAllEL.append(imgEL);
    }
    collectionAllEL.classList.add('collection-all-img');
    collectionListEL.append(collectionAllEL);

    for(let i = 1; i < 3; i++){
        const imgEL = document.createElement('img');
        imgEL.src = collectionArray[i].src;
        imgEL.width = collectionArray[i].width;
        imgEL.height = collectionArray[i].height;
        imgEL.classList.add('collection-big-img');
        collectionListEL.append(imgEL);
    }
}

function createTaggedList(){
    for (let i = 0; i < 3; i++) {
        taggedArray.push({
            src: `https://picsum.photos/300/400?random=${i+20}`, width: IMAGE_WIDTH, height: IMAGE_HEIGHT
        })
    }

    for (const image of taggedArray) {
        const imgEL = document.createElement('img');
        imgEL.src = image.src;
        imgEL.width = IMAGE_WIDTH;
        imgEL.height = IMAGE_HEIGHT;
        imgEL.classList.add('big-img');
        taggedListEL.append(imgEL);
    }
}

imageListBtnEl.addEventListener('click', function(){
    imageListEL.style.display = 'flex';
    collectionListEL.style.display = 'none';
    taggedListEL.style.display = 'none';
});

collectionListBtnEl.addEventListener('click', function(){
    imageListEL.style.display = 'none';
    collectionListEL.style.display = 'flex';
    taggedListEL.style.display = 'none';
});

taggedListBtnEl.addEventListener('click', function(){
    imageListEL.style.display = 'none';
    collectionListEL.style.display = 'none';
    taggedListEL.style.display = 'flex';
});

createImgList();
createCollectionList();
createTaggedList();


