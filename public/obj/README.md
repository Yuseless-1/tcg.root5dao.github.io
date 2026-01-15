# 3D Model Directory

## ⚠️ IMPORTANT: Place Your 3D Model Here

Add your ROOT5 game center 3D model to this directory:

**Required file:** `root5_tcg_game_center.glb`

### Full path should be:
```
public/obj/root5_tcg_game_center.glb
```

---

## Supported Formats

The app is configured to load `.glb` files (recommended).

If you only have `.usdz` format, you'll need to convert it to `.glb` first using one of these tools:

### Online Converters:
1. **Blender** (Free, recommended)
   - Download: https://www.blender.org
   - Import USDZ: File → Import → USD
   - Export GLB: File → Export → glTF 2.0 (.glb)

2. **Online USDZ to GLB Converter**
   - https://products.aspose.app/3d/conversion/usdz-to-glb
   - https://imagetostl.com/convert/file/usdz/to/glb

3. **Gestaltor** (macOS)
   - https://gestaltor.io

### Export Settings:
- Format: glTF Binary (.glb)
- Include: Meshes, Materials, Textures
- Apply Modifiers: Yes
- Export Lighting: Yes (if available)

---

## File Size Considerations

- **Recommended:** Under 50MB for fast loading
- **Maximum:** 100MB (Vercel deployment limit)

If your file is larger, consider:
1. Reducing polygon count in Blender
2. Compressing textures
3. Using glTF Draco compression

---

## Need Help?

After placing your model file here:
1. Make sure the filename is exactly: `root5_tcg_game_center.glb`
2. Commit the file to git: `git add public/obj/root5_tcg_game_center.glb`
3. Push to your repository
4. Deploy to Vercel

The model will automatically load when you run `npm run dev` or deploy.
