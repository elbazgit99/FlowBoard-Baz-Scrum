import {cardsDb} from "./API.js"


function SetLetters(name) { return /^\p{L}+(?: \p{L}+)*$/u.test(name) }
function SetDescription(dscrip) { return /^[\p{L}\p{N} .,:\n]*$/u.test(dscrip) }
function SetMaxLength(inputName, MaxLengthNum) { return inputName.maxLength = MaxLengthNum }
function setRequired(inputName, boolean) { return inputName.required = boolean }

let ticketFilter = []

export function displayCards(boardStatus, statSelect) {
  ticketFilter = []
  for( let card of cardsDb){
    console.log(cardsDb);
    
    // title, status,priority,assignee
    let Ticket = {
      cardTitle : card.title,
      cardStatus : card.status,
      cardPriority: card.priority,
      assignedTo : card.assignee
      
    }
    ticketFilter.push(Ticket)
    console.log(ticketFilter)
  }
  ticketFilter.forEach(ticket => {
    if (ticket.cardStatus == boardStatus) {
        
        let StatusSelection = statSelect // already exist
        let statusOptions = document.createElement('option')
        statusOptions.style.color = 'white'
  
        statusOptions.textContent = ticket.cardTitle
        statusOptions.value = ticket.cardTitle
        StatusSelection.append(statusOptions)
        return
      
    }
  })
}
export let todoSelection = document.getElementById('todoSelection')
export let inProgressSelection = document.getElementById('inProgressSelection')
export let doneSelection = document.getElementById('doneSelection')


//EVENT function
function addToBoard(event,ticketWrapper,ticketStatus){
  let selectedTitle = event.target.value
  let selectedTicket = ticketFilter.find(ticket => 
    ticket.cardTitle === selectedTitle && ticket.cardStatus === ticketStatus
  )
  if (!selectedTicket) {
    return
  }

  let boardSpn = document.createElement('span')
  boardSpn.classList.add("bg-[#2A2A2D]","rounded-md")
  let boardTitle = document.createElement('h3')
  boardTitle.textContent = selectedTicket.cardTitle

  let prioritySelection = document.createElement('select')
      let priorityOptions = document.createElement('option')
      priorityOptions.classList.add("bg-[#2A2A2D]","rounded-md")

      priorityOptions.textContent = selectedTicket.cardPriority
      priorityOptions.value = selectedTicket.cardPriority

      prioritySelection.append(priorityOptions)

  boardSpn.append(boardTitle,prioritySelection)
  ticketWrapper.append(boardSpn)
      
}

//NOTE : BRING THEM ALL  to API.JS
//TODO

let todoElementsWrapper = document.getElementById('todoElementsWrapper')

todoSelection.addEventListener('change', (event) => {
  addToBoard(event,todoElementsWrapper,'todo')
})


//inProgress

let inProgressElementsWrapper = document.getElementById('inProgressElementsWrapper')
inProgressSelection.addEventListener('change', (event) => {
  addToBoard(event,inProgressElementsWrapper, 'in-progress')
} )
//DONE

let doneElementWrapper = document.getElementById('doneElementWrapper')
doneSelection.addEventListener('change', (event) => {
  addToBoard(event,doneElementWrapper, 'done')
} )



let myModal = document.getElementById("myModal");
let openModal = document.getElementById("openModal");

let addBtn = document.getElementById("addBtn")
  let HiddBtn = document.getElementById("HiddBtn")

let titleInpt = document.getElementById("titleInpt");
  let descriptionInpt = document.getElementById("descriptionInpt")

let status = document.getElementById("status");
let priority = document.getElementById("priority");



function titleValidator(){
  let msg = document.querySelector('.msg')
  let titleValue = titleInpt.value
  localStorage.setItem("ticketTitle", titleValue)
  try {
    msg.textContent = ''
    titleInpt.style.outline = ""
    setRequired(titleInpt,true)
    SetMaxLength(titleInpt,100)
    if (titleValue.trim() == ``) { throw new Error(`ticket title is a must`) }
    if (!SetLetters(titleValue)) { throw new Error(`Invalid title, Only Letters are valid`, titleInpt.style.outline = "solid 1px red") }
    return true
  } catch (error) {
    msg.textContent = error.message
    return false
  }
}
titleInpt.addEventListener('input',titleValidator)


function descriptionValidator(){
  let msg = document.querySelector('.msg')
  let descriptionValue = descriptionInpt.value
  localStorage.setItem("ticketTitle", descriptionValue)
  try {
    msg.textContent = ''
    descriptionInpt.style.outline = ""
    setRequired(descriptionInpt,false)
    SetMaxLength(descriptionInpt,500)
    // if (descriptionValue.trim() == ``) { throw new Error(``) }
    if (!SetDescription(descriptionValue)) { throw new Error(`Only Letters and Numbers Are Valid`, descriptionInpt.style.outline = "solid 1px red") }
    return true
  } catch (error) {
    msg.textContent = error.message
    return false
  }
}

descriptionInpt.addEventListener('input',descriptionValidator)




openModal.addEventListener("click", function() {
    myModal.style.display = "flex";
})

// addBtn.addEventListener("click", function() {
//   descriptionValidator()
//   titleValidator()

//     if (titleInpt.value === "") {
//         return
//     }

//     let newTicket = {
//         title: titleInpt.value,
//         description: descriptionInpt.value,
//         status: status.value,
//         priority: priority.value
//     };

//     ticketFilter.push(newTicket)

//     if (newTicket.status === "todo") {

//         if (!ticketFilter.includes(newTicket.priority)) {

//             ticketFilter.push(newTicket.priority)
//         }

//         let newOption = document.createElement("option")
//         newOption.value = newTicket.title;
//          newOption.textContent = newTicket.title;

//       todoSelection.append(newOption);
//         todoSelection.value = newTicket.title;  
//         todoSelection.dispatchEvent(new Event("change")) // to trigger an event for the created titles


//         todoElementsWrapper.lastElementChild.querySelector("select").value = newTicket.priority;

//     } else if (newTicket.status === "in-progress") {

//         if (!ticketFilter.includes(newTicket.priority)) {

//             ticketFilter.push(newTicket.priority)
//         }

//             let newOption = document.createElement("option")
//             newOption.value = newTicket.title
//             newOption.textContent = newTicket.title

//         inProgressSelection.append(newOption)

//         inProgressSelection.value = newTicket.title
//         inProgressSelection.dispatchEvent(new Event('change'))

//         inProgressElementsWrapper.lastElementChild.querySelector('select').value = newTicket.priority

//     }  else if (newTicket.status === "done") {

//         if (!ticketFilter.includes(newTicket.priority)) {
//             ticketFilter.push(newTicket.priority)
//         }

//             let newOption = document.createElement("option")
//                newOption.value = newTicket.title
//             newOption.textContent = newTicket.title

//           doneSelection.append(newOption)

//         doneSelection.value = newTicket.title
//     doneSelection.dispatchEvent(new Event('change'))

//         doneElementWrapper.lastElementChild.querySelector("select").value = newTicket.priority;
//   }

//             myModal.style.display = 'none'
            
// })



HiddBtn.addEventListener('click', function() {

     myModal.style.display = "none"
})

