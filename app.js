
var i=1
function next(){
    console.log(i)
    i++
    if(i==2){
        document.getElementById("img").src = "imggg.jpeg"
         document.getElementById('pre').removeAttribute('disabled')
    }
    if(i==3){
        document.getElementById("img").src="imgggg.jpg"
        
    }
    if(i==4){
        document.getElementById("img").src="imgg2.jpeg"
    }
    if(i==5){
      document.getElementById("img").src="imgg3.jpeg"
    }
    if(i==6){
        document.getElementById("img").src="imgg4.jpeg"
    }
    if(i==7){
        document.getElementById("img").src="imgg5.jpeg"
    }
    if(i==8){
        document.getElementById("img").src="imgg6.jpeg"
    }
    if(i==9){
          document.getElementById("img").src="imgg7.jpeg"
         
         document.getElementById("next").setAttribute("disabled",true) // for disable next button when images ends
    }
}

function pre(){
    i--
    if(i==1){
        document.getElementById("img").src="imgg1.jpeg"
        document.getElementById("pre").setAttribute("disabled",true)
    }
    if(i==2){
        document.getElementById("img").src="imggg.jpeg"
    }
    if(i==3){
        document.getElementById("img").src="imgggg.jpg"
    }
    if(i==4){
        document.getElementById("img").src="imgg2.jpeg"
    }
    if(i==5){
        document.getElementById("img").src="imgg3.jpeg"
    }
    if(i==6){
        document.getElementById("img").src="imgg4.jpeg"
    }
    if(i==7){
        document.getElementById("img").src="imgg5.jpeg"
    }
    if(i==8){    
        document.getElementById("img").src="imgg6.jpeg"
        document.getElementById("next").removeAttribute("disabled")
    }
}