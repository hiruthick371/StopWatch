// Variables for buttons

const startstopbtn=document.querySelector('#startstopbtn');
const resetbtn=document.querySelector('#resetbtn')

//Variables for time values

let seconds=0;
let minutes=0;
let hours=0;

//Variables for leading zeros

let leadingseconds=0;
let leadingminutes=0;
let leadinghours=0;

//Variables to set interval and timerstatus

let timerInterval=null;
let timerstatus="stopped";

// Stop watch function

function stopWatch(){
  seconds++;
  if(seconds===60 ){
    seconds=0;
    minutes++;

    if(minutes===60){
      minutes=0;
      hours++;
    }
  }



  if(seconds<10){
    leadingseconds="0"+seconds.toString();
  }
  else{
    leadingseconds=seconds;
  }
  if(minutes<10){
    leadingminutes="0"+minutes.toString();
  }
  else{
    leadingminutes=minutes;
  }
  if(hours<10){
    leadinghours="0"+hours.toString();
  }
  else{
    leadinghours=hours;
  }
  let displayTimer = document.getElementById('timer').innerText
  = leadinghours +":"+leadingminutes+":"+leadingseconds;

}




startstopbtn.addEventListener('click',function(){

  if(timerstatus==="stopped"){
    timerInterval=window.setInterval(stopWatch,1000);
    document.getElementById('startstopbtn').innerHTML=' <i class="fa-solid fa-pause" id="pause"></i>';
    timerstatus="started";
  }
  else{
      window.clearInterval(timerInterval);
      document.getElementById('startstopbtn').innerHTML=
      '<i class="fa-solid fa-play" id="play"></i>';

      timerstatus="stopped";
  }
});

resetbtn.addEventListener('click',function(){

  window.clearInterval(timerInterval);
  seconds=0;
  minutes=0;
  hours=0;

  document.getElementById('timer').innerHTML="00:00:00";

})
