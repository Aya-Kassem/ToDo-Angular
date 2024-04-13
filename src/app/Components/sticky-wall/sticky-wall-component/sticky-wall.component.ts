import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { NavService } from 'src/app/Services/nav.service';

@Component({
    selector: 'app-sticky-wall',
    templateUrl: './sticky-wall.component.html',
    styleUrls: ['./sticky-wall.component.scss']
})
export class StickyWallComponent {
    constructor(private _NavService: NavService) {
        this.spanElement = document.createElement('span');
    }

    allNotes: { noteBody: string }[] = [];
    selectedText!: string;
    selectedElement!: HTMLElement;
    rangeAt!: Range | null;
    header!: string;
    body!: string;
    spanElement!: HTMLSpanElement;
    noteIndex!: number | null;
    ConfirmMsg!: string;
    NoteActionReq: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    changesApplied: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    notification: string = 'notification';
    success!: string;
    toastResponse!: boolean;

    noteForm = new FormGroup({
        noteBody: new FormControl('', Validators.required)
    })

    ngOnInit(): void {
        this._NavService.getNotes().subscribe(notes => {
            this.allNotes = notes ? JSON.parse(notes) : []
        })
    }

    editNote(i: number) {
        let note = document.querySelector(`[note="noteBody-${i}"]`) as HTMLDivElement;
        let editNote = this.allNotes[i];
        this.noteIndex = i;
        editNote.noteBody = note.innerHTML;
        this._NavService.setNotes(JSON.stringify(this.allNotes));
        this.hideSpinner(i)
    }

    deleteNote(i: number) {
        this.noteIndex = i;
        this.ConfirmMsg = 'Are You Sure You Want to Delete This Note?!';
        this.NoteActionReq.next(true);
    }

    createNote() {
        this.getUserText();
        const noteBody: string = this.noteForm.value.noteBody!;
        let editNote;

        if (this.noteIndex != null) {
            editNote = this.allNotes[this.noteIndex];
        }

        if (noteBody && editNote) {
            editNote.noteBody = noteBody;
        }

        if (noteBody && !editNote) {
            this.allNotes.push({ noteBody });
        }

        this._NavService.setNotes(JSON.stringify(this.allNotes))
        this.noteForm.reset();
        this.noteIndex = null;
    }

    confirmAction(response: boolean) {
        this.NoteActionReq.next(false)
        if (response) {
            this.success = 'Note Deleted Successfully';
            this.allNotes.splice(this.noteIndex!, 1);
            this._NavService.setNotes(JSON.stringify(this.allNotes))
            this.changesApplied.next(true);
        }
    }

    toastClosed(val: boolean) {
        if (val) this.changesApplied.next(false);
        this.noteIndex = null
    }

    getUserText() {
        let description = document.querySelector('.description') as HTMLDivElement;
        this.noteForm.controls['noteBody'].setValue(description.innerHTML);
    }

    saveNoteChanges(i: number) {
        setTimeout(() => this.editNote(i), 1500);
    }

    showSpinner(i: number) {
        let check = document.querySelector(`[id="check-${i}"]`) as HTMLElement;
        check.classList.add('d-none');
        let spinner = document.querySelector(`[id="spinner-${i}"]`) as HTMLDivElement;
        spinner.classList.remove('d-none');
        this.saveNoteChanges(i)
    }

    hideSpinner(i: number) {
        let spinner = document.querySelector(`[id="spinner-${i}"]`) as HTMLDivElement;
        let check = document.querySelector(`[id="check-${i}"]`) as HTMLElement;
        check.classList.remove('d-none');
        spinner.classList.add('d-none');
    }
}
