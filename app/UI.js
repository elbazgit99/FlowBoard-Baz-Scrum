import {cardsDb} from "./API.js"


function SetLetters(name) { return /^\p{L}+(?: \p{L}+)*$/u.test(name) }
function SetDescription(dscrip) { return /^[\p{L}\p{N} .,:\n]*$/u.test(dscrip) }
function SetMaxLength(inputName, MaxLengthNum) { return inputName.maxLength = MaxLengthNum }
function setRequired(inputName, boolean) { return inputName.required = boolean }

let ticketFilter = []

export function displayCards(boardStatus, statSelect) {
  ticketFilter = []
  for( let card of cardsDb){
    // console.log(cardsDb);
    
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
  boardSpn.classList.add("bg-[#2A2A2D]","rounded-md","ticketCards")

  let boardTitle = document.createElement('h3')
  boardTitle.classList.add("ticketTitles")
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



let ticketModal = document.getElementById("ticketModal")
let creatCardForm = document.getElementById('creatCardForm')

let openModal = document.getElementById("openModal")

let addBtn = document.getElementById("addBtn")
let HiddBtn = document.getElementById("HiddBtn")

let titleInpt = document.getElementById("titleInpt")
let descriptionInpt = document.getElementById("descriptionInpt")

let statusSelection = document.getElementById("statusSelection")

let prioritySelection = document.getElementById("prioritySelection")



function titleValidator(){
  let msg = document.querySelector('.msg')
  let titleValue = titleInpt.value
  localStorage.setItem("ticketTitle", titleValue)
  try {
    msg.textContent = ''
    titleInpt.style.outline = ""
    setRequired(titleInpt,true)
    SetMaxLength(titleInpt,100)
    if (titleValue.trim() == ``) { throw new Error(`ticket title is a must`)}
    if (!SetLetters(titleValue)) { throw new Error(`Invalid title, Only Letters are valid`, titleInpt.style.outline = "solid 1px red") }
    return true
  } catch (error) {
    msg.textContent = error.message
    return false
  }
}

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

titleInpt.addEventListener('input',titleValidator)
descriptionInpt.addEventListener('input',descriptionValidator)



openModal.addEventListener('click', function(){
  ticketModal.style.display = "flex"
})

HiddBtn.addEventListener('click', function(){
  ticketModal.style.display = "none"
})



creatCardForm.addEventListener('submit', function submitForm(event){
  event.preventDefault()
  titleValidator()
  descriptionValidator()
  let newTicket = {
    title : titleInpt.value,
    description : descriptionInpt.value,
    status : statusSelection.value,
    priority : prioritySelection.value
  }
  cardsDb.push(newTicket)
  // if (!cardsDb.includes(newTicket.priority)) {
  //   cardsDb.push(newTicket.priority)
  // }

  let newOption = document.createElement('option')
  newOption.classList.add("bg-[#2A2A2D]","rounded-md")
  newOption.style.color = "white"

  newOption.value = newTicket.title
  newOption.textContent = newTicket.title
  
  // todoSelection   inProgressSelection  doneSelection
  if (newTicket.status === 'todo') {
    todoSelection.append(newOption)
  }

  ticketModal.style.display = "none"
  creatCardForm.reset();
})


//some

let searchInput =  document.getElementById('searchInput')
searchInput.addEventListener('input' , searchByTitle)

function searchByTitle(event) {
  let inputText = event.target.value.toLowerCase().trim()

  let boardCards = document.querySelectorAll('.ticketCards')

  boardCards.forEach(card => {
    let boardTitles = card.querySelector('.ticketTitles')
    let titlesText = boardTitles.textContent.toLowerCase()

    if (titlesText.includes(inputText)) {
      card.style.display = "flex"
    }else{
      card.style.display = "none"
    }
  })

  let filteredTickets = ticketFilter.filter(ticket => ticket.title.toLowerCase()
  .includes(inputText.toLowerCase().trim()))
  return filteredTickets
}