import { HashMap } from "./project-hashmap.js";

const testHashMap = new HashMap();
testHashMap.set("apple", "red");
testHashMap.set("banana", "yellow");
testHashMap.set("carrot", "orange");
testHashMap.set("dog", "brown");
testHashMap.set("elephant", "gray");
testHashMap.set("frog", "green");
testHashMap.set("grape", "purple");
testHashMap.set("hat", "black");
testHashMap.set("ice cream", "white");
testHashMap.set("jacket", "blue");
testHashMap.set("kite", "pink");
testHashMap.set("lion", "golden");

console.log(testHashMap);

// Overite Dog color from brown to green
console.log(testHashMap.get("dog")); // this will get "brown"
testHashMap.set("dog", "green"); // this will change the color from brown to green
console.log(testHashMap.get("dog")); // this will get "green" now.
console.log(testHashMap.length);

// Test HashMap that have elements exceed the Load Factor
testHashMap.set("moon", "silver");
console.log(testHashMap);
