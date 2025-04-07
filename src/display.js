var size = 0
var arr = []
import {bogoSort, bubbleSort, insertionSort, selectionSort, mergeSort, quickSort, setStop} from './sorting.js';

var shuffled = false


export function newarr(s) {
    shuffled = false
    arr=[]
    for (let i = 0; i < s; i++) {
        arr[i] = i+1
    }
    createarr(-1,-1);
}

export function  createarr(curr,comp) {
    size = arr.length;

    if(size > 250){
        return;
    }

    document.getElementById("s-bar").innerHTML = "";

    let div = document.createElement("div");
    div.className = "square";
    for (let i = 0; i < size; i++) {
        if(i === curr){
            div.style.backgroundColor = `green`
        }
        else if(i===comp){
            div.style.backgroundColor = `red`
        }
        else{
            div.style.backgroundColor = 'white'
        }
        div.style.width = `${100/size}%`;
        div.style.height = `${(arr[i]/size)*100}%`;
        //div.style.marginTop = `${100-h}%`;
        document.getElementById("s-bar").innerHTML +=div.outerHTML;
    }

}

export function displayarr(curr, comp){
    let divs = document.getElementsByClassName("square");

    for(let i=0; i<arr.length; i++){
        if(i === curr){
            divs[i].style.backgroundColor = `green`
        }
        else if(i===comp){
            divs[i].style.backgroundColor = `red`
        }
        else{
            divs[i].style.backgroundColor = 'white'
        }
        divs[i].style.height = `${(arr[i]/size)*100}%`;
    }
}

export function shuffle() {
    shuffled= true;
    for (let i = 0; i < arr.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    displayarr(arr)
}


export function sort(val) {
    if(shuffled) {
    setStop(false)
    document.getElementById("shuffle-btn").disabled = true;
    document.getElementById("sort-btn").disabled = true;
    document.getElementById("row-input").disabled = true;

    if (val === "1") {
        bogoSort(arr)
    } else if (val === "2") {
        bubbleSort(arr)
    } else if (val === "3") {
        selectionSort(arr)
    } else if (val === "4") {
        insertionSort(arr)
    } else if (val === "5") {
        mergeSort(arr)
    } else if (val === "6") {
        quickSort(arr)
    }
}
    else{
        console.log("already sorted")
    }
}


export function done(arr, j) {
    const divs = document.getElementsByClassName("square");
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= j) {
            divs[i].style.backgroundColor = 'green';
        } else {
            divs[i].style.backgroundColor = 'white';
        }
        divs[i].style.height = `${(arr[i]/size)*100}%`;
    }
}

