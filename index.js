// -------------------
// Helper Functions
// -------------------

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

// Corp BS Generator
function corpBSquote() {
  let adverb = ['appropriately',
    'assertively ',
    'authoritatively',
    'collaboratively',
    'compellingly',
    'competently',
    'completely',
    'continually',
    'conveniently',
    'credibly',
    'distinctively',
    'dramatically',
    'dynamically',
    'efficiently',
    'energistically',
    'enthusiastically',
    'fungibly',
    'globally',
    'holisticly',
    'interactively',
    'intrinsically',
    'monotonectally',
    'objectively',
    'phosfluorescently',
    'proactively',
    'professionally',
    'progressively',
    'quickly',
    'rapidiously',
    'seamlessly',
    'synergistically',
    'uniquely'
  ]
  let verb = ['actualize',
    'administrate',
    'aggregate',
    'architect',
    'benchmark',
    'brand',
    'build',
    'cloudify',
    'communicate',
    'conceptualize',
    'coordinate',
    'create',
    'cultivate',
    'customize',
    'deliver',
    'deploy',
    'develop',
    'dinintermediate disseminate',
    'drive',
    'embrace',
    'e-enable',
    'empower',
    'enable',
    'engage',
    'engineer',
    'enhance',
    'envisioneer',
    'evisculate',
    'evolve',
    'expedite',
    'exploit',
    'extend',
    'fabricate',
    'facilitate',
    'fashion',
    'formulate',
    'foster',
    'generate',
    'grow',
    'harness',
    'impact',
    'implement',
    'incentivize',
    'incubate',
    'initiate',
    'innovate',
    'integrate',
    'iterate',
    'leverage existing',
    'leverage other\'s',
    'maintain',
    'matrix',
    'maximize',
    'mesh',
    'monetize',
    'morph',
    'myocardinate',
    'negotiate',
    'network',
    'optimize',
    'orchestrate',
    'parallel task',
    'plagiarize',
    'pontificate',
    'predominate',
    'procrastinate',
    'productivate',
    'productize',
    'promote',
    'provide access to',
    'pursue',
    'recaptiualize',
    'reconceptualize',
    'redefine',
    're-engineer',
    'reintermediate',
    'reinvent',
    'repurpose',
    'restore',
    'revolutionize',
    'right-shore',
    'scale',
    'seize',
    'simplify',
    'strategize',
    'streamline',
    'supply',
    'syndicate',
    'synergize',
    'synthesize',
    'target',
    'transform',
    'transition',
    'underwhelm',
    'unleash',
    'utilize',
    'visualize',
    'whiteboard'
  ]
  let adjective = ['24/7', '24/365',
    'accurate',
    'adaptive',
    'agile',
    'alternative',
    'an expanded array of',
    'B2B',
    'B2C',
    'backend',
    'backward-compatible',
    'best-of-breed',
    'bleeding-edge',
    'bricks-and-clicks',
    'business',
    'clicks-and-mortar',
    'client-based',
    'client-centered',
    'client-centric',
    'client-focused',
    'cloud-based',
    'cloud-centric',
    'cloudified',
    'collaborative',
    'compelling',
    'competitive',
    'cooperative',
    'corporate',
    'cost effective',
    'covalent',
    'cross functional',
    'cross-media',
    'cross-platform',
    'cross-unit',
    'customer directed',
    'customized',
    'cutting-edge',
    'distinctive',
    'distributed',
    'diverse',
    'dynamic',
    'e-business',
    'economically sound',
    'effective',
    'efficient',
    'elastic',
    'emerging',
    'empowered',
    'enabled',
    'end-to-end',
    'enterprise',
    'enterprise-wide',
    'equity invested',
    'error-free',
    'ethical',
    'excellent',
    'exceptional',
    'extensible',
    'extensive',
    'flexible',
    'focused',
    'frictionless',
    'front-end',
    'fully researched',
    'fully tested',
    'functional',
    'functionalized',
    'fungible',
    'future-proof',
    'global',
    'go forward',
    'goal-oriented',
    'granular',
    'high standards in',
    'high-payoff',
    'hyperscale',
    'high-quality',
    'highly efficient',
    'holistic',
    'impactful',
    'inexpensive',
    'innovative',
    'installed base',
    'integrated',
    'interactive',
    'interdependent',
    'intermandated',
    'interoperable',
    'intuitive',
    'just in time',
    'leading-edge',
    'leveraged',
    'long-term high-impact',
    'low-risk high-yield',
    'magnetic',
    'maintainable',
    'market positioning',
    'market-driven',
    'mission-critical',
    'multidisciplinary',
    'multifunctional',
    'multimedia based',
    'next-generation',
    'on-demand',
    'one-to-one',
    'open-source',
    'optimal',
    'orthogonal',
    'out-of-the-box',
    'pandemic',
    'parallel',
    'performance based',
    'plug-and-play',
    'premier',
    'premium',
    'principle-centered',
    'proactive',
    'process-centric',
    'professional',
    'progressive',
    'prospective',
    'quality',
    'real-time',
    'reliable',
    'resource-sucking',
    'resource-maximizing',
    'resource-leveling',
    'revolutionary',
    'robust',
    'scalable',
    'seamless',
    'stand-alone',
    'standardized',
    'standards compliant',
    'state of the art',
    'sticky',
    'strategic',
    'superior',
    'sustainable',
    'synergistic',
    'tactical',
    'team building',
    'team driven',
    'technically sound',
    'timely',
    'top-line',
    'transparent',
    'turnkey',
    'ubiquitous',
    'unique',
    'user-centric',
    'user friendly',
    'value-added',
    'vertical',
    'viral',
    'virtual',
    'visionary',
    'web-enabled',
    'wireless',
    'world-class',
    'worldwide'
  ]
  let noun = ['action items',
    'alignments',
    'applications',
    'architectures',
    'bandwidth',
    'benefits',
    'best practices',
    'catalysts for change',
    'channels',
    'clouds',
    'collaboration and idea-sharing',
    'communities',
    'content',
    'convergence',
    'core competencies',
    'customer service',
    'data',
    'deliverables',
    'e-business',
    'e-commerce',
    'e-markets',
    'e-tailers',
    'e-services',
    'experiences',
    'expertise',
    'functionalities',
    'fungibility',
    'growth strategies',
    'human capital',
    'ideas',
    'imperatives',
    'infomediaries',
    'information',
    'infrastructures',
    'initiatives',
    'innovation',
    'intellectual capital',
    'interfaces',
    'internal or "organic" sources',
    'leadership',
    'leadership skills',
    'manufactured products',
    'markets',
    'materials',
    'meta-services',
    'methodologies',
    'methods of empowerment',
    'metrics',
    'mindshare',
    'models',
    'networks',
    'niches',
    'niche markets',
    'nosql',
    'opportunities',
    '"outside the box" thinking',
    'outsourcing',
    'paradigms',
    'partnerships',
    'platforms',
    'portals',
    'potentialities',
    'rocess improvements',
    'processes',
    'products',
    'quality vectors',
    'relationships',
    'resources',
    'results',
    'ROI',
    'scenarios',
    'schemas',
    'scrums',
    'services',
    'solutions',
    'sources',
    'sprints',
    'strategic theme areas',
    'storage',
    'supply chains',
    'synergy',
    'systems',
    'technologies',
    'technology',
    'testing procedures',
    'total linkage',
    'users',
    'value',
    'vortals',
    'web-readiness',
    'web services',
    'wins',
    'virtualization'
  ]

  return `${randomElement(adverb)} ${randomElement(verb)} ${randomElement(adjective)} ${randomElement(noun)}.`
}

// -------------------
// Start of DOM Content Loaded
// -------------------

document.addEventListener('DOMContentLoaded', () => {

  // Background JS (The CircuitBoard)
  let elems = document.querySelectorAll('.parallax');
  let instances = M.Parallax.init(elems);

  // Use for Modals
  let elem = document.querySelectorAll('.modal');
  let instance = M.Modal.init(elem);

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
  let action = ['protecting', 'destroying', 'stealing', 'copying', 'following', 'eating']

  // Variables to save some important info for quizzing later
  let handler = `${randomElement(firstName)} "The ${randomElement(animal)}" ${randomElement(lastName)}`
  let homeTown = randomElement(location)
  let lastJobYears = random1(10) + 1
  let childhoodPets = randomElement(pets)
  let bestFriend = `${randomElement(firstName)} ${randomElement(lastName)}`
  let itemAssignment = randomElement(equipment)

  // API that is grabbing a random picture
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);

      let tempPic = document.getElementById('profilePicture')
      tempPic.src = data.results[0].picture.large
    }
  });

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

  - ${corpBSquote()}
  - ${corpBSquote()}
  - ${corpBSquote()}

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
  document.getElementById("mission").innerText = missionDetails()

  // Silly name for Handler inserted into doc
  document.getElementById("handlerCodename").innerText = handler

  // Functions to randomly get an image for the district and handler in the mission details
  districtPic()
  handlerPic()

  // Items going to local storage for the user to be quizzed on later
  localStorage.setItem("userZodiac", `${currentZodiac}`)
  localStorage.setItem("userColor", `${currentColor}`)
  localStorage.setItem("userFavAnimal", `${currentFavAnimal}`)
  localStorage.setItem("userLastJob", `${currentLastJob}`)
  localStorage.setItem("userDanger", `${currentDanger}`)
  localStorage.setItem("userHandler", `${handler}`)
  localStorage.setItem("userHomeTown", `${homeTown}`)
  localStorage.setItem("userLastJobYears", `${lastJobYears}`)
  localStorage.setItem("userChildhoodPets", `${childhoodPets}`)
  localStorage.setItem("userBestFriend", `${bestFriend}`)
  localStorage.setItem("userAssignedItem", `${itemAssignment}`)

  // Tests to make sure local storage matches
  // console.log(localStorage.getItem("userZodiac"))
  // console.log(localStorage.getItem("userColor"))
  // console.log(localStorage.getItem("userFavAnimal"))
  // console.log(localStorage.getItem("userLastJob"))
  // console.log(localStorage.getItem("userDanger"))
  // console.log(localStorage.getItem("userHandler"))
  // console.log(localStorage.getItem("userHomeTown"))
  // console.log(localStorage.getItem("userLastJobYears"))
  // console.log(localStorage.getItem("userChildhoodPets"))
  // console.log(localStorage.getItem("userBestFriend"))
  // console.log(localStorage.getItem("userAssignedItem"))

  // ----------------
  // THE FUNCTIONS
  // ----------------

  // Function to randomly create back story
  function backStoryCreator(homeTown, childhoodPets) {
    let selection = random1(5)
    let result

    switch (selection) {
      case 1:
        result = `You grew up in ${homeTown}, with your two pet ${childhoodPets}, ${randomElement(petName)} and ${randomElement(petName)}. Everything was going well for you until tragedy struck. A group of ${randomElement(wrongDoers)} from ${randomElement(location)} invaded. They were ruthless, killing ${randomElement(victims)} and ${randomElement(victims)} alike. Once the flames settled, you fled, moving to ${randomElement(location)}. Here, you have made a new name for yourself, and are looking to get back at those who wronged you.  You believe working at ${randomElement(company)} will further this goal.`
        break;
      case 2:
        result = `You were born in ${homeTown}, but moved to ${randomElement(location)} when you were very young. In your early days, you ran with a group of ${randomElement(wrongDoers)}, but after putting some ${randomElement(victims)} in the hospital, you turned away from your old life.  You took a small job handling a ${randomElement(animal)}, during which you realized you loved animals.  Shortly after, you adopted your two pet ${randomElement(pets)}, whom you named ${randomElement(petName)} and ${randomElement(petName)}. Unfortunately, you had to euthanize them. You now believe you can use your unique skill set to further ${randomElement(company)}'s goals`
        break;
      case 3:
        result = `You have lived all your life in ${homeTown} with your 5 pet ${childhoodPets}. At an early age, joined a security force with your best friend, ${bestFriend}, to help ${randomElement(victims)}. You have several run-ins with all types of criminals, including ${randomElement(wrongDoers)}, ${randomElement(wrongDoers)} and ${randomElement(wrongDoers)}. After the death of a fellow officer, you moved to ${randomElement(location)} for awhile. You now see an opprotunity to do good again at ${randomElement(company)}, where you believe your unique skills will be used best.`
        break;
      case 4:
        result = `Born in ${homeTown}, you have moved dozens of times, living in all manner of places, from ${randomElement(location)} to ${randomElement(location)}, to even the nightmarish ${randomElement(location)}. The only thing keeping you company during this time was your 2 pet ${childhoodPets}, ${randomElement(petName)} and ${randomElement(petName)}. Unfortunately, tragedy struck.  While travelling with a group of ${randomElement(victims)}, some ${randomElement(wrongDoers)} murdered your best friend, ${bestFriend}. You now believe that by working with ${randomElement(company)}, you can get revenge.`
        break;
      case 5:
        result = `Originally from ${homeTown}, you have lived most of your life in ${randomElement(location)}. There, you briefly ran with a group of ${randomElement(wrongDoers)}, but quickly turned your back on that life. Robbing ${randomElement(victims)} didn't sit well with you. You took your 2 very old childhood pet ${childhoodPets} and moved to ${randomElement(location)}.  Here, you have seen the hiring ads from ${randomElement(company)}, and after talking to your best friend, ${bestFriend}, you believe this company would be a good fit for you.`
        break;
    }

    return result
  }

  // Function to create mission
  function missionDetails() {
    return `Agent, you have been given the very special task of ${randomElement(action)} a ${itemAssignment}. This belongs to our rival corp, ${randomElement(company)}, who have tight security. It is even rumored they use local criminals, including ${randomElement(wrongDoers)}. Good luck, and do not fail us.`
  }

  // Function to get a random district picture
  function districtPic() {
    document.getElementById('districtpic').setAttribute('src', `district/district${random1(11)}.jpg`)
  }

  // Function to get a random handler picture
  function handlerPic() {
    document.getElementById('handlerpic').setAttribute('src', `handler/handler${random1(14)}.jpg`)
  }

});
