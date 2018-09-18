document.addEventListener('DOMContentLoaded', () => {

  // Background JS (The CircuitBoard)
  let elems = document.querySelectorAll('.parallax');
  let instances = M.Parallax.init(elems);

  // Use for Modals
  let elem = document.querySelectorAll('.modal');
  let instance = M.Modal.init(elem);

  // Place holder variables so I don't tax my API
  let corpBS1 = "Synergistically synergize one-to-one testing procedures."
  let corpBS2 = "Dramatically procrastinate wireless processes."
  let corpBS3 = "Enthusiastically e-enable viral collaboration and idea-sharing."

  // Arrays for random generation of terms
  let firstName = ['Ben', 'Luke', 'Codename', 'Rowan', 'Jen', 'Mordecai', 'Grant', 'Jonah', 'Tim', 'Allen', 'Erik', 'Garrison', 'Leonard', 'Bud', 'Draco', 'Leeno', 'Alex', 'Henry', 'Marco']
  let lastName = ['Remington', 'Smith', 'Banana', 'Greep', 'Johnson', 'Greenswade', 'Mechner', 'Mitsoda', 'Herrick', 'Preston']
  let location = ['London', 'Toronto', 'Portland', 'Delphi', 'New Orleans', 'Dublin', 'Tokyo', 'Elysium', 'The Moon', 'San Francisco', 'The Crater', 'the Great Garbage Pit', 'Chicago', 'Pandora', 'Mega City One', 'Detroit']
  let pets = ['rats', 'dogs', 'cats', 'bunnies', 'horses', 'ferrets', 'goldfish', 'humans (humans!?)', 'sea turtles', 'mice', 'geese']
  let petName = ['Greeno', 'Fluffy', 'Mr. Whiskers', 'Tucker', 'Leeno', 'Bandit', 'Barkus', 'THE EVIL ONE', 'Friskers', 'Doogal']
  let wrongDoers = ['bandits', 'marauders', 'killers', 'gangers', 'circus clowns', 'pogo stick gansters', 'mobsters', 'genetically mutated crab men']
  let victims = ['women', 'children', 'house pets', 'random homeless people', 'old ladies', 'freemasons', 'men', 'people who talk in movie theaters']
  let company = ['Exodar', 'Tellux', 'Unicron Mining Corporation', 'Wri-X', 'Harcrow Cyberdynamics', 'U&K Polyservices']
  let hobbies = ['Golfing', 'Slaying my Enemies', 'Vigilante Justice', 'Skiing', 'Board Games', 'Hiking', 'Jogging', 'Fighting the MAN']
  let type = ['mining', 'cloning', 'accounting', 'weapons', 'private contracting', 'baking', 'cyber security', 'asset acquisition', 'transportation']
  let size = ['large', 'small', 'pathetic', 'medium', 'unknown', 'rising', 'massive', 'powerful', 'influential']
  let zodiac = ['Aries', 'Pisces', 'Capricorn', 'Scorpio', 'Sagittarius', 'Virgo', 'Aquarius', 'Taurus', 'Cancer', 'Zeegoop?', 'Libra', 'Gemini', 'Hastur', 'Leo']
  let nationality = ['American', 'British', 'Scottish', 'Jamaican', 'German', 'Italian', 'Greek', 'Jewish', 'Nigerian', 'Chinese', 'Japanese', 'Brazilian', 'Antarctican', 'Martian', 'Lunar', 'Venusian', 'Titanian', 'Europan', 'Ilian', 'Zeegoop']
  let color = ['Red', 'Blue', 'Yellow', 'Green', 'Orange', 'Purple', 'Black', 'White', 'Brown', 'Tan', 'The Unknown Color', 'Chartreuse', 'Crimson', 'Pink', 'Burgandy', 'Aquamarine', 'Turquoise', 'Gold', 'Silver']
  let animal = ['Bear', 'Sloth', 'Red Tailed Fox', 'Naruto', 'Rat', 'Sea Lion', 'Ferret', 'Dog', 'Cat', 'Tiger', 'Cheetah', 'Mole', 'Mouse', 'Hamster', 'Zebra', 'Lion', 'Elephant', 'Bison', 'Horse', 'Sugar Glider']
  let equipment = ['Pistol', 'Rope', 'Banana', 'Plumbus', 'VR Goggles', 'Grenade', 'Bag of Cashews', 'Hamster', 'Sword', 'USB Drives', 'Machine Gun', 'Camera', 'Water Balloon', '100 Dollars', 'Pants', 'Wing Suit', 'Suitcase']

  // Variables to save some important info for quizzing later
  let handler = `${randomElement(firstName)} "The ${randomElement(animal)}" ${randomElement(lastName)}`
  let homeTown = randomElement(location)
  let lastJobYears = random1(10) + 1
  let childhoodPets = randomElement(pets)
  let bestFriend = `${randomElement(firstName)} ${randomElement(lastName)}`

  //Link to get corp BS
  // let link1 = `https://corporatebs-generator.sameerkumar.website/`
  // let corpAxios1 = axios.get(link1)
  //   .then((response) => {
  //     let corp1 = response.data
  //     let corpBS1 = corp1['phrase']
  //
  //     let link2 = `https://corporatebs-generator.sameerkumar.website/`
  //     let corpAxios2 = axios.get(link2)
  //       .then((response) => {
  //         let corp2 = response.data
  //         let corpBS2 = corp2['phrase']
  //
  //         let link3 = `https://corporatebs-generator.sameerkumar.website/`
  //         let corpAxios3 = axios.get(link3)
  //           .then((response) => {
  //             let corp3 = response.data
  //             let corpBS3 = corp3['phrase']

  // Creates the NAME and BIO on the HTML page
  document.getElementById("agentName").innerText = `Name: ${randomElement(firstName)} ${randomElement(lastName)}`
  document.getElementById("bio").innerText = backStoryCreator(homeTown, childhoodPets)

  // Creates Basic Info about the new identity. Some set to variables to be used later.
  document.getElementById("age").innerText = (random1(50) + 10)
  document.getElementById("weight").innerText = `${random1(120) + 100} lbs`
  document.getElementById("height").innerText = `${random1(2) + 4}ft, ${random1(12)}in`
  document.getElementById("nationality").innerText = `${randomElement(nationality)}`
  // Set to variables to go into local storage below
  let currentZodiac = document.getElementById("zodiac").innerText = `${randomElement(zodiac)}`
  let currentColor = document.getElementById("favCol").innerText = `${randomElement(color)}`
  let currentFavAnimal = document.getElementById("favAnimal").innerText = `${randomElement(animal)}`
  document.getElementById("bFF").innerText = bestFriend
  // Pets the user owns now.
  document.getElementById("pet1").innerText = randomElement(petName)
  document.getElementById("pet2").innerText = randomElement(petName)

  // Information on the new company. Saved old corp job for quizzing later
  let currentLastJob = document.getElementById("oldjob").innerText = randomElement(company)
  document.getElementById("companyinfo").innerText = `A ${randomElement(size)} company based in ${randomElement(location)} that specializes in ${randomElement(type)}. The company was known for a lot of things, but most people know about us because of our ability to:

  - ${corpBS1}
  - ${corpBS2}
  - ${corpBS3}

  I worked at this company for ${lastJobYears} years.`

  // List of old residences
  document.getElementById("red1").innerText = randomElement(location)
  document.getElementById("red2").innerText = randomElement(location)
  document.getElementById("red3").innerText = randomElement(location)
  document.getElementById("red4").innerText = randomElement(location)

  // List of hobbies
  document.getElementById("hob1").innerText = randomElement(hobbies)
  document.getElementById("hob2").innerText = randomElement(hobbies)
  document.getElementById("hob3").innerText = randomElement(hobbies)
  document.getElementById("hob4").innerText = randomElement(hobbies)

  // List of equipment for the job
  document.getElementById("eq1").innerText = randomElement(equipment)
  document.getElementById("eq2").innerText = randomElement(equipment)
  document.getElementById("eq3").innerText = randomElement(equipment)
  document.getElementById("eq4").innerText = randomElement(equipment)
  document.getElementById("eq5").innerText = randomElement(equipment)

  // Current danger level of mission. Save for quizzing later
  let currentDanger = document.getElementById("danger").innerText = random0(5)
  document.getElementById("place").innerText = randomElement(location)

  // UNDER CONSTRUCTION FOR RANDOM MISSION GENERATION
  document.getElementById("mission").innerText = "A minor executive named Ms. N needs a team to assassinate Dorian Hyden, an engineer of omegaBase GmbH, and recover their cyberbrain. A minor executive named Ms. N needs a team to assassinate Dorian Hyden, an engineer of omegaBase GmbH, and recover their cyberbrain."

  // Silly name for Handler inserted into doc
  document.getElementById("handlerCodename").innerText = handler

  // Functions to randomly get an image for the district and handler in the mission details
  districtPic()
  handlerPic()

  // Items going to local storage for the user to be quizzed on later
  localStorage.setItem("userZodiac", `${currentZodiac}`)
  localStorage.setItem("userColor",`${currentColor}`)
  localStorage.setItem("userFavAnimal",`${currentFavAnimal}`)
  localStorage.setItem("userLastJob",`${currentLastJob}`)
  localStorage.setItem("userDanger",`${currentDanger}`)
  localStorage.setItem("userHandler",`${handler}`)
  localStorage.setItem("userHomeTown",`${homeTown}`)
  localStorage.setItem("userLastJobYears",`${lastJobYears}`)
  localStorage.setItem("userChildhoodPets",`${childhoodPets}`)
  localStorage.setItem("userBestFriend",`${bestFriend}`)

  // Tests to make sure local storage matches
  console.log(localStorage.getItem("userZodiac"))
  console.log(localStorage.getItem("userColor"))
  console.log(localStorage.getItem("userFavAnimal"))
  console.log(localStorage.getItem("userLastJob"))
  console.log(localStorage.getItem("userDanger"))
  console.log(localStorage.getItem("userHandler"))
  console.log(localStorage.getItem("userHomeTown"))
  console.log(localStorage.getItem("userLastJobYears"))
  console.log(localStorage.getItem("userChildhoodPets"))
  console.log(localStorage.getItem("userBestFriend"))

  document.getElementById("proceedButton").addEventListener("click", toggleQuiz)
// })
// })
// })





// Functions for random numbers starting at 0 or 1
function random0(numberRan1) {
  return Math.floor(Math.random() * numberRan1)
}
function random1(numberRan2) {
  return Math.floor(Math.random() * numberRan2) + 1
}

// Function to randomly create back story
function backStoryCreator (homeTown, childhoodPets) {
  let selection = random1(2)
  let result

  switch (selection){
    case 1:
      result = `You grew up in ${homeTown}, with your two pet ${childhoodPets}, ${randomElement(petName)} and ${randomElement(petName)}. Everything was going well for you until tragedy struck. A group of ${randomElement(wrongDoers)} from ${randomElement(location)} invaded. They were ruthless, killing ${randomElement(victims)} and ${randomElement(victims)} alike. Once the flames settled, you fled, moving to ${randomElement(location)}. Here, you have made a new name for yourself, and are looking to get back at those who wronged you.  You believe working at ${randomElement(company)} will further this goal.`
      break;
    case 2:
      result = `You were born in ${homeTown}, but moved to ${randomElement(location)} when you were very young. In your early days, you ran with a group of ${randomElement(wrongDoers)}, but after putting some ${randomElement(victims)} in the hospital, you turned away from your old life.  You took a small job handling a ${randomElement(animal)}, during which you realized you loved animals.  Shortly after you adopted your two pet ${randomElement(pets)}, whom you named ${randomElement(petName)} and ${randomElement(petName)}. You now believe you can use your unique skill set to further ${randomElement(company)}'s goals`
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
  }

  return result
}

// Function to pull element randomly from Array
function randomElement(arr) {
  let len = arr.length
  return arr[random0(len)]
}

// Function to get a random district picture
function districtPic () {
  document.getElementById('districtpic').setAttribute('src', `district/district${random1(11)}.jpg`)
}

// Function to get a random handler picture
function handlerPic () {
  document.getElementById('handlerpic').setAttribute('src', `handler/handler${random1(14)}.jpg`)
}

// Function to swap the info and give the quiz
function toggleQuiz () {
  document.getElementById('theinfo').setAttribute('hidden', 'true')
  document.getElementById('thequiz').removeAttribute('hidden')
}

});
