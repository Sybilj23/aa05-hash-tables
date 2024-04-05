class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }

  insert(key, value) {
    const index = this.hashMod(key);

    let curr = this.data[index];
    while (curr && curr.key !== key) {
      curr = curr.next;
    }

    if (curr) {
      curr.value = value;
    } else {
      const newPair = new KeyValuePair(key, value);

      if (!this.data[index]) {
        this.data[index] = newPair;
      } else {
        newPair.next = this.data[index];
        this.data[index] = newPair;
      }
      this.count++;
    }
  }

  read(key) {
  if(this.data[index] === new KeyValuePair(key)){
    return this.data[index]
  }else{
   return  undefined
  }
  }

  resize() {
    // Your code here
  }

  delete(key) {
    // Your code here
  }
}

module.exports = HashTable;
//test
