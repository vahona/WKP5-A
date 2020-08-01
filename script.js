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
      for (let i = 0; i < recipes.length; i++) {

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

// Grabe some element

    const outerModal = document.querySelector('.outer-modal');
    const innerModal = document.querySelector('.inner-modal');
    const detail = document.querySelector('.detail_for_recipe');

// Function for the modal

  const detailRecipe = () => {
    const contain = document.querySelector(".container");
  // Create an html

    for (let i = 0; i < recipes.length; i++) {

      detailHTML = `
        <div class="detail_for_recipe">
          <div class="heading_detail">
            <h2>${recipes[i].title}  <small>${recipes[i].author}</small></h2>
          </div>
          <img src="https://bit.ly/2ZXyiKI" alt="">
          <ul class="list_of_some_info">
            <li>${recipes[i].difficulty}</li>
            <li>${recipes[i].timing}</li>
          </ul>
          <ul class="list_of_info">
            <li>Ingredient
              <ol>
                <li>${recipes[i].ingredients[0]}</li>
                <li>${recipes[i].ingredients[1]}</li>
                <li>${recipes[i].ingredients[2]}</li>
              </ol>
            </li>
            <li>Steps
              <ul>
                <li>${recipes[i].steps[0]}</li>
                <li>${recipes[i].steps[1]}</li>
                <li>${recipes[i].steps[2]}</li>
                <li>${recipes[i].steps[3]}</li>
              </ul>
            </li>
          </ul>`;
  };


// contain.insertAdjacentHTML('beforeend', detailHTML)

      innerModal.innerHTML += detailHTML;
  // Add a new class list so that we can creat function to close the the model
      outerModal.classList.add('open');
  };

// Close model when we don't need the model

  const handleCloseModal = event => {
    const isOutside = !event.target.closest('.inner-modal');
  if (isOutside) {
    closeModal();
    }
  };



  const closeModal = () => {
    outerModal.classList.remove('open');
  };

  const handleEscapeKey = event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

// Fuction to generate the event Listener of the button of information

  const handleClick = (e) => {

  // This condition for button clicked 

    if (e.target.matches('.more-info')) {
      detailRecipe();
  }

    if (e.target.matches('.more-info')){
      const detail = e.target.closest('.detail_for_recipe');
      const id = Number(detail.dataset.id);
      const realRecep = rrecipes.find(realRecep => realRecep.id === id);

      realRecep();
  };
}
  const generateButton = document.querySelector('button.generate');
  generateButton.addEventListener('click', renderCard);
  window.addEventListener('click', handleClick);
  outerModal.addEventListener('click', handleCloseModal);

