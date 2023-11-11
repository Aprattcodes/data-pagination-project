/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
__________________________________________________________
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
This function will be responsible for rendering the student cards to the page. 
Depending on which page is requested by the user the corresponding students from a given array will be shown on the page.
*/
let i;
let list = data[i];
let itemsPerPage = 9;

function showPage (list,page) { //list parameter to represent an array of student objects -- page parameter to represent the requested page number.
   
   let startIndex = (page * itemsPerPage) - itemsPerPage; //creates two variables to show start and end index
   let endIndex = page * itemsPerPage;
   let html = '';
   const studentListHTML = document.querySelector('.student-list'); //creates student list variable
   studentListHTML.innerHTML = html; //use innerhtml ti set HTML content of student list variable to empty string
      for (let i = startIndex; i < endIndex && i < data.length; i++) { //loops over list of students
         let currentIndex = i;
         if ( startIndex <= currentIndex && currentIndex < endIndex ) { //checks if the current index is greater than or equal to start and less than end
            let studentCard = `<li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src=${data[i].picture.large} alt="Profile Picture">
               <h3>${data[i].name.first}, ${data[i].name.last}</h3>
               <span class="email">${data[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${data[i].registered.date}</span>
            </div>
         </li>`;
         html += studentCard;
         
         } else {
            console.log("No students availible.")
         }
         
      }

   studentListHTML.innerHTML = html; //sets html content

  }

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination (list) {
   let numOfButtons = Math.ceil(data.length / itemsPerPage) + 1;
   //numOfButtons = 6
   const pageListHTML = document.querySelector('.link-list');
   let html = '';

   for (let i = 1; i < numOfButtons; i++) { //if i is equal to one class is active otherwise empty string
      let numButton= `<li>
      <button type="button"${i === 1 ? 'class="active"' : ''}>${i}</button>
      </li>`;
      html += numButton;  
   }  

   pageListHTML.innerHTML = html;

//create a conditional that checks if the clicked element is a button- is called when one button is clicked
//if a page button is clicked

const buttons = document.querySelectorAll('button'); //selects all buttons

buttons.forEach((button) => {
//for each button in buttons
   button.addEventListener('click', function () { //add click event

      //remove active class from all buttons
      buttons.forEach((btn) => btn.classList.remove('active')); //for each single button that is not button

      //add active class to clicked button
      button.classList.add('active');

      //update page
      showPage(list, parseInt(button.textContent));
   });
});

}

// Call functions
showPage (list,1);
addPagination(list);