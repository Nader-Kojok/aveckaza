# Placeholder Images Guide

This project uses **Lorem Picsum** for placeholder images until final assets are ready.

## 🎯 Why Lorem Picsum?

- ✅ **High-quality photos** from Unsplash
- ✅ **Fast CDN delivery** (powered by Fastly)
- ✅ **Free and open source**
- ✅ **No API key required**
- ✅ **WebP format support** for better performance
- ✅ **Consistent images** using specific IDs

## 📦 Usage

### Import the utility

```tsx
import { placeholders, getPlaceholderImage } from '../lib/placeholder'
```

### Use predefined placeholders

```tsx
// Blog images
<img src={placeholders.blog.rainySeasonCleaning} alt="..." />
<img src={placeholders.blog.tropicalGarden} alt="..." />
<img src={placeholders.blog.homeSecurity} alt="..." />

// Profile images
<img src={placeholders.profiles.woman1} alt="..." />
<img src={placeholders.profiles.man1} alt="..." />

// Technology/App images
<img src={placeholders.technology.mobileApp} alt="..." />
<img src={placeholders.technology.dashboard} alt="..." />
```

### Generate custom placeholders

```tsx
// Random image
getPlaceholderImage({ width: 800, height: 600 })

// Specific image (consistent across reloads)
getPlaceholderImage({ width: 800, height: 600, imageId: 237 })

// Seeded random (same image for same seed)
getPlaceholderImage({ width: 800, height: 600, seed: 'aveckaza' })

// With effects
getPlaceholderImage({ width: 800, height: 600, grayscale: true })
getPlaceholderImage({ width: 800, height: 600, blur: 2 })

// WebP format (recommended for performance)
getPlaceholderImage({ width: 800, height: 600, format: 'webp' })
```

## 🖼️ Current Image IDs Used

| Component | Image ID | Description |
|-----------|----------|-------------|
| Blog - Rainy Season | 1073 | Rain/water theme |
| Blog - Tropical Garden | 158 | Tropical plants |
| Blog - Home Security | 164 | Home/security |
| Profile - Woman 1 | 64 | Professional woman |
| Profile - Man 1 | 91 | Professional man |
| Profile - Woman 2 | 65 | Professional woman |
| Technology - Mobile App | 180 | Phone/technology |
| Technology - Dashboard | 326 | Modern workspace |
| Cleaning Hero | 1080 | Clean modern interior |
| Gardening Hero | 158 | Tropical plants |
| Security Hero | 1 | Modern home |

## 🔍 Browse Available Images

Visit https://picsum.photos/images to browse all available images and find specific IDs.

## 🎨 Components Updated

- ✅ **BlogCards** - Real blog article images
- ✅ **Features** - Mobile app preview image
- ✅ **Testimonials** - Profile photos for customer testimonials

## 🔄 Replacing with Real Images

When you have real images ready:

1. Add images to `/public/images/` directory
2. Update the imports in components:
   ```tsx
   // Before
   import { placeholders } from '../lib/placeholder'
   <img src={placeholders.blog.rainySeasonCleaning} alt="..." />
   
   // After
   <img src="/images/blog/rainy-season-cleaning.webp" alt="..." />
   ```

3. Optionally remove `/src/lib/placeholder.ts` if no longer needed

## 📚 Resources

- **Lorem Picsum Documentation**: https://picsum.photos/
- **Browse Images**: https://picsum.photos/images
- **Unsplash (source)**: https://unsplash.com/
