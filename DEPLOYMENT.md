# 🚀 Deployment Guide - Strive Sports Academy

## 🌐 **Quick Deploy Options**

### **Option 1: Vercel (Recommended - Free)**

Vercel is the easiest way to deploy your Next.js app. It's free and provides:
- Automatic deployments
- Custom domains
- SSL certificates
- Global CDN

#### **Step-by-Step Vercel Deployment:**

1. **Install Vercel CLI** (already done):
   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**:
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Login to your Vercel account (create one if needed)
   - Choose to link to existing project or create new
   - Confirm deployment settings

4. **Your site will be live** at: `https://your-project-name.vercel.app`

#### **Alternative: Deploy via Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Deploy automatically

### **Option 2: Netlify (Free)**

1. **Build your project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Drag and drop your `out` folder (after export)
   - Or connect your GitHub repository

### **Option 3: GitHub Pages (Free)**

1. **Add export script** to `package.json`:
   ```json
   {
     "scripts": {
       "export": "next build && next export"
     }
   }
   ```

2. **Build and export**:
   ```bash
   npm run export
   ```

3. **Deploy to GitHub Pages**:
   - Push to GitHub
   - Enable GitHub Pages in repository settings
   - Choose `out` folder as source

## 🔧 **Build for Production**

### **Local Build Test**

Before deploying, test your build locally:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start production server
npm start
```

### **Environment Variables**

Create a `.env.local` file for production:

```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com
NEXT_PUBLIC_SITE_URL=https://your-frontend-url.com
```

## 🌍 **Custom Domain Setup**

### **Vercel Custom Domain:**

1. **Add domain in Vercel dashboard**
2. **Update DNS records**:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for propagation** (up to 24 hours)

### **Netlify Custom Domain:**

1. **Add domain in Netlify dashboard**
2. **Update DNS records** as instructed
3. **Wait for SSL certificate** (automatic)

## 📱 **Mobile Testing**

### **Test on Mobile Devices:**

1. **Local Network Access**:
   ```bash
   # Get your local IP
   ipconfig
   
   # Start dev server with host
   npm run dev -- -H 0.0.0.0
   ```

2. **Access from mobile**:
   ```
   http://YOUR_LOCAL_IP:3001
   ```

### **Browser DevTools**:
- Open Chrome DevTools (F12)
- Click device toggle (mobile icon)
- Test responsive design

## 🔗 **Backend Integration**

### **Update API Endpoints:**

For production, update the API URL in your registration form:

```typescript
// In src/app/register/page.tsx
const response = await fetch('https://your-backend-url.com/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
```

### **CORS Configuration:**

Update your Node.js backend to allow your frontend domain:

```javascript
// In your app.js
app.use(cors({
  origin: ['https://your-frontend-domain.com', 'http://localhost:3001'],
  credentials: true
}));
```

## 📊 **Performance Optimization**

### **Lighthouse Score Optimization:**

1. **Image Optimization**:
   ```jsx
   import Image from 'next/image'
   
   <Image
     src="/your-image.jpg"
     alt="Description"
     width={500}
     height={300}
     priority
   />
   ```

2. **Font Optimization**:
   ```jsx
   import { Inter } from 'next/font/google'
   
   const inter = Inter({ subsets: ['latin'] })
   ```

3. **Code Splitting**: Already handled by Next.js

## 🔍 **SEO Optimization**

### **Meta Tags** (already configured):

```jsx
// In layout.tsx
export const metadata: Metadata = {
  title: 'Strive Sports Academy',
  description: 'Elite sports training and development academy',
  keywords: 'sports academy, training, football, coaching',
  openGraph: {
    title: 'Strive Sports Academy',
    description: 'Elite sports training and development academy',
    images: ['/og-image.jpg'],
  },
}
```

### **Sitemap Generation**:

Create `src/app/sitemap.ts`:

```typescript
export default function sitemap() {
  return [
    {
      url: 'https://your-domain.com',
      lastModified: new Date(),
    },
    {
      url: 'https://your-domain.com/login',
      lastModified: new Date(),
    },
    {
      url: 'https://your-domain.com/register',
      lastModified: new Date(),
    },
  ]
}
```

## 📈 **Analytics Setup**

### **Google Analytics**:

1. **Create Google Analytics account**
2. **Add tracking code** to `layout.tsx`:

```jsx
// In layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
```

## 🚨 **Troubleshooting**

### **Common Issues:**

1. **Build Errors**:
   ```bash
   # Clear cache
   rm -rf .next
   npm run build
   ```

2. **Port Conflicts**:
   ```bash
   # Use different port
   npm run dev -- -p 3002
   ```

3. **CORS Issues**:
   - Check backend CORS configuration
   - Verify API endpoints

4. **Image Loading**:
   - Use Next.js Image component
   - Optimize image sizes

## 📞 **Support**

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Issues**: Create issue in your repository

---

**Your beautiful Strive Sports Academy website is ready to go live! 🎉** 