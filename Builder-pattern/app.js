import ComputerBuilder from './computerBuilder.js';

const normalComputer = new ComputerBuilder()
    .setProcessor('Intel Core i5')
    .setRAM('8GB')
    .setStorage('512GB SSD')
    .build();


const gamingComputer = new ComputerBuilder() // adding setGraphics step for gaming computer
    .setProcessor('Intel Core i7')
    .setRAM('16GB')
    .setStorage('1TB SSD')
    .setGraphics('NVIDIA® GeForce RTX™ 4050, 6 GB GDDR6')
    .build();


console.log("Normal Config", normalComputer);
console.log("Gaming Config", gamingComputer);