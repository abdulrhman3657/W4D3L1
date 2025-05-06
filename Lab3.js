
const movies = [
    {
      title: "The Matrix",
      director: "Wachowski Brothers",
      year: 1999,
      rating: 8.7,
    },
    {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      rating: 8.8,
    },
    {
      title: "Interstellar",
      director: "Christopher Nolan",
      year: 2014,
      rating: 8.6,
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      rating: 9.2,
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      rating: 9.0,
    },
    { title: "Fight Club", director: "David Fincher", year: 1999, rating: 8.8 },
  ];


let res1 = movies.find((movie) => {
    return movie.year > 2000;
})

console.log(res1.title)

console.log("---------------")

let res2 = movies.find((movie) => {
    return movie.rating > 9
})

console.log(res2.title)

console.log("---------------")

let res3 = movies.filter((movie) => {
    return movie.director == "Christopher Nolan"
})

console.log(res3)

console.log("---------------")

let res4 = movies.filter((movie) => {
    return movie.year < 2010
})

console.log(res4)

console.log("---------------")

let res5 = movies.map((movie) => {
    return movie.title
})

console.log(res5)

// 
let res6 = movies.map((movie) => {
    return movie.rating
})

let res6_total = res6.reduce((total, num) => {
    return total + num
})

console.log("---------------")
console.log(res6)
console.log(res6_total)
console.log(res6_total/res6.length)
console.log("---------------")

let res7 = movies.sort((a, b) => {
    if(a.year > b.year){
        return 1;
    } else {
        return -1
    }
})

console.log(res7)

console.log("---------------")

let res8 = movies.sort((a, b) => {
    if(a.rating < b.rating){
        return 1;
    } else {
        return -1
    }
})

console.log(res8)

console.log("---------------")

let res9 = movies.every(movie => {
    return movie.rating > 8
})

console.log(res9)

console.log("---------------")

let res10 = movies.some(movie => {
    return movie.year == 1999
})

console.log(res10)

console.log("---------------")

let res11 = movies.every((movie, _, arr) => {

    return arr.every((movie2) => {
        return movie.director == movie2.director
    })

})

console.log(res11)

console.log("---------------")

let res12 = movies.some(movie => {
    return movie.rating < 8.5
})

console.log(res12)