import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  } // Stub

  // Simulate Slow Server
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 5000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
