import sharp from 'sharp';
import path from 'path';

const inputPath = path.resolve('public/favicon.png');
const outputPath = path.resolve('public/favicon.png');

async function swapBlackToWhite() {
  const image = sharp(inputPath);
  const { width, height, channels } = await image.metadata();

  const rawBuffer = await image.ensureAlpha().raw().toBuffer();

  const pixels = new Uint8Array(rawBuffer);
  const threshold = 40; // pixels darker than this are considered "black background"

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    if (r < threshold && g < threshold && b < threshold) {
      pixels[i] = 255;     // R -> white
      pixels[i + 1] = 255; // G -> white
      pixels[i + 2] = 255; // B -> white
      pixels[i + 3] = 255; // A -> fully opaque
    }
  }

  await sharp(Buffer.from(pixels), {
    raw: { width, height, channels: 4 }
  })
    .png()
    .toFile(outputPath);

  console.log(`Done! Saved favicon with white background to ${outputPath}`);
}

swapBlackToWhite().catch(console.error);
