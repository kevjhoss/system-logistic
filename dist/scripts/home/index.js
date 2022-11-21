import {addEvents} from './addFunction.js';

const el = tag => document.querySelector(tag);
const ul = el("nav > ul");
const section = el("section");

addEvents(ul,section);
