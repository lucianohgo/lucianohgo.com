---
title: 'React Memoization Cheatsheet: 5 different ways to memoize and why it matters'
date: '2020-05-02'
description: "In the post, we'll learn a few tips and tricks about the React library Memoization tools. How to effectively use things like useMemo, useCallback, useRef and React.memo."
cover: 'https://lucianohgo.com/images/memoization.jpg'
coverAlt: 'Memoization graph showing expensive vs cached renders'
authors:
  - lucianohgo
tags:
  - react
  - javascript
  - rendering
---

React is improving fast and new versions pack a lot of different cool features
built into the library. One of the coolest is the set of tooling around
[Memoization](https://en.wikipedia.org/wiki/Memoization). In this post we'll
learn a few tips and tricks on the subject, things I've used in production and
helped me speed up heavy renders.

## Why it matters

Already know why it matters? [Go straight to the cheat sheet
⏭](#the-cheat-sheet)

Memoizing is a well-known concept in computer programming, aiming to **speed up
programs by caching results** of expensive function calls and re-using those
cached results as to avoid repeating those expensive operations:

![Memoization graph showing expensive vs cached renders](/images/memoization.jpg
"Memoization diagram") *Memoization speeding up an expensive component's render*

When using React, depending on how big and complex your component tree is, **the
process of rendering might be one of these expensive operations**. The process
of [reconciliation](https://reactjs.org/docs/reconciliation.html) alone might
already be too heavy if it always has to go over the whole tree. This kind of
computation, when done in the UI thread, can impose a heavy tax on the user
experience, making your UI non-responsive and sluggish. In fact if we want to
meet [RAIL's goals and
guidelines](https://developers.google.com/web/fundamentals/performance/rail#goals-and-guidelines)
we have 50ms of time to do computations before we actually respond to user
input.

A heavy, unresponsive and sluggish UI can lead to frustrated users and a sense
of fatigue while using your application and on React application avoiding
re-renders is usually one of the most impactful performance improvements you can
do on [Rendering
Performance](https://developers.google.com/web/fundamentals/performance/rendering)

## The Cheat Sheet

This is the actual cheatsheet :) If you know some other ways to use memoization,
lemme know!

### Memoizing Components

When a component does not need to render when it's props change, we can let
React know that so that it won't try to render from that component down unless
it has to.

>Note that the advantage of Memoizing components only pays off when rendering is
>expensive. For simple children trees it can be quicker to just do the render
>compared to the overhead of comparing props.

#### Function Components

React comes with an awesome
[HoC](https://reactjs.org/docs/higher-order-components.html):
[`React.memo`](https://reactjs.org/docs/react-api.html#reactmemo) that allows us
to  memoize function components:

```jsx
// When we use the HoC without supplying a comparation function it
// will shallowly compare the props of the component to determine
// if it calls the render function
const MemoizedComponent = React.memo(MyComponent)

// We can supply a custom comparation function:
const areEqual = (prevProps, nextProps) => {
  // Only re-render when 'id' changes
  return prevProps.id === nextProps.id;
}

const MemoizedComponent = React.memo(MyComponent, areEqual);
```

#### Class Components

React has shipped with `shouldComponentUpdate` for a long time.
`shouldComponentUpdate` is a method which is used in the
[reconciliation](https://reactjs.org/docs/reconciliation.html) algorithm to tell
if a component should trigger it's `render()` method or not. Like with
`React.memo` there's an easy way to implement that comparison if we only need a
default shallow comparison of props:
[`React.PureComponent`](https://reactjs.org/docs/react-api.html#reactpurecomponent)

```jsx
// Shallow comparison of props on shouldComponentUpdate
class MyComponent extends React.PureComponent {
  render(props) {
    return <div />
  }
}

// Custom shouldComponentUpdate
class MyComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // Only re-render when 'id' prop changes
    // and state.active changed
    return this.props.id !== nextProps.id &&
           this.state.active !== nextState.active;
  }

  render(props) {
    return <div />
  }
}
```

>Note that shouldComponentUpdate is the opposite of the comparison function for
>React.memo which can be interpreted as a `areEqual` function

### Memoizing Props

When using literals, like `string` and `number` shallow comparison usually
suffices for component memoization. However if we're using functions and
objects, we need to memoize them in a different way. Because:

```jsx
{ foo: 'bar' } === { foo: 'bar' } // false
[1, 2, 3] === [1, 2, 3] // false
(a => a) === (a => a) // false
```

Don't worry though, React ships with some cool helpers for that too :)

#### Memoizing Functions

To memoize functions, we can use
[`useCallback`](https://reactjs.org/docs/hooks-reference.html#usecallback)

```jsx
// Creating a memoized callback:
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

##### Example of usage in a component

```jsx
function MyComponent({ id, ...props }) {
  // Will only rerender Button if id changes
  const onButtonClick = useCallback(
    () => getUserData(id),
    [id],
  );

  return (
    // If Button is memoized, it will only rerender if id changed
    <Button onClick={onButtonClick}>I'm a button</Button>
  );
}

// if we had a <button onClick={() => getUserData(id)}/>
// the component would even if the id did not change
```

#### Memoizing heavy computations, Objects, Arrays, Sets, etc

To memoize the return of heavy computation functions, Objects, Arrays, Sets, etc
we can use
[`useMemo`](https://reactjs.org/docs/hooks-reference.html#usecallback). We're
meant to use this **only if the value needs to change based on a certain
property**, [if you need a consistent reference there is another
way](./#consistent-reference-when-contents-do-not-change)

Up until now, we were memoizing values to prevent the render from happening.
With `useMemo` however, we can prevent heavy computation from happening as well
by storing a value in memory.

```jsx
// computeExpensiveValue only called if a or b change value
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// object only changes if a or b changes
const memoizedObject = useMemo(() => ({ a, b }), [a, b]);
```

##### Example of usage in a component

```jsx
function ProfilePage({
  profile: {
    name,
    phone,
  }
  visitedLocations,
  favoriteLocations,
}) {
  // Only changes if name or phone changes
  const userData = useMemo(() => ({
    name,
    phone: format(phone),
  }), [name, phone]);

  // Only gets called again if visitedLocations change
  const visited = useMemo(
    () => calculateClusters(visitedLocations),
  [visitedLocations]);

  // Only gets called again if favoriteLocations change
  const favorites = useMemo(
    () => calculateClusters(favoriteLocations),
  [favoriteLocations]);

  return (
    <>
      <Header />
      <Map clusters={visited} /> // If memoized, only rerender if visited changed
      <Divider />
      <Map clusters={favorites} /> // If memoized, will only rerender if favorites changed
      <Profile data={userData} /> // If memoized, will only rerender if userData changed
    <>
  );
}
```

>Note that most of the time you shouldn't be doing heavy computation inside
>render methods, if possible, you should avoid doing that in the UI thread
>altogether. If you're interested, [Surma](https://twitter.com/DasSurma) has a
>[really good article on how to move computation off of the main
>thread](https://web.dev/off-main-thread/)

#### Consistent Reference When Content Does Not Change

To get a consistent reference to a value, we can use the
[useRef](https://reactjs.org/docs/hooks-reference.html#useref) hook:

```jsx
const refContainer = useRef(initialValue);

// If you want to rename it and not use the .current
const { current: value } = useRef(initialValue);
```

##### Example of usage in a component (useRef)

```jsx
function ProfileData({
  data,
  id,
}) {
  const intervalRef = useRef();

  useEffect(() => {
    const intervalId = setInterval(() => {
        updateData(id)
    });
    intervalRef.current = intervalId;
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [id]);

  return (
    <>
      <div>{data}</div>
      // Button won't re-render on every interval tic
      <Button onClick={() => clearInterval(intervalRef.current)}>
        Stop updates
      </Button>
    <>
  );
}
```

We can use it to **get a reference to initial prop values as well**:

```jsx
function TracedComponent({ trace, ...props}) {
  // keep reference to the initial values
  const { current: initialValues } = useRef({
      trace,
      params: {
        traceName: 'component',
        ...props
    }
  })

  useEffect(() => {
    const { trace, params } = initialValues;
    trace.start(params) // Only cares about initial values
  }, [])

  // Needs to be updated when props change 👇🏾
  return <Component {...props} />
}
```

---

## See Also

0. [React Top Level API -- React](https://reactjs.org/docs/react-api.html);
1. [Hooks API Reference --
   React](https://reactjs.org/docs/hooks-reference.html#useref);
2. [Hooks FAQ --
   React](https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables);
3. [You’re overusing useMemo: Rethinking Hooks memoization -- LogRocket
   Blog](https://blog.logrocket.com/rethinking-hooks-memoization/);
4. [Measure Performance with the RAIL Model -- Web
   Fundamentals](https://developers.google.com/web/fundamentals/performance/rail);
5. [Rendering Performance -- Web
   Fundamentals](https://developers.google.com/web/fundamentals/performance/rendering)
6. [Use web workers to run JavaScript off the browser's main thread --
   web.dev](https://web.dev/off-main-thread/)
