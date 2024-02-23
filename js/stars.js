 /********* This script shuffles the star card arrangement ********/
 
 // Function to shuffle an array (Fisher-Yates shuffle algorithm)
 function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Get the container element
  const starCardsContainer = document.getElementById('star-cards-container');

  // Convert the child elements into an array
  const divs = Array.from(starCardsContainer.children);

  // Shuffle the array of divs
  const shuffledDivs = shuffleArray(divs);

  // Clear the container
  starCardsContainer.innerHTML = '';

  // Reinsert the shuffled divs into the container
  shuffledDivs.forEach(div => {
    starCardsContainer.appendChild(div);
  });

 /********* This script shuffles the card arrangement ********/