import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatbotComponent } from './chatbot/chatbot.component';

@Component({
  selector: 'app-root',
  standalone: true,  // ✔️ Esto activa el modo standalone
  imports: [FormsModule, ChatbotComponent],  // ✔️ Importamos el componente del chatbot
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatbot2.0';
}
