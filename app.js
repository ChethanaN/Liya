const btn =document.querySelector(".talk");

const greetings=['Doing good'];
const like=['Yes I love to'];
const About=['Chethana is a very sweet girl...she is my best friend...i enjoy talking to her'];
const Name=['My name is Leya'];
const Mother=['My best friend is chethana'];
const Alvena=['hello....how are you'];
const Great =['Thats great'];
const Creater =['Chethana Nagaraja is my creater...she created me as her project...she loves me alot'];
const Bye =['Bye... see you soon ...Miss you '];

const recognition=new SpeechRecognition();
 recognition.onstart=function(){
     console.log('Voice is activated');
 };
 recognition.onresult=function(event){
     const current=event.resultIndex;
   const transcript = event.results[current][0].transcript;
   content.textContent=transcript;
   readOutLoud(transcript);
 };
 btn.addEventListener('click',()=>{
     recognition.start();
 });
 function readOutLoud(message)
 {
     const speech=new SpeechSynthesisUtterance();
     speech.text='I donot know what you said';
     if(message.includes('how are you'))
     {
         const finalText=
                 greetings[Math.floor(Math.random() * greetings.length)];
         speech.text=finalText;
     }
     if(message.includes('do you like to talk to me'))
     {
         const finalText=
                 like[Math.floor(Math.random() * like.length)];
         speech.text=finalText;
     }
     if(message.includes('tell me about your creator'))
     {
         const finalText=
                 About[Math.floor(Math.random() * About.length)];
         speech.text=finalText;
     }
     if(message.includes('what is your name'))
     {
         const finalText=
                 Name[Math.floor(Math.random() * Name.length)];
         speech.text=finalText;
     }
     if(message.includes('who is your best friend'))
     {
         const finalText=
                 Mother[Math.floor(Math.random() * Mother.length)];
         speech.text=finalText;
     }
     if(message.includes('hello liya'))
     {
         const finalText=
                 Alvena[Math.floor(Math.random() * Alvena.length)];
         speech.text=finalText;
     }
     if(message.includes('I am fine thank you'))
     {
         const finalText=
                 Great[Math.floor(Math.random() * Great.length)];
         speech.text=finalText;
     }
     if(message.includes('who is your creator'))
     {
         const finalText=
                 Creater[Math.floor(Math.random() * Creater.length)];
         speech.text=finalText;
     } 
     if(message.includes('who is my brother'))
     {
         const finalText=
                 Brother[Math.floor(Math.random() * Brother.length)];
         speech.text=finalText;
     }   
     if(message.includes('goodbye liya'))
     {
         const finalText=
                 Bye[Math.floor(Math.random() * Bye.length)];
         speech.text=finalText;
     }   
          

     speech.volume=1;
     speech.rate=0.5;
     speech.pitch=1;
     window.speechSynthesis.speak(speech);
 }