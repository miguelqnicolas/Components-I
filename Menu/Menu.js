/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu(array) {
	const div = document.createElement('div');
	const ul = document.createElement('ul');
	
	// const li0 = document.createElement('li');
	// const li1 = document.createElement('li');
	// const li2 = document.createElement('li');
	// const li3 = document.createElement('li');
	// const li4 = document.createElement('li');
	// const li5 = document.createElement('li');

	// ul.append(li0, li1, li2, li3, li4, li5);
	
	
	// foreach or map? refer to step 2

	array.forEach(function(iteration) {
		let li = document.createElement('li');
		li.textContent = iteration;
		ul.append(li);
	});
	
	div.append(ul);

	div.classList.add('menu');

	const button = document.querySelector('.menu-button');

	button.addEventListener('click', () => {
		div.classList.toggle('menu--open');
	});

	return div;
}

const test = document.querySelector('body');

test.append(createMenu(menuItems));