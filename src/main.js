import './style.css'
import {newarr, shuffle,sort} from "./display.js";
import {reset} from "./sorting.js";

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
<select id="sorts">
<option value="1">Bogo Sort</option>
<option value="2">Bubble Sort</option>
<option value="3">Selection Sort</option>
<option value="4">Insertion Sort</option>
<option value="5">Merge Sort</option>
<option value="6">Quick Sort</option>
</select>

<div id="buttons">
    <button id="shuffle-btn" type="button">Shuffle</button>
    <button id="sort-btn" type="button">Sort</button>
    <button id="reset-btn" type="button">Reset</button>
</div>

</div>

<div id="s-bar">
</div>

</main>

`

document.getElementById("row-input").addEventListener('input', (e) => newarr(e.target.value));
document.getElementById("shuffle-btn").addEventListener('click', (e) => shuffle());


document.getElementById("sort-btn").addEventListener('click', (e) => sort(document.getElementById("sorts").value));
document.getElementById("reset-btn").addEventListener('click', (e) => reset());
