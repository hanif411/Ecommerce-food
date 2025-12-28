# 🎂 Bolu Delight - Premium Cake E-commerce

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-blue?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-5-ff4154?style=for-the-badge&logo=react-query)](https://tanstack.com/)
[![Midtrans](https://img.shields.io/badge/Midtrans-Payment-navy?style=for-the-badge)](https://midtrans.com/)

**Bolu Delight** is a modern, full-stack e-commerce platform built for a premium cake shop experience. This project features a robust authentication system, real-time cart management, and a seamless checkout integration with Midtrans Payment Gateway.

## 🛠️ Technical Deep Dive (English)

The frontend focuses on handling complex client-side logic and secure payment integration:

- **Framework:** React.js / Next.js (TypeScript).
- **Payment Integration:** Implementing **Midtrans Snap SDK** for a seamless pop-up payment experience.
- **State Management:** Managing shopping cart, product quantities, and checkout sessions efficiently.
- **Styling:** Tailwind CSS for a highly customizable and lightweight UI.

---

## ✨ Key Features

- 🔐 **Secure Authentication**: JWT-based login and registration with HttpOnly cookies.
- 👤 **Role-Based Access**: Specialized views and permissions for **Users** and **Owners/Admins**.
- 🛒 **Smart Shopping Cart**: Efficient client-side state management using **Zustand**.
- 💳 **Payment Integration**: Seamless payment flow with **Midtrans Snap** (Sandbox).
- 📦 **Order Tracking**: Comprehensive order history for users to monitor their purchases.
- 📱 **Fully Responsive**: Optimized for all devices using **Shadcn/UI** and Tailwind CSS.
- ⚡ **Data Fetching**: Optimized server state and caching with **TanStack Query (v5)**.

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 14+ (App Router)
- **State Management**: Zustand (Cart), TanStack Query (Server State)
- **Styling**: Tailwind CSS & Shadcn/UI
- **Icons**: Lucide React
- **Toast**: Sonner

## 📂 Project Structure

```text
├── app/                # Next.js App Router (Pages, Layouts, Providers)
src/
    ├── components/         # Reusable UI Components (UI, Order, Product)
    ├── hooks/              # Custom Logic (useAuth, useCheckout, useProduct)
    ├── services/           # API Service Layer (Axios/Fetch logic)
    ├── store/              # Global State (Cart Store)
    ├── types/              # TypeScript Definitions
    └── utils/              # Formatter & Helper Functions

Getting Started
1. Prerequisites
Make sure you have Node.js and npm installed.

2. Installation
Bash

git clone [https://github.com/hanif411/Ecommerce-food.git](https://github.com/hanif411/Ecommerce-food.git)
cd Ecommerce-food
npm install
3. Environment Setup
Create a .env.local file in the root directory and add your credentials:

Code snippet

NEXT_PUBLIC_BASE_URL=your_api_endpoint
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=your_midtrans_client_key
4. Run Development
Bash
```
