import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor() {}

  note: number = 0;

  pushNote(Note: number) {
    this.note = Note;
  }

  getNote(): number {
    return this.note;
  }
}
