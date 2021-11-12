const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.querySelector('input#searchByID')
        console.log(e);
  })
  
//   e.target.children[1].value



}

document.addEventListener('DOMContentLoaded', init);