function LinkedList(value, next){
  this.value = value || undefined;
  this.next = next || null;
}

const node1 = new LinkedList(4);
const node2 = new LinkedList(2);
const node3 = new LinkedList(1);
const node4 = new LinkedList(3);
node1.next = node2;
node2.next = node3;
node3.next = node4;

function sort(head){
  let count=0;
  let tail = head.next;
  while(tail !== null){
    count++;
    tail = tail.next;
  }
  let newHead = head;
  let pointer = newHead.next;
  while(newHead !== null) {
    while(pointer !== null) {
      if(newHead.value > pointer.value) {
        let temp = newHead.value;
        newHead.value = pointer.value;
        pointer.value = temp;
      }
      pointer = pointer.next;
    }
    if(newHead.next == null)
    { return } else {
    newHead = newHead.next;
    }
    pointer = newHead.next;
  }
  console.log(newHead);
}
sort(node1);
