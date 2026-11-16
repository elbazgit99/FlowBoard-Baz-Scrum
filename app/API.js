import {displayCards} from './UI.js'
import {todoSelection, inProgressSelection, doneSelection} from './UI.js'

export let cardsDb = [];
let resetWrapper = document.getElementById('resetWrapper')
let resError = document.createElement('p')
let retryBtn = document.createElement('button')

let url = "https://flowboard-api-virid.vercel.app/cards"

export async function getCards(resolve,reject){
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Enable to fetch ${res.status}`)
    }
    const tickets = await res.json()
    return tickets
      // resolve("data hase been arrived")
      cardsDb = data
      displayCards('todo',todoSelection)
      displayCards('in-progress',inProgressSelection)
      displayCards('done',doneSelection)
      resolve(cardsDb)

      
    
  } catch (error) {
    resError.textContent = error.message
    resetWrapper.insertBefore(resError, resetWrapper.firstChild)
    reject(error)
    // reject('failed to load data from API')
  }
}
getCards()




// export function ResponseFunc(resolve,reject){

//   fetch(url)
//   .then(res => {
//     if(!res.ok){
//       throw new Error(`enable to fetch ${res.status}`)
//     }
//     return res.json()
//   })

//   .then(data => {
//     cardsDb = data
//     displayCards('todo',todoSelection)
//     displayCards('in-progress',inProgressSelection)
//     displayCards('done',doneSelection)
    
//   })

//   .catch(error => {
    
//     resError.textContent = error.message
//     resetWrapper.insertBefore(resError, resetWrapper.firstChild)
    
//   })
// }

// ResponseFunc()