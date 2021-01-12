
// let container = document.getElementsByClassName('container')[0];
// let container1 = document.getElementsByClassName('container1')[0];
// container.onclick = function(){
// 	container1.classList.toggle("container_color_red");
// }

//Спойлер

// let coll = document.getElementsByClassName('block__title');

// for (let i = 0; i < coll.length; i++) {
// 	coll[i].addEventListener('click' , function() {
// 		this.classList.toggle('active');
// 		let content = this.nextElementSibling;
// 		if(content.style.maxHeight) {
// 			content.style.maxHeight = null;
// 		} else {
// 			content.style.maxHeight = content.scrollHeight + 'px'
// 		}
// 	})
// }


//Прогресс бар

// function progress () {
// 	let elem = document.getElementById("progress__line"),
// 		width = 1,
// 		id = setInterval(progressStatus, 100);
// 		function progressStatus () {
// 			if (width >= 100) {
// 				clearInterval(id);
// 			} else {
// 				width++;
// 				elem.style.width = width + '%';
// 				elem.innerHTML = width * 1 + '%';
// 			}
// 		}
// }
// progress();


/*Всплывающее окно



let popupToggle = document.querySelectorAll('.open-popup'),
	popupClose = document.querySelectorAll('.close');

	popupToggle.forEach( function(item) {
		item.addEventListener('click', function(){

		let popupName = item.getAttribute('data-popup');
		document.getElementById(popupName).style.display = 'block';
		})
	});

	popupClose.forEach( function(item) {
		item.addEventListener('click', function(){

		let popup = item.closest('.popup');
		popup.style.display = 'none';
		})
	});


	window.onclick = function(e) {
		if(e.target.classList.contains('popup')) {
			e.target.style.display = 'none';
		}
	};
*/
//tabs


// let tab = function() {
// 	let tabNav = document.querySelectorAll('.tabs-nav__item'),
// 		tabContent = document.querySelectorAll('.tab'),
// 		tabName;

// 	tabNav.forEach(item => {
// 		item.addEventListener('click', selectTabNav)
// 	});

// 	function selectTabNav() {
// 		tabNav.forEach( item => {
// 			item.classList.remove('is-active');
// 		});
// 		this.classList.add('is-active');
// 		tabName = this.getAttribute('data-tab-name');
// 		selectTabContent(tabName);
// 	}

// 	function selectTabContent(tabName){
// 		tabContent.forEach(item => {
// 			item.classList.contains(tabName)? item.classList.add('is-active'):item.classList.remove('is-active');
// 		})
// 	}
// };

// tab();





// Selector, выподающий список

let select = function() {
	let selectHeader = document.querySelectorAll('.select__header');
	let selectItem = document.querySelectorAll('.select__item');

	selectHeader.forEach(item => {
		item.addEventListener('click', selectToggle)
	});

	selectItem.forEach(item => {
		item.addEventListener('click', selectChoose)
	});

	function selectToggle(){
		this.parentElement.classList.toggle('is-active');
	}

	function selectChoose() {
		let text = this.innerText,
			select = this.closest('.select'),
			currentText = select.querySelector('.select__current');
		currentText.innerText = text;
		select.classList.remove('is-active');

	}
};

select();


















