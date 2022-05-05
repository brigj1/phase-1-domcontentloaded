document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");

    const pEl = document.querySelector('#text');
    console.log(pEl.textContent);
    const newStg = "This is really cool!";
    pEl.textContent = newStg;
});


console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

