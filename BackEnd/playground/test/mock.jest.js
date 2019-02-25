

describe('Mock de funciones', () => {
    test('mockname getmockname', () => {
        const mock = jest.fn();

        mock.mockName('miFuncion');
        expect(mock.getMockName()).toBe('miFuncion')
    })

    test('toHaveBeenCalledWith', () => {
        const mock = jest.fn();

        // mock('funciona');
        mock('funciona');
        mock(true);

        expect(mock).toHaveBeenCalledWith('funciona');
        expect(mock).toHaveBeenCalledWith(expect.any(String))
        expect(mock).toHaveBeenLastCalledWith(expect.any(Boolean))

        expect(mock).toHaveBeenCalledTimes(2);
    });

    test('mock return value ', () => {
        const mock = jest.fn();

        mock
            .mockReturnValueOnce(true)
            .mockReturnValueOnce(false)
            .mockReturnValue('funciona');

        expect(mock()).toBe(true);
        expect(mock()).toBe(false);
        expect(mock()).toBe('funciona');
        expect(mock()).toBe('funciona');
    });

    test("mock filter", () => {
        const miFiltrado = jest.fn();

        miFiltrado
            .mockReturnValueOnce(false)
            .mockReturnValueOnce(true)

        const arr = [11,22,33];

        expect(arr.filter(miFiltrado)).toEqual([arr[1]]);

        expect(miFiltrado.mock.calls).toEqual([
            [11, 0, arr],
            [22, 1, arr],
            [33, 2, arr]
        ]);

        expect(miFiltrado.mock.calls[1]).toEqual([22, 1, arr]);
    })

    test('mock de libreria moment', () => {
        const moment = jest.fn(require('moment'));

        const hoy = moment('1970-01-01');
        const manyana = hoy.add(1, 'day');

        expect(moment).toHaveBeenCalledTimes(1);
        expect(moment).toHaveBeenCalledWith('1970-01-01');
        expect(manyana.format('YYYY-MM-DD')).toBe('1970-01-02');
    })

    test('mock de moment timestamp 0', () => {
        const moment = jest.fn((timestamp = '2019-02-21') => require('moment')(timestamp));

        expect(moment().valueOf()).not.toBe(0);
        expect(moment().format('YYYY-MM-DD')).toBe('2019-02-21');
    });


    test('instancias mock', () => {
        function x(_name){
            this.name = _name || 'test';

            this.miFuncion = jest.fn( function (param) {
                return param || 'funciona'
            } );
        };

        const MiMock = jest.fn(x);

        const Instancia = new MiMock('hola');
        const Instancia2 = new MiMock();

        Instancia2.miFuncion('MiFuncion');

        expect(MiMock.mock.instances[0].name).toBe('hola')
        expect(MiMock.mock.instances[1].miFuncion)
            .toHaveBeenCalledTimes(1)

        expect(MiMock.mock.instances[1].miFuncion)
            .toHaveBeenCalledWith('MiFuncion')
    })

    test('mock implementation once', () => {
        const mock = jest.fn();

        mock
            .mockImplementationOnce( callback => callback(null, true) )
            .mockImplementation( callback => callback("Falla", undefined) )

        expect(mock( (err, res)=> err || res)).toBe(true);

        mock( (err, res)=> err || res)
        expect(mock.mock.results[1].value).toBe("Falla");
    })
});