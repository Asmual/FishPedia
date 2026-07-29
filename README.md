# 🐟 FishPedia — Ultimate Aquatic Life & E-Commerce Platform

> A comprehensive e-commerce and aquatic knowledge platform where users can explore fish species, shop for aquarium accessories, and manage orders seamlessly.

<img width="1896" height="838" alt="FishPedia Home Showcase" src="https://via.placeholder.com/1896x838?text=FishPedia+Home+Showcase" />
<img width="1895" height="843" alt="FishPedia Products & Details" src="https://via.placeholder.com/1895x843?text=FishPedia+Products+Catalog" />

---

## 🌐 Live Site & Repository

🔗 **Live Site:** [https://fishpedia.vercel.app](https://fishpedia.vercel.app)  
🔗 **Server API:** [https://fishpedia-server.onrender.com](https://fishpedia-server.onrender.com)  
🔗 **Client Repo:** [https://github.com/Asmual/FishPedia-Client](https://github.com/Asmual/FishPedia-Client)  
🔗 **Server Repo:** [https://github.com/Asmual/FishPedia-Server](https://github.com/Asmual/FishPedia-Server)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| ⚡ Next.js 14+ | Full-stack React Framework (App Router) |
| 🚀 Express.js | Backend REST API Framework (TypeScript) |
| 🔐 BetterAuth & JWT | Hybrid Secure Authentication & Role-Based Access Control |
| 🍃 MongoDB Native Driver | High-Performance NoSQL Database for Products & Orders |
| 🎨 Tailwind CSS | Responsive Utility-First Styling |
| 🌼 DaisyUI | Clean & Modern UI Components |
| 🖼️ ImgBB API | Fast Cloud Image Hosting & Instant Uploads |

---

## ✨ Key Features

### 🔐 Multi-Layer Authentication & Role Management
- Secure user registration and login using **BetterAuth** with Google OAuth integration.
- Custom JWT (JSON Web Token) authorization for cross-origin backend API verification (`Vercel` to `Render`).
- **Role-Based Access Control (RBAC):** Strict separation between **`admin`** (main seller control) and **`buyer`** (customer features).

### 🐟 Aquatic Product Catalog & Discovery
- Dynamic product listing page with real-time category filtering and search capabilities.
- Comprehensive single product details page featuring care guidelines, pricing, stock status, and high-res image previews.

### 🛒 Smooth Cart & Order Processing
- Interactive cart management allowing buyers to select items and place orders efficiently.
- Instant feedback and user alerts powered by responsive toast notifications (`react-hot-toast`).

### ⚙️ Admin Management Panel
- Centralized control for admins to seamlessly add, update, or remove products.
- Integrated ImgBB API for quick direct image uploading in product creation forms.
- Order monitoring and full inventory status oversight.

---

## 📋 Pages & Route Accessibility

| Page Path | Access Type | Description |
|---|---|---|
| 🏠 `/` | Public | Home page featuring hero banner, popular categories, and highlighted products. |
| 🛍️ `/products` | Public | Complete product catalog with filtering and search options. |
| 📄 `/product/[id]` | Public | Detailed view of a specific fish or aquarium product. |
| 🔑 `/login` | Public | Access account using credentials or Google social login. |
| 📝 `/register` | Public | Register a new buyer account. |
| 🛒 `/cart` | Protected (Buyer) | Manage selected items and initiate order checkout. |
| 📦 `/my-orders` | Protected (Buyer) | Track current and past order histories. |
| 🛠️ `/dashboard/admin` | Protected (Admin) | Full admin panel to manage products, inventory, and global orders. |

---

## 👨‍💻 Author
- 👤 Name: Asmual Obaidul Hoque  
- 📧 Email: asmual01@gmail.com 
- 📞 Phone: +8801833452232  
- 🐙 GitHub: [@Asmual](https://github.com/Asmual)
