import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  constructor(private noteService: NoteService) {}
  buttonClickedValue: number = 0;
  sendNote() {
    this.noteService.pushNote(this.buttonClickedValue);
  }
}
