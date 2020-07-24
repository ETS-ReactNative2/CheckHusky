const fs = require('fs');

function copyFile(source, target, cb) {
  let cbCalled = false;

  const rd = fs.createReadStream(source);
  rd.on('error', err => {
    done(err);
  });
  const wr = fs.createWriteStream(target);
  wr.on('error', err => {
    done(err);
  });
  wr.on('close', () => {
    done();
  });
  rd.pipe(wr);

  function done(err) {
    if (!cbCalled) {
      cb(err);
      cbCalled = true;
    }
  }
}

copyFile(
  './scripts/node-modules/react-native-background-geolocation/VERSIONS.gradle',
  './node_modules/@mauron85/react-native-background-geolocation/android/common/VERSIONS.gradle',
  () => {},
);
