import {validateData} from './core.js';
const KEY='study-tracker-v1';
export const initial=()=>({version:1,books:[{id:'starter',title:'合格革命 行政書士 スタートダッシュ',category:'行政書士',total:null,start:0,current:null,startDate:'2026-10-26',targetDate:'2026-11-22',memo:''}],logs:[]});
export function load(){const raw=localStorage.getItem(KEY);return raw?validateData(JSON.parse(raw)):initial();}
export function save(data){validateData(data);localStorage.setItem(KEY,JSON.stringify(data));}
