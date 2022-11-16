// declaring all my variable

let capture;
let rec1;
let box1;
let box2;
var myWeather;
var city,temp,wType;
var data;
let chk1;
let chk2;
let chk3;
var x,y;

var heart_x, heart_y;

//variable for image and iteration
let img;
let i=1;
//duration in ms
let t=7000;


// variable for the weather api
var weather,
cityName,
  country,
  weatherId,
  weatherDescription, 
  Cloudiness,
  humidity,
  windSpeed,
  windDeg,
  temp,
  visibility,
  windRatio;
var ville = "Lubbock";
var r = 0;

var epochUpdate, update, updateText;
var xDir, yDir, unit, countX, countY, size;
var c;



// function to preload the JSON into a variable
function preload() {
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q="+ville+"&units=imperial&APPID=8bc33b55474e0525d2c28707ca934965&lang=eng";
  weather = loadJSON(url);

  // json url news
  data = loadJSON("news.json");

  

}






function setup() {

  // webcam
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide();

  // variable for my heart animation
  heart_x=0;

  // align for my clock and weather
  textAlign(CENTER,CENTER);
  frameRate(60);
  textFont("Source Code Pro,Consolas, monospace");

  // framerate
  frameRate(20);
  //calling the weather method
  weatherVar();
  
  /*Humidity*/
  alpha = visibility;
  c = color(0, 0, 0, alpha);

  /* Convert Epoch to date */
  update = new Date(epochUpdate * 1000);
  updateText = update.getHours() + ":" + update.getMinutes();

  // news image
  addImg();


}

function draw() {
  //invert webcam to make it look like a mirrored camera
  push();
  translate(width,0);
  scale(-1, 1);
  image(capture, 0, 0, width, height);
  pop();

//date function
var currentYear = year();
var currentMonth = month();
var currentDay = day();
var currentDate = currentYear + '-' + nf(currentMonth, 2) + '-' + nf(currentDay, 2);

//rectangle for the design
stroke(0);
fill(255,0,0);
rect(1790,402,200,35);
fill(255);
rect (1790,480,200,120);
noFill();
stroke(255);
rect (1790,780,200,200);


noStroke();
  fill(255);
  textSize(15)
  text(currentDate, 1785, 402);

  // displaying data gather in the JSON file about the health
  text(data.health[0], 1785, 810);
  text(data.health[1], 1785, 860);
  fill(0);
  text(data.gym[0],1793, 440);
  fill(0);
  text(data.gym[2],1793, 490,200,120);


//Synthax for the clock tick
translate(width/2,height/2);
  strokeCap(SQUARE);
  // assigning every second, hour ro variable
  var d = new Date(); 
  var milli = d.getMilliseconds();
  var p_milli = milli/1000 + .001;
  var s = d.getSeconds() + p_milli;
  var p_s = s/60 + .001;
  var m = d.getMinutes() + p_s;
  var p_m = m/60 + .001;
  var h = d.getHours() + p_m;
  var p_h = h%12/12 + .001;
  
   
  // horloge circle
  noStroke();
  noFill();
  ellipse(850, -350,170,170);  
  // parseInt
  fill(196);
  textStyle(BOLD);
  text(("00"+parseInt(h)).substr(-2) + ":" + ("00"+parseInt(m)).substr(-2) + ":" + ("00"+parseInt(s)).substr(-2),850,-350);
  
  
  // circles
  rotate(-PI/2);
  noFill();
  strokeWeight(8);
  stroke(180,60,160);
  arc(350, 850, 100, 100, 0, p_h*2*PI);
  
  stroke(180,160,250);
  strokeWeight(6);
  arc(350, 850, 122, 122, 0, p_m*2*PI);
  
  stroke(60,160,180);
  strokeWeight(4);
  arc(350, 850, 140, 140, 0, p_s*2*PI);
  
  stroke(80,120,200);
  strokeWeight(2);
  arc(350, 850, 153, 153, 0, p_milli*2*PI);
  
  noFill();
  

  
  //weather rect
  rect(350, -850, 170, 195);
  



 // display weather
  rectMode(CENTER);
  rotate(-11);
  push();
  fill(255);
  textFont("Source Code Pro,Consolas, monospace");
  textAlign(LEFT);
  textSize(50);
  text(temp + "°", -920, -400);
  textSize(14);
  fill(255);
  textSize(12);
  text(cityName , -925, -290);
  textAlign(CENTER);
  text(
    weatherDescription  ,
    -815,
    -290
  );
  
  pop();


 
// heart beating animation 
 
  rectMode(CORNER);
  noStroke();
  fill(250,0,0);
  heart_x+=0.5;
  heart_y=6*(cos(100)+sin(heart_x/2))+50;
  translate(830, 260-heart_y+50);
  rotate(PI/4.0);
  square(0,0,heart_y);
  circle(heart_y/2,0,heart_y);
  circle(0,heart_y/2,heart_y);
  rectMode(CENTER);

  
}


 


function fixe(x,y) {
  strokeWeight(1);
 stroke(255);
  noFill(0);
  
}

function sketch(x,y) {
  strokeWeight(3);
  stroke(255);
  point(1, 5);
}
function animate(x, y) {
  translate(x * size, y * size);
  rotate(speed + x * xDir + y * yDir);
}


function weatherVar(){
  cityName = weather.name;
  country = weather.sys.country;
  weatherId = weather.weather[0].id;
  weatherDescription = weather.weather[0].description;
  temp = round(weather.main.temp);
  epochUpdate = weather.dt;
  Cloudiness = weather.clouds.all;
  windSpeed = weather.wind.speed;
  windRatio = windSpeed / 200;
  windDeg = weather.wind.deg;
  visibility = map(weather.visibility, 0, 100, 0, 255);
  
}

function addImg() 
{
  //create an if statement
   	// if i is less than 3, add 1 to the value of i
  	// if it's more than that, set the value of i to equal 1
		if (i<4){
      i++;
    }else{
      i=1;
    }

  //concatenate a string to add dog image name
    img = createImg("img" + i + ".png")
    let news_link= createA(data.url[i], "Full Article", 'blank');
    news_link.position(150,600);

    //look at the CSS for added class
    //this controls the width of the img
    img.addClass("NewsImg");

    //remove the image, specify duration using t, declared at top
    setTimeout(imgRemove, t);


    //keep cycling every second, specify duration using t, declared at top
    setTimeout(addImg, t);
  	print(i);
}

function imgRemove() {

  //removes image
  img.remove();
  news_link.remove();
}