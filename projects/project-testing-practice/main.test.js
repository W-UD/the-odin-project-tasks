import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './main.js';

const reverseStr = reverseString('okelah yah');

test('there is no I in team', () => {
  expect(capitalize('T is the first character of this.')).not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect(capitalize('T is the first character of this.')).toMatch(/T/);
});

test('Reverse string of the input is..', () => {
  expect(reverseString('okelah yah')).toMatch(new RegExp(reverseStr));
});

test('Reverse string of the input is..', () => {
  expect(reverseString('okelah yah')).not.toMatch('oku');
});

test('calculator test...', () => {
  const addTest = calculator.add(5, 5);
  // add test
  expect(addTest).toBeGreaterThan(5);
  expect(addTest).toBeGreaterThanOrEqual(10);
  expect(addTest).toBeLessThan(50);
  expect(addTest).toBeLessThanOrEqual(40);

  // toBe and toEqual are equivalent for numbers
  expect(addTest).toBe(10);
  expect(addTest).toEqual(10);
});

//CaesarCipher Test
test('Caesar Cipher test..is abc', () => {
  expect(caesarCipher('xyz', 3)).toBe('');
});

test('HeLLo should return KhOOr', () => {
  expect(caesarCipher('HeLLo', 3));
});

test("'Hello, World!', should return 'Khoor, Zruog!'", () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('handles zero shift', () => {
  expect(caesarCipher('Hello', 0)).toBe('Hello');
});

test('handles large shifts', () => {
  expect(caesarCipher('abc', 26)).toBe('abc');  // Full rotation
  expect(caesarCipher('abc', 27)).toBe('bcd');  // 27 = 1
});

// AnalyzerArray Test
test('AnalyzerArray Test..works', () => {
  expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
  expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
  expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
  expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
});
