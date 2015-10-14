//create array allImages
var allImages = [];
var rand1, rand2;
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');

function Image(name) {
  this.name = name
  this.vote = 0
  allImages.push(this)
}
  new Image('1.jpg');
  new Image('2.jpg');
  new Image('3.jpg');
  new Image('4.jpg');
  new Image('5.jpg');
  new Image('6.jpg');
  new Image('7.jpg');
  new Image('8.jpg');
  new Image('9.jpg');
  new Image('10.jpg');
  new Image('11.jpg');
  new Image('12.jpg');

function ranImg() {
    var ranNum = Math.floor(Math.random() * allImages.length);
    return allImages[ranNum];
}

function makePhoto(){
  rand1 = ranImg();
  rand2 = ranImg();
    image1.setAttribute('src', 'img/' + rand1.name);
    image2.setAttribute('src', 'img/' + rand2.name);
}

image1.addEventListener('click',makePhoto);
image2.addEventListener('click',makePhoto);

makePhoto();
// var
// function vote(){
//   for(i=0, i<=allImages.length,i++);
//   if(){
//     ran1 count +1
//   }else{
//     ran2 count 1
//   }


//Tally
// function countone(){
//  Image





