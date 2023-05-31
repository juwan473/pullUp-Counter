/*******************************************************************************\
* AUTHOR: JUWAN JEREMIAH                                                        *
* DATE: 05/31/2023                                                              *
* ENVIRONMENT: VSCODE                                                           *
* TITLE: PULL UP REP COUNTER                                                    *
* DESCRIPTION: THIS PROGRAM INCREMENTS WITH THE PRESS OF THE "INCREMENT" BUTTON *
*             AND SAVES EACH SET WITH THE USE OF THE "SAVE" BUTTON. THE TOTAL   *
*             AMOUNT OF REPS IS ALSO DISPLAYED.                                 *
********************************************************************************/

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")
let count1 = 0
let count2 = 0

function increment() {
    count1 += 1
    count2 += 1
    countEl.textContent= count1
    totalEl.textContent= "TOTAL REPS: " + count2
}

function save() {
    saveEl.textContent+= "[" + count1 + "]"
    countEl.textContent=0
    count1=0
}
