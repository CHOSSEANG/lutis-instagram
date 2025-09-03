const imageArray = [];
const collectionArray = [];
const taggedArray = [];

const IMAGE_WIDTH = 310;
const IMAGE_HEIGHT = 410;

const imageListEL = document.getElementById('image-list');
const collectionListEL = document.getElementById('collection-list');
const taggedListEL = document.getElementById('tagged-list');

createImgList();
createCollectionList();
createTaggedList();

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
                {src:`https://picsum.photos/300/400?random=${i+5}`,width:IMAGE_WIDTH/2, height:IMAGE_HEIGHT/2},
                {src:`https://picsum.photos/300/400?random=${i+6}`,width:IMAGE_WIDTH/2, height:IMAGE_HEIGHT/2},
                {src:`https://picsum.photos/300/400?random=${i+7}`,width:IMAGE_WIDTH/2, height:IMAGE_HEIGHT/2},
                {src:`https://picsum.photos/300/400?random=${i+8}`,width:IMAGE_WIDTH/2, height:IMAGE_HEIGHT/2}
                ])
        } else {
            collectionArray.push({
                src:`https://picsum.photos/300/400?random=${i}`,width:IMAGE_WIDTH,height:IMAGE_HEIGHT,
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
            src: `https://picsum.photos/300/400?random=${i}`, width: IMAGE_WIDTH, height: IMAGE_HEIGHT
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