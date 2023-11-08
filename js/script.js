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

// let list = data[0];
// let page = 1;
const studentListItem = document.querySelector('.student-list');
let html = `<li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src=${data[0].picture.large} alt="Profile Picture">
            <h3>${data[0].name.first} , ${data[0].name.last}</h3>
            <span class="email">${data[0].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${data[0].registered.date}</span>
          </div>
        </li>`;

        studentListItem.innerHTML=html;

// function showPage (list,page){ //list parameter to represent an array of student objects -- page parameter to represent the requested page number.
// let startIndex = (page * studentListItem.length) - studentListItem.length; // (page * items per page) - items per page
// let endIndex = page * studentListItem.length; //page * items per page



// for (let i =0; i < students.length; i++){
  

//    if (startIndex <= i){
//       console.log('yes');
//    } else {
//       console.log('no');
//    }
// }

// } 
// showPage (list,page);




/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
