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


const studentListHTML = document.querySelector('.student-list');
const pageListHTML = document.querySelector('.link-list');

let pageNumHTML = `<li>
               <button type="button" class="active">1</button>
               </li>
               <li>
               <button type="button">2</button>
               </li>`;

pageListHTML.innerHTML = pageNumHTML;
let i;
let list = data[i];


function showPage (list,page) { //list parameter to represent an array of student objects -- page parameter to represent the requested page number.
   let itemsPerPage = 10;
   let startIndex = (page * itemsPerPage) - itemsPerPage; // (page * items per page) - items per page
   let endIndex = page * itemsPerPage; //page * items per page
   let html = '';
   
      for (let i = startIndex; i < endIndex && i < data.length; i++) {
         let studentCard = `<li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src=${data[i].picture.large} alt="Profile Picture">
               <h3>${data[i].name.first} , ${data[i].name.last}</h3>
               <span class="email">${data[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${data[i].registered.date}</span>
            </div>
         </li>`;
         html += studentCard;
      }

   studentListHTML.innerHTML = html;

  }
  showPage (list,4);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
