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
  // The value to watch
  // Can be anything (string, number, object, array, anything...)
  value={props.someValue}
  // test receives current and previous value
  // test is invoked in componentDidUpdate
  test={(currentValue, prevValue) => returnsBool(currentValue, prevValue)}
  // action will be invoked anytime that test returns true
  // action also receives current and previous value
  action={(/* currentValue, prevValue */) => doSomething()}
/>
```

Example: Trigger requests when request criteria changes.

```jsx
// Request data for current page when the page changes (think pagination).
<Watch
  value={props.currentPage}
  test={(page, prevPage) => page !== prevPage}
  action={page => props.requestPageData(page)}
/>
```

```jsx
// Request data when search criteria changes (think product filtering).
<Watch
  value={makeRequestParams(this.props)}
  test={(params, prevParams) => !_.isEqual(params, prevParams)}
  action={params => requestDataWithParams(params)}
/>
```

React to state changes without requiring a class component for lifecyle methods.

```jsx
import React from 'react';
import {Watch} from 'react-render-watch';

function SomeComponent({text, setText, dangerFlag, setDangerFlag}) {
  return (
    <div>
      <p>Raise the danger flag once input length reaches 5</p>
      <input value={text} onChange={({target: {value}}) => setText(value)} />
      {dangerFlag && (
        <button onClick={() => setDangerFlag(false)}>
          Danger! (click to dismiss)
        </button>
      )}
      <Watch
        value={text}
        test={({length}, previous) => previous.length < 5 && length === 5}
        action={() => setDangerFlag(true)}
      />
    </div>
  );
}
```
