const init = () => {

const inputForm = document.querySelector('form')

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input#searchByID');

    console.log(input.value);

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(r => r.json())
    .then(dataReceived => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p')

        title.innerText = dataReceived.title;
        summary.innerText = dataReceived.summary;
    })

})




}

document.addEventListener("DOMContentLoaded", init)
