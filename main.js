function generateDragon() {
  let age = randomItem([
    "hatchling",
    "wyrmling",
    "adult dragon",
    "elder dragon",
    "ancient wyrm",
  ]);

  let dragonType = randomItem([
    "white",
    "blue",
    "green",
    "white",
    "red",
    "orange",
    "yellow",
    "copper",
    "brass",
    "silver",
    "gold",
    "electrum",
    "crystal",
    "cobalt",
    "spirit",
    "faerie",
    "void",
    "lake",
    "star",
    "sun",
    "moon",
  ]);

  let shape = randomItem([
    "sinuous",
    "wingless",
    "four-winged",
    "enormous",
    "feathered",
    "heavy",
    "lithe",
  ]);

  let feature = randomItem([
    "gold eyes",
    "green eyes",
    "fiery eyes",
    "black eyes",
    "white eyes",
    "sharp scales",
    "sharp horns",
    "four horns",
    "two long horns",
    "two short horns",
    "fins",
  ]);

  let description = `You encounter a ${dragonType} ${shape} ${age} with ${feature}!`;

  document.getElementById('dragon').innerHTML = `<p>${description}</p>`;
}

function generateHotSauce() {
  let pepper = randomItem([
    "jalapeno",
    "habanero",
    "serrano",
    "naga jolokia",
    "trinidad scorpion",
    "Thai chili",
    "Pepper X",
  ]);
  
  let thickness = randomItem([
    "watery",
    "thin",
    "thick",
    "chunky",
  ]);
  
  let flavor1 = randomItem([
    "honey",
    "lemon juice",
    "lemon zest",
    "orange juice",
    "orange zest",
    "caramel",
    "tomato juice",
    "onions",
    "blood orange",
    "lime juice",
    "lime zest",
    "yuzu",
  ]);
  
  let flavor2 = randomItem([
    "cilantro",
    "cumin",
    "cinnamon",
    "galangal",
    "ginger",
    "garlic",
    "turmeric",
    "chili powder",
  ]);
  
  let description = "This " + thickness + " hot sauce is made of " + pepper + " peppers and flavored with " + flavor1 + " and " + flavor2 + ".";
  
  document.getElementById("hotsauce").innerHTML = "<p>" + description + "</p>";
}

function generateStartup() {
  let description = "We're going to ";

  description += getPurpose() + "! We've got a team of ";

  description += getTeam() + " that are ready to ";

  description += getVictory() + ". Our tech stack is totally modern, with ";

  description += getBackEnd() + " for back end services and ";

  description += getFrontEnd() + " for the front end.";

  description +=
    " Our team is fully remote, with people from " +
    getCountry() +
    ", " +
    getCountry() +
    ", and " +
    getCountry() +
    ".";

  document.getElementById("target").innerHTML = "<p>" + description + "</p>";
}

function getBackEnd() {
  let options = [
    "Go",
    "Rust",
    "Haskell",
    "Elixir",
    "Python",
    "PHP",
    "Ruby",
    "Java",
    "Lisp",
    "Crystal",
  ];

  return randomItem(options);
}

function getCountry() {
  let options = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "the Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "the Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "the Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and Mcdonald Islands",
    "the Vatican",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Democratic People's Republic of",
    "Korea, Republic of",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libyan Arab Jamahiriya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "the Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Helena",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia and Montenegro",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "the United Arab Emirates",
    "the United Kingdom",
    "the United States",
    "the United States Minor Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "the British Virgin Islands",
    "the US Virgin Islands",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  return randomItem(options);
}

function getFrontEnd() {
  let options = [
    "Vue.js",
    "React",
    "pure vanilla JavaScript",
    "Angular 2",
    "jQuery",
    "Svelte",
    "Ember.js",
    "Foundation",
    "Backbone.js",
  ];

  return randomItem(options);
}

function getPurpose() {
  let verbs = ["fix", "disrupt", "revamp", "address"];

  let causes = [
    "education",
    "healthcare",
    "government",
    "unemployment",
    "transportation",
    "fintech",
    "insurance",
  ];

  return randomItem(verbs) + " " + randomItem(causes);
}

function getTeam() {
  let teams = [
    "Silicon Valley veterans",
    "experts from all over",
    "web dev bootcamp ninjas",
    "enthusiastic CS students",
    "polymath venture capitalists",
    "reformed convicts",
    "former pro gamers",
    "Reddit commentators",
  ];

  return randomItem(teams);
}

function getVictory() {
  let victories = [
    "win",
    "disrupt",
    "succeed",
    "conquer",
    "excel",
    "emerge victorious",
  ];

  return randomItem(victories);
}

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomItem(items) {
  return items[randomInt(items.length - 1)];
}

generateDragon();
generateStartup();
generateHotSauce();
