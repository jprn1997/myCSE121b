// James P Norma
// Cse 121B
// 
const today = new Date();
// 
// 
let dayOfWeek;
// 
dayOfWeek = today.getDay();
let message1;
// 
if (dayOfWeek == 2) {
  message1 = "It's end game bro! Get the assingment IN!";
} else {
  message1 = "Who cares!";
}
// 
let message2;

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
document.querySelector("#message1").textContent = message1;

document.querySelector("#message2").textContent = message2;
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