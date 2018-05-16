const generate = require('../../database/csv-generation.js');

test('the generateData function should return when it has written the appropriate number of items to the specified file', () => {
  expect(generate.generateData(10, 0, 'test.json')).toBe('Finished Writing Data');
});

test('generateItem should return a string with an id', () => {
  expect(generate.generateItem(1, 0)).toContain('id');
});

test('generateItem should return a string with menu_url', () => {
  expect(generate.generateItem(1, 0)).toContain('http://google.com');
});

test('generateItem should return a string with an address', () => {
  expect(generate.generateItem(1, 0)).toContain('San Francisco');
});

test('generateItem should return a string a location', () => {
  expect(generate.generateItem(1, 0)).toContain('https://maps.gdoogle.com/?cid=4336663750511421120');
});

test('generateItem should return a string with hours', () => {
  expect(generate.generateItem(1, 0)).toContain('Monday');
});