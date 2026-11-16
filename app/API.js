export let cardsDb = []
import {displayCards} from './UI.js'
import {todoSelection, inProgressSelection, doneSelection} from './UI.js'

let resetWrapper = document.getElementById('resetWrapper')
let resError = document.createElement('p')
let retryBtn = document.createElement('button')

let url = "https://flowboard-api-virid.vercel.app/cards"



export function ResponseFunc(resolve,reject){

  fetch(url)
  .then(res => {
    if(!res.ok){
      throw new Error(`enable to fetch ${res.status}`)
    }
    return res.json()
  })

  .then(data => {
    // resolve("data hase been arrived")
    cardsDb = data
    displayCards('todo',todoSelection)
    displayCards('in-progress',inProgressSelection)
    displayCards('done',doneSelection)
    
  })

  .catch(error => {
    
    resError.textContent = error.message
    resetWrapper.insertBefore(resError, resetWrapper.firstChild)
    // reject('failed to load data from API')
    
  })
}


ResponseFunc()

// export async function promiseFunction(resolve, reject,status = '', assignee = '', ) {
//   let objectParams = {}

// }