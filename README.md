# KN SHOP - Modern E-Commerce Web Application

**KN SHOP** is a modern, responsive, full-featured e-commerce web application built using vanilla HTML5, CSS3, modern JavaScript (ES Modules), and Google Firebase (Authentication & Cloud Firestore).

---

## 🌟 Features

### 🛍️ Shopping & Catalog Experience
- **Interactive Product Catalog**: Browse products dynamically loaded in real-time from Cloud Firestore.
- **Category Filtering**: Explore products grouped by category (`category.html`).
- **Real-Time Product Search**: Instant, query-based product search filter (`search.html`).
- **Product Details Page**: Rich product views displaying pricing, description, stock status, ratings, and image previews (`product.html`).
- **Persistent Cart & Wishlist**: Fast, synchronized local shopping cart and wishlist management.

### 🔐 Authentication & User Account
- **Multiple Auth Methods**:
  - Email & Password registration and login
  - Google Sign-In with popup
  - Phone OTP Authentication (via Firebase RecaptchaVerifier)
- **Email Verification**: Supports sending and resending verification emails.
- **User Dashboard & Profile**: Manage profile info, view account status, and save shipping addresses (`profile.html`, `address.html`).
- **Anti-Flicker Session Caching**: Instant navbar synchronization using cached sessions for zero UI flickering.

### 💳 Checkout, Coupons & Order Flow
- **Saved Addresses**: Manage and choose delivery addresses seamlessly.
- **Coupon & Discount Engine**: Apply discount promo codes (e.g., `NEW10OFF`, `SMART150`, `FREESHIP`).
- **Order Placement**: Place orders and store transaction details, billing info, and items into Firestore.
- **Order History & Tracking**: View past orders, statuses, and purchase dates (`orders.html`).

---

## 📁 Project Structure

```text
com-main/
│
├── css/
│   ├── dashboard.css          # Styles for user profile, orders, and addresses
│   └── style.css              # Main site stylesheet, navbar, cart, grid, and themes
│
├── js/
│   ├── address.js             # Delivery address management logic
│   ├── app.js                 # Core application controller (auth, cart drawer, modals)
│   ├── auth-pages.js          # Standalone authentication logic for login/signup
│   ├── category.js            # Category filtering and rendering logic
│   ├── orders.js              # Order history display & tracking
│   ├── payment.js             # Checkout calculation, coupons, and order placement
│   ├── product.js             # Dynamic product details page logic
│   ├── search.js              # Search bar and filtering logic
│   ├── shop.js                # Full collection catalog controller
│   ├── ui-helpers.js          # Shared reusable rendering functions & components
│   └── wishlist.js            # User wishlist controller
│
├── address.html               # Manage shipping addresses
├── category.html              # Products by category page
├── coupons.html               # Available offers and promo codes
├── firebase.js                # Firebase SDK initialization (Auth & Firestore)
├── firebase.json              # Firebase CLI deployment configuration
├── firestore.indexes.json     # Firestore database indexing definitions
├── firestore.rules            # Firestore security rules
├── index.html                 # Main landing page & storefront
├── orders.html                # Order history page
├── payment.html               # Checkout, order summary & payment page
├── product.html               # Product detail page
├── profile.html               # User profile & account dashboard
├── search.html                # Product search results page
├── shop.html                  # Full store catalog page
├── signup.html                # User registration & authentication page
├── wishlist.html              # User saved items page
└── README.md                  # Project documentation
```

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Modern CSS3 (CSS Grid & Flexbox), Vanilla JavaScript (ES6+ Modules)
- **Icons & Typography**: [FontAwesome 6](https://fontawesome.com/), Google Fonts (`Playfair Display`, `Inter`)
- **Backend / BaaS**: [Firebase](https://firebase.google.com/)
  - **Firebase Authentication**: Email/Password, Google OAuth, Phone OTP
  - **Cloud Firestore**: Real-time NoSQL database for products and orders
  - **Firebase Analytics**: Web measurement and analytics

---

## 🚀 Getting Started

### 1. Prerequisites
You only need a modern web browser and a local HTTP server (ES Modules require an HTTP/HTTPS origin, not direct `file://` execution).

### 2. Run Locally

You can serve the directory using any static web server:

**Using VS Code Live Server:**
1. Open the project folder in VS Code.
2. Right click on `index.html` and select **"Open with Live Server"**.

**Using Python:**
```bash
# Python 3.x
python -m http.server 8000
```
Open `http://localhost:8000` in your browser.

**Using Node.js (npx serve):**
```bash
npx serve .
```

---

## 🔥 Firebase Setup

1. Create a Firebase project at the [Firebase Console](https://console.firebase.google.com/).
2. Enable **Firestore Database** and **Firebase Authentication** (Email/Password, Google, and Phone).
3. Update `firebase.js` with your Firebase project configuration credentials:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```
4. Deploy Firestore rules and indexes using the Firebase CLI:
   ```bash
   firebase deploy --only firestore
   ```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
