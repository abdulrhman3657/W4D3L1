let saudiaAirlines = {
    airlineName: "saudia airline 1",
    country: "saudi",
    fleetSize: "100",
    destinations: ["riadh", "qassim", "jeddah"],
    inOperation: true,
    bookFlight: function func1(destination){
        if (this.destinations.includes(destination)){
            console.log(`A flight has been booked to ${destination}`)
        } else {
            console.log("this destination does not exists")
        }
    },
    addDestination: function func2(newDestination){
        this.destinations.push(newDestination)
    },
    getSummary: function func3(){
        console.log(`${this.airlineName} work in ${this.country} and has ${this.fleetSize} plane and fly to ${this.destinations.length} destination`)
    }
}

saudiaAirlines.bookFlight("riadh");

saudiaAirlines.addDestination("landon");

console.log(saudiaAirlines.destinations);

saudiaAirlines.getSummary();

const func1 = (a, b) => a + b

console.log(func1(5, 5))

const func2 = (a, b) => a - b

console.log(func2(5, 5))

const func3 = (a, b) => a * b

console.log(func3(5, 5))

const func4 = (a, b) => a / b

console.log(func4(5, 5))
