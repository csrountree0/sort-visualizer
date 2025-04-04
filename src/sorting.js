import {displayarr, shuffle} from "./display.js";

var stop = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function isSorted(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== i+1){
            return false;
        }
    }
    return true;
}

export async function bogoSort(arr,stop){
    let limit = 0;
    while(!isSorted(arr) && limit < 300){
        shuffle(arr);
       // limit++;
        await new Promise(requestAnimationFrame)



    }
}



export function stopSort(){
    stop=true;
}