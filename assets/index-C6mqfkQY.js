(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();var u=!1;function w(){document.getElementById("shuffle-btn").disabled=!1,document.getElementById("sort-btn").disabled=!1,document.getElementById("row-input").disabled=!1,u=!0,b(document.getElementById("row-input").value)}function v(e){u=e}function E(e){for(let t=0;t<e.length;t++)if(e[t]!==t+1)return!1;return!0}async function m(e){for(let t=0;t<e.length&&!u;t++)k(e,t+1),await new Promise(requestAnimationFrame)}async function q(e){let t=0;for(;!E(e)&&t<300&&!u;)p(),await new Promise(requestAnimationFrame);m(e)}async function S(e){for(let t=0;t<e.length;t++)for(let n=0;n<e.length-t-1&&!u;n++)r(n,n+1),e[n]>e[n+1]&&([e[n],e[n+1]]=[e[n+1],e[n]]),await new Promise(requestAnimationFrame);r(-1,-1),m(e)}async function B(e){for(let t=0;t<e.length&&!u;t++){let n=t;for(let i=t;i<e.length&&!u;i++)e[i]<e[n]&&(n=i),r(i,n),await new Promise(requestAnimationFrame);[e[t],e[n]]=[e[n],e[t]],r(t,n),await new Promise(requestAnimationFrame)}r(-1,-1),await new Promise(requestAnimationFrame),m(e)}async function I(e){for(let t=0;t<e.length-1&&!u;t++)for(let n=t+1;n>=1&&!u&&e[n]<e[n-1];n--){[e[n],e[n-1]]=[e[n-1],e[n]];r(n,n-1),await new Promise(requestAnimationFrame)}r(-1,-1),await new Promise(requestAnimationFrame),m(e)}async function P(e,t,n,i){let o=e.slice(t,n),s=e.slice(n,i),a=0,c=0,d=t;for(;a<o.length&&c<s.length&&!u;)r(d,-1),o[a]<s[c]?(e[d]=o[a],a++):(e[d]=s[c],c++),d++,await new Promise(requestAnimationFrame);for(;a<o.length&&!u;)r(d,-1),e[d]=o[a],a++,d++,await new Promise(requestAnimationFrame);for(;c<s.length&&!u;)r(d,-1),e[d]=s[c],c++,d++,await new Promise(requestAnimationFrame)}async function g(e,t=0,n=e.length){if(n-t<=1)return;let i=Math.floor((t+n)/2);u||(await g(e,t,i),await g(e,i,n),await P(e,t,i,n)),t===0&&n===e.length&&!u&&(r(-1,-1),m(e))}async function A(e,t,n){let i=e[n],o=t-1;for(let s=t;s<n&&!u;s++)r(s,n),e[s]<i&&(o++,[e[o],e[s]]=[e[s],e[o]],r(o,s),await new Promise(requestAnimationFrame)),await new Promise(requestAnimationFrame);return[e[o+1],e[n]]=[e[n],e[o+1]],u||(r(o+1,n),await new Promise(requestAnimationFrame)),o+1}async function y(e,t=0,n=e.length-1){if(t<n&&!u){let i=await A(e,t,n);await y(e,t,i-1),await y(e,i+1,n)}t===0&&n===e.length-1&&!u&&(r(-1,-1),m(e))}var f=0,l=[],h=!1;function b(e){h=!1,l=[];for(let t=0;t<e;t++)l[t]=t+1;F(-1,-1)}function F(e,t){if(f=l.length,f>250)return;document.getElementById("s-bar").innerHTML="";let n=document.createElement("div");n.className="square";for(let i=0;i<f;i++)i===e?n.style.backgroundColor="green":i===t?n.style.backgroundColor="red":n.style.backgroundColor="white",n.style.width=`${100/f}%`,n.style.height=`${l[i]/f*100}%`,document.getElementById("s-bar").innerHTML+=n.outerHTML}function r(e,t){let n=document.getElementsByClassName("square");for(let i=0;i<l.length;i++)i===e?n[i].style.backgroundColor="green":i===t?n[i].style.backgroundColor="red":n[i].style.backgroundColor="white",n[i].style.height=`${l[i]/f*100}%`}function p(){h=!0;const e=document.getElementsByClassName("square");for(let t=0;t<l.length;t++)e[t].style.transition="height 0.2s ease-out";for(let t=0;t<l.length;t++){const n=Math.floor(Math.random()*(t+1));[l[t],l[n]]=[l[n],l[t]]}r(-1,-1),setTimeout(()=>{for(let t=0;t<l.length;t++)e[t].style.transition="none"},200)}function L(e){h?(v(!1),document.getElementById("shuffle-btn").disabled=!0,document.getElementById("sort-btn").disabled=!0,document.getElementById("row-input").disabled=!0,e==="1"?q(l):e==="2"?S(l):e==="3"?B(l):e==="4"?I(l):e==="5"?g(l):e==="6"&&y(l)):console.log("already sorted")}function k(e,t){const n=document.getElementsByClassName("square");for(let i=0;i<e.length;i++)e[i]<=t?n[i].style.backgroundColor="green":n[i].style.backgroundColor="white",n[i].style.height=`${e[i]/f*100}%`}document.querySelector("#app").innerHTML=`
  
 <header id="main-header">
 <div class="side">
 
 <a id="gh-link" href="https://github.com/csrountree0" target="_blank"><img id="gh-img" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="github"></a>
 
</div>

<h1>Sort Visualizer</h1> 
<div class="side"></div>
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

`;document.getElementById("row-input").addEventListener("input",e=>b(e.target.value));document.getElementById("shuffle-btn").addEventListener("click",e=>p());document.getElementById("sort-btn").addEventListener("click",e=>L(document.getElementById("sorts").value));document.getElementById("reset-btn").addEventListener("click",e=>w());
