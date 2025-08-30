# MERN Stack Development Challenge

## 🎯 Project Overview

Welcome to the MERN stack development challenge! This project is designed to test your full-stack development skills. You will be creating and integrating the APIs.

## 🚀 Tech Stack Requirements 

### Backend
- **NestJS** - Modern Node.js framework
- **Prisma ORM** - Next-generation ORM for Node.js and TypeScript
- **MongoDB or PostgreSQL** - Choose your preferred database
- **JWT Authentication** - Secure user authentication system
- **Swagger/OpenAPI** - API documentation

### Frontend
- **Next.js** - React framework for production
- **RTK Query** - Powerful data fetching and caching library
- **Redux Toolkit** - State management
- **Redux Persist** - Persist and rehydrate Redux store

## 📋 Development Challenge

### API Endpoints To Implement and Integrate

**Authentication Module (`/auth`)**

1. `POST /auth/register` - User registration
2. `POST /auth/login` - User login

**User Module (`/user`)**

1. `GET /user/profile` - Get user profile (protected route)

**Category Module (`/category`)**

1. `POST /category` - Create new category (protected route)
3. `GET /category` - Get all categories for authenticated user (protected route)
4. `GET /category/:id` - Get category by ID (protected route)
5. `PATCH /category/:id` - Update category (protected route)
6. `DELETE /category/:id` - Delete category (protected route)

**Car Module (`/car`)**

1. `POST /car` - Create new car (protected route)
2. `GET /car/:categoryId` - Get all cars for a specific category (protected route)
3. `GET /car/car-by-id/:id` - Get car by ID (protected route)
4. `PATCH /car/:id` - Update car (protected route)
5. `DELETE /car/:id` - Delete car (protected route)

## 📝 Submission Guidelines


1. **Public Repositories**: Create public GitHub repositories for both backend and frontend projects
2. **Repository Links**: Share the GitHub repository links for both projects

## 🎯 Evaluation Criteria

- **Code Quality**: Clean, maintainable, and well-structured code
- **Functionality**: All required features implemented correctly
- **Security**: Proper authentication and authorization
- **UI/UX**: Intuitive and responsive user interface