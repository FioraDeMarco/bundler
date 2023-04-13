import './style.scss'
import {camelCase} from 'lodash';

console.log(camelCase('hello world'))




//In Webpack a loader is a way to preprocess a file. In this case we want to import some css code and then
//tell our javascript to inject that css in the DOM when our web application is loaded. 

//  Essentially, loaders provide a way to handle any kind of file that's not plain JavaScript


