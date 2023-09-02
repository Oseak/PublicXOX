
var checkListOne= [
            0,0,0,
            0,0,0,
            0,0,0]

var checkListTwo= [
            0,0,0,
            0,0,0,
            0,0,0]

var selectorOne = "active"
var selectorTwo = "passive"
var checkList = []
var isFinished = false
var sayac = 1
var winner = "None"
var p = ["012","345","678","036","147","258","048","246"]

function clickFunc(get, square){
    square -= 1
   
    if ((checkListOne[square] == 1 || checkListTwo[square] == 1) && isFinished == false ){
        window.alert("Sectiginiz kare dolu lütfen boş olan bir kare seçiniz!")
    }
    else{
        drawXorO(get, square)
    }
     
}
function drawXorO(get,square){
    if (selectorOne == "active" && isFinished == false) {
        get.innerHTML = '<img src="X.png" style="width: 150px; "></img>'
        checkListOne[square] = 1;
        setTimeout(checkGameStatus,100,checkListOne)
    }
    
    else if (selectorTwo == "active" && isFinished == false) {
        get.innerHTML = '<img src="O.png" style="width: 150px; "></img>'
        checkListTwo[square] = 1;
        setTimeout(checkGameStatus,100,checkListTwo)
    }
}

function checkGameStatus(checkList){
    if (
        (checkList[0] == 1 && checkList[1] == 1 && checkList[2] == 1) ||
        (checkList[3] == 1 && checkList[4] == 1 && checkList[5] == 1) ||
        (checkList[6] == 1 && checkList[7] == 1 && checkList[8] == 1) ||
        (checkList[0] == 1 && checkList[3] == 1 && checkList[6] == 1) ||
        (checkList[1] == 1 && checkList[4] == 1 && checkList[7] == 1) ||
        (checkList[2] == 1 && checkList[5] == 1 && checkList[8] == 1) ||
        (checkList[0] == 1 && checkList[4] == 1 && checkList[8] == 1) ||
        (checkList[2] == 1 && checkList[4] == 1 && checkList[6] == 1) ){
            if (selectorOne == "active") {
                isFinished = true
                winner = "X"
                drawLine(checkList)
                setTimeout(window.alert,100,"Player 1 kisisi oyunu kazandı.")
                // setTimeout(showWinner,100)

            }
            else if (selectorTwo == "active") {
                isFinished = true
                winner = "O"
                drawLine(checkList)
                setTimeout(window.alert,100,"Player 2 kisisi oyunu kazandı.")
                // setTimeout(showWinner,100)

            }
    }

    else if (sayac == 9 && isFinished == false ){
        isFinished = true
        setTimeout(window.alert,100,"Oyun berabere bitti.")
    }

    else {
        if (selectorOne == "active"){
            console.log("selectorOne signed")
            selectorOne = "passive"
            selectorTwo = "active"
            sayac +=1
        }
        else {
            console.log("selectorTwo signed")
            selectorOne = "active"
            selectorTwo = "passive"
            sayac +=1
        }
    }
}


// function showWinner(){
//     if (winner == "X") {
//         document.getElementsByClassName("winner")[0].style.zIndex = 100
//         document.getElementsByClassName("winner")[0].style.visibility = "visible"
//         document.getElementsByClassName("winner")[0]
//         .innerHTML = '<img src="X.png" style="width: 350px; "></img>'
//     }
//     else {
//         document.getElementsByClassName("winner")[0].style.zIndex = 100
//         document.getElementsByClassName("winner")[0].style.visibility = "visible"
//         document.getElementsByClassName("winner")[0]
//         .innerHTML = '<img src="O.png" style="width: 350px; "></img>'
//     }
// }

function drawLine(cheklistDrawLine){
    let selectedSqaures= []
    let cizgiCekme = "cizgi"
    let check = false

    for (let i = 0 ; i<9; i++){
        if (cheklistDrawLine[i] == 1)
        selectedSqaures.push(i)
    }

    if (selectedSqaures.length == 3){
        cizgiCekme += selectedSqaures.join("")
    }

    else{
        // console.log("Full",selectedSqaures.length)
        for (let i = 0 ; i < selectedSqaures.length; i++){
            if (check == true)
                break
            let temp = (selectedSqaures.slice())
            temp.splice(i,1)
            console.log("Deneme",temp)
            let temp2 = temp.slice()
            for (let k = 0 ; k < 4; k++){
                let temp2 = temp.slice()
                temp2.splice(k,1)
                // console.log("temp",temp2.join(""))
                if (p.includes(temp2.join(""))){
                    cizgiCekme += temp2.join("")
                    check = true
                    break
        }
    }
     }
    }
    // console.log("cizgi",cizgiS)
    document.getElementsByClassName("cizgiContainer")[0].style.zIndex = 1000;
    document.getElementsByClassName(cizgiCekme)[0].style.visibility ="visible";

}

const playAgain = () => location.reload()