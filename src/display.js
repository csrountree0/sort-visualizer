var size = 0
var arr = []
import {bogoSort} from './sorting.js';
export function newarr(s) {
    arr=[]
    for (let i = 0; i < s; i++) {
        arr[i] = i+1
    }
    displayarr();
}

export function  displayarr() {
   //document.getElementById('s-bar').innerHTML = "";
    //console.log(arr)
    size = arr.length;

    if(size > 250){
        return;
    }

    document.getElementById("s-bar").innerHTML = "";

    let div = document.createElement("div");
    div.className = "square";
    for (let i = 1; i <= size; i++) {
        div.style.width = `${100/size}%`;
        div.style.height = `${(arr[i-1]/size)*100}%`;
        //div.style.marginTop = `${100-h}%`;
        document.getElementById("s-bar").innerHTML +=div.outerHTML;
    }
}


export function shuffle() {
    for (let i = 0; i < arr.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    displayarr(arr)
}


export function sort(val,press) {

    if(val===1){
        bogoSort(arr,press)

    }


}

