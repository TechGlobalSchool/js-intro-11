import { name, hi, obj } from './NavHelper.js';
import { Batch11Helper } from './Batch11Helper.js';
import BrowserHelper from './BrowserHelper.js';
import { close, refresh } from './AutomationHelper.js';
import open from './AutomationHelper.js'

hi();
console.log(name);
console.log(obj);
console.log(obj.city);

Batch11Helper.funcA();
Batch11Helper.funcB();

console.log(BrowserHelper.browserName);
console.log(BrowserHelper.launch());

open();
close();
refresh();