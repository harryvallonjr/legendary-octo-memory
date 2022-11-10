console.log("Code-challenge Day")

const title = document.getElementById("title")
title.innerText = film.title
const runtime = document.getElementById("runtime")
runtime.innerText = `{film.runtime}` 
const showtime = document.getElementById("showtime")
showtime.innerText = film.showtime
const description = document.getElementById("film - info")
description.innerText = film.description


document.addEventListener("DOMContentLoaded", () => {
    const fetchFirstFilm = () => {
        fetch(url + id)
            .then(response => response.json())
            .then(data => { renderFirstFilm(data) })
    }
    fetchFirstFilm();
})


const title = document.getElementById("title")
title.innerText = film.title
const runtime = document.getElementById("runtime")
runtime.innerText = `${film.runtime}`
const showtime = document.getElementById("showtime")
showtime.innerText = film.showtime
const description = document.getElementById("film - info")
description.innerText = film.description



const ticketSpan = document.getElementById("ticket - num")
const convertedCapacity = parseInt(film.capacity, 10)
ticketSpan.innerText = convertedCapacity — film.tickets_sold

const button = document.querySelector(".ui.orange.button")
button.addEventListener("click", (e) => {
    if (ticketSpan.innerText <= 0) {
        let buttonDiv = document.querySelector("extra.content");
        buttonDiv.innerHTML = “<button>Sold Out</button>”
    }
    else {
        const tickets_sold = film.tickets_sold + 1
        let obj = { tickets_sold } 
        updateTicketNum(obj)
    }
})

const updateTicketNum = (obj) => {
    options = {
        method: "PATCH",
        headers: { 
       “content - type” : “application / json”,
       “accept”: “application / json”
     },
body: JSON.stringify(obj)

fetch((url + id), options)
    .then(response => response.json())
    .then(data => {
        renderFirstFilm(data)
    })
}}