import {createRoutesFromChildren} from 'react-router'
import {getRouteList} from './reactRoutes';
import App from '../examples/basic/src/App';
function findRoutesList(el) {
  console.log(el.props.children[2].type.name === 'Routes')
}
// const list = getRouteList(createRoutesFromChildren(App.default()), "");
// @ts-ignore
const list = findRoutesList(App.default())
// console.log(list);