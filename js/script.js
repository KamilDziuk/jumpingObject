



let counter = document.querySelector(".counter");
let jumpingObject = document.querySelector(".jumpingObject");
let gameBoard = document.querySelector(".gameBoard");
let blockMoving = document.querySelector(".blockMoving");


let allImages = ['/images/image0.jpg', '/images/image1.webp', '/images/image3.jpg',  '/images/image4.webp', '/images/image5.jpg']

setInterval(() => {


    let randomImages = allImages[Math.floor(Math.random()  * allImages.length)]
    gameBoard.style.background = `url(${randomImages}) no-repeat center`;
},3000)
        

jumpingObject.style.left = "90%";
jumpingObject.style.top = "91.5%";
blockMoving.style.left = "0%";
blockMoving.style.top = "91.5%;"
let point = 0;
pointCounter = () =>
    {
        
        counter.innerHTML = `Points:${point}`;
        setInterval(pointCounter,5000)
      if(point >= 15000)
        {
        point = 0 ; 
        }
        
        point ++;
    }

    pointCounter();
jumpingObject.addEventListener("click", (event) =>{

    
    jumpingObject.style.top =  "70%"
    setTimeout( () =>
    {
     
    jumpingObject.style.top =  "91.5%"
    },300)

});
document.addEventListener("keydown", (event) =>{
  
  



      if(event.code == "KeyW")
          {
      
   jumpingObject.style.top =  "70%"
      setTimeout( () =>
      {
       
      jumpingObject.style.top =  "91.5%"
      },300)
       
          }
                

                         
})


setInterval(() => 
{
    let currentLeft2 = parseInt(blockMoving.style.left);
    blockMoving.style.left = `${currentLeft2 + 2}%`

    if(blockMoving.style.left =="90%"  && jumpingObject.style.top =="91.5%" )
        {
            
    //   alert(`Game over, Points:${point}`);
 
        }

        if(blockMoving.style.left == "90%")
          {
            
              blockMoving.style.left = "0%"
          }
       
              
},30)


