const assert = require('assert');
const decoration = require('../dist');

function double(func) {
    return function(...args) {
        return func(...args) * 2;
    }
}

function squared(func) {
    return function(...args) {
        return func(...args) ** 2;
    }
}

function add(a, b) {
    return a + b;
}


describe('apply..to()', () => {
    it('Return the original function without decorators', () => {
        const _add = decoration.apply().to(add);
        assert.equal(_add, add);
        assert.equal(_add(2, 3), 5);
    });

    it('Should decorate functions with a single decorator', () => {
        const _add = decoration.apply(squared).to(add);
        assert.equal(_add(2, 3), 25);
    });

    it('Should decorate functions with multiple decorators', () => {
        const _add = decoration.apply(double, squared).to(add);
        assert.equal(_add(2, 3), 50);

        const _add2 = decoration.apply(squared, double).to(add);
        assert.equal(_add2(2, 3), 100);
    });
});


describe('decorate..with()', () => {
    it('Return the original function without decorators', () => {
        const _add = decoration.decorate(add).with();
        assert.equal(_add, add);
        assert.equal(_add(2, 3), 5);
    });

    it('Should decorate functions with a single decorator', () => {
        const _add = decoration.decorate(add).with(squared);
        assert.equal(_add(2, 3), 25);
    });

    it('Should decorate functions with multiple decorators', () => {
        const _add = decoration.decorate(add).with(double, squared);
        assert.equal(_add(2, 3), 100);

        const _add2 = decoration.decorate(add).with(squared, double);
        assert.equal(_add2(2, 3), 50);
    });
});

describe('compose()()', () => {
    it('Return the original function without decorators', () => {
        const _add = decoration.compose()(add);
        assert.equal(_add, add);
        assert.equal(_add(2, 3), 5);
    });

    it('Should decorate functions with a single decorator', () => {
        const _add = decoration.compose(squared)(add);
        assert.equal(_add(2, 3), 25);
    });

    it('Should decorate functions with multiple decorators', () => {
        const _add = decoration.compose(double, squared)(add);
        assert.equal(_add(2, 3), 50);

        const _add2 = decoration.compose(squared, double)(add);
        assert.equal(_add2(2, 3), 100);
    });
});


describe('pipe()()', () => {
    it('Return the original function without decorators', () => {
        const _add = decoration.pipe()(add);
        assert.equal(_add, add);
        assert.equal(_add(2, 3), 5);
    });

    it('Should decorate functions with a single decorator', () => {
        const _add = decoration.pipe(squared)(add);
        assert.equal(_add(2, 3), 25);
    });

    it('Should decorate functions with multiple decorators', () => {
        const _add = decoration.pipe(double, squared)(add);
        assert.equal(_add(2, 3), 100);

        const _add2 = decoration.pipe(squared, double)(add);
        assert.equal(_add2(2, 3), 50);
    });
});

