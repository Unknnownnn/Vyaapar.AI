
import Papa from 'papaparse';

export const _id = (index: number) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index}`;

export const _times = (index: number) =>
  // 'MM/DD/YYYY'
  [
    '08/08/2023',
    '04/09/2024',
    '09/12/2023',
    '01/01/2024',
    '04/23/2024',
    '02/29/2024',
    '05/14/2024',
    '01/13/2024',
    '06/22/2024',
    '10/05/2023',
    '07/11/2024',
    '05/22/2024',
    '03/29/2024',
    '08/29/2023',
    '11/19/2023',
    '10/24/2023',
    '12/02/2023',
    '02/13/2024',
    '09/19/2023',
    '04/17/2024',
    '12/18/2023',
    '06/27/2024',
    '10/19/2023',
    '08/09/2024',
  ][index];

export const _fullName = (index: number) =>
  ['1Bridge', '1K Kirana Bazaar', '21K School', '5C Network', '5ire', '60Plus India', '6Degree', '91Squarefeet', 'A23', 'Aadyah Aerospace', 'Aakash', 'AarogyaAI', 'ABL Workspace', 'Absolute', 'Accacia', 'Acko', 'Actlogica', 'Adda247', 'Addverb', 'AdmitKard', 'Adonmo', 'Advantage Club', 'Aeidth Technologies', 'Aequs', 'Aerem', 'Aereo', 'Aero360', 'Aerostrovilos Energy', 'Aether', 'AgNext', 'Agnikul', 'AGRIM', 'Agrix', 'Agrizy', 'Agrograde', 'Agrostar', 'AirAttix', 'Airblack', 'Akshayakalpa Organic', 'Akumentis Healthcare', 'AlgoBulls', 'Allen', 'AlmaBetter', 'Almo', 'Altigreen', 'Altum Credo', 'AltUni', 'Amaara Herbs', 'Amagi', 'Amaha', 'Amama', 'Amber', 'Amikus AI', 'AMPM', 'Anar', 'AnKaSumMor', 'Annapurna Finance', 'ANS Commerce', 'Antwalk', 'Anveshan', 'Anveya Living', 'Apeiron Mobility', 'Apna', 'Apna Mart', 'Apnaklub', 'Applop', 'AppsForBharat', 'Aqgromalin', 'Aquaconnect', 'AquaExchange', 'Arrivae', 'Arthum', 'Artium Academy', 'Arzooo', 'Assert AI', 'Assetplus', 'Astro Vision', 'Astrome', 'Astrotalk', 'Ather Energy', 'Atlys', 'Atomberg Technologies', 'Attero', 'AuditCue', 'Aulerth', 'Auric', 'AuthBridge', 'Automovill', 'Auxilo', 'Avail Finance', 'Avanti', 'Avataar', 'AVIOM India Housing', 'Avishkaar', 'Awaz', 'Awfis', 'Awiros', 'Aye Finance', 'Ayu Health', 'AyuRythm', 'Azah', 'Azani', 'Baaz', 'Baaz Bikes', 'Baazi Games', 'Backspace', 'Bakingo', 'Bambinos', 'Bambrew', 'BankBazaar', 'BathStory', 'Battery Smart', 'Battrixx', 'BatX', 'Beanly', 'Beardo', 'BeatO', 'Bebe Burp', 'Beco', 'BeepKart', 'Bellatrix Aerospace', 'BellaVita', 'Bepure', 'Bert Labs', 'Better Beauty', 'BetterPlace', 'Bewakoof', 'BeyondSkool', 'BGAUSS', 'Bhanzu', 'BharatAgri', 'BharatPe', 'BharatX', 'Bibo', 'Biddano', 'Big Bang Food Tech', 'BigBasket', 'BigHaat', 'Bigspoon', 'Bigyellowfish', 'Bijak', 'Bijnis', 'Bike Bazaar', 'Billdesk', 'BillionLoans', 'BimaKavach', 'Binocs', 'BiofuelCircle', 'BioPrime', 'Biryani Blues', 'Biryani by Kilo', 'BizeeBuy', 'Bizongo', 'BizzTm', 'Black Bow Whisky', 'Blackbuck', 'BlackLight Studio Works', 'Blinkit', 'BlissClub', 'Bloom Hotels', 'Blue Sky Analytics', 'Blue Tokai Coffee', 'BlueLearn', 'BlueRickshaw', 'BlueSemi', 'Bluestone', 'BluSmart', 'Bodhi', 'Bodhi AI', 'Boingg', 'Bold Care', 'Bold Finance', 'Bolo Live', 'BookMyShow', 'Bounce', 'Boutique Spirit', 'Braingroom', 'BrainGymJr', 'Breathe Well-Being', 'BRIGHTBLU', 'BrightChamps', 'Briskpe', 'Broker Network', 'BrowserStack', 'BugBase', 'BuildNext', 'Bullspree', 'Bummer', 'Bureau', 'Burger Singh', 'Burgerama', 'Burma Burma', 'Buyofuel', 'Bytebeam', 'Campus 365', 'Canvaloop', 'CapGrid', 'Captain Fresh', 'CaratLane', 'Carbanio', 'CARD91', 'CarDekho', 'CareerLabs', 'CARS24', 'CarTrade', 'CASHe', 'Cashflo', 'Cashfree', 'Cashify', 'Cashinvoice', 'CashKaro', 'Castler', 'CBREX', 'Celcius', 'Celebal Technologies', 'CelebritySchool', 'Cercle X', 'Chaayos', 'Chai Point', 'Chai Waale', 'Chalo', 'Chara', 'ChargeBee', 'Chargeup', 'ChattyBao', 'ChefKart', 'CheQ', 'Chingari', 'Chqbook', 'Chumbak Design', 'CitiusTech', 'CityCash', 'CityMall', 'ClaimBuddy', 'ClassMonitor', 'Classplus', 'Clean Electric', 'Clear', 'ClearDekho', 'Cleartrip', 'Clever Harvey', 'Clinikally', 'Clinikk', 'CLIRNET', 'CloudTailor', 'Clove Dental', 'Clovia', 'Codebuddy', 'Codedamn', 'Codevidhya', 'Coding Invaders', 'Coding Ninjas', 'Cogoport', 'Cogos', 'CoinDCX', 'CoinSwitch', 'Cold Love', 'CollegeDekho', 'Com Olho', 'Comet', 'CommerceIQ', 'ConnectedH', 'ConsCent', 'Contlo', 'ConveGenius', 'Convosight', 'Cora Health', 'Corrit Electric', 'Country Delight', 'Courseplay', 'Coutloot', 'Coverfox', 'Covvalent', 'CRED', 'CredAble', 'Credgenics', 'Credilio', 'Credit Fair', 'CredoPay', 'CredR', 'CrepDog Crew', 'Crib', 'CrickPe', 'CRIF High Mark', 'CropIn', 'CrowdAnalytix', 'Crypso', 'Cube Club', 'Cuemath', 'CultYvate', 'CureBay', 'Curefoods', 'Curelink', 'Curelo', 'CureSkin', 'CuriousJr', 'CUSMAT', 'Cutbox', 'Cyborgintell', 'Cybrilla', 'Cygni Energy', 'CynLr', 'Daalchini', 'Dacby', 'DailyBee', 'DailyNinja', 'DailyObjects', 'DailyRounds', 'DaMENSCH', 'DanaMojo', 'DarwinBox', 'Datoms', 'DCGpac', 'DealShare', 'Deciml', 'Deconstruct', 'Deep Eigen', 'Deep Rooted', 'Deepsight AI Labs', 'DeHaat', 'Delhivery', 'Deluxe Recycling', 'Design Cafe', 'Designx', 'Detect Technologies', 'Devtron', 'Dezerv', 'DGV', 'Dhiway', 'DhiWise', 'Dhurina', 'Digantara', 'Digi2L', 'Digiboxx', 'DigiMaze', 'Digit Insurance', 'Disprz', 'Ditto Insurance', 'DMI Finance', 'D-Nome', 'Doceree', 'DocPlix', 'Dogsee Chew', 'Done Deal', 'Dorje Teas', 'DotPe', 'Doubtnut', 'Dozee', 'DPDzero', 'Dream11', 'DrinkPrime', 'Drivers4Me', 'Drivio', 'Drona Pay', 'Droom', 'Druva', 'DSLR Technologies', 'Dunzo', 'Duroflex', 'DUX Education', 'Dvara SmartGold', 'DWIJA FOODS', 'Dybo', 'E42', 'Early Steps Academy', 'Earth Rhythm', 'Easebuzz', 'EaseMyTrip', 'Easy to Pitch', 'EasyEcom', 'EasyRewardz', 'Eat Better', 'Ecom Express', 'Ecozen', 'EdgeGrid', 'Edmingle', 'EduFund', 'EduGorilla', 'Edukemy', 'Eduncle', 'Edustoke', 'Eduvanz', 'Edverse', 'Edvizo', 'Eeki Foods', 'Eggoz Nutrition', 'Ekank Technologies', 'Ekincare', 'ElasticRun', 'ElectricPe', 'Electrifuel', 'Elemential Labs', 'Elevar Sports', 'Elever', 'Eloelo', 'Emflux Motors', 'Emiza', 'EMotorad', 'EndureAir', 'Enercomp', 'EnggOnline', 'Enkash', 'ENSUREDIT', 'Entero Healthcare', 'Entropik', 'Entuple E-Mobility', 'EON Space Labs', 'Epigamia', 'Epigeneres Biotech', 'Erekrut', 'Ergos', 'Eruditus', 'Eske Paris', 'Ethereal Machines', 'Euler Motors', 'Eupheus Learning', 'EVage', 'EVELABS', 'Even', 'Evenflow', 'Everest Fleet', 'EVhicle', 'Evify', 'Excess2Sell', 'Exotel', 'Expertrons', 'Exponent Energy', 'Exprs', 'Exprto', 'Extramarks', 'EyeMyEye', 'Eyestem', 'F5', 'Faarms', 'FabAlley', 'FabHotels', 'Fabindia', 'Fabriclore', 'Fae Beauty', 'FairTok', 'Falca', 'FamPay', 'FanClash', 'Fanztar', 'FarEye', 'FarMart', 'Fasal', 'Fashinza', 'FeetWings', 'Fello', 'Fibmold', 'Fibroheal Woundcare', 'Fieldproxy', 'FIITJEE', 'FinBox', 'Fingpay', 'Finnable', 'Fino Payments Bank', 'Fintso', 'First Games', 'FirstCry', 'FirstCure Health', 'Fisdom', 'Fitspire', 'Fitterfly', 'Fittr', 'Five Star', 'Fixigo', 'FlashPrep', 'Flatheads', 'Fleek', 'Fleetx', 'FlexC', 'FlexifyMe', 'FlexiLoans', 'Flickstree', 'Flintobox', 'Flipkart', 'Flo Mobility', 'FloBiz', 'Flynote', 'Foodlink', 'FoodyBuddy', 'ForeignAdmits', 'Foxtale', 'Fraazo', 'Fractal', 'Freecultr', 'FREED', 'Freight Tiger', 'French Crown', 'Frendy', 'Fresh From Farm', 'FreshMenu', 'FreshToHome', 'Freshworks', 'Frigate', 'FRND', 'Frogo', 'Frontier Markets', 'FrontRow', 'FS Life', 'Ftcash', 'Fullife Healthcare', 'Fundflo', 'Funstop', 'Furlenco', 'Fuselage Innovations', 'Futwork', 'Fyle', 'Gaana', 'GalaxEye', 'Galgal', 'GameEon Studios', 'Gamerji', 'Games24x7', 'Gameskraft Technologies', 'Gamezop', 'Ganit', 'GarageWorks', 'Garuda Aerospace', 'Geekster', 'Gegadyne Energy', 'General Aeronautics', 'Generic Aadhaar', 'GenieMode', 'GENLEAP', 'Genrobotics', 'Genworks', 'Get My Parking', 'Get-A-Way', 'GetMega', 'GetSetHome', 'GetSupp', 'GetVantage', 'GetWork', 'Giga Fun Studios', 'Gigforce', 'GIVA', 'Glamplus', 'Glamyo Health', 'Glance', 'GlobalBees', 'Globalfair', 'Glowroad', 'Go Desi', 'GoalTeller', 'GOAT Brand Labs', 'GoBolt', 'GoEgo Network', 'GoKwik', 'Gold Setu', 'GoMechanic', 'Goodera', 'Goodfellows', 'GoodMeetings', 'Goofy Tails', 'GoPaani', 'GoPllay', 'GoSats', 'Goseeko', 'GramCover', 'GramFactory', 'Gramophone', 'Gravton Motors', 'GrayQuest', 'Greenikk', 'GreenPod Labs', 'GrinnTech', 'Grip Invest', 'GroMo', 'Growcoms', 'Growfitter', 'GROWIT', 'Growpital', 'GrowthX', 'Groww', 'Groyyo', 'Gullak', 'Gupshup', 'Gurucool', 'Gyde', 'Gynoveda', 'Gytree', 'Habbit', 'Haber', 'Hair Originals', 'HALA', 'Hangyo', 'Happay', 'Happilo', 'Happy', 'Happy Nature', 'Hasura', 'Hatica', 'HCAH', 'Headfone', 'Heads Up for Tails', 'Healofy', 'HealthFab', 'Healthians', 'HealthifyMe', 'Healthkart', 'HealthPlix', 'Hello English', 'Herby Angel', 'Hero Electric', 'HFN Mandi', 'HighRadius', 'Hike', 'Hirect', 'Hitwicket', 'Hobit', 'HobSpace', 'HONO', 'HROne', 'HUVIAiR'][index];

export const _price = (index: number) =>
  [
    35.17, 157.22, 64.78, 230.79, 92.57, 361.46, 196.73, 63.04, 333.18, 306.3, 154.42, 120.52, 62.82, 219.96,
    125.93, 70.39, 43.11, 67.23, 14.31, 31.5, 26.72, 44.8, 37.87, 75.53,67.99,
  ][index];

export const _company = (index: number) =>
  [
    'Gurugram, Haryana',
    'Bengaluru, Karnataka',
    'Bengaluru, Karnataka',
    'Bengaluru, Karnataka',
    'Bengaluru, Karnataka',
    'Gurugram, Haryana',
    'Noida, Uttar Pradesh',
    'Bengaluru, Karnataka',
    'Bengaluru, Karnataka',
    'Mumbai, Maharashtra',
    'Bengaluru, Karnataka',
    'Bengaluru, Karnataka',
    'Bengaluru, Karnataka',
    'Bengaluru, Karnataka',
    'Mumbai, Maharashtra',
    'Bengaluru, Karnataka',
    'Gurugram, Haryana',
    'Bengaluru, Karnataka',
    'San Mateo, California, USA',
    'Bengaluru, Karnataka',
    'Mumbai, Maharashtra',
    'Bengaluru, Karnataka',
    'Bengaluru, Karnataka',
    'Gurugram, Haryana'
  ][index];

export const _boolean = (index: number) =>
  [
    true,
    false,
    true,
    false,
    true,
    true,
    true,
    false,
    false,
    true,
    false,
    true,
    true,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    true,
    false,
  ][index];

export const _postTitles = (index: number) =>
  [
    'Zomato’s new initiative to promote homegrown street food vendors',
    'Byju’s secures funding to expand globally in the edtech space',
    'Swiggy Instamart launches 15-minute grocery delivery service in metro cities',
    '✨Unicorn Club gets a new member: Vedantu ✨',
    'Curefit partners with Tata Digital for fitness tech innovations',
    'Urban Company expands into international markets with a new strategy',
    'Paytm’s IPO gets SEBI approval, gears up for public listing',
    'Simple Energy unveils affordable electric scooter to boost sustainable transport',
    'Razorpay introduces new AI-driven tools for seamless payments',
    'Nykaa announces plans for an IPO, focusing on beauty and fashion',
    'Ola Electric ramps up production ahead of upcoming S1 Pro scooter launch',
    'Meesho aims to empower 10 million women entrepreneurs by 2025',
    'Flipkart announces new program to support Indian artisans and weavers',
    'Licious secures funding to expand premium meat offerings across India',
    'How boAt is revolutionizing the audio accessory industry in India',
    'CRED launches community-driven feature for financial education',
    'Delhivery introduces drone-based logistics solutions in select regions',
    'Ather Energy’s new EV battery tech promises longer range',
    'Inside the Funding Journey of Freshworks',
    'Unacademy releases plans for a hybrid learning model post-pandemic',
    'MyGlamm expands retail presence with new brick-and-mortar stores',
    'Innovative AI-based health startups gaining traction in India',
    'PhonePe launches UPI-based international remittances for NRIs',
    'How Zerodha is shaping up the Indian stock trading landscape',
    'Mobikwik plans to strengthen its presence in the fintech sector with new offerings'
  ][index];

export const _description = (index: number) =>
  [
    'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    'The Football Is Good For Training And Recreational Purposes',
    'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    'The Football Is Good For Training And Recreational Purposes',
    'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
  ][index];

export const _taskNames = (index: number) =>
  [
    `Prepare Monthly Financial Report`,
    `Design New Marketing Campaign`,
    `Analyze Customer Feedback`,
    `Update Website Content`,
    `Conduct Market Research`,
    `Develop Software Application`,
    `Organize Team Meeting`,
    `Create Social Media Posts`,
    `Review Project Plan`,
    `Implement Security Protocols`,
    `Write Technical Documentation`,
    `Test New Product Features`,
    `Manage Client Inquiries`,
    `Train New Employees`,
    `Coordinate Logistics`,
    `Monitor Network Performance`,
    `Develop Training Materials`,
    `Draft Press Release`,
    `Prepare Budget Proposal`,
    `Evaluate Vendor Proposals`,
    `Perform Data Analysis`,
    `Conduct Quality Assurance`,
    `Plan Event Logistics`,
    `Optimize SEO Strategies`,
  ][index];

  const getProductNames = (): string[] => ['1Bridge', '1K Kirana Bazaar', '21K School', '5C Network', '5ire', '60Plus India', '6Degree', '91Squarefeet', 'A23', 'Aadyah Aerospace', 'Aakash', 'AarogyaAI', 'ABL Workspace', 'Absolute', 'Accacia', 'Acko', 'Actlogica', 'Adda247', 'Addverb', 'AdmitKard', 'Adonmo', 'Advantage Club', 'Aeidth Technologies', 'Aequs', 'Aerem', 'Aereo', 'Aero360', 'Aerostrovilos Energy', 'Aether', 'AgNext', 'Agnikul', 'AGRIM', 'Agrix', 'Agrizy', 'Agrograde', 'Agrostar', 'AirAttix', 'Airblack', 'Akshayakalpa Organic', 'Akumentis Healthcare', 'AlgoBulls', 'Allen', 'AlmaBetter', 'Almo', 'Altigreen', 'Altum Credo', 'AltUni', 'Amaara Herbs', 'Amagi', 'Amaha', 'Amama', 'Amber', 'Amikus AI', 'AMPM', 'Anar', 'AnKaSumMor', 'Annapurna Finance', 'ANS Commerce', 'Antwalk', 'Anveshan', 'Anveya Living', 'Apeiron Mobility', 'Apna', 'Apna Mart', 'Apnaklub', 'Applop', 'AppsForBharat', 'Aqgromalin', 'Aquaconnect', 'AquaExchange', 'Arrivae', 'Arthum', 'Artium Academy', 'Arzooo', 'Assert AI', 'Assetplus', 'Astro Vision', 'Astrome', 'Astrotalk', 'Ather Energy', 'Atlys', 'Atomberg Technologies', 'Attero', 'AuditCue', 'Aulerth', 'Auric', 'AuthBridge', 'Automovill', 'Auxilo', 'Avail Finance', 'Avanti', 'Avataar', 'AVIOM India Housing', 'Avishkaar', 'Awaz', 'Awfis', 'Awiros', 'Aye Finance', 'Ayu Health', 'AyuRythm', 'Azah', 'Azani', 'Baaz', 'Baaz Bikes', 'Baazi Games', 'Backspace', 'Bakingo', 'Bambinos', 'Bambrew', 'BankBazaar', 'BathStory', 'Battery Smart', 'Battrixx', 'BatX', 'Beanly', 'Beardo', 'BeatO', 'Bebe Burp', 'Beco', 'BeepKart', 'Bellatrix Aerospace', 'BellaVita', 'Bepure', 'Bert Labs', 'Better Beauty', 'BetterPlace', 'Bewakoof', 'BeyondSkool', 'BGAUSS', 'Bhanzu', 'BharatAgri', 'BharatPe', 'BharatX', 'Bibo', 'Biddano', 'Big Bang Food Tech', 'BigBasket', 'BigHaat', 'Bigspoon', 'Bigyellowfish', 'Bijak', 'Bijnis', 'Bike Bazaar', 'Billdesk', 'BillionLoans', 'BimaKavach', 'Binocs', 'BiofuelCircle', 'BioPrime', 'Biryani Blues', 'Biryani by Kilo', 'BizeeBuy', 'Bizongo', 'BizzTm', 'Black Bow Whisky', 'Blackbuck', 'BlackLight Studio Works', 'Blinkit', 'BlissClub', 'Bloom Hotels', 'Blue Sky Analytics', 'Blue Tokai Coffee', 'BlueLearn', 'BlueRickshaw', 'BlueSemi', 'Bluestone', 'BluSmart', 'Bodhi', 'Bodhi AI', 'Boingg', 'Bold Care', 'Bold Finance', 'Bolo Live', 'BookMyShow', 'Bounce', 'Boutique Spirit', 'Braingroom', 'BrainGymJr', 'Breathe Well-Being', 'BRIGHTBLU', 'BrightChamps', 'Briskpe', 'Broker Network', 'BrowserStack', 'BugBase', 'BuildNext', 'Bullspree', 'Bummer', 'Bureau', 'Burger Singh', 'Burgerama', 'Burma Burma', 'Buyofuel', 'Bytebeam', 'Campus 365', 'Canvaloop', 'CapGrid', 'Captain Fresh', 'CaratLane', 'Carbanio', 'CARD91', 'CarDekho', 'CareerLabs', 'CARS24', 'CarTrade', 'CASHe', 'Cashflo', 'Cashfree', 'Cashify', 'Cashinvoice', 'CashKaro', 'Castler', 'CBREX', 'Celcius', 'Celebal Technologies', 'CelebritySchool', 'Cercle X', 'Chaayos', 'Chai Point', 'Chai Waale', 'Chalo', 'Chara', 'ChargeBee', 'Chargeup', 'ChattyBao', 'ChefKart', 'CheQ', 'Chingari', 'Chqbook', 'Chumbak Design', 'CitiusTech', 'CityCash', 'CityMall', 'ClaimBuddy', 'ClassMonitor', 'Classplus', 'Clean Electric', 'Clear', 'ClearDekho', 'Cleartrip', 'Clever Harvey', 'Clinikally', 'Clinikk', 'CLIRNET', 'CloudTailor', 'Clove Dental', 'Clovia', 'Codebuddy', 'Codedamn', 'Codevidhya', 'Coding Invaders', 'Coding Ninjas', 'Cogoport', 'Cogos', 'CoinDCX', 'CoinSwitch', 'Cold Love', 'CollegeDekho', 'Com Olho', 'Comet', 'CommerceIQ', 'ConnectedH', 'ConsCent', 'Contlo', 'ConveGenius', 'Convosight', 'Cora Health', 'Corrit Electric', 'Country Delight', 'Courseplay', 'Coutloot', 'Coverfox', 'Covvalent', 'CRED', 'CredAble', 'Credgenics', 'Credilio', 'Credit Fair', 'CredoPay', 'CredR', 'CrepDog Crew', 'Crib', 'CrickPe', 'CRIF High Mark', 'CropIn', 'CrowdAnalytix', 'Crypso', 'Cube Club', 'Cuemath', 'CultYvate', 'CureBay', 'Curefoods', 'Curelink', 'Curelo', 'CureSkin', 'CuriousJr', 'CUSMAT', 'Cutbox', 'Cyborgintell', 'Cybrilla', 'Cygni Energy', 'CynLr', 'Daalchini', 'Dacby', 'DailyBee', 'DailyNinja', 'DailyObjects', 'DailyRounds', 'DaMENSCH', 'DanaMojo', 'DarwinBox', 'Datoms', 'DCGpac', 'DealShare', 'Deciml', 'Deconstruct', 'Deep Eigen', 'Deep Rooted', 'Deepsight AI Labs', 'DeHaat', 'Delhivery', 'Deluxe Recycling', 'Design Cafe', 'Designx', 'Detect Technologies', 'Devtron', 'Dezerv', 'DGV', 'Dhiway', 'DhiWise', 'Dhurina', 'Digantara', 'Digi2L', 'Digiboxx', 'DigiMaze', 'Digit Insurance', 'Disprz', 'Ditto Insurance', 'DMI Finance', 'D-Nome', 'Doceree', 'DocPlix', 'Dogsee Chew', 'Done Deal', 'Dorje Teas', 'DotPe', 'Doubtnut', 'Dozee', 'DPDzero', 'Dream11', 'DrinkPrime', 'Drivers4Me', 'Drivio', 'Drona Pay', 'Droom', 'Druva', 'DSLR Technologies', 'Dunzo', 'Duroflex', 'DUX Education', 'Dvara SmartGold', 'DWIJA FOODS', 'Dybo', 'E42', 'Early Steps Academy', 'Earth Rhythm', 'Easebuzz', 'EaseMyTrip', 'Easy to Pitch', 'EasyEcom', 'EasyRewardz', 'Eat Better', 'Ecom Express', 'Ecozen', 'EdgeGrid', 'Edmingle', 'EduFund', 'EduGorilla', 'Edukemy', 'Eduncle', 'Edustoke', 'Eduvanz', 'Edverse', 'Edvizo', 'Eeki Foods', 'Eggoz Nutrition', 'Ekank Technologies', 'Ekincare', 'ElasticRun', 'ElectricPe', 'Electrifuel', 'Elemential Labs', 'Elevar Sports', 'Elever', 'Eloelo', 'Emflux Motors', 'Emiza', 'EMotorad', 'EndureAir', 'Enercomp', 'EnggOnline', 'Enkash', 'ENSUREDIT', 'Entero Healthcare', 'Entropik', 'Entuple E-Mobility', 'EON Space Labs', 'Epigamia', 'Epigeneres Biotech', 'Erekrut', 'Ergos', 'Eruditus', 'Eske Paris', 'Ethereal Machines', 'Euler Motors', 'Eupheus Learning', 'EVage', 'EVELABS', 'Even', 'Evenflow', 'Everest Fleet', 'EVhicle', 'Evify', 'Excess2Sell', 'Exotel', 'Expertrons', 'Exponent Energy', 'Exprs', 'Exprto', 'Extramarks', 'EyeMyEye', 'Eyestem', 'F5', 'Faarms', 'FabAlley', 'FabHotels', 'Fabindia', 'Fabriclore', 'Fae Beauty', 'FairTok', 'Falca', 'FamPay', 'FanClash', 'Fanztar', 'FarEye', 'FarMart', 'Fasal', 'Fashinza', 'FeetWings', 'Fello', 'Fibmold', 'Fibroheal Woundcare', 'Fieldproxy', 'FIITJEE', 'FinBox', 'Fingpay', 'Finnable', 'Fino Payments Bank', 'Fintso', 'First Games', 'FirstCry', 'FirstCure Health', 'Fisdom', 'Fitspire', 'Fitterfly', 'Fittr', 'Five Star', 'Fixigo', 'FlashPrep', 'Flatheads', 'Fleek', 'Fleetx', 'FlexC', 'FlexifyMe', 'FlexiLoans', 'Flickstree', 'Flintobox', 'Flipkart', 'Flo Mobility', 'FloBiz', 'Flynote', 'Foodlink', 'FoodyBuddy', 'ForeignAdmits', 'Foxtale', 'Fraazo', 'Fractal', 'Freecultr', 'FREED', 'Freight Tiger', 'French Crown', 'Frendy', 'Fresh From Farm', 'FreshMenu', 'FreshToHome', 'Freshworks', 'Frigate', 'FRND', 'Frogo', 'Frontier Markets', 'FrontRow', 'FS Life', 'Ftcash', 'Fullife Healthcare', 'Fundflo', 'Funstop', 'Furlenco', 'Fuselage Innovations', 'Futwork', 'Fyle', 'Gaana', 'GalaxEye', 'Galgal', 'GameEon Studios', 'Gamerji', 'Games24x7', 'Gameskraft Technologies', 'Gamezop', 'Ganit', 'GarageWorks', 'Garuda Aerospace', 'Geekster', 'Gegadyne Energy', 'General Aeronautics', 'Generic Aadhaar', 'GenieMode', 'GENLEAP', 'Genrobotics', 'Genworks', 'Get My Parking', 'Get-A-Way', 'GetMega', 'GetSetHome', 'GetSupp', 'GetVantage', 'GetWork', 'Giga Fun Studios', 'Gigforce', 'GIVA', 'Glamplus', 'Glamyo Health', 'Glance', 'GlobalBees', 'Globalfair', 'Glowroad', 'Go Desi', 'GoalTeller', 'GOAT Brand Labs', 'GoBolt', 'GoEgo Network', 'GoKwik', 'Gold Setu', 'GoMechanic', 'Goodera', 'Goodfellows', 'GoodMeetings', 'Goofy Tails', 'GoPaani', 'GoPllay', 'GoSats', 'Goseeko', 'GramCover', 'GramFactory', 'Gramophone', 'Gravton Motors', 'GrayQuest', 'Greenikk', 'GreenPod Labs', 'GrinnTech', 'Grip Invest', 'GroMo', 'Growcoms', 'Growfitter', 'GROWIT', 'Growpital', 'GrowthX', 'Groww', 'Groyyo', 'Gullak', 'Gupshup', 'Gurucool', 'Gyde', 'Gynoveda', 'Gytree', 'Habbit', 'Haber', 'Hair Originals', 'HALA', 'Hangyo', 'Happay', 'Happilo', 'Happy', 'Happy Nature', 'Hasura', 'Hatica', 'HCAH', 'Headfone', 'Heads Up for Tails', 'Healofy', 'HealthFab', 'Healthians', 'HealthifyMe', 'Healthkart', 'HealthPlix', 'Hello English', 'Herby Angel', 'Hero Electric', 'HFN Mandi', 'HighRadius', 'Hike', 'Hirect', 'Hitwicket', 'Hobit', 'HobSpace', 'HONO', 'HROne', 'HUVIAiR'];
  
  export const _productNames = (index: number) => getProductNames()[index];
