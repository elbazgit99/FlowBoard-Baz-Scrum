import * as api from './API.js'
import * as ui from './UI.js'
// getCards, addToBoard, titleValidator, descriptionValidator
api.getCards()


//TODO
ui.todoSelection.addEventListener('change', (event) => {
  ui.addToBoard(event,ui.todoElementsWrapper,'todo')
})
//inProgress
ui.inProgressSelection.addEventListener('change', (event) => {
  ui.addToBoard(event,ui.inProgressElementsWrapper, 'in-progress')
} )
//DONE
ui.doneSelection.addEventListener('change', (event) => {
  ui.addToBoard(event,ui.doneElementWrapper, 'done')
} )

// INPUT VALIDATORS
ui.titleInpt.addEventListener('input',ui.titleValidator)
ui.descriptionInpt.addEventListener('input',ui.descriptionValidator)

//search Input
ui.searchInput.addEventListener('input' , ui.searchByTitle)

//form submition
ui.creatCardForm.addEventListener('submit',ui.submitForm )

ui.openModal.addEventListener('click', function(){
  ui.ticketModal.style.display = "flex"
})
ui.HiddBtn.addEventListener('click', function(){
  ui.ticketModal.style.display = "none"
})

// ui.uiFilter.addEventListener('click', ui.openUiFilter)
ui.openUiFilter()