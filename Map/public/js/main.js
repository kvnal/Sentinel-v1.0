function toggle_(id){
    var svg= document.getElementById(id)
    var change
    if (id.includes("light"))
        change=(svg.style.fill=="yellow")?"silver":"yellow"      
    else
        change=(svg.style.fill=="red")?"green":"red"
    return console.log(svg.style.fill=change);

}


function control(id,bool){
    console.log(id)
    console.log(typeof id)

    var svg=document.getElementById(id)
    if(bool=="true")
        var change=(id.includes("light"))?"yellow":"green"
    else
        var change=(id.includes("light"))?"silver":"red"
    return console.log(svg.style.fill=change)

}
