export class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = new Array(capacity).fill(null).map(() => new Array());
    this.size = 0;
  }

  // This code from odin lesson material
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Using for loop for iteration learning
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return this.buckets;
      }
    }

    bucket.push([key, value]);
    this.size += 1;

    if (this.size / this.capacity > 0.75) {
      this.expand(this.capacity * 2);
    }
    return this.buckets;
  }

  expand(newCapacity) {
    const preveiousBuckets = this.buckets;
    this.capacity = newCapacity;
    this.buckets = new Array(this.capacity).fill(null).map(() => new Array());

    preveiousBuckets.forEach((bucket, i, arr) => {
      if (Array.isArray(bucket)) {
        bucket.forEach((bucketItem, subIndex, subArr) => {
          if (subArr[0] !== null) {
            const [key, val] = bucketItem;
            const newIndex = this.hash(key);
            this.buckets[newIndex].push(bucketItem);
          }
        });
      }

      return this;
    });
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (const item of bucket) {
      if (item[0] === key) {
        return item[1];
      }
    }

    return "No Key like your input in the data.";
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (const item of bucket) {
      if (item[0] === key) {
        return true;
      }
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const bucketIndex = bucket.findIndex((item) => item[0] === key);
    if (!bucket) return false;

    if (!(bucketIndex < 0) && this.has(key)) {
      bucket.splice(bucketIndex, 1);
      this.size -= 1;

      return `${key} is now removed`;
    }
    return false;
  }

  get length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.capacity).fill(null).map(() => new Array());
    this.size = 0;
    return this;
  }

  keys() {
    const bucket = this.buckets;
    const keys = bucket.flatMap((item, i, arr) => {
      if (item.length !== 0) {
        return item[0][0];
      }
    });
    const keysFilter = keys.filter((item) => item !== undefined);
    return keysFilter;
  }

  values() {
    const bucket = this.buckets;
    const values = bucket.flatMap((item, i, arr) => {
      if (item.length !== 0) {
        return item[0][1];
      }
    });
    const valuesFilter = values.filter((item) => item !== undefined);
    return valuesFilter;
  }

  entries() {
    const bucket = this.buckets;
    const entries = bucket.filter((item, i, arr) => {
      if (item.length !== 0) {
        return item[0];
      }
    });
    // const entriesFilter = entries.filter((item) => item !== undefined);
    return entries;
  }
}

//Set method test
const theHashMap = new HashMap();
const setValue = theHashMap.set("oke", "okedong");
theHashMap.set("oke", "okeja");
console.log(setValue);

// Get method test
const getKeyValuePair = theHashMap.get("oke");
console.log(getKeyValuePair);

// Has method test
const hasKey = theHashMap.has("oke");
const noKey = theHashMap.has("nokey");
console.log(hasKey, noKey);

// Remove method test
theHashMap.set("one", "eno");
theHashMap.set("two", "owt");
theHashMap.set("three", "eerht");
console.log(theHashMap);
console.log(theHashMap.get("two"));
const removeKeyValue = theHashMap.remove("two");
console.log(removeKeyValue);
console.log(theHashMap);

// Key method test
const keysFilter = theHashMap.keys();
console.log(keysFilter);

// Values method test
const valuesFilter = theHashMap.values();
console.log(valuesFilter);

// Entries method test
const entriesFilter = theHashMap.entries();
console.log(entriesFilter);

// Getter length test
console.log(theHashMap.length);

// Clear method test
theHashMap.clear();
console.log(theHashMap);
