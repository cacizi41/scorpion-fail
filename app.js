//create array allImages
var allImages = [];
function Image(name) {
  this.name = name;
  this.vote = 0;
  allImages.push(this);
}
  var baseball  = new Image('baseball.jpg');
  var  skateboard = new Image('skateboard.jpg');
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
 // .innerHTML
});

rightClick.addEventListener('click',function(){
  rand2.vote += 1;
  console.log(rand2.vote + rand2.name);
  showPhoto();
  makeChart();
  //.innerHTML
});

function makeChart() {
  var data = [
    {
      value: baseball.vote,
      label: 'baseball',
      color: 'blue',
      highlight: 'red'

    },
    {
      value: skateboard.vote,
      label: 'skateboard',
      color: 'blue',
      highlight: 'red'

    },
    {
      value: bicycle.vote,
      label: 'baseball',
      color: 'blue',
      highlight: 'red'

    },
    {
      value: headin.vote,
      label: 'headin',
      color: 'blue',
      highlight: 'red'

    },
    {
      value: littlegirl.vote,
      label: 'littlegirl',
      color: 'blue',
      highlight: 'red'

    },
    {
      value: beatles.vote,
      label: 'beatles',
      color: 'blue',
      highlight: 'red'

    },
    {
      value: snowboard.vote,
      label: 'snowboard',
      color: 'blue',
      highlight: 'red'

    },
    {
      value: robot.vote,
      label: 'robot',
      color: 'blue',
      highlight: 'red'

    },
    {
      value: minecraft.vote,
      label: 'minecraft',
      color: 'blue',
      highlight: 'red'

    },
    {
      value: gymnastic.vote,
      label: 'gymnastic',
      color: 'blue',
      highlight: 'red'

    },
    {
      value: bmx.vote,
      label: 'bmx',
      color: 'blue',
      highlight: 'red'

    },
    {
      value: beach.vote,
      label: 'beach',
      color: 'blue',
      highlight: 'red'
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








