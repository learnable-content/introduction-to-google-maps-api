//February 2015 Air Travel Consumer Report for the Month of December 2014 
//Department of Transportation
//Source - http://www.dot.gov/airconsumer/february-2015-air-travel-consumer-report
//Geocoded by Google Geocode API
// aper     - Arrival On-time Percentage
// code     - Airport Code
// dper     - Departure On-time Percentage
// airport  - Text Description
// aop      - Arrival Operations
// lat      - Latitude of Airport
// dop      - Departure Operations
// lng      - Longitude

var airportData = [
  {
    "aper": 87.1,
    "code": "ABR",
    "dper": 88.7,
    "airport": "ABERDEEN SD (ABR)",
    "aop": 62,
    "lat": 45.4530017,
    "dop": 62,
    "lng": -98.4183339
  },
  {
    "aper": 58.1,
    "code": "ABI",
    "dper": 70.1,
    "airport": "ABILENE TX (ABI)",
    "aop": 241,
    "lat": 32.411111,
    "dop": 241,
    "lng": -99.681667
  },
  {
    "aper": 87.5,
    "code": "ADK",
    "dper": 50,
    "airport": "ADAK ISLAND AK (ADK)",
    "aop": 8,
    "dop": 8
  },
  {
    "aper": 79.5,
    "code": "BQN",
    "dper": 84.7,
    "airport": "AGUADILLA PR (BQN)",
    "aop": 132,
    "lat": 18.4953957,
    "dop": 131,
    "lng": -67.1355779
  },
  {
    "aper": 80.7,
    "code": "CAK",
    "dper": 88.3,
    "airport": "AKRON OH (CAK)",
    "aop": 596,
    "lat": 40.9154509,
    "dop": 596,
    "lng": -81.4414907
  },
  {
    "aper": 78.2,
    "code": "ABY",
    "dper": 82.1,
    "airport": "ALBANY GA (ABY)",
    "aop": 78,
    "lat": 31.5332486,
    "dop": 78,
    "lng": -84.192852
  },
  {
    "aper": 77.1,
    "code": "ALB",
    "dper": 84.2,
    "airport": "ALBANY NY (ALB)",
    "aop": 663,
    "lat": 42.7487124,
    "dop": 664,
    "lng": -73.8054981
  },
  {
    "aper": 67.5,
    "code": "ABQ",
    "dper": 70.7,
    "airport": "ALBUQUERQUE NM (ABQ)",
    "aop": 1762,
    "lat": 35.0433333,
    "dop": 1764,
    "lng": -106.6129085
  },
  {
    "aper": 74.7,
    "code": "AEX",
    "dper": 81.4,
    "airport": "ALEXANDRIA LA (AEX)",
    "aop": 273,
    "lat": 31.3223879,
    "dop": 274,
    "lng": -92.5428806
  },
  {
    "aper": 80,
    "code": "ABE",
    "dper": 87.5,
    "airport": "ALLENTOWN\/BETHLEHEM\/EASTON PA (ABE)",
    "aop": 120,
    "lat": 40.6519194,
    "dop": 120,
    "lng": -75.4342013
  },
  {
    "aper": 81.5,
    "code": "APN",
    "dper": 85.2,
    "airport": "ALPENA MI (APN)",
    "aop": 54,
    "lat": 45.0780559,
    "dop": 54,
    "lng": -83.560278
  },
  {
    "aper": 57.9,
    "code": "AMA",
    "dper": 65.2,
    "airport": "AMARILLO TX (AMA)",
    "aop": 573,
    "lat": 35.2185,
    "dop": 572,
    "lng": -101.705264
  },
  {
    "aper": 82.7,
    "code": "ANC",
    "dper": 86.4,
    "airport": "ANCHORAGE AK (ANC)",
    "aop": 1254,
    "lat": 61.1758863,
    "dop": 1253,
    "lng": -149.9900791
  },
  {
    "aper": 75.1,
    "code": "ATW",
    "dper": 84.6,
    "airport": "APPLETON WI (ATW)",
    "aop": 201,
    "lat": 44.2605,
    "dop": 201,
    "lng": -88.5111
  },
  {
    "aper": 41.4,
    "code": "ACV",
    "dper": 45.9,
    "airport": "ARCATA\/EUREKA CA (ACV)",
    "aop": 169,
    "lat": 40.9711476,
    "dop": 170,
    "lng": -124.1066147
  },
  {
    "aper": 83.2,
    "code": "DCA",
    "dper": 86.5,
    "airport": "ARLINGTON VA (DCA)",
    "aop": 6460,
    "lat": 38.851242,
    "dop": 6464,
    "lng": -77.0402315
  },
  {
    "aper": 81.9,
    "code": "AVL",
    "dper": 82.8,
    "airport": "ASHEVILLE NC (AVL)",
    "aop": 237,
    "lat": 35.4354641,
    "dop": 238,
    "lng": -82.5376742
  },
  {
    "aper": 32.8,
    "code": "ASE",
    "dper": 41.4,
    "airport": "ASPEN CO (ASE)",
    "aop": 439,
    "lat": 39.2207537,
    "dop": 435,
    "lng": -106.8666179
  },
  {
    "aper": 87,
    "code": "ATL",
    "dper": 84,
    "airport": "ATLANTA GA (ATL)",
    "aop": 30000,
    "lat": 33.6407282,
    "dop": 29951,
    "lng": -84.4277001
  },
  {
    "aper": 66.7,
    "code": "ACY",
    "dper": 100,
    "airport": "ATLANTIC CITY NJ (ACY)",
    "aop": 3,
    "lat": 39.4551142,
    "dop": 4,
    "lng": -74.5708448
  },
  {
    "aper": 83.2,
    "code": "AGS",
    "dper": 84.7,
    "airport": "AUGUSTA GA (AGS)",
    "aop": 208,
    "lat": 33.3737657,
    "dop": 209,
    "lng": -81.9722352
  },
  {
    "aper": 74,
    "code": "AUS",
    "dper": 79.3,
    "airport": "AUSTIN TX (AUS)",
    "aop": 3540,
    "lat": 30.1974292,
    "dop": 3544,
    "lng": -97.6663058
  },
  {
    "aper": 63.2,
    "code": "BFL",
    "dper": 80.4,
    "airport": "BAKERSFIELD CA (BFL)",
    "aop": 239,
    "lat": 35.4380585,
    "dop": 240,
    "lng": -119.0546234
  },
  {
    "aper": 82.1,
    "code": "BWI",
    "dper": 75.9,
    "airport": "BALTIMORE MD (BWI)",
    "aop": 7383,
    "lat": 39.1774042,
    "dop": 7381,
    "lng": -76.6683922
  },
  {
    "aper": 100,
    "code": "BGR",
    "dper": 100,
    "airport": "BANGOR ME (BGR)",
    "aop": 2,
    "lat": 44.8079749,
    "dop": 3,
    "lng": -68.8166829
  },
  {
    "aper": 78.2,
    "code": "BRW",
    "dper": 69.2,
    "airport": "BARROW AK (BRW)",
    "aop": 78,
    "lat": 71.285278,
    "dop": 78,
    "lng": -156.7658329
  },
  {
    "aper": 71.2,
    "code": "BTR",
    "dper": 73.4,
    "airport": "BATON ROUGE LA (BTR)",
    "aop": 690,
    "lat": 30.5323599,
    "dop": 689,
    "lng": -91.151461
  },
  {
    "aper": 42.4,
    "code": "BPT",
    "dper": 57.6,
    "airport": "BEAUMONT\/PORT ARTHUR TX (BPT)",
    "aop": 92,
    "lat": 29.950833,
    "dop": 92,
    "lng": -94.020694
  },
  {
    "aper": 77.2,
    "code": "BLI",
    "dper": 91.1,
    "airport": "BELLINGHAM WA (BLI)",
    "aop": 101,
    "lat": 48.7956526,
    "dop": 101,
    "lng": -122.5330734
  },
  {
    "aper": 85.5,
    "code": "BJI",
    "dper": 83.9,
    "airport": "BEMIDJI MN (BJI)",
    "aop": 62,
    "lat": 47.509167,
    "dop": 62,
    "lng": -94.933611
  },
  {
    "aper": 52.8,
    "code": "RDM",
    "dper": 64.4,
    "airport": "BEND\/REDMOND OR (RDM)",
    "aop": 176,
    "lat": 44.2531845,
    "dop": 177,
    "lng": -121.1504052
  },
  {
    "aper": 89.9,
    "code": "BET",
    "dper": 88.6,
    "airport": "BETHEL AK (BET)",
    "aop": 79,
    "lat": 60.779722,
    "dop": 79,
    "lng": -161.8377779
  },
  {
    "aper": 74.1,
    "code": "BIL",
    "dper": 85.4,
    "airport": "BILLINGS MT (BIL)",
    "aop": 224,
    "lat": 45.8220359,
    "dop": 226,
    "lng": -108.3736092
  },
  {
    "aper": 76.5,
    "code": "BHM",
    "dper": 81.9,
    "airport": "BIRMINGHAM AL (BHM)",
    "aop": 1120,
    "lat": 33.5624269,
    "dop": 1122,
    "lng": -86.754126
  },
  {
    "aper": 67.4,
    "code": "BIS",
    "dper": 78.8,
    "airport": "BISMARCK\/MANDAN ND (BIS)",
    "aop": 264,
    "lat": 46.8083268,
    "dop": 264,
    "lng": -100.7837392
  },
  {
    "aper": 65.4,
    "code": "BMI",
    "dper": 77.5,
    "airport": "BLOOMINGTON\/NORMAL IL (BMI)",
    "aop": 228,
    "lat": 40.4833097,
    "dop": 231,
    "lng": -88.9141853
  },
  {
    "aper": 64,
    "code": "BOI",
    "dper": 67.4,
    "airport": "BOISE ID (BOI)",
    "aop": 982,
    "lat": 43.5658231,
    "dop": 981,
    "lng": -116.222316
  },
  {
    "aper": 77.8,
    "code": "BOS",
    "dper": 82.3,
    "airport": "BOSTON MA (BOS)",
    "aop": 8872,
    "lat": 42.3656132,
    "dop": 8887,
    "lng": -71.0095602
  },
  {
    "aper": 68.8,
    "code": "BZN",
    "dper": 68.3,
    "airport": "BOZEMAN MT (BZN)",
    "aop": 292,
    "lat": 45.7773831,
    "dop": 290,
    "lng": -111.1603722
  },
  {
    "aper": 66.2,
    "code": "BRD",
    "dper": 75.3,
    "airport": "BRAINERD MN (BRD)",
    "aop": 77,
    "lat": 46.397778,
    "dop": 77,
    "lng": -94.137222
  },
  {
    "aper": 91.4,
    "code": "TRI",
    "dper": 91.5,
    "airport": "BRISTOL\/JOHNSON CITY\/KINGSPORT TN (TRI)",
    "aop": 163,
    "lat": 36.475201,
    "dop": 165,
    "lng": -82.407402
  },
  {
    "aper": 68.4,
    "code": "BRO",
    "dper": 78.2,
    "airport": "BROWNSVILLE TX (BRO)",
    "aop": 206,
    "lat": 25.9017472,
    "dop": 206,
    "lng": -97.4974838
  },
  {
    "aper": 83.1,
    "code": "BQK",
    "dper": 86.7,
    "airport": "BRUNSWICK GA (BQK)",
    "aop": 83,
    "lat": 31.2572019,
    "dop": 83,
    "lng": -81.4690089
  },
  {
    "aper": 81.6,
    "code": "BUF",
    "dper": 87.6,
    "airport": "BUFFALO NY (BUF)",
    "aop": 1420,
    "lat": 42.9397059,
    "dop": 1420,
    "lng": -78.7295067
  },
  {
    "aper": 66.9,
    "code": "BUR",
    "dper": 69.2,
    "airport": "BURBANK CA (BUR)",
    "aop": 1715,
    "lat": 34.1983122,
    "dop": 1715,
    "lng": -118.3574036
  },
  {
    "aper": 73.6,
    "code": "BTV",
    "dper": 75.1,
    "airport": "BURLINGTON VT (BTV)",
    "aop": 387,
    "lat": 44.4706939,
    "dop": 386,
    "lng": -73.1516037
  },
  {
    "aper": 79,
    "code": "BTM",
    "dper": 85.5,
    "airport": "BUTTE MT (BTM)",
    "aop": 62,
    "lat": 45.9547219,
    "dop": 62,
    "lng": -112.497222
  },
  {
    "aper": 67,
    "code": "CLD",
    "dper": 73.9,
    "airport": "CARLSBAD CA (CLD)",
    "aop": 203,
    "lat": 33.1265833,
    "dop": 203,
    "lng": -117.2788379
  },
  {
    "aper": 70.1,
    "code": "CPR",
    "dper": 78.2,
    "airport": "CASPER WY (CPR)",
    "aop": 201,
    "lat": 42.9002899,
    "dop": 202,
    "lng": -106.4645584
  },
  {
    "aper": 86.8,
    "code": "CDC",
    "dper": 86.8,
    "airport": "CEDAR CITY UT (CDC)",
    "aop": 53,
    "lat": 37.700833,
    "dop": 53,
    "lng": -113.098611
  },
  {
    "aper": 65.5,
    "code": "CID",
    "dper": 73.9,
    "airport": "CEDAR RAPIDS\/IOWA CITY IA (CID)",
    "aop": 618,
    "lat": 41.8863861,
    "dop": 618,
    "lng": -91.7069754
  },
  {
    "aper": 62,
    "code": "CMI",
    "dper": 76.4,
    "airport": "CHAMPAIGN\/URBANA IL (CMI)",
    "aop": 208,
    "lat": 40.0400682,
    "dop": 208,
    "lng": -88.2707151
  },
  {
    "aper": 77.4,
    "code": "IAD",
    "dper": 77.1,
    "airport": "CHANTILLY VA (IAD)",
    "aop": 4320,
    "lat": 38.8942786,
    "dop": 4354,
    "lng": -77.4310992
  },
  {
    "aper": 80.3,
    "code": "CHS",
    "dper": 84,
    "airport": "CHARLESTON SC (CHS)",
    "aop": 1019,
    "lat": 32.8942676,
    "dop": 1020,
    "lng": -80.038159
  },
  {
    "aper": 73.1,
    "code": "CRW",
    "dper": 74.5,
    "airport": "CHARLESTON\/DUNBAR WV (CRW)",
    "aop": 208,
    "lat": 38.3711704,
    "dop": 208,
    "lng": -81.593344
  },
  {
    "aper": 81.3,
    "code": "STT",
    "dper": 84.6,
    "airport": "CHARLOTTE AMALIE VI (STT)",
    "aop": 411,
    "lat": 18.3419004,
    "dop": 410,
    "lng": -64.9307007
  },
  {
    "aper": 84.7,
    "code": "CLT",
    "dper": 86.3,
    "airport": "CHARLOTTE NC (CLT)",
    "aop": 9506,
    "lat": 35.2144026,
    "dop": 9531,
    "lng": -80.9473146
  },
  {
    "aper": 64.3,
    "code": "CHO",
    "dper": 77.4,
    "airport": "CHARLOTTESVILLE VA (CHO)",
    "aop": 185,
    "lat": 38.1393766,
    "dop": 186,
    "lng": -78.449417
  },
  {
    "aper": 76.7,
    "code": "CHA",
    "dper": 82.6,
    "airport": "CHATTANOOGA TN (CHA)",
    "aop": 344,
    "lat": 35.0374869,
    "dop": 345,
    "lng": -85.1971491
  },
  {
    "aper": 82,
    "code": "MDW",
    "dper": 74.1,
    "airport": "CHICAGO IL (MDW)",
    "aop": 7189,
    "lat": 41.7867759,
    "dop": 7187,
    "lng": -87.7521884
  },
  {
    "aper": 78,
    "code": "ORD",
    "dper": 74.9,
    "airport": "CHICAGO IL (ORD)",
    "aop": 23484,
    "lat": 41.9741625,
    "dop": 23481,
    "lng": -87.9073214
  },
  {
    "aper": 20,
    "code": "CIC",
    "dper": 33.3,
    "airport": "CHICO CA (CIC)",
    "aop": 5,
    "lat": 39.7990924,
    "dop": 6,
    "lng": -121.8546733
  },
  {
    "aper": 79.8,
    "code": "STX",
    "dper": 79.8,
    "airport": "CHRISTIANSTED VI (STX)",
    "aop": 89,
    "lat": 17.701287,
    "dop": 89,
    "lng": -64.805797
  },
  {
    "aper": 79.1,
    "code": "CLE",
    "dper": 82.6,
    "airport": "CLEVELAND OH (CLE)",
    "aop": 3038,
    "lat": 41.4124339,
    "dop": 3041,
    "lng": -81.8479925
  },
  {
    "aper": 74.2,
    "code": "COD",
    "dper": 87.1,
    "airport": "CODY WY (COD)",
    "aop": 62,
    "lat": 44.52,
    "dop": 62,
    "lng": -109.023611
  },
  {
    "aper": 69.3,
    "code": "CLL",
    "dper": 76.6,
    "airport": "COLLEGE STATION\/BRYAN TX (CLL)",
    "aop": 205,
    "lat": 30.6326956,
    "dop": 205,
    "lng": -96.3393462
  },
  {
    "aper": 66.8,
    "code": "COS",
    "dper": 79.6,
    "airport": "COLORADO SPRINGS CO (COS)",
    "aop": 686,
    "lat": 38.801712,
    "dop": 686,
    "lng": -104.7026039
  },
  {
    "aper": 63.7,
    "code": "COU",
    "dper": 77.4,
    "airport": "COLUMBIA MO (COU)",
    "aop": 124,
    "lat": 38.818093,
    "dop": 124,
    "lng": -92.219629
  },
  {
    "aper": 76.4,
    "code": "CAE",
    "dper": 84.1,
    "airport": "COLUMBIA SC (CAE)",
    "aop": 554,
    "lat": 33.941917,
    "dop": 554,
    "lng": -81.1220015
  },
  {
    "aper": 79.7,
    "code": "CSG",
    "dper": 89.9,
    "airport": "COLUMBUS GA (CSG)",
    "aop": 79,
    "lat": 32.516847,
    "dop": 79,
    "lng": -84.939169
  },
  {
    "aper": 87,
    "code": "GTR",
    "dper": 91,
    "airport": "COLUMBUS MS (GTR)",
    "aop": 77,
    "lat": 33.4540699,
    "dop": 78,
    "lng": -88.5896327
  },
  {
    "aper": 76,
    "code": "CMH",
    "dper": 80.6,
    "airport": "COLUMBUS OH (CMH)",
    "aop": 2119,
    "lat": 39.9999399,
    "dop": 2122,
    "lng": -82.8871767
  },
  {
    "aper": 81.7,
    "code": "CDV",
    "dper": 85,
    "airport": "CORDOVA AK (CDV)",
    "aop": 60,
    "lat": 60.4934354,
    "dop": 60,
    "lng": -145.4757287
  },
  {
    "aper": 58.9,
    "code": "CRP",
    "dper": 66.1,
    "airport": "CORPUS CHRISTI TX (CRP)",
    "aop": 547,
    "lat": 27.7744653,
    "dop": 549,
    "lng": -97.5027118
  },
  {
    "aper": 75.6,
    "code": "CVG",
    "dper": 81,
    "airport": "COVINGTON KY (CVG)",
    "aop": 1857,
    "lat": 39.0836712,
    "dop": 1857,
    "lng": -84.5085536
  },
  {
    "aper": 37.3,
    "code": "CEC",
    "dper": 25.4,
    "airport": "CRESCENT CITY CA (CEC)",
    "aop": 59,
    "lat": 41.78,
    "dop": 59,
    "lng": -124.236389
  },
  {
    "aper": 73.4,
    "code": "DAL",
    "dper": 65.6,
    "airport": "DALLAS TX (DAL)",
    "aop": 5045,
    "lat": 32.8481029,
    "dop": 5046,
    "lng": -96.8512063
  },
  {
    "aper": 68.4,
    "code": "DFW",
    "dper": 65.2,
    "airport": "DALLAS\/FORT WORTH TX (DFW)",
    "aop": 23058,
    "lat": 32.8998091,
    "dop": 23059,
    "lng": -97.0403352
  },
  {
    "aper": 71.6,
    "code": "DAY",
    "dper": 81.1,
    "airport": "DAYTON OH (DAY)",
    "aop": 737,
    "lat": 39.9025242,
    "dop": 736,
    "lng": -84.2217719
  },
  {
    "aper": 91.9,
    "code": "DAB",
    "dper": 91.1,
    "airport": "DAYTONA BEACH FL (DAB)",
    "aop": 124,
    "lat": 29.2108147,
    "dop": 123,
    "lng": -81.0228331
  },
  {
    "aper": 81,
    "code": "SCC",
    "dper": 83.5,
    "airport": "DEADHORSE AK (SCC)",
    "aop": 79,
    "lat": 70.198084,
    "dop": 79,
    "lng": -148.460274
  },
  {
    "aper": 73.8,
    "code": "DEN",
    "dper": 65.7,
    "airport": "DENVER CO (DEN)",
    "aop": 18206,
    "lat": 39.8589188,
    "dop": 18232,
    "lng": -104.6742865
  },
  {
    "aper": 67,
    "code": "DSM",
    "dper": 75.5,
    "airport": "DES MOINES IA (DSM)",
    "aop": 778,
    "lat": 41.5341333,
    "dop": 781,
    "lng": -93.6587958
  },
  {
    "aper": 85.9,
    "code": "DTW",
    "dper": 84.8,
    "airport": "DETROIT MI (DTW)",
    "aop": 8696,
    "lat": 42.2161722,
    "dop": 8689,
    "lng": -83.3553842
  },
  {
    "aper": 48,
    "code": "DVL",
    "dper": 62,
    "airport": "DEVILS LAKE ND (DVL)",
    "aop": 50,
    "lat": 48.11458,
    "dop": 50,
    "lng": -98.9082555
  },
  {
    "aper": 79.2,
    "code": "DIK",
    "dper": 89.3,
    "airport": "DICKINSON ND (DIK)",
    "aop": 130,
    "lat": 46.8791756,
    "dop": 131,
    "lng": -102.7896242
  },
  {
    "aper": 82.8,
    "code": "DHN",
    "dper": 87.9,
    "airport": "DOTHAN AL (DHN)",
    "aop": 116,
    "lat": 31.3183368,
    "dop": 116,
    "lng": -85.4485162
  },
  {
    "aper": 71.6,
    "code": "DBQ",
    "dper": 83.8,
    "airport": "DUBUQUE IA (DBQ)",
    "aop": 74,
    "lat": 42.4063072,
    "dop": 74,
    "lng": -90.7050326
  },
  {
    "aper": 73.6,
    "code": "DLH",
    "dper": 81.4,
    "airport": "DULUTH MN (DLH)",
    "aop": 144,
    "lat": 46.8417186,
    "dop": 145,
    "lng": -92.1784096
  },
  {
    "aper": 69.7,
    "code": "DRO",
    "dper": 73.7,
    "airport": "DURANGO CO (DRO)",
    "aop": 152,
    "lat": 37.1513355,
    "dop": 152,
    "lng": -107.7551243
  },
  {
    "aper": 57.8,
    "code": "EGE",
    "dper": 55.8,
    "airport": "EAGLE CO (EGE)",
    "aop": 166,
    "lat": 39.6425,
    "dop": 165,
    "lng": -106.9175
  },
  {
    "aper": 77.4,
    "code": "EAU",
    "dper": 80.6,
    "airport": "EAU CLAIRE WI (EAU)",
    "aop": 62,
    "lat": 44.8623198,
    "dop": 62,
    "lng": -91.4827045
  },
  {
    "aper": 66.5,
    "code": "ELP",
    "dper": 74,
    "airport": "EL PASO TX (ELP)",
    "aop": 1136,
    "lat": 31.8053354,
    "dop": 1141,
    "lng": -106.3824345
  },
  {
    "aper": 88.8,
    "code": "EKO",
    "dper": 92.5,
    "airport": "ELKO NV (EKO)",
    "aop": 80,
    "lat": 40.8243131,
    "dop": 80,
    "lng": -115.7915407
  },
  {
    "aper": 88.3,
    "code": "ELM",
    "dper": 89,
    "airport": "ELMIRA\/CORNING NY (ELM)",
    "aop": 145,
    "lat": 42.1628009,
    "dop": 146,
    "lng": -76.8957169
  },
  {
    "aper": 82.5,
    "code": "ERI",
    "dper": 83.9,
    "airport": "ERIE PA (ERI)",
    "aop": 63,
    "lat": 42.0830079,
    "dop": 62,
    "lng": -80.1818153
  },
  {
    "aper": 65.4,
    "code": "ESC",
    "dper": 74.5,
    "airport": "ESCANABA MI (ESC)",
    "aop": 52,
    "lat": 45.719907,
    "dop": 51,
    "lng": -87.0940733
  },
  {
    "aper": 52.9,
    "code": "EUG",
    "dper": 60.6,
    "airport": "EUGENE OR (EUG)",
    "aop": 393,
    "lat": 44.1217811,
    "dop": 393,
    "lng": -123.2159003
  },
  {
    "aper": 77.1,
    "code": "EVV",
    "dper": 82.9,
    "airport": "EVANSVILLE IN (EVV)",
    "aop": 292,
    "lat": 38.0469933,
    "dop": 293,
    "lng": -87.5293781
  },
  {
    "aper": 78.6,
    "code": "FAI",
    "dper": 82.5,
    "airport": "FAIRBANKS AK (FAI)",
    "aop": 154,
    "lat": 64.8164163,
    "dop": 154,
    "lng": -147.8635169
  },
  {
    "aper": 69.8,
    "code": "FAR",
    "dper": 77.3,
    "airport": "FARGO ND (FAR)",
    "aop": 451,
    "lat": 46.8170107,
    "dop": 450,
    "lng": -96.834017
  },
  {
    "aper": 70.5,
    "code": "XNA",
    "dper": 79,
    "airport": "FAYETTEVILLE AR (XNA)",
    "aop": 772,
    "lat": 36.2786587,
    "dop": 772,
    "lng": -94.304294
  },
  {
    "aper": 89.5,
    "code": "FAY",
    "dper": 89.6,
    "airport": "FAYETTEVILLE NC (FAY)",
    "aop": 153,
    "lat": 34.9903243,
    "dop": 154,
    "lng": -78.8870718
  },
  {
    "aper": 72.7,
    "code": "FLG",
    "dper": 81.3,
    "airport": "FLAGSTAFF AZ (FLG)",
    "aop": 128,
    "lat": 35.13778,
    "dop": 128,
    "lng": -111.67167
  },
  {
    "aper": 81,
    "code": "FNT",
    "dper": 85,
    "airport": "FLINT MI (FNT)",
    "aop": 420,
    "lat": 42.9724562,
    "dop": 419,
    "lng": -83.7506011
  },
  {
    "aper": 80.8,
    "code": "FLL",
    "dper": 81.4,
    "airport": "FORT LAUDERDALE FL (FLL)",
    "aop": 6034,
    "lat": 26.0742344,
    "dop": 6022,
    "lng": -80.1506022
  },
  {
    "aper": 80,
    "code": "RSW",
    "dper": 81.7,
    "airport": "FORT MYERS FL (RSW)",
    "aop": 2492,
    "lat": 26.5337051,
    "dop": 2485,
    "lng": -81.7553083
  },
  {
    "aper": 64.3,
    "code": "FSM",
    "dper": 75,
    "airport": "FORT SMITH AR (FSM)",
    "aop": 196,
    "lat": 35.3408595,
    "dop": 196,
    "lng": -94.3590081
  },
  {
    "aper": 71.1,
    "code": "FWA",
    "dper": 83,
    "airport": "FORT WAYNE IN (FWA)",
    "aop": 357,
    "lat": 40.9864636,
    "dop": 358,
    "lng": -85.1881479
  },
  {
    "aper": 64.7,
    "code": "FAT",
    "dper": 69.3,
    "airport": "FRESNO CA (FAT)",
    "aop": 739,
    "lat": 36.7758493,
    "dop": 739,
    "lng": -119.7181083
  },
  {
    "aper": 78.6,
    "code": "GNV",
    "dper": 82,
    "airport": "GAINESVILLE FL (GNV)",
    "aop": 220,
    "lat": 29.686569,
    "dop": 222,
    "lng": -82.2767345
  },
  {
    "aper": 51.6,
    "code": "GCK",
    "dper": 67.7,
    "airport": "GARDEN CITY KS (GCK)",
    "aop": 62,
    "lat": 37.9275,
    "dop": 62,
    "lng": -100.724167
  },
  {
    "aper": 64.2,
    "code": "GCC",
    "dper": 72.5,
    "airport": "GILLETTE WY (GCC)",
    "aop": 120,
    "lat": 44.3479793,
    "dop": 120,
    "lng": -105.5390967
  },
  {
    "aper": 75,
    "code": "GFK",
    "dper": 77.4,
    "airport": "GRAND FORKS ND (GFK)",
    "aop": 32,
    "lat": 47.949167,
    "dop": 31,
    "lng": -97.176111
  },
  {
    "aper": 53.4,
    "code": "GRI",
    "dper": 69,
    "airport": "GRAND ISLAND NE (GRI)",
    "aop": 58,
    "lat": 40.9698237,
    "dop": 58,
    "lng": -98.3161543
  },
  {
    "aper": 70.1,
    "code": "GJT",
    "dper": 84.3,
    "airport": "GRAND JUNCTION CO (GJT)",
    "aop": 331,
    "lat": 39.1222533,
    "dop": 331,
    "lng": -108.5289252
  },
  {
    "aper": 74.5,
    "code": "GRR",
    "dper": 83.7,
    "airport": "GRAND RAPIDS MI (GRR)",
    "aop": 956,
    "lat": 42.8846633,
    "dop": 955,
    "lng": -85.5248434
  },
  {
    "aper": 69.6,
    "code": "GTF",
    "dper": 83,
    "airport": "GREAT FALLS MT (GTF)",
    "aop": 171,
    "lat": 47.4823898,
    "dop": 171,
    "lng": -111.3567377
  },
  {
    "aper": 72.2,
    "code": "GRB",
    "dper": 80.5,
    "airport": "GREEN BAY WI (GRB)",
    "aop": 399,
    "lat": 44.4919741,
    "dop": 399,
    "lng": -88.1275065
  },
  {
    "aper": 74.5,
    "code": "GSO",
    "dper": 80.4,
    "airport": "GREENSBORO\/HIGH POINT NC (GSO)",
    "aop": 766,
    "lat": 36.1043671,
    "dop": 769,
    "lng": -79.9351805
  },
  {
    "aper": 74.9,
    "code": "GSP",
    "dper": 79.9,
    "airport": "GREER SC (GSP)",
    "aop": 590,
    "lat": 34.8959008,
    "dop": 592,
    "lng": -82.2172338
  },
  {
    "aper": 67.7,
    "code": "GUM",
    "dper": 71,
    "airport": "GUAM TT (GUM)",
    "aop": 31,
    "lat": 13.444304,
    "dop": 31,
    "lng": 144.793731
  },
  {
    "aper": 74.1,
    "code": "GPT",
    "dper": 80.7,
    "airport": "GULFPORT\/BILOXI MS (GPT)",
    "aop": 347,
    "lat": 30.41338,
    "dop": 347,
    "lng": -89.072958
  },
  {
    "aper": 57.1,
    "code": "GUC",
    "dper": 68.7,
    "airport": "GUNNISON CO (GUC)",
    "aop": 84,
    "lat": 38.533889,
    "dop": 83,
    "lng": -106.932778
  },
  {
    "aper": 71,
    "code": "CMX",
    "dper": 79,
    "airport": "HANCOCK\/HOUGHTON MI (CMX)",
    "aop": 62,
    "lat": 47.1268714,
    "dop": 62,
    "lng": -88.5809563
  },
  {
    "aper": 69,
    "code": "HRL",
    "dper": 79.6,
    "airport": "HARLINGEN\/SAN BENITO TX (HRL)",
    "aop": 284,
    "lat": 26.2285,
    "dop": 285,
    "lng": -97.654404
  },
  {
    "aper": 84.9,
    "code": "MDT",
    "dper": 88.1,
    "airport": "HARRISBURG PA (MDT)",
    "aop": 251,
    "lat": 40.1942375,
    "dop": 253,
    "lng": -76.7576672
  },
  {
    "aper": 80.8,
    "code": "BDL",
    "dper": 88.1,
    "airport": "HARTFORD CT (BDL)",
    "aop": 1854,
    "lat": 41.9388735,
    "dop": 1856,
    "lng": -72.6860314
  },
  {
    "aper": 59.3,
    "code": "PIB",
    "dper": 75.9,
    "airport": "HATTIESBURG\/LAUREL MS (PIB)",
    "aop": 54,
    "lat": 31.4682389,
    "dop": 54,
    "lng": -89.3354206
  },
  {
    "aper": 59,
    "code": "HDN",
    "dper": 60.3,
    "airport": "HAYDEN CO (HDN)",
    "aop": 78,
    "lat": 40.4847268,
    "dop": 78,
    "lng": -107.2198832
  },
  {
    "aper": 73.6,
    "code": "HYS",
    "dper": 75.5,
    "airport": "HAYS KS (HYS)",
    "aop": 53,
    "lat": 38.8539085,
    "dop": 53,
    "lng": -99.2737859
  },
  {
    "aper": 86.4,
    "code": "HLN",
    "dper": 93.2,
    "airport": "HELENA MT (HLN)",
    "aop": 103,
    "lat": 46.6097372,
    "dop": 103,
    "lng": -111.990078
  },
  {
    "aper": 90.9,
    "code": "HIB",
    "dper": 92.7,
    "airport": "HIBBING MN (HIB)",
    "aop": 55,
    "lat": 47.386389,
    "dop": 55,
    "lng": -92.838889
  },
  {
    "aper": 91.1,
    "code": "ITO",
    "dper": 92.3,
    "airport": "HILO HI (ITO)",
    "aop": 517,
    "lat": 19.7188342,
    "dop": 517,
    "lng": -155.0416866
  },
  {
    "aper": 62.3,
    "code": "HOB",
    "dper": 63.5,
    "airport": "HOBBS NM (HOB)",
    "aop": 53,
    "lat": 32.6875,
    "dop": 52,
    "lng": -103.216942
  },
  {
    "aper": 79.2,
    "code": "HNL",
    "dper": 90.6,
    "airport": "HONOLULU HI (HNL)",
    "aop": 3993,
    "lat": 21.3245132,
    "dop": 3993,
    "lng": -157.9250736
  },
  {
    "aper": 73.3,
    "code": "HOU",
    "dper": 67.4,
    "airport": "HOUSTON TX (HOU)",
    "aop": 4849,
    "lat": 29.6541074,
    "dop": 4850,
    "lng": -95.2766145
  },
  {
    "aper": 75.2,
    "code": "IAH",
    "dper": 74.7,
    "airport": "HOUSTON TX (IAH)",
    "aop": 14143,
    "lat": 29.9902199,
    "dop": 14129,
    "lng": -95.3367827
  },
  {
    "aper": 78.3,
    "code": "HSV",
    "dper": 82.9,
    "airport": "HUNTSVILLE AL (HSV)",
    "aop": 471,
    "lat": 34.6403329,
    "dop": 473,
    "lng": -86.7756899
  },
  {
    "aper": 71,
    "code": "IDA",
    "dper": 81.3,
    "airport": "IDAHO FALLS ID (IDA)",
    "aop": 224,
    "lat": 43.5155832,
    "dop": 224,
    "lng": -112.0684032
  },
  {
    "aper": 78.8,
    "code": "IND",
    "dper": 83.6,
    "airport": "INDIANAPOLIS IN (IND)",
    "aop": 2306,
    "lat": 39.768403,
    "dop": 2308,
    "lng": -86.158068
  },
  {
    "aper": 63,
    "code": "INL",
    "dper": 85.2,
    "airport": "INTERNATIONAL FALLS MN (INL)",
    "aop": 54,
    "lat": 48.566111,
    "dop": 54,
    "lng": -93.403056
  },
  {
    "aper": 82.8,
    "code": "IMT",
    "dper": 86.2,
    "airport": "IRON MOUNTAIN\/KINGSFD MI (IMT)",
    "aop": 58,
    "lat": 45.8149821,
    "dop": 58,
    "lng": -88.1185699
  },
  {
    "aper": 70,
    "code": "ISP",
    "dper": 70.6,
    "airport": "ISLIP NY (ISP)",
    "aop": 397,
    "lat": 40.7972401,
    "dop": 398,
    "lng": -73.1003215
  },
  {
    "aper": 61.9,
    "code": "JAC",
    "dper": 63.7,
    "airport": "JACKSON WY (JAC)",
    "aop": 318,
    "lat": 43.6046209,
    "dop": 317,
    "lng": -110.7386093
  },
  {
    "aper": 67.7,
    "code": "JAN",
    "dper": 72.5,
    "airport": "JACKSON\/VICKSBURG MS (JAN)",
    "aop": 628,
    "lat": 32.3122283,
    "dop": 628,
    "lng": -90.0764217
  },
  {
    "aper": 79.6,
    "code": "JAX",
    "dper": 84.6,
    "airport": "JACKSONVILLE FL (JAX)",
    "aop": 1793,
    "lat": 30.4940713,
    "dop": 1789,
    "lng": -81.6879368
  },
  {
    "aper": 89.8,
    "code": "OAJ",
    "dper": 90.8,
    "airport": "JACKSONVILLE\/CAMP LEJEUNE NC (OAJ)",
    "aop": 98,
    "lat": 34.7044439,
    "dop": 98,
    "lng": -77.3447966
  },
  {
    "aper": 48.1,
    "code": "JMS",
    "dper": 54.5,
    "airport": "JAMESTOWN ND (JMS)",
    "aop": 79,
    "lat": 46.9263971,
    "dop": 77,
    "lng": -98.6787689
  },
  {
    "aper": 44.1,
    "code": "JLN",
    "dper": 54.2,
    "airport": "JOPLIN MO (JLN)",
    "aop": 59,
    "lat": 37.1574041,
    "dop": 59,
    "lng": -94.5014793
  },
  {
    "aper": 82.1,
    "code": "JNU",
    "dper": 80.3,
    "airport": "JUNEAU AK (JNU)",
    "aop": 296,
    "lat": 58.3579806,
    "dop": 295,
    "lng": -134.5831791
  },
  {
    "aper": 81.5,
    "code": "OGG",
    "dper": 86.5,
    "airport": "KAHULUI HI (OGG)",
    "aop": 1932,
    "lat": 20.8967924,
    "dop": 1931,
    "lng": -156.4329379
  },
  {
    "aper": 77.3,
    "code": "AZO",
    "dper": 85.8,
    "airport": "KALAMAZOO MI (AZO)",
    "aop": 154,
    "lat": 42.2370076,
    "dop": 155,
    "lng": -85.5531781
  },
  {
    "aper": 64,
    "code": "FCA",
    "dper": 71.6,
    "airport": "KALISPELL MT (FCA)",
    "aop": 89,
    "lat": 48.197778,
    "dop": 88,
    "lng": -114.316111
  },
  {
    "aper": 76.4,
    "code": "MCI",
    "dper": 79.3,
    "airport": "KANSAS CITY MO (MCI)",
    "aop": 3431,
    "lat": 39.3006427,
    "dop": 3432,
    "lng": -94.7125937
  },
  {
    "aper": 81,
    "code": "KTN",
    "dper": 79.9,
    "airport": "KETCHIKAN AK (KTN)",
    "aop": 184,
    "lat": 55.3554106,
    "dop": 184,
    "lng": -131.7105604
  },
  {
    "aper": 87.4,
    "code": "EYW",
    "dper": 90.4,
    "airport": "KEY WEST FL (EYW)",
    "aop": 301,
    "lat": 24.556987,
    "dop": 302,
    "lng": -81.757397
  },
  {
    "aper": 60.8,
    "code": "GRK",
    "dper": 68.4,
    "airport": "KILLEEN TX (GRK)",
    "aop": 398,
    "lat": 31.0619133,
    "dop": 399,
    "lng": -97.8212665
  },
  {
    "aper": 69.7,
    "code": "TYS",
    "dper": 76.2,
    "airport": "KNOXVILLE TN (TYS)",
    "aop": 725,
    "lat": 35.810833,
    "dop": 726,
    "lng": -83.993889
  },
  {
    "aper": 79.3,
    "code": "ADQ",
    "dper": 86.2,
    "airport": "KODIAK AK (ADQ)",
    "aop": 29,
    "lat": 57.749966,
    "dop": 29,
    "lng": -152.493851
  },
  {
    "aper": 85.5,
    "code": "KOA",
    "dper": 89.8,
    "airport": "KONA HI (KOA)",
    "aop": 967,
    "lat": 19.736916,
    "dop": 967,
    "lng": -156.0429246
  },
  {
    "aper": 86.4,
    "code": "OTZ",
    "dper": 72.9,
    "airport": "KOTZEBUE AK (OTZ)",
    "aop": 59,
    "lat": 66.889162,
    "dop": 59,
    "lng": -162.605408
  },
  {
    "aper": 81.5,
    "code": "LSE",
    "dper": 82.4,
    "airport": "LA CROSSE WI (LSE)",
    "aop": 108,
    "lat": 43.8785549,
    "dop": 108,
    "lng": -91.2572053
  },
  {
    "aper": 72.3,
    "code": "LFT",
    "dper": 77.2,
    "airport": "LAFAYETTE LA (LFT)",
    "aop": 505,
    "lat": 30.2074725,
    "dop": 508,
    "lng": -91.9919627
  },
  {
    "aper": 65.6,
    "code": "LCH",
    "dper": 78.9,
    "airport": "LAKE CHARLES LA (LCH)",
    "aop": 151,
    "lat": 30.1228442,
    "dop": 152,
    "lng": -93.2219564
  },
  {
    "aper": 80.1,
    "code": "LAN",
    "dper": 84.5,
    "airport": "LANSING MI (LAN)",
    "aop": 156,
    "lat": 42.7774769,
    "dop": 155,
    "lng": -84.5842239
  },
  {
    "aper": 52.5,
    "code": "LAR",
    "dper": 67.2,
    "airport": "LARAMIE WY (LAR)",
    "aop": 61,
    "lat": 41.313481,
    "dop": 61,
    "lng": -105.672896
  },
  {
    "aper": 68.4,
    "code": "LRD",
    "dper": 73.9,
    "airport": "LAREDO TX (LRD)",
    "aop": 206,
    "lat": 27.5437988,
    "dop": 207,
    "lng": -99.4575015
  },
  {
    "aper": 71.2,
    "code": "LAS",
    "dper": 68.8,
    "airport": "LAS VEGAS NV (LAS)",
    "aop": 10750,
    "lat": 36.0839998,
    "dop": 10742,
    "lng": -115.1537389
  },
  {
    "aper": 41.3,
    "code": "LAW",
    "dper": 55.8,
    "airport": "LAWTON\/FORT SILL OK (LAW)",
    "aop": 138,
    "lat": 34.5731458,
    "dop": 138,
    "lng": -98.4144055
  },
  {
    "aper": 86.4,
    "code": "LWS",
    "dper": 88.1,
    "airport": "LEWISTON ID (LWS)",
    "aop": 59,
    "lat": 46.3761017,
    "dop": 59,
    "lng": -117.0126753
  },
  {
    "aper": 69,
    "code": "LEX",
    "dper": 78,
    "airport": "LEXINGTON KY (LEX)",
    "aop": 509,
    "lat": 38.0377615,
    "dop": 509,
    "lng": -84.6026083
  },
  {
    "aper": 85.4,
    "code": "LIH",
    "dper": 91.8,
    "airport": "LIHUE HI (LIH)",
    "aop": 988,
    "lat": 21.9788489,
    "dop": 988,
    "lng": -159.3437585
  },
  {
    "aper": 73.4,
    "code": "LNK",
    "dper": 84.4,
    "airport": "LINCOLN NE (LNK)",
    "aop": 199,
    "lat": 40.847062,
    "dop": 199,
    "lng": -96.7552123
  },
  {
    "aper": 66.7,
    "code": "LIT",
    "dper": 75.3,
    "airport": "LITTLE ROCK AR (LIT)",
    "aop": 984,
    "lat": 34.7307049,
    "dop": 984,
    "lng": -92.2216531
  },
  {
    "aper": 79.6,
    "code": "LGB",
    "dper": 78.6,
    "airport": "LONG BEACH CA (LGB)",
    "aop": 830,
    "lat": 33.7700504,
    "dop": 830,
    "lng": -118.1937395
  },
  {
    "aper": 50.8,
    "code": "GGG",
    "dper": 49.2,
    "airport": "LONGVIEW TX (GGG)",
    "aop": 59,
    "lat": 32.3876467,
    "dop": 59,
    "lng": -94.7191015
  },
  {
    "aper": 68.9,
    "code": "LAX",
    "dper": 70.1,
    "airport": "LOS ANGELES CA (LAX)",
    "aop": 17822,
    "lat": 33.9415889,
    "dop": 17802,
    "lng": -118.40853
  },
  {
    "aper": 74.5,
    "code": "SDF",
    "dper": 79.8,
    "airport": "LOUISVILLE KY (SDF)",
    "aop": 1016,
    "lat": 38.175662,
    "dop": 1010,
    "lng": -85.7369231
  },
  {
    "aper": 62.3,
    "code": "LBB",
    "dper": 73,
    "airport": "LUBBOCK TX (LBB)",
    "aop": 507,
    "lat": 33.6582326,
    "dop": 507,
    "lng": -101.8244421
  },
  {
    "aper": 77.3,
    "code": "MSN",
    "dper": 82.1,
    "airport": "MADISON WI (MSN)",
    "aop": 860,
    "lat": 43.1390659,
    "dop": 857,
    "lng": -89.3364128
  },
  {
    "aper": 40.9,
    "code": "MMH",
    "dper": 33.3,
    "airport": "MAMMOTH LAKES CA (MMH)",
    "aop": 22,
    "lat": 37.624168,
    "dop": 21,
    "lng": -118.838608
  },
  {
    "aper": 72.7,
    "code": "MHT",
    "dper": 87.2,
    "airport": "MANCHESTER NH (MHT)",
    "aop": 521,
    "lat": 42.929687,
    "dop": 524,
    "lng": -71.4352177
  },
  {
    "aper": 57.4,
    "code": "MHK",
    "dper": 76.1,
    "airport": "MANHATTAN\/FT. RILEY KS (MHK)",
    "aop": 155,
    "lat": 39.1371707,
    "dop": 155,
    "lng": -96.6703919
  },
  {
    "aper": 70.4,
    "code": "MQT",
    "dper": 74.1,
    "airport": "MARQUETTE MI (MQT)",
    "aop": 27,
    "lat": 46.3496331,
    "dop": 27,
    "lng": -87.3872848
  },
  {
    "aper": 49.4,
    "code": "MFR",
    "dper": 55.1,
    "airport": "MEDFORD OR (MFR)",
    "aop": 265,
    "lat": 42.3685237,
    "dop": 265,
    "lng": -122.874072
  },
  {
    "aper": 89.9,
    "code": "MLB",
    "dper": 94.1,
    "airport": "MELBOURNE FL (MLB)",
    "aop": 119,
    "lat": 28.0977074,
    "dop": 119,
    "lng": -80.6310153
  },
  {
    "aper": 77.7,
    "code": "MEM",
    "dper": 83.2,
    "airport": "MEMPHIS TN (MEM)",
    "aop": 1297,
    "lat": 35.0420679,
    "dop": 1295,
    "lng": -89.9791729
  },
  {
    "aper": 65.9,
    "code": "MEI",
    "dper": 64.7,
    "airport": "MERIDIAN MS (MEI)",
    "aop": 85,
    "lat": 32.330115,
    "dop": 85,
    "lng": -88.751805
  },
  {
    "aper": 79.1,
    "code": "MIA",
    "dper": 78.8,
    "airport": "MIAMI FL (MIA)",
    "aop": 6888,
    "lat": 25.795865,
    "dop": 6878,
    "lng": -80.2870457
  },
  {
    "aper": 59.8,
    "code": "MAF",
    "dper": 67.4,
    "airport": "MIDLAND\/ODESSA TX (MAF)",
    "aop": 816,
    "lat": 31.9369715,
    "dop": 817,
    "lng": -102.2098418
  },
  {
    "aper": 76.1,
    "code": "MKE",
    "dper": 80.1,
    "airport": "MILWAUKEE WI (MKE)",
    "aop": 2700,
    "lat": 42.9475534,
    "dop": 2703,
    "lng": -87.896646
  },
  {
    "aper": 83.3,
    "code": "MSP",
    "dper": 84.2,
    "airport": "MINNEAPOLIS MN (MSP)",
    "aop": 8424,
    "lat": 44.8847554,
    "dop": 8421,
    "lng": -93.2222846
  },
  {
    "aper": 67.2,
    "code": "MOT",
    "dper": 76.8,
    "airport": "MINOT ND (MOT)",
    "aop": 137,
    "lat": 48.2563665,
    "dop": 138,
    "lng": -101.2916117
  },
  {
    "aper": 68.6,
    "code": "MFE",
    "dper": 80.8,
    "airport": "MISSION\/MCALLEN\/EDINBURG TX (MFE)",
    "aop": 370,
    "lat": 26.1758,
    "dop": 370,
    "lng": -98.238602
  },
  {
    "aper": 65.3,
    "code": "MSO",
    "dper": 78.5,
    "airport": "MISSOULA MT (MSO)",
    "aop": 176,
    "lat": 46.9188167,
    "dop": 172,
    "lng": -114.0837362
  },
  {
    "aper": 84.3,
    "code": "CNY",
    "dper": 92.2,
    "airport": "MOAB UT (CNY)",
    "aop": 51,
    "lat": 38.754722,
    "dop": 51,
    "lng": -109.754722
  },
  {
    "aper": 75.1,
    "code": "MOB",
    "dper": 80.5,
    "airport": "MOBILE AL (MOB)",
    "aop": 450,
    "lat": 30.691389,
    "dop": 451,
    "lng": -88.242778
  },
  {
    "aper": 69.4,
    "code": "MLI",
    "dper": 79.9,
    "airport": "MOLINE IL (MLI)",
    "aop": 369,
    "lat": 41.4539937,
    "dop": 369,
    "lng": -90.506478
  },
  {
    "aper": 74.6,
    "code": "MLU",
    "dper": 78.4,
    "airport": "MONROE LA (MLU)",
    "aop": 268,
    "lat": 32.5101466,
    "dop": 268,
    "lng": -92.0436835
  },
  {
    "aper": 56.3,
    "code": "MRY",
    "dper": 65,
    "airport": "MONTEREY CA (MRY)",
    "aop": 309,
    "lat": 36.588269,
    "dop": 309,
    "lng": -121.8491091
  },
  {
    "aper": 72.8,
    "code": "MGM",
    "dper": 79.7,
    "airport": "MONTGOMERY AL (MGM)",
    "aop": 290,
    "lat": 32.3045743,
    "dop": 291,
    "lng": -86.3910371
  },
  {
    "aper": 70.9,
    "code": "MTJ",
    "dper": 81.9,
    "airport": "MONTROSE\/DELTA CO (MTJ)",
    "aop": 117,
    "lat": 38.5030355,
    "dop": 116,
    "lng": -107.8956795
  },
  {
    "aper": 64.1,
    "code": "CWA",
    "dper": 75.2,
    "airport": "MOSINEE WI (CWA)",
    "aop": 117,
    "lat": 44.7840503,
    "dop": 117,
    "lng": -89.6724508
  },
  {
    "aper": 75.8,
    "code": "MKG",
    "dper": 80.6,
    "airport": "MUSKEGON MI (MKG)",
    "aop": 62,
    "lat": 43.169444,
    "dop": 62,
    "lng": -86.238056
  },
  {
    "aper": 79.8,
    "code": "MYR",
    "dper": 80.9,
    "airport": "MYRTLE BEACH SC (MYR)",
    "aop": 114,
    "lat": 33.6822019,
    "dop": 115,
    "lng": -78.9278943
  },
  {
    "aper": 77.4,
    "code": "BNA",
    "dper": 79.2,
    "airport": "NASHVILLE TN (BNA)",
    "aop": 4428,
    "lat": 36.126317,
    "dop": 4430,
    "lng": -86.6773713
  },
  {
    "aper": 81.7,
    "code": "EWN",
    "dper": 83.1,
    "airport": "NEW BERN\/MOREHEAD\/BEAUFORT NC (EWN)",
    "aop": 60,
    "lat": 35.108493,
    "dop": 59,
    "lng": -77.0441143
  },
  {
    "aper": 79.7,
    "code": "MSY",
    "dper": 81.6,
    "airport": "NEW ORLEANS LA (MSY)",
    "aop": 3307,
    "lat": 29.9922012,
    "dop": 3307,
    "lng": -90.2590112
  },
  {
    "aper": 76,
    "code": "JFK",
    "dper": 80.5,
    "airport": "NEW YORK NY (JFK)",
    "aop": 8590,
    "lat": 40.6413111,
    "dop": 8589,
    "lng": -73.7781391
  },
  {
    "aper": 71.6,
    "code": "LGA",
    "dper": 77.2,
    "airport": "NEW YORK NY (LGA)",
    "aop": 9217,
    "lat": 40.7769271,
    "dop": 9221,
    "lng": -73.8739659
  },
  {
    "aper": 68.2,
    "code": "EWR",
    "dper": 69.5,
    "airport": "NEWARK NJ (EWR)",
    "aop": 9140,
    "lat": 40.6895314,
    "dop": 9155,
    "lng": -74.1744624
  },
  {
    "aper": 77.5,
    "code": "SWF",
    "dper": 85.2,
    "airport": "NEWBURGH\/POUGHKEEPSIE NY (SWF)",
    "aop": 80,
    "lat": 41.5034271,
    "dop": 81,
    "lng": -74.0104178
  },
  {
    "aper": 81.3,
    "code": "PHF",
    "dper": 83.1,
    "airport": "NEWPORT NEWS\/WILLIAMSBURG VA (PHF)",
    "aop": 160,
    "lat": 37.131667,
    "dop": 160,
    "lng": -76.492778
  },
  {
    "aper": 74.6,
    "code": "OME",
    "dper": 76.3,
    "airport": "NOME AK (OME)",
    "aop": 59,
    "lat": 64.5099347,
    "dop": 59,
    "lng": -165.4435152
  },
  {
    "aper": 76.5,
    "code": "ORF",
    "dper": 84.1,
    "airport": "NORFOLK VA (ORF)",
    "aop": 818,
    "lat": 36.8956837,
    "dop": 820,
    "lng": -76.2000161
  },
  {
    "aper": 43.8,
    "code": "OTH",
    "dper": 37.5,
    "airport": "NORTH BEND\/COOS BAY OR (OTH)",
    "aop": 16,
    "lat": 43.4163309,
    "dop": 16,
    "lng": -124.2467487
  },
  {
    "aper": 63.6,
    "code": "OAK",
    "dper": 60.8,
    "airport": "OAKLAND CA (OAK)",
    "aop": 3637,
    "lat": 37.7125689,
    "dop": 3638,
    "lng": -122.2197428
  },
  {
    "aper": 71.4,
    "code": "OKC",
    "dper": 79.9,
    "airport": "OKLAHOMA CITY OK (OKC)",
    "aop": 1549,
    "lat": 35.4675602,
    "dop": 1550,
    "lng": -97.5164276
  },
  {
    "aper": 76.9,
    "code": "OMA",
    "dper": 82.7,
    "airport": "OMAHA NE (OMA)",
    "aop": 1543,
    "lat": 41.2497802,
    "dop": 1544,
    "lng": -95.9272125
  },
  {
    "aper": 62.9,
    "code": "ONT",
    "dper": 68.5,
    "airport": "ONTARIO CA (ONT)",
    "aop": 1678,
    "lat": 51.253775,
    "dop": 1681,
    "lng": -85.3232139
  },
  {
    "aper": 79.9,
    "code": "MCO",
    "dper": 81.1,
    "airport": "ORLANDO FL (MCO)",
    "aop": 9757,
    "lat": 28.4311577,
    "dop": 9739,
    "lng": -81.308083
  },
  {
    "aper": 77,
    "code": "PAH",
    "dper": 85.2,
    "airport": "PADUCAH KY (PAH)",
    "aop": 61,
    "lat": 37.0612537,
    "dop": 61,
    "lng": -88.7674445
  },
  {
    "aper": 63.6,
    "code": "PPG",
    "dper": 72.7,
    "airport": "PAGO PAGO TT (PPG)",
    "aop": 11,
    "lat": -14.279444,
    "dop": 11,
    "lng": -170.700556
  },
  {
    "aper": 66.2,
    "code": "PSP",
    "dper": 70.2,
    "airport": "PALM SPRINGS CA (PSP)",
    "aop": 1064,
    "lat": 33.8303194,
    "dop": 1062,
    "lng": -116.5070468
  },
  {
    "aper": 84.1,
    "code": "ECP",
    "dper": 89.6,
    "airport": "PANAMA CITY FL (ECP)",
    "aop": 239,
    "lat": 30.3529337,
    "dop": 241,
    "lng": -85.7942695
  },
  {
    "aper": 68.2,
    "code": "PSC",
    "dper": 87.2,
    "airport": "PASCO\/KENNEWICK\/RICHLAND WA (PSC)",
    "aop": 195,
    "lat": 46.2579124,
    "dop": 196,
    "lng": -119.1170487
  },
  {
    "aper": 81.5,
    "code": "PLN",
    "dper": 90.7,
    "airport": "PELLSTON MI (PLN)",
    "aop": 54,
    "lat": 45.5714903,
    "dop": 54,
    "lng": -84.7861834
  },
  {
    "aper": 78.5,
    "code": "PNS",
    "dper": 81.3,
    "airport": "PENSACOLA FL (PNS)",
    "aop": 687,
    "lat": 30.4738158,
    "dop": 686,
    "lng": -87.1867049
  },
  {
    "aper": 71.7,
    "code": "PIA",
    "dper": 78.5,
    "airport": "PEORIA IL (PIA)",
    "aop": 378,
    "lat": 40.664167,
    "dop": 376,
    "lng": -89.693056
  },
  {
    "aper": 80,
    "code": "PSG",
    "dper": 76.7,
    "airport": "PETERSBURG AK (PSG)",
    "aop": 60,
    "lat": 56.8016637,
    "dop": 60,
    "lng": -132.9453985
  },
  {
    "aper": 75.4,
    "code": "PHL",
    "dper": 80.3,
    "airport": "PHILADELPHIA PA (PHL)",
    "aop": 5729,
    "lat": 39.8743959,
    "dop": 5733,
    "lng": -75.2424229
  },
  {
    "aper": 76.9,
    "code": "PHX",
    "dper": 75.5,
    "airport": "PHOENIX AZ (PHX)",
    "aop": 13298,
    "lat": 33.4372686,
    "dop": 13299,
    "lng": -112.0077881
  },
  {
    "aper": 78.6,
    "code": "PIT",
    "dper": 88.1,
    "airport": "PITTSBURGH PA (PIT)",
    "aop": 2174,
    "lat": 40.4957722,
    "dop": 2179,
    "lng": -80.2413113
  },
  {
    "aper": 89.3,
    "code": "PIH",
    "dper": 91.7,
    "airport": "POCATELLO ID (PIH)",
    "aop": 84,
    "lat": 42.909722,
    "dop": 84,
    "lng": -112.595833
  },
  {
    "aper": 92.7,
    "code": "PSE",
    "dper": 96.3,
    "airport": "PONCE PR (PSE)",
    "aop": 82,
    "lat": 18.008306,
    "dop": 82,
    "lng": -66.563028
  },
  {
    "aper": 78.2,
    "code": "PWM",
    "dper": 87.4,
    "airport": "PORTLAND ME (PWM)",
    "aop": 284,
    "lat": 43.6464785,
    "dop": 286,
    "lng": -70.3096974
  },
  {
    "aper": 73.8,
    "code": "PDX",
    "dper": 79.5,
    "airport": "PORTLAND OR (PDX)",
    "aop": 3896,
    "lat": 45.5155,
    "dop": 3899,
    "lng": -122.6789
  },
  {
    "aper": 79.6,
    "code": "PVD",
    "dper": 88.6,
    "airport": "PROVIDENCE RI (PVD)",
    "aop": 1022,
    "lat": 41.8292199,
    "dop": 1023,
    "lng": -71.413331
  },
  {
    "aper": 61.1,
    "code": "PUB",
    "dper": 63,
    "airport": "PUEBLO CO (PUB)",
    "aop": 54,
    "lat": 38.2837522,
    "dop": 54,
    "lng": -104.4953667
  },
  {
    "aper": 79.7,
    "code": "RDU",
    "dper": 82.9,
    "airport": "RALEIGH\/DURHAM NC (RDU)",
    "aop": 2996,
    "lat": 35.8707528,
    "dop": 2994,
    "lng": -78.7980771
  },
  {
    "aper": 69.7,
    "code": "RAP",
    "dper": 76.6,
    "airport": "RAPID CITY SD (RAP)",
    "aop": 261,
    "lat": 44.0383522,
    "dop": 261,
    "lng": -103.0606677
  },
  {
    "aper": 31.5,
    "code": "RDD",
    "dper": 42.4,
    "airport": "REDDING CA (RDD)",
    "aop": 92,
    "lat": 40.5117182,
    "dop": 92,
    "lng": -122.2986385
  },
  {
    "aper": 64.7,
    "code": "RNO",
    "dper": 69.1,
    "airport": "RENO NV (RNO)",
    "aop": 1172,
    "lat": 39.5058269,
    "dop": 1172,
    "lng": -119.7753869
  },
  {
    "aper": 77.5,
    "code": "RHI",
    "dper": 78.7,
    "airport": "RHINELANDER WI (RHI)",
    "aop": 89,
    "lat": 45.631111,
    "dop": 89,
    "lng": -89.467222
  },
  {
    "aper": 77.9,
    "code": "RIC",
    "dper": 84.1,
    "airport": "RICHMOND VA (RIC)",
    "aop": 1420,
    "lat": 37.5065795,
    "dop": 1418,
    "lng": -77.3208112
  },
  {
    "aper": 78.7,
    "code": "ROA",
    "dper": 80.9,
    "airport": "ROANOKE VA (ROA)",
    "aop": 141,
    "lat": 37.3247628,
    "dop": 141,
    "lng": -79.9770414
  },
  {
    "aper": 73.7,
    "code": "RST",
    "dper": 76,
    "airport": "ROCHESTER MN (RST)",
    "aop": 175,
    "lat": 43.9112289,
    "dop": 175,
    "lng": -92.4954708
  },
  {
    "aper": 75.7,
    "code": "ROC",
    "dper": 82.5,
    "airport": "ROCHESTER NY (ROC)",
    "aop": 659,
    "lat": 43.1225229,
    "dop": 656,
    "lng": -77.6665722
  },
  {
    "aper": 70.6,
    "code": "RKS",
    "dper": 73.9,
    "airport": "ROCK SPRINGS WY (RKS)",
    "aop": 119,
    "lat": 41.5948268,
    "dop": 119,
    "lng": -109.0650322
  },
  {
    "aper": 44.4,
    "code": "ROW",
    "dper": 64.4,
    "airport": "ROSWELL NM (ROW)",
    "aop": 90,
    "lat": 33.2993413,
    "dop": 90,
    "lng": -104.5247463
  },
  {
    "aper": 66.4,
    "code": "SMF",
    "dper": 70.6,
    "airport": "SACRAMENTO CA (SMF)",
    "aop": 3408,
    "lat": 38.6950854,
    "dop": 3411,
    "lng": -121.5900648
  },
  {
    "aper": 78.6,
    "code": "MBS",
    "dper": 88.3,
    "airport": "SAGINAW\/BAY CITY\/MIDLAND MI (MBS)",
    "aop": 145,
    "lat": 43.5336799,
    "dop": 145,
    "lng": -84.0900759
  },
  {
    "aper": 81.3,
    "code": "SLC",
    "dper": 82.4,
    "airport": "SALT LAKE CITY UT (SLC)",
    "aop": 8825,
    "lat": 40.7607793,
    "dop": 8820,
    "lng": -111.8910474
  },
  {
    "aper": 55.3,
    "code": "SJT",
    "dper": 54.6,
    "airport": "SAN ANGELO TX (SJT)",
    "aop": 152,
    "lat": 31.3575,
    "dop": 152,
    "lng": -100.496111
  },
  {
    "aper": 68.1,
    "code": "SAT",
    "dper": 75.3,
    "airport": "SAN ANTONIO TX (SAT)",
    "aop": 2805,
    "lat": 29.5311973,
    "dop": 2806,
    "lng": -98.4683484
  },
  {
    "aper": 70.8,
    "code": "SAN",
    "dper": 70.8,
    "airport": "SAN DIEGO CA (SAN)",
    "aop": 6339,
    "lat": 32.7338006,
    "dop": 6333,
    "lng": -117.1933038
  },
  {
    "aper": 52,
    "code": "SFO",
    "dper": 59.5,
    "airport": "SAN FRANCISCO CA (SFO)",
    "aop": 13827,
    "lat": 37.6213129,
    "dop": 13816,
    "lng": -122.3789554
  },
  {
    "aper": 67.6,
    "code": "SJC",
    "dper": 68.6,
    "airport": "SAN JOSE CA (SJC)",
    "aop": 3430,
    "lat": 37.3639472,
    "dop": 3433,
    "lng": -121.9289375
  },
  {
    "aper": 80.5,
    "code": "SJU",
    "dper": 82.6,
    "airport": "SAN JUAN PR (SJU)",
    "aop": 2405,
    "lat": 18.439167,
    "dop": 2397,
    "lng": -66.001667
  },
  {
    "aper": 58,
    "code": "SBP",
    "dper": 58.3,
    "airport": "SAN LUIS OBISPO CA (SBP)",
    "aop": 412,
    "lat": 35.2827524,
    "dop": 412,
    "lng": -120.6596156
  },
  {
    "aper": 73.4,
    "code": "SNA",
    "dper": 72,
    "airport": "SANTA ANA CA (SNA)",
    "aop": 3257,
    "lat": 33.6761901,
    "dop": 3258,
    "lng": -117.8674759
  },
  {
    "aper": 61.7,
    "code": "SBA",
    "dper": 65.7,
    "airport": "SANTA BARBARA CA (SBA)",
    "aop": 627,
    "lat": 34.4271935,
    "dop": 626,
    "lng": -119.8398835
  },
  {
    "aper": 55.6,
    "code": "SAF",
    "dper": 64.3,
    "airport": "SANTA FE NM (SAF)",
    "aop": 144,
    "lat": 35.6175,
    "dop": 143,
    "lng": -106.08833
  },
  {
    "aper": 65.8,
    "code": "SMX",
    "dper": 65.8,
    "airport": "SANTA MARIA CA (SMX)",
    "aop": 76,
    "lat": 34.8989551,
    "dop": 76,
    "lng": -120.4477715
  },
  {
    "aper": 88.7,
    "code": "SRQ",
    "dper": 85.6,
    "airport": "SARASOTA\/BRADENTON FL (SRQ)",
    "aop": 326,
    "lat": 27.395444,
    "dop": 327,
    "lng": -82.554389
  },
  {
    "aper": 70.7,
    "code": "CIU",
    "dper": 75.9,
    "airport": "SAULT STE. MARIE MI (CIU)",
    "aop": 58,
    "lat": 46.4952996,
    "dop": 58,
    "lng": -84.3453169
  },
  {
    "aper": 81.2,
    "code": "SAV",
    "dper": 81.9,
    "airport": "SAVANNAH GA (SAV)",
    "aop": 759,
    "lat": 32.1294267,
    "dop": 759,
    "lng": -81.2018521
  },
  {
    "aper": 75.2,
    "code": "AVP",
    "dper": 84.2,
    "airport": "SCRANTON\/WILKES-BARRE PA (AVP)",
    "aop": 113,
    "lat": 41.408969,
    "dop": 114,
    "lng": -75.6624122
  },
  {
    "aper": 78.2,
    "code": "SEA",
    "dper": 79.9,
    "airport": "SEATTLE WA (SEA)",
    "aop": 8991,
    "lat": 47.4502499,
    "dop": 8985,
    "lng": -122.3088165
  },
  {
    "aper": 64.1,
    "code": "SHV",
    "dper": 74.5,
    "airport": "SHREVEPORT LA (SHV)",
    "aop": 568,
    "lat": 32.4545459,
    "dop": 568,
    "lng": -93.8284963
  },
  {
    "aper": 75,
    "code": "SUX",
    "dper": 78.3,
    "airport": "SIOUX CITY IA (SUX)",
    "aop": 60,
    "lat": 42.4025,
    "dop": 60,
    "lng": -96.384167
  },
  {
    "aper": 62.8,
    "code": "FSD",
    "dper": 74.2,
    "airport": "SIOUX FALLS SD (FSD)",
    "aop": 549,
    "lat": 43.5856538,
    "dop": 551,
    "lng": -96.7404041
  },
  {
    "aper": 74.7,
    "code": "SIT",
    "dper": 84.8,
    "airport": "SITKA AK (SIT)",
    "aop": 91,
    "lat": 57.0530556,
    "dop": 92,
    "lng": -135.33
  },
  {
    "aper": 78.8,
    "code": "SBN",
    "dper": 85.8,
    "airport": "SOUTH BEND IN (SBN)",
    "aop": 372,
    "lat": 41.7008365,
    "dop": 372,
    "lng": -86.3123004
  },
  {
    "aper": 76,
    "code": "GEG",
    "dper": 82.2,
    "airport": "SPOKANE WA (GEG)",
    "aop": 847,
    "lat": 47.6217478,
    "dop": 849,
    "lng": -117.534812
  },
  {
    "aper": 66.7,
    "code": "SPI",
    "dper": 75.3,
    "airport": "SPRINGFIELD IL (SPI)",
    "aop": 150,
    "lat": 39.843889,
    "dop": 150,
    "lng": -89.677778
  },
  {
    "aper": 62.1,
    "code": "SGF",
    "dper": 77,
    "airport": "SPRINGFIELD MO (SGF)",
    "aop": 564,
    "lat": 37.2089572,
    "dop": 564,
    "lng": -93.2922989
  },
  {
    "aper": 63,
    "code": "UST",
    "dper": 59.3,
    "airport": "ST. AUGUSTINE FL (UST)",
    "aop": 27,
    "lat": 29.958611,
    "dop": 27,
    "lng": -81.33889
  },
  {
    "aper": 65.6,
    "code": "STC",
    "dper": 75.4,
    "airport": "ST. CLOUD MN (STC)",
    "aop": 61,
    "lat": 45.5579451,
    "dop": 61,
    "lng": -94.1632404
  },
  {
    "aper": 80.6,
    "code": "SGU",
    "dper": 85,
    "airport": "ST. GEORGE UT (SGU)",
    "aop": 139,
    "lat": 37.030793,
    "dop": 140,
    "lng": -113.5089915
  },
  {
    "aper": 76,
    "code": "STL",
    "dper": 75.2,
    "airport": "ST. LOUIS MO (STL)",
    "aop": 4218,
    "lat": 38.7368862,
    "dop": 4216,
    "lng": -90.3547796
  },
  {
    "aper": 77,
    "code": "SCE",
    "dper": 86.3,
    "airport": "STATE COLLEGE PA (SCE)",
    "aop": 74,
    "lat": 40.8558806,
    "dop": 73,
    "lng": -77.8438406
  },
  {
    "aper": 51.6,
    "code": "SUN",
    "dper": 54.3,
    "airport": "SUN VALLEY\/HAILEY\/KETCHUM ID (SUN)",
    "aop": 95,
    "lat": 43.6660517,
    "dop": 94,
    "lng": -114.3257529
  },
  {
    "aper": 78.8,
    "code": "SYR",
    "dper": 83.8,
    "airport": "SYRACUSE NY (SYR)",
    "aop": 472,
    "lat": 43.1139301,
    "dop": 474,
    "lng": -76.1101888
  },
  {
    "aper": 75.6,
    "code": "TLH",
    "dper": 84.3,
    "airport": "TALLAHASSEE FL (TLH)",
    "aop": 360,
    "lat": 30.3956195,
    "dop": 360,
    "lng": -84.3450619
  },
  {
    "aper": 79.5,
    "code": "TPA",
    "dper": 81.6,
    "airport": "TAMPA FL (TPA)",
    "aop": 5776,
    "lat": 27.9834776,
    "dop": 5776,
    "lng": -82.5370781
  },
  {
    "aper": 48.9,
    "code": "TXK",
    "dper": 66.7,
    "airport": "TEXARKANA AR (TXK)",
    "aop": 90,
    "lat": 33.4563112,
    "dop": 90,
    "lng": -93.991663
  },
  {
    "aper": 75,
    "code": "TOL",
    "dper": 84.1,
    "airport": "TOLEDO OH (TOL)",
    "aop": 88,
    "lat": 41.638345,
    "dop": 88,
    "lng": -83.541721
  },
  {
    "aper": 77.6,
    "code": "TVC",
    "dper": 84.2,
    "airport": "TRAVERSE CITY MI (TVC)",
    "aop": 214,
    "lat": 44.7368927,
    "dop": 214,
    "lng": -85.5795874
  },
  {
    "aper": 71.3,
    "code": "TTN",
    "dper": 78.1,
    "airport": "TRENTON NJ (TTN)",
    "aop": 279,
    "lat": 40.2170534,
    "dop": 279,
    "lng": -74.7429384
  },
  {
    "aper": 65.4,
    "code": "TUS",
    "dper": 75.9,
    "airport": "TUCSON AZ (TUS)",
    "aop": 1460,
    "lat": 32.1145102,
    "dop": 1460,
    "lng": -110.9392269
  },
  {
    "aper": 70.5,
    "code": "TUL",
    "dper": 79.9,
    "airport": "TULSA OK (TUL)",
    "aop": 1334,
    "lat": 36.198778,
    "dop": 1334,
    "lng": -95.8838659
  },
  {
    "aper": 73.3,
    "code": "TWF",
    "dper": 90,
    "airport": "TWIN FALLS ID (TWF)",
    "aop": 60,
    "lat": 42.4819682,
    "dop": 60,
    "lng": -114.4860478
  },
  {
    "aper": 65.4,
    "code": "TYR",
    "dper": 67.3,
    "airport": "TYLER TX (TYR)",
    "aop": 208,
    "lat": 32.3512601,
    "dop": 208,
    "lng": -95.3010624
  },
  {
    "aper": 80.5,
    "code": "VLD",
    "dper": 85.1,
    "airport": "VALDOSTA GA (VLD)",
    "aop": 87,
    "lat": 30.7850344,
    "dop": 87,
    "lng": -83.2765101
  },
  {
    "aper": 75.5,
    "code": "VPS",
    "dper": 80.1,
    "airport": "VALPARAISO FL (VPS)",
    "aop": 413,
    "lat": 30.491389,
    "dop": 413,
    "lng": -86.525278
  },
  {
    "aper": 85.2,
    "code": "VEL",
    "dper": 92.6,
    "airport": "VERNAL UT (VEL)",
    "aop": 54,
    "lat": 40.4408284,
    "dop": 54,
    "lng": -109.5101731
  },
  {
    "aper": 56.9,
    "code": "ACT",
    "dper": 64.1,
    "airport": "WACO TX (ACT)",
    "aop": 153,
    "lat": 31.609182,
    "dop": 153,
    "lng": -97.223398
  },
  {
    "aper": 65,
    "code": "ALO",
    "dper": 81.7,
    "airport": "WATERLOO IA (ALO)",
    "aop": 60,
    "lat": 42.556944,
    "dop": 60,
    "lng": -92.400278
  },
  {
    "aper": 78.4,
    "code": "PBI",
    "dper": 78.3,
    "airport": "WEST PALM BEACH\/PALM BEACH FL (PBI)",
    "aop": 2327,
    "lat": 26.6857475,
    "dop": 2327,
    "lng": -80.0928165
  },
  {
    "aper": 79.7,
    "code": "HPN",
    "dper": 85,
    "airport": "WHITE PLAINS NY (HPN)",
    "aop": 698,
    "lat": 41.0683325,
    "dop": 698,
    "lng": -73.7086641
  },
  {
    "aper": 56.5,
    "code": "SPS",
    "dper": 64.5,
    "airport": "WICHITA FALLS TX (SPS)",
    "aop": 124,
    "lat": 33.988796,
    "dop": 124,
    "lng": -98.491893
  },
  {
    "aper": 70.1,
    "code": "ICT",
    "dper": 74.8,
    "airport": "WICHITA KS (ICT)",
    "aop": 715,
    "lat": 37.6508529,
    "dop": 715,
    "lng": -97.4286988
  },
  {
    "aper": 74.5,
    "code": "ISN",
    "dper": 78,
    "airport": "WILLISTON ND (ISN)",
    "aop": 259,
    "lat": 48.1469683,
    "dop": 259,
    "lng": -103.6179745
  },
  {
    "aper": 76.2,
    "code": "ILG",
    "dper": 76.2,
    "airport": "WILMINGTON DE (ILG)",
    "aop": 21,
    "lat": 39.6776095,
    "dop": 21,
    "lng": -75.6070215
  },
  {
    "aper": 83.6,
    "code": "ILM",
    "dper": 86.4,
    "airport": "WILMINGTON NC (ILM)",
    "aop": 152,
    "lat": 34.2668021,
    "dop": 152,
    "lng": -77.9103708
  },
  {
    "aper": 82.3,
    "code": "ORH",
    "dper": 79,
    "airport": "WORCESTER MA (ORH)",
    "aop": 62,
    "lat": 42.2735301,
    "dop": 62,
    "lng": -71.8749833
  },
  {
    "aper": 78.3,
    "code": "WRG",
    "dper": 81.7,
    "airport": "WRANGELL AK (WRG)",
    "aop": 60,
    "lat": 56.4851458,
    "dop": 60,
    "lng": -132.3796664
  },
  {
    "aper": 80,
    "code": "YAK",
    "dper": 80,
    "airport": "YAKUTAT AK (YAK)",
    "aop": 60,
    "lat": 59.509167,
    "dop": 60,
    "lng": -139.65973
  },
  {
    "aper": 85.1,
    "code": "YUM",
    "dper": 89.6,
    "airport": "YUMA AZ (YUM)",
    "aop": 181,
    "lat": 32.6926512,
    "dop": 181,
    "lng": -114.6276916
  }
];