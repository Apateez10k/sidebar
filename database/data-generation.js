const faker = require('faker');
const fs = require('file-system');

let output = {};

const generateItem = function (idStart, i) {
  output = {};

  output.id = idStart + i;

  output.name = faker.company.companyName();
  output.menu_url = 'http://google.com';
  output.address = faker.fake('{{address.streetAddress}} {{address.streetName}}, San F3rancisco, CA 94016, USA');

  output.location = 'https://maps.gdoogle.com/?cid=4336663750511421120';
  output.url = faker.internet.url();
  output.phone = faker.fake('+1 {{random.number(9)}}{{random.number(9)}}{{random.number(9)}}-{{random.number(9)}}{{random.number(9)}}{{random.number(9)}}-{{random.number(9)}}{{random.number(9)}}{{random.number(9)}}{{random.number(9)}}');
  output.hours = ['Monday: 8:00 AM – 6:00 PM', 'Tuesday: 8:00 AM – 6:00 PM', 'Wednesday: 8:00 AM – 6:00 PM', 'Thursday: 8:00 AM – 6:00 PM', 'Friday: 8:00 AM – 6:00 PM', 'Saturday: 8:00 AM – 6:00 PM', 'Sunday: 8:00 AM – 6:00 PM'];
  output.coords = {
    lat: faker.random.number(180) - 90,
    lng: faker.random.number(360) - 180,
  };

  return output;
};

const generateData = function (numItems, idStart, file) {
  const writableStream = fs.createWriteStream(file, { flags: 'a' });

  for (let i = 0; i < numItems; i++) {
    if (i % 250000 === 0) {
      console.log(i);
    }

    const data = generateItem(idStart, i);

    if (i === 0) {
      writableStream.write(`${JSON.stringify(data)}, \n`);
    } else if (i === numItems - 1) {
      writableStream.write(`${JSON.stringify(data)}, \n]`);
    } else {
      writableStream.write(`${JSON.stringify(data)}, \n`);
    }

    if (i === numItems - 1) {
      return 'Finished Writing Data';
    }
  }
};

exports.generateItem = generateItem;
exports.generateData = generateData;

// Commented out for testing
// generateData(5100000, 5000001, 'seed-data.json');
