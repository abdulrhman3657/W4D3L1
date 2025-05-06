
const characters = [ { 
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
     }, 
    { 
    name: "Leia Organa", 
    height: 160,
    gender: "female", 
    mass: 56,
    eye_color: "blue",
     }, 
    { 
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
     },
     { 
    name: "Chewie",
    height: 222, 
    gender: "male",
    mass: 190,
    eye_color: "black",
     },
     {
    name: "Kevin",
    height: 106,
    gender: "male",
    mass: 32.2, 
    eye_color: "red",
     },
];


let res1 = characters.find((character) => {
    return character.mass > 75
});

console.log(res1.name.split(" ")[0])

console.log("---------------")

// 
let res2 = characters.find((character) => {
    return character.height < 180
});

console.log(res2.eye_color)

console.log("---------------")

let res3 = characters.filter((character) => {
    return character.height > 150 && character.height < 210
});

console.log(res3)

console.log("---------------")

let res4 = characters.filter((character) => {
    return character.gender == "female"
});

console.log(res4)

console.log("---------------")

let res5 = characters.map(character => {
    return character.eye_color
})

console.log(res5)

console.log("---------------")

let res6 = characters.map(character => {
    return character.mass
})

console.log(res6)

console.log("---------------")

let res7 = characters.sort((a, b) => {
    
    if(a.name > b.name){
        return 1;
    } else {
        return -1
    }

})

console.log(res7)

console.log("---------------")

let res8 = characters.sort((a, b) => {

    if(a.height > b.height){
        return 1;
    } else {
        return -1
    }

})

console.log(res8)

console.log("---------------")

let res9 = characters.every(character => {
    return character.height > 100;
})

console.log(res9)

console.log("---------------")

let res10 = characters.every(character => {
    return character.mass < 200
})

console.log(res10)

console.log("---------------")

let res11 = characters.some(character => {
    return character.eye_color == "black"
})

console.log(res11)

let res12 = characters.some(character => {
    return character.height == 177
})

console.log(res12)
