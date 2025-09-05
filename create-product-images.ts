import fs from 'fs';
import path from 'path';

// Create directories and placeholder files
const categories = [
  {
    folder: 'insecticides',
    products: ['acefy.jpg', 'aeroplan.jpg', 'super-saver.jpg', 'dhanesh.jpg', 'regent.jpg', 'cypermethrin.jpg']
  },
  {
    folder: 'fungicides', 
    products: ['copper.jpg', 'coppertop.jpg', 'operon.jpg', 'mancozeb.jpg', 'blitox.jpg', 'carbendazim.jpg']
  },
  {
    folder: 'herbicides',
    products: ['noteweed.jpg', 'glykill.jpg', 'weedout.jpg', 'herbicure.jpg', 'cleanmax.jpg', 'paraquat.jpg']
  },
  {
    folder: 'fertilizers',
    products: ['bio-gita.jpg', 'eagle.jpg', 'falcon.jpg', 'tide.jpg', 'super-grow.jpg', 'npk-complex.jpg']
  },
  {
    folder: 'regulators',
    products: ['bloom.jpg', 'rootex.jpg', 'growmax.jpg', 'plantex.jpg', 'booster.jpg', 'cytokinin.jpg']
  },
  {
    folder: 'oils',
    products: ['neem-oil.jpg', 'white-oil.jpg', 'spreader.jpg', 'cleanex.jpg', 'royal.jpg', 'sticker.jpg']
  }
];

const baseDir = path.join(__dirname, 'public', 'images', 'products');

categories.forEach(category => {
  const categoryDir = path.join(baseDir, category.folder);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }
  
  // Create placeholder files
  category.products.forEach(product => {
    const filePath = path.join(categoryDir, product);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, 'placeholder image content');
    }
  });
});

console.log('Product image placeholders created successfully!');