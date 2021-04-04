



function calculations(){
    //get Value of beers
    let beers = parseFloat($("#Beers").val())* .54

    //get Value of wine
    let wine = parseFloat($("#Wine").val())* .6

    //get Value of shots
    let shots = parseFloat($("#shots").val())* .6

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
    alcContent.toFixed(3)

    $("#output").text(`Your Blood Alcohol Content (BAC) is ${alcContent}`)
}