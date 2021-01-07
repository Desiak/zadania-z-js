'use strict';

document.addEventListener('DOMContentLoaded', function() {
      // tutaj będziemy umieszczać kod ze wszystkich zadań

      console.log("działa");

const dropdownTrigger= document.querySelector(".for-dropdown");
const dropdownSection= document.querySelector(".dropdown");

console.log(dropdownSection, dropdownTrigger);
	

	dropdownTrigger.addEventListener("mouseover",()=>{
		dropdownSection.style.display="block";
	})

	dropdownTrigger.addEventListener("mouseout",()=>{
		dropdownSection.style.display="none";
	})

	//zadanie 2

	function toggleMenu(){

console.log(this);
		if(this.previousElementSibling.style.display==="none" || this.previousElementSibling.style.display===""){
			this.previousElementSibling.style.display="block";
			this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
				}
				else{
this.previousElementSibling.style.display="none";
			this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
			
					}
			}

			const buttons= document.querySelectorAll(".read-more");
	console.log(buttons[0].previousElementSibling);
	for(var i=0;i<buttons.length; i++){
		buttons[i].addEventListener("click", toggleMenu);

}

	//zadanie 3
	const navbar= document.querySelector(".navbar");
	window.addEventListener("scroll", function(e){
		console.log(window.pageYOffset);
		if(window.pageYOffset>100){navbar.style.borderBottom="20px solid red";}
		else{navbar.style.borderBottom=""}
	})

	}

	)