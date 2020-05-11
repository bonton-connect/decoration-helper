

export function apply(...decorators) {
    return {
        to(obj) {
            return decorators.reverse().reduce(
                (obj, decorator) => decorator(obj), obj
            );
        }
    }
}


export function decorate(obj) {
    return {
        with(...decorators) {
            return decorators.reduce(
                (obj, decorator) => decorator(obj), obj
            );
        }
    }
}

