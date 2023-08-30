import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: "Mr. Satan", power: 1, id: ""
  }]
  @Output()
  onDelete: EventEmitter<string> = new EventEmitter()
  //onDelete: EventEmitter<number> = new EventEmitter()

  onDeleteCharacter(id: string): void {
    if(!id) return
    this.onDelete.emit(id)
  }

  /* onDeleteCharacter(index: number):void {
    this.onDelete.emit(index)
  } */
}
