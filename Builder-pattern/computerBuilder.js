import Computer from './computer.js';

class ComputerBuilder {
    constructor() {
        this.computer = new Computer();
    }

    setProcessor(processor) {
        this.computer.processor = processor;
        return this;
    }

    setRAM(ram) {
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage) {
        this.computer.storage = storage;
        return this;
    }

    setGraphics(graphics) {
        this.computer.graphics = graphics;
        return this;
    }

    build() {
        return this.computer;
    }
}

export default ComputerBuilder;
