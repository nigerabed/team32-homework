
//Using async await
async function fetchYesNo() {
    try {
        const response = await fetch("https://yesno.wtf/api");
        const data = await response.json();
        console.log(data.answer)
        return data;
        //console.log("Answer:", data.answer); // Logs "yes" or "no"
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call the function
fetchYesNo();

//Using promises

function promiseYesOrNo (){
    return fetch("https://yesno.wtf/api")
    .then(response => response.json())
    .then(data => {
        console.log("Answer :", data.answer);
        return data.answer;
    })
    .catch(error => console.log("error fetching data", error)
    )
}
promiseYesOrNo();

    
//Create a promise 
const fourSecondTimeoutPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 4000);
  });
  fourSecondTimeoutPromise.then((timeoutdata) => {
    console.log("timeoutdata", timeoutdata);
    
  }) 
 
const twoSecondTimeoutPromise = new Promise((reject) => {
    setTimeout(() => {
      reject("something is wrong");
    }, 4000);
  });
  twoSecondTimeoutPromise.then((timeoutdata) => {
    console.log("timeoutdata", timeoutdata)}) 
    .catch(error => console.error("error", error.message)
    )
 
    //Excersise 4
    function YesNoFail4Seconds(){
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                let randomNumber = Math.random();
                if(randomNumber < 0.33){
                    resolve("yes")
                }else if(randomNumber < 0.66){
                    resolve("No")
                }else(
                    reject("Error: something went wrong")
                )
            })
        }, 4000);
    }
    YesNoFail4Seconds().then((data) => {
        console.log(`the answer is ${data}`)
        
    }).catch(error => console.log(error)
     )

     // excercise 5 
     //using async await

     async function getAstronauts() {
        try {
          const astronautsResponse = await fetch(
            "http://api.open-notify.org/astros.json"
          );
          const astronauts = await astronautsResponse.json();
          return astronauts;
        } catch (err) {
          throw "Fetchin the astronauts went wrong";
        }
      }
      
      const astronauts = getAstronauts();

     async function getMovies() {
        try {
          const moviesResponse = await fetch(
            "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
          );
          const movies = await moviesResponse.json();
          console.log(movies);
          
          return movies;
        } catch (err) {
          throw "Fetchin the movies went wrong";
        }
      }
      
  const movies = getMovies();   