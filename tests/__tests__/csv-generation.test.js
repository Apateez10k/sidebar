const generate = require('../../database/data-generation.js');

test('the generateData function should return when it has written the appropriate number of items to the specified file', () => {
	expect(generate.generateData(10, 0, 'test.json')).toBe('Finished Writing Data');
});