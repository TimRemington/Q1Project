document.addEventListener('DOMContentLoaded', () => {

  // Background JS (The CircuitBoard)
  let elems = document.querySelectorAll('.parallax');
  let instances = M.Parallax.init(elems);

  // Use for Modals
  let elem = document.querySelectorAll('.modal');
  let instance = M.Modal.init(elem);

  // Arrays for random generation of terms
  let firstName = ['Ben','Kevin', 'Joel', 'Mary', 'Stacy', 'Andrew', 'Willaim', 'Laurence', 'Tyler', 'Craig', 'Matthew', 'John', 'Riley', 'Theodore', 'Luke', 'Codename', 'Rowan', 'Jen', 'Mordecai', 'Grant', 'Jonah', 'Tim', 'Allen', 'Erik', 'Garrison', 'Leonard', 'Bud', 'Draco', 'Leeno', 'Alex', 'Henry', 'Marco']
  let lastName = ['Remington', 'Gadsden', 'Cortez', 'Lupo', 'Jannek', '01001010', 'Hanson', 'McClaren', 'Roberts', 'Phillips', 'Cashel', 'Breslin', 'Hoyt', 'Averro', 'Gilligan', 'Strickland', 'Dresden', 'Womack', 'Reynolds', 'Perkins', 'Heston', 'Smith', 'Banana', 'Greep', 'Johnson', 'Greenswade', 'Mechner', 'Mitsoda', 'Herrick', 'Preston']
  let location = ['London', 'Toronto', 'Portland', 'Delphi', 'New Orleans', 'Dublin', 'Tokyo', 'Elysium', 'The Moon', 'San Francisco', 'The Crater', 'the Great Garbage Pit', 'Chicago', 'Pandora', 'Mega City One', 'Detroit']
  let pets = ['rats', 'dogs', 'cats', 'bunnies', 'horses', 'ferrets', 'goldfish', 'humans (humans!?)', 'sea turtles', 'mice', 'geese', 'hamsters']
  let petName = ['Greeno', 'Micky', 'Donald', 'Spike', 'Cain', 'Lester', 'Fluffy', 'Mr. Whiskers', 'Tucker', 'Leeno', 'Bandit', 'Barkus', 'THE EVIL ONE', 'Friskers', 'Doogal']
  let wrongDoers = ['bandits', 'marauders', 'killers', 'gangers', 'circus clowns', 'pogo stick gansters', 'mobsters', 'genetically mutated crab men', 'cannibals', 'clowns']
  let victims = ['women', 'children', 'house pets', 'random homeless people', 'old ladies', 'freemasons', 'men', 'people who talk in movie theaters', 'circus clowns']
  let company = ['Exodar', 'Tellux', 'Unicron Mining Corporation', 'Wri-X', 'Harcrow Cyberdynamics', 'U&K Polyservices']
  let hobbies = ['Golfing', 'Slaying my Enemies', 'Vigilante Justice', 'Skiing', 'Board Games', 'Hiking', 'Jogging', 'Fighting the MAN', 'Chess', 'Painting', 'Travel', 'Boxing', 'Bicycling', 'Cooking']
  let type = ['mining', 'cloning', 'accounting', 'weapons', 'private contracting', 'baking', 'cyber security', 'asset acquisition', 'transportation']
  let size = ['large', 'small', 'pathetic', 'medium', 'unknown', 'rising', 'massive', 'powerful', 'influential']
  let zodiac = ['Aries', 'Pisces', 'Capricorn', 'Scorpio', 'Sagittarius', 'Virgo', 'Aquarius', 'Taurus', 'Cancer', 'Zeegoop?', 'Libra', 'Gemini', 'Hastur', 'Leo']
  let nationality = ['American', 'British', 'Scottish', 'Jamaican', 'German', 'Italian', 'Greek', 'Jewish', 'Nigerian', 'Chinese', 'Japanese', 'Brazilian', 'Antarctican', 'Martian', 'Lunar', 'Venusian', 'Titanian', 'Europan', 'Ilian', 'Zeegoop']
  let color = ['Red', 'Blue', 'Yellow', 'Green', 'Orange', 'Purple', 'Black', 'White', 'Brown', 'Tan', 'The Unknown Color', 'Chartreuse', 'Crimson', 'Pink', 'Burgandy', 'Aquamarine', 'Turquoise', 'Gold', 'Silver']
  let animal = ['Bear', 'Sloth', 'Red Tailed Fox', 'Naruto', 'Rat', 'Sea Lion', 'Ferret', 'Dog', 'Cat', 'Tiger', 'Cheetah', 'Mole', 'Mouse', 'Hamster', 'Zebra', 'Lion', 'Elephant', 'Bison', 'Horse', 'Sugar Glider']
  let equipment = ['Pistol', 'Rope', 'Banana', 'Plumbus', 'VR Goggles', 'Grenade', 'Bag of Cashews', 'Hamster', 'Sword', 'USB Drives', 'Machine Gun', 'Camera', 'Water Balloon', '100 Dollars', 'Pants', 'Wing Suit', 'Suitcase', 'Gravity Boots', 'Binoculars', '1000 Dollars', ]

  // Tests to make sure local storage matches
  let zodiacQ = localStorage.getItem("userZodiac")
  let colorQ = localStorage.getItem("userColor")
  let favAnimalQ = localStorage.getItem("userFavAnimal")
  let lastJobQ = localStorage.getItem("userLastJob")
  let dangerLevelQ = localStorage.getItem("userDanger")
  let handlerQ = localStorage.getItem("userHandler")
  let homeTownQ = localStorage.getItem("userHomeTown")
  let lastJobYearsQ = localStorage.getItem("userLastJobYears")
  let childhoodPetsQ = localStorage.getItem("userChildhoodPets")
  let bestFriendQ = localStorage.getItem("userBestFriend")

  console.log(zodiacQ)
  console.log(colorQ)
  console.log(favAnimalQ)
  console.log(lastJobQ)
  console.log(dangerLevelQ)
  console.log(handlerQ)
  console.log(homeTownQ)
  console.log(lastJobYearsQ)
  console.log(childhoodPetsQ)
  console.log(bestFriendQ)

  // ----------------
  // THE FUNCTIONS
  // ----------------

  // Functions for random numbers starting at 0 or 1
  function random0(numberRan1) {
    return Math.floor(Math.random() * numberRan1)
  }

  function random1(numberRan2) {
    return Math.floor(Math.random() * numberRan2) + 1
  }

  // Function to pull element randomly from Array
  function randomElement(arr) {
    let len = arr.length
    return arr[random0(len)]
  }


  // Function for if you Lose
  function youLose() {
    document.getElementById('thequiz').setAttribute('hidden', 'true')
    document.getElementById('finalStatus').removeAttribute('hidden')

    document.getElementById('lastStatement').innerText = "You Died."
    document.getElementById('lastGIF').innerHTML = `<iframe src="https://giphy.com/embed/3o7abwbzKeaRksvVaE" width="480" height="204" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/starwars-movie-star-wars-3o7abwbzKeaRksvVaE">via GIPHY</a></p>`
  }
  // Function for it you Win
  function youWin() {
  document.getElementById('thequiz').setAttribute('hidden', 'true')
  document.getElementById('finalStatus').removeAttribute('hidden')

  document.getElementById('lastStatement').innerText = "You did it agent."
  document.getElementById('lastGIF').innerHTML = '<iframe src="https://giphy.com/embed/10AoZDUmPrhguQ" width="450" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/compilation-10AoZDUmPrhguQ">via GIPHY</a></p>'
}

});
