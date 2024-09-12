import {createRoutesFromChildren} from 'react-router'
import {getRouteList, findRoutesList} from './reactRoutes';
import App from '../examples/basic/src/App';

// @ts-ignore
const routesList = findRoutesList(App.default())
const list = getRouteList(createRoutesFromChildren(routesList.props.children), "");
console.log(list);