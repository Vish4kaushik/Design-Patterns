class User {
    constructor(name) {
        this.name = name;
    }

    // The update method is called when the subject changes
    update(stock) {
        console.log(`${this.name} notified: ${stock.symbol} is now ${stock.price}`);
    }
}

export default User;
