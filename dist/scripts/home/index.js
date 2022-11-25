import {addEvents} from './addFunction.js';

const el = tag => document.querySelector(tag);
const ul = el("nav > ul");

addEvents(ul);
