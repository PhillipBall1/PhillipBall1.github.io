import { CartItem } from "./cart-item.model";
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/**
 * Defines the schema for the User model in the database.
 * This includes fields for username, password, admin status, and the user's cart.
 */
const userSchema = new mongoose.Schema({
  // Username field, must be unique and is required
  username: { type: String, required: true, unique: true },

  // User's password, required for authentication
  password: { type: String, required: true },

  // Boolean indicating if the user has administrative privileges
  admin: { type: Boolean, required: true },

  // Array of cart items, each item includes plantId, name, quantity, and price
  cart: [
    {
      plantId: mongoose.Schema.Types.ObjectId, // Reference to the plant's ID
      name: String,                           // Name of the plant
      quantity: { type: Number, required: true, min: 1 }, // Quantity, must be at least 1
      price: { type: Number, required: true } // Price of the plant
    }
  ]
});

/**
 * Pre-save middleware for the User schema.
 * This middleware automatically hashes the user's password before saving it to the database.
 */
userSchema.pre('save', async function (next: () => void) {
  // Check if the password field is modified to avoid rehashing the already hashed password
  if (userSchema.isModified('password')) {
    userSchema.password = await bcrypt.hash(userSchema.password, 10); // Hashing the password with bcrypt
  }
  next(); // Proceed to the next middleware or save the document
});

// Exporting the model
module.exports = mongoose.model('User', userSchema);

// TypeScript interface for the User model
export interface User {
  _id: string;       // Unique identifier for the user
  username: string;  // Username of the user
  admin: boolean;    // Admin status of the user
  cart: CartItem[];  // User's shopping cart, containing an array of CartItem objects
}
