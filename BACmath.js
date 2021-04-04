



function calculations(){
    //get Value of beers
    let beers = parseFloat($("#Beers").val())* .54
    beers = beers.toFixed(2)
    $("#beerOz").text(`${beers} ounces of alcohol consumed for beers`)


    //get Value of wine
    let wine = parseFloat($("#Wine").val())* .6
    wine = wine.toFixed(2)
    $("#wineOz").text(`${wine} ounces of alcohol consumed for wine glasses`)

    //get Value of shots
    let shots = parseFloat($("#shots").val())* .6
    shots = shots.toFixed(2)
    $("#shotOz").text(`${shots} ounces of alcohol consumed for Shots`)
    //get Value of weight
    let weight =parseFloat( $("#weight").val())

    //get Value of time since last drink
    let hours =parseFloat( $("#hours").val())

    //add the total values of alcohol
    let addedAlc = beers + wine + shots;

    //Multiply the total by 7.5 (avg alc absorption rate)
    let totalAlc = addedAlc *7.5

    //divide result by persons weight input
    let alcContent = totalAlc/weight

    //get alc loss by doing (hours*0.015)
    let alcLoss = hours *.015

    //subtract the loss from the total alcContent
    alcContent = alcContent - alcLoss

    //round result to three decimal places (.XXX%)
    alcContent = alcContent.toFixed(3)

    $("#output").text(alcContent+'%')
}