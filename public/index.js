"use strict";
//Import stylesheets
//import './style.css';
//import { Definition } from './sample';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector('#defineform');
form.onsubmit = () => {
    const formData = new FormData(form);
    console.log(formData);
    const text = formData.get('defineword');
    console.log(text);
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`;
    //This kinda works
    // fetch(url)
    //     .then(res =>{
    //       if (res.ok){
    //       console.log('success')
    //       const data = res.json();
    //       console.log(data);
    //       const output = JSON.stringify(data);
    //       console.log(output);
    //     // displayData(data); error produced
    //   } else { 
    //     console.log('not successful')
    //   }
    // })
    //Kinda works end
    //This kinda works too
    // const data = api(url);
    // console.log(data);
    // async function api<T>(url: string): Promise<T> {
    //   return fetch(url)
    //     .then(response => {
    //       if (!response.ok) {
    //         throw new Error(response.statusText)
    //       }
    //       return response.json() as Promise<T>
    //     })
    // }
    //End kinda works
    const definition = getDefinition(url);
    console.log(definition);
    function getDefinition(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url);
            const data = yield response.json();
            const { word } = data[0];
            const { meanings } = data[0];
            const { partOfSpeech } = data[0].meanings[0];
            const { definition } = data[0].meanings[0].definitions[1];
            console.log(data);
            console.log(data[0]);
            console.log(word);
            console.log(meanings);
            console.log(definition);
            document.getElementById('wor').textContent = word;
            document.getElementById('def1').textContent = definition;
            //document.getElementById('def2')!.textContent = def2;
            return data;
        });
    }
    return false; // false prevent reload  
};
// const displayData = (data: any) => {
//   console.log(data);
//   const partOfSpeech = data[0].meanings[0].partOfSpeech;
//   const meanings = data[0].meanings[0].definitions;
// }
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
