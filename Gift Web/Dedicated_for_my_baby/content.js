const messages = [
    "I love you so much baby",
    "I'm always proud of you love",
    "You deserve the world",
    "My baby and my everything"
]

let i = 0;
const text = document.getElementById("scroll-message");
const content = document.querySelector(".scrolling-content");

if (content && text){
    content.addEventListener("animationiteration", () => {
        i = (i + 1) % messages.length;
        text.textContent = messages[i];
    });
}


/*window.onload = function() {
    let welcomeScreen = document.getElementById("welcomeScreen");
    let mainContent = document.getElementById("mainContent")
    let timeLeft = 5; //Countdown seconds before the main content shows

let timer = setInterval(function(){
    timeLeft--;

    if (timeLeft <= 0) {
        clearInterval(timer);

        //fadeout animation after the welcome screen ends
        welcomeScreen.classList.add("fade-out");

        setTimeout(() => {
            welcomeScreen.style.display = "none";
            mainContent.style.display = "block";
            mainContent.classList.add("fade-in");
        },1000);
    }
    }, 1000);
};  
*/


window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    setTimeout(() =>{
        preloader.classList.add("fade-out");
        setTimeout(() => preloader.style.display = "none", 600);
    }, 2500);
});

const mailBox = document.getElementById("mailBox");
const mail = mailBox.querySelector(".mail");
const secondContent = document.getElementById ("secondContent");

mailBox.addEventListener("click", () => {
    mail.classList.add("opening");

    setTimeout(() =>{
        mailBox.style.display = "none";
        secondContent.classList.add("show");
    }, 800);
});

const innerBox = document.getElementById('page1');
const heartThumb = document.getElementById('heartThumb');

innerBox.addEventListener('scroll', () => {
  const scrollTop = innerBox.scrollTop;
  const scrollHeight = innerBox.scrollHeight - innerBox.clientHeight;
  const thumbMax = innerBox.clientHeight - heartThumb.offsetHeight;

  if (scrollHeight <= 0) return;

  const thumbPos = (scrollTop / scrollHeight) * thumbMax;
  heartThumb.style.transform = `translateY(${thumbPos}px)`;
});

function sprinkleHearts() {
    const heartsContainer = document.getElementById("hearts")
    for (let i = 0; i < 100; i++) {
        const heart = document.createElement("img")
        heart.className = "heart";
        heart.src = "hearts.gif";
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.width = Math.random() * 30 + 20 + "px";
        heart.style.opacity = Math.random() * 0.8 + 0.6;
        const duration = Math.random() * 3 + 3;
        heart.style.animation = `floatUp ${duration}s ease-out forwards`;
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), duration * 1500);
    }
}

const nextBtn = document.querySelector(".next-btn");
const secondContent1 = document.getElementById("secondContent");
const thirdContent = document.getElementById("thirdContent");

nextBtn.addEventListener("click", () => {
    sprinkleHearts();

    setTimeout(() => {
        secondContent1.style.display = "none";
        thirdContent.style.display = "block";
        thirdContent.classList.add("show");
    }, 100);
});


const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const msgScreen = document.getElementById("message-screen");
const msgGif = document.getElementById("msgGif");
const msgText = document.getElementById("msgText");
const backBtn = document.getElementById("backBtn");
const loveBtn = document.getElementById("loveBtn");

yesBtn.addEventListener("click", () => {
    msgScreen.style.display = "flex";
    msgGif.src = "I-love-you.gif";
    msgText.textContent = "I love you so much! I promise to always do my best to make you feel loved and happy."
    backBtn.style.display = "none";
    loveBtn.style.display = "inline-block";
});

noBtn.addEventListener("click", () => {
    msgScreen.style.display = "flex";
    msgGif.src = "sad.gif";
    msgText.textContent = "You can't say No. You're already destined to be with me.";
    backBtn.style.display = "inline-block";
    loveBtn.style.display = "none";
})

backBtn.addEventListener("click", () =>{
    msgScreen.style.display = "none";
});

loveBtn.addEventListener("click", () =>{
    msgText.textContent = "I love you too!";
    msgGif.src = "I-love-you-too.gif";
    backBtn.style.display = "none";
    loveBtn.style.display = "none";
    setTimeout(() => {
        window.location.href = "index.html"; 
    },3000);
});