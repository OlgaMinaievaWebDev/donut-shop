# Donut Shop

# Crispy Rings Donut Shop 🍩

Welcome to **Crispy Rings**, a React-based e-commerce application for a donut shop! This project allows users to browse delicious donuts, add them to a shopping cart, and manage their cart items. It's a great example of a modern, responsive web application built with React and Tailwind CSS.

## Features 🌟

- **Product Listing**: Browse a variety of donuts with details like name, price, and description.
- **Shopping Cart**: Add products to the cart, update quantities, and view the total price.
- **Cart Modal**: A modal displays the cart items and allows users to adjust quantities or proceed to checkout.
- **Responsive Design**: The application is designed to work seamlessly on both mobile and desktop devices.

## Technologies Used 🛠️

- **React**: The core library used for building the user interface.
- **React Context API**: For state management, specifically for managing the shopping cart state across components.
- **Tailwind CSS**: A utility-first CSS framework used for styling the components.
- **ReactDOM**: Used for rendering the cart modal outside the main DOM tree using `ReactDOM.createPortal`.

## Project Structure 📂

- **`Cart.jsx`**: Displays the items in the cart, allows users to update quantities, and shows the total price.
- **`CartModal.jsx`**: A modal that shows the cart items and provides options to update quantities or close the modal.
- **`Product.jsx`**: Represents a single product with an image, title, price, description, and an "Add to Cart" button.
- **`Button.jsx`**: A reusable button component with consistent styling.
- **`Header.jsx`**: The header of the application, which includes the logo, shop name, and a button to open the cart.
- **`Shop.jsx`**: The main page that displays the product grid and a banner image.

What I Learned 📚
React Basics: Creating and managing components, passing props, and handling events.

State Management with Context API: Using React's Context API to manage global state (like the shopping cart) and share it across different components.

Component Composition: Breaking down the UI into smaller, reusable components.

React Portals: Using ReactDOM.createPortal to render components outside the main DOM hierarchy, which is useful for modals.

Tailwind CSS: Using Tailwind CSS for styling, including responsive design and utility classes.

Event Handling: Handling user interactions like adding items to the cart, updating quantities, and opening/closing modals.
