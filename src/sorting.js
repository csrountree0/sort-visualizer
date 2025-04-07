import {newarr,displayarr, done, shuffle} from "./display.js";

var stop = false;

// reset stop to false
export function reset(){
    console.log("Hello")
    stop = true;
    newarr(document.getElementById("row-input").value);

}

// stop sorting
export function stopSort(){
    stop = true;
}

export function isSorted(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== i+1){
            return false;
        }
    }
    return true;
}

 async function displayDone(arr) {
    for(let i=0; i<arr.length && !stop; i++){
        done(arr,i+1);
        await new Promise(requestAnimationFrame)
    }
}



export async function bogoSort(arr){
    let limit = 0;
    while(!isSorted(arr) && limit < 300 && !stop){
        shuffle(arr);
       // limit++;
        await new Promise(requestAnimationFrame)
    }
    displayDone(arr)
}

export async function bubbleSort(arr){
//console.log("hello");
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-i-1 && !stop; j++){
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
    for(let i = 0; i<arr.length; i++){
        let min = i;
        for(let j=i; j<arr.length && !stop;  j++){
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
    for(let i = 0; i < arr.length-1 && !stop; i++){
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

function merge(left, right) {
    let sortedArr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }

    return [...sortedArr, ...left, ...right]
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

