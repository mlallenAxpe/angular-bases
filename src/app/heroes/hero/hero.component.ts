import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = "spiderman"
  public age: number = 25

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }
  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(name: string = "ironman"):void {
    this.name = name
  }
  changeAge(age: number = 40):void {
    this.age = age
  }
  resetForm(): void {
    this.name = "spiderman"
    this.age = 25
    document.querySelectorAll("h1").forEach(e => e.innerHTML = '<h1>Desde Angular</h1>')
  }
}
