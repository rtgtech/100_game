let upper_limit = 100
let lower_limit = 1
let Tries = 10
let t = 0
let randomNum
let input_val
let loose = true

const btn_1 = document.getElementById(`btn-1`)
const btn_2 = document.getElementById(`btn-2`)
const msg_box = document.getElementById(`message-box`)
const input_box = document.getElementById(`input-box`)
const up_lim = document.getElementById(`up-lim-in`)
const low_lim = document.getElementById(`low-lim-in`)
const _tries = document.getElementById(`tries-in`)

function start() {
    document.getElementById(`up-lim`).textContent = `Upper Limit : ${upper_limit}`
    document.getElementById(`low-lim`).textContent = `Lower Limit : ${lower_limit}`
    document.getElementById(`tries`).textContent = `Tries left : ${Tries}`
    input_box.disabled = false
    msg_box.value = `Enter a number`
    btn_1.textContent = `Reset`
    btn_2.textContent = `Enter`
    btn_1.setAttribute(`onClick`, `reset()`)
    btn_2.setAttribute(`onClick`, `checkIn()`)
    randomNum = Math.round(Math.random() * (upper_limit - lower_limit)) + lower_limit
}

function checkIn() {
    if (t < Tries) {
        input_val = Number(input_box.value)
        if (input_val === randomNum) {
            msg_box.value = `You Win Click Reset`
            input_box.disabled = true
            btn_2.disabled = true
            loose = false
        } else if (input_val > randomNum) {
            msg_box.value = `A Little Lower`
        }
        else if (input_val < randomNum) {
            msg_box.value = `A Little Higher`
        }
        t++
        document.getElementById(`tries`).textContent = `Tries left : ${Tries - t}`
        document.getElementById(`input-box`).value = ``
        if ((t === Tries) && (loose)) {
            msg_box.value = `Out of Tries`
            input_box.disabled = true
            btn_2.disabled = true
        }
    }
}

function reset() {
    msg_box.value = `Click Start`
    btn_1.textContent = `Start`
    btn_2.textContent = `⚙️`
    btn_1.setAttribute(`onClick`, `start()`)
    btn_2.setAttribute(`onClick`, `toggleSetting()`)
    document.getElementById(`tries`).textContent = `Tries left : `
    input_box.disabled = true
    btn_2.disabled = false
    t = 0
    loose = true
}

function toggleSetting() {
    document.getElementById(`con1`).style.display = `none`
    document.getElementById(`scon1`).style.display = `block`
}

function toggleHome() {
    document.getElementById(`scon1`).style.display = `none`
    document.getElementById(`con1`).style.display = `block`
}

function save() {
    upper_limit = Number(up_lim.value)
    lower_limit = Number(low_lim.value)
    Tries = Number(_tries.value)
}

function resetSetting() {
    upper_limit = 100
    lower_limit = 1
    Tries = 10
}