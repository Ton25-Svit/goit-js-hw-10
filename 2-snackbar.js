import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as o}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector(".form");s.addEventListener("submit",function(i){i.preventDefault();const t=parseInt(s.delay.value,10),r=s.state.value;new Promise((e,m)=>{setTimeout(()=>{r==="fulfilled"?e(t):m(t)},t)}).then(e=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"}),console.log(`✅ Fulfilled promise in ${e}ms`)}).catch(e=>{o.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topRight"}),console.log(`❌ Rejected promise in ${e}ms`)}),s.reset()});
//# sourceMappingURL=2-snackbar.js.map
