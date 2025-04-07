var size = 0
var arr = []
import {bogoSort, bubbleSort, insertionSort, selectionSort} from './sorting.js';
export function newarr(s) {
    arr=[]
    for (let i = 0; i < s; i++) {
        arr[i] = i+1
    }
    createarr(-1,-1);
}

export function update(ar,cu,co){
    arr = ar
    displayarr(cu,co)
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
    for (let i = 0; i < arr.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    displayarr(arr)
}


export function sort(val) {

    if(val==="1"){
        bogoSort(arr)
    }
    else if(val==="2"){
        bubbleSort(arr)
    }
    else if(val==="3"){
        selectionSort(arr)
    }
    else if (val ==="4"){
        insertionSort(arr)
    }
}


export function done(arr,j){
    document.getElementById("s-bar").innerHTML = "";
    let div = document.createElement("div");
    for(let i = 0; i < arr.length; i++){
        div.className = "square";
        if(arr[i] <= j){
            div.style.backgroundColor = `green`
        }
        else{
            div.style.backgroundColor = `white`
        }
        div.style.width = `${100/size}%`;
        div.style.height = `${(arr[i]/size)*100}%`;
        document.getElementById("s-bar").innerHTML +=div.outerHTML;
    }
}

