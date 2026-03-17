let players=[]
let currentPlayer=0
let scores={}
let currentRound=0
let totalRounds=5
let difficulty="easy"
let selectedCategories=["Countries"]

const questions={

Countries:{
easy:[
{
question:"Which country is the largest?",
answers:["USA","China","Russia","Canada"],
correct:2
},
{
question:"Which country is known as the Land of the Rising Sun?",
answers:["China","Japan","Thailand","Korea"],
correct:1
},
{
question:"Which country has the largest land area?",
answers:["Canada","China","Russia","USA"],
correct:2
},
{
question:"Which country is home to the Eiffel Tower?",
answers:["Italy","France","Germany","UK"],
correct:1
},
{
question:"The Great Wall is located in which country?",
answers:["Japan","Thailand","China","South Korea"],
correct:2
},
{
question:"Which country is also a continent?",
answers:["Greenland","Australia","India","Brazil"],
correct:1
},
{
question:"Which country is famous for the Pyramids of Giza?",
answers:["Mexico","Egypt","Iraq","Sudan"],
correct:1
},
{
question:"In which country would you find the Taj Mahal?",
answers:["Pakistan","India","Bangladesh","Nepal"],
correct:1
},
{
question:"Which country is shaped like a boot?",
answers:["Greece","Spain","Italy","Portugal"],
correct:2
},
{
question:"What is the most populous country in the world?",
answers:["China","USA","India","Indonesia"],
correct:0
},
{
question:"Which country is known for maple syrup and hockey?",
answers:["USA","Canada","Norway","Russia"],
correct:1
},
{
question:"In which country is the Amazon Rainforest primarily located?",
answers:["Peru","Colombia","Brazil","Argentina"],
correct:2
},
{
question:"Which country is famous for its kangaroos?",
answers:["New Zealand","Australia","South Africa","Fiji"],
correct:1
},
{
question:"The Statue of Liberty was a gift to the USA from which country?",
answers:["UK","France","Germany","Italy"],
correct:1
},
{
question:"Which country is known as the \"Land of the Rising Sun\"?",
answers:["Japan","Vietnam","China","Thailand"],
correct:0
},
{
question:"In which country is the Parthenon located?",
answers:["Italy","Turkey","Greece","Egypt"],
correct:2
},
{
question:"Which country is the smallest in the world?",
answers:["Monaco","San Marino","Vatican City","Malta"],
correct:2
},
{
question:"Which country is North of the USA?",
answers:["Mexico","Canada","Cuba","Russia"],
correct:1
},
{
question:"Which country has the colors Green, White, and Red on its flag?",
answers:["France","Italy","Germany","UK"],
correct:1
},
{
question:"In which country is the city of London?",
answers:["Ireland","UK","Scotland","Wales"],
correct:1
},
{
question:"Which country is famous for its tulips and windmills?",
answers:["Denmark","Belgium","Netherlands","Sweden"],
correct:2
},
{
question:"Which country is home to the Serengeti National Park?",
answers:["Kenya","Tanzania","South Africa","Nigeria"],
correct:1
}
],

medium:[
{
question:"Which country has the most time zones?",
answers:["Russia","USA","France","Canada"],
correct:0
},
{
question:"Which nation was formerly known as Siam?",
answers:["Vietnam","Thailand","Myanmar","Cambodia"],
correct:1
},
{
question:"Which country has the most natural lakes?",
answers:["Canada","Finland","USA","Brazil"],
correct:0
},
{
question:"In which country is the ancient city of Petra?",
answers:["Egypt","Jordan","Israel","Iraq"],
correct:1
},
{
question:"Which country shares the longest border with the USA?",
answers:["Mexico","Canada","Russia","Bahamas"],
correct:1
},
{
question:"Which country is known as the \"Land of a Thousand Lakes\"?",
answers:["Norway","Sweden","Finland","Estonia"],
correct:2
},
{
question:"Which African nation was never formally colonized?",
answers:["Nigeria","Ethiopia","Ghana","Kenya"],
correct:1
},
{
question:"Which country has the world's most northern capital?",
answers:["Norway","Iceland","Finland","Greenland"],
correct:1
},
{
question:"In which country is the city of Timbuktu?",
answers:["Mali","Niger","Chad","Morocco"],
correct:0
},
{
question:"Which country has the largest Muslim population?",
answers:["Saudi Arabia","Pakistan","Indonesia","Egypt"],
correct:2
},
{
question:"Which country is divided into 26 cantons?",
answers:["Germany","Austria","Switzerland","Belgium"],
correct:2
},
{
question:"Which country is the world's largest producer of coffee?",
answers:["Vietnam","Colombia","Brazil","Ethiopia"],
correct:2
},
{
question:"Which nation is located entirely within South Africa?",
answers:["Eswatini","Lesotho","Botswana","Namibia"],
correct:1
},
{
question:"Which country owns Easter Island?",
answers:["Peru","Chile","Ecuador","Australia"],
correct:1
},
{
question:"Which country is the youngest in the world (est. 2011)?",
answers:["Kosovo","South Sudan","Timor-Leste","Montenegro"],
correct:1
},
{
question:"Which country has a non-rectangular flag?",
answers:["Bhutan","Nepal","Switzerland","Vatican City"],
correct:1
},
{
question:"Which country is known for the \"Haka\" dance?",
answers:["Fiji","Tonga","New Zealand","Samoa"],
correct:2
},
{
question:"Which country has the most islands in the world?",
answers:["Indonesia","Philippines","Sweden","Greece"],
correct:2
},
{
question:"In which country is the world's highest waterfall (Angel Falls)?",
answers:["Brazil","Guyana","Venezuela","Colombia"],
correct:2
},
{
question:"Which country is the \"Rainbow Nation\"?",
answers:["Brazil","India","South Africa","USA"],
correct:2
}
]
,

hard:[
{
question:"Which country has the lowest point on land?",
answers:["Egypt","Jordan","Israel","Djibouti"],
correct:3
},
{
question:"Which country is the most densely populated microstate?",
answers:["Vatican City","Monaco","Singapore","Malta"],
correct:1
},
{
question:"Which country's flag features a Druk (Thunder Dragon)?",
answers:["Nepal","Bhutan","Tibet","Myanmar"],
correct:1
},
{
question:"Which country is the only one to have a coastline on both the Red Sea and the Persian Gulf?",
answers:["UAE","Saudi Arabia","Oman","Yemen"],
correct:1
},
{
question:"Which country was formerly known as Upper Volta?",
answers:["Burkina Faso","Benin","Togo","Mali"],
correct:0
},
{
question:"Which country has the most official languages (16)?",
answers:["India","South Africa","Zimbabwe","Singapore"],
correct:2
},
{
question:"Which country is the world's largest landlocked nation?",
answers:["Mongolia","Kazakhstan","Bolivia","Chad"],
correct:1
},
{
question:"In which country is the \"Door to Hell\" gas crater?",
answers:["Uzbekistan","Turkmenistan","Kazakhstan","Azerbaijan"],
correct:1
},
{
question:"Which country shares a land border with only one other country?",
answers:["Portugal","South Korea","Canada","All of these"],
correct:3
},
{
question:"Which country is the only one in the world to be a \"doubly landlocked\" nation?",
answers:["Liechtenstein","Uzbekistan","Both A and B","Neither"],
correct:0
},
{
question:"Which country has the world's oldest functional parliament?",
answers:["UK","Iceland","Greece","San Marino"],
correct:1
},
{
question:"Which country was the first to give women the right to vote?",
answers:["New Zealand","Finland","USA","UK"],
correct:0
},
{
question:"In which country is the \"Enclave\" of Kaliningrad?",
answers:["Poland","Lithuania","Russia","Germany"],
correct:2
},
{
question:"Which country’s name translates to \"The Savior\"?",
answers:["El Salvador","Ecuador","Costa Rica","Honduras"],
correct:0
},
{
question:"Which country has the highest average elevation in the world?",
answers:["Nepal","Bhutan","China","Bolivia"],
correct:1
},
{
question:"Which country was the site of the ancient Carthaginian Empire?",
answers:["Libya","Morocco","Tunisia","Algeria"],
correct:2
},
{
question:"Which country is the only one to occupy a whole continent?",
answers:["Antarctica","Australia","India","Greenland"],
correct:1
},
{
question:"Which country is known as \"The Land of the Thunder Dragon\"?",
answers:["Mongolia","Bhutan","Tibet","Laos"],
correct:1
},
{
question:"Which country has the longest coastline in the world?",
answers:["Australia","Canada","Russia","Indonesia"],
correct:1
},
{
question:"Which country has the highest literacy rate in the world (nearly 100%)?",
answers:["Cuba","Andorra","North Korea","All of these"],
correct:3
}
]
},

Capitals:{
easy:[
{
question:"What is the capital of France?",
answers:["Lyon","Marseille","Paris","Nice"],
correct:2
},
{
question:"What is the capital of the UK?",
answers:["Edinburgh","London","Cardiff","Belfast"],
correct:1
},
{
question:"What is the capital of Japan?",
answers:["Osaka","Kyoto","Tokyo","Hiroshima"],
correct:2
},
{
question:"What is the capital of the USA?",
answers:["New York","Washington D.C.","Los Angeles","Chicago"],
correct:1
},
{
question:"What is the capital of Italy?",
answers:["Venice","Florence","Rome","Naples"],
correct:2
},
{
question:"What is the capital of Germany?",
answers:["Munich","Frankfurt","Berlin","Hamburg"],
correct:2
},
{
question:"What is the capital of Russia?",
answers:["Saint Petersburg","Kazan","Moscow","Sochi"],
correct:2
},
{
question:"What is the capital of China?",
answers:["Shanghai","Hong Kong","Beijing","Guangzhou"],
correct:2
},
{
question:"What is the capital of Spain?",
answers:["Barcelona","Madrid","Seville","Valencia"],
correct:1
},
{
question:"What is the capital of Egypt?",
answers:["Alexandria","Cairo","Giza","Luxor"],
correct:1
},
{
question:"What is the capital of India?",
answers:["Mumbai","New Delhi","Kolkata","Chennai"],
correct:1
},
{
question:"What is the capital of Greece?",
answers:["Sparta","Athens","Thessaloniki","Rhodes"],
correct:1
},
{
question:"What is the capital of Canada?",
answers:["Toronto","Vancouver","Ottawa","Montreal"],
correct:2
},
{
question:"What is the capital of Brazil?",
answers:["Rio de Janeiro","São Paulo","Brasília","Salvador"],
correct:2
},
{
question:"What is the capital of Mexico?",
answers:["Guadalajara","Monterrey","Mexico City","Cancun"],
correct:2
},
{
question:"What is the capital of South Korea?",
answers:["Busan","Incheon","Seoul","Daegu"],
correct:2
},
{
question:"What is the capital of Australia?",
answers:["Sydney","Melbourne","Canberra","Perth"],
correct:2
},
{
question:"What is the capital of Thailand?",
answers:["Phuket","Bangkok","Chiang Mai","Pattaya"],
correct:1
},
{
question:"What is the capital of Argentina?",
answers:["Rosario","Buenos Aires","Cordoba","Mendoza"],
correct:1
},
{
question:"What is the capital of Ireland?",
answers:["Belfast","Dublin","Cork","Galway"],
correct:1
}
]
,

medium:[
{
question:"What is the capital of Turkey?",
answers:["Istanbul","Ankara","Izmir","Antalya"],
correct:1
},
{
question:"What is the capital of Vietnam?",
answers:["Ho Chi Minh City","Hanoi","Da Nang","Hue"],
correct:1
},
{
question:"What is the capital of Switzerland?",
answers:["Zurich","Geneva","Bern","Basel"],
correct:2
},
{
question:"What is the capital of Norway?",
answers:["Bergen","Oslo","Stavanger","Trondheim"],
correct:1
},
{
question:"What is the capital of Kenya?",
answers:["Mombasa","Nairobi","Kisumu","Eldoret"],
correct:1
},
{
question:"What is the capital of Poland?",
answers:["Krakow","Warsaw","Gdansk","Wroclaw"],
correct:1
},
{
question:"What is the capital of Portugal?",
answers:["Porto","Lisbon","Faro","Coimbra"],
correct:1
},
{
question:"What is the capital of Israel?",
answers:["Tel Aviv","Jerusalem","Haifa","Eilat"],
correct:1
},
{
question:"What is the capital of Saudi Arabia?",
answers:["Jeddah","Mecca","Riyadh","Medina"],
correct:2
},
{
question:"What is the capital of Colombia?",
answers:["Medellín","Cali","Bogotá","Cartagena"],
correct:2
},
{
question:"What is the capital of Sweden?",
answers:["Gothenburg","Stockholm","Malmö","Uppsala"],
correct:1
},
{
question:"What is the capital of Hungary?",
answers:["Debrecen","Budapest","Szeged","Miskolc"],
correct:1
},
{
question:"What is the capital of Austria?",
answers:["Salzburg","Innsbruck","Vienna","Linz"],
correct:2
},
{
question:"What is the capital of the Philippines?",
answers:["Cebu","Davao","Manila","Quezon City"],
correct:2
},
{
question:"What is the capital of Finland?",
answers:["Tampere","Espoo","Helsinki","Turku"],
correct:2
},
{
question:"What is the capital of Indonesia?",
answers:["Bali","Jakarta","Surabaya","Bandung"],
correct:1
},
{
question:"What is the capital of Pakistan?",
answers:["Karachi","Lahore","Islamabad","Peshawar"],
correct:2
},
{
question:"What is the capital of New Zealand?",
answers:["Auckland","Christchurch","Wellington","Dunedin"],
correct:2
},
{
question:"What is the capital of Peru?",
answers:["Cusco","Lima","Arequipa","Trujillo"],
correct:1
},
{
question:"What is the capital of Iraq?",
answers:["Mosul","Basra","Baghdad","Erbil"],
correct:2
}
],
hard:[
{
question:"What is the capital of Kazakhstan?",
answers:["Almaty","Astana","Tashkent","Bishkek"],
correct:1
},
{
question:"What is the capital of Morocco?",
answers:["Casablanca","Marrakech","Rabat","Tangier"],
correct:2
},
{
question:"What is the capital of Nigeria?",
answers:["Lagos","Abuja","Kano","Ibadan"],
correct:1
},
{
question:"What is the capital of Ecuador?",
answers:["Guayaquil","Cuenca","Quito","Manta"],
correct:2
},
{
question:"What is the capital of Bhutan?",
answers:["Paro","Thimphu","Punakha","Jakar"],
correct:1
},
{
question:"What is the capital of Mongolia?",
answers:["Darkhan","Erdenet","Ulaanbaatar","Choibalsan"],
correct:2
},
{
question:"What is the capital of Ethiopia?",
answers:["Gondar","Addis Ababa","Lalibela","Dire Dawa"],
correct:1
},
{
question:"What is the capital of Sri Lanka?",
answers:["Colombo","Sri Jayawardenepura Kotte","Kandy","Galle"],
correct:1
},
{
question:"What is the capital of Uzbekistan?",
answers:["Samarkand","Bukhara","Tashkent","Khiva"],
correct:2
},
{
question:"What is the capital of Bolivia (Administrative)?",
answers:["Sucre","La Paz","Santa Cruz","Potosi"],
correct:1
},
{
question:"What is the capital of Myanmar?",
answers:["Yangon","Mandalay","Naypyidaw","Bagan"],
correct:2
},
{
question:"What is the capital of Iceland?",
answers:["Akureyri","Reykjavik","Keflavik","Husavik"],
correct:1
},
{
question:"What is the capital of Senegal?",
answers:["Saint-Louis","Dakar","Touba","Thies"],
correct:1
},
{
question:"What is the capital of Jordan?",
answers:["Aqaba","Amman","Jerash","Madaba"],
correct:1
},
{
question:"What is the capital of Malta?",
answers:["Sliema","Valletta","Mdina","St. Julian's"],
correct:1
},
{
question:"What is the capital of Suriname?",
answers:["Georgetown","Paramaribo","Cayenne","Caracas"],
correct:1
},
{
question:"What is the capital of Oman?",
answers:["Salalah","Muscat","Nizwa","Sohar"],
correct:1
},
{
question:"What is the capital of Tanzania?",
answers:["Dar es Salaam","Dodoma","Arusha","Zanzibar City"],
correct:1
},
{
question:"What is the capital of the Maldives?",
answers:["Male","Addu City","Fuvahmulah","Kulhudhuffushi"],
correct:0
},
{
question:"What is the capital of Azerbaijan?",
answers:["Ganja","Baku","Sumqayit","Lankaran"],
correct:1
}
]
},

Oceans:{
easy:[
{
question:"Which is the largest ocean?",
answers:["Atlantic","Indian","Pacific","Arctic"],
correct:2
},
{
question:"Which is the smallest ocean?",
answers:["Southern","Arctic","Indian","Atlantic"],
correct:1
},
{
question:"The Titanic sank in which ocean?",
answers:["Pacific","Indian","Atlantic","Southern"],
correct:2
},
{
question:"Which ocean is named after a country?",
answers:["Atlantic","Indian","Pacific","Arctic"],
correct:1
},
{
question:"How many oceans are there globally?",
answers:["3","4","5","7"],
correct:2
},
{
question:"The Great Barrier Reef is in which ocean?",
answers:["Atlantic","Pacific","Indian","Arctic"],
correct:1
},
{
question:"Which ocean surrounds Antarctica?",
answers:["Southern","Arctic","Indian","Pacific"],
correct:0
},
{
question:"Which ocean is between Europe and North America?",
answers:["Pacific","Atlantic","Indian","Southern"],
correct:1
},
{
question:"Which ocean is known for the most tropical islands?",
answers:["Arctic","Atlantic","Pacific","Southern"],
correct:2
},
{
question:"The North Pole is located in which ocean?",
answers:["Pacific","Atlantic","Arctic","Indian"],
correct:2
},
{
question:"Which ocean is the saltiest on average?",
answers:["Atlantic","Pacific","Arctic","Southern"],
correct:0
},
{
question:"The \"Big Island\" of Hawaii is in which ocean?",
answers:["Indian","Atlantic","Pacific","Southern"],
correct:2
},
{
question:"Which ocean is home to the Gulf Stream current?",
answers:["Pacific","Atlantic","Indian","Arctic"],
correct:1
},
{
question:"The Arabian Sea is a part of which ocean?",
answers:["Atlantic","Indian","Pacific","Southern"],
correct:1
},
{
question:"The Caribbean Sea is part of which ocean?",
answers:["Pacific","Atlantic","Indian","Arctic"],
correct:1
},
{
question:"Which ocean contains the island of Madagascar?",
answers:["Indian","Atlantic","Pacific","Southern"],
correct:0
},
{
question:"Which ocean is the shallowest?",
answers:["Southern","Indian","Arctic","Pacific"],
correct:2
},
{
question:"The United Kingdom is located in which ocean?",
answers:["Atlantic","Pacific","Indian","Arctic"],
correct:0
},
{
question:"Which ocean has the most coral reefs?",
answers:["Atlantic","Arctic","Pacific","Southern"],
correct:2
},
{
question:"Which ocean is most associated with the \"Spice Trade\"?",
answers:["Arctic","Atlantic","Indian","Southern"],
correct:2
}
]
,

medium:[
{
question:"Where is the Mariana Trench?",
answers:["Atlantic","Indian","Pacific","Arctic"],
correct:2
},
{
question:"The Bermuda Triangle is in which ocean?",
answers:["North Atlantic","South Pacific","Indian","Southern"],
correct:0
},
{
question:"The \"Ring of Fire\" is in which ocean?",
answers:["Atlantic","Pacific","Arctic","Indian"],
correct:1
},
{
question:"Which is the second-largest ocean?",
answers:["Indian","Atlantic","Southern","Arctic"],
correct:1
},
{
question:"The Sargasso Sea is located in which ocean?",
answers:["North Atlantic","South Pacific","Indian","Arctic"],
correct:0
},
{
question:"The Agulhas Current flows in which ocean?",
answers:["Pacific","Atlantic","Indian","Southern"],
correct:2
},
{
question:"The Mozambique Channel is in which ocean?",
answers:["Atlantic","Indian","Pacific","Southern"],
correct:1
},
{
question:"The Drake Passage connects the Atlantic and...?",
answers:["Indian","Pacific","Arctic","Southern"],
correct:1
},
{
question:"The Bay of Bengal is part of which ocean?",
answers:["Pacific","Atlantic","Indian","Arctic"],
correct:2
},
{
question:"The Mediterranean connects to the Atlantic via what?",
answers:["Panama Canal","Suez Canal","Strait of Gibraltar","Bering Strait"],
correct:2
},
{
question:"Which ocean has the Mid-Ocean Ridge?",
answers:["Pacific","Atlantic","Indian","Arctic"],
correct:1
},
{
question:"The Ninety East Ridge is in which ocean?",
answers:["Pacific","Indian","Atlantic","Southern"],
correct:1
},
{
question:"The Java Trench is the deepest point in which ocean?",
answers:["Pacific","Indian","Atlantic","Arctic"],
correct:1
},
{
question:"The Puerto Rico Trench is the deepest in which ocean?",
answers:["Atlantic","Pacific","Indian","Southern"],
correct:0
},
{
question:"The Kuroshio Current is in which ocean?",
answers:["Atlantic","Pacific","Indian","Arctic"],
correct:1
},
{
question:"The Humboldt Current is in which ocean?",
answers:["Pacific","Atlantic","Indian","Southern"],
correct:0
},
{
question:"The North Sea is part of which ocean?",
answers:["Pacific","Arctic","Atlantic","Indian"],
correct:2
},
{
question:"The \"Southern Ocean\" was formally recognized in what year?",
answers:["1950","1980","2000","2021"],
correct:2
},
{
question:"Which ocean has the highest volume of commercial shipping?",
answers:["Pacific","Atlantic","Indian","Arctic"],
correct:0
},
{
question:"The Ross Sea is a part of which ocean?",
answers:["Arctic","Atlantic","Indian","Southern"],
correct:3
}
],
hard:[
{
question:"Where is \"Point Nemo,\" the pole of inaccessibility?",
answers:["South Atlantic","South Pacific","Indian","Arctic"],
correct:1
},
{
question:"What is the deepest point in the Atlantic?",
answers:["Milwaukee Deep","Challenger Deep","Diamantina Deep","Molloy Deep"],
correct:0
},
{
question:"What is the deepest point in the Indian Ocean?",
answers:["Sunda Trench","Java Trench","Both A and B","Mariana"],
correct:2
},
{
question:"What is the deepest point in the Arctic?",
answers:["Fram Basin","Molloy Hole","Nansen Basin","Gakkel Ridge"],
correct:1
},
{
question:"Which sea is the largest by surface area?",
answers:["Mediterranean","Caribbean","Philippine Sea","South China Sea"],
correct:3
},
{
question:"\"The Great Ocean Conveyor Belt\" begins where?",
answers:["Equator","North Atlantic","Indian Ocean","South Pacific"],
correct:1
},
{
question:"The \"Roaring Forties\" refer to winds in which ocean?",
answers:["Arctic","Atlantic","Indian","Southern"],
correct:3
},
{
question:"What is the largest internal/landlocked sea?",
answers:["Dead Sea","Caspian Sea","Aral Sea","Black Sea"],
correct:1
},
{
question:"Which ocean is geologically \"closing\"?",
answers:["Atlantic","Pacific","Indian","Arctic"],
correct:1
},
{
question:"Who is credited with naming the Pacific Ocean?",
answers:["Columbus","Magellan","Cook","Drake"],
correct:1
},
{
question:"The Tasman Sea separates Australia and which country?",
answers:["Fiji","New Zealand","Indonesia","Papua New Guinea"],
correct:1
},
{
question:"The Labrador Sea is located between Canada and where?",
answers:["Iceland","Greenland","UK","Norway"],
correct:1
},
{
question:"The Beaufort Sea is located in which ocean?",
answers:["Pacific","Atlantic","Arctic","Indian"],
correct:2
},
{
question:"The Amundsen Sea is part of which ocean?",
answers:["Arctic","Southern","Pacific","Indian"],
correct:1
},
{
question:"The Weddell Sea is famous for which explorer's ship?",
answers:["Cook","Shackleton","Franklin","Amundsen"],
correct:1
},
{
question:"The Scotia Sea is located between South America and...?",
answers:["Africa","Australia","Antarctica","New Zealand"],
correct:2
},
{
question:"The Timor Sea lies between Australia and...?",
answers:["India","Indonesia","Philippines","Thailand"],
correct:1
},
{
question:"Which ocean has the lowest average salinity?",
answers:["Pacific","Atlantic","Indian","Arctic"],
correct:3
},
{
question:"The Abyssal Plains cover what % of the ocean floor?",
answers:["20%","50%","70%","90%"],
correct:1
},
{
question:"The Lomonosov Ridge divides which ocean floor?",
answers:["Indian","Arctic","Atlantic","Pacific"],
correct:1
}
]
},

Mountains:{
easy:[
{
question:"What is the highest mountain above sea level?",
answers:["K2","Mt. Everest","Kilimanjaro","Denali"],
correct:1
},
{
question:"The Andes are in which continent?",
answers:["Asia","Africa","South America","Europe"],
correct:2
},
{
question:"The Alps are primarily in which continent?",
answers:["North America","Europe","Australia","Antarctica"],
correct:1
},
{
question:"Which mountain is a famous volcano in Japan?",
answers:["Mt. Fuji","Mt. Etna","Mt. Vesuvius","Mt. Cook"],
correct:0
},
{
question:"What is the highest mountain in Africa?",
answers:["Mt. Kenya","Mt. Kilimanjaro","Atlas Mtns","Mt. Sinai"],
correct:1
},
{
question:"The Rocky Mountains are in which continent?",
answers:["Asia","South America","North America","Africa"],
correct:2
},
{
question:"The Himalayas are located in which continent?",
answers:["Europe","Asia","North America","Africa"],
correct:1
},
{
question:"What is the highest mountain in North America?",
answers:["Mt. Whitney","Mt. Rainier","Denali","Mt. Logan"],
correct:2
},
{
question:"Which mountain range separates Europe and Asia?",
answers:["Alps","Urals","Rockies","Andes"],
correct:1
},
{
question:"Mt. Everest is on the border of Nepal and where?",
answers:["India","China","Bhutan","Pakistan"],
correct:1
},
{
question:"Which range contains the Matterhorn?",
answers:["Rockies","Alps","Andes","Pyrenees"],
correct:1
},
{
question:"The Great Dividing Range is in which country?",
answers:["Canada","Australia","China","India"],
correct:1
},
{
question:"What is the highest mountain in Europe?",
answers:["Mt. Blanc","Mt. Elbrus","Matterhorn","Mt. Etna"],
correct:1
},
{
question:"The Pyrenees separate France and which country?",
answers:["Italy","Germany","Spain","Switzerland"],
correct:2
},
{
question:"Mount Olympus is the highest mountain in which country?",
answers:["Italy","Greece","Turkey","Egypt"],
correct:1
},
{
question:"Which range is famous for the Appalachian Trail?",
answers:["Rockies","Sierra Nevada","Appalachians","Cascades"],
correct:2
},
{
question:"What is the highest mountain in the UK?",
answers:["Snowdon","Ben Nevis","Scafell Pike","Slieve Donard"],
correct:1
},
{
question:"Table Mountain is a landmark in which city?",
answers:["Sydney","Cape Town","Rio","San Francisco"],
correct:1
},
{
question:"Mount Vesuvius is located in which country?",
answers:["Greece","Italy","Spain","France"],
correct:1
},
{
question:"The Grand Tetons are part of which range?",
answers:["Appalachians","Rockies","Sierra Nevada","Cascades"],
correct:1
}
]
,

medium:[
{
question:"What is the second-highest mountain?",
answers:["Lhotse","K2","Makalu","Cho Oyu"],
correct:1
},
{
question:"K2 is located on the border of China and where?",
answers:["India","Nepal","Pakistan","Bhutan"],
correct:2
},
{
question:"Aconcagua is the highest peak in which range?",
answers:["Himalayas","Andes","Rockies","Alps"],
correct:1
},
{
question:"Mount Elbrus is located in which country?",
answers:["Georgia","Russia","Turkey","Ukraine"],
correct:1
},
{
question:"What is the highest mountain in New Zealand?",
answers:["Mt. Aspiring","Mt. Cook","Mt. Tasman","Mt. Ruapehu"],
correct:1
},
{
question:"The Sierra Nevada range is primarily in which US state?",
answers:["Colorado","California","Washington","Oregon"],
correct:1
},
{
question:"The Hindu Kush range is mainly in which two countries?",
answers:["India/Nepal","Pakistan/Afghanistan","Iran/Iraq","China/Mongolia"],
correct:1
},
{
question:"Mount Logan is the highest peak in which country?",
answers:["USA","Canada","Russia","Norway"],
correct:1
},
{
question:"Pico de Orizaba is the highest peak in which country?",
answers:["Spain","Mexico","Chile","Peru"],
correct:1
},
{
question:"The Dolomites are a sub-range of which mountains?",
answers:["Pyrenees","Alps","Andes","Urals"],
correct:1
},
{
question:"Mount Whitney is the highest peak in which US region?",
answers:["Alaska","Hawaii","Contiguous USA","East Coast"],
correct:2
},
{
question:"The Blue Ridge Mountains are part of which range?",
answers:["Rockies","Appalachians","Cascades","Ozarks"],
correct:1
},
{
question:"Which range contains the \"Eiger\" peak?",
answers:["Alps","Rockies","Himalayas","Andes"],
correct:0
},
{
question:"What is the highest mountain in the Antarctic?",
answers:["Mt. Erebus","Mt. Vinson","Mt. Tyree","Mt. Shinn"],
correct:1
},
{
question:"The Karakoram range is home to how many of the world's 14 \"8000ers\"?",
answers:["2","4","8","10"],
correct:1
},
{
question:"Mount Etna is a volcano located on which island?",
answers:["Crete","Sicily","Cyprus","Iceland"],
correct:1
},
{
question:"The Atlas Mountains span Morocco, Tunisia, and where?",
answers:["Libya","Algeria","Egypt","Mali"],
correct:1
},
{
question:"Mount Rainier is a prominent peak in which US state?",
answers:["Oregon","Washington","Idaho","Montana"],
correct:1
},
{
question:"Which mountain range is the longest in the world?",
answers:["Himalayas","Rockies","Andes","Urals"],
correct:2
},
{
question:"The \"Mauna Kea\" volcano is located where?",
answers:["Japan","Hawaii","Philippines","Indonesia"],
correct:1
}
],
hard:[
{
question:"Which mountain is the tallest from base to peak?",
answers:["Everest","Mauna Kea","Kilimanjaro","Denali"],
correct:1
},
{
question:"Chimborazo's peak is the closest point on Earth to what?",
answers:["The Moon","Space/Sun","Both A and B","Neither"],
correct:1
},
{
question:"Puncak Jaya is the highest peak in which region?",
answers:["Australia","Oceania/Indonesia","SE Asia","Antarctica"],
correct:1
},
{
question:"Mount Damavand is the highest peak in which country?",
answers:["Iraq","Iran","Turkey","Afghanistan"],
correct:1
},
{
question:"Mount Ararat is the national symbol of which country?",
answers:["Turkey","Armenia","Georgia","Azerbaijan"],
correct:1
},
{
question:"The Drakensberg range is primarily in which country?",
answers:["Kenya","South Africa","Ethiopia","Namibia"],
correct:1
},
{
question:"The Altai Mountains are where Russia, China, Mongolia, and who meet?",
answers:["Uzbekistan","Kazakhstan","Kyrgyzstan","Tajikistan"],
correct:1
},
{
question:"The Tien Shan range is known as the \"Mountains of...\" what?",
answers:["Gold","Heaven","Death","Fire"],
correct:1
},
{
question:"Which range contains the peak \"Jabal Toubkal\"?",
answers:["Atlas","Zagros","Taurus","Alborz"],
correct:0
},
{
question:"The Zagros Mountains are the largest range in which country?",
answers:["Iraq","Iran","Saudi Arabia","Turkey"],
correct:1
},
{
question:"Mount Kosciuszko is the highest in mainland Australia; what is its approx height?",
answers:["2,228m","4,448m","6,668m","8,848m"],
correct:0
},
{
question:"Which of these is NOT in the Himalayas?",
answers:["Lhotse","Annapurna","K2","Manaslu"],
correct:2
},
{
question:"The \"Great Escarpment\" is a major geological feature of which continent?",
answers:["Asia","Africa","South America","Australia"],
correct:1
},
{
question:"Where is Mount Narodnaya, the highest peak of the Urals?",
answers:["Russia","Kazakhstan","Mongolia","Finland"],
correct:0
},
{
question:"The \"Balkan Mountains\" give their name to a peninsula; where are they?",
answers:["Italy","Bulgaria/Serbia","Greece","Turkey"],
correct:1
},
{
question:"Gunnbjørn Fjeld is the highest peak of which island?",
answers:["Iceland","Greenland","Baffin","Tasmania"],
correct:1
},
{
question:"The \"Western Ghats\" are a mountain range in which country?",
answers:["Brazil","India","Australia","South Africa"],
correct:1
},
{
question:"The \"Alpinist's graveyard\" refers to which peak?",
answers:["Everest","Annapurna","K2","Nanga Parbat"],
correct:3
},
{
question:"Mount Saint Elias is on the border of Alaska and...?",
answers:["BC, Canada","Yukon, Canada","Russia","Washington"],
correct:1
},
{
question:"The \"Seven Summits\" includes one peak from each continent; which is the shortest of the seven?",
answers:["Elbrus","Kosciuszko","Vinson","Kilimanjaro"],
correct:1
}
]
},

Continents:{
easy:[
{
question:"How many continents are there?",
answers:["5","6","7","8"],
correct:2
},
{
question:"Which is the largest continent?",
answers:["Africa","Asia","North America","Europe"],
correct:1
},
{
question:"Which is the smallest continent?",
answers:["Europe","South America","Australia","Antarctica"],
correct:2
},
{
question:"Which continent is the coldest?",
answers:["Asia","North America","Antarctica","Europe"],
correct:2
},
{
question:"Brazil is located in which continent?",
answers:["North America","Africa","South America","Europe"],
correct:2
},
{
question:"Egypt is primarily in which continent?",
answers:["Asia","Africa","Europe","South America"],
correct:1
},
{
question:"France is in which continent?",
answers:["North America","Europe","Asia","Australia"],
correct:1
},
{
question:"China is in which continent?",
answers:["Africa","Asia","Europe","North America"],
correct:1
},
{
question:"The USA is in which continent?",
answers:["Europe","South America","North America","Australia"],
correct:2
},
{
question:"Kangaroos are native to which continent?",
answers:["Africa","South America","Australia","Asia"],
correct:2
},
{
question:"The Amazon River is in which continent?",
answers:["Africa","Asia","South America","North America"],
correct:2
},
{
question:"The Sahara Desert is in which continent?",
answers:["Asia","Australia","Africa","South America"],
correct:2
},
{
question:"The Alps are in which continent?",
answers:["Asia","Europe","North America","South America"],
correct:1
},
{
question:"The Himalayas are in which continent?",
answers:["Europe","Africa","Asia","Australia"],
correct:2
},
{
question:"Which continent has the most people?",
answers:["Africa","Asia","Europe","North America"],
correct:1
},
{
question:"The Nile River is in which continent?",
answers:["Asia","Africa","South America","Europe"],
correct:1
},
{
question:"Which continent has no permanent residents?",
answers:["Australia","Antarctica","South America","Africa"],
correct:1
},
{
question:"The South Pole is on which continent?",
answers:["Australia","Africa","Antarctica","South America"],
correct:2
},
{
question:"The Great Lakes are in which continent?",
answers:["North America","South America","Europe","Africa"],
correct:0
},
{
question:"Which continent is also a country?",
answers:["Greenland","Australia","India","Antarctica"],
correct:1
}
]
,

medium:[
{
question:"Which continent has the most countries?",
answers:["Asia","Africa","Europe","North America"],
correct:1
},
{
question:"Which continent has the fewest countries (excluding Antarctica)?",
answers:["South America","Australia","North America","Europe"],
correct:1
},
{
question:"Which continent contains the Dead Sea?",
answers:["Africa","Asia","Europe","Australia"],
correct:1
},
{
question:"Which continent has the most languages spoken?",
answers:["Europe","Africa","Asia","South America"],
correct:2
},
{
question:"The Largest Hot Desert (Sahara) is in Africa, but the largest desert overall is in...?",
answers:["Asia","Australia","Antarctica","Africa"],
correct:2
},
{
question:"The longest river in the world is in which continent?",
answers:["South America","Africa","Asia","North America"],
correct:2
},
{
question:"Which continent is home to the largest lake (Caspian Sea)?",
answers:["Europe","Asia","Africa","North America"],
correct:1
},
{
question:"The highest waterfall (Angel Falls) is in which continent?",
answers:["Africa","Asia","South America","Australia"],
correct:2
},
{
question:"Which continent is mostly in the Southern Hemisphere?",
answers:["Asia","Europe","Australia","North America"],
correct:2
},
{
question:"Which continent is entirely in the Northern Hemisphere?",
answers:["Africa","South America","North America","Australia"],
correct:2
},
{
question:"Which continent is entirely in the Southern Hemisphere?",
answers:["Africa","South America","Antarctica","Asia"],
correct:2
},
{
question:"The \"Great Dividing Range\" is in which continent?",
answers:["North America","Australia","Africa","Asia"],
correct:1
},
{
question:"The Urals divide which two continents?",
answers:["Asia/Africa","Europe/Asia","N. America/S. America","Asia/Australia"],
correct:1
},
{
question:"The Andes are the longest range in which continent?",
answers:["Asia","North America","South America","Africa"],
correct:2
},
{
question:"Which continent is the most urbanized?",
answers:["Africa","Asia","North America","Australia"],
correct:2
},
{
question:"The \"Great Steppe\" is a massive grassland in which continent?",
answers:["Africa","North America","Asia","South America"],
correct:2
},
{
question:"Which continent is home to the most islands?",
answers:["Europe","Asia","North America","Australia"],
correct:1
},
{
question:"The Serengeti is a famous plain in which continent?",
answers:["Asia","Africa","Australia","South America"],
correct:1
},
{
question:"Which continent is the driest (receives least rain)?",
answers:["Africa","Australia","Antarctica","Asia"],
correct:2
},
{
question:"Which continent is home to the most time zones (physically passing through)?",
answers:["Asia","Antarctica","Russia/Asia","North America"],
correct:0
}
],
hard:[
{
question:"Which continent has the highest average elevation?",
answers:["Asia","Antarctica","North America","Africa"],
correct:1
},
{
question:"Which continent has the lowest average elevation?",
answers:["Australia","Europe","South America","Africa"],
correct:1
},
{
question:"Which is the only continent without a desert?",
answers:["Europe","South America","Australia","Antarctica"],
correct:0
},
{
question:"Which continent has the most landlocked countries?",
answers:["Asia","Africa","Europe","South America"],
correct:1
},
{
question:"Which continent has the most coastline?",
answers:["North America","Asia","Australia","Europe"],
correct:1
},
{
question:"Mount Chimborazo (closest to space) is on which continent?",
answers:["Asia","Africa","South America","North America"],
correct:2
},
{
question:"Where are the oldest rocks on Earth found (Cratons)?",
answers:["North America","Australia","Africa","All of these"],
correct:3
},
{
question:"\"Zealandia\" is a 94% submerged continent near where?",
answers:["Africa","South America","Australia","Antarctica"],
correct:2
},
{
question:"Which continent is moving North fastest due to tectonics?",
answers:["South America","Africa","Australia","Europe"],
correct:2
},
{
question:"Which continent is located in all four hemispheres?",
answers:["Asia","Africa","South America","Europe"],
correct:1
},
{
question:"Which continent has the most active volcanoes?",
answers:["Asia","North America","Antarctica","South America"],
correct:0
},
{
question:"Which continent holds 70% of the world's fresh water?",
answers:["Asia","North America","Antarctica","South America"],
correct:2
},
{
question:"Which continent has the highest biodiversity?",
answers:["Africa","Asia","South America","Australia"],
correct:2
},
{
question:"Which continent has the highest number of sovereign states?",
answers:["Asia","Africa","Europe","North America"],
correct:1
},
{
question:"The \"Pangea\" supercontinent broke into Laurasia and...?",
answers:["Gondwana","Zealandia","Atlantis","Lemuria"],
correct:0
},
{
question:"The Isthmus of Panama connects which two continents?",
answers:["Asia/Europe","N. America/S. America","Africa/Asia","N. America/Europe"],
correct:1
},
{
question:"The Bering Strait separates Asia from which continent?",
answers:["Australia","Europe","North America","Antarctica"],
correct:2
},
{
question:"Which continent is the \"Cradle of Humankind\"?",
answers:["Asia","Africa","Europe","Middle East"],
correct:1
},
{
question:"Which continent has the largest share of the world's prairie land?",
answers:["Africa","South America","North America","Asia"],
correct:2
},
{
question:"Which continent's highest point is Mount Vinson?",
answers:["Australia","Antarctica","Asia","Africa"],
correct:1
}
]
}

}

function addPlayer(){

const input=document.getElementById("playerName")
const name=input.value.trim()

if(name==="")return

players.push(name)
scores[name]=0

const li=document.createElement("li")
li.textContent=name

document.getElementById("playerList").appendChild(li)

input.value=""

}

function setDifficulty(level){

difficulty=level

document.querySelectorAll(".difficulty button").forEach(btn=>{
btn.classList.remove("active")
})

event.target.classList.add("active")

}

function setRounds(n){

totalRounds=n

document.querySelectorAll(".rounds button").forEach(btn=>{
btn.classList.remove("active")
})

event.target.classList.add("active")

}

document.querySelectorAll(".category").forEach(btn=>{

btn.onclick=()=>{

btn.classList.toggle("active")

const cat=btn.textContent

if(selectedCategories.includes(cat)){

selectedCategories=selectedCategories.filter(c=>c!==cat)

}else{

selectedCategories.push(cat)

}

}

})

function startGame(){

if(players.length===0){

alert("Add at least one player")
return

}

document.getElementById("menu").classList.add("hidden")
document.getElementById("game").classList.remove("hidden")

showPlayerTurn()

nextQuestion()

updateScores()

}

function showPlayerTurn(){

let player=players[currentPlayer]

let info=document.createElement("p")
info.className="playerTurn"
info.id="playerTurn"

info.textContent="Player: "+player

document.getElementById("game").prepend(info)

}

function updateScores(){

const scoresDiv=document.getElementById("scores")
scoresDiv.innerHTML=""

players.forEach(p=>{

const pEl=document.createElement("p")
pEl.textContent=p+": "+scores[p]
scoresDiv.appendChild(pEl)

})

}

function proceed(){

document.getElementById("nextBtn").classList.add("hidden")

currentPlayer=(currentPlayer+1)%players.length

document.getElementById("playerTurn").textContent="Player: "+players[currentPlayer]

updateScores()

nextQuestion()

}

function nextQuestion(){

document.getElementById("feedback").textContent = ""

if(currentRound>=totalRounds){

endGame()
return

}

currentRound++

let category=selectedCategories[Math.floor(Math.random()*selectedCategories.length)]

let catQuestions = questions[category];
let q;
if (Array.isArray(catQuestions)) {
q = catQuestions[Math.floor(Math.random()*catQuestions.length)];
} else {
q = catQuestions[difficulty][Math.floor(Math.random()*catQuestions[difficulty].length)];
}

document.getElementById("question").textContent=q.question

const answersDiv=document.getElementById("answers")
answersDiv.innerHTML=""

q.answers.forEach((ans,index)=>{

const btn=document.createElement("button")
btn.textContent=ans

btn.onclick=()=>{

if(index===q.correct){

btn.classList.add("correct")

let player=players[currentPlayer]
scores[player]++

updateScores()

document.getElementById("feedback").textContent = "Correct!"

}else{

btn.classList.add("wrong")

document.getElementById("feedback").textContent = "Wrong! The correct answer is: " + q.answers[q.correct]

}

document.getElementById("nextBtn").classList.remove("hidden")

}

answersDiv.appendChild(btn)

})

}

function endGame(){

document.getElementById("game").classList.add("hidden")
document.getElementById("result").classList.remove("hidden")

let results=""

players.forEach(p=>{
results+=p+" : "+scores[p]+"<br>"
})

document.getElementById("finalScore").innerHTML=results

}

function restartGame(){

location.reload()

}