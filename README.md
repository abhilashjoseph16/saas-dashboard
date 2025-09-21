SaaS Dashboard
-------------------------
A modern SaaS dashboard built with React, CSS, HTML, and JavaScript, deployed on Vercel.
The dashboard provides an overview of SaaS metrics and includes an Order List page for managing and tracking customer orders.

🚀 Features
--------------------------
Dashboard Overview at /
Order List Management at /orders-list
Light/Dark Theme Support
Search and Filter Options
Selectable Orders with bulk selection
Date display with icons
Status indicators with color-coded labels
Responsive design for desktop and mobile

🗂️ Project Structure
--------------------------
src/
┣ assets/
┃ ┣ icons/ → Icons and images
┃ ┗ images/ → Additional images
┣ components/
┃ ┗ ThemedIcon.jsx → Component for theme-based images and icons
┣ css/
┃ ┗ pages/
┃ ┗ components/
┣ data/
┃ ┗ orders.json → Orders data
┣ pages/
┃ ┣ OrderList.jsx → Orders list page
┃ ┗ DashboardLayout.jsx → Main dashboard layout
┣ App.jsx
┗ index.js
┗ AppRoutes.jsx  → Routes for the application

#Tech Stack
--------------------------
Frontend: React, JavaScript, HTML, CSS
Deployment: Vercel

#Installation & Setup
--------------------------
Clone the repository:
git clone https://github.com/abhilashjoseph16/saas-dashboard.git

cd saas-dashboard

Install dependencies:
npm install

Start the development server:
npm run dev

Open in your browser:
http://localhost:5173/

#Deployment
--------------------------
The project is deployed on Vercel.

Dashboard URL: /
Orders List URL: /orders-list