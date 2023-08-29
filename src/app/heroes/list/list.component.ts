import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ["Spiderman", "Iron Man", "Hulk", "Thor", "Captain America"]
  public erasedHero?: string

  removeLastHero(): void {
    this.erasedHero = this.heroNames.pop() || ""
  }
}
