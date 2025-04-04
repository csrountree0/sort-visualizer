import {displayarr,done, shuffle} from "./display.js";

var stop = false;


export function isSorted(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== i+1){
            return false;
        }
    }
    return true;
}

 async function displayDone(arr) {
    for(let i=0; i<arr.length; i++){
        done(arr,i+1);
        await new Promise(requestAnimationFrame)
    }
}

export async function bogoSort(arr){
    let limit = 0;
    while(!isSorted(arr) && limit < 300){
        shuffle(arr);
       // limit++;
        await new Promise(requestAnimationFrame)
    }
    displayDone(arr)
}

export async function bubbleSort(arr){
//console.log("hello");
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-i-1; j++){
            displayarr(j,j+1);
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
            await new Promise(requestAnimationFrame)
        }
    }
    displayarr(-1,-1);
    displayDone(arr);

}

export async function selectionSort(arr){
    console.log("hello");
    for(let i = 0; i<arr.length; i++){
        let min = i;
        for(let j=i; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min = j
            }
            displayarr(j,min)
            await new Promise(requestAnimationFrame)
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
        displayarr(i,min)
        await new Promise(requestAnimationFrame)

    }
    displayarr(-1,-1)
    await new Promise(requestAnimationFrame)
    displayDone(arr)




}

export async function insertionSort(arr){
    for(let i = 0; i < arr.length-1; i++){
        for(let j=i+1; j>=1; j--){
            if(arr[j] < arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            }
            displayarr(j,j-1)
            await new Promise(requestAnimationFrame)
        }
    }
    displayarr(-1,-1)
    await new Promise(requestAnimationFrame)
    displayDone(arr)



}

export async function mergeSort(arr){

}


export function stopSort(){
    stop=true;
}