let vm;

/**
* @param {string} s
* @returns {string}
*/
module.exports.say = function(s) {
    if (typeof s === 'object') s = JSON.stringify(s);
    return vm.RunString('say', s);
};

/**
* @param {Uint8Array} image_data
* @returns {string}
*/
module.exports.handler_photo = function(image_data) {
    if (Buffer.isBuffer(image_data) && image_data.byteLength < Buffer.poolSize) image_data = new Uint8Array(image_data.buffer.slice(image_data.byteOffset, image_data.byteOffset + image_data.byteLength));
    return vm.RunString('handler_photo', image_data);
};

const path = require('path').join(__dirname, 'ssvm_nodejs_starter_lib_bg.wasm');
const ssvm = require('ssvm');
vm = new ssvm.VM(path, { args:process.argv, env:process.env, preopens:{'/': __dirname} });

