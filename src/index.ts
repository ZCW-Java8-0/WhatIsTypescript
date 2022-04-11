//Import stylesheets
//import './style.css';
//import { Definition } from './sample';

const form: HTMLFormElement = document.querySelector('#defineform')!;
form.onsubmit = () => {
  const formData = new FormData(form);

  console.log(formData);
  const text = formData.get('defineword') as string;
  console.log(text);
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`
  fetch(url)
        .then(res =>{
         if (res.ok){
      console.log('success')
      const data = res.json();
      console.log(data);






      
    } else { 
      console.log('not successful')
    }
  })
  .catch(error => console.log('Error'))



  return false; // false prevent reload  
};


 // const partOfSpeech = data[0]. 
   
  

  // if(text){
  // document.getElementById('defineword').textContent = text;
  // }
// function getDefinition(word: string){
//   let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
//   fetch(url)
//   .then(res =>{
//     if (res.ok){
//       console.log('success')
//       let data = res.json();
//       console.log(data);
//     } else { 
//       console.log('not successful')
//     }
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log('Error'))
// }




// const form: HTMLFormElement = document.querySelector('.d-flex') as HTMLFormElement;
// console.log(form.children);

//const word = document.querySelector ('.defineword') as HTMLInputElement;


// form.addEventListener('submit', (e: Event) => {

//   e.preventDefault();
//   word.value;


// })