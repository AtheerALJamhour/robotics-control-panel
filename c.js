


var slider=document.getElementById("slider1");
var filed=document.getElementById("filed1");
var value_right=document.getElementById("value_right1");
var sliderValue=document.getElementById("sliderValue1");

slider1.oninput = function() {
filed1.innerHTML=this.value + "%";
value_right1.style.left=this.value + "%";
sliderValue1.style.width=this.value + "%";
}

    var slider=document.getElementById("slider2");
    var filed2=document.getElementById("filed2");
    var value_right2=document.getElementById("value_right2");
    var sliderValue2=document.getElementById("sliderValue2");
    
    slider2.oninput = function() {
    filed2.innerHTML=this.value + "%";
    value_right2.style.left=this.value + "%";
    sliderValue2.style.width=this.value + "%";
    }
	
	 var slider3=document.getElementById("slider3");
        var filed3=document.getElementById("filed3");
        var value_right3=document.getElementById("value_right3");
        var sliderValue3=document.getElementById("sliderValue3");
        
        slider3.oninput = function() {
        filed3.innerHTML=this.value + "%";
        value_right3.style.left=this.value + "%";
        sliderValue3.style.width=this.value + "%";
        }
	        var slider4=document.getElementById("slider4");
        var filed4=document.getElementById("filed4");
        var value_right4=document.getElementById("value_right4");
        var sliderValue4=document.getElementById("sliderValue4");
        
        slider4.oninput = function() {
        filed4.innerHTML=this.value + "%";
        value_right4.style.left=this.value + "%";
        sliderValue4.style.width=this.value + "%";
        }
        var slider5=document.getElementById("slider5");
        var filed5=document.getElementById("filed5");
        var value_right5=document.getElementById("value_right5");
        var sliderValue5=document.getElementById("sliderValue5");
        
        slider5.oninput = function() {
        filed5.innerHTML=this.value + "%";
        value_right5.style.left=this.value + "%";
        sliderValue5.style.width=this.value + "%";
        }
		
		
		var slider6=document.getElementById("slider6");
        var filed6=document.getElementById("filed6");
        var value_right6=document.getElementById("value_right6");
        var sliderValue6=document.getElementById("sliderValue6");
        
        slider6.oninput = function() {
        filed6.innerHTML=this.value + "%";
        value_right6.style.left=this.value + "%";
        sliderValue6.style.width=this.value + "%";
        }
		
var storedItem = localStorage.getItem("storedItem");
function save() {

    var Item = document.getElementById("input").value;
    localStorage.setItem("storedItem" , Item);
    document.getElementById("savedslider1").innerHTML=Item +"SAVED";

}
function get() {
localStorage.getItem("storedItem");
document.getElementById("openedslider1").innerHTML= storedItem +"OPENED";

}
