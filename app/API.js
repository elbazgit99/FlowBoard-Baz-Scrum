import axios from 'axios'
import axiosRetry from "https://cdn.jsdelivr.net/npm/axios-retry@4.5.0/+esm";

import { displayCards } from './UI.js'
import { todoSelection, inProgressSelection, doneSelection } from './UI.js'

axiosRetry(axios, {
  retries: 3, 
  retryDelay: axiosRetry.exponentialDelay, 
  retryCondition: (error) => {
    return axiosRetry.isNetworkOrIdempotentRequestError(error);
  }
});



export let cardsDb = [];
let resetWrapper = document.getElementById('resetWrapper')
export let refreshBtn = document.getElementById('refreshBtn')
let resError = document.getElementById('resError')


// "https://flowboard-api-virid.vercel.app/cards"
let url = "https://flowboard-api-virid.vercel.app/cards"
export async function getCards() {


  try {
    const res = await axios.get(url)
    const tickets = await res.data
    cardsDb = tickets
    // console.log(cardsDb)
    displayCards('todo', todoSelection)
    displayCards('in-progress', inProgressSelection)
    displayCards('done', doneSelection)
    return cardsDb

  } catch (error) {

      resError.style.color = "#8E1B38"
      resError.textContent = error.message
      refreshBtn.style.display = "block"
      resetWrapper.insertBefore(resError, resetWrapper.firstChild)
  }
}

// fetch('https://flowboard-api-virid.vercel.app/reset', {
//   method: 'POST',
//   headers: {
//     'X-Workspace': 'public'
//   }
// })