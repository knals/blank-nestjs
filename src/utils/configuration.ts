import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
const YAML_CONFIG_FILENAME = `../config/enviroments/${
  process.env.NODE_ENV ? process.env.NODE_ENV : ''
}.config.yaml`;
console.log(__dirname);

export default () => {
  return yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;
};
