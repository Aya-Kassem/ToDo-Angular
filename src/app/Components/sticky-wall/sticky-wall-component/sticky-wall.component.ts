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

    getSelectedText() {
        let selection = window.getSelection();

        if (selection) {
            this.rangeAt = selection.getRangeAt(0);
            this.selectedText = this.rangeAt.toString();
        }

    }
    
    getElementAndStyle(e: MouseEvent, style: string) {
        let element = e.target as HTMLElement;
        let userStyle, defaultStyle;

        if (style == 'bold') {
            userStyle = 'font-weight: bold';
            defaultStyle = 'font-weight: normal';
        }
        if (style == 'italic') {
            userStyle = 'font-style: italic';
            defaultStyle = 'font-style: normal';
        }

        return { element, userStyle, defaultStyle };
    }
    
    applyStyle(style: string, el: HTMLElement) {
        if (this.selectedText && this.rangeAt && this.spanElement) {
            const clonedSpan = this.spanElement.cloneNode() as HTMLSpanElement;
            clonedSpan.style.cssText = style;
            clonedSpan.textContent = this.selectedText;

            el.classList.add('clicked');
            this.rangeAt.deleteContents();
            this.rangeAt.insertNode(clonedSpan);

            this.selectedText = '';
            this.rangeAt = null;
        }
    }
    
    removeStyle(style: string, el: HTMLElement) {
        if (this.selectedText && this.rangeAt && this.spanElement) {
            const clonedSpan = this.spanElement.cloneNode() as HTMLSpanElement;
            clonedSpan.style.cssText = style;
            clonedSpan.textContent = this.selectedText;

            el.classList.remove('clicked');
            this.rangeAt.deleteContents();
            this.rangeAt.insertNode(clonedSpan);

            this.selectedText = '';
            this.rangeAt = null;
        }
    }

    boldedText(e: MouseEvent) {
        let userSelection = this.getElementAndStyle(e, 'bold');

        userSelection.element.classList.contains('clicked') ?
            this.removeStyle(userSelection.defaultStyle!, userSelection.element) :
            this.applyStyle(userSelection.userStyle!, userSelection.element);

    }

    italicText(e: MouseEvent) {
        let userSelection = this.getElementAndStyle(e, 'italic');

        userSelection.element.classList.contains('clicked') ?
            this.removeStyle(userSelection.defaultStyle!, userSelection.element) :
            this.applyStyle(userSelection.userStyle!, userSelection.element);
    }

    editNote(i: number) {
        let editNote = this.allNotes[i];
        this.noteIndex = i;
        this.noteForm.controls['noteBody'].setValue(editNote.noteBody)
    }

    deleteNote(i: number) {
        this.noteIndex = i;
        this.ConfirmMsg = 'Are You Sure You Want to Delete This Note?!';
        this.NoteActionReq.next(true);
    }

    onSubmit() {
        const noteBody: string = this.noteForm.value.noteBody!;
        let editNote;

        if(this.noteIndex != null){
            editNote = this.allNotes[this.noteIndex];
        }

        if (noteBody && editNote) {
            editNote.noteBody = noteBody;
        }
        if (noteBody && !editNote) {
            this.allNotes.push({  noteBody });
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

    toastClosed(val: boolean){      
        if(val) this.changesApplied.next(false);
        this.noteIndex = null
    }

}
