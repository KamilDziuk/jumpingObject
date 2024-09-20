



let counter = document.querySelector(".counter");
let jumpingObject = document.querySelector(".jumpingObject");
let gameBoard = document.querySelector(".gameBoard");
let blockMoving = document.querySelector(".blockMoving");
let level = document.querySelector(".level");

let allImages = ['/images/image0.jpg', '/images/image1.webp', '/images/image3.jpg',  '/images/image4.webp', '/images/image5.jpg']

setInterval(() => {


    let randomImages = allImages[Math.floor(Math.random()  * allImages.length)]
    gameBoard.style.background = `url(${randomImages}) no-repeat center`;
},4000);
        

jumpingObject.style.left = "90%";
jumpingObject.style.top = "91.5%";
blockMoving.style.left = "0%";
blockMoving.style.top = "91.5%";
let point = 0;
pointCounter = () =>
    {
        
              level.innerHTML = "Level 0"
 setInterval(() => {
            counter.innerHTML = `Points:${point}`;
            levelGame = () => {

                if(point == 0) 
                    {
                        level.innerHTML = "Level 0"
                    }

                if(point == 10) 
                {
                    level.innerHTML = "Level 1"
                }
                if(point == 20) 
                    {
                        level.innerHTML = "Level 2"
                    }
                    if(point == 30) 
                        {
                            level.innerHTML = "Level 3"
                        }
                        if(point == 40) 
                            {
                                level.innerHTML = "Level 4"
                            }
                            if(point == 50) 
                                {
                                    level.innerHTML = "Level 5"
                                }
                                if(point == 60) 
                                    {
                                        level.innerHTML = "Level 6"
                                    }
                                    if(point == 70) 
                                        {
                                            level.innerHTML = "Level 7"
                                        }
                    }
                    levelGame();
        point ++;
      
    },1000)

 
    };


    pointCounter()

jumpingObject.addEventListener("click", () =>{

    
    jumpingObject.style.top =  "70%";
    setTimeout( () =>
    {
     
    jumpingObject.style.top =  "91.5%";
    },300);

});
document.addEventListener("keydown", (event) =>{
  
  



      if(event.code == "KeyW")
          {
      
   jumpingObject.style.top =  "70%";
      setTimeout( () =>
      {
       
      jumpingObject.style.top =  "91.5%";
      },300);
       
          }
                

                         
})


setInterval(() => 
{
    let currentLeft2 = parseInt(blockMoving.style.left);
    blockMoving.style.left = `${currentLeft2 + 2}%`

    if(blockMoving.style.left =="90%"  && jumpingObject.style.top =="91.5%" )
        {
           alert(`Game over. Your points: ${point}`)
            point = 0;
        }

        if(blockMoving.style.left == "98%")
          {
            
              blockMoving.style.left = "0%";
          }
       
              
},30);


