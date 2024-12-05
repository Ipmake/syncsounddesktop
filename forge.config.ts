import type { ForgeConfig } from '@electron-forge/shared-types';
import { MakerSquirrel } from '@electron-forge/maker-squirrel';
import { MakerZIP } from '@electron-forge/maker-zip';
import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerRpm } from '@electron-forge/maker-rpm';
import { AutoUnpackNativesPlugin } from '@electron-forge/plugin-auto-unpack-natives';
import { WebpackPlugin } from '@electron-forge/plugin-webpack';
import { FusesPlugin } from '@electron-forge/plugin-fuses';
import { FuseV1Options, FuseVersion } from '@electron/fuses';

import { mainConfig } from './webpack.main.config';
import { rendererConfig } from './webpack.renderer.config';

const config: ForgeConfig = {
  packagerConfig: {
    asar: true,
    icon: __dirname + '/images/logo.ico',
    name: 'SyncSound Desktop',
    executableName: 'syncsounddesktop'
  },
  rebuildConfig: {},
  makers: [
    new MakerSquirrel({
    setupIcon:  __dirname + "/images/logo.ico"
  }),
  new MakerZIP({}, ['darwin'])],
  plugins: [],
};

export default config;
