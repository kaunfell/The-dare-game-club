#The dare game club

**Status: Unfinished!**    

This is my personal project that got inspired by text games and one of Codecademys lesson.  

Here is the Codecademy's Monster Factory Lesson:    

const monsterFactory = (name, age, energySource, catchPhrase) => {  
  return {   
    name: name,  
    age: age,   
    energySource: energySource,  
    scare() {  
      console.log(catchPhrase);  
    }   
  }  
};  



const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');  
ghost.scare(); // 'BOO!'   


Issues:  
-  some functions return undefined (could be multiple eventlistener problems, arrays not working properly)  

Unfinished things:  
- restart button and functions under it  
- game world logic (what abilities characters have, how their strengths and weaknessess show, should some objects be built by the character)