/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Downloader from './Downloader';

AppRegistry.registerComponent(appName, () => Downloader);
