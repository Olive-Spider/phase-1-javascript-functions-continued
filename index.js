const saturdayFun = function(activity1="roller-skate", activity2="bathe my dog") {
    if (activity1){
      return ( `This Saturday, I want to ${activity1}!`)
    }
    else if(activity2) {
      return ( `This Saturday, I want to ${activity2}!`)
    }
}

const mondayWork = function(param1 = "go to the office", param2 = "work from home") {
    if(param1){
        return(`This Monday, I will ${param1}.`);
    }
    else if(param2){
        return(`This Monday, I will ${param2}.`);
    }
}

const wrapAdjective = function(style="*") {
    return function (adj = "special") {
        return `You are ${style}${adj}${style}!`
    }
}