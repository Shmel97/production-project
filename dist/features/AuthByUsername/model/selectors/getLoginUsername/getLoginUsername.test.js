import { getLoginUsername } from './getLoginUsername';
describe('getLoginUsername.test', function () {
    test('should return value', function () {
        var state = {
            loginForm: {
                username: 'adminSS',
            },
        };
        expect(getLoginUsername(state)).toEqual('adminSS');
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginUsername(state)).toEqual('');
    });
});
