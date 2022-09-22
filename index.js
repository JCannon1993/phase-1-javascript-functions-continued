function saturdayFun (activity= "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
  
const mondayWork = function (event= "go to the office"){
    return `This Monday, I will ${event}.`
}

function wrapAdjective (ending = "*"){
    return function (adjective = "special"){
            return `You are ${ending}${adjective}${ending}!`
    }
}
