let driver = document.getElementById("TypeDriver");
driver.addEventListener("change", Event=>{
    
})


let date = document.getElementById("date");
date.addEventListener("change", Event=>{
    flatpickr("#date", {
        disambleMobile: true,

    })
     
})
let time = document.getElementById("time");
date.addEventListener("change", Event=>{
    flatpickr("#time", {
       EnableTime:true,
       noCalender:true,
       time_24hr:true,
       disambleMobile:true,

    })
     
})

// alert()