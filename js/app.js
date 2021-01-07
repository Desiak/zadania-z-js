'use strict';

document.addEventListener('DOMContentLoaded', function() {
      // tutaj będziemy umieszczać kod ze wszystkich zadań


const dropdownTrigger= document.querySelector(".for-dropdown");
const dropdownSection= document.querySelector(".dropdown");

	

	dropdownTrigger.addEventListener("mouseover",()=>{
		dropdownSection.style.display="block";
	})

	dropdownTrigger.addEventListener("mouseout",()=>{
		dropdownSection.style.display="none";
	})

	//zadanie 2

	function toggleMenu(){

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
	for(var i=0;i<buttons.length; i++){
		buttons[i].addEventListener("click", toggleMenu);

}

	//zadanie 3
	const navbar= document.querySelector(".navbar");
	window.addEventListener("scroll", function(e){
		if(window.pageYOffset>100){navbar.style.borderBottom="20px solid red";}
		else{navbar.style.borderBottom=""}
	})

	//zadanie 4
	const backToTopButton= document.querySelector(".back-top");
	backToTopButton.addEventListener("click", ()=>{
		window.scroll(0,0);
	})

	//zadanie 5
	const revs= document.querySelectorAll(".org");
	const dots= document.querySelectorAll(".dot");
	console.log(revs, dots);
	for (var i=0; i<dots.length; i++){
		dots[i].addEventListener('click', function(){
			
		})
	}

	dots[0].addEventListener("click", function(){
		for(var i=0; i<dots.length; i++){
			revs[i].classList.remove("visible");
			dots[i].classList.remove("active");
		}
		dots[0].classList.add("active");
		revs[0].classList.add("visible");
	})

	dots[1].addEventListener("click", function(){
		for(var i=0; i<dots.length; i++){
			revs[i].classList.remove("visible");
			dots[i].classList.remove("active");
		}
		dots[1].classList.add("active");
		revs[1].classList.add("visible");
	})

	dots[2].addEventListener("click", function(){
		for(var i=0; i<dots.length; i++){
			revs[i].classList.remove("visible");
			dots[i].classList.remove("active");
		}
		dots[2].classList.add("active");
		revs[2].classList.add("visible");
	})

	dots[3].addEventListener("click", function(){
		for(var i=0; i<dots.length; i++){
			revs[i].classList.remove("visible");
			dots[i].classList.remove("active");
		}
		dots[3].classList.add("active");
		revs[3].classList.add("visible");
	})

	//zadanie 6
	const inputTextField= document.querySelector(".form-control");
	const addTaskButton= document.querySelector(".add-task-btn");
	const tasksList = document.querySelector(".list");

const hint = document.createElement("div");
			hint.innerText="Task name is too short!";
			hint.classList.add("alert", "alert-danger");
			document.querySelector(".input-group").appendChild(hint);
			hint.style.display="none";
	function addTask(){
			//
			
			

			const inputValue= inputTextField.value;
			if(inputValue!==""){console.log(inputValue);
						const newTask = document.createElement("li");
						const newTaskText= document.createElement("div");
						newTaskText.classList.add("task-text");
						
						const checkedButton= document.createElement("button");
						checkedButton.classList.add("btn", "btn-info");
						checkedButton.innerText="Zrobione";
						checkedButton.addEventListener("click", function(){
			
								newTaskText.classList.toggle("task-done");
						}
							)
						
			
						const deleteButton= document.createElement("button");
						deleteButton.classList.add("btn", "btn-primary");
						deleteButton.addEventListener("click", function(){
							console.log(this);
							this.parentElement.remove();
						})
			
						newTaskText.innerText=inputValue;
						deleteButton.innerText="USUŃ";
			
			
						newTask.appendChild(newTaskText);
						newTask.appendChild(deleteButton);
						newTask.appendChild(checkedButton);
						tasksList.appendChild(newTask);
						inputTextField.value='';
						hint.style.display="none";
					} else{
						hint.style.display="table-header-group";
					}
	}

	addTaskButton.addEventListener("click", addTask);
	}

	)