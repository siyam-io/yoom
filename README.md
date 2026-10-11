# 🎥 Yoom – A Zoom Clone Built with Next.js

🔗 **Live Site:** [zoom-clone-tawny-three.vercel.app](https://zoom-clone-tawny-three.vercel.app)

Yoom is a modern, sleek video calling app inspired by Zoom. Built with cutting-edge technologies and a clean UI, it supports real-time communication, user authentication, and dynamic meeting features.

---

## 🚀 Tech Stack & Dependencies

| Technology | Description |
|-----------|-------------|
| ![Next.js](https://img.shields.io/badge/Next.js-000?logo=next.js&logoColor=white) | Full-stack React Framework |
| ![React](https://img.shields.io/badge/React-20232a?logo=react&logoColor=61dafb) | Component-based UI |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white) | Static typing for JavaScript |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38bdf8?logo=tailwind-css&logoColor=white) | Utility-first CSS |
| ![Clerk](https://img.shields.io/badge/Clerk-3B82F6?logo=clerk&logoColor=white) | Authentication and user management |
| ![Stream](https://img.shields.io/badge/Stream-0c7aaf?logo=stream&logoColor=white) | Real-time video & messaging SDK |
| ![Radix UI](https://img.shields.io/badge/Radix_UI-eaeaea?logoColor=black) | Unstyled accessible UI components |
| ![Lucide](https://img.shields.io/badge/Lucide-000?logo=lucide&logoColor=white) | Beautiful, consistent icons |
| ![Sonner](https://img.shields.io/badge/Sonner-2ecc71) | Modern toast notifications |
| ![React Datepicker](https://img.shields.io/badge/React_Datepicker-f39c12) | Date & time input components |



---

## 🧪 Features

- 🔐 Clerk-powered user authentication
- 📹 Real-time video calls using Stream Video SDK
- 👥 Personal rooms and user-specific meetings
- 🗓️ Schedule and manage upcoming meetings
- 📁 View previous and recorded meetings
- 🎨 Themed UI with dark/light support

---

## 🛠️ Local Setup & Installation

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/siyam-io/zoom_clone.git
cd zoom_clone
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Environment Variables
Create a `.env.local` file in the root of the project and add your API keys:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=

NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## ☁️ Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). Simply import the repository, configure the environment variables, and deploy!

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open-source and available under the MIT License.
