class Computer {
    constructor() {
        this.processor = '';
        this.ram = '';
        this.storage = '';
        this.graphics = 'N/A';
    }

    toString() {
        return `Computer with ${this.processor} processor, ${this.ram} RAM, ${this.storage} storage and ${this.graphics} graphics.`;
    }
}

export default Computer;
