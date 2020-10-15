import CopyWebpackPlugin from "copy-webpack-plugin";

import { resolveApp, getAppConfig } from "../../../helpers/paths";

const { resourcesSrc } = getAppConfig();

export const copyResources = {
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: resolveApp(resourcesSrc), to: resourcesSrc }]
    })
  ]
};
