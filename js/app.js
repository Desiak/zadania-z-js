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
    });

