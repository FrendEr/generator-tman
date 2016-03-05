import Creator from '../../src/es-next/es2015';

describe('ES2015', () => {
    describe('Class `Creator`', () => {
        let instance;

        before(() => {
            instance = new Creator('hello');
        });

        it('should get the name equal `hello`', () => {
            expect(instance.getName()).to.equal('hello');
        });
    });
});
