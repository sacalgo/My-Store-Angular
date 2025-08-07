# 🛍️ MY-STORE — Angular E-commerce UI

This is a standalone Angular application that displays products using the [FakeStoreAPI](https://fakestoreapi.com).  
It supports category filtering, product details, pagination, and search functionality.

## 🚀 Features

- ✅ View all products
- 🔍 Search products by title
- 📂 Filter by category
- 📄 Product detail view
- 🔢 Client-side pagination
- ⚡ Fast and standalone Angular setup

## 🏗️ Project Structure

MY-STORE/
├── src/
│ ├── app/
│ │ └── products/
│ │ ├── components/
│ │ │ ├── product-list/
│ │ │ ├── category-list/
│ │ │ └── product-detail/
│ │ └── services/
│ └── main.ts
├── angular.json
├── package.json
├── README.md

markdown
Copy
Edit

## 🧰 Tech Stack

- Angular 17+ (standalone components)
- SCSS styling
- RouterModule for navigation
- HttpClient for API calls

## ▶️ Getting Started

1. **Clone the repo**  
   ```bash
   git clone <your-repo-url>
   cd MY-STORE
Install dependencies

bash
Copy
Edit
npm install
Run the app locally

bash
Copy
Edit
ng serve
Visit the app

arduino
Copy
Edit
http://localhost:4200
📌 Routes Overview
/products → all products list

/products/:id → product detail view

/categories → list of all categories

/categories/:name → products by selected category