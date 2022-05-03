const readline = require('readline');
const sharp = require('sharp');
const path = require('path');

const RL = readline.createInterface(process.stdin, process.stdout);

const DESTINATION_FOLDER = path.resolve(__dirname, 'static');

const _getName = callback => {
  RL.question('Image name? ', name => {
    if (name.length < 5) {
      RL.write('image name has to more then 5 letters\n');
      return _getName(callback);
    }
    if (name.substr(name.length - 4, 4) !== '.jpg') {
      RL.write('image name should end with .jpg\n');
      return _getName(callback);
    }
    callback(name);
  });
};

const getName = () => new Promise(r => _getName(r));

const _getWidth = callback => {
  RL.question('Image width (in px)? ', width => {
    try {
      width = parseInt(width);
      if (!Number.isInteger(width)) {
        RL.write('width has to be an integer\n');
        _getWidth(callback);
      }
      callback(width);
    } catch (e) {
      RL.write('width has to be an integer\n');
      return _getWidth(callback);
    }
  });
};
const getWidth = () => new Promise(r => _getWidth(r));

const _getHeight = callback => {
  RL.question('Image height (in px)? ', height => {
    try {
      height = parseInt(height);
      if (!Number.isInteger(height)) {
        RL.write('height has to be an integer\n');
        _getHeight(callback);
      }
      callback(height);
    } catch (e) {
      RL.write('height has to be an integer\n');
      return _getHeight(callback);
    }
  });
};
const getHeight = () => new Promise(r => _getHeight(r));

(async () => {
  const name = await getName();
  const width = await getWidth();
  const height = await getHeight();

  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: {
        r: 238,
        g: 19,
        b: 139,
        alpha: 1
      }
    }
  })
    .composite([
      {
        input: Buffer.from(`<svg>
     <rect x="0" y="0" width="${width}" height="${height}" fill="#ee138b" />
     <text x="10" y="20" font-size="12" fill="#fff">${name}</text>
   </svg>`),
        gravity: 'center'
      }
    ])
    .jpeg()
    .toFile(path.resolve(DESTINATION_FOLDER, name));

  console.log(`image "${name}" (${width}px/${height}px) created in "${path.resolve(DESTINATION_FOLDER)}"`);

  process.exit();
})();
