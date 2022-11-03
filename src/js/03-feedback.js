import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const formData = {};
// formData = localStorage.getItem("STORAGE_KEY");

const refs = {
form: document.querySelector(".feedback-form"),
textarea: document.querySelector(".feedback-form textarea"),
input: document.querySelector(".feedback-form input")
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500 ));

populateTextarea();

// refs.form.addEventListener('input', el => {
//     formData[el.target.name] = el.target.value;
// console.log(formData);
// const dataOfKey = JSON.stringify(formData);
// localStorage.setItem("STORAGE_KEY", dataOfKey);
// });


function onTextareaInput(el){
  formData[el.target.name] = el.target.value;
    console.log(formData);

localStorage.setItem("STORAGE_KEY",JSON.stringify(formData));  
}

function onFormSubmit(event){
    event.preventDefault();
    console.log('Sending form');
    const dataAfterSubmit = localStorage.getItem("STORAGE_KEY");
    console.log(JSON.parse(dataAfterSubmit));
    // console.log(dataAfterSubmit);
    event.currentTarget.reset();
    localStorage.removeItem("STORAGE_KEY");
}

// function onTextareaInput(evt){
//     const message = evt.target.value;
//     localStorage.setItem(STORAGE_KEY, JSON.parse(message));
// }

function populateTextarea(){
    const savedMessage = localStorage.getItem("STORAGE_KEY");
    const savedMessageParsed = JSON.parse(savedMessage);
    
    if (savedMessageParsed){
         formData.message = savedMessageParsed.message;
         formData.email = savedMessageParsed.email;
        // console.log(formD);
        refs.textarea.value = formData.message || "";
        refs.input.value = formData.email || "";
  
    }}

    
    // if (parsedFormData) { 
    //     formData = parsedFormData;
    //     refs.input.value = formData.email || '';
    //     refs.textarea.value = formData.message || '';
    //   }



// let formFeedback = document.querySelector(".feedback-form textarea");
// let onDataForm = {};
// document.querySelector()

// formFeedback.addEventListener('input', (event) => {
//     event.preventDefault();
//     const msg = event.currentTarget.value;
//     console.log(msg);
    // const dataOfForm = new FormData(formFeedback);
    // dataOfForm.forEach((event.target.value));
// }); 


// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });