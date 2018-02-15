# react-render-watch

[![npm](https://img.shields.io/npm/v/react-render-watch.svg?style=flat-square)](https://www.npmjs.com/package/react-render-watch)
[![gzip size](http://img.badgesize.io/https://unpkg.com/react-render-watch/dist/react-render-watch.umd.min.js?compression=gzip)](https://unpkg.com/react-render-watch/dist/react-render-watch.umd.min.js)

Declaratively react to _state_ transitions.

_\*state referring to any combination of React props, state, context, etc..._

## Usage

Install via `npm` or `yarn`.

```
npm install react-render-watch
// or
yarn add react-render-watch
```

```jsx
<Watch
  // value is the value to watch. Can be anything. A string, object, array... anything.
  value={props.someValue}
  // test receives previous and current value. Invoked in componentDidUpdate.
  test={(prevValue, currentValue) => returnsBool(prevValue, currentValue)}
  // action will be invoked anytime that test returns true.
  action={(/* prevValue, currentValue */) => doSomething()}
/>
```

Example: Trigger requests when request criteria changes.

```jsx
// Request data for current page when the page changes (think pagination).
<Watch
  value={props.currentPage}
  test={(prevPage, page) => prevPage !== page}
  action={() => requestPageData(props.currentPage)}
/>
```

```jsx
// Request data when search criteria changes (think product filtering).
<Watch
  value={makeRequestParams(this.props)}
  test={(prevParams, params) => !_.isEqual(prevParams, params)}
  action={(_, params) => requestDataWithParams(params)}
/>
```

React to state changes without requiring a class component for lifecyle methods.

```jsx
import React from 'react';
import {Watch} from 'react-render-watch';

function SomeComponent({value, setValue, dangerFlag, setDangerFlag}) {
  return (
    <div>
      <p>Raise the danger flag once input length reaches 5</p>
      <input value={value} onChange={({target: {value}}) => setValue(value)} />
      {dangerFlag && (
        <button onClick={() => setDangerFlag(false)}>
          Danger! (click to dismiss)
        </button>
      )}
      <Watch
        value={value}
        test={(previous, {length}) => previous.length < 5 && length === 5}
        action={() => setDangerFlag(true)}
      />
    </div>
  );
}
```
