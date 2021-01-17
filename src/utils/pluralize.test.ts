import pluralize from './pluralize';

const expectedForms = [
    {
        n: 0,
        form: 'fungi'
    }, {
        n: 1,
        form: 'fungus'
    }, {
        n: 3,
        form: 'fungi'
    }, {
        n: 11,
        form: 'fungi'
    }, {
        n: 17,
        form: 'fungi'
    }, {
        n: 88,
        form: 'fungi'
    }, {
        n: 551,
        form: 'fungus'
    }, {
        n: 12345,
        form: 'fungi'
    }, {
        n: 5555511,
        form: 'fungi'
    }, {
        n: 99999991,
        form: 'fungus'
    },
]

expectedForms.forEach(({n, form}) => {
    test(`${n} ${form}`, () => {
        expect(pluralize(n, 'fungus', 'fungi')).toBe(form);
    });
});
