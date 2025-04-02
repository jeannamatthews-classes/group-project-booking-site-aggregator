import { Component, OnInit } from '@angular/core';
import { MessageService, Message } from './message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];
  newMessage: Message = { sender: '', text: '', timestamp: '' };

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(): void {
    this.messageService.getMessages().subscribe((data) => {
      this.messages = data;
    });
}
    sendMessage(): void {
        this.newMessage.timestamp = new Date().toISOString();
        this.messageService.sendMessage(this.newMessage).subscribe((message) => {
        this.messages.push(message);
        this.newMessage = { sender: '', text: '', timestamp: '' };
        });
    }
    }