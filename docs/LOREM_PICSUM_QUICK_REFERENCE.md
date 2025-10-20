# Lorem Picsum Quick Reference

## 🔗 Important Links

- **Main Site**: https://picsum.photos/
- **Browse All Images**: https://picsum.photos/images
- **API Documentation**: https://picsum.photos/

## 🎯 Quick Usage Examples

### Basic Usage
```tsx
// Random image
https://picsum.photos/800/600

// Square image
https://picsum.photos/400

// Specific image (ID 237)
https://picsum.photos/id/237/800/600

// WebP format (recommended)
https://picsum.photos/800/600.webp
```

### Advanced Features
```tsx
// Seeded random (consistent)
https://picsum.photos/seed/aveckaza/800/600

// Grayscale
https://picsum.photos/800/600?grayscale

// Blur (1-10)
https://picsum.photos/800/600?blur=2

// Combined effects
https://picsum.photos/id/870/800/600?grayscale&blur=2
```

## 📸 Popular Image IDs for Your Project

### People & Portraits
- **ID 64**: Professional woman (great for testimonials)
- **ID 65**: Another professional woman
- **ID 91**: Professional man
- **ID 177**: Person working

### Nature & Outdoors
- **ID 158**: Tropical plants (perfect for gardening)
- **ID 292**: Garden/nature
- **ID 1015**: Outdoor scene

### Home & Interior
- **ID 1**: Modern home exterior
- **ID 164**: Home/security theme
- **ID 1080**: Clean modern interior
- **ID 1082**: Living room

### Technology & Business
- **ID 180**: Phone/technology
- **ID 326**: Modern workspace/dashboard
- **ID 367**: Laptop/work

### Water & Weather
- **ID 1073**: Rain/water (perfect for rainy season article)
- **ID 1074**: Water droplets

## 🎨 How to Find the Perfect Image

1. **Visit**: https://picsum.photos/images
2. **Browse** through the gallery
3. **Note the ID** of images you like
4. **Update** `/src/lib/placeholder.ts` with new IDs:

```typescript
export const placeholders = {
  // Your category
  yourCategory: {
    hero: getPlaceholderImage({ width: 1200, height: 800, imageId: YOUR_ID }),
    card: getPlaceholderImage({ width: 600, height: 600, imageId: YOUR_ID }),
  },
}
```

## 🚀 Performance Tips

1. **Use WebP format** for better compression:
   ```tsx
   getPlaceholderImage({ width: 800, height: 600, format: 'webp' })
   ```

2. **Add lazy loading** to images:
   ```tsx
   <img src={url} alt="..." loading="lazy" />
   ```

3. **Use specific IDs** instead of random for consistency and caching

4. **Match aspect ratios** to your design to avoid layout shifts

## 🔄 Migration Path

When ready to replace with real images:

1. Save real images to `/public/images/`
2. Update component imports
3. Remove placeholder utility if no longer needed
4. Update documentation

## 📝 Notes

- All images are from Unsplash (high quality, free to use)
- CDN is powered by Fastly (fast global delivery)
- No attribution required (but appreciated)
- Images are cached for performance
