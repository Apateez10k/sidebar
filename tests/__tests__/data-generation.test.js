const generate = require('../../database/data-generation.js');

test('generateData should return when it has written the appropriate number of items to the specified file', () => {
	expect(generate.generateData(10, 0, 'test.json')).toBe('Finished Writing Data');
});

test('generateItem should return an object with an id', () => {
	expect(generate.generateItem(1, 0).id).toBeDefined();
});

test('generateItem should return an object with a menu_url', () => {
	expect(generate.generateItem(1, 0).menu_url).toBeDefined();
});

test('generateItem should return an object with an address', () => {
	expect(generate.generateItem(1, 0).address).toBeDefined();
});

test('generateItem should return an object with a location', () => {
	expect(generate.generateItem(1, 0).location).toBeDefined();
});

test('generateItem should return an object with a phone number', () => {
	expect(generate.generateItem(1, 0).phone).toBeDefined();
});

test('generateItem should return an object with a hours', () => {
	expect(generate.generateItem(1, 0).hours).toBeDefined();
});

test('generateItem should return an object with valid coordinates', () => {
	expect(generate.generateItem(1, 0).coords.lat).toBeGreaterThanOrEqual(-90);
	expect(generate.generateItem(1, 0).coords.lat).toBeLessThanOrEqual(90);
	expect(generate.generateItem(1, 0).coords.lng).toBeGreaterThanOrEqual(-180);
	expect(generate.generateItem(1, 0).coords.lat).toBeLessThanOrEqual(180);
});