// Get elements from the DOM
const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");
// Variable that tracks if the counters have been activated or not
let activated = false;

// Add scroll event to the page
window.addEventListener("scroll", ()=>{
    // If the page is scrolled to containers element and the counters are not activated
    if(pageYOffset>container.offsetTop-container.offsetHeight-200 && activated ===false){
        // Select all counters
        counters.forEach(counter=>{
            // Set counter values to zero
            counter.innerText=0;
            // Set count variable to track the count
            let count=0;

            // Update count function
            function updateCount(){
                // Get counter target number to count to
                const target = parseInt(counter.dataset.count);
                // As long as the count is below the target number
                if(count < target){
                    // Increment the count
                    count++;
                    // Set the counter text to the count
                    counter.innerText=count;
                    // Repeat this every 10 milliseconds
                    setTimeout(updateCount,10); // This is our count speed
                }
                else{
                    // And when the target is reached
                    // Set the counter text to the target number
                    counter.innerText=target;
                }
            }
            // Run the function initially
            updateCount();
            // Set activated to true
            activated=true;
        });
    }
    else if(pageYOffset<container.offsetTop-container.offsetHeight-500 || pageYOffset===0 && activated===true){
        // If the page is scrolled back a certain amount or to the top and activated is true

        // Select all counters
        counters.forEach(counter=>{
            // Set counter text back to zero
            counter.innerText=0;
        });
        // Set activated to false
        activated=false;
    }
});

// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};