const faker = require('faker');
const fs = require('file-system');

const writableStream = fs.createWriteStream('seed-data.csv', { flags: 'a' });

const generateData = function (numItems, idStart) {
  for (let i = 0; i < numItems; i++) {
    if (i % 250000 === 0) {
      console.log(i);
    }


    const id = idStart + i;
    const menu_url = 'http://google.com';
    const address = faker.fake('{{address.streetAddress}} {{address.streetName}}, San Francisco, CA 94016, USA');
    const location = 'https://maps.gdoogle.com/?cid=4336663750511421120';
    const url = faker.internet.url();
    const phone = faker.fake('+1 {{random.number(9)}}{{random.number(9)}}{{random.number(9)}}-{{random.number(9)}}{{random.number(9)}}{{random.number(9)}}-{{random.number(9)}}{{random.number(9)}}{{random.number(9)}}{{random.number(9)}}');
    const hours = ['Monday: 8:00 AM – 6:00 PM', 'Tuesday: 8:00 AM – 6:00 PM', 'Wednesday: 8:00 AM – 6:00 PM', 'Thursday: 8:00 AM – 6:00 PM', 'Friday: 8:00 AM – 6:00 PM', 'Saturday: 8:00 AM – 6:00 PM', 'Sunday: 8:00 AM – 6:00 PM'];
    const coords = {
      lat: faker.random.number(180) - 90,
      lng: faker.random.number(360) - 180,
    };

    writableStream.write(`${id.toString()}| ${menu_url}| ${address}| ${location}| ${url}| ${phone}| ${hours}| ${JSON.stringify(coords)}\n`);
  }
};

generateData(100, 0);
