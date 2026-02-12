
import processItem from "./processitem.js";
import deleteFile from "./deletefile.js";
import { rootDir } from '../../root.js'

export class TestQueue {

    constructor() {
        this.top = null;
        this.bottom = null;
    }

    addNode(data) {
        let temp = new TestNode(data);
        if (this.bottom == null) {
            this.top = temp;
            this.bottom = temp;
            console.log("a new node added: " + data);
            this.startProcessing()
        }
        else {
            this.bottom.previous = temp;
            temp.next = this.bottom;
            this.bottom = temp;
            console.log("a new node added: " + data);
        }

    }
    deleteNode() {
        if (this.checkIsEmpty()) {
            console.log("Queue is empty. Cannot delete node");
        }
        else if (this.top.previous == null) {
            let data = this.top.data
            this.top = null;
            this.bottom = null;
            console.log("a node deleted: " + data);
        }
        else {
            let data = this.top.data
            let temp = this.top.previous;
            temp.next = null;
            this.top = temp;
            console.log("a node deleted: " + data);
        }
    }

    displayNode() {
        if (this.checkIsEmpty()) {
            console.log("Queue is empty");
        }
        else {
            console.log("queue:");
            let temp = this.bottom
            while (temp != null) {
                console.log(temp.data);
                temp = temp.next;
            }
        }
    }

    async startProcessing() {
        if (this.checkIsEmpty()) {
            return
        }
        await processItem(this.top.data)
        deleteFile(rootDir + '\\uploads\\input\\' + this.top.data + '.mp3');
        this.deleteNode()
        this.startProcessing()
    }

    checkIsEmpty() {
        return (this.bottom == null);
    }
}

class TestNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}
