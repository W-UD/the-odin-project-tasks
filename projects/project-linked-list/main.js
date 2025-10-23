import { LinkedList } from "./linked-list.js";
// Testing:
const list = new LinkedList();

list.appendData("dog");
list.appendData("cat");
list.appendData("parrot");
list.appendData("hamster");
list.appendData("snake");
list.appendData("turtle");

console.log(list.toString());

list.removeAt(2);
console.log(list.toString());
