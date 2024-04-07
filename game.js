// Canvas 요소 가져오기 및 그래픽 컨텍스트 설정
var canvas = document.getElementById(`canvas`);
var ctx = canvas.getContext("2d");

// Canvas 크기 설정
canvas.width = window.innerWidth - 100;
canvas.height = 300;

// 이미지 경로 설정
var catImg = new Image();
var birdImg = new Image();
catImg.src = "img/cat.png";
birdImg.src = "img/bird.png";

// 캐릭터 객체 정의
var cat = {
    x: 10, // 가로 위치
    y: 200, // 세로 위치
    width: 100, // 가로 크기
    height: 100, // 세로 크기
    // 화면에 그리기
    draw() {
        // 고양이 이미지 그리기
     
        if (jump_flag===true)
        {
            ctx.drawImage(catImg,400,250,180,155,this.x, this.y, this.width, this.height)
        }
        else if(timer % 36 <6){
            // 0~5
            ctx.drawImage(catImg,210,55,180,155,this.x, this.y, this.width, this.height)
        }
        else if(timer % 36 <12){
            // 0~5
            ctx.drawImage(catImgg,400,250,180,155,this.x, this.y, this.width, this.height)
        }
        else if(timer % 36 <18){
            // 0~5
            ctx.drawImage(catImgg,210,250,180,155,this.x, this.y, this.width, this.height)
        }
        else if(timer % 36 <24){
            // 0~5
            ctx.drawImage(catImg,25,250,180,155,this.x, this.y, this.width, this.height)
        }
        else if(timer % 36 <30){
            // 0~5
            ctx.drawImage(catImg,210,250,180,155,this.x, this.y, this.width, this.height)
        }
        else if(timer % 36 <36){
            // 0~5
            ctx.drawImage(catImg,400,250,180,155,this.x, this.y, this.width, this.height)
        }
    }
};

// 새 클래스 정의
class Bird {
    constructor() {
        this.x = canvas.width - 100; // 가로 위치
        this.y = 200; // 세로 위치
        this.width = 100; // 가로 크기
        this.height = 100; // 세로 크기
    }
    // 화면에 그리기
    draw() {
        // 새 이미지 그리기
        
        ctx.drawImage(birdImg, 450, 80, 130, 100, this.x, this.y, this.width, this.height);
        
        
    }   
}

var timer = 0; // 타이머 변수 초기화
var birdList = []; // 새 객체를 담을 배열
var animation;
var jump_flag=false;
var jump_timer=0;
var regen=1;
var last_time=0;
function perform() {
    animation = requestAnimationFrame(perform); // 애니메이션 프레임 ID 저장

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    timer++;

    if (timer % (regen+150) == 0 && last_time+100<timer) {
         var bird = new Bird();
         birdList.push(bird);
         regen=Math.floor(random()*100+1);
     }

    birdList.forEach((bird, idx, obj) => {
        if (bird.x < 0) {
            obj.splice(idx, 1); // 
        } else {
            bird.draw();
            bird.x -= 5;
            collision(cat, bird); // 고양이와 새의 충돌 검사
        }
    });

    if (jump_flag === true) 
    {
        cat.y -= 4;
        jump_timer += 4;
    }
    if (jump_flag === false) {
        if (cat.y < 200) {
            cat.y += 4;
        }
    }
    if (jump_timer > 150) {
        jump_timer = 0;
        jump_flag = false;
    }

    cat.draw();
}

document.addEventListener("keydown", (e) => {
    if (isGameRunning===true){
        if (e.code === "Space" && !jump_flag && cat.y === 200)
         { // 스페이스바 누르고, 이미 점프 중이 아니며, 바닥에 있을 때만
            jump_flag = true;
        }

    }
    //if (e.code === "z") {
        //startGame(); // 스페이스바를 눌러 게임 시작
    //}
    
});




function collision(cat, bird) {
    // 충돌 조건을 경계 사각형의 겹침으로 판단
    if (cat.x < bird.x + bird.width/2 &&
        cat.x + cat.width/2 > bird.x &&
        cat.y < bird.y + bird.height/2 &&
        cat.y + cat.height/2 > bird.y) {
        // 충돌이 감지되면 애니메이션을 멈춤
        cancelAnimationFrame(animation);
        sGameRunning = false//게임 끝남
        alert("부딪힘"); // 옵션: 사용자에게 충돌 알림
    }
}
var isGameRunning = false
function startGame(){
    //다시 시작할때 초기화해줘야 하는 부분을 처리
    jump_flag=false;
    jump_timer=0;
    isGameRunning= true;
    perform()
}
// perform 함수 호출하여 애니메이션 시작
startGame()