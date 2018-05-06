/* eslint-disable multiline-ternary */
import path from 'path';

const getWorklet = (file, content, options) => {
  const publicPath = options.publicPath
    ? JSON.stringify(options.publicPath)
    : '__webpack_public_path__';

  const publicWorkletPath = `${publicPath} + ${JSON.stringify(file)}`;

  if (options.inline) {
    const InlineWorkletPath = JSON.stringify(`!!${
      path.join(__dirname, 'InlineWorklet.js')
    }`);

    return `require(${InlineWorkletPath})(${JSON.stringify(content)})`;
  }

  return publicWorkletPath;
};

export default getWorklet;
