//create array allImages
function Image(name) {
  this.name = name;
  this.vote = 0;
  allImages.push(this);
}
var allImages = [];

// call load function and get data right after page refreshes
loadLocal();

// make images into a funciton to help load pics faster
function makeImg(){
  var baseball  = new Image('baseball.jpg');
  var skateboard = new Image('skateboard.jpg');
  var bicycle = new Image('bicycle.jpg');
  var headin = new Image('headin.jpg');
  var littlegirl = new Image('littlegirl.jpg');
  var beatles = new Image('beatles.jpg');
  var snowboard = new Image('snowboard.jpg');
  var robot = new Image('robot.jpg');
  var minecraft = new Image('minecraft.jpg');
  var gymnastic = new Image('gymnastic.jpg');
  var bmx = new Image('bmx.jpg');
  var beach = new Image('beach.jpg');
}


function ranImg() {
    var ranNum = Math.floor(Math.random() * allImages.length);
    return allImages[ranNum];
}

var leftClick = document.getElementById('image1');
var rightClick = document.getElementById('image2');
var rand1, rand2;
function showPhoto(){
  do {
    rand1 = ranImg();
    rand2 = ranImg();
  } while(rand1 === rand2);
  leftClick.setAttribute('src', 'img/' + rand1.name);
  rightClick.setAttribute('src', 'img/' +  rand2.name);
}

showPhoto();

leftClick.addEventListener('click', function() {
  rand1.vote += 1;
  console.log(rand1.vote + rand1.name);
  showPhoto();
  makeChart();
  createLocal();
});

rightClick.addEventListener('click',function(){
  rand2.vote += 1;
  console.log(rand2.vote + rand2.name);
  showPhoto();
  makeChart();
  createLocal();
});

function makeChart() {
  var data = [
    {
      value: allImages[0].vote,
      label: 'baseball',
      color: '#90C3D4',
      highlight: '#6699FF'

    },
    {
      value: allImages[1].vote,
      label: 'skateboard',
      color: '#9966FF',
      highlight: '#CC00FF'

    },
    {
      value: allImages[2].vote,
      label: 'baseball',
      color: '#FF66FF',
      highlight: '#FF6699'

    },
    {
      value: allImages[3].vote,
      label: 'headin',
      color: '#FF9933',
      highlight: '#FF6600'

    },
    {
      value: allImages[4].vote,
      label: 'littlegirl',
      color: '#CC6699',
      highlight: '#CC0066'

    },
    {
      value: allImages[5].vote,
      label: 'beatles',
      color: '#99CC00',
      highlight: '#669900'

    },
    {
      value: allImages[6].vote,
      label: 'snowboard',
      color: '#CC6699',
      highlight: '#FF9933'

    },
    {
      value: allImages[7].vote,
      label: 'robot',
      color: '#9966FF',
      highlight: '#FF66FF'

    },
    {
      value: allImages[8].vote,
      label: 'minecraft',
      color: '#FF66FF',
      highlight: 'red'

    },
    {
      value: allImages[9].vote,
      label: 'gymnastic',
      color: '#9966FF',
      highlight: '#CC6699'

    },
    {
      value: allImages[10].vote,
      label:'bmx',
      color: '#CC6699',
      highlight: '#99CC00'

    },
    {
      value: allImages[11].vote,
      label: 'beach',
      color: '#99CC00',
      highlight: '#CC6699'
    }
  ];

  var context = document.getElementById('myCanvas').getContext('2d');
  var picChart = new Chart(context).Pie(data, {
    responsive : true,
    animationSteps : 30,
    animationEasing: 'easeOutBounce',
    animationRotate : true,
    animateScale : true,
  });
}
makeChart();

//local storage
function createLocal(){
localStorage.setItem("key",JSON.stringify(allImages));

}

function loadLocal(){
  var storedValue = localStorage.getItem("key");
  console.log(storedValue)
  if (storedValue!=null){
    allImages = JSON.parse(localStorage.getItem('key'));
  }else{
    makeImg();
  }
}







