const main_win = document.getElementById(`main-window`)
    const comp_win = document.getElementById(`comp`)
        const cscore = document.getElementById(`cscore`)
        const msg_box = document.getElementById(`msg-box`)
        const comp_iput = document.getElementById(`comp-ip`)
        const comp_start_btn = document.getElementById(`comp-start-btn`)
    const frnd_win = document.getElementById(`frnd`)
        const name_box = document.getElementById(`name-box`)
            const player1 = document.getElementById(`player1`)
            const player2 = document.getElementById(`player2`)
        const frnd_box = document.getElementById(`frnd-box`)
            const fscore = document.getElementById(`fscore`)
            const turn = document.getElementById(`turn`)
            const frnd_iput = document.getElementById(`frnd-ip`)
            const frnd_start_btn = document.getElementById(`frnd-start-btn`)



let score = 0
let gamestat = false
let turnstat = 1
let compipval = 0
let cwin = false
let n = 1

function home() {
    main_win.style.display = `block`
        comp_win.style.display = `none`
            cwin = false
            comp_iput.disabled = true
            comp_start_btn.innerHTML = `Start`
            msg_box.value = ``
            comp_iput.value = ``
            comp_start_btn.disabled = false
            cscore.textContent = `Score : `
        frnd_win.style.display = `none`    
            frnd_start_btn.innerHTML = `Start`
            frnd_start_btn.disabled = false
            frnd_box.style.display = `none`
            name_box.style.display = `flex`
            fscore.textContent = `Score : `
            turn.textContent = `Turn : `
            frnd_iput.value = ``
    score = 0
    gamestat = false
    turnstat = 1
    n=1   
}

function compplay() {
    comp_win.style.display = `block`
    main_win.style.display = `none`
}

function comp_start() {
    if (gamestat === false) {
        gamestat = true
        cscore.textContent = `Score : ${score}`
        comp_iput.disabled = false
        msg_box.value = `You Start~`
        comp_start_btn.innerHTML = `Enter`
    } else {
        evalScore(`player`, `Computer`, comp_iput.value, `comp`)
        if (checknum(comp_iput.value) && cwin === false) {
            compipval = getCompValue()
            msg_box.value = `Computer adds ${compipval}`
            evalScore(`player`, `Computer`, compipval, `comp`)
        }
    }
}


function frndplay() {
    frnd_win.style.display = `block`
    main_win.style.display = `none`
}

function savename() {
    if (player1.value === ``) {
        alert(`Player 1 is empty!`)
    }
    else if (player2.value === ``) {
        alert(`Player 2 is empty!`)
    } else {
        name_box.style.display = `none`
        frnd_box.style.display = `block`
    }
}

function start_fgame() {
    if (gamestat === false) {
        fscore.textContent = `Score : ${score}`
        turn.innerText = `Turn : ${player1.value}`
        frnd_start_btn.innerHTML = `Enter`
        turnstat = 2;
        gamestat = true
    } else {
        evalScore(player1.value, player2.value, frnd_iput.value, `frnd`)
    }
}

function checknum(num) {
    if (Number(num) === NaN ||Number(num) > 10 || Number(num) <= 0 || Number(num) % 1 != 0) {
        return false
    } 
    return true
}

function evalScore(p1, p2, val, mode) {
    if (!checknum(val)) {
        alert(`Enter number from 1 <-> 10`)
    } else {
        score = score + Number(val)
        if (mode === `frnd`) {
            fscore.textContent = `Score : ${score}`
            checkAndDeclareWin(p1, p2, `frnd`)
            if (turnstat === 1) {
                turn.textContent = `Turn : ${p1}`
                turnstat = 2
            } else {
                turn.textContent = `Turn : ${p2}`
                turnstat = 1
            }
        }
        else {
            cscore.textContent = `Score : ${score}`
            checkAndDeclareWin(`player`, `Computer`, `comp`)
            if (turnstat === 1) {
                turnstat = 2
            } else {
                turnstat = 1
            }
        }
    }
}

function checkAndDeclareWin(p1, p2, mode) {
    if (score >= 100) {
        if (mode === `frnd`) {
            fscore.textContent = `Score : 100`
            frnd_start_btn.disabled = true
            if (turnstat === 1) {
                alert(`${p2} Wins`)
            } else {
                alert(`${p1} Wins`)
            }
            gamestat = false
        }
        else {
            cscore.textContent = `Score : 100`
            comp_start_btn.disabled = true
            if(turnstat === 1) {
                cwin = true
                alert(`Player Wins`)
            } else {
                alert(`Computer Wins`)
            }
            gamestat = false
        }
    }
}


function getCompValue() {
    if(score%11!=1) {
        while(n<score){
            n += 11
        }
        return n - score
    } else {
        return (Math.round(Math.random()*9, 1) + 1)
    }
}