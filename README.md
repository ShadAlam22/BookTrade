# 📚 BookTrade — Online Bookstore E-commerce Website

A fully functional e-commerce web platform that allows users to browse, purchase, and order books online. Built with HTML, CSS, and JavaScript, powered by Google Firebase for backend services.

---

## 🚀 Live Features

- 🔐 **User Authentication** — Register and log in securely using Firebase Authentication (email/password)
- 📖 **Book Listings** — Browse available books with title, price, category, and cover image
- 🛒 **Shopping Cart** — Add/remove books, auto-calculated total with ₹100 delivery charge
- 📦 **Order Placement** — Fill in delivery details and upload a payment screenshot to complete an order
- 📬 **Contact Form** — Submit queries/messages stored directly in Firebase Realtime Database
- 👥 **About Page** — Meet the development team
- 🔑 **Password Reset** — Forgot password flow via Firebase email reset
- 📤 **Admin Upload Page** — Upload new book listings (title, image, price, category) to Firebase

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, JavaScript (ES6) |
| Authentication | Firebase Authentication |
| Database | Firebase Realtime Database |
| File Storage | Firebase Storage |
| Icons | Font Awesome 5 |

---

## 📁 Project Structure

```
BookTrade/
│
├── css/
│   ├── style.css           # Global styles (home, about, contact)
│   ├── login.css           # Login & register page styles
│   └── product_style.css   # Products, gallery & cart styles
│
├── js/
│   └── index.js            # Firebase initialization
│
├── images/                 # Logo, team photos, background images
│
├── index.html              # Home page with hero section & contact form
├── products.html           # Book gallery with cart & order flow
├── login.html              # User login page
├── Register.html           # User registration page
├── About.html              # About us & team page
└── upload.html             # Admin: upload new book listings
```

---

## ⚙️ Setup & Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge)
- A Firebase project (free tier works)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/booktrade.git
   cd booktrade
   ```

2. **Configure Firebase**

   Replace the Firebase config object in each HTML file with your own project credentials from the [Firebase Console](https://console.firebase.google.com/):
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

3. **Enable Firebase Services**

   In your Firebase Console, enable:
   - ✅ Authentication → Email/Password
   - ✅ Realtime Database
   - ✅ Storage

4. **Open the project**

   Simply open `index.html` in your browser — no build step required.

---

## 🔒 Firebase Security Rules

Make sure to configure proper Realtime Database and Storage security rules before deploying. Example for authenticated writes:

```json
{
  "rules": {
    ".read": true,
    ".write": "auth != null"
  }
}
```

---

## 📸 How Ordering Works

1. User browses books on the **Products** page
2. Adds desired books to the shopping cart
3. Clicks **Buy Now** and fills in name, email, phone, and address
4. Uploads a **screenshot of payment** (UPI/bank transfer)
5. Order details + payment screenshot URL are saved to Firebase
6. User receives a unique **Order ID** on confirmation

---




---

## 📄 License

This project was developed as an academic project. Feel free to use it for learning purposes.
