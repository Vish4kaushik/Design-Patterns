class Stock {
    constructor(symbol, price) {
        this.symbol = symbol;
        this.price = price;
        this.observers = [];
    }

    // Add an observer
    subscribe(observer) {
        this.observers.push(observer);
    }

    // Remove an observer
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Notify all observers about the price change
    notify() {
        this.observers.forEach(observer => observer.update(this));
    }

    // Change the stock price and notify observers
    setPrice(newPrice) {
        this.price = newPrice;
        this.notify();
    }
}

export default Stock;
