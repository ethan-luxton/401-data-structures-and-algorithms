const  repeatedWord  = require('./c31_hashmap-repeated-word')

describe('Hashmap Repeated Word', () => {
    test('Simple test case', () => {
        const input = "Once upon a time, there was a brave princess who...";
        const output = "a";
        expect(repeatedWord(input)).toBe(output);
      });
      
      test('Long test case', () => {
        const input = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
        const output = "it";
        expect(repeatedWord(input)).toBe(output);
      });
      
      test('Interesting test case', () => {
        const input = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
        const output = "summer";
        expect(repeatedWord(input)).toBe(output);
      });
      test('Empty test case', () => {
        const input = "";
        const output = null;
        expect(repeatedWord(input)).toBe(output);
      });
      test('No repeated word test case', () => {
        const input = "Hello world!";
        const output = null;
        expect(repeatedWord(input)).toBe(output);
      });
      test('Smallest test case', () => {
        const input = "Hello world! Awesome world!";
        const output = "world";
        expect(repeatedWord(input)).toBe(output);
      });    
})

