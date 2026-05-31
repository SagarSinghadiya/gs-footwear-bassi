<div align="center">
  <img width="1200" height="475" alt="GS Footwear Bassi Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 👟 GS Footwear Bassi

A beautiful, premium, and fully responsive Single Page Application (SPA) with a dedicated **Store Catalog** and **Admin Dashboard** designed for **GS Footwear Bassi** in Bassi, Jaipur.

---

## ✨ Features

### 🏪 Store Catalog (`/categories`)
* **Dynamic Category Filters**: Instantly switch between Sports/Running, Sneakers, Formal Shoes, Slippers, Casual Boots, Kids' Shoes, and more with a responsive desktop sidebar or horizontal mobile scrollbar.
* **Real-time Keyword Search**: Type in the brand or style name to instantly filter items.
* **Interactive Whatsapp Ordering**: One-click to buy/reserve shoes. The link automatically pre-fills a customized text message with the shoe's name, brand, and exact price!
* **Skeleton Loaders & Empty State Handling**: High-quality skeleton loading blocks and clean search-reset states for a modern, fluid user experience.

### 💻 Admin Control Panel (`/admin`)
* **Real-time Product Add & Delete**: Instantly manage active inventory.
* **Shoe Price (₹) Field**: Admin is required to specify a price when uploading new stock.
* **Smart Base64 Image Compression**: Selected images are automatically resized and compressed under 500px at a custom canvas quality (under 800KB) and stored directly in Firestore, allowing the app to run completely **free** on the Firebase Spark Plan.

### 🎨 Design & Polish
* **WhatsApp floating button**: Features an authentic, animated official SVG WhatsApp logo with pulse ripples.
* **Instagram visual badge**: Located prominently in the footer with the official brand color gradient background.
* **Responsive Layouts**: Designed to look professional and premium across all viewport breakpoints.

---

## 🛠️ Tech Stack
* **Frontend**: React.js, TypeScript, Vite, Tailwind CSS / Vanilla CSS, Lucide icons, Framer Motion.
* **Backend**: Firebase Authentication (Email/Password), Cloud Firestore.
* **Hosting**: Vercel.

---

## 🚀 Run Locally

### Prerequisites
* [Node.js](https://nodejs.org/) installed on your machine.

### Installation Steps
1. Clone the repository and navigate to the directory:
   ```bash
   git clone https://github.com/SagarSinghadiya/gs-footwear-bassi.git
   cd gs-footwear-bassi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your local environment file. Rename `.env.example` to `.env` and fill in your Firebase configuration credentials:
   ```env
   VITE_FIREBASE_API_KEY="your_api_key"
   VITE_FIREBASE_AUTH_DOMAIN="your_project_id.firebaseapp.com"
   VITE_FIREBASE_PROJECT_ID="your_project_id"
   VITE_FIREBASE_STORAGE_BUCKET="your_project_id.firebasestorage.app"
   VITE_FIREBASE_MESSAGING_SENDER_ID="your_sender_id"
   VITE_FIREBASE_APP_ID="your_app_id"
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   Open **[http://localhost:3000](http://localhost:3000)** in your browser!

---

## 📦 Vercel Deployment

This project is optimized for direct import on **Vercel** with full client-side routing support (`react-router-dom`).

1. Create a new project on **Vercel** and connect it to your GitHub repository.
2. Under **Settings** > **Environment Variables**, add the 6 environment keys prefixed with `VITE_FIREBASE_` (matching the values in your `.env` file).
3. The build command is `npm run build` and output directory is `dist`.
4. Click **Deploy**. Vercel will automatically host the app and build your production bundle!
