/* 
    1) Create a variable for each button present in the index.html file (3 variables total). Use quereySelectorAll to do so for all of them. 

    2) Add an event listener on button 1. The event listener should listen for a click from the user, once the user clicks the button then the text typed into the input field above the buttons should be added in h1 tags and added inside the div with the id "task1".
    To complete this task, use getElementsByTagName() to get the input, and use createElement() and append() to add it to the task1 div

    3) Add another event listener for button 2. The event listener should listen for a click, once the user clicks the button, then the contents of the unordered list present on the page should be appended to an ordered list, then the new ordered list should be appended to the task2 div. Use querySelector to get the task2 div, grab the li elements in the unordered list by using getElementsByTagName or querySelectorAll. Use a loop to generate the new ordered list, you can use innerHTML or createElement() and append() to do this.

    4) Add a final event listener to button 3 This event listener should hide the task3 Div by using the .style.display property on the div. If the button is clicked again, it should show the div. The text content of the button should then switch between "hide task3" and "show task3" accordingly. Use querySelector to get task3 div.
    
*/
