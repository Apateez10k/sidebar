var faker = require('faker');
var fs = require('file-system');

var output = {};

var writableStream = fs.createWriteStream('seed-data.json', {'flags': 'a'});


var generateData = function(numItems, idStart) {
	for (var i = 0; i < numItems; i++) {
		output = {}

		if (i % 250000 === 0) {
			console.log(i);
		}

		output.id = idStart + i;
		output.menu_url = 'http://google.com';
		output.address = faker.fake("{{address.streetAddress}} {{address.streetName}}, San Francisco, CA 94016, USA");
		output.location = 'https://maps.gdoogle.com/?cid=4336663750511421120';
		output.url = faker.internet.url();
		output.phone = faker.fake("+1 {{random.number(9)}}{{random.number(9)}}{{random.number(9)}}-{{random.number(9)}}{{random.number(9)}}{{random.number(9)}}-{{random.number(9)}}{{random.number(9)}}{{random.number(9)}}{{random.number(9)}}");
		output.hours = [ 'Monday: 8:00 AM – 6:00 PM',
		     'Tuesday: 8:00 AM – 6:00 PM',
		     'Wednesday: 8:00 AM – 6:00 PM',
		     'Thursday: 8:00 AM – 6:00 PM',
		     'Friday: 8:00 AM – 6:00 PM',
		     'Saturday: 8:00 AM – 6:00 PM',
		     'Sunday: 8:00 AM – 6:00 PM' 
		    ];
		output.coords = {
			lat: faker.random.number(180) - 90,
			lng: faker.random.number(360) - 180,
		}

		if (i === 0) {
			writableStream.write(JSON.stringify(output) + ', \n');
		} else if (i === numItems - 1){
			writableStream.write(JSON.stringify(output) + ', \n]');
		} else {
			writableStream.write(JSON.stringify(output) + ', \n');				
		}
	}
	// writableStream.end(']');
}

generateData(5100000, 5000001);

// var test = { id: 'ChIJFUBxSY6AhYARwOaLV7TsLjw',
//   name: 'Clift San Francisco',
//   menu_url: 'http://google.com',
//   address: '495 Geary St, San Francisco, CA 94102, USA',
//   location: 'https://maps.gdoogle.com/?cid=4336663750511421120',
//   url: 'https://www.morganshotelgroup.com/originals/originals-clift-san-francisco?utm_source=Google%20My%20Business&utm_medium=Website%20Button&utm_campaign=San%20Francisco',
//   phone: '+1 415-775-4700',
//   hours: 
//     [ 'Monday: 8:00 AM – 6:00 PM',
//      'Tuesday: 8:00 AM – 6:00 PM',
//      'Wednesday: 8:00 AM – 6:00 PM',
//      'Thursday: 8:00 AM – 6:00 PM',
//      'Friday: 8:00 AM – 6:00 PM',
//      'Saturday: 8:00 AM – 6:00 PM',
//      'Sunday: 8:00 AM – 6:00 PM' 
//     ],
//   coords: { lat: 37.7867167, lng: -122.4111737 } 
//  };
