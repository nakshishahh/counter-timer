const dayselememt = document.querySelector(".days");
const hourselememt = document.querySelector(".hours");
const minuteselememt = document.querySelector(".minutes");
const secondselememt = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTime = document.querySelector(".counterTime")



const seconds = 1000,
 minute = 60 * seconds,
 hour = 60 * minute,
 day = 24 * hour;

 const  timerFuntion = () => {
    let now = new Date();
    let dd = String(now.getDate()).padStart(2, "0"),
    mm = String(now.getMonth() + 1).padStart(2, "0"),
    yyyy = now.getFullYear();

    const enterday = prompt("Enter Day").padStart(2,"0");
    const entermonth = prompt("Enter Month").padStart(2,"0");
    now = `${mm}/${dd}/${yyyy}`;

    
    let targetday = `${entermonth}/${enterday}/${yyyy}`;
    if(now > targetday){
      targetday = `${entermonth}/${enterday}/${yyyy + 1}`
    }

    


    const intervalid = setInterval(() => {
    const timer = new Date(targetday).getTime();
    const today = new Date().getTime();
    const difference = timer - today;
    const leftday = Math.floor(difference/day);
    const lefthour = Math.floor((difference%day) / hour);
    const leftminute = Math.floor((difference%hour) / minute);
    const leftsecond = Math.floor((difference%minute) / seconds);
    
      
     dayselememt.innerText = leftday;
     hourselememt.innerText = lefthour;
     minuteselememt.innerText = leftminute;
     secondselememt.innerText = leftsecond; 
     if(difference < 0){
      counterTime.style.display = "none";
      heading.innerText = "Time's Up";
      clearInterval(intervalid); 
     }


    }, 0);

 };
 timerFuntion();
