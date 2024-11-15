//för varje värvning ska en användare få belöning


let user = {
    id: 1,
    name: 'John',
    age: 30,
    ekonmi: {
        rainbow: 100,
        cloves: 50,
        lend: 200,
        addsCreated: 0,
        addsGiven: 0,
        addsRecived: 0,
    }
}


function getEconomyById() {
    return user.ekonmi
}

// change rainbow points
function changeRainbowPoints(points) {
    user.ekonmi.rainbow += points
}

function pickedUpFromLocker(user1, user2) {
    //byt categori på naonstyp
    // reg datum för hämtning på annons
    user.ekonmi.rainbow += 1
    user.addsGiven += 1
}


console.log(getEconomyById())
console.log(changeRainbowPoints(1))
console.log(getEconomyById())