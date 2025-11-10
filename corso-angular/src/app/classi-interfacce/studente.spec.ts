import { Studente } from './studente';

describe('Studente', () => {
  it('should create an instance', () => {
    expect(new Studente(1, 'Federico', 'Sannicolo', 'M', '4Ci')).toBeTruthy();
  });
});
