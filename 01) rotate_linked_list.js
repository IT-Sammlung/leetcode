/*Given a linked list, rotate the list to the right by k places, where k is non-negative.
Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL

* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }


* @param {ListNode} head
* @param {number} k
* @return {ListNode}
*/

function ListNode(val, next) {
 this.val = (val===undefined ? 0 : val)
 this.next = (next===undefined ? null : next)
}

const node1 = new ListNode(1); // <-- Head
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;


var rotateRight = function(head, k) {
let l = 1; // <-- Länge
let tail = head;
while(tail.next != null) { // <-- Länge berechnen
  l++;
  tail = tail.next;
} // <-- Länge berechnen fertig



let j = l-k; // <-- Neuer Tail
tail.next = head;
let newTail = tail;
while(j-- > 0) {
  newTail = newTail.next
}
let newHead = newTail.next;
newTail.next = null;
console.log(newHead);
return newHead;
};


rotateRight(node1, 2);
