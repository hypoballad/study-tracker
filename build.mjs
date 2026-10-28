import {mkdir,copyFile,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true}); await mkdir('dist/icons',{recursive:true});
for(const f of ['index.html','style.css','app.js','core.js','store.js','sw.js','manifest.webmanifest','icons/icon.svg','icons/icon-192.png','icons/icon-512.png']) await copyFile(f,`dist/${f}`);
