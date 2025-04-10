// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-chatbot',
//   templateUrl: './chatbot.component.html',
//   standalone: true,
//   imports: [FormsModule],
//   styleUrls: ['./chatbot.component.css']
// })
// export class ChatbotComponent {
//   messages: { text: string, sender: string}[] = []; //Dice quién ha enviado el mensaje, el usuario o el bot, los compara en las listas vacías.
//   userInput: string = ""; //Aquí si se almacena el mensaje del usuario, se vincula con el ngModel del html


//   responses: { [key: string]: string} = {
//     'hola': '¡Hola!, ¿cómo estás, en qué te ayudo?',
//     'cómo estás': 'Soy un súper bot, pero estoy bien',
//     'adiós': '¡Nos vemos! Lo que necesites aquí estoy',
//     'default' : 'No entiendo, ¿puedes repetirlo?'

//   };

//   sendMessage() { //Lo que se va a ejecutar cuando se da al botón de enviar mensaje
//     if (this.userInput.trim() === '') //Comprueba primero si el campo está vacío, si lo está, devuelve return, es decir, un valor vacío

//     this.messages.push({text: this.userInput, sender: 'user'});
//       //Si el mensaje no está vacío lo metemos en messages dónde usamos el .push() para añadir un nuevo objeto al final de la lista.


//     const response = this.responses[this.userInput.toLowerCase()] || this.responses['default'];
//     //Buscamos las respuestas del bot pasándolas a minúsculas, si no encuentra ninguna "||" que devuelva el default


//     setTimeout(() => { //Lo que responde el bot, aquí simulamos un tiempo de respuesta de 500 milisegundos
//       this.messages.push({text: response, sender: 'bot'}); //Añadimos la respuesta del bot
//       this.updateChat(); //Actualizamos la interfaz para que se vea el resultado
//     }, 500);

//       this.userInput = ''; //Dejamos vacío el campo de la entrada de txt del usuario
//       this.updateChat(); //Actualizamos el chat
//   }
//   updateChat() {
//       const chatBox = document.getElementById('chat-box');//Accedemos al elemento del html al que hemos llamado con la clase chatBox
//       if (chatBox) { //Primero verificamos que existe el elemento
//         chatBox.innerHTML = ''; //Actualizamos el chat de mensajes limpiándolo

//         for (let i = 0; i < this.messages.length; i++) { //En el bucle recorremos la lista de los mensajes y vamos creando un div por cada mensaje y lo agregamos a la interfaz
//           const msg = this.messages[i];

//           const messageDiv = document.createElement('div'); //Creamos un nuevo div para cada mensaje
//           messageDiv.className = msg.sender === 'user' ? 'user-message' : 'bot-message';
//           messageDiv.textContent = msg.text; // Asignamos el texto del mensaje al div

//           chatBox.appendChild(messageDiv); //Agregamos el mensaje del div al contenedor del chat
//         }
//         chatBox.scrollTop = chatBox.scrollHeight; //Hacemos que scrollee hacia arriba (es decir que vaya hacia abajo) para ver siempre el ultimo mensaje
//         }
//       }
//     }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  imports: [FormsModule, CommonModule]
})
export class ChatbotComponent {
  userInput: string = '';
  messages: { text: string, sender: string }[] = [];

  responses: { [key: string]: string } = {
    'hola': '¡Hola!, ¿cómo estás, en qué te ayudo?',
    'cómo estás': 'Soy un súper bot, pero estoy bien',
    'adiós': '¡Nos vemos! Lo que necesites aquí estoy',
    'default': 'No entiendo, ¿puedes repetirlo?'
  };

  sendMessage() {
    if (this.userInput.trim() === '') {
      return;
    }

    // Añadir el mensaje del usuario a la lista de mensajes
    this.messages.push({ text: this.userInput, sender: 'user' });

    const response = this.responses[this.userInput.toLowerCase()] || this.responses['default'];

    // Simulamos la respuesta del bot después de un breve retraso
    setTimeout(() => {
      this.messages.push({ text: response, sender: 'bot' });
    }, 500);

    this.userInput = ''; // Limpiamos el campo de texto después de enviar el mensaje
  }

  updateChat() {
    const chatBox = document.getElementById('chat-box');
    if (chatBox) {
      chatBox.innerHTML = ''; // Limpiamos los mensajes anteriores

      // Añadimos los mensajes en el orden correcto
      for (let i = 0; i < this.messages.length; i++) {
        const msg = this.messages[i];
        const messageDiv = document.createElement('div');
        
        // Asignamos la clase adecuada según si es un mensaje de usuario o de bot
        messageDiv.className = msg.sender === 'user' ? 'user-message' : 'bot-message';
        messageDiv.textContent = msg.text;
        
        chatBox.appendChild(messageDiv); // Agregamos el div al chatBox
      }
      
      chatBox.scrollTop = chatBox.scrollHeight; // Aseguramos que el chat siempre se desplace hacia abajo
    }
  }
}

