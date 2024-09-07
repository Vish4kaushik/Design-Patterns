import Stock from './Stock.js';
import User from './User.js';

// Create the subject (stock)
const bankNifty = new Stock('Nifty Bank', 50580);

// Create observers (users)
const user1 = new User('Vishal Kaushik');
const user2 = new User('Himanshu Mishra');

// Subscribe the users to the stock so when price change, it notify subscribers
bankNifty.subscribe(user1);
bankNifty.subscribe(user2);

// stock price change
bankNifty.setPrice(50620);
// Output:
// Vishal Kaushik notified: Nifty Bank is now 50620
// Himanshu Mishra notified: Nifty Bank is now 50620


bankNifty.unsubscribe(user1); // Vishal kaushik unsubscribed due to heavy loss :(

// stock price change again
bankNifty.setPrice(50400);
// Output:
// Himanshu Mishra notified: Nifty Bank is now 50400
