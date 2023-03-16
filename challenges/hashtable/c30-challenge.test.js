const Hashtable = require('./c30_hashtable'); // Assuming the Hashtable implementation is in a file named 'Hashtable.js'

describe('Hashtable', () => {
  test('Setting a key/value results in the value being in the data structure', () => {
    const ht = new Hashtable();
    ht.set('apple', 'red');
    expect(ht.get('apple')).toBe('red');
  });

  test('Retrieving based on a key returns the value stored', () => {
    const ht = new Hashtable();
    ht.set('banana', 'yellow');
    expect(ht.get('banana')).toBe('yellow');
  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    const ht = new Hashtable();
    expect(ht.get('not-exist')).toBeUndefined();
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    const ht = new Hashtable();
    ht.set('apple', 'red');
    ht.set('banana', 'yellow');
    ht.set('orange', 'orange');
    const keys = ht.keys();
    expect(keys).toEqual(expect.arrayContaining(['apple', 'banana', 'orange']));
    expect(keys.length).toBe(3);
  });

  test('Successfully handle a collision within the hashtable', () => {
    const ht = new Hashtable(1); // Force collisions
    ht.set('apple', 'red');
    ht.set('banana', 'yellow');
    expect(ht.get('apple')).toBe('red');
    expect(ht.get('banana')).toBe('yellow');
  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const ht = new Hashtable(1); // Force collisions
    ht.set('apple', 'red');
    ht.set('banana', 'yellow');
    expect(ht.get('apple')).toBe('red');
  });

  test('Successfully hash a key to an in-range value', () => {
    const ht = new Hashtable(10);
    const index = ht.hash('test-key');
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThanOrEqual(9);
  });
});
