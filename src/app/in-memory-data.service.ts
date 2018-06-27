import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [];
    const powers = [];
    return {
      heroes,
      powers
    };
  }
}
