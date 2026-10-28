import {validateData,migrate} from './model.js';
const KEY='study-tracker-v2',OLD='study-tracker-v1';
export const initial=()=>({version:1,books:[{id:'starter',title:'合格革命 行政書士 スタートダッシュ',category:'行政書士',total:null,start:0,current:null,startDate:'2026-10-26',targetDate:'2026-11-22',memo:''}],logs:[]});
export function load(){const raw=localStorage.getItem(KEY);if(raw)return validateData(JSON.parse(raw));const old=localStorage.getItem(OLD);const next=migrate(old?JSON.parse(old):initial());if(old){if(!localStorage.getItem('study-tracker-v1-before-v2'))localStorage.setItem('study-tracker-v1-before-v2',old);save(next);}return next;}
export function save(data){validateData(data);localStorage.setItem(KEY,JSON.stringify(data));}
