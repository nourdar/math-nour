let m = document.getElementById("val-m")

let calculate = document.getElementById("calculate")

let fInputs = document.getElementById("f-inputs") // div container of functions inputs



m.addEventListener('change', function (e) {
    // fInputs.innerHTML = ""

    let f = ""

    for (i = 0; i < m.value; i++) {

        // f += 'f( <input id="f-var-"' + i + ' type="text" />) = <input id="f-image-"' + i + ' type="text">'
        f += 'f <sub>' + i + ' </sub>( <math-field id="f-var-' + i + '" ></math-field> ) = <math-field id="f-image-' + i + '"></math-field>'

        // f += '<p id="f-solution-"' + i + '></p>'


        f += '<br>'

        f += '<br>'

    }

    fInputs.innerHTML = f



})


calculate.addEventListener('click', function (e) {
    let fImage = document.getElementById("f-image-1")

    console.log(p(math.derivative(fImage.value, 'x')))


})


function p(value) {
    var precision = 14;
    return math.format(value, precision);
}
