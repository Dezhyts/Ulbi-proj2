const fs = require('fs').promises;
const path = require('path');

const dir = path.resolve(process.cwd(), 'node_modules/.cache');

(async () => {
  try {
    await fs.rm(dir, { recursive: true, force: true });
  } catch (err) {
    console.log(err);
  }
})();
