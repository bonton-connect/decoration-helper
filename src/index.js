
export function apply(...decorators) {
    return {
        to(obj) {
            return decorators.reverse().reduce(
                (decorator, obj) => decorator(obj), obj
            );
        }
    }
}

export function decorate(obj) {
    return {
        with(...decorators) {
            return decorators.reduce(
                (decorator, obj) => decorator(obj), obj
            );
        }
    }
}
