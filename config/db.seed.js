const db = require('./db');
const User = require('../models/user');
const Residence = require('../models/residence');

const butts = async () => {
  const seed = async () => {
    await db.sync({ force: true }); 
    const password = `M<gC4['Dqv}G''X"Tg5XDbVrmWR16/ca`; 
    const username = "getaclue";
    const email = "info@getaclue.me";
    const reset_password_token =
    `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6ImluZm9AZ2V0YWNsdWUubWUi LCJpYXQiOjE1MTYyMzkwMjJ9.\_lImbjluzsOJSy-hlDzEOasZRSd8YuQ_9hBmmCvSvp0`;
    
    User.create({
      username: `getaclue`,
      email: `info@getaclue.me`,
      is_admin: true,
      password: `${Math.random()}`
    })
    .then((user) => {
    
    console.log("seeded user", user); })
    .catch((error) => {
    console.error("failed to seed, ", error); db.close();
    }); };
    seed();

    // await User.create({
    // username: `getaclue`,
    // email: `info@getaclue.me`,
    // is_admin: true,
    // password: `${Math.random()}`
  // });
  await Residence.create({
    name: 'Canterbury Place Retirement Residence',
    address: '1 Canterbury Place, North York, Ontario M2N 0G7',
    latitude: '43.771693',
    longitude: '-79.414597',
    address_num: '1',
    address_street: 'Canterbury Place',
    address_city: 'North York',
    address_state: 'Ontario',
    postal_code: 'M2N 0G7',
    address_country: 'CA',
    status: 'pending',
    slug: 'canterbury-place-retirement-residence-ontario-reviews',
    address_city_slug: 'north-york-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'The Carlisle Retirement Residence',
    address: '467 Main Street East, Hamilton, Ontario L8N 1K1',
    latitude: '43.250518',
    longitude: '-79.850872',
    address_num: '467',
    address_street: 'Main Street East',
    address_city: 'Hamilton',
    address_state: 'Ontario',
    postal_code: 'L8N 1K1',
    address_country: 'CA',
    status: 'pending',
    slug: 'the-carlisle-retirement-residence-ontario-reviews',
    address_city_slug: 'hamilton-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Carolina Retirement Suites',
    address: '12 Alma Street, Perth, Ontario K7H 2R7',
    latitude: '44.899260',
    longitude: '-76.257743',
    address_num: '12',
    address_street: 'Alma Street',
    address_city: 'Perth',
    address_state: 'Ontario',
    postal_code: 'K7H 2R7',
    address_country: 'CA',
    status: 'pending',
    slug: 'carolina-retirement-suites-ontario-reviews',
    address_city_slug: 'perth-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Caroline Place Retirement Residence',
    address: '118 Market Street, Hamilton, Ontario L8R 3P9',
    latitude: '43.259136',
    longitude: '-79.874340',
    address_num: '118',
    address_street: 'Market Street',
    address_city: 'Hamilton',
    address_state: 'Ontario',
    postal_code: 'L8R 3P9',
    address_country: 'CA',
    status: 'pending',
    slug: 'caroline-place-retirement-residence-ontario-reviews',
    address_city_slug: 'hamilton-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Carrington Place Retirement Residence',
    address: '75 Dunham Drive, Ancaster, Ontario L9G 1X7',
    latitude: '43.215765',
    longitude: '-79.991522',
    address_num: '75',
    address_street: 'Dunham Drive',
    address_city: 'Ancaster',
    address_state: 'Ontario',
    postal_code: 'L9G 1X7',
    address_country: 'CA',
    status: 'pending',
    slug: 'carrington-place-retirement-residence-ontario-reviews',
    address_city_slug: 'ancaster-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'The Carrington',
    address: '114 Whites Road, Trenton, Ontario K8V 5P5',
    latitude: '44.125409',
    longitude: '-77.510001',
    address_num: '114',
    address_street: 'Whites Road',
    address_city: 'Trenton',
    address_state: 'Ontario',
    postal_code: 'K8V 5P5',
    address_country: 'CA',
    status: 'pending',
    slug: 'the-carrington-ontario-reviews',
    address_city_slug: 'trenton-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Carveth Care Centre',
    address: '375 James Street, Gananoque, Ontario K7G 2Z1',
    latitude: '44.335713',
    longitude: '-76.159990',
    address_num: '375',
    address_street: 'James Street',
    address_city: 'Gananoque',
    address_state: 'Ontario',
    postal_code: 'K7G 2Z1',
    address_country: 'CA',
    status: 'pending',
    slug: 'carveth-care-centre-ontario-reviews',
    address_city_slug: 'gananoque-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Cavendish Manor Retirement Residence',
    address: '5781 Dunn Street, Niagara Falls, Ontario L2G 2N9',
    latitude: '43.078938',
    longitude: '-79.089612',
    address_num: '5781',
    address_street: 'Dunn Street',
    address_city: 'Niagara Falls',
    address_state: 'Ontario',
    postal_code: 'L2G 2N9',
    address_country: 'CA',
    status: 'pending',
    slug: 'cavendish-manor-retirement-residence-ontario-reviews',
    address_city_slug: 'niagara-falls-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Cedar Crossing Retirement Community',
    address: '395 Cedar Street, Simcoe, Ontario N3Y 2N3',
    latitude: '42.841514',
    longitude: '-80.326616',
    address_num: '395',
    address_street: 'Cedar Street',
    address_city: 'Simcoe',
    address_state: 'Ontario',
    postal_code: 'N3Y 2N3',
    address_country: 'CA',
    status: 'pending',
    slug: 'cedar-crossing-retirement-community-ontario-reviews',
    address_city_slug: 'simcoe-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Cedarcroft Place - Oshawa',
    address: '649 King Street East, Oshawa, Ontario L1H 8P9',
    latitude: '43.902996',
    longitude: '-78.840192',
    address_num: '649',
    address_street: 'King Street East',
    address_city: 'Oshawa',
    address_state: 'Ontario',
    postal_code: 'L1H 8P9',
    address_country: 'CA',
    status: 'pending',
    slug: 'cedarcroft-place-oshawa-ontario-reviews',
    address_city_slug: 'oshawa-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Delmanor Wynford',
    address: '187 Wynford Drive, Toronto, Ontario M3C 0C7',
    latitude: '43.724305',
    longitude: '-79.325221',
    address_num: '187',
    address_street: 'Wynford Drive',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M3C 0C7',
    address_country: 'Canada',
    status: 'pending',
    slug: 'delmanor-wynford-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Hazelton Place',
    address: '111 Avenue Road, Toronto, Ontario M5R 3J8',
    latitude: '43.673345',
    longitude: '-79.396019',
    address_num: '111',
    address_street: 'Avenue Road',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M5R 3J8',
    address_country: 'Canada',
    status: 'pending',
    slug: 'hazelton-place-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Amica at the Balmoral Club',
    address: '155 Balmoral Avenue, Toronto, Ontario M4V 1J5',
    latitude: '43.685748',
    longitude: '-79.393785',
    address_num: '155',
    address_street: 'Balmoral Avenue',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M4V 1J5',
    address_country: 'Canada',
    status: 'pending',
    slug: 'amica-at-the-balmoral-club-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Appleford Residence',
    address: '1863 Appleford Street, Gloucester, Ontario K1J 6T2',
    latitude: '45.440718',
    longitude: '-75.600137',
    address_num: '1863',
    address_street: 'Appleford Street',
    address_city: 'Gloucester',
    address_state: 'Ontario',
    postal_code: 'K1J 6T2',
    address_country: 'Canada',
    status: 'pending',
    slug: 'appleford-residence-ontario-reviews',
    address_city_slug: 'gloucester-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Colonel By by Revera',
    address: '43 Aylmer Avenue, Ottawa, Ontario K1S 4R5',
    latitude: '45.394300',
    longitude: '-75.687271',
    address_num: '43',
    address_street: 'Aylmer Avenue',
    address_city: 'Ottawa',
    address_state: 'Ontario',
    postal_code: 'K1S 4R5',
    address_country: 'Canada',
    status: 'pending',
    slug: 'colonel-by-by-revera-ontario-reviews',
    address_city_slug: 'ottawa-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Glebe Retirement Residence',
    address: '174 Glebe Avenue, Ottawa, Ontario K1S 2C7',
    latitude: '45.402634',
    longitude: '-75.695643',
    address_num: '174',
    address_street: 'Glebe Avenue',
    address_city: 'Ottawa',
    address_state: 'Ontario',
    postal_code: 'K1S 2C7',
    address_country: 'Canada',
    status: 'pending',
    slug: 'glebe-retirement-residence-ontario-reviews',
    address_city_slug: 'ottawa-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Manoir St. Joseph Manor',
    address: '1510 St. Joseph Boulevard, Ottawa, Ontario K1C 7L1',
    latitude: '45.468410',
    longitude: '-75.544724',
    address_num: '1510',
    address_street: 'St. Joseph Boulevard',
    address_city: 'Ottawa',
    address_state: 'Ontario',
    postal_code: 'K1C 7L1',
    address_country: 'Canada',
    status: 'pending',
    slug: 'manoir-st.-joseph-manor-ontario-reviews',
    address_city_slug: 'ottawa-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Somerset Towers',
    address: '2055 Carling Avenue, Ottawa, Ontario K2A 1G6',
    latitude: '45.372778',
    longitude: '-75.764859',
    address_num: '2055',
    address_street: 'Carling Avenue',
    address_city: 'Ottawa',
    address_state: 'Ontario',
    postal_code: 'K2A 1G6',
    address_country: 'Canada',
    status: 'pending',
    slug: 'somerset-towers-ontario-reviews',
    address_city_slug: 'ottawa-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Butternut Manor',
    address: '3 Norm Goodspeed Drive, Uxbridge, Ontario L9P 0B7',
    latitude: '44.103591',
    longitude: '-79.140199',
    address_num: '3',
    address_street: 'Norm Goodspeed Drive',
    address_city: 'Uxbridge',
    address_state: 'Ontario',
    postal_code: 'L9P 0B7',
    address_country: 'Canada',
    status: 'pending',
    slug: 'butternut-manor-ontario-reviews',
    address_city_slug: 'uxbridge-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Amica at Bayview',
    address: '15 Barberry Place, Toronto, Ontario M2K1G9',
    latitude: '43.767434',
    longitude: '-79.384973',
    address_num: '15',
    address_street: 'Barberry Place',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M2K1G9',
    address_country: 'Canada',
    status: 'pending',
    slug: 'amica-at-bayview-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Cedarcroft Place Retirement Residence - Stratford',
    address: '260 Church Street, Stratford, Ontario N5A 2R6',
    latitude: '43.365880',
    longitude: '-80.988958',
    address_num: '260',
    address_street: 'Church Street',
    address_city: 'Stratford',
    address_state: 'Ontario',
    postal_code: 'N5A 2R6',
    address_country: 'CA',
    status: 'pending',
    slug: 'cedarcroft-place-retirement-residence-stratford-ontario-reviews',
    address_city_slug: 'stratford-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Central Place Retirement Community',
    address: '855 3rd Avenue East, Owen Sound, Ontario N4K 2K6',
    latitude: '44.565184',
    longitude: '-80.940772',
    address_num: '855',
    address_street: '3rd Avenue East',
    address_city: 'Owen Sound',
    address_state: 'Ontario',
    postal_code: 'N4K 2K6',
    address_country: 'CA',
    status: 'pending',
    slug: 'central-place-retirement-community-ontario-reviews',
    address_city_slug: 'owen-sound-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Champlain Manor',
    address: '65 Fittons Road West, Orillia, Ontario L3V 3V2',
    latitude: '44.619927',
    longitude: '-79.437775',
    address_num: '65',
    address_street: 'Fittons Road West',
    address_city: 'Orillia',
    address_state: 'Ontario',
    postal_code: 'L3V 3V2',
    address_country: 'CA',
    status: 'pending',
    slug: 'champlain-manor-ontario-reviews',
    address_city_slug: 'orillia-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Charlotte Villa',
    address: '120 Darling Street, Brantford, Ontario N3T 5W6',
    latitude: '43.140500',
    longitude: '-80.260860',
    address_num: '120',
    address_street: 'Darling Street',
    address_city: 'Brantford',
    address_state: 'Ontario',
    postal_code: 'N3T 5W6',
    address_country: 'CA',
    status: 'pending',
    slug: 'charlotte-villa-ontario-reviews',
    address_city_slug: 'brantford-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Alexander Muir Retirement Residence',
    address: '197 Prospect Street, Newmarket, Ontario L3Y 3T7',
    latitude: '44.055213',
    longitude: '-79.453339',
    address_num: '197',
    address_street: 'Prospect Street',
    address_city: 'Newmarket',
    address_state: 'Ontario',
    postal_code: 'L3Y 3T7',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-alexander-muir-retirement-residence-ontario-reviews',
    address_city_slug: 'newmarket-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Anne Hathaway Retirement Residence',
    address: '480 Downie Street, Stratford, Ontario N5A 7Y5 ',
    latitude: '43.361916',
    longitude: '-80.977349',
    address_num: '480',
    address_street: 'Downie Street',
    address_city: 'Stratford',
    address_state: 'Ontario',
    postal_code: 'N5A 7Y5 ',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-anne-hathaway-retirement-residence-ontario-reviews',
    address_city_slug: 'stratford-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Aberdeen Gardens',
    address: '330 Dundurn Street South, Hamilton, Ontario L8P 4L6',
    latitude: '43.251718',
    longitude: '-79.892479',
    address_num: '330',
    address_street: 'Dundurn Street South',
    address_city: 'Hamilton',
    address_state: 'Ontario',
    postal_code: 'L8P 4L6',
    address_country: 'CA',
    status: 'pending',
    slug: 'aberdeen-gardens-ontario-reviews',
    address_city_slug: 'hamilton-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Ballycliffe Long Trerm Care and Retirement Residence',
    address: '70 Station Street, Ajax, Ontario L1S 1R9',
    latitude: '43.851420',
    longitude: '-79.022074',
    address_num: '70',
    address_street: 'Station Street',
    address_city: 'Ajax',
    address_state: 'Ontario',
    postal_code: 'L1S 1R9',
    address_country: 'CA',
    status: 'pending',
    slug:
      'chartwell-ballycliffe-long-trerm-care-and-retirement-residence-ontario-reviews',
    address_city_slug: 'ajax-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Bankside Retirement Residence',
    address: '71 Bankside Drive, Kitchener, Ontario N2N 3L1',
    latitude: '43.431467',
    longitude: '-80.529979',
    address_num: '71',
    address_street: 'Bankside Drive',
    address_city: 'Kitchener',
    address_state: 'Ontario',
    postal_code: 'N2N 3L1',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-bankside-retirement-residence-ontario-reviews',
    address_city_slug: 'kitchener-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Barclay House Retirement Residence',
    address: '600 Chippewa Street West, North Bay, Ontario P1B 9E7',
    latitude: '46.338246',
    longitude: '-79.377587',
    address_num: '600',
    address_street: 'Chippewa Street West',
    address_city: 'North Bay',
    address_state: 'Ontario',
    postal_code: 'P1B 9E7',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-barclay-house-retirement-residence-ontario-reviews',
    address_city_slug: 'north-bay-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Barrington Retirement Residence',
    address: '450 Yonge Street, Barrie, Ontario L4N 4E2',
    latitude: '44.363134',
    longitude: '-79.658434',
    address_num: '450',
    address_street: 'Yonge Street',
    address_city: 'Barrie',
    address_state: 'Ontario',
    postal_code: 'L4N 4E2',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-barrington-retirement-residence-ontario-reviews',
    address_city_slug: 'barrie-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Barton Retirement Residence',
    address: '17290 Leslie Street, Newmarket, Ontario L3Y 3E1',
    latitude: '44.060357',
    longitude: '-79.430527',
    address_num: '17290',
    address_street: 'Leslie Street',
    address_city: 'Newmarket',
    address_state: 'Ontario',
    postal_code: 'L3Y 3E1',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-barton-retirement-residence-ontario-reviews',
    address_city_slug: 'newmarket-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Bayview Retirement Residence',
    address: '435 Dundas Street West, Belleville, Ontario K8P 1B6',
    latitude: '44.147094',
    longitude: '-77.408275',
    address_num: '435',
    address_street: 'Dundas Street West',
    address_city: 'Belleville',
    address_state: 'Ontario',
    postal_code: 'K8P 1B6',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-bayview-retirement-residence-ontario-reviews',
    address_city_slug: 'belleville-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Bon Air Residence',
    address: '131 Laidlaw Street South, Cannington, Ontario L0E 1E0',
    latitude: '44.344230',
    longitude: '-79.036020',
    address_num: '131',
    address_street: 'Laidlaw Street South',
    address_city: 'Cannington',
    address_state: 'Ontario',
    postal_code: 'L0E 1E0',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-bon-air-residence-ontario-reviews',
    address_city_slug: 'cannington-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Amica at Bayview Gardens',
    address: '19 Rean Drive, Toronto, Ontario M2K 0A4',
    latitude: '43.766806',
    longitude: '-79.382689',
    address_num: '19',
    address_street: 'Rean Drive',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M2K 0A4',
    address_country: 'CA',
    status: 'pending',
    slug: 'amica-at-bayview-gardens-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Belmont House',
    address: '55 Belmont Street, Toronto, Ontario M5R 1R1',
    latitude: '43.675148',
    longitude: '-79.390989',
    address_num: '55',
    address_street: 'Belmont Street',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M5R 1R1',
    address_country: 'CA',
    status: 'pending',
    slug: 'belmont-house-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Bradgate Arms',
    address: '54 Foxbar Road, Toronto, Ontario M4V 2G6',
    latitude: '43.686004',
    longitude: '-79.400365',
    address_num: '54',
    address_street: 'Foxbar Road',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M4V 2G6',
    address_country: 'CA',
    status: 'pending',
    slug: 'bradgate-arms-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'The Briton House',
    address: '720 Mount Pleasant Road, Toronto, Ontario M4S 2N6',
    latitude: '43.707043',
    longitude: '-79.389627',
    address_num: '720',
    address_street: 'Mount Pleasant Road',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M4S 2N6',
    address_country: 'CA',
    status: 'pending',
    slug: 'the-briton-house-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Cedarhurst Home',
    address: '2601 Bayview Avenue, Toronto, Ontario M2L 1B5',
    latitude: '43.750744',
    longitude: '-79.384699',
    address_num: '2601',
    address_street: 'Bayview Avenue',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M2L 1B5',
    address_country: 'CA',
    status: 'pending',
    slug: 'cedarhurst-home-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Centennial Park Place Retirement Residence',
    address: '25 Centennial Park Road, Toronto, Ontario M9C 5H1',
    latitude: '43.653858',
    longitude: '-79.582859',
    address_num: '25',
    address_street: 'Centennial Park Road',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M9C 5H1',
    address_country: 'CA',
    status: 'pending',
    slug: 'centennial-park-place-retirement-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'The Annex Retirement Residence',
    address: '123 Spadina Road, Toronto, Ontario M5R 2T1',
    latitude: '43.671360',
    longitude: '-79.405710',
    address_num: '123',
    address_street: 'Spadina Road',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M5R 2T1',
    address_country: 'CA',
    status: 'pending',
    slug: 'the-annex-retirement-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'The Palace',
    address: '69 St. Paul Street, Alexandria, Ontario K0C 1A0',
    latitude: '45.311080',
    longitude: '-74.632864',
    address_num: '69',
    address_street: 'St. Paul Street',
    address_city: 'Alexandria',
    address_state: 'Ontario',
    postal_code: 'K0C 1A0',
    address_country: 'Canada',
    status: 'pending',
    slug: 'the-palace-ontario-reviews',
    address_city_slug: 'alexandria-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Sts. Peter and Paul Residence',
    address: '221 Milner Avenue, Toronto, Ontario M1S 4P4',
    latitude: '43.788864',
    longitude: '-79.240097',
    address_num: '221',
    address_street: 'Milner Avenue',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M1S 4P4',
    address_country: 'CA',
    status: 'pending',
    slug: 'sts-peter-and-paul-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Centennial Retirement Residence',
    address: '259 Hillcroft Street, Oshawa, Ontario L1G 8E4',
    latitude: '43.912782',
    longitude: '-78.860420',
    address_num: '259',
    address_street: 'Hillcroft Street',
    address_city: 'Oshawa',
    address_state: 'Ontario',
    postal_code: 'L1G 8E4',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-centennial-retirement-residence-ontario-reviews',
    address_city_slug: 'oshawa-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Chateau Cornwall Retirement Residence',
    address: '41 Amelia Street, Cornwall, Ontario K6H 7E5',
    latitude: '45.017122',
    longitude: '-74.723159',
    address_num: '41',
    address_street: 'Amelia Street',
    address_city: 'Cornwall',
    address_state: 'Ontario',
    postal_code: 'K6H 7E5',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-chateau-cornwall-retirement-residence-ontario-reviews',
    address_city_slug: 'cornwall-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Chateau Georgian Retirement Residence',
    address: '455 Cedar Street North, Timmins, Ontario P4N 8K4',
    latitude: '48.485274',
    longitude: '-81.329575',
    address_num: '455',
    address_street: 'Cedar Street North',
    address_city: 'Timmins',
    address_state: 'Ontario',
    postal_code: 'P4N 8K4',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-chateau-georgian-retirement-residence-ontario-reviews',
    address_city_slug: 'timmins-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Christopher Terrace Retirement Residence',
    address: '3131 New Street, Burlington, Ontario L7N 3P8',
    latitude: '43.342866',
    longitude: '-79.780357',
    address_num: '3131',
    address_street: 'New Street',
    address_city: 'Burlington',
    address_state: 'Ontario',
    postal_code: 'L7N 3P8',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-christopher-terrace-retirement-residence-ontario-reviews',
    address_city_slug: 'burlington-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Collegiate Heights Retirement Residence',
    address: '95 Fauquier Avenue, Sault Ste. Marie, Ontario P6B 0A2',
    latitude: '46.515790',
    longitude: '-84.324863',
    address_num: '95',
    address_street: 'Fauquier Avenue',
    address_city: 'Sault Ste. Marie',
    address_state: 'Ontario',
    postal_code: 'P6B 0A2',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-collegiate-heights-retirement-residence-ontario-reviews',
    address_city_slug: 'sault-ste.-marie-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Colonial Retirement Residence',
    address: '101 Manning Road, Whitby, Ontario L1N 9M2',
    latitude: '43.892588',
    longitude: '-78.946171',
    address_num: '101',
    address_street: 'Manning Road',
    address_city: 'Whitby',
    address_state: 'Ontario',
    postal_code: 'L1N 9M2',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-colonial-retirement-residence-ontario-reviews',
    address_city_slug: 'whitby-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Conservatory Pond Retirement Residence',
    address: '1499 Stoneridge Drive, Kingston, Ontario K7M 9H9',
    latitude: '44.237223',
    longitude: '-76.591788',
    address_num: '1499',
    address_street: 'Stoneridge Drive',
    address_city: 'Kingston',
    address_state: 'Ontario',
    postal_code: 'K7M 9H9',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-conservatory-pond-retirement-residence-ontario-reviews',
    address_city_slug: 'kingston-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Appleby Place',
    address: '500 Appleby Line, Burlington, Ontario L7L 5Z6',
    latitude: '43.368141',
    longitude: '-79.754782',
    address_num: '500',
    address_street: 'Appleby Line',
    address_city: 'Burlington',
    address_state: 'Ontario',
    postal_code: 'L7L 5Z6',
    address_country: 'CA',
    status: 'pending',
    slug: 'appleby-place-ontario-reviews',
    address_city_slug: 'burlington-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Constantia Retirement Residence',
    address: '784 Centre Street, Thornhill, Ontario L4J 9G7',
    latitude: '43.821114',
    longitude: '-79.451904',
    address_num: '784',
    address_street: 'Centre Street',
    address_city: 'Thornhill',
    address_state: 'Ontario',
    postal_code: 'L4J 9G7',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-constantia-retirement-residence-ontario-reviews',
    address_city_slug: 'thornhill-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Quail Creek Retirement Residence',
    address: '450 Albert Street, Renfrew, Ontario K7V 4K4',
    latitude: '45.481873',
    longitude: '-76.698872',
    address_num: '450',
    address_street: 'Albert Street',
    address_city: 'Renfrew',
    address_state: 'Ontario',
    postal_code: 'K7V 4K4',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-quail-creek-retirement-residence-ontario-reviews',
    address_city_slug: 'renfrew-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: "Chartwell Queen's Square Retirement Residence",
    address: '10 Melville Street North, Cambridge, Ontario N1S 1H5',
    latitude: '43.359982',
    longitude: '-80.316953',
    address_num: '10',
    address_street: 'Melville Street North',
    address_city: 'Cambridge',
    address_state: 'Ontario',
    postal_code: 'N1S 1H5',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-queen-s-square-retirement-residence-ontario-reviews',
    address_city_slug: 'cambridge-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Regency Retirement Residence',
    address: '29 Mississauga Road North, Mississauga, Ontario L5H 2H7',
    latitude: '43.548679',
    longitude: '-79.590731',
    address_num: '29',
    address_street: 'Mississauga Road North',
    address_city: 'Mississauga',
    address_state: 'Ontario',
    postal_code: 'L5H 2H7',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-regency-retirement-residence-ontario-reviews',
    address_city_slug: 'mississauga-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Riverside Retirement Residence',
    address: '201 Riverside Drive, London, Ontario N6H 1E5',
    latitude: '42.983070',
    longitude: '-81.267503',
    address_num: '201',
    address_street: 'Riverside Drive',
    address_city: 'London',
    address_state: 'Ontario',
    postal_code: 'N6H 1E5',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-riverside-retirement-residence-ontario-reviews',
    address_city_slug: 'london-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Robert Speck Retirement Residence',
    address: '100 Robert Speck Parkway, Mississauga, Ontario L4Z 0A1',
    latitude: '43.598220',
    longitude: '-79.634260',
    address_num: '100',
    address_street: 'Robert Speck Parkway',
    address_city: 'Mississauga',
    address_state: 'Ontario',
    postal_code: 'L4Z 0A1',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-robert-speck-retirement-residence-ontario-reviews',
    address_city_slug: 'mississauga-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Living Life on the Avenue',
    address: '1066 Avenue Road, Toronto, Ontario M5N 2C8',
    latitude: '43.706080',
    longitude: '-79.409720',
    address_num: '1066',
    address_street: 'Avenue Road',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M5N 2C8',
    address_country: 'CA',
    status: 'pending',
    slug: 'living-life-on-the-avenue-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Rogers Cove Retirement Residence',
    address: '4 Cove Side Drive, Huntsville, Ontario P1H 2J9',
    latitude: '45.336647',
    longitude: '-79.297661',
    address_num: '4',
    address_street: 'Cove Side Drive',
    address_city: 'Huntsville',
    address_state: 'Ontario',
    postal_code: 'P1H 2J9',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-rogers-cove-retirement-residence-ontario-reviews',
    address_city_slug: 'huntsville-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Rosedale Retirement Centre',
    address: '1813 County Road 2 East, Brockville, Ontario K6V 5T1',
    latitude: '44.608849',
    longitude: '-75.690849',
    address_num: '1813',
    address_street: 'County Road 2 East',
    address_city: 'Brockville',
    address_state: 'Ontario',
    postal_code: 'K6V 5T1',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-rosedale-retirement-centre-ontario-reviews',
    address_city_slug: 'brockville-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Rouge Valley Retirement Residence',
    address: '5958 16th Avenue, Markham, Ontario L3P 8N1',
    latitude: '43.891103',
    longitude: '-79.266155',
    address_num: '5958',
    address_street: '16th Avenue',
    address_city: 'Markham',
    address_state: 'Ontario',
    postal_code: 'L3P 8N1',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-rouge-valley-retirement-residence-ontario-reviews',
    address_city_slug: 'markham-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Avondale Retirement Residence',
    address: '1238 Queen Street East, Toronto, Ontario M4L 1C3',
    latitude: '43.663315',
    longitude: '-79.329928',
    address_num: '1238',
    address_street: 'Queen Street East',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M4L 1C3',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-avondale-retirement-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Gibson Retirement Residence',
    address: '1955 Steeles Avenue East, Toronto, Ontario M2H 3P1',
    latitude: '43.803627',
    longitude: '-79.356956',
    address_num: '1955',
    address_street: 'Steeles Avenue East',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M2H 3P1',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-gibson-retirement-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Lansing Retirement Residence',
    address: '10 Senlac Road, Toronto, Ontario M2N 6P8',
    latitude: '43.758944',
    longitude: '-79.422554',
    address_num: '10',
    address_street: 'Senlac Road',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M2N 6P8',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-lansing-retirement-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Scarlett Heights Retirement Residence',
    address: '4005 Eglinton Avenue West, Toronto, Ontario M9A 5H3',
    latitude: '43.683374',
    longitude: '-79.520695',
    address_num: '4005',
    address_street: 'Eglinton Avenue West',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M9A 5H3',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-scarlett-heights-retirement-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'The Claremont Retirement Residence',
    address: '305 Balliol Street, Toronto, Ontario M4S 3H5',
    latitude: '43.699298',
    longitude: '-79.386727',
    address_num: '305',
    address_street: 'Balliol Street',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M4S 3H5',
    address_country: 'CA',
    status: 'pending',
    slug: 'the-claremont-retirement-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Davenhill Senior Living',
    address: '877 Yonge Street, Toronto, Ontario M4W 3M2',
    latitude: '43.674145',
    longitude: '-79.388367',
    address_num: '877',
    address_street: 'Yonge Street',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M4W 3M2',
    address_country: 'CA',
    status: 'pending',
    slug: 'davenhill-senior-living-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Dom Lipa Slovenian Linden Foundation',
    address: '52 Neilson Road, Toronto, Ontario M9C 1V7',
    latitude: '43.642063',
    longitude: '-79.575493',
    address_num: '52',
    address_street: 'Neilson Road',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M9C 1V7',
    address_country: 'CA',
    status: 'pending',
    slug: 'dom-lipa-slovenian-linden-foundation-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Don Mills Seniors Apartments',
    address: '1057 Don Mills Road, Toronto, Ontario M3C 1W9',
    latitude: '43.734426',
    longitude: '-79.342602',
    address_num: '1057',
    address_street: 'Don Mills Road',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M3C 1W9',
    address_country: 'CA',
    status: 'pending',
    slug: 'don-mills-seniors-apartments-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Downsview Retirement and Long Term Care Residence',
    address: '3595 Keele Street, Toronto, Ontario M3J 1M7',
    latitude: '43.751336',
    longitude: '-79.487978',
    address_num: '3595',
    address_street: 'Keele Street',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M3J 1M7',
    address_country: 'CA',
    status: 'pending',
    slug: 'downsview-retirement-and-long-term-care-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'The Dunfield Retirement Residence',
    address: '77 Dunfield Avenue, Toronto, Ontario M4S 2H3',
    latitude: '43.706746',
    longitude: '-79.395239',
    address_num: '77',
    address_street: 'Dunfield Avenue',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M4S 2H3',
    address_country: 'CA',
    status: 'pending',
    slug: 'the-dunfield-retirement-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Elim Springs Retirement Residence',
    address: '3838 Bloor Street West, Toronto, Ontario M9B 1L1',
    latitude: '43.641002',
    longitude: '-79.539024',
    address_num: '3838',
    address_street: 'Bloor Street West',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M9B 1L1',
    address_country: 'CA',
    status: 'pending',
    slug: 'elim-springs-retirement-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Forest Hill Place',
    address: '645 Castlefield Avenue, Toronto, Ontario M5N 3A5',
    latitude: '43.706206',
    longitude: '-79.426615',
    address_num: '645',
    address_street: 'Castlefield Avenue',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M5N 3A5',
    address_country: 'CA',
    status: 'pending',
    slug: 'forest-hill-place-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Greenview Lodge Senior Care Residence',
    address: '880 Lawrence Avenue East, Toronto, Ontario M3C 1P6',
    latitude: '43.736036',
    longitude: '-79.348727',
    address_num: '880',
    address_street: 'Lawrence Avenue East',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M3C 1P6',
    address_country: 'CA',
    status: 'pending',
    slug: 'greenview-lodge-senior-care-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'The Grenadier Retirement Residence',
    address: '2100 Bloor Street West, Toronto, Ontario M6S 1M7',
    latitude: '43.652083',
    longitude: '-79.471978',
    address_num: '2100',
    address_street: 'Bloor Street West',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M6S 1M7',
    address_country: 'CA',
    status: 'pending',
    slug: 'the-grenadier-retirement-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Harold & Grace Baker Centre',
    address: '1 Northwestern Avenue, Toronto, Ontario M6M 2J7',
    latitude: '43.698731',
    longitude: '-79.469554',
    address_num: '1',
    address_street: 'Northwestern Avenue',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M6M 2J7',
    address_country: 'CA',
    status: 'pending',
    slug: 'harold-grace-baker-centre-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Kensington Place Retirement Residence',
    address: '866 Sheppard Avenue West, Toronto, Ontario M3H 2T5',
    latitude: '43.752543',
    longitude: '-79.452573',
    address_num: '866',
    address_street: 'Sheppard Avenue West',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M3H 2T5',
    address_country: 'CA',
    status: 'pending',
    slug: 'kensington-place-retirement-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Kingsway Retirement Residence',
    address: '4251 Dundas Street West, Toronto, Ontario M8X 2Z5',
    latitude: '43.660659',
    longitude: '-79.510385',
    address_num: '4251',
    address_street: 'Dundas Street West',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M8X 2Z5',
    address_country: 'CA',
    status: 'pending',
    slug: 'kingsway-retirement-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Leaside Retirement Residence',
    address: '14 William Morgan Drive, Toronto, Ontario M4H 1E7',
    latitude: '43.709277',
    longitude: '-79.340211',
    address_num: '14',
    address_street: 'William Morgan Drive',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M4H 1E7',
    address_country: 'CA',
    status: 'pending',
    slug: 'leaside-retirement-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: "L'chaim Retirement Home",
    address: '718 Sheppard Avenue West, Toronto, Ontario M3H 2S6',
    latitude: '43.754480',
    longitude: '-79.443520',
    address_num: '718',
    address_street: 'Sheppard Avenue West',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M3H 2S6',
    address_country: 'CA',
    status: 'pending',
    slug: 'l-chaim-retirement-home-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'One Kenton Place',
    address: '1 Kenton Drive, Toronto, Ontario M2R 2H6',
    latitude: '43.778057',
    longitude: '-79.444071',
    address_num: '1',
    address_street: 'Kenton Drive',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M2R 2H6',
    address_country: 'CA',
    status: 'pending',
    slug: 'one-kenton-place-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Rayoak Place Retirement Residence',
    address: '1340 York Mills Road, Toronto, Ontario M3A 3R1',
    latitude: '43.762275',
    longitude: '-79.320840',
    address_num: '1340',
    address_street: 'York Mills Road',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: '=M3A 3R1',
    address_country: 'CA',
    status: 'pending',
    slug: 'rayoak-place-retirement-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'The Russell Hill Retirement Residence',
    address: '262 St. Clair Avenue West, Toronto, Ontario M4V 1R8',
    latitude: '43.685081',
    longitude: '-79.409370',
    address_num: '262',
    address_street: 'St. Clair Avenue West',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M4V 1R8',
    address_country: 'CA',
    status: 'pending',
    slug: 'the-russell-hill-retirement-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Salvation Army - Meighen Retirement Residence',
    address: '84 Davisville Avenue, Toronto, Ontario M4S 1G1',
    latitude: '43.698938',
    longitude: '-79.393608',
    address_num: '84',
    address_street: 'Davisville Avenue',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M4S 1G1',
    address_country: 'CA',
    status: 'pending',
    slug: 'salvation-army-meighen-retirement-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Guildwood Retirement Residence',
    address: '65 Livingston Road, Toronto, Ontario M1E 1L1',
    latitude: '43.745891',
    longitude: '-79.198568',
    address_num: '65',
    address_street: 'Livingston Road',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M1E 1L1',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-guildwood-retirement-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'The Renoir',
    address: '270 Doak Lane, Newmarket, Ontario L3Y 0A5',
    latitude: '44.055049',
    longitude: '-79.435814',
    address_num: '270',
    address_street: 'Doak Lane',
    address_city: 'Newmarket',
    address_state: 'Ontario',
    postal_code: 'L3Y 0A5',
    address_country: 'Canada',
    status: 'pending',
    slug: 'the-renoir-ontario-reviews',
    address_city_slug: 'newmarket-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Scarborough Retirement Residence',
    address: '148 Markham Road, Toronto, Ontario M1M 2Z8',
    latitude: '43.740656',
    longitude: '-79.217841',
    address_num: '148',
    address_street: 'Markham Road',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M1M 2Z8',
    address_country: 'CA',
    status: 'pending',
    slug: 'scarborough-retirement-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: "St. Bernard's Residence",
    address: '685 Finch Avenue West, Toronto, Ontario M2R 1P2',
    latitude: '43.770242',
    longitude: '-79.460711',
    address_num: '685',
    address_street: 'Finch Avenue West',
    address_city: 'Toronto',
    address_state: 'Ontario',
    postal_code: 'M2R 1P2',
    address_country: 'CA',
    status: 'pending',
    slug: 'st-bernard-s-residence-ontario-reviews',
    address_city_slug: 'toronto-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Deerview Crossing Retirement Residence',
    address: '460 Rymal Road West, Hamilton, Ontario L9B 0B2',
    latitude: '43.207409',
    longitude: '-79.913558',
    address_num: '460',
    address_street: 'Rymal Road West',
    address_city: 'Hamilton',
    address_state: 'Ontario',
    postal_code: 'L9B 0B2',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-deerview-crossing-retirement-residence-ontario-reviews',
    address_city_slug: 'hamilton-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Elmira Retirement Residence',
    address: '8 Snyder Avenue North, Elmira, Ontario N3B 2B1',
    latitude: '43.600988',
    longitude: '-80.562817',
    address_num: '8',
    address_street: 'Snyder Avenue North',
    address_city: 'Elmira',
    address_state: 'Ontario',
    postal_code: 'N3B 2B1',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-elmira-retirement-residence-ontario-reviews',
    address_city_slug: 'elmira-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Empress Kanata Retirement Residence',
    address: '170 McGibbon Drive, Ottawa, Ontario K2L 3Z0',
    latitude: '45.306820',
    longitude: '-75.906878',
    address_num: '170',
    address_street: 'McGibbon Drive',
    address_city: 'Ottawa',
    address_state: 'Ontario',
    postal_code: 'K2L 3Z0',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-empress-kanata-retirement-residence-ontario-reviews',
    address_city_slug: 'ottawa-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Georgian Retirement Residence',
    address: '255 Governors Road, Dundas, Ontario L9H 3K4',
    latitude: '43.260049',
    longitude: '-79.969738',
    address_num: '255',
    address_street: 'Governors Road',
    address_city: 'Dundas',
    address_state: 'Ontario',
    postal_code: 'L9H 3K4',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-georgian-retirement-residence-ontario-reviews',
    address_city_slug: 'dundas-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Georgian Traditions Retirement Residence',
    address: '57 Trott Boulevard, Collingwood, Ontario L9Y 0A3',
    latitude: '44.511598',
    longitude: '-80.240686',
    address_num: '57',
    address_street: 'Trott Boulevard',
    address_city: 'Collingwood',
    address_state: 'Ontario',
    postal_code: 'L9Y 0A3',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-georgian-traditions-retirement-residence-ontario-reviews',
    address_city_slug: 'collingwood-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Glacier Ridge Retirement Residence',
    address: '1261 Jasper Drive, Thunder Bay, Ontario P7B 6Z4',
    latitude: '48.418764',
    longitude: '-89.254852',
    address_num: '1261',
    address_street: 'Jasper Drive',
    address_city: 'Thunder Bay',
    address_state: 'Ontario',
    postal_code: 'P7B 6Z4',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-glacier-ridge-retirement-residence-ontario-reviews',
    address_city_slug: 'thunder-bay-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Hartford Retirement Residence',
    address: '3 Fifth Street West, Morrisburg, Ontario K0C 1X0',
    latitude: '45.107611',
    longitude: '-74.685528',
    address_num: '3',
    address_street: 'Fifth Street West',
    address_city: 'Morrisburg',
    address_state: 'Ontario',
    postal_code: 'K0C 1X0',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-hartford-retirement-residence-ontario-reviews',
    address_city_slug: 'morrisburg-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Isabella Retirement Residence',
    address: '1350 Isabella Street East, Thunder Bay, Ontario P7E 0A5',
    latitude: '48.377657',
    longitude: '-89.256260',
    address_num: '1350',
    address_street: 'Isabella Street East',
    address_city: 'Thunder Bay',
    address_state: 'Ontario',
    postal_code: 'P7E 0A5',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-isabella-retirement-residence-ontario-reviews',
    address_city_slug: 'thunder-bay-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Jackson Creek Retirement Residence',
    address: '481 Reid Street, Peterborough, Ontario K9H 7R9',
    latitude: '44.308023',
    longitude: '-78.328075',
    address_num: '481',
    address_street: 'Reid Street',
    address_city: 'Peterborough',
    address_state: 'Ontario',
    postal_code: 'K9H 7R9',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-jackson-creek-retirement-residence-ontario-reviews',
    address_city_slug: 'peterborough-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell James Street Retirement Residence',
    address: '148 James Street, Bracebridge, Ontario P1L 1S7',
    latitude: '45.043985',
    longitude: '-79.313867',
    address_num: '148',
    address_street: 'James Street',
    address_city: 'Bracebridge',
    address_state: 'Ontario',
    postal_code: 'P1L 1S7',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-james-street-retirement-residence-ontario-reviews',
    address_city_slug: 'bracebridge-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Kingsville Retirement Residence',
    address: '240 Main Street East, Kingsville, Ontario N9Y 1A6',
    latitude: '42.038574',
    longitude: '-82.728463',
    address_num: '240',
    address_street: 'Main Street East',
    address_city: 'Kingsville',
    address_state: 'Ontario',
    postal_code: 'N9Y 1A6',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-kingsville-retirement-residence-ontario-reviews',
    address_city_slug: 'kingsville-canada',
    address_state_slug: 'ontario-canada'
  });
  await Residence.create({
    name: 'Chartwell Leamington Retirement Residence',
    address: '1 Henry Avenue, Leamington, Ontario N8H 5P1',
    latitude: '42.041353',
    longitude: '-82.603544',
    address_num: '1',
    address_street: 'Henry Avenue',
    address_city: 'Leamington',
    address_state: 'Ontario',
    postal_code: 'N8H 5P1',
    address_country: 'CA',
    status: 'pending',
    slug: 'chartwell-leamington-retirement-residence-ontario-reviews',
    address_city_slug: 'leamington-canada',
    address_state_slug: 'ontario-canada'
  });
};

butts();
