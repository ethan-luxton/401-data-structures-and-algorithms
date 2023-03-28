const leftJoin = require('./c33_hashmapLeftJoin');
const Hashtable = require('../hashtable/c30_hashtable');

describe('Left Join Algorithm', () => {
    test('Test interesting case where antonym hash table is missing two', () => {
      const synonym = new Hashtable();
      const antonym = new Hashtable();
      synonym.set('diligent', 'employed');
      synonym.set('fond', 'enamored');
      synonym.set('guide', 'usher');
      synonym.set('outfit', 'garb');
      synonym.set('wrath', 'anger');
      antonym.set('diligent', 'idle');
      antonym.set('fond', 'averse');
      antonym.set('guide', 'follow');
      antonym.set('flow', 'jam');
      expect(leftJoin(synonym, antonym)).toStrictEqual([
        [ 'guide', 'usher', 'follow' ],
        [ 'outfit', 'garb', null ],
        [ 'fond', 'enamored', 'averse' ],
        [ 'diligent', 'employed', 'idle' ],
        [ 'wrath', 'anger', null ]
      ]);
    });
    test('Tests simple case where synonyms has two values and antonyms has one value', () => {
        const synonym = new Hashtable();
        const antonym = new Hashtable();
        synonym.set('quarrelsome', 'cranky');
        synonym.set('forthright', 'blunt');
        antonym.set('quarrelsome', 'cheerful');
        expect(leftJoin(synonym, antonym)).toStrictEqual([
            ['forthright', 'blunt', null],
            ['quarrelsome', 'cranky', 'cheerful']
        ]);
    });
    test('Tests empty case', () => {
        const synonym = new Hashtable();
        const antonym = new Hashtable();
        expect(leftJoin(synonym, antonym)).toStrictEqual([]);
    });
  });