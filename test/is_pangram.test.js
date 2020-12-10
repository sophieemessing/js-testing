const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
    test('isPangram() is defined', () => {
        expect(isPangram).toBeDefined();
    });

    test('works with a pangram with only lower case', () => {
        const text = 'the quick brown fox jumps over the lazy dog';
        const answer = isPangram(text);
        expect(answer).toEqual(true);

    });

    test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
        const text = "abcdefghijklmnopqrstuvwxyz";
        const answer = isPangram(text);
        expect(answer).toEqual(true);

    });

    test("missing character 'x'", () => {
        const text = 'the quick brown foo jumps over the lazy dog';
        const answer = isPangram(text);
        expect(answer).toEqual(false);

    });

    test('empty sentence', () => {
        const text = '';
        const answer = isPangram(text);
        expect(answer).toEqual(false);

    });

    test('pangram with underscores instead of spaces works', () => {
        const text = 'the_quick_brown_fox_jumps_over_the_lazy_dog';
        const answer = isPangram(text);
        expect(answer).toEqual(true);

    });

    test('pangram with numbers', () => {
        const text = 'the quick brown fox jumps 100 miles over the lazy dog';
        const answer = isPangram(text);
        expect(answer).toEqual(true);

    });

    test('returns true for alphabet twice', () => {
        const text = 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz';
        const answer = isPangram(text);
        expect(answer).toEqual(true);

    });
});