import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: uuid(),
    name: '',
    power: 0
  }

  emitCharacter():void {
    if (this.character.name.length === 0) return;

    let currentCharacter: Character = {
      id: this.character.id,
      name: this.character.name,
      power: this.character.power
    }

    this.onNewCharacter.emit(currentCharacter);

    this.character.name = '';
    this.character.power = 0;
  }
}
