import {createRoutesFromChildren} from 'react-router'
import {getRouteList} from './reactRoutes';
import App from '../examples/basic/src/App';
const list = getRouteList(createRoutesFromChildren(App.default()), "");
console.log(list);