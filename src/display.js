
export function displayarr(s) {

    if(s > 250){
        return;
    }


console.log("hello")
   //document.getElementById('s-bar').innerHTML = "";

    let size = s;
    document.getElementById("s-bar").innerHTML = "";

    let div = document.createElement("div");
    div.className = "square";
    for (let i = 1; i <= size; i++) {
        let h = (i/size)*100
    div.style.width = `${100/size}%`;
    div.style.height = `${h}%`;
    //div.style.marginTop = `${100-h}%`;
    document.getElementById("s-bar").innerHTML +=div.outerHTML;
    }
}
