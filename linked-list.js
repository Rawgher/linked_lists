/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if(!this.head) {
      return Error;
    }

    if(this.head == this.tail) {
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--
      return val
    }

    let current = this.head;
    while (current.next != this.tail) {
      current = current.next
    }

    let val = this.tail.val;
    current.next = null;
    this.tail = current;
    this.length--
    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if(!this.head) {
      return Error;
    }

    let val = this.head.val;

    if(this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next
    }

    this.length--
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return Error
    }

    let current = this.head;
    let count = 0;

    while (count < idx) {
      current = current.next;
      count++
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      return Error
    }

    let current = this.head;
    let count = 0;

    while (count < idx) {
      current = current.next;
      count++
    }

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      return Error
    }

    let newNode = new Node(val);

    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) {
        this.tail = newNode;
      }
    } else {
      let current = this.head;
      let prev = null;
      let count = 0;

      while (count < idx) {
        prev = current;
        current = current.next;
        count++;
      }

      newNode.next = current;
      prev.next = newNode;

      if (idx === this.length) {
        this.tail = newNode;
      }
    }
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return Error
    }

    if(this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      let prev = null;
      let count = 0;

      while (count < idx) {
        prev = current;
        current = current.next;
        count++;
      }

      prev.next = current.next
      current.head = prev

      if (idx === this.length) {
        this.tail = newNode;
      }
    }
    this.length--;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length == 0) {
      return 0
    } else {
      let current = this.head;
      let total = 0;

      while (current) {
        total += current.val;
        current = current.next;
      }

      let avg = total/this.length;
      return avg;
    }
  }
}

module.exports = LinkedList;