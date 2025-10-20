# Accessly - Atlys Frontend Hiring Task

A modern social media application built with React, TypeScript, and Tailwind CSS, implementing a complete authentication flow and interactive feed as per the Atlys frontend hiring task requirements.

## 🎯 Task Overview

This project implements the [Atlys Frontend Hiring Task](https://www.figma.com/proto/9il6CZ3STFOcYutSsGNA2v/Front-end-hiring-assignment?node-id=1-2&t=gR0TS9whDhfSJQqI-1&starting-point-node-id=1%3A2) with the following core requirements:

### ✅ **Implemented Features**

- **Three Main Pages**: Feed (landing page), Sign In (`/login`), and Sign Up (`/signup`)
- **Authentication Flow**: Modal-based auth for unauthenticated users, dedicated auth pages
- **Post Editor**: Input field and publish button functionality (other buttons show "function not implemented" alerts)
- **Feed Interactions**: Published posts appear in feed, interactive elements show appropriate alerts
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🛠️ Tech Stack

- **React 19.1.1** - Latest version with modern hooks and patterns
- **TypeScript 5.9.3** - Complete type safety and IntelliSense
- **Tailwind CSS 4.1.14** - Utility-first CSS framework (no UI libraries used)
- **Vite 7.1.7** - Lightning-fast development and build tool
- **React Router DOM 7.9.4** - Client-side routing
- **Supabase 2.75.1** - Backend-as-a-Service for authentication and data storage
- **React Hot Toast 2.6.0** - User notifications

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- A modern web browser

### Installation

1. **Clone and install dependencies:**

```bash
git clone <repository-url>
cd accessly
npm install
```

2. **Set up environment variables:**
   Create a `.env` file in the root directory with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. **Start the development server:**

```bash
npm run dev
```

4. **Open your browser:**
   Navigate to [http://localhost:5173](http://localhost:5173)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage

## 📱 Application Flow

### **Unauthenticated Users**

- **Landing Page**: Feed page loads, but interactions trigger authentication modal
- **Authentication Modal**: Sign In/Sign Up toggle with form validation
- **Dedicated Auth Pages**: Direct links to `/login` and `/signup`

### **Authenticated Users**

- **Full Feed Access**: Create posts, view all posts, interact with content
- **Post Creation**: Rich text input with emoji support and formatting options
- **Real-time Updates**: New posts appear instantly via Supabase subscriptions

## 🏗️ Project Structure

```
src/
├── components/          # Reusable React components
│   ├── auth/           # Authentication components
│   │   ├── AuthPage.tsx       # Main auth page with routing
│   │   ├── SignInForm.tsx     # Sign in form
│   │   ├── SignUpForm.tsx     # Sign up form
│   │   └── FormFooter.tsx     # Auth form footer
│   ├── Feed/           # Feed-related components
│   │   ├── index.tsx          # Main feed component
│   │   ├── Post.tsx           # Individual post display
│   │   ├── WritePost.tsx      # Post creation component
│   │   ├── ActionButtons.tsx  # Post action buttons
│   │   ├── EmojiSelector.tsx  # Emoji picker
│   │   └── FormattingToolbar.tsx # Text formatting tools
│   ├── Header/         # Application header
│   │   ├── index.tsx          # Header component
│   │   └── ActionButton.tsx   # User action button
│   ├── Layout/         # Layout components
│   ├── Input/          # Form input components
│   ├── Modal.tsx       # Modal component
│   ├── LoadingSpinner.tsx     # Loading indicator
│   └── Toast/          # Toast notifications
├── contexts/           # React contexts
│   └── AuthModalContext.tsx   # Auth modal state management
├── hooks/              # Custom React hooks
│   ├── useAuth.ts             # Authentication logic
│   ├── useAuthPage.ts         # Auth page state
│   ├── useCreatePost.ts       # Post creation logic
│   └── useFeed.ts             # Feed data management
├── lib/                # External service integrations
│   └── supabase.ts           # Supabase client configuration
├── router/             # Application routing
│   └── index.tsx             # React Router configuration
├── utils/              # Utility functions
│   ├── auth.ts               # Authentication utilities
│   ├── post.ts               # Post-related utilities
│   ├── session.ts            # Session management
│   ├── toast.ts              # Toast notifications
│   └── validation.ts         # Form validation
├── types/              # TypeScript type definitions
│   └── index.ts              # Global type definitions
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles with Tailwind
```

## 🔑 Key Features Implemented

### **Authentication System**

- **Modal Authentication**: Triggered by feed interactions for unauthenticated users
- **Dedicated Auth Pages**: Separate `/login` and `/signup` routes
- **Form Validation**: Real-time validation with error messages
- **Session Management**: Persistent authentication state
- **Toast Notifications**: User feedback for auth actions

### **Feed System**

- **Post Creation**: Rich text input with emoji and formatting support
- **Real-time Updates**: Live feed updates via Supabase subscriptions
- **Post Display**: Clean, responsive post layout with user avatars
- **Action Buttons**: Like, comment, share buttons with appropriate behavior
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### **UI/UX Quality**

- **Modern Design**: Clean, Instagram-like interface
- **Smooth Animations**: Hover effects and transitions
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Loading States**: Skeleton screens and loading indicators
- **Error Handling**: Graceful error states with user feedback

## 🚀 Deployment

### **Build for Production**

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### **Deployment Options**

- **Vercel**: Drag and drop the `dist/` folder or connect your GitHub repository
- **Netlify**: Drag and drop or use their Git integration
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Firebase Hosting**: `firebase deploy` after setup

### **Live Preview**

Once deployed, the application will be accessible at your hosting provider's URL with full functionality including:

- Authentication flow
- Post creation and display
- Real-time feed updates
- Responsive design across all devices

## 🎨 Design Compliance

The application follows modern design patterns with:

- **Clean Typography**: Readable fonts and proper hierarchy
- **Consistent Spacing**: Harmonious layout with Tailwind's spacing scale
- **Intuitive Navigation**: Clear user flows and interactions
- **Mobile-First**: Responsive design that works on all screen sizes
- **Accessibility**: Proper contrast ratios and interactive elements

## 🔧 Development Notes

### **Code Quality**

- **TypeScript**: Full type coverage for better developer experience
- **ESLint**: Consistent code style and error prevention
- **Component Architecture**: Modular, reusable components
- **Custom Hooks**: Separation of logic from presentation
- **Context API**: Efficient state management

### **Performance**

- **Vite**: Fast development and optimized production builds
- **Tree Shaking**: Only used code included in bundles
- **Lazy Loading**: Components loaded as needed
- **Hot Module Replacement**: Instant updates during development

### **Scalability**

- **Modular Structure**: Easy to extend and maintain
- **Reusable Components**: DRY principle throughout
- **Type Safety**: Prevents runtime errors
- **Clean Architecture**: Separation of concerns

## 📝 Submission Requirements

✅ **Completed Requirements:**

- Modern React application with TypeScript
- Three main pages (Feed, Sign In, Sign Up)
- Authentication flow with modal and dedicated pages
- Post editor with input field and publish functionality
- Feed interactions with appropriate alerts for unimplemented features
- Responsive design without UI libraries
- Clean, maintainable code structure

## 🤝 Contributing

This project demonstrates:

- Modern React development practices
- TypeScript integration
- Clean architecture principles
- Responsive design implementation
- Authentication system design
- Real-time data handling

## 📄 License

This project is created for the Atlys Frontend Hiring Task and is proprietary to the developer.
