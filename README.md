# Decoration Helper

This is a absolutely tiny library to help decorate functions or classes in the ugly messy pre-standardized decorator spec era in Javascript.

![Example](https://i.imgur.com/S2NnIgR.png)

Features:
- Natural composition with `decorate(...).with(fn)`
- Decorator style composition with `apply(...).to(fn)`
- Functional `pipe(...)(fn)` and `compose(...)(fn)` included.

## Installation

If you're here, you already know.

```
yarn add decoration-helper
```

## Usage

To achieve this

```js
@inject('app', 'auth')
@withRouter
@observer
function tomato() {
    console.log("tomato");
}

export default inject('app', 'auth')(
    withRouter(
        observer(tomato)
    )
);
```

you write this:

```js
import { apply } from 'decoration-helper';

function tomato() {
    console.log("tomato");
}

export default apply(
    inject('app', 'auth'),
    withRouter,
    observer
).to(tomato);
```

or alternatively this, if you prefer:

```js
import { decorate } from 'decoration-helper';

function tomato() {
    console.log("tomato");
}

export default decorate(tomato).with(
    observer,
    withRouter,
    inject('app', 'auth')
);
```

**Note:** The order is _not_ when using `decorate(obj).with(...decorators)`


## `pipe()` and `compose()`

The proper functional approach would be to use `pipe()` and `compose()` as described by 
[Eric Elliot](https://medium.com/@_ericelliott).
This [post](https://medium.com/free-code-camp/pipe-and-compose-in-javascript-5b04004ac937) has
more details about it.

```js
// Analogous to decorate(fn).with(...);

import { pipe } from 'decoration-helper';

function tomato() {
    console.log("tomato");
}

export default pipe(
    observer,
    withRouter,
    inject('app', 'auth')
)(tomato);



// Analogous to apply(...).to(fn);

import { compose } from 'decoration-helper';

function tomato() {
    console.log("tomato");
}

export default compose(
    inject('app', 'auth'),
    withRouter,
    observer  
)(tomato);
```


## License
MIT