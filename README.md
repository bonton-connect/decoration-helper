# Decoration Helper

This is a absolutely tiny library to help decorate functions or classes in the ugly messy pre-standardized decorator spec era in Javascript.

![Example](https://i.imgur.com/S2NnIgR.png)


## Installation

If you're here, you already know.

```bash
yarn add decoration-helper
```

## Usage Example

To achieve this

```javascript
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

```javascript
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

```javascript
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

## License
Public Domain