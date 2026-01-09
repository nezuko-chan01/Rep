/* POPUPS */

function openPopup(){

  document.getElementById("popup1").style.display="block";

}

function tellMe(){

  hideAll();

  document.getElementById("happy").style.display="block";

}

function dontKnow(){

  hideAll();

  document.getElementById("angry").style.display="block";

}

function goNote(){

  hideAll();

  document.getElementById("note").style.display="block";

}

function goHome(){

  hideAll();

}

function hideAll(){

  document.querySelectorAll(".popup").forEach(p=>{

    p.style.display="none";

  });

}

/* CAT SOUND */

function playCat(){

  document.getElementById("catSound").play();

}

/* HEART RAIN */

setInterval(()=>{

  const heart=document.createElement("div");

  heart.className="heart";

  heart.innerText="💓";

  heart.style.left=Math.random()*100+"vw";

  heart.style.animationDuration=(2+Math.random()*3)+"s";

  document.body.appendChild(heart);

  setTimeout(()=>heart.remove(),5000);

},300);

/* CONFETTI */

setTimeout(()=>{

  for(let i=0;i<30;i++){

    const c=document.createElement("div");

    c.innerText="🎉";

    c.style.position="fixed";

    c.style.left=Math.random()*100+"vw";

    c.style.top="-20px";

    c.style.fontSize="24px";

    c.style.animation="fall 3s linear";

    document.body.appendChild(c);

    setTimeout(()=>c.remove(),3000);

  }

},4000);