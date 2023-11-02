// Code your solution here


function findMatching(arr, string) {
    let drivers = arr.filter(el => string.toLowerCase() == el.toLowerCase())
    return drivers

}


const workers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
const startingLet = "Bo"
fuzzyMatch(workers, startingLet)

function fuzzyMatch(arr, string) {
    let drivers = arr.filter(el => el.startsWith(string))
    debugger
    return drivers

}



function matchName(arr, string) {
    let drivers = arr.filter(el => el.name == string)
    debugger
    return drivers


}