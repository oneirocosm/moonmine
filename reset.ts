import path from 'path';
import fs from 'fs';

const nmpCache = path.join(process.env.APPDATA ?? "~", ".minecraft", "nmp-cache")
fs.rmSync(nmpCache, { recursive: true, force: true })