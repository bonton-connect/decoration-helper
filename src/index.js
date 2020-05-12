

export function apply(...decorators) {
    return {
        to(obj) {
            return decorators.reduceRight(
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

export function pipe(...decorators) {
    return function (obj) {
        return decorate(obj).with(...decorators);
    }
}

export function compose(...decorators) {
    return function (obj) {
        return apply(...decorators).to(obj);
    }
}

