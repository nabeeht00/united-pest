# 🚀 United Pest Website - Fozzy Hosting Deployment Guide

## 📋 Pre-Deployment Checklist

### ✅ **Step 1: Prepare Your Website Files**

1. **Build the Production Version**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with optimized files.

2. **Test the Build Locally**
   ```bash
   npm run preview
   ```
   Make sure everything works correctly.

### ✅ **Step 2: Prepare Files for Upload**

1. **Locate the Build Files**
   - After running `npm run build`, you'll have a `dist` folder
   - This contains all the files you need to upload

2. **Download/Export Files from Bolt**
   - Download the entire project or just the `dist` folder
   - You'll need these files on your computer

---

## 🌐 Fozzy Hosting Setup Process

### ✅ **Step 3: Purchase Fozzy Hosting**

1. **Visit Fozzy.com**
   - Go to their shared hosting or VPS plans
   - Choose a plan that suits your needs

2. **Recommended Plan Features:**
   - **SSD Storage**: At least 5GB
   - **Bandwidth**: Unlimited or high limit
   - **SSL Certificate**: Included
   - **cPanel Access**: For easy file management

3. **Complete Purchase**
   - Choose your domain (unitedpest.com.sg or similar)
   - Complete payment process

### ✅ **Step 4: Access Your Hosting Account**

1. **Check Your Email**
   - Fozzy will send login credentials
   - Look for cPanel login details

2. **Login to cPanel**
   - URL: Usually `yourdomain.com/cpanel` or provided by Fozzy
   - Use credentials from email

---

## 📁 File Upload Process

### ✅ **Step 5: Upload Website Files**

#### **Method 1: Using cPanel File Manager (Recommended)**

1. **Open File Manager**
   - In cPanel, click "File Manager"
   - Navigate to `public_html` folder

2. **Clear Default Files**
   - Delete any default files (index.html, etc.)
   - Keep `.htaccess` if it exists

3. **Upload Your Files**
   - Click "Upload" button
   - Select all files from your `dist` folder
   - Upload everything including:
     - `index.html`
     - `assets` folder
     - All image files
     - Any other generated files

4. **Extract if Zipped**
   - If you uploaded a zip file, right-click and extract

#### **Method 2: Using FTP (Alternative)**

1. **Get FTP Credentials**
   - From Fozzy welcome email or cPanel

2. **Use FTP Client**
   - Download FileZilla (free FTP client)
   - Connect using provided credentials
   - Upload `dist` folder contents to `public_html`

---

## ⚙️ Configuration Steps

### ✅ **Step 6: Configure Domain & SSL**

1. **Domain Setup**
   - If using existing domain, update nameservers to Fozzy's
   - If new domain, it should work automatically

2. **SSL Certificate**
   - In cPanel, go to "SSL/TLS"
   - Enable "Force HTTPS Redirect"
   - Install Let's Encrypt certificate (usually free)

### ✅ **Step 7: Create .htaccess File**

Create this file in your `public_html` folder:

```apache
# Enable HTTPS redirect
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle React Router (if needed)
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Set cache headers
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/pdf "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType application/x-javascript "access plus 1 month"
    ExpiresByType application/x-shockwave-flash "access plus 1 month"
    ExpiresByType image/x-icon "access plus 1 year"
    ExpiresDefault "access plus 2 days"
</IfModule>
```

---

## 📧 Email Setup (Optional)

### ✅ **Step 8: Create Professional Email**

1. **Create Email Accounts**
   - In cPanel, go to "Email Accounts"
   - Create: `info@unitedpest.com.sg`
   - Create: `service@unitedpest.com.sg`

2. **Update Contact Forms**
   - Make sure contact forms point to correct email
   - Test email functionality

---

## 🧪 Testing & Launch

### ✅ **Step 9: Test Everything**

1. **Website Functionality**
   - ✅ All pages load correctly
   - ✅ Images display properly
   - ✅ Contact forms work
   - ✅ Phone/WhatsApp links work
   - ✅ Mobile responsiveness

2. **Performance Check**
   - Test loading speed
   - Check on different devices
   - Verify SSL certificate works

3. **SEO Basics**
   - Check page titles
   - Verify meta descriptions
   - Test Google indexing

### ✅ **Step 10: Go Live!**

1. **Final Checks**
   - All contact information correct
   - All links working
   - Images loading fast

2. **Announce Launch**
   - Update social media
   - Inform existing customers
   - Update business listings

---

## 🔧 Maintenance & Updates

### **Regular Tasks:**

1. **Backup Website**
   - Use cPanel backup feature
   - Download backups monthly

2. **Update Content**
   - Add new testimonials
   - Update service information
   - Keep contact details current

3. **Monitor Performance**
   - Check website speed
   - Monitor uptime
   - Review analytics

---

## 📞 Support Contacts

### **If You Need Help:**

1. **Fozzy Support**
   - Live chat on their website
   - Support ticket system
   - Phone support (if available)

2. **Technical Issues**
   - Check cPanel error logs
   - Contact Fozzy technical support
   - Review .htaccess file

---

## 🎉 Congratulations!

Your United Pest & Vector Management website is now live and ready to serve customers across Singapore!

**Next Steps:**
- Set up Google Analytics
- Submit to Google Search Console
- Create Google My Business listing
- Start collecting customer reviews

---

**Website URL:** `https://yourdomain.com`
**Admin Access:** cPanel login provided by Fozzy
**Email:** Professional email addresses set up

Your professional pest control website is now ready to attract customers and grow your business! 🚀