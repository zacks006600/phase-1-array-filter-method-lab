// Code your solution here
function findMatching(drivers, lookFor ){
    return drivers.filter(nameOfItem => nameOfItem.toLowerCase() === lookFor.toLowerCase() )
}
function fuzzyMatch(drivers, lookFor){
    return drivers.filter(nameOfItem => nameOfItem.startsWith(lookFor) )
}
function matchName(drivers,lookFor){
    {
        return drivers.filter(nameOfItem => nameOfItem.name === lookFor)
    }
} 