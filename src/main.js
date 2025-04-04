import './style.css'
import {newarr, shuffle,sort} from "./display.js";
import {bogoSort, stopSort} from "./sorting.js";

document.querySelector('#app').innerHTML = `
  
 <header id="main-header">
<h1>
 Sort Visualizer
</h1> 
</header> 
  
<main id="main-content">
<div id="main-ui">
    <h1 style="color: white">Enter # of bars(1-250)</h1>
    <input id="row-input" type="text">

<div>
<select id="sorts">
<option value="1">Bogo Sort</option>
<option value="2">Bubble Sort</option>
<option value="3">Selection Sort</option>
<option value="4">Insertion Sort</option>

</select>

    <button id="shuffle-btn" type="button">Shuffle</button>
    <button id="sort-btn" type="button">Sort</button>
    
</div>

</div>

<div id="s-bar">
</div>

</main>

`

document.getElementById("row-input").addEventListener('input', (e) => newarr(e.target.value));
document.getElementById("shuffle-btn").addEventListener('click', (e) => shuffle());


document.getElementById("sort-btn").addEventListener('click', (e) => sort(document.getElementById("sorts").value));
