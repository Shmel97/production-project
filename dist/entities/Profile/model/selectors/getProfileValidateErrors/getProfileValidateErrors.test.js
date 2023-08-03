import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';
describe('getProfileValidateErrors.test', function () {
    test('should work with filled state', function () {
        var state = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_COUNTRY,
                ],
            },
        };
        expect(getProfileValidateErrors(state)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getProfileValidateErrors(state)).toEqual(undefined);
    });
});
