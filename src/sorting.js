import {newarr,displayarr, done, shuffle} from "./display.js";

var stop = false;

// reset stop to false
export function reset(){

    document.getElementById("shuffle-btn").disabled = false;
    document.getElementById("sort-btn").disabled = false;
    document.getElementById("row-input").disabled = false;

    stop = true;
    newarr(document.getElementById("row-input").value);

}

// stop sorting
export function setStop(tf){
    stop = tf;
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
    for(let i = 0; i<arr.length && !stop; i++){
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
        for(let j=i+1; j>=1 && !stop; j--){
            if(arr[j] < arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            }
            else{
                break;
            }
            displayarr(j,j-1)
            await new Promise(requestAnimationFrame)
        }
    }
    displayarr(-1,-1)
    await new Promise(requestAnimationFrame)
    displayDone(arr)



}

async function merge(arr, start, mid, end) {
    let left = arr.slice(start, mid);
    let right = arr.slice(mid, end);
    let leftIndex = 0;
    let rightIndex = 0;
    let currentIndex = start;
    
    while (leftIndex < left.length && rightIndex < right.length && !stop) {
        displayarr(currentIndex, -1);
        if (left[leftIndex] < right[rightIndex]) {
            arr[currentIndex] = left[leftIndex];
            leftIndex++;
        } else {
            arr[currentIndex] = right[rightIndex];
            rightIndex++;
        }
        currentIndex++;
        await new Promise(requestAnimationFrame);
    }
    
    while (leftIndex < left.length && !stop) {
        displayarr(currentIndex, -1);
        arr[currentIndex] = left[leftIndex];
        leftIndex++;
        currentIndex++;
        await new Promise(requestAnimationFrame);
    }
    
    while (rightIndex < right.length && !stop) {
        displayarr(currentIndex, -1);
        arr[currentIndex] = right[rightIndex];
        rightIndex++;
        currentIndex++;
        await new Promise(requestAnimationFrame);
    }
}

export async function mergeSort(arr, start = 0, end = arr.length) {
    if (end - start <= 1) return;
    
    let mid = Math.floor((start + end) / 2);
    
    if (!stop) {
        await mergeSort(arr, start, mid);
        await mergeSort(arr, mid, end);
        await merge(arr, start, mid, end);
    }
    
    if (start === 0 && end === arr.length && !stop) {
        displayarr(-1, -1);
        displayDone(arr);
    }
}

async function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high && !stop; j++) {
        displayarr(j, high);
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            displayarr(i, j);
            await new Promise(requestAnimationFrame);
        }
        await new Promise(requestAnimationFrame);
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];


    if(!stop) {


        displayarr(i + 1, high);
        await new Promise(requestAnimationFrame);
    }
    return i + 1;
}

export async function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high && !stop) {
        let pi = await partition(arr, low, high);

        await quickSort(arr, low, pi - 1);
        await quickSort(arr, pi + 1, high);
    }

    if (low === 0 && high === arr.length - 1 && !stop) {
        displayarr(-1, -1);
        displayDone(arr);
    }
}

