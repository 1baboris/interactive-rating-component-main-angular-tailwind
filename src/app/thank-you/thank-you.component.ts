import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.css',
})
export class ThankYouComponent {
  constructor(private NoteServie: NoteService) {}

  Note = this.NoteServie.getNote();
}
