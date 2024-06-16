




let jumpingObject = document.querySelector(".jumpingObject");
let blockMoving = document.querySelector(".blockMoving");
jumpingObject.style.left = "490px"
jumpingObject.style.top = "490px"
blockMoving.style.left = "10px"
blockMoving.style.top = "468px"

document.addEventListener("keydown", (event) =>{
  
  



      if(event.code == "KeyW")
          {
      
   jumpingObject.style.top =  "400px"
      setTimeout( () =>
      {
       
      jumpingObject.style.top =  "490px"
      },300)
       
          }
                

                         
})


setInterval(() => 
{
    let currentLeft2 = parseInt(blockMoving.style.left);
    blockMoving.style.left = `${currentLeft2 + 5}px`

    if(blockMoving.style.left == "490px"  && jumpingObject.style.top == "490px" )
        {
      alert("Game over")
         
        }

        if(blockMoving.style.left == "500px")
          {
            
              blockMoving.style.left = "10px"
          }
        if(blockMoving.style.left == "-10px")
            {
             
                blockMoving.style.left = "490px"
            }
  
              
},10)
