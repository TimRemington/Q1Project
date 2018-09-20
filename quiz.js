// ----------------
// HELPER FUNCTIONS
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

// Function to grade the user when they submit
function gradeResults() {
  let answerOne = document.getElementById('ques1options').value
  let answerTwo = document.getElementById('ques2options').value
  let answerThree = document.getElementById('ques3options').value
  let answerFour = document.getElementById('ques4options').value
  let answerFive = document.getElementById('ques5options').value

  if (answerOne == 3 && answerTwo == 3 && answerThree == 4 && answerFour == 1 && answerFive == 2) {
    return youWin()
  } else {
    return youLose()
  }

}

// Function to let the user know they won
function youWin() {
  document.getElementById('winning').hidden = false
  document.getElementById('thequiz').hidden = true
}

// Function to let the user know they lost
function youLose() {
  document.getElementById('losing').hidden = false
  document.getElementById('thequiz').hidden = true
}


// ----------------
// START OF PAGE
// ----------------

document.addEventListener('DOMContentLoaded', () => {

  // Background JS (The CircuitBoard)
  let elems = document.querySelectorAll('.parallax');
  let instances = M.Parallax.init(elems);

  // Use for Modals
  let elem = document.querySelectorAll('.modal');
  let instance = M.Modal.init(elem);

  // Use to get selection field to work with Materialize
  var elements = document.querySelectorAll('select');
  var inst = M.FormSelect.init(elements);

  // Arrays for random generation of terms
  let firstName = ['Ben', 'Amy', 'Lana', 'Martin', 'Roy', 'Elliot', 'Monica', 'Miranda', 'Kevin', 'Joel', 'Mary', 'Stacy', 'Andrew', 'Willaim', 'Laurence', 'Tyler', 'Craig', 'Matthew', 'John', 'Riley', 'Theodore', 'Luke', 'Codename', 'Rowan', 'Jen', 'Mordecai', 'Grant', 'Jonah', 'Tim', 'Allen', 'Erik', 'Garrison', 'Leonard', 'Bud', 'Draco', 'Leeno', 'Alex', 'Henry', 'Marco']
  let lastName = ['Remington', 'Masterson', 'Meeks', 'Wolf', 'Gadsden', 'Cortez', 'Lupo', 'Jannek', '01001010', 'Hanson', 'McClaren', 'Roberts', 'Phillips', 'Cashel', 'Breslin', 'Hoyt', 'Averro', 'Gilligan', 'Strickland', 'Dresden', 'Womack', 'Reynolds', 'Perkins', 'Heston', 'Smith', 'Banana', 'Greep', 'Johnson', 'Greenswade', 'Mechner', 'Mitsoda', 'Herrick', 'Preston']
  let location = ['London', 'Mumbai','Heck', 'Shantyville', 'Westworld', 'San Vangelis', 'Dubai', 'Cardiff', 'Moscow', 'San Diego', 'Lunar City', 'Toronto', 'Portland', 'Delphi', 'New Orleans', 'Dublin', 'Tokyo', 'Elysium', 'The Moon', 'San Francisco', 'The Crater', 'the Great Garbage Pit', 'Chicago', 'Pandora', 'Mega City One', 'Detroit']
  let pets = ['rats', 'dogs', 'cockroaches', 'crabs', 'cats', 'bunnies', 'horses', 'ferrets', 'goldfish', 'humans (humans!?)', 'sea turtles', 'mice', 'geese', 'hamsters']
  let petName = ['Greeno', 'Pluto', 'Charlie', 'Max', 'Rocky', 'Buddy', 'Cooper', 'Lenny', 'Kafka', 'Micky', 'Donald', 'Spike', 'Cain', 'Lester', 'Fluffy', 'Mr. Whiskers', 'Tucker', 'Leeno', 'Bandit', 'Barkus', 'THE EVIL ONE', 'Friskers', 'Doogal']
  let wrongDoers = ['bandits', 'stab-guys', 'wild dogs', 'marauders', 'killers', 'gangers', 'circus clowns', 'pogo stick gansters', 'mobsters', 'genetically mutated crab men', 'cannibals', 'clowns']
  let victims = ['women', 'children', 'house pets', 'random homeless people', 'old ladies', 'freemasons', 'men', 'people who talk in movie theaters', 'circus clowns']
  let company = ['Exodar', 'Ubisoft', 'Valve', 'Huang-Feng', 'Galvanize', 'Whole Foods', 'Sony', 'Microsoft', 'EA', 'Walmart', 'Fisher-Price', 'Syntho', 'QuanGen', 'Tellux', 'Unicron Mining Corporation', 'Wri-X', 'Harcrow Cyberdynamics', 'U&K Polyservices']
  let hobbies = ['Golfing', 'Knitting', 'Slaying my Enemies', 'Vigilante Justice', 'Skiing', 'Board Games', 'Hiking', 'Jogging', 'Fighting the MAN', 'Chess', 'Painting', 'Travel', 'Boxing', 'Bicycling', 'Cooking']
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

  // A lot of code here generating the questions
  document.getElementById('ques1options').innerHTML = `
    <option value="" disabled selected>Choose your option</option>
    <option value="1">${randomElement(firstName)} ${randomElement(lastName)}</option>
    <option value="2">${randomElement(firstName)} ${randomElement(lastName)}</option>
    <option value="3">${bestFriendQ}</option>
    <option value="4">${randomElement(firstName)} ${randomElement(lastName)}</option>`

  document.getElementById('ques2options').innerHTML = `
    <option value="" disabled selected>Choose your option</option>
    <option value="1">${randomElement(pets)}</option>
    <option value="2">${randomElement(pets)}</option>
    <option value="3">${childhoodPetsQ}</option>
    <option value="4">${randomElement(pets)}</option>`

  document.getElementById('ques3options').innerHTML = `
    <option value="" disabled selected>Choose your option</option>
    <option value="1">${randomElement(zodiac)}</option>
    <option value="2">${randomElement(zodiac)}</option>
    <option value="3">${randomElement(zodiac)}</option>
    <option value="4">${zodiacQ}</option>`

  document.getElementById('ques4options').innerHTML = `
    <option value="" disabled selected>Choose your option</option>
    <option value="1">${handlerQ}</option>
    <option value="2">${randomElement(firstName)} "The ${randomElement(animal)}" ${randomElement(lastName)}</option>
    <option value="3">${randomElement(firstName)} "The ${randomElement(animal)}" ${randomElement(lastName)}</option>
    <option value="4">${randomElement(firstName)} "The ${randomElement(animal)}" ${randomElement(lastName)}</option>`

  document.getElementById('ques5options').innerHTML = `
    <option value="" disabled selected>Choose your option</option>
    <option value="1">${randomElement(color)}</option>
    <option value="2">${colorQ}</option>
    <option value="3">${randomElement(color)}</option>
    <option value="4">${randomElement(color)}</option>`

  // Console logs to help cheat with the impossible final quiz
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

  document.getElementById('endButton').addEventListener('click', gradeResults)

});
