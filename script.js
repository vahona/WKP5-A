console.log('HELLO');

const recipes = [
	{
		title: 'Eggs',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 1596168482053,
	},
	{
		title: 'Eggs',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 1596168522409,
	},
	{
		title: 'My recipe',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 1596168522409,
	},
];

const renderCard = () => {
	// check the recipes collection 
	const contain = document.querySelector(".container");

	// generate the HTML
	for(let i = 0; i < recipes.length; i++ ) {

	const myHTML = `<div class="recipe_info">
		<h4>${recipes[i].title}</h4>
    <img class="image_for_recipe" src="${recipes[i].picture}" alt="favorite food">
    <ul class="list_of_info">
      <li class="information_difficulty" >${recipes[i].difficulty}
      </li>
      <li class="information_timing"> ${recipes[i].timing}
      </li>
    </ul>
    <button class="more-info">More info</button>
	</div>`;
	
	
	// put it in the DOM

	contain.insertAdjacentHTML('beforeend', myHTML);
	};


};

// Function for the modal

const detailRecipe = () => {
	const contain = document.querySelector(".container");

	// Create an html

	detailHTML = `
	     <div class="detail_for_recipe">
      <div class="heading_detail">
        <h4>Recipe name </h4>
        <p>authore</p>
      </div>
      <ul class="list_of_some_info">
        <li>Difficult</li>
        <li>Timing</li>
      </ul>
      <ul class="list_of_info">
        <li>Steps
          <ol>
            <li>Do this</li>
            <li>Do that</li>
            <li>And do this and that</li>
            <li></li>
          </ol>
        </li>
        <li>Ingredients List
          <ul>
            <li>ing1</li>
            <li>ing2</li>
            <li>1ng3</li>
          </ul>
        </li>
      </ul>
      <img src="" alt="">
      <ul>
      </ul>

    </div>`;
	
	innerModal.innerHTML = orderHTML;
	outerModal.classList.add('open');


}

const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);
const generateBtInfo = document.querySelector('button.more-info');
generateBtInfo.addEventListener('click', detailRecipe);

