# react-render-watch

[![npm](https://img.shields.io/npm/v/react-render-watch.svg?style=flat-square)](https://www.npmjs.com/package/react-render-watch)
[![gzip size](http://img.badgesize.io/https://unpkg.com/react-render-watch/dist/react-render-watch.umd.min.js?compression=gzip)](https://unpkg.com/react-render-watch/dist/react-render-watch.umd.min.js)

Declaratively react to _state_ transitions.

_\*state referring to any combination of React props, state, context, etc..._

```jsx
<Watch
  // The value to watch
  value={props.someValue}
  // test receives current and previous value
  test={(current, prev) => returnsBool(current, prev)}
  // action will be invoked anytime that test returns true
  action={(/* current, prev */) => doSomething()}
/>
```

## API

| prop   | description                                                          |
| ------ | -------------------------------------------------------------------- |
| value  | The value to watch                                                   |
| test   | Function that returns boolean given `test(current, prev)`            |
| action | Function to be invoked as `action(current, prev)` when `test` passes |

## Installation

Install via `yarn` or `npm`.

```
yarn add react-render-watch
// or
npm install --save react-render-watch
```

## Usage

### Importing `Watch`

`react-render-watch` has a single, named export:

```jsx
// ES6 Modules
import {Watch} from 'react-render-watch';
// CommonJS
const Watch = require('react-render-watch').Watch;

// ...
// Use such as <Watch {...watchProps} />
```

### Examples

**Request new items when page changes (think pagination).**

```jsx
<Watch
  value={props.currentPage}
  test={(page, prevPage) => page !== prevPage}
  action={page => props.requestPageData(page)}
/>
```

**Request data when search criteria changes (think advanced product filtering).**

```jsx
<Watch
  value={makeRequestParams(this.props)}
  test={(params, prevParams) => !_.isEqual(params, prevParams)}
  action={params => requestDataWithParams(params)}
/>
```

**React to state changes without requiring a class component for lifecyle methods.**

```jsx
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
