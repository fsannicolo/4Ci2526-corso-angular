import { ClasseScolastica } from './classe-scolastica';

describe('ClasseScolastica', () => {
  it('should create an instance', () => {
    expect(new ClasseScolastica('4Ci', '2025-2026')).toBeTruthy();
  });
});
