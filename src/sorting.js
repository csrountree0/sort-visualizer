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
    // Choose the rightmost element as pivot
    let pivot = arr[high];
    let i = low - 1;  // Index of smaller element

    for (let j = low; j < high && !stop; j++) {
        // If current element is smaller than the pivot
        displayarr(j, high);  // Show current element and pivot
        if (arr[j] < pivot) {
            i++;
            // Swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
            displayarr(i, j);  // Show the swap
            await new Promise(requestAnimationFrame);
        }
        await new Promise(requestAnimationFrame);
    }

    // Swap arr[i+1] and arr[high] (pivot)
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    displayarr(i + 1, high);  // Show the final pivot placement
    await new Promise(requestAnimationFrame);

    return i + 1;  // Return the partition index
}

export async function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high && !stop) {
        // Get the partition index
        let pi = await partition(arr, low, high);

        // Recursively sort elements before and after partition
        await quickSort(arr, low, pi - 1);
        await quickSort(arr, pi + 1, high);
    }

    // If this is the outermost call and we're not stopped
    if (low === 0 && high === arr.length - 1 && !stop) {
        displayarr(-1, -1);
        displayDone(arr);
    }
}

