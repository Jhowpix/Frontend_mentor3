const container = document.querySelector(".container");
const layer = document.getElementsByClassName(".secondLayer");
const rates = document.querySelectorAll('.btn')
const submit = document.getElementById('sub');
const rating = document.getElementById('rating');

rates.forEach((rate) =>{
  rate.addEventListener('click', () => {
   rating.innerHTML = rate.innerHTML
  })
})

submit.addEventListener('click', () => {
 container.style.display = 'none'
})