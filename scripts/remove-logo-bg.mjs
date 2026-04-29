import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

const inputPath = 'public/images/mfi-shield-logo.png';

async function removeWhiteBackground() {
  const image = sharp(inputPath);
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = new Uint8Array(data);
  
  // Make white/near-white pixels transparent
  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    
    // If pixel is white or very near-white
    if (r > 240 && g > 240 && b > 240) {
      pixels[i + 3] = 0; // Set alpha to 0 (transparent)
    }
  }

  await sharp(Buffer.from(pixels), {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png()
    .toFile('public/images/mfi-shield-logo-transparent.png');

  console.log('[v0] Successfully created transparent logo');
}

removeWhiteBackground().catch(console.error);
