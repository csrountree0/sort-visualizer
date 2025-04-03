import './style.css'
import {displayarr} from "./display.js";

document.querySelector('#app').innerHTML = `
  
 <header id="main-header">
<h1>
 Hello
</h1> 
</header> 
  
<main id="main-content">
<div id="main-ui">
    <h1 style="color: white">Enter # of rows(1-250)</h1>
    <input id="row-input" type="text">

<div>
    <button id="sort-button" type="button">Sort</button>
</div>

</div>

<div id="s-bar">
</div>

</main>

`

document.getElementById("row-input").addEventListener('input', (e) => displayarr(e.target.value));

