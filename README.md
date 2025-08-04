# 🏆 Strive Sports Academy - Complete Next.js Application

A modern, full-stack web application for Strive Sports Academy built with Next.js 14, TypeScript, and PostgreSQL.

## 🚀 Features

### **Frontend**
- ✨ **Modern Design**: Beautiful, responsive interface with smooth animations
- 🎨 **Multi-step Registration**: Intuitive 5-step registration form
- 📱 **Mobile Responsive**: Optimized for all device sizes
- ⚡ **Fast Performance**: Next.js optimization and code splitting
- 🎭 **Animations**: Framer Motion for smooth transitions

### **Backend**
- 🔧 **API Routes**: Next.js API routes for backend functionality
- 🗄️ **PostgreSQL**: Robust database with Neon hosting
- 📊 **Admin Dashboard**: Complete admin interface for managing registrations
- 📈 **Data Export**: CSV export functionality
- 🔍 **Search & Filter**: Advanced search and filtering capabilities

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful icons

### **Backend**
- **Next.js API Routes**: Server-side API endpoints
- **PostgreSQL**: Database with Neon hosting
- **pg**: PostgreSQL client for Node.js
- **dotenv**: Environment variable management

## 📁 Project Structure

```
striveNode/
├── src/
│   ├── app/
│   │   ├── api/                    # API Routes
│   │   │   ├── register/
│   │   │   │   └── route.ts        # Registration endpoint
│   │   │   └── registrations/
│   │   │       └── route.ts        # Get all registrations
│   │   ├── admin/
│   │   │   └── page.tsx            # Admin dashboard
│   │   ├── login/
│   │   │   └── page.tsx            # Login page
│   │   ├── register/
│   │   │   └── page.tsx            # Registration form
│   │   ├── success/
│   │   │   └── page.tsx            # Success page
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout
│   │   └── page.tsx                # Homepage
│   └── lib/
│       └── db.ts                   # Database connection
├── public/                         # Static assets
├── package.json                    # Dependencies
├── tailwind.config.ts             # Tailwind configuration
├── next.config.js                 # Next.js configuration
└── tsconfig.json                  # TypeScript configuration
```

## 🎨 Design Features

### **Homepage**
- **Hero Section**: Eye-catching gradient background with animated elements
- **Features Grid**: Highlighted academy benefits with icons
- **Statistics**: Impressive numbers with smooth animations
- **Call-to-Action**: Clear conversion paths
- **Footer**: Comprehensive site information

### **Registration Form**
- **Multi-step Process**: 5 organized steps for better UX
- **Progress Indicator**: Visual progress tracking
- **Form Validation**: Real-time validation feedback
- **Responsive Design**: Works perfectly on all devices
- **Smooth Transitions**: Animated step transitions

### **Admin Dashboard**
- **Statistics Overview**: Key metrics and insights
- **Data Table**: Complete registration management
- **Search & Filter**: Advanced filtering capabilities
- **Export Functionality**: CSV export for data analysis
- **Real-time Updates**: Live data synchronization

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+
- PostgreSQL database (Neon recommended)
- npm or yarn

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd striveNode
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   NEXT_PUBLIC_SITE_URL=http://localhost:3001
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3001](http://localhost:3001)

## 📱 Pages & Features

### **Homepage (`/`)**
- Landing page with hero section
- Features and benefits showcase
- Statistics and testimonials
- Call-to-action sections

### **Registration (`/register`)**
- 5-step registration process:
  1. Player Information
  2. Parent/Guardian Details
  3. Medical Information
  4. Program Details
  5. Consent & Declaration

### **Login (`/login`)**
- Email and password authentication
- Remember me functionality
- Password visibility toggle
- Link to registration

### **Success (`/success`)**
- Registration confirmation
- Next steps information
- Navigation options

### **Admin Dashboard (`/admin`)**
- Registration statistics
- Complete data management
- Search and filtering
- CSV export functionality

## 🔧 API Endpoints

### **POST `/api/register`**
- Register a new player
- Returns success status and player data

### **GET `/api/registrations`**
- Get all registrations with pagination
- Supports search and filtering
- Returns registration data with statistics

## 🗄️ Database Schema

The application uses a PostgreSQL database with the following main table:

```sql
CREATE TABLE registrations (
    id SERIAL PRIMARY KEY,
    player_full_name VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    age INTEGER NOT NULL,
    gender VARCHAR(10) NOT NULL,
    nationality VARCHAR(100) NOT NULL,
    school_name VARCHAR(255) NOT NULL,
    grade VARCHAR(50) NOT NULL,
    parent_name VARCHAR(255) NOT NULL,
    relation VARCHAR(100) NOT NULL,
    parent_phone VARCHAR(20) NOT NULL,
    parent_email VARCHAR(255) NOT NULL,
    emergency_phone VARCHAR(20) NOT NULL,
    has_allergies VARCHAR(10),
    allergy_details TEXT,
    taking_meds VARCHAR(10),
    med_details TEXT,
    doctor_info TEXT,
    training_days VARCHAR(50) NOT NULL,
    program_type VARCHAR(100) NOT NULL,
    position VARCHAR(50) NOT NULL,
    subscription_plan VARCHAR(100) NOT NULL,
    signature VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🚀 Deployment

### **Vercel (Recommended)**
1. **Connect to Vercel**:
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Set environment variables** in Vercel dashboard:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `NEXT_PUBLIC_SITE_URL`: Your production URL

3. **Deploy automatically** with GitHub integration

### **Other Platforms**
- **Netlify**: Static site hosting with serverless functions
- **Railway**: Full-stack deployment with PostgreSQL
- **Heroku**: Traditional hosting with add-ons

## 🔧 Configuration

### **Environment Variables**
```env
DATABASE_URL=postgresql://user:password@host:port/database
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### **Database Setup**
1. Create a PostgreSQL database (Neon recommended)
2. Run the schema creation script
3. Update the `DATABASE_URL` environment variable

## 📊 Performance Optimization

### **Frontend**
- **Next.js Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic bundle optimization
- **Font Optimization**: Google Fonts optimization
- **Caching**: Built-in caching strategies

### **Backend**
- **Connection Pooling**: Efficient database connections
- **Query Optimization**: Optimized SQL queries
- **Error Handling**: Comprehensive error management
- **Rate Limiting**: API protection (can be added)

## 🔍 SEO & Analytics

### **SEO Features**
- **Meta Tags**: Optimized for search engines
- **Structured Data**: Rich snippets support
- **Sitemap**: Automatic sitemap generation
- **Open Graph**: Social media optimization

### **Analytics Ready**
- **Google Analytics**: Easy integration
- **Custom Events**: Track user interactions
- **Conversion Tracking**: Registration analytics

## 🛡️ Security

### **Data Protection**
- **Input Validation**: Comprehensive form validation
- **SQL Injection Prevention**: Parameterized queries
- **XSS Protection**: Built-in Next.js protection
- **CSRF Protection**: API route protection

### **Privacy**
- **GDPR Compliance**: Data handling best practices
- **Consent Management**: Clear consent collection
- **Data Retention**: Configurable retention policies

## 📈 Future Enhancements

- [ ] **User Authentication**: JWT-based authentication
- [ ] **Payment Integration**: Stripe/PayPal integration
- [ ] **Email Notifications**: Automated email system
- [ ] **Real-time Updates**: WebSocket integration
- [ ] **Mobile App**: React Native companion app
- [ ] **Advanced Analytics**: Detailed reporting
- [ ] **Multi-language Support**: Internationalization
- [ ] **Booking System**: Session scheduling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [Next.js Docs](https://nextjs.org/docs)
- **Issues**: Create an issue in the repository
- **Email**: support@striveacademy.com

---

**Built with ❤️ for Strive Sports Academy**

*Transform your athletic potential with Strive Academy's elite training programs!* 