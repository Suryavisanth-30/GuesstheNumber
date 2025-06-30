
            var cc=10;
 var gen = Math.round(Math.random()*100);
function validate(){
           
            var num = document.getElementById("num").value;
            var c = document.getElementById("ph");
            
   cc--;
   if(cc>=0){
            if(num<gen){
               
            var para=document.getElementById("ans");
            para.textContent="Your guess is low";
            c.textContent="Lives left:"+cc;
            }
            
            else if(num>gen){
            
            var para=document.getElementById("ans");
            para.textContent="Your guess is high";
            c.textContent="Lives left:"+cc;
            }
            
            else{
            var para=document.getElementById("ans");
            para.textContent="Wow!!! Super....Your guessed the number";
            }}
            else{
                 var para=document.getElementById("ans");
    para.textContent="You are run out of lives......."
}        
        }

