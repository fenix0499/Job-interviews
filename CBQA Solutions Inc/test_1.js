class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

let myString = "";

const linkedList = (list) => {
  let myList = list;
  while (myList != null || myList != undefined) {
    if (!myList) myString += "null";
    myString += `${myList.data} -> `;
    myList = myList.next;
  }

  myString += "null";

  return myString;
};

const list = new Node(1, new Node(2, new Node(3)));
const list2 = new Node(
  65,
  new Node(
    1265,
    new Node(
      36453,
      new Node(4, new Node(52, new Node(48, new Node(7538291, new Node(163)))))
    )
  )
);

console.log(linkedList(list));
console.log(linkedList(list2));



