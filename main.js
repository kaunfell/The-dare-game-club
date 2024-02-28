//Monsters have a flasmob/dare game club. They have a list of activities and places in the city.
//They have different abilities and different things are required for each activity.

import { ghostObject, vampireObject, mummyObject, werewolfObject, dragonObject, zombieObject } from './monster.js';
window.onload = function() {
    beginningStory();
    startGame();
    restartGame();
    getMonster();
    greatPlan();
    getLocation();
    getObjects();
    printChosenObjects();
};

const monsters = [ghostObject, vampireObject, mummyObject, werewolfObject, dragonObject, zombieObject];



//activities and their requirements
const activities = {
    'hold a party': 
            {  "object requirements":  ['music instrument', 'food', 'lightsource'],  
               "ability requirements": ['dancing', 'firemaking'],
               bonus: ['scare']
            },   
     'dance flashmob':
            { "object requirements": ['music instrument', 'flowers', 'lightsource' ],
              "ability requirements": ['dancing'],
              bonus: ['invisibility', 'fly']
            }, 
     'play hide and seek':
            { "object requirements": ['', '',  ],
              "ability requirements": ['run', ],
              bonus: ['invisibility', 'fly']
            }, 
     'play tag': 
            { "object requirements": ['', '', 'lightsource' ],
              "ability requirements": ['counting', 'run'],
              bonus: ['invisibility']
            }, 
     'play kick the can':
            { "object requirements": ['can',  'lightsource' ],
              "ability requirements": ['run'],
                bonus: ['firemaking']
            },
};


//just a list: needs the ability, one resource and one way to light it up
const lightsource = {
    "requires ability": ['firemaking'],
    types:{  
         bonfire : {
                "requires resource": ['wood', 'books', 'goverment documents'],
            },
        candle: {
                "requires resource": ['wax', 'flowers'],
            },
        },
    
        
    "requires how": ['lighter', 'torch', ],
    "instant success": ['firebreath'],   
};


//City and places
const city = {
    name: 'Hillsville',
    dangerTypes: ['fire', 'garlic', 'cats', 'silver', 'water' ],  //monster weaknesses
    places: {
        'inn': {
            objects: ['food', 'music instrument', 'wax'],
            energy: ['test'],
            danger: ['fire'],
        }, 
        'church': {
            objects: ['wood', 'flowers', 'wax'],
            energy: ['test'],
            danger: ['silver']
        
        },
         'town hall': {
            objects: ['government documents', 'books'],
            energy: ['test'],
            danger: ['cats']
        },
         'market place': {
            objects: ['food', 'music instrument', 'can'],
            energy: ['bandages'],
            danger: ['garlic']
         }, 
         'cemetery': {
            objects: ['flowers', 'wood', 'food'],
            energy: ['moonlight', 'blood', 'ectoplasm'],
            danger: ['cats']
         },
        'central garden': {
            objects: ['flowers', 'wood', 'food'],
            energy: ['moonlight'],
            danger: ['water']
        },
        'library': {
            objects: ['books', 'wood', 'wax'],
            energy: ['test'], 
            danger: ['cats'],
        },
    },
    
};

//Beginnin story
function beginningStory() {
    return(
        'Welcome to Hillsville!' + '<br>' +
        'The city is full of activities and places to explore.' + '<br>' +
        'The monsters are getting ready for a big event and they need your help!' + '<br>' +
        'Choose a monster to help and let the adventure begin!' + '<br>'

    );

}




//the button works only with this window.onload
    let textContainer = document.querySelector('.textContainer');
    let button = document.querySelector('.startButton');
    let monsterButton = document.querySelector('.monsterButton');


    button.addEventListener('click', function startGame() {

        textContainer.innerHTML = beginningStory();


        monsterButton.style.display = 'block';

        button.textContent = "Restart";

        button.removeEventListener('click', startGame);

        // Define the restartGame function
        function restartGame() {

            button.textContent = "Start";
            textContainer.innerHTML = "";
            button.removeEventListener('click', restartGame);
            button.addEventListener('click', startGame);
            hasCalledGetMonster = false;
            monsterButton.style.display = 'none';
            chosenMonsters = [];
            hasCalledGetThePlan = false;
            hasCalledGetLocation = false;


        }

        // Add the new event listener
        button.addEventListener('click', restartGame);
    });









let chosenMonsters = [];
let chosenLocation = [];
const abilityArray = [];
let objectArray = []; //from location
let chosenObjects = [];
const testArr = ['lol', 'lol2', 'lol3'];

let hasCalledGetMonster = false;


function getMonster()  {
    if (hasCalledGetMonster) {
        return 'Choose a location.';  //if there is no array, it shows undefined if the button is clicked again
    }
    hasCalledGetMonster = true;
  

    textContainer.innerHTML += '<br><br>';
    let output = 'Choose 2 monsters:  <br>';
    for (let i = 0; i < monsters.length; i++) {
        output +=`<button class="chooseMonsterButton" data-index="${i}">${i + 1}. ${monsters[i].name}</button><br>`;  //add sentences : ${monsters[i].scare}
    }
    textContainer.innerHTML += output;
    textContainer.scrollTop = textContainer.scrollHeight;





    let chooseMonsterButton = document.querySelectorAll('.chooseMonsterButton');
    for(let i =0; i < chooseMonsterButton.length; i++) {
         let index = i;  
        chooseMonsterButton[i].addEventListener('click', function() {
        


            //push chosen to the empty array
            chosenMonsters.push(`${monsters[index].name}`);

            function showChosenMonsters() { 

                textContainer.innerHTML += '<br><br>';
                textContainer.innerHTML += 'Chosen monsters';

                textContainer.scrollTop = textContainer.scrollHeight;

                chosenMonsters.forEach(function(monster) {
                    textContainer.innerHTML += `<br>${monster}`;
                    textContainer.scrollTop = textContainer.scrollHeight;
                });
            }
                //when 2 is picked, show the chosen monsters
                if(chosenMonsters.length === 2) {
                    showChosenMonsters(); 

                    //changes the getMonster button to get the plan
                    textContainer.innerHTML += '<br><br>';
                    monsterButton.textContent = "Get the plan";
                    monsterButton.addEventListener('click', function() {
                    textContainer.innerHTML += greatPlan();
                    textContainer.scrollTop = textContainer.scrollHeight;
            });

                };

        });

        
    }

}
    

monsterButton.addEventListener('click', getMonster);



/// Upper is about choosin the monsters, and below its about the plan




//get the PLAN 
//random activity and place
const randomActivity = Object.keys(activities)[Math.floor(Math.random() * Object.keys(activities).length)];
const randomPlace = Object.keys(city.places)[Math.floor(Math.random() * Object.keys(city.places).length)];

let hasCalledGetThePlan = false;

function greatPlan() { // for text adventure break lines '\n'
    if (hasCalledGetThePlan) {
        return ;
    }
    hasCalledGetThePlan = true;

    monsterButton.textContent = "Get location";
    monsterButton.addEventListener('click', getLocation);




    //able to disable the button monsterButton.disabled = true;
   return(
        'The great plan:' + '<br>' +
        '' + '<br>' +
        `Activity: ${randomActivity}` + '<br>' +
        `Place: ${randomPlace}` + '<br>' +
        `Object requirements:  ${activities[randomActivity]["object requirements"].join(', ')}` + ' ' + '<br>'
        
    );


}

//get LOCATION
let hasCalledGetLocation = false;

function getLocation() {
    if (hasCalledGetLocation) {
        return;
    }
    hasCalledGetLocation = true;
    textContainer.innerHTML += '<br><br>';
    let locationPut = 'Choose a location:  <br>';
    for (let l = 0; l < Object.keys(city.places).length; l++) {
        locationPut += `<button class="chooseLocationButton" data-index="${l}">${l + 1}. ${Object.keys(city.places)[l]}</button><br>`;

}
textContainer.innerHTML += locationPut;
textContainer.scrollTop = textContainer.scrollHeight;
chooseLocation();



//choose the LOCATION
function chooseLocation() {
let chooseLocationButton = document.querySelectorAll('.chooseLocationButton');


for(let k=0; k < chooseLocationButton.length; k++) {
    let index = k;
    chooseLocationButton[k].addEventListener('click', function() {
        chosenLocation.push(`${Object.keys(city.places)[index]}`);
        let objects = city.places[chosenLocation[chosenLocation.length - 1]].objects;
        if(objects !== undefined) {
            objectArray.push(...objects);
        }

        textContainer.innerHTML += `<br>Chosen location: <br>${chosenLocation}`;
        textContainer.scrollTop = textContainer.scrollHeight;
        monsterButton.textContent = "Get objects";
        monsterButton.addEventListener('click', getObjects);

        

    });
};
}



let hasCalledGetObjects = false;

//get OBJECTS                        //PROBLEM: prints the objects, but has undefined as well
function getObjects() {
    if (hasCalledGetObjects) {
        return;
    }
    hasCalledGetObjects = true;



    for (let i = 0; i < chosenLocation.length; i++) {
        let objects = objectArray;
        // Create a button for each object
        objects.forEach(object => {
            let button = document.createElement('button');
            button.textContent = object;
            button.addEventListener('click', function() {
                chosenObjects.push(object);


                //textContainer.innerHTML += '<br><br>';
                //textContainer.scrollTop = textContainer.scrollHeight;

                printChosenObjects();
            });
            // Append the button to textContainer or another container
            textContainer.appendChild(button);
        });

    }

}
}





//print chosenObjects
function printChosenObjects() {
    let chosenObjectsElement = document.createElement('p');
    textContainer.appendChild(chosenObjectsElement);

    //chosenObjects.forEach(object => {
        //chosenObjectsElement.innerHTML += `You picked: ${object}<br>`;
    //});

    if(chosenObjects.length ===2) {
        chosenObjectsElement.innerHTML += 'You picked: <br>';
    for(let i = 0; i < chosenObjects.length; i++) {
        chosenObjectsElement.innerHTML += `${chosenObjects[i]}<br>`;
        textContainer.scrollTop = textContainer.scrollHeight;
        
    }

    //this works
 let chooseAgainButton = document.createElement('button');
 chooseAgainButton.textContent = "Choose again";
 textContainer.scrollTop = textContainer.scrollHeight;
     chooseAgainButton.addEventListener('click', function() {
         chosenObjects = [];
         getObjects();


});



    let confirmButton = document.createElement('button');
    confirmButton.textContent = "Confirm";
    confirmButton.addEventListener('click', function() {
        textContainer.innerHTML += 'Objects picked, where do you want to go next?';
        textContainer.scrollTop = textContainer.scrollHeight;

        //hasCalledGetLocation = false;  
       
        monsterButton.textContent = "Get another location.";


        monsterButton.addEventListener('click', testLocation);

 

        
});





chosenObjectsElement.appendChild(confirmButton);
chosenObjectsElement.appendChild(chooseAgainButton);



    }


}

let testiARRAY = ['paikka1', 'paikka2'];
function testLocation() {

    textContainer.innerHTML += testiARRAY;
}






function secondLocation() {

    // Display the list of locations
    for (let i = 0; i < city.places.length; i++) {
        // Check if the location has been visited
        if (!chosenLocation.includes(city.places[i].name)) {
            let locationButton = document.createElement('button');
            locationButton.textContent = city.places[i].name;
            locationButton.addEventListener('click', function() {
                // Handle the user's selection
                chosenLocation.push(city.places[i].name);
                // ... rest of your code ...
            });
            textContainer.appendChild(locationButton);
        }
    }
}