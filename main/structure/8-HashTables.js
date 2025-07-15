class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    //index finder for specific keys, each key gives the same but unique values everytime
    let total = 0;
    const PRIME_NUMBER = 31;

    for(let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96 //to get the alphabetical number
      total = (total * PRIME_NUMBER + value) % this.keyMap.length;
    }

    return total;
  }
  set(key, value) {
    // multiple items can be stored in the same index
    const index = this._hash(key);
    if(!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    const index = this._hash(key);
    if(this.keyMap[index]) {
      for(let i; i < this.keyMap[index].length; i++) {
        //find the key and return its corresponding value
        if(this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
      }
    }
    return undefined;
  }
  values() {
    const valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for(let j = 0; j < this.keyMap[i].length; j++) {
          if(!valuesArr.includes(this.keyMap[i][j][1])) valuesArr.push(this.keyMap[i][j][1])
        }
      }
    }
    return valuesArr;
  }
  keys() {
    const keysArr = [];
    for(let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for(let j = 0; j < this.keyMap[i].length; j++) {
          if(!keysArr.includes(this.keyMap[i][j][0])) keysArr.push(this.keyMap[i][j][0])
        }
      }
    }
    return keysArr;
  }
}