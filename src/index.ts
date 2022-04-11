// Import stylesheets
//import './style.css';
//import { Definition } from './sample';

// const form: HTMLFormElement = document.querySelector('#defineform')!;


// form.onsubmit = () => {
//   const formData = new FormData(form);

//   console.log(formData);
//   const text = formData.get('defineword') as string;
//   console.log(text);

//   document.getElementById('defineword').textContent = text;


//   return false; // prevent reload
// };



// class definedWord{
//   word: string;
//   definition: string;
//   synonyms: string;

//   constructor(w: string, d: string, s: string){
//     this.word = w;
//     this.definition = d;
//     this.synonyms = s;
//   }


// }

import { RootObject } from "./interfaces/dictionaryAPI";

const form: HTMLFormElement = document.querySelector('#defineform')!;
form.onsubmit = () => {
  const formData = new FormData(form);

  console.log(formData);
  const text = formData.get('defineword') as string;
  console.log(text);

  getDefinition(text);
  

  // if(text){
  // document.getElementById('defineword').textContent = text;
  // }

  return false; // false prevent reload  
};

function getDefinition(word: string){
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  fetch(url)
  .then(res =>{
    if (res.ok){
      console.log('success')
      let data = res.json();
      console.log(data);
    } else { 
      console.log('not successful')
    }
  })
  .then(data => console.log(data))
  .catch(error => console.log('Error'))

}




// const form: HTMLFormElement = document.querySelector('.d-flex') as HTMLFormElement;
// console.log(form.children);

//const word = document.querySelector ('.defineword') as HTMLInputElement;


// form.addEventListener('submit', (e: Event) => {

//   e.preventDefault();
//   word.value;


// })