# react-render-watch

> Declaratively react to _state_ transitions.

_*state referring to any combination of React props, state, context, etc..._

## Why is this useful?

1. Declaratively describe the actions you want to happen when certain _state_ transitions occur.
2. Eliminate the need for class components when you just need componentDidUpdate.
3. Eliminate the need to promote state to props to properly watch for changes.
4. Enable ease of relocation for this type of logic.

## Examples

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

```jsx
// Request data for current page when the page changes (think pagination).
<Watch
  value={props.currentPage}
  test={(prevPage, page) => prevPage !== page}
  action={() => requestPageData(props.currentPage)}
/>
```
