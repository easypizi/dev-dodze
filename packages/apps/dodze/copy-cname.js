// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const copyFile = (source, target) => {
  fs.copyFileSync(source, target);
};

copyFile('CNAME', 'build/CNAME');
