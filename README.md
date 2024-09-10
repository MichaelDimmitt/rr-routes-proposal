## react-routes proposal for react router
A command to list routes for an application that uses react router.

## Objectives:
1. List routes. (Currently this works via cypress + a react app running.)
2. Should allow static evaluation and not require the app to be running.

## Test data
I need to find or create react-router implementations that:
1. show deeply nested route "object style" working.
2. show deeply nested route "component style" working.

Ideally these will be in the react-router examples codebase or be added when/if this change is pr'd.

Therefore, I am going to start using some of the react-router examples as my initial data-set.  
(list generated by looking at a few lines and then using count lines of code to find the largest examples.)
1. route-objects [examples/route-objects/src/App.tsx](https://github.com/remix-run/react-router/blob/main/examples/route-objects/src/App.tsx)
2. auth [examples/auth-router-provider/src/App.tsx](https://github.com/remix-run/react-router/blob/main/examples/auth-router-provider/src/App.tsx) 
3. transitions [examples/view-transitions/src/main.tsx](https://github.com/remix-run/react-router/blob/main/examples/view-transitions/src/main.tsx)

This project will have a test folder that uses cypress to assert the routes output match desired results.

Resources:
https://github.com/AlDanial/cloc
```bash
cd ../react-router/examples/ &&
for d in ./*/ ; do (
  cd "$d" && 
  printf '%-40s' "$d" && 
  cloc --vcs git | 
  grep -vE "Language|JSON|-|TypeScript|CSS|HTML|Markdown|github.com/AlDanial|JSX|JavaScript" 
); done &&
cd -;
```
