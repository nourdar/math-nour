let m = document.getElementById("val-m")

let calculate = document.getElementById("calculate")

let fInputs = document.getElementById("f-inputs") // div container of functions inputs

let vec = {
    x: 1,
    y: 2,
}

m.addEventListener('change', function (e) {
    // fInputs.innerHTML = ""

    let f = ""



    for (i = 0; i < m.value; i++) {

        // f += 'f( <input id="f-var-"' + i + ' type="text" />) = <input id="f-image-"' + i + ' type="text">'
        f += 'f <sub>' + i + ' </sub>( <math-field id="f-var-' + i + '" ></math-field> ) = <math-field id="f-image-' + i + '"></math-field>'

        // f += '<p id="f-solution-"' + i + '></p>'


        f += '<br>'
        f += '<div style="display:none" class="resultat-div " > Resultat pour <strong>x = ' + vec.x + ' </strong> -  <strong>y = ' + vec.y + ' </strong>: <span id="res-' + i + '"><span>  </div>'
        f += '<div style="display:none" class="resultat-div " > Derivative est : <span id="res-der-' + i + '"><span>  </div>'
        f += '<br>'
        f += '<br>'


    }

    fInputs.innerHTML = f



})


calculate.addEventListener('click', function (e) {

    for (i = 0; i < m.value; i++) {

        let fvar = document.getElementById("f-var-" + i)
        let fImage = document.getElementById("f-image-" + i)
        let res = document.getElementById("res-" + i)
        let resDer = document.getElementById("res-der-" + i)

        fvar.value = 'x,y' // just for test purpose, it should be dynamic


        res.innerHTML = math.evaluate(fImage.value, vec)
        resDer.innerHTML = '( ' + p(math.derivative(fImage.value, 'x')) + ' ,' + p(math.derivative(fImage.value, 'y')) + ')'

        res.parentElement.style.display = 'block'
        resDer.parentElement.style.display = 'block'
        // console.log(func, math.evaluate(func, vec))
        // console.log(p(math.derivative(fImage.value, 'x')))

    }
})


function p(value) {
    var precision = 14;
    return math.format(value, precision);
}

function vector(vector, size) {

}