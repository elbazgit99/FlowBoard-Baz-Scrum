  // import axios from 'axios';
import {displayCards} from './UI.js'
import {todoSelection, inProgressSelection, doneSelection} from './UI.js'

  export let cardsDb = [];
 

  let resetWrapper = document.getElementById('resetWrapper')
  let resError = document.createElement('p')
  let retryBtn = document.createElement('button')

  let url = "https://flowboard-api-virid.vercel.app/cards"

  export async function getCards(){
    
    try {
      const res = await fetch(url)
      if (!res.ok) {
        throw new Error(`Enable to fetch ${res.status}`)
      }
      const tickets = await res.json()
      cardsDb = tickets
      // console.log(cardsDb)
      displayCards('todo',todoSelection)
      displayCards('in-progress',inProgressSelection)
      displayCards('done',doneSelection)
      return cardsDb
      
    } catch (error) {
      resError.textContent = error.message
      resetWrapper.insertBefore(resError, resetWrapper.firstChild)
    }
  }


  // let URL = ''
  // async function getData(){
  //   axios.get(url,{
  //     headers : {
  //       'Authorization' : 'hamza'
  //     },
  //     params : {
  //       id : 2
  //     }
  //   })
  // }

