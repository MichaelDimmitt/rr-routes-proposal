import React from 'react'
import {Children, isValidElement, ReactNode, Fragment} from "react";
import { Route } from "react-router-dom";
function invariant(cond: any, message: any) {
  if (!cond) throw new Error(message);
}

export function findRoutesList(el) {
  // Exit condition
  if(el.type?.name === 'Routes') {return el}
  // If has children
  if(el.props?.children) {
    const childrenLength = el.props.children.length
    for(let i = 0; i < childrenLength; i++) {
      // If recursion ever passes shortcircuit early.
      if(findRoutesList(el.props.children[i])) { return el.props.children[i] }
    }
  }
}

export const getRouteList = (routes: any, appBasePath: string) => {
  // Usage:
  // Navigate to HospitalAppRoutes.tsx or AdminApp.tsx or CustomerApp.tsx.
  // import { getRouteList } from '@common/utils/routerUtil';
  // console.log(getRouteList(appRoutes, window.location.pathname.split('/')[1]));

  return buildRoutePath(routes)
    ?.flat(10)
    .filter((x: string) => x !== "" && x !== "/")
    .map((x: string) => `${appBasePath}/` + x);
};

interface ResolvedRoute {
  path: string;
  children: ResolvedRoute[];
  props: {children: ResolvedRoute[]};
}

function buildRoutePath(
  routes: ResolvedRoute[],
  curPath = ""
): string[] | null | undefined {
  // console.log('wha',routes,'wha')
  const finalRoutes = routes?.map((element: ResolvedRoute) => {
    let routesArray: any = [];
    let currentPathWithSlashIfNeeded = "";

    const path = element?.path || "";
    const children = element?.children || element?.props?.children;

    // concatenates path to child paths to form the overall route.
    if (curPath === "" || curPath === "/") {
    } else {
      currentPathWithSlashIfNeeded = curPath + "/";
    }
    if (children) {
      const tempChildren = Array.isArray(children) ? children : [children]
      routesArray = buildRoutePath(
        tempChildren,
        currentPathWithSlashIfNeeded + path
      );
      return routesArray;
    } else {
      var finalPath = path ? currentPathWithSlashIfNeeded + path : curPath;
      return finalPath;
    }
  });
  return finalRoutes;
}
