var i=0,rounds=0;
const mediaQuery = window.matchMedia('(min-width:280px) and (max-width:540px)');
var highscore1=getCookie("highscore");
function getHighScore()
{
    if(highscore1=='')
    {
        document.getElementById('highscore').innerHTML=0;
    }
    else
    {
        document.getElementById('highscore').innerHTML=highscore1;
    }
    
}
function ratRandom()
{
    let random1=getRandomInt(15);
    console.log(random1);
    let img1=document.createElement('img');
    img1.src="rat1.gif";
    img1.alt="rat";
    img1.className="img_height";
    document.querySelectorAll('.col')[random1].appendChild(img1);
    img1.addEventListener('click',function(){
        i++;
        document.getElementById('score').innerHTML=i;
    });
    setTimeout(function(){ 
        document.querySelectorAll('.col')[random1].removeChild(img1);
        if(rounds<40)
        {
            rounds++;
            if(i>highscore1)
            {
                document.getElementById('highscore').innerHTML=i;
            }
            ratRandom();
        }
        else
        {
            if(i>getCookie("highscore"))
            {
                document.getElementById('highscore').innerHTML=i;
                setCookie(i);
            }
        }
    }, 600);
}
function setCookie(highscore)
{
    document.cookie="highscore="+highscore;
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
function displayGame()
{
    document.getElementById('div1').style.visibility="hidden";
    document.getElementById('div1').style.display="none";
    document.getElementById('div2').style.visibility="visible";
    if (mediaQuery.matches) {
        document.getElementById('div2').style.display="block";
    }
    else
    {
        document.getElementById('div2').style.display="flex";
    }
    ratRandom();
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}