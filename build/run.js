const child_process = require('child_process');
const path = require('path');

const child = ['vue2', 'vue3', 'react15', 'react16', 'service', 'main'];

child.forEach((item) => {
  const filePath = path.join(__dirname, `../${item}`);
  child_process.spawn(`cd ${filePath} && yarn start`, {
    shell: true,
    stdio: 'inherit',
  });
});
