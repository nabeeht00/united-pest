# 🚀 HOSTING CHECKLIST - United Pest Website

## ✅ PRE-UPLOAD CHECKLIST

### 1. Build the Website
```bash
npm run build
```
This creates the `dist` folder with optimized files.

### 2. Files to Upload
- **All files from `dist` folder** → Upload to `public_html`
- **All image files from `public` folder** → Upload to `public_html` (root directory)

## 📁 FOLDER STRUCTURE ON HOST

```
public_html/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
├── 10694412_797512036962044_1570787189881874716_o.jpg
├── Untitled design.png
├── wasp copy.jpg
├── snake copy.jpg
├── (all other image files...)
└── .htaccess
```

## 🖼️ IMAGE VERIFICATION

After uploading, test these URLs in your browser:
- `https://yourdomain.com/10694412_797512036962044_1570787189881874716_o.jpg`
- `https://yourdomain.com/Untitled design.png`
- `https://yourdomain.com/wasp copy.jpg`

## ⚠️ COMMON ISSUES & FIXES

### Images Not Showing?
1. **Check file names** - Must match exactly (including spaces)
2. **Check location** - Images must be in root directory (public_html)
3. **Check permissions** - Set to 644
4. **Clear cache** - Hard refresh browser (Ctrl+F5)

### File Upload Tips
1. Use cPanel File Manager for easy upload
2. Upload images one by one if bulk upload fails
3. Rename files if special characters cause issues

## 🔧 .htaccess FILE

Create this file in public_html:

```apache
# Enable HTTPS redirect
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle React Router
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/javascript
</IfModule>
```

## 📞 CONTACT INFO TO UPDATE

Make sure these are correct in your files:
- **Phone**: +65 6698 9118
- **Email**: services@unitedpest.com.sg
- **WhatsApp**: +65 6698 9118

## ✅ FINAL TESTING

After hosting, test:
- [ ] Homepage loads with hero image
- [ ] All service images appear
- [ ] Contact forms work
- [ ] Phone/WhatsApp links work
- [ ] Mobile responsiveness
- [ ] All pages load correctly

## 🎉 GO LIVE!

Once everything works:
1. Update Google My Business
2. Update social media links
3. Test from different devices
4. Monitor for any issues

---

**Need Help?** Contact Fozzy support or refer to the detailed deployment guide.