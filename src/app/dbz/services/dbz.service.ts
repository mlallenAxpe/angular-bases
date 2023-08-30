import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

console.log(uuid())

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {name: 'Krillin', power: 1000, id: uuid()},
    {name: 'Goku', power: 10000, id: uuid()},
    {name: 'Vegeta', power: 7000, id: uuid()}
  ]
  addCharacter(char: Character): void {
    const newChar: Character = {...char, id: uuid()}
    this.characters.push(newChar)
  }
  onDeleteCharacter(index: number): void {
    this.characters.splice(index,1)
  }
  deleteCharacterById(id: string) {
    this.characters = this.characters.filter( c => c.id != id)
  }
  constructor() { }
}
