function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function reverseList(head) {
  let curr = null;

  while (head !== null) {
    let next = head.next;
    head.next = curr;
    curr = head;
    head = next;
  }

  return curr;
}
