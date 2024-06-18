



let counter = document.querySelector(".counter");
let jumpingObject = document.querySelector(".jumpingObject");
let blockMoving = document.querySelector(".blockMoving");
jumpingObject.style.left = "480px"
jumpingObject.style.top = "472px"
blockMoving.style.left = "10px"
blockMoving.style.top = "405px"
let point = 0;
pointCounter = () =>
    {
        if(point <= 12000){
        counter.innerHTML = `Points:${point}`;
        setInterval(pointCounter,1700)
        point ++;
        }
    }

    pointCounter();
jumpingObject.addEventListener("click", (event) =>{

    
    jumpingObject.style.top =  "400px"
    setTimeout( () =>
    {
     
    jumpingObject.style.top =  "472px"
    },300)

});
document.addEventListener("keydown", (event) =>{
  
  



      if(event.code == "KeyW")
          {
      
   jumpingObject.style.top =  "400px"
      setTimeout( () =>
      {
       
      jumpingObject.style.top =  "472px"
      },300)
       
          }
                

                         
})


setInterval(() => 
{
    let currentLeft2 = parseInt(blockMoving.style.left);
    blockMoving.style.left = `${currentLeft2 + 5}px`

    if(blockMoving.style.left == "490px"  && jumpingObject.style.top == "472px" )
        {
            pointCounter();
      alert(`Game over, Points:${point}`)
         
        }

        if(blockMoving.style.left == "500px")
          {
            
              blockMoving.style.left = "10px"
          }
        if(blockMoving.style.left == "-10px")
            {
             
                blockMoving.style.left = "490px"
            }
  
              
},1000)
