// Step 1: Declare and initialize a new variable to hold the current date
const today = new Date();

// Step 2: Declare another variable to hold the day of the week
let dayOfWeek;

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
dayOfWeek = today.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
let message1;

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
// if (dayOfWeek == 1) {
//   message1 = "Its end game!";
// }

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
if (dayOfWeek == 2) {
  message1 = "It's end game bro! Get the assingment IN!";
} else {
  message1 = "Who cares!";
}
// Step 1: Declare a new variable to hold another message
let message2;

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek) {
  case 0:
    message2 = "Sunday";
    break;
  case 1:
    message2 = "Monday";
    break;
  case 2:
    message2 = "Tuesday";
    break;
  case 3:
    message2 = "Wednesday";
    break;
  case 4:
    message2 = "Thursday";
    break;
  case 5:
    message2 = "Friday";
    break;
  case 6:
    message2 = "Saturday";
    break;
  default:
    message2 = "Unknown - " + dayOfWeek;
    break;
}
// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector("#message1").textContent = message1;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector("#message2").textContent = message2;
//
//
//
//
//
const output = (movies) => {
  movies.forEach((movie) => {
    let article = document.createElement("article");
    let movieName = document.createElement("h3");
    movieName.textContent = movie.movieName;
  
    let order = document.createElement("h4");
    order.textContent = movie.order;
  
    let released = document.createElement("h4");
    released.textContent = movie.released;
  
    let img = document.createElement("img");
    img.setAttribute("src", movie.imageUrl);
    img.setAttribute("alt", movie.movieName);
    img.setAttribute('width', 200);
  
    article.appendChild(movieName);
    article.appendChild(order);
    article.appendChild(released);
    article.appendChild(img);
  
    document.querySelector("#movies").appendChild(article);
  });
};
//   
// 
//   
const getMovies = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/jprn1997/myCSE121b/main/final/starwas_json.json"
  );
  movieList = await response.json();
  output(movieList);
};
getMovies();
// 
// 
// 
// 
// 
// 
// 
const reset = () => {
  document.querySelector("#movies").innerHTML = "";
};
  
const sortBy = () => {
  reset();

  let filter = document.querySelector("#sortBy").value;

  switch (filter) {
    case "movieNameAscending":
      output(
        movieList.sort((movie1, movie2) => {
          let movieName1 = movie1.movieName.toLowerCase();
          let movieName2 = movie2.movieName.toLowerCase();
          if (movieName1 < movieName2) return -1;
          else if (movieName1 > movieName2) return 1;
          else return 0;
        })
      );
      break;
    case "movieNameDescending":
      output(
        movieList.sort((movie1, movie2) => {
          let movieName1 = movie1.movieName.toLowerCase();
          let movieName2 = movie2.movieName.toLowerCase();
          if (movieName1 > movieName2) return -1;
          else if (movieName1 < movieName2) return 1;
          else return 0;
        })
      );
      break;
    default:
      // using ternary operators
      output(
        movieList.sort((movie1, movie2) =>
          movie1.movieName.toLowerCase() > movie2.movieName.toLowerCase()
            ? 1
            : movie2.movieName.toLowerCase() >
              movie1.movieName.toLowerCase()
            ? -1
            : 0
        )
      );
      break;
  }
}
document.querySelector("#sortBy").addEventListener("change", sortBy);