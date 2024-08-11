const periodLink = document.querySelectorAll(".period-link")

periodLink.forEach(link => {
    link.addEventListener("click", function(){
        
        periodLink.forEach(link => link.style.color = "#6F76C8")

        link.style.color = "white"
        
    })
})


const work = document.querySelector(".work")
const play = document.querySelector(".play")
const study = document.querySelector(".study")
const exercise =  document.querySelector(".exercise")
const social = document.querySelector(".social")
const selfCare = document.querySelector(".care")

const workLast = document.querySelector(".work-last")
const playLast = document.querySelector(".play-last")
const studyLast = document.querySelector(".study-last")
const exerciseLast =  document.querySelector(".exercise-last")
const socialLast = document.querySelector(".social-last")
const selfCareLast = document.querySelector(".care-last")

const daily = document.querySelector(".daily")
const weekly = document.querySelector(".weekly")
const monthly = document.querySelector(".monthly")

daily.addEventListener("click", function(){
    work.textContent = "5hrs"
    workLast.textContent = "7"
    play.textContent = "1hrs"
    playLast.textContent = "2"
    study.textContent = "0hrs"
    studyLast.textContent = "1"
    exercise.textContent = "1hrs"
    exerciseLast.textContent = "1"
    social.textContent = "1hrs"
    socialLast.textContent = "3"
    selfCare.textContent = "0hrs"
    selfCareLast.textContent = "1"
})

weekly.addEventListener("click", function(){
    work.textContent = "32hrs"
    workLast.textContent = "36"
    play.textContent = "10hrs"
    playLast.textContent = "8"
    study.textContent = "4hrs"
    studyLast.textContent = "7"
    exercise.textContent = "4hrs"
    exerciseLast.textContent = "5"
    social.textContent = "5hrs"
    socialLast.textContent = "10"
    selfCare.textContent = "2hrs"
    selfCareLast.textContent = "2"   
})

monthly.addEventListener("click", function(){
    work.textContent = "103hrs"
    workLast.textContent = "128"
    play.textContent = "23hrs"
    playLast.textContent = "29"
    study.textContent = "13hrs"
    studyLast.textContent = "19"
    exercise.textContent = "11hrs"
    exerciseLast.textContent = "18"
    social.textContent = "21hrs"
    socialLast.textContent = "23"
    selfCare.textContent = "7hrs"
    selfCareLast.textContent = "11"    
})