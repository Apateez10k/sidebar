const generate = require('../../database/data-generation.js');

test('generateData should return when it has written the appropriate number of items to the specified file', () => {
	expect(generateData(10, 0, 'test.json')).toBe('Finished Writing Data');
});