const faker = require('faker');
const fs = require('file-system');

const generateItem = function (idStart, i) {
  const id = idStart + i;
  const menu_url = 'http://google.com';
  const address = faker.fake('{{address.streetAddress}} {{address.streetName}}, San Francisco, CA 94016, USA');
  const location = 'https://maps.gdoogle.com/?cid=4336663750511421120';
  const url = faker.internet.url();
  const phone = faker.fake('+1 {{random.number(9)}}{{random.number(9)}}{{random.number(9)}}-{{random.number(9)}}{{random.number(9)}}{{random.number(9)}}-{{random.number(9)}}{{random.number(9)}}{{random.number(9)}}{{random.number(9)}}');
  const hours = '{Monday: 8:00 AM – 6:00 PM, Tuesday: 8:00 AM – 6:00 PM, Wednesday: 8:00 AM – 6:00 PM, Thursday: 8:00 AM – 6:00 PM, Friday: 8:00 AM – 6:00 PM, Saturday: 8:00 AM – 6:00 PM, Sunday: 8:00 AM – 6:00 PM}';
  const coords = `{${(faker.random.number(180) - 90).toString()}, ${(faker.random.number(360) - 180).toString()}}`;

  return `${id.toString()}|${menu_url}|${address}|${location}|${url}|${phone}|${hours}|${coords}\n`;
};

const generateData = function (numItems, idStart, path) {
  const writableStream = fs.createWriteStream(path, { flags: 'a' });

  for (let i = 0; i < numItems; i++) {
    if (i % 250000 === 0) {
      console.log(i);
    }

    const data = generateItem(idStart, i);

    writableStream.write(data);
    if (i === numItems - 1) {
      return ('Finished Writing Data');
    }
  }
};

// generateData(5000000, 5000001, 'seed-data.csv');

exports.generateData = generateData;
