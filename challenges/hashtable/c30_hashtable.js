class Hashtable {
    constructor(size = 53) {
      this.keyMap = new Array(size);
    }
  
    hash(key) {
      let total = 0;
      const PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        const char = key[i];
        const value = char.charCodeAt(0) - 96;
        total = (total * PRIME + value) % this.keyMap.length;
      }
      return total;
    }
  
    set(key, value) {
      const index = this.hash(key);
      if (!this.keyMap[index]) {
        this.keyMap[index] = [];
      }
      const keyValuePair = this.keyMap[index].find(pair => pair[0] === key);
      if (keyValuePair) {
        keyValuePair[1] = value;
      } else {
        this.keyMap[index].push([key, value]);
      }
    }
  
    get(key) {
      const index = this.hash(key);
      if (this.keyMap[index]) {
        const keyValuePair = this.keyMap[index].find(pair => pair[0] === key);
        if (keyValuePair) {
          return keyValuePair[1];
        }
      }
      return undefined;
    }
  
    has(key) {
      const index = this.hash(key);
      if (this.keyMap[index]) {
        return this.keyMap[index].some(pair => pair[0] === key);
      }
      return false;
    }
  
    keys() {
      const keysArr = [];
      for (const bucket of this.keyMap) {
        if (bucket) {
          for (const pair of bucket) {
            keysArr.push(pair[0]);
          }
        }
      }
      return keysArr;
    }
  }

 module.exports = Hashtable;
  