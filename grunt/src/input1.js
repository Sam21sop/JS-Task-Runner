document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelector(".button");
    buttons.forEach(button => {
        button.addEventListener("click", function(){
            alert("Button Clicked!");
        });
    });

    console.log("Sample JS loaded and ready!");
});

function sampleFunction() {
    console.log("This is sample function!");
};

let sampleVar = "This is sample variable."