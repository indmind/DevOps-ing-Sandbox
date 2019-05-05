const sadBoy = require('../lib/sad.js')

test('so sad boy', () => {
    expect(sadBoy("dani", "inad", 4)).toBeTruthy();
    expect(sadBoy("dart", "python", 5)).toBeTruthy();
    expect(sadBoy("dvync", "indmind", 2)).toBeFalsy();
})