let dots = ""
window.setInterval( function() {
    if ( dots.length > 3 ) 
        dots = "";
    else 
        dots += "."; 
  
    document.querySelector('body').innerHTML = "This page is under maintenance, You will be redirect" + dots
}, 250);

window.setTimeout(() => {
   console.log('Redirected..')
}, 5000);

//import App from "./App.svelte";

// const app = new App({
//   target: document.body,
// });

// export default app;

