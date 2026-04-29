import sharp from 'sharp';

const inputPath = 'public/images/mfi-shield-logo.png';
const outputPath = 'public/images/mfi-shield-logo.png';

async function removeWhiteBackground() {
  const image = sharp(inputPath);
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = new Uint8Array(data);
  
  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    
    if (r > 235 && g > 235 && b > 235) {
      pixels[i + 3] = 0;
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
    .toFile(outputPath + '.tmp');

  // Replace original
  const { readFileSync, writeFileSync } = await import('fs');
  const tmpData = readFileSync(outputPath + '.tmp');
  writeFileSync(outputPath, tmpData);
  const { unlinkSync } = await import('fs');
  unlinkSync(outputPath + '.tmp');

  console.log('[v0] Successfully removed white background from logo');
}

removeWhiteBackground().catch(console.error);
