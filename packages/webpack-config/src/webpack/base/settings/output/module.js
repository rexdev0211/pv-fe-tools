import { appTarget, publicPath} from '../../../../helpers/paths';

export const moduleOutputSettings = {
  output: {
    path: appTarget,
    publicPath: publicPath,
    filename: 'js/[name].js',
    chunkFilename: 'js/chunks/[name].[hash].js',
  }
};