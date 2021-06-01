//PRIMER FORMULARIO 
const formulario = document.getElementsByName("form_data")
const nombre = document.getElementById('form_name')
const lastname = document.getElementById('form_lastName')
const year = document.getElementById('form_date')
const email = document.getElementById('form_email')
const buttonData = document.getElementsByName("paso1")
const dir = document.getElementsByName("direccion")
const elements = document.getElementsByClassName('element')

//SEGUNDO FORMULARIO

const sectionMsj = document.getElementsByClassName("form_section")
const textarea = document.getElementsByClassName("message_input")
    /* const divCivil = document.getElementsByClassName("civil")
    const contenCivil = divCivil[0] */
    //ORIENTACION
const merried = document.getElementById('form_married')
const divor = document.getElementById('form_divorced')
const sing = document.getElementById('form_single')
    //ESTADO CIVIL
const fem = document.getElementById('form_femenino')
const masc = document.getElementById('form_masculino')
const other = document.getElementById('form_otro')
const gender = document.getElementsByClassName("form_sex")
const estado = document.getElementsByClassName("selection")

const buttonMsj = document.getElementsByName("paso2")
    //SECCIONES
const firsStep = document.getElementsByClassName("step_one")
const seconStep = document.getElementsByClassName("step_two")


//SE ACTIVA CUANDO ESTEN LLENO LOS DATOS
function buttonActive() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("keyup", () => {
                if (elements[0].value != "" && elements[1].value != "" && elements[2].value != "" && elements[3].value != "" && elements[4].value != "") {
                    buttonData[0].classList.remove("button_off")
                }

            })
            /*   setInterval(buttonActive(), 1000) */
    }
}


//PRIMER PASO

let infoUser = []

function obtenerDatos() {

    infoUser.push(nombre.value)
    infoUser.push(lastname.value)
    infoUser.push(year.value)
    infoUser.push(email.value)
    infoUser.push(dir[0].value)

    firsStep[0].classList.add("hiden")
    seconStep[0].classList.remove("hiden")
}
buttonActive()
buttonData[0].addEventListener("click", obtenerDatos)


//SEGUNDO PASO
let msjUser = []

function obtenerMsj() {

    //MENSAJE
    if (textarea[0].value != "" && textarea[0].value.length > 15) {
        msjUser.push(textarea[0].value)
    } else {
        alert('Deja un lindo mensaje para nosotros :D y que sea largo uwux')
    }
    //ESTADO CIVIL  
    if (divor.checked == false && merried.checked == false && sing.checked == true) {
        msjUser.push(sing.value)
    } else if (divor.checked == true && merried.checked == false && sing.checked == false) {
        msjUser.push(divor.value)
    } else if (divor.checked == false && merried.checked == true && sing.checked == false) {
        msjUser.push(merried.value)
    }
    msjUser.push(lastname.value)
    msjUser.push(year.value)
    msjUser.push(email.value)
    msjUser.push(dir[0].value)

    firsStep[0].classList.add("hiden")
    seconStep[0].classList.remove("hiden")
}

buttonMsj[0].addEventListener("click", obtenerMsj)





//QUITANDO EVENTO ENTER

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=text]').forEach(node => node.addEventListener('keypress', e => {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    }))
})
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=email]').forEach(node => node.addEventListener('keypress', e => {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    }))
})
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=date]').forEach(node => node.addEventListener('keypress', e => {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    }))
})

//QUITANDO EVENTO ENTER