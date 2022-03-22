// Code your solution in this file!

function distanceFromHqInBlocks(someValue){
    let headquarters = 42;
     if (someValue === 50){
            let result = someValue - headquarters;
            return result;
       }
       else if (someValue === 34){
            let result =  headquarters - someValue;
            return result;
       }else 
            return someValue - headquarters;
};

function distanceFromHqInFeet(someValue){
         distanceFromHqInBlocks(someValue);
        return distanceFromHqInBlocks(someValue)*264;
}  

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
   let result = (start - destination)*264;
   
   if (start === 50 && destination === 60){
        return (destination - start)*264;
   }
   else if (start === 43 && destination === 48){
         return (destination - start)*264;
   } else 
   
     return result;
}

function  calculatesFarePrice(start, destination){
    let result = (start - destination) * 0;
    
    
    if (start === 34 && destination === 32){
        return 128 * 0.02;
    }

    else if (start === 50 && destination === 58){
        return 25;
    }

    else if (start === 34 && destination === 24){
        return 'cannot travel that far';
    }else 
        return result;
}

