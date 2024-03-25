// This data is not 100% as it contains launches (success/failure) and flyby's
// ISS data contains uncrewed + crewed flights
const DATA_MISSIONS_AS_OBJECT_OBJECT = {
  "1958": {
    "moon": 7
  },
  "1959": {
    "moon": 6
  },
  "1960": {
    "mars": 2,
    "moon": 4
  },
  "1961": {
    "venus": 2
  },
  "1962": {
    "mars": 3,
    "moon": 3,
    "venus": 5
  },
  "1963": {
    "moon": 3
  },
  "1964": {
    "mars": 3,
    "moon": 4,
    "venus": 3
  },
  "1965": {
    "moon": 9,
    "venus": 3
  },
  "1966": {
    "moon": 11,
  },
  "1967": {
    "moon": 10,
    "venus": 3
  },
  "1968": {
    "moon": 7,
  },
  "1969": {
    "mars": 4,
    "moon": 12,
    "venus": 2
  },
  "1970": {
    "moon": 5,
    "venus": 2
  },
  "1971": {
    "mars": 5,
    "moon": 4
  },
  "1972": {
    "jupiter": 1,
    "moon": 4,
    "venus": 2
  },
  "1973": {
    "jupiter": 1,
    "mars": 4,
    "mercury": 1,
    "moon": 3,
    "saturn": 1,
    "venus": 1
  },
  "1974": {
    "moon": 1
  },
  "1975": {
    "mars": 2,
    "moon": 1,
    "venus": 2
  },
  "1976": {
    "moon": 1
  },
  "1977": {
    "jupiter": 2,
    "neptune": 1,
    "saturn": 2,
    "uranus": 1
  },
  "1978": {
    "moon": 1,
    "venus": 4
  },
  "1981": {
    "venus": 2
  },
  "1983": {
    "venus": 2
  },
  "1984": {
    "venus": 2
  },
  "1988": {
    "mars": 2
  },
  "1989": {
    "jupiter": 1,
    "venus": 2
  },
  "1990": {
    "jupiter": 1,
    "moon": 1
  },
  "1992": {
    "mars": 2,
    "moon": 1,
  },
  "1994": {
    "moon": 2
  },
  "1996": {
    "mars": 3
  },
  "1997": {
    "jupiter": 1,
    "moon": 1,
    "saturn": 2,
    "venus": 1
  },
  "1998": {
    "iss": 2,
    "mars": 2,
    "moon": 2,
  },
  "1999": {
    "iss": 1,
    "mars": 1
  },
  "2000": {
    "iss": 8
  },
  "2001": {
    "iss": 12,
    "mars": 1,
    "moon": 1,
  },
  "2002": {
    "iss": 9
  },
  "2003": {
    "iss": 5,
    "mars": 3,
    "moon": 1,
  },
  "2004": {
    "iss": 6,
    "mars": 1,
    "mercury": 1,
    "venus": 1
  },
  "2006": {
    "jupiter": 1,
    "moon": 1,
  },
  "2005": {
    "iss": 7,
    "mars": 1,
    "venus": 1
  },
  "2006": {
    "iss": 8,
    "pluto": 1
  },
  "2007": {
    "iss": 8,
    "mars": 2,
    "moon": 3,
  },
  "2008": {
    "iss": 11,
    "moon": 1
  },
  "2009": {
    "iss": 14,
    "moon": 1
  },
  "2010": {
    "iss": 12,
    "moon": 1,
    "venus": 1
  },
  "2011": {
    "iss": 14,
    "jupiter": 1,
    "mars": 2,
    "moon": 1,
  },
  "2012": {
    "iss": 12
  },
  "2013": {
    "iss": 12,
    "mars": 2,
    "moon": 2,
  },
  "2014": {
    "iss": 14,
    "moon": 1
  },
  "2015": {
    "iss": 14
  },
  "2016": {
    "iss": 12,
    "mars": 1
  },
  "2017": {
    "iss": 13
  },
  "2018": {
    "iss": 12,
    "mars": 1,
    "mercury": 1,
    "moon": 3,
    "venus": 2
  },
  "2019": {
    "iss": 15,
    "moon": 2
  },
  "2020": {
    "iss": 11,
    "mars": 3,
    "moon": 1,
    "venus": 1
  },
  "2021": {
    "iss": 15
  },
  "2022": {
    "iss": 13,
    "moon": 4
  },
  "2023": {
    "iss": 12,
    "jupiter": 1,
    "mars": 1,
    "moon": 4
  },
  "2024": {
    "iss": 4,
    "moon": 4
  }
}

// UPDATED
const DATA_YEAR_AS_OBJECT = {
  "1957": 2,
  "1958": 27,
  "1959": 23,
  "1960": 35,
  "1961": 49,
  "1962": 72,
  "1963": 75,
  "1964": 97,
  "1965": 125,
  "1966": 131,
  "1967": 138,
  "1968": 129,
  "1969": 129,
  "1970": 118,
  "1971": 133,
  "1972": 124,
  "1973": 108,
  "1974": 118,
  "1975": 135,
  "1976": 139,
  "1977": 131,
  "1978": 128,
  "1979": 109,
  "1980": 108,
  "1981": 127,
  "1982": 127,
  "1983": 130,
  "1984": 128,
  "1985": 121,
  "1986": 111,
  "1987": 108,
  "1988": 123,
  "1989": 102,
  "1990": 118,
  "1991": 96,
  "1992": 89,
  "1993": 95,
  "1994": 88,
  "1995": 81,
  "1996": 76,
  "1997": 90,
  "1998": 81,
  "1999": 80,
  "2000": 86,
  "2001": 59,
  "2002": 66,
  "2003": 64,
  "2004": 51,
  "2005": 61,
  "2006": 62,
  "2007": 68,
  "2008": 70,
  "2009": 77,
  "2010": 72,
  "2011": 82,
  "2012": 79,
  "2013": 82,
  "2014": 90,
  "2015": 89,
  "2016": 84,
  "2017": 93,
  "2018": 111,
  "2019": 108,
  "2020": 111,
  "2021": 146,
  "2022": 180,
  "2023": 228,
  "2024": 67
}

// UPDATED
const DATA_LV_AS_OBJECT = {
  "Sputnik 8K71PS": 2,
  "Vanguard": 11,
  "Jupiter C": 6,
  "Sputnik 8A91": 2,
  "NOTS EV1": 6,
  "Thor Able I": 3,
  "Vostok-L 8K72": 9,
  "Juno II": 10,
  "Atlas B": 1,
  "Thor Agena A": 15,
  "Thor Able III": 1,
  "Thor Able II": 2,
  "Atlas Able": 3,
  "Atlas Agena A": 4,
  "Thor Able IV": 1,
  "Thor Ablestar": 19,
  "Thor Delta": 12,
  "Vostok 8K72": 17,
  "Molniya 8K78": 40,
  "Thor Agena B": 40,
  "Scout X-1": 4,
  "Atlas D": 14,
  "Atlas Agena B": 28,
  "Kosmos 63S1": 38,
  "Blue Scout II": 1,
  "Scout X-2": 1,
  "Scout X-2M": 3,
  "Vostok 8A92": 44,
  "Thor Agena D": 13,
  "Thor Delta A": 2,
  "Thor Delta B": 9,
  "Scout X-3": 5,
  "Scout X-3M": 1,
  "Thor SLV-2A Agena D": 61,
  "Scout X-4": 12,
  "Thor SLV-2A Agena B": 2,
  "Atlas Agena D": 15,
  "Thor SLV-2 Agena D": 8,
  "Scout X-2B": 1,
  "Polyot 11A59": 2,
  "Voskhod 11A57": 299,
  "Thor Delta C": 10,
  "Atlas Centaur": 4,
  "Thor SLV-2 Agena B": 3,
  "Saturn I": 6,
  "Titan II GLV": 11,
  "Atlas SLV-3 Agena D": 48,
  "Kosmos 65S3": 8,
  "Thor Delta D": 2,
  "Vostok 8A92M": 93,
  "Titan IIIA": 4,
  "Thor MG-18": 2,
  "Thor Burner 1": 4,
  "Titan IIIC": 36,
  "UR-500": 4,
  "Scout B": 20,
  "Atlas Centaur D": 7,
  "Molniya 8K78M": 272,
  "Kosmos 11K63": 126,
  "Thor Delta E": 6,
  "Diamant A": 4,
  "Scout A": 11,
  "Vostok-2A 11A510": 2,
  "Thor Delta C1": 3,
  "Atlas SLV-3": 1,
  "Atlas SLV-3 Agena B": 1,
  "Thor Delta E1": 17,
  "Uprated Saturn I": 1,
  "Titan IIIB": 22,
  "Thorad SLV-2G Agena D": 30,
  "Thor Burner 2": 12,
  "R-36O 8K69": 16,
  "Lambda 4S": 5,
  "Kosmos 11K65": 4,
  "Soyuz 11A511": 32,
  "Thor Delta G": 2,
  "UR-500K/Blok D": 1,
  "Proton-K/D": 37,
  "Kosmos 11K65M": 445,
  "Atlas SLV-3C Centaur": 17,
  "Tsiklon-2A": 8,
  "Saturn V": 13,
  "SPARTA": 1,
  "Saturn IB": 6,
  "Atlas SLV-3A Agena D": 12,
  "Atlas F": 9,
  "Thor Delta J": 1,
  "Thor Delta N": 6,
  "Atlas Burner 2": 2,
  "Thor Delta M": 12,
  "Proton-K": 29,
  "Europa I": 3,
  "N-1 11A52": 4,
  "Thorad SLV-2H Agena D": 13,
  "LM AS": 6,
  "Tsiklon-2": 105,
  "Titan 23B": 9,
  "Thor Delta L": 2,
  "Thor Delta N6": 3,
  "Diamant B": 5,
  "Chang Zheng 1": 2,
  "Black Arrow": 2,
  "E-8-5 VA": 3,
  "Mu-4S": 4,
  "R-36O 8K69M": 2,
  "Soyuz 11A511L": 3,
  "Thor Delta M6": 1,
  "Titan 33B": 3,
  "Titan IIID": 22,
  "Titan 24B": 23,
  "Scout B-1": 5,
  "Thor Burner 2A": 8,
  "Europa II": 1,
  "Soyuz 11A511M": 8,
  "Delta 0900": 2,
  "Scout D-1": 15,
  "Delta 1604": 2,
  "Delta 0300": 3,
  "Delta 1914": 2,
  "Atlas SLV-3D Centaur": 32,
  "Soyuz-U": 633,
  "Delta 1913": 1,
  "Feng Bao 1": 8,
  "Scout A-1": 1,
  "Delta 1900": 1,
  "Delta 2313": 3,
  "Titan IIIE": 7,
  "Mu-3C": 4,
  "Proton-K/DM": 66,
  "Delta 2914": 30,
  "Scout E-1": 1,
  "Atlas F/PTS": 1,
  "Chang Zheng 2": 1,
  "Delta 2310": 3,
  "Delta 2910": 6,
  "Diamant BP.4": 3,
  "Titan 34B": 11,
  "Delta 1410": 1,
  "Scout F-1": 2,
  "Delta 1910": 1,
  "Delta 2913": 2,
  "N-1": 7,
  "Proton-K/D-1": 12,
  "Chang Zheng 2C": 66,
  "Delta 3914": 12,
  "Atlas F/MSD": 3,
  "Thor DSV-2U": 5,
  "Mu-3H": 3,
  "Atlas F/SVS": 7,
  "Tsiklon-3": 122,
  "Atlas F/Agena D": 1,
  "Atlas F/OIS": 1,
  "SLV-3": 4,
  "Scout G-1": 17,
  "Ariane 1": 11,
  "Delta 3910": 3,
  "Mu-3S": 4,
  "Delta 3910/PAM": 7,
  "Atlas E/MSD": 1,
  "N-2": 8,
  "Space Shuttle": 135,
  "Delta 3913": 1,
  "Atlas E/SVS": 1,
  "K65M-RB": 4,
  "Delta 3920": 3,
  "Delta 3920/PAM": 6,
  "Proton-K/DM-2": 111,
  "Delta 3924": 5,
  "Titan 34D/IUS": 1,
  "Atlas E": 15,
  "Soyuz-U2": 72,
  "Atlas H": 5,
  "Titan 34D": 7,
  "Atlas E/SGS-2": 4,
  "Chang Zheng 3": 13,
  "Titan 34D/Transtage": 7,
  "Soyuz-U-PVB": 154,
  "Atlas G Centaur": 7,
  "Ariane 3": 11,
  "Mu-3S-II": 8,
  "Atlas E/OIS": 1,
  "Zenit-2": 35,
  "Ariane 2": 6,
  "H-1": 9,
  "ASLV": 4,
  "Energiya": 1,
  "Ariane 44LP": 26,
  "Proton-K/D-2": 3,
  "Titan II SLV": 13,
  "Chang Zheng 4": 2,
  "Shavit": 2,
  "Energiya/Buran": 1,
  "Delta 6925": 13,
  "Delta 3920-8": 1,
  "Ariane 44L": 40,
  "Titan 402A/IUS": 3,
  "Delta 4925-8": 2,
  "Delta 5920-8": 1,
  "Commercial Titan 3": 4,
  "Ariane 40": 7,
  "Delta 6920-8": 1,
  "Pegasus": 4,
  "Atlas E Altair": 1,
  "Delta 6925-8": 1,
  "Delta 6920-10": 2,
  "Titan 405A": 2,
  "Chang Zheng 2E": 7,
  "Molniya 8K78M-PVB": 8,
  "Atlas I": 11,
  "Ariane 42P": 15,
  "Delta 7925": 34,
  "Titan 403A": 5,
  "Ariane 44P": 15,
  "Pegasus/HAPS": 2,
  "Atlas II": 10,
  "Atlas IIA": 23,
  "Chang Zheng 2D": 83,
  "Titan 404A": 3,
  "Start-1": 5,
  "Ariane 42L": 13,
  "PSLV": 29,
  "Atlas IIAS": 30,
  "Proton-K/DM-2M": 40,
  "H-II": 7,
  "Titan 401A/Centaur": 9,
  "Chang Zheng 3A": 27,
  "Delta 7925-8": 2,
  "ARPA Taurus": 2,
  "Pegasus XL": 29,
  "Delta 7925-10": 2,
  "Rokot": 32,
  "Start": 1,
  "Pegasus H": 4,
  "Shavit 1": 4,
  "LLV-1": 1,
  "Conestoga 1620": 1,
  "Delta 7920-10": 6,
  "Chang Zheng 3B": 80,
  "Ariane 5G": 16,
  "M-V": 7,
  "Titan 402B/IUS": 5,
  "Start-1.2": 1,
  "Delta 7920-10C": 20,
  "Proton-K/17S40": 6,
  "LMLV-1": 1,
  "Delta 7920-8": 1,
  "Chang Zheng 2C-III/SD": 7,
  "Titan 401B/Centaur": 7,
  "VLS-1": 2,
  "Pegasus XL/HAPS": 6,
  "Athena-2": 3,
  "Delta 7925-9.5": 28,
  "Taurus 2210": 1,
  "Delta 7420-10C": 14,
  "Shtil'-1": 2,
  "Delta 8930": 3,
  "Paektusan 1": 1,
  "Zenit-2 11K77.05": 1,
  "Delta 7326-9.5": 3,
  "Delta 7425-9.5": 3,
  "Athena-1": 2,
  "Delta 7426-9.5": 1,
  "Zenit-3SL": 36,
  "Dnepr": 22,
  "Chang Zheng 4B": 48,
  "Titan 404B": 3,
  "Delta 7320-10": 4,
  "Proton-K/Briz-M": 4,
  "Chang Zheng 2F": 22,
  "Taurus 2110": 2,
  "Minotaur I": 12,
  "Taurus 1110": 1,
  "Atlas 3A": 2,
  "Titan 403B": 1,
  "Proton-M/Briz-M": 101,
  "GSLV Mk I": 6,
  "Soyuz-FG": 70,
  "Delta 7425-10": 1,
  "H-IIA 202": 33,
  "H-IIA 2024": 7,
  "Atlas 3B": 4,
  "Delta 7920-10L": 2,
  "Atlas V 401": 41,
  "KT-1": 3,
  "Delta 4M+(4,2)": 15,
  "Ariane 5ECA": 72,
  "Delta 4M": 3,
  "Delta 7925H": 3,
  "Atlas V 521": 2,
  "Delta 7920H": 3,
  "Strela": 3,
  "Ariane 5G+": 3,
  "Taurus 3210": 1,
  "Soyuz-2-1A": 66,
  "Delta 7320-10C": 8,
  "Delta 4H": 14,
  "H-IIA 2022": 3,
  "Atlas V 431": 3,
  "Titan 405B": 1,
  "Volna": 1,
  "Ariane 5GS": 6,
  "Atlas V 551": 13,
  "Falcon 1": 5,
  "Atlas V 411": 6,
  "Chang Zheng 4C": 53,
  "Delta 7925-10L": 2,
  "H-IIA 204": 5,
  "Soyuz-2-1B": 70,
  "Delta 7925-10C": 1,
  "Shavit 2": 6,
  "Zenit-2M": 1,
  "Atlas V 421": 9,
  "Proton-M/DM-2": 6,
  "Ariane 5ES/ATV": 5,
  "Chang Zheng 3C": 16,
  "Zenit-3SLB": 6,
  "Safir": 8,
  "PSLV-XL": 25,
  "Taurus 3110": 2,
  "Unha-2": 1,
  "Naro-1": 3,
  "H-IIB": 9,
  "Delta 4M+(5,4)": 7,
  "GSLV Mk II": 10,
  "Atlas V 501": 8,
  "Falcon 9": 311,
  "Atlas V 531": 5,
  "Minotaur IV": 4,
  "Proton-M/DM-3": 7,
  "Zenit-3SLBF": 4,
  "Minotaur IV+": 1,
  "Soyuz-ST-B": 18,
  "Zenit-2SB": 1,
  "Atlas V 541": 9,
  "Soyuz-ST-A": 9,
  "Vega": 21,
  "Delta 4M+(5,2)": 4,
  "Unha-3": 2,
  "Antares 110": 2,
  "Minotaur V": 1,
  "Epsilon": 6,
  "Kuaizhou": 2,
  "Soyuz-2-1V": 12,
  "Antares 120": 2,
  "Antares 130": 1,
  "Angara A5": 2,
  "Chang Zheng 3C/YZ-1": 2,
  "Chang Zheng 3B/YZ-1": 14,
  "Chang Zheng 6": 11,
  "Chang Zheng 11": 17,
  "Super Strypi": 1,
  "Kwangmyongsong": 1,
  "Chang Zheng 7/YZ-1A": 1,
  "Antares 230": 5,
  "Chang Zheng 5/YZ-2": 1,
  "Ariane 5ES": 3,
  "Kuaizhou-1A": 26,
  "SS-520": 2,
  "KT-2": 1,
  "Chang Zheng 7": 7,
  "Electron": 45,
  "GSLV Mk III": 2,
  "Chang Zheng 5": 6,
  "Minotaur-C 3210": 1,
  "Falcon Heavy": 9,
  "Delta 4H/Star 48BV": 1,
  "Chang Zheng 2C/YZ-1S": 8,
  "Zhuque-1": 1,
  "Chang Zheng 2D/YZ-3": 3,
  "Simorgh": 5,
  "PSLV-DL": 4,
  "OS-M1": 1,
  "PSLV-QL": 2,
  "LVM3": 4,
  "Shuang Quxian 1": 6,
  "Ariane 5ECA+": 12,
  "Jielong-1": 1,
  "Antares 230+": 8,
  "Atlas V N22": 2,
  "Chang Zheng 7A": 6,
  "Qased": 3,
  "Chang Zheng 5B": 4,
  "LauncherOne": 6,
  "Kuaizhou-11": 2,
  "Astra Rocket 3.1": 1,
  "Gushenxing 1": 11,
  "CE-5 SSQ": 1,
  "Astra Rocket 3.2": 1,
  "Chang Zheng 8": 3,
  "Proton-M": 1,
  "Astra Rocket 3.3": 5,
  "Firefly Alpha": 4,
  "Nuri": 3,
  "Angara A5/Persei": 1,
  "Atlas V 511": 1,
  "Chang Zheng 6A": 4,
  "Angara-1.2": 2,
  "Vega C": 2,
  "Lijian-1": 3,
  "SSLV": 2,
  "SLS Block 1": 1,
  "Jielong-3": 3,
  "Zhuque-2": 3,
  "RS1": 1,
  "Qaem-100": 2,
  "H3-22S": 2,
  "Terran 1": 1,
  "Tianlong 2": 1,
  "Starship V1.0": 3,
  "Cheonlima-1": 3,
  "ADD TV2": 1,
  "Vulcan VC2S": 1,
  "Yinli-1": 1,
  "Kairos": 1
}

// UPDATED
const DATA_RAW_AS_ARRAY_OBJECT = [
  {
    "Year": 1957,
    "LV": "Sputnik 8K71PS"
  },
  {
    "Year": 1957,
    "LV": "Sputnik 8K71PS"
  },
  {
    "Year": 1958,
    "LV": "Vanguard"
  },
  {
    "Year": 1958,
    "LV": "Jupiter C"
  },
  {
    "Year": 1958,
    "LV": "Vanguard"
  },
  {
    "Year": 1958,
    "LV": "Jupiter C"
  },
  {
    "Year": 1958,
    "LV": "Vanguard"
  },
  {
    "Year": 1958,
    "LV": "Jupiter C"
  },
  {
    "Year": 1958,
    "LV": "Sputnik 8A91"
  },
  {
    "Year": 1958,
    "LV": "Vanguard"
  },
  {
    "Year": 1958,
    "LV": "Sputnik 8A91"
  },
  {
    "Year": 1958,
    "LV": "Vanguard"
  },
  {
    "Year": 1958,
    "LV": "Vanguard"
  },
  {
    "Year": 1958,
    "LV": "NOTS EV1"
  },
  {
    "Year": 1958,
    "LV": "Jupiter C"
  },
  {
    "Year": 1958,
    "LV": "NOTS EV1"
  },
  {
    "Year": 1958,
    "LV": "Thor Able I"
  },
  {
    "Year": 1958,
    "LV": "NOTS EV1"
  },
  {
    "Year": 1958,
    "LV": "Jupiter C"
  },
  {
    "Year": 1958,
    "LV": "NOTS EV1"
  },
  {
    "Year": 1958,
    "LV": "NOTS EV1"
  },
  {
    "Year": 1958,
    "LV": "NOTS EV1"
  },
  {
    "Year": 1958,
    "LV": "Vostok-L 8K72"
  },
  {
    "Year": 1958,
    "LV": "Vanguard"
  },
  {
    "Year": 1958,
    "LV": "Thor Able I"
  },
  {
    "Year": 1959,
    "LV": "Vostok-L 8K72"
  },
  {
    "Year": 1958,
    "LV": "Jupiter C"
  },
  {
    "Year": 1958,
    "LV": "Thor Able I"
  },
  {
    "Year": 1959,
    "LV": "Vostok-L 8K72"
  },
  {
    "Year": 1958,
    "LV": "Juno II"
  },
  {
    "Year": 1958,
    "LV": "Atlas B"
  },
  {
    "Year": 1959,
    "LV": "Vostok-L 8K72"
  },
  {
    "Year": 1959,
    "LV": "Vanguard"
  },
  {
    "Year": 1959,
    "LV": "Thor Agena A"
  },
  {
    "Year": 1959,
    "LV": "Juno II"
  },
  {
    "Year": 1959,
    "LV": "Thor Agena A"
  },
  {
    "Year": 1959,
    "LV": "Vanguard"
  },
  {
    "Year": 1959,
    "LV": "Thor Agena A"
  },
  {
    "Year": 1959,
    "LV": "Vostok-L 8K72"
  },
  {
    "Year": 1959,
    "LV": "Vanguard"
  },
  {
    "Year": 1959,
    "LV": "Thor Agena A"
  },
  {
    "Year": 1959,
    "LV": "Juno II"
  },
  {
    "Year": 1959,
    "LV": "Thor Able III"
  },
  {
    "Year": 1959,
    "LV": "Thor Agena A"
  },
  {
    "Year": 1959,
    "LV": "Juno II"
  },
  {
    "Year": 1959,
    "LV": "Thor Agena A"
  },
  {
    "Year": 1959,
    "LV": "Vostok-L 8K72"
  },
  {
    "Year": 1959,
    "LV": "Thor Able II"
  },
  {
    "Year": 1959,
    "LV": "Vanguard"
  },
  {
    "Year": 1959,
    "LV": "Vostok-L 8K72"
  },
  {
    "Year": 1959,
    "LV": "Juno II"
  },
  {
    "Year": 1960,
    "LV": "Thor Agena A"
  },
  {
    "Year": 1960,
    "LV": "Thor Agena A"
  },
  {
    "Year": 1959,
    "LV": "Atlas Able"
  },
  {
    "Year": 1960,
    "LV": "Thor Agena A"
  },
  {
    "Year": 1960,
    "LV": "Thor Agena A"
  },
  {
    "Year": 1960,
    "LV": "Atlas Agena A"
  },
  {
    "Year": 1960,
    "LV": "Thor Able IV"
  },
  {
    "Year": 1960,
    "LV": "Juno II"
  },
  {
    "Year": 1960,
    "LV": "Thor Able II"
  },
  {
    "Year": 1960,
    "LV": "Thor Ablestar"
  },
  {
    "Year": 1960,
    "LV": "Vostok-L 8K72"
  },
  {
    "Year": 1960,
    "LV": "Thor Agena A"
  },
  {
    "Year": 1960,
    "LV": "Vostok-L 8K72"
  },
  {
    "Year": 1960,
    "LV": "Thor Delta"
  },
  {
    "Year": 1960,
    "LV": "Vostok 8K72"
  },
  {
    "Year": 1960,
    "LV": "Atlas Agena A"
  },
  {
    "Year": 1960,
    "LV": "Thor Ablestar"
  },
  {
    "Year": 1960,
    "LV": "Thor Agena A"
  },
  {
    "Year": 1960,
    "LV": "Vostok 8K72"
  },
  {
    "Year": 1960,
    "LV": "Thor Agena A"
  },
  {
    "Year": 1960,
    "LV": "Thor Delta"
  },
  {
    "Year": 1960,
    "LV": "Thor Agena A"
  },
  {
    "Year": 1960,
    "LV": "Thor Ablestar"
  },
  {
    "Year": 1960,
    "LV": "Vostok 8K72"
  },
  {
    "Year": 1960,
    "LV": "Thor Agena A"
  },
  {
    "Year": 1960,
    "LV": "Atlas Able"
  },
  {
    "Year": 1960,
    "LV": "Thor Ablestar"
  },
  {
    "Year": 1960,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1961,
    "LV": "Atlas Agena A"
  },
  {
    "Year": 1960,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1961,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1960,
    "LV": "Juno II"
  },
  {
    "Year": 1961,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1961,
    "LV": "Thor Delta"
  },
  {
    "Year": 1960,
    "LV": "Thor Ablestar"
  },
  {
    "Year": 1960,
    "LV": "Vostok 8K72"
  },
  {
    "Year": 1960,
    "LV": "Scout X-1"
  },
  {
    "Year": 1961,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1960,
    "LV": "Atlas Able"
  },
  {
    "Year": 1960,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1960,
    "LV": "Vostok 8K72"
  },
  {
    "Year": 1961,
    "LV": "Atlas Agena A"
  },
  {
    "Year": 1961,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1961,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1961,
    "LV": "Scout X-1"
  },
  {
    "Year": 1961,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1961,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1961,
    "LV": "Thor Ablestar"
  },
  {
    "Year": 1961,
    "LV": "Juno II"
  },
  {
    "Year": 1961,
    "LV": "Vostok 8K72"
  },
  {
    "Year": 1961,
    "LV": "Vostok 8K72"
  },
  {
    "Year": 1961,
    "LV": "Thor Delta"
  },
  {
    "Year": 1961,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1961,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1961,
    "LV": "Vostok 8K72"
  },
  {
    "Year": 1961,
    "LV": "Atlas D"
  },
  {
    "Year": 1961,
    "LV": "Juno II"
  },
  {
    "Year": 1961,
    "LV": "Juno II"
  },
  {
    "Year": 1961,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1961,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1961,
    "LV": "Thor Ablestar"
  },
  {
    "Year": 1961,
    "LV": "Scout X-1"
  },
  {
    "Year": 1961,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1961,
    "LV": "Thor Delta"
  },
  {
    "Year": 1961,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1961,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1961,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1961,
    "LV": "Vostok 8K72"
  },
  {
    "Year": 1961,
    "LV": "Thor Delta"
  },
  {
    "Year": 1961,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1961,
    "LV": "Scout X-1"
  },
  {
    "Year": 1961,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1961,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1961,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1961,
    "LV": "Atlas D"
  },
  {
    "Year": 1961,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1961,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1961,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1961,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1961,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1961,
    "LV": "Blue Scout II"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1961,
    "LV": "Thor Ablestar"
  },
  {
    "Year": 1961,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1962,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1962,
    "LV": "Atlas D"
  },
  {
    "Year": 1961,
    "LV": "Vostok 8K72"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1961,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1962,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1962,
    "LV": "Thor Ablestar"
  },
  {
    "Year": 1962,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1962,
    "LV": "Thor Delta"
  },
  {
    "Year": 1962,
    "LV": "Atlas D"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1962,
    "LV": "Thor Delta"
  },
  {
    "Year": 1962,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1962,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1962,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1962,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1962,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1962,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1962,
    "LV": "Vostok 8K72"
  },
  {
    "Year": 1962,
    "LV": "Scout X-2"
  },
  {
    "Year": 1962,
    "LV": "Thor Delta"
  },
  {
    "Year": 1962,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1962,
    "LV": "Thor Ablestar"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1962,
    "LV": "Scout X-2M"
  },
  {
    "Year": 1962,
    "LV": "Atlas D"
  },
  {
    "Year": 1962,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1962,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1962,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1962,
    "LV": "Thor Delta"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena D"
  },
  {
    "Year": 1962,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1962,
    "LV": "Thor Delta"
  },
  {
    "Year": 1962,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1962,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1962,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena D"
  },
  {
    "Year": 1962,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1962,
    "LV": "Vostok 8K72"
  },
  {
    "Year": 1962,
    "LV": "Vostok 8K72"
  },
  {
    "Year": 1962,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1962,
    "LV": "Scout X-2M"
  },
  {
    "Year": 1962,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1962,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena D"
  },
  {
    "Year": 1962,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1962,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1962,
    "LV": "Thor Delta"
  },
  {
    "Year": 1962,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1963,
    "LV": "Thor Agena D"
  },
  {
    "Year": 1963,
    "LV": "Thor Delta A"
  },
  {
    "Year": 1962,
    "LV": "Atlas D"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1962,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1962,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1962,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1963,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1962,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1963,
    "LV": "Thor Agena D"
  },
  {
    "Year": 1963,
    "LV": "Thor Delta A"
  },
  {
    "Year": 1962,
    "LV": "Thor Ablestar"
  },
  {
    "Year": 1963,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1963,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1963,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1963,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1963,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1963,
    "LV": "Thor Agena D"
  },
  {
    "Year": 1962,
    "LV": "Thor Agena D"
  },
  {
    "Year": 1963,
    "LV": "Thor Delta B"
  },
  {
    "Year": 1963,
    "LV": "Thor Agena D"
  },
  {
    "Year": 1963,
    "LV": "Scout X-3"
  },
  {
    "Year": 1963,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1962,
    "LV": "Scout X-3"
  },
  {
    "Year": 1962,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1963,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1963,
    "LV": "Thor Agena D"
  },
  {
    "Year": 1963,
    "LV": "Thor Agena B"
  },
  {
    "Year": 1963,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1963,
    "LV": "Thor Delta B"
  },
  {
    "Year": 1963,
    "LV": "Scout X-3M"
  },
  {
    "Year": 1963,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1963,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1963,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1963,
    "LV": "Thor Agena D"
  },
  {
    "Year": 1963,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1963,
    "LV": "Thor Delta B"
  },
  {
    "Year": 1963,
    "LV": "Scout X-3"
  },
  {
    "Year": 1963,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1963,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1963,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1963,
    "LV": "Scout X-2M"
  },
  {
    "Year": 1963,
    "LV": "Thor Agena D"
  },
  {
    "Year": 1963,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1963,
    "LV": "Thor Delta B"
  },
  {
    "Year": 1963,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1963,
    "LV": "Atlas D"
  },
  {
    "Year": 1963,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1963,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1963,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1963,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1963,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1963,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1963,
    "LV": "Vostok 8K72"
  },
  {
    "Year": 1963,
    "LV": "Thor Agena D"
  },
  {
    "Year": 1963,
    "LV": "Scout X-3"
  },
  {
    "Year": 1963,
    "LV": "Vostok 8K72"
  },
  {
    "Year": 1963,
    "LV": "Thor Delta B"
  },
  {
    "Year": 1963,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1963,
    "LV": "Scout X-4"
  },
  {
    "Year": 1963,
    "LV": "Thor SLV-2A Agena B"
  },
  {
    "Year": 1963,
    "LV": "Atlas Agena D"
  },
  {
    "Year": 1963,
    "LV": "Thor Agena D"
  },
  {
    "Year": 1963,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1963,
    "LV": "Thor Delta B"
  },
  {
    "Year": 1963,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1963,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1963,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1963,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1963,
    "LV": "Thor SLV-2 Agena D"
  },
  {
    "Year": 1963,
    "LV": "Atlas Agena D"
  },
  {
    "Year": 1963,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1963,
    "LV": "Scout X-2B"
  },
  {
    "Year": 1963,
    "LV": "Thor Ablestar"
  },
  {
    "Year": 1963,
    "LV": "Atlas Agena D"
  },
  {
    "Year": 1963,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1963,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1964,
    "LV": "Atlas Agena D"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1963,
    "LV": "Polyot 11A59"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2 Agena D"
  },
  {
    "Year": 1963,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1963,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1963,
    "LV": "Thor Delta C"
  },
  {
    "Year": 1964,
    "LV": "Atlas Centaur"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2 Agena D"
  },
  {
    "Year": 1963,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1963,
    "LV": "Thor Ablestar"
  },
  {
    "Year": 1964,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1964,
    "LV": "Atlas Agena D"
  },
  {
    "Year": 1963,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1964,
    "LV": "Scout X-4"
  },
  {
    "Year": 1963,
    "LV": "Thor Delta B"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2 Agena D"
  },
  {
    "Year": 1964,
    "LV": "Thor Delta B"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2 Agena B"
  },
  {
    "Year": 1964,
    "LV": "Saturn I"
  },
  {
    "Year": 1964,
    "LV": "Vostok 8K72"
  },
  {
    "Year": 1964,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1964,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1964,
    "LV": "Atlas Agena D"
  },
  {
    "Year": 1964,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1964,
    "LV": "Atlas Agena D"
  },
  {
    "Year": 1964,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1964,
    "LV": "Thor Delta B"
  },
  {
    "Year": 1964,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1964,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1964,
    "LV": "Scout X-3"
  },
  {
    "Year": 1964,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1964,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1964,
    "LV": "Titan II GLV"
  },
  {
    "Year": 1964,
    "LV": "Polyot 11A59"
  },
  {
    "Year": 1964,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1964,
    "LV": "Thor Ablestar"
  },
  {
    "Year": 1964,
    "LV": "Atlas Agena D"
  },
  {
    "Year": 1964,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1964,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1964,
    "LV": "Atlas Agena D"
  },
  {
    "Year": 1964,
    "LV": "Saturn I"
  },
  {
    "Year": 1964,
    "LV": "Scout X-4"
  },
  {
    "Year": 1964,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1964,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1964,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2 Agena D"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1964,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1964,
    "LV": "Scout X-4"
  },
  {
    "Year": 1964,
    "LV": "Atlas Centaur"
  },
  {
    "Year": 1964,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1964,
    "LV": "Atlas Agena D"
  },
  {
    "Year": 1964,
    "LV": "Vostok 8K72"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1964,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1964,
    "LV": "Atlas Agena D"
  },
  {
    "Year": 1964,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1964,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1964,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1964,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1964,
    "LV": "Kosmos 65S3"
  },
  {
    "Year": 1964,
    "LV": "Thor Delta D"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1964,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1964,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1964,
    "LV": "Scout X-4"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2 Agena B"
  },
  {
    "Year": 1964,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1964,
    "LV": "Titan IIIA"
  },
  {
    "Year": 1964,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1964,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1964,
    "LV": "Saturn I"
  },
  {
    "Year": 1964,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1964,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1964,
    "LV": "Thor Delta C"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1964,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1964,
    "LV": "Thor Ablestar"
  },
  {
    "Year": 1964,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1964,
    "LV": "Scout X-4"
  },
  {
    "Year": 1964,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1964,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1964,
    "LV": "Kosmos 65S3"
  },
  {
    "Year": 1964,
    "LV": "Atlas Agena D"
  },
  {
    "Year": 1964,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1964,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1964,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1965,
    "LV": "Atlas Agena D"
  },
  {
    "Year": 1964,
    "LV": "Scout X-4"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1965,
    "LV": "Scout X-4"
  },
  {
    "Year": 1965,
    "LV": "Atlas Agena D"
  },
  {
    "Year": 1964,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1964,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1964,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1964,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1965,
    "LV": "Titan IIIA"
  },
  {
    "Year": 1965,
    "LV": "Atlas Centaur"
  },
  {
    "Year": 1964,
    "LV": "Thor Ablestar"
  },
  {
    "Year": 1965,
    "LV": "Scout X-4"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1964,
    "LV": "Thor Delta C"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1965,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1965,
    "LV": "Thor MG-18"
  },
  {
    "Year": 1965,
    "LV": "Atlas D"
  },
  {
    "Year": 1965,
    "LV": "Thor Delta C"
  },
  {
    "Year": 1965,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1965,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1965,
    "LV": "Thor Delta C"
  },
  {
    "Year": 1965,
    "LV": "Titan IIIA"
  },
  {
    "Year": 1965,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1965,
    "LV": "Saturn I"
  },
  {
    "Year": 1965,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1965,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1965,
    "LV": "Kosmos 65S3"
  },
  {
    "Year": 1965,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1965,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1965,
    "LV": "Atlas Centaur"
  },
  {
    "Year": 1965,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2 Agena D"
  },
  {
    "Year": 1965,
    "LV": "Thor Ablestar"
  },
  {
    "Year": 1965,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1965,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1965,
    "LV": "Kosmos 65S3"
  },
  {
    "Year": 1965,
    "LV": "Thor MG-18"
  },
  {
    "Year": 1965,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1965,
    "LV": "Atlas Agena B"
  },
  {
    "Year": 1965,
    "LV": "Titan II GLV"
  },
  {
    "Year": 1965,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1965,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1965,
    "LV": "Thor Delta D"
  },
  {
    "Year": 1965,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1965,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1965,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1965,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1965,
    "LV": "Scout X-4"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1965,
    "LV": "Titan IIIA"
  },
  {
    "Year": 1965,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1965,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1965,
    "LV": "Thor Burner 1"
  },
  {
    "Year": 1965,
    "LV": "Saturn I"
  },
  {
    "Year": 1965,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1965,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1965,
    "LV": "Atlas D"
  },
  {
    "Year": 1965,
    "LV": "Thor Delta C"
  },
  {
    "Year": 1965,
    "LV": "Titan II GLV"
  },
  {
    "Year": 1965,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1965,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1965,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1965,
    "LV": "Thor Ablestar"
  },
  {
    "Year": 1965,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1965,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1965,
    "LV": "Thor Delta C"
  },
  {
    "Year": 1965,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1965,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1965,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1965,
    "LV": "Kosmos 65S3"
  },
  {
    "Year": 1965,
    "LV": "UR-500"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1965,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1965,
    "LV": "Atlas Agena D"
  },
  {
    "Year": 1965,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1965,
    "LV": "Saturn I"
  },
  {
    "Year": 1965,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1965,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1965,
    "LV": "Scout B"
  },
  {
    "Year": 1965,
    "LV": "Atlas Centaur D"
  },
  {
    "Year": 1965,
    "LV": "Thor Ablestar"
  },
  {
    "Year": 1965,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1965,
    "LV": "Titan II GLV"
  },
  {
    "Year": 1965,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1965,
    "LV": "Thor Delta C"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2 Agena D"
  },
  {
    "Year": 1965,
    "LV": "Kosmos 65S3"
  },
  {
    "Year": 1965,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1965,
    "LV": "Thor Burner 1"
  },
  {
    "Year": 1965,
    "LV": "Kosmos 65S3"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1965,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1965,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1965,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1965,
    "LV": "Atlas D"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1965,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1965,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1965,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1965,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1965,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1965,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1966,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1965,
    "LV": "UR-500"
  },
  {
    "Year": 1965,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1966,
    "LV": "Thor Delta E"
  },
  {
    "Year": 1965,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1965,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1965,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1965,
    "LV": "Scout X-4"
  },
  {
    "Year": 1965,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1965,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1966,
    "LV": "Diamant A"
  },
  {
    "Year": 1965,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1965,
    "LV": "Thor SLV-2 Agena B"
  },
  {
    "Year": 1966,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1966,
    "LV": "Titan II GLV"
  },
  {
    "Year": 1966,
    "LV": "Scout X-4"
  },
  {
    "Year": 1966,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1965,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1966,
    "LV": "Titan II GLV"
  },
  {
    "Year": 1965,
    "LV": "Thor Delta E"
  },
  {
    "Year": 1965,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1965,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1966,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1965,
    "LV": "Scout A"
  },
  {
    "Year": 1966,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1966,
    "LV": "Vostok-2A 11A510"
  },
  {
    "Year": 1965,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1965,
    "LV": "Kosmos 65S3"
  },
  {
    "Year": 1966,
    "LV": "Thor Burner 1"
  },
  {
    "Year": 1966,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1966,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1966,
    "LV": "Scout A"
  },
  {
    "Year": 1966,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1966,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1966,
    "LV": "Thor Delta C"
  },
  {
    "Year": 1966,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1966,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1966,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "Diamant A"
  },
  {
    "Year": 1966,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1966,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1966,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1966,
    "LV": "Thor Delta E"
  },
  {
    "Year": 1966,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1966,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "Titan II GLV"
  },
  {
    "Year": 1966,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1966,
    "LV": "UR-500"
  },
  {
    "Year": 1966,
    "LV": "Scout A"
  },
  {
    "Year": 1966,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1966,
    "LV": "Atlas D"
  },
  {
    "Year": 1966,
    "LV": "Thor Burner 1"
  },
  {
    "Year": 1966,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1966,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1966,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1966,
    "LV": "Atlas Centaur D"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1966,
    "LV": "Scout B"
  },
  {
    "Year": 1966,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1966,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1966,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1966,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1966,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "Thor SLV-2A Agena B"
  },
  {
    "Year": 1966,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "Scout A"
  },
  {
    "Year": 1966,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1966,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1966,
    "LV": "Thor Delta C1"
  },
  {
    "Year": 1966,
    "LV": "Atlas Centaur D"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3"
  },
  {
    "Year": 1966,
    "LV": "Titan II GLV"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena B"
  },
  {
    "Year": 1966,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "Scout B"
  },
  {
    "Year": 1966,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1966,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1966,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1966,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1966,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1966,
    "LV": "Thor Delta E1"
  },
  {
    "Year": 1966,
    "LV": "Uprated Saturn I"
  },
  {
    "Year": 1966,
    "LV": "UR-500"
  },
  {
    "Year": 1966,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "Atlas D"
  },
  {
    "Year": 1966,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "Titan II GLV"
  },
  {
    "Year": 1966,
    "LV": "Vostok-2A 11A510"
  },
  {
    "Year": 1966,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1966,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1966,
    "LV": "Scout B"
  },
  {
    "Year": 1966,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1966,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "Thor Delta E1"
  },
  {
    "Year": 1966,
    "LV": "Scout A"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1966,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1966,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "Titan II GLV"
  },
  {
    "Year": 1966,
    "LV": "Thor Burner 2"
  },
  {
    "Year": 1966,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "R-36O 8K69"
  },
  {
    "Year": 1966,
    "LV": "Atlas Centaur D"
  },
  {
    "Year": 1966,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1966,
    "LV": "Lambda 4S"
  },
  {
    "Year": 1966,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1966,
    "LV": "Thor Delta E"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1966,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1966,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1966,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1966,
    "LV": "Atlas Centaur D"
  },
  {
    "Year": 1967,
    "LV": "Thor Delta E1"
  },
  {
    "Year": 1966,
    "LV": "Scout B"
  },
  {
    "Year": 1966,
    "LV": "R-36O 8K69"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1967,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1967,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1967,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1967,
    "LV": "Titan II GLV"
  },
  {
    "Year": 1966,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1966,
    "LV": "Kosmos 11K65"
  },
  {
    "Year": 1966,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1967,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1966,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1966,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1967,
    "LV": "Atlas D"
  },
  {
    "Year": 1966,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1966,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1966,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1967,
    "LV": "Thor Delta G"
  },
  {
    "Year": 1967,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1966,
    "LV": "Lambda 4S"
  },
  {
    "Year": 1967,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1966,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1967,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1967,
    "LV": "Thor Delta E1"
  },
  {
    "Year": 1967,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1967,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1967,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1967,
    "LV": "R-36O 8K69"
  },
  {
    "Year": 1967,
    "LV": "Thor Delta E"
  },
  {
    "Year": 1967,
    "LV": "Scout B"
  },
  {
    "Year": 1967,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1967,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1967,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1967,
    "LV": "Thor Burner 2"
  },
  {
    "Year": 1967,
    "LV": "Diamant A"
  },
  {
    "Year": 1967,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1967,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1967,
    "LV": "Diamant A"
  },
  {
    "Year": 1967,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1967,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1967,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1967,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1967,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1967,
    "LV": "Thor Delta C"
  },
  {
    "Year": 1967,
    "LV": "UR-500K/Blok D"
  },
  {
    "Year": 1967,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1967,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1967,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1967,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1967,
    "LV": "R-36O 8K69"
  },
  {
    "Year": 1967,
    "LV": "Thor Delta E1"
  },
  {
    "Year": 1967,
    "LV": "Kosmos 11K65"
  },
  {
    "Year": 1967,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1967,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1967,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1967,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1967,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1967,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1967,
    "LV": "Lambda 4S"
  },
  {
    "Year": 1967,
    "LV": "Scout A"
  },
  {
    "Year": 1967,
    "LV": "Atlas Centaur D"
  },
  {
    "Year": 1967,
    "LV": "Thor Delta E"
  },
  {
    "Year": 1967,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1967,
    "LV": "Scout B"
  },
  {
    "Year": 1967,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1967,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1967,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1967,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1967,
    "LV": "Scout A"
  },
  {
    "Year": 1967,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1967,
    "LV": "Vostok 8A92"
  },
  {
    "Year": 1967,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1967,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1967,
    "LV": "R-36O 8K69"
  },
  {
    "Year": 1967,
    "LV": "Scout A"
  },
  {
    "Year": 1967,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1967,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1967,
    "LV": "Thor Delta E1"
  },
  {
    "Year": 1967,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1967,
    "LV": "Scout B"
  },
  {
    "Year": 1967,
    "LV": "Thor SLV-2 Agena D"
  },
  {
    "Year": 1967,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1967,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1967,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1967,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1967,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1967,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1967,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1967,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1967,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1967,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1967,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1967,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1967,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1967,
    "LV": "Thor Burner 2"
  },
  {
    "Year": 1967,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1967,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1967,
    "LV": "Atlas Centaur D"
  },
  {
    "Year": 1967,
    "LV": "R-36O 8K69"
  },
  {
    "Year": 1967,
    "LV": "Thor Delta E1"
  },
  {
    "Year": 1967,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1967,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1967,
    "LV": "Atlas D"
  },
  {
    "Year": 1967,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1967,
    "LV": "R-36O 8K69"
  },
  {
    "Year": 1967,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1967,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1967,
    "LV": "R-36O 8K69"
  },
  {
    "Year": 1967,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1967,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1967,
    "LV": "Thor Burner 2"
  },
  {
    "Year": 1967,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1967,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1967,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1967,
    "LV": "Thor Delta G"
  },
  {
    "Year": 1967,
    "LV": "Atlas SLV-3C Centaur"
  },
  {
    "Year": 1967,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1967,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1967,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1967,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1967,
    "LV": "R-36O 8K69"
  },
  {
    "Year": 1967,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1967,
    "LV": "R-36O 8K69"
  },
  {
    "Year": 1967,
    "LV": "Scout A"
  },
  {
    "Year": 1967,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1967,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1967,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1967,
    "LV": "Thor Delta E1"
  },
  {
    "Year": 1967,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1967,
    "LV": "Thor Burner 2"
  },
  {
    "Year": 1967,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1967,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1967,
    "LV": "R-36O 8K69"
  },
  {
    "Year": 1967,
    "LV": "Thor Delta C1"
  },
  {
    "Year": 1967,
    "LV": "Molniya 8K78"
  },
  {
    "Year": 1968,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1967,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1967,
    "LV": "Tsiklon-2A"
  },
  {
    "Year": 1967,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1967,
    "LV": "R-36O 8K69"
  },
  {
    "Year": 1967,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1968,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1967,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Atlas SLV-3 Agena D"
  },
  {
    "Year": 1967,
    "LV": "Atlas SLV-3C Centaur"
  },
  {
    "Year": 1967,
    "LV": "Saturn V"
  },
  {
    "Year": 1968,
    "LV": "Thor Delta E1"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1968,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1967,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1967,
    "LV": "SPARTA"
  },
  {
    "Year": 1967,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1967,
    "LV": "Scout B"
  },
  {
    "Year": 1967,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1968,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1968,
    "LV": "Thor Delta E1"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1967,
    "LV": "Kosmos 63S1"
  },
  {
    "Year": 1967,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1968,
    "LV": "Tsiklon-2A"
  },
  {
    "Year": 1968,
    "LV": "Atlas SLV-3C Centaur"
  },
  {
    "Year": 1968,
    "LV": "Thor Delta E1"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Thor SLV-2A Agena D"
  },
  {
    "Year": 1968,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1968,
    "LV": "Saturn IB"
  },
  {
    "Year": 1968,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1968,
    "LV": "Scout A"
  },
  {
    "Year": 1968,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1968,
    "LV": "Atlas SLV-3A Agena D"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Scout B"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1968,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1968,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1968,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Tsiklon-2A"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Saturn V"
  },
  {
    "Year": 1968,
    "LV": "Atlas F"
  },
  {
    "Year": 1968,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1968,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1968,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1968,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1968,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1968,
    "LV": "Tsiklon-2A"
  },
  {
    "Year": 1968,
    "LV": "R-36O 8K69"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1968,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1968,
    "LV": "Scout B"
  },
  {
    "Year": 1968,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1968,
    "LV": "Thor Burner 2"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1968,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1968,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1968,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K65"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Thor Delta J"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1968,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Atlas F"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Atlas SLV-3A Agena D"
  },
  {
    "Year": 1968,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1968,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1968,
    "LV": "Scout B"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Atlas SLV-3C Centaur"
  },
  {
    "Year": 1968,
    "LV": "Thor Delta N"
  },
  {
    "Year": 1968,
    "LV": "Atlas Burner 2"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K65"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1968,
    "LV": "Thor Delta M"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1968,
    "LV": "R-36O 8K69"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1968,
    "LV": "Scout B"
  },
  {
    "Year": 1968,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1968,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Saturn IB"
  },
  {
    "Year": 1968,
    "LV": "Tsiklon-2A"
  },
  {
    "Year": 1968,
    "LV": "Tsiklon-2A"
  },
  {
    "Year": 1968,
    "LV": "Thor Burner 2"
  },
  {
    "Year": 1968,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1968,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Tsiklon-2A"
  },
  {
    "Year": 1968,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1968,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1968,
    "LV": "Thor Delta E1"
  },
  {
    "Year": 1969,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Proton-K"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Europa I"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1968,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1969,
    "LV": "Thor Delta E1"
  },
  {
    "Year": 1968,
    "LV": "Atlas SLV-3C Centaur"
  },
  {
    "Year": 1968,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1968,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1969,
    "LV": "Thor Delta N"
  },
  {
    "Year": 1968,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1968,
    "LV": "Thor Delta M"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1969,
    "LV": "Saturn V"
  },
  {
    "Year": 1968,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1969,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1969,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1969,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1969,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1969,
    "LV": "Thor Delta C1"
  },
  {
    "Year": 1969,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Tsiklon-2A"
  },
  {
    "Year": 1969,
    "LV": "Thor Delta E1"
  },
  {
    "Year": 1969,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1969,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1969,
    "LV": "Thor Delta M"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1969,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1969,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1969,
    "LV": "N-1 11A52"
  },
  {
    "Year": 1969,
    "LV": "Atlas SLV-3C Centaur"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Thor Delta E1"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Saturn V"
  },
  {
    "Year": 1969,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1969,
    "LV": "Atlas F"
  },
  {
    "Year": 1969,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1969,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1969,
    "LV": "Atlas SLV-3C Centaur"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1969,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1969,
    "LV": "Atlas SLV-3A Agena D"
  },
  {
    "Year": 1969,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Saturn V"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Thor Delta M"
  },
  {
    "Year": 1969,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1969,
    "LV": "Titan IIIB"
  },
  {
    "Year": 1969,
    "LV": "Thorad SLV-2H Agena D"
  },
  {
    "Year": 1969,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Thor Delta E1"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Thor Delta N"
  },
  {
    "Year": 1969,
    "LV": "Europa I"
  },
  {
    "Year": 1969,
    "LV": "N-1 11A52"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1969,
    "LV": "Saturn V"
  },
  {
    "Year": 1969,
    "LV": "LM AS"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1969,
    "LV": "Thor Burner 2"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1969,
    "LV": "Thorad SLV-2H Agena D"
  },
  {
    "Year": 1969,
    "LV": "Thor Delta M"
  },
  {
    "Year": 1969,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1969,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1969,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1969,
    "LV": "Thor Delta N"
  },
  {
    "Year": 1969,
    "LV": "Atlas SLV-3C Centaur"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1969,
    "LV": "Titan 23B"
  },
  {
    "Year": 1969,
    "LV": "Thor Delta L"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "R-36O 8K69"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Lambda 4S"
  },
  {
    "Year": 1969,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1969,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1970,
    "LV": "Scout B"
  },
  {
    "Year": 1969,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1969,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1969,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1969,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1969,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1969,
    "LV": "Titan 23B"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1969,
    "LV": "Scout B"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Saturn V"
  },
  {
    "Year": 1969,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "LM AS"
  },
  {
    "Year": 1969,
    "LV": "Thor Delta M"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1969,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Thorad SLV-2H Agena D"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1969,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1969,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Titan 23B"
  },
  {
    "Year": 1970,
    "LV": "Thor Delta M"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Thor Delta N6"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1970,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1970,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Lambda 4S"
  },
  {
    "Year": 1970,
    "LV": "Thor Burner 2"
  },
  {
    "Year": 1970,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Thorad SLV-2H Agena D"
  },
  {
    "Year": 1970,
    "LV": "Diamant B"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1970,
    "LV": "Thor Delta M"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1970,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1970,
    "LV": "Saturn V"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Titan 23B"
  },
  {
    "Year": 1970,
    "LV": "Thor Delta M"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1970,
    "LV": "Chang Zheng 1"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1970,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Thorad SLV-2H Agena D"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1970,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Europa I"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Atlas SLV-3A Agena D"
  },
  {
    "Year": 1970,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1970,
    "LV": "Titan 23B"
  },
  {
    "Year": 1970,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Thorad SLV-2H Agena D"
  },
  {
    "Year": 1970,
    "LV": "Thor Delta M"
  },
  {
    "Year": 1970,
    "LV": "R-36O 8K69"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1970,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1970,
    "LV": "Titan 23B"
  },
  {
    "Year": 1970,
    "LV": "Thor Delta M"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1970,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1970,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1970,
    "LV": "Scout A"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Atlas SLV-3A Agena D"
  },
  {
    "Year": 1970,
    "LV": "Black Arrow"
  },
  {
    "Year": 1970,
    "LV": "Thor Burner 2"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "E-8-5 VA"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Mu-4S"
  },
  {
    "Year": 1970,
    "LV": "R-36O 8K69M"
  },
  {
    "Year": 1970,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1970,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1970,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1971,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1970,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1970,
    "LV": "Titan 23B"
  },
  {
    "Year": 1970,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1970,
    "LV": "Scout B"
  },
  {
    "Year": 1971,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1970,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1971,
    "LV": "Thorad SLV-2H Agena D"
  },
  {
    "Year": 1970,
    "LV": "Soyuz 11A511L"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1971,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1971,
    "LV": "Atlas SLV-3C Centaur"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1971,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Thor Delta N6"
  },
  {
    "Year": 1971,
    "LV": "Scout B"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1971,
    "LV": "Diamant B"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1971,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1970,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1970,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1971,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Titan 23B"
  },
  {
    "Year": 1971,
    "LV": "Atlas SLV-3C Centaur"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1971,
    "LV": "Saturn V"
  },
  {
    "Year": 1971,
    "LV": "Thor Delta M"
  },
  {
    "Year": 1971,
    "LV": "LM AS"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1971,
    "LV": "Mu-4S"
  },
  {
    "Year": 1971,
    "LV": "Thor Burner 2"
  },
  {
    "Year": 1971,
    "LV": "Thorad SLV-2H Agena D"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1971,
    "LV": "Soyuz 11A511L"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Chang Zheng 1"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1971,
    "LV": "Thor Delta M6"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1971,
    "LV": "Titan 33B"
  },
  {
    "Year": 1971,
    "LV": "Thorad SLV-2H Agena D"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Thor Delta E1"
  },
  {
    "Year": 1971,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1971,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Diamant B"
  },
  {
    "Year": 1971,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1971,
    "LV": "Proton-K"
  },
  {
    "Year": 1971,
    "LV": "Titan 23B"
  },
  {
    "Year": 1971,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1971,
    "LV": "Scout B"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1971,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1971,
    "LV": "Atlas SLV-3C Centaur"
  },
  {
    "Year": 1971,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1971,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1971,
    "LV": "Atlas SLV-3C Centaur"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1971,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1971,
    "LV": "Thor Burner 2"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Titan IIID"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "N-1 11A52"
  },
  {
    "Year": 1971,
    "LV": "Scout B"
  },
  {
    "Year": 1971,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1971,
    "LV": "Thorad SLV-2H Agena D"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Saturn V"
  },
  {
    "Year": 1971,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "LM AS"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Atlas F"
  },
  {
    "Year": 1971,
    "LV": "R-36O 8K69M"
  },
  {
    "Year": 1971,
    "LV": "Soyuz 11A511L"
  },
  {
    "Year": 1971,
    "LV": "Titan 24B"
  },
  {
    "Year": 1971,
    "LV": "Scout B-1"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1971,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1971,
    "LV": "Thorad SLV-2H Agena D"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1971,
    "LV": "Mu-4S"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1971,
    "LV": "Thor Delta N"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1971,
    "LV": "Thor Burner 2A"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1971,
    "LV": "Thor Delta N6"
  },
  {
    "Year": 1971,
    "LV": "Titan 24B"
  },
  {
    "Year": 1971,
    "LV": "Black Arrow"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1971,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1971,
    "LV": "Europa II"
  },
  {
    "Year": 1971,
    "LV": "Scout B"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1971,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1971,
    "LV": "Atlas SLV-3A Agena D"
  },
  {
    "Year": 1971,
    "LV": "Diamant B"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Scout B-1"
  },
  {
    "Year": 1971,
    "LV": "Thorad SLV-2G Agena D"
  },
  {
    "Year": 1971,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1971,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1972,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1971,
    "LV": "Atlas SLV-3C Centaur"
  },
  {
    "Year": 1972,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1972,
    "LV": "Soyuz 11A511M"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1972,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Titan IIID"
  },
  {
    "Year": 1972,
    "LV": "Atlas SLV-3C Centaur"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1972,
    "LV": "Thor Delta L"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Titan 33B"
  },
  {
    "Year": 1972,
    "LV": "E-8-5 VA"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1972,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1972,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1972,
    "LV": "Atlas SLV-3C Centaur"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Thor Delta N"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Titan 24B"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1972,
    "LV": "Thor Burner 2A"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1972,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1972,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1972,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1972,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Saturn V"
  },
  {
    "Year": 1972,
    "LV": "Thorad SLV-2H Agena D"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1972,
    "LV": "LM AS"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1972,
    "LV": "Titan 24B"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Thorad SLV-2H Agena D"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Atlas SLV-3C Centaur"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1972,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1972,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Titan IIID"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1972,
    "LV": "Soyuz 11A511M"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1972,
    "LV": "Delta 0900"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Proton-K"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Scout D-1"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Mu-4S"
  },
  {
    "Year": 1972,
    "LV": "Atlas SLV-3C Centaur"
  },
  {
    "Year": 1972,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Titan 24B"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Scout B-1"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1972,
    "LV": "Delta 1604"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1972,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1972,
    "LV": "Atlas Burner 2"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1972,
    "LV": "Titan IIID"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1972,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1972,
    "LV": "Delta 0300"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1973,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1972,
    "LV": "Thor Burner 2A"
  },
  {
    "Year": 1972,
    "LV": "Delta 1914"
  },
  {
    "Year": 1973,
    "LV": "Scout D-1"
  },
  {
    "Year": 1972,
    "LV": "Scout D-1"
  },
  {
    "Year": 1972,
    "LV": "N-1 11A52"
  },
  {
    "Year": 1972,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1972,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1972,
    "LV": "Saturn V"
  },
  {
    "Year": 1972,
    "LV": "Delta 0900"
  },
  {
    "Year": 1972,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "LM AS"
  },
  {
    "Year": 1973,
    "LV": "Scout D-1"
  },
  {
    "Year": 1972,
    "LV": "Atlas SLV-3A Agena D"
  },
  {
    "Year": 1972,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1972,
    "LV": "Titan 24B"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1973,
    "LV": "Soyuz 11A511M"
  },
  {
    "Year": 1973,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1973,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Atlas SLV-3A Agena D"
  },
  {
    "Year": 1973,
    "LV": "Titan IIID"
  },
  {
    "Year": 1973,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Proton-K"
  },
  {
    "Year": 1973,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1973,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1973,
    "LV": "Delta 1914"
  },
  {
    "Year": 1973,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Proton-K"
  },
  {
    "Year": 1973,
    "LV": "Saturn V"
  },
  {
    "Year": 1973,
    "LV": "Titan 24B"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1973,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1973,
    "LV": "Diamant B"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1973,
    "LV": "Saturn IB"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Delta 1913"
  },
  {
    "Year": 1973,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1973,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Titan 24B"
  },
  {
    "Year": 1973,
    "LV": "Soyuz 11A511M"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1973,
    "LV": "Titan IIID"
  },
  {
    "Year": 1973,
    "LV": "Delta 0300"
  },
  {
    "Year": 1973,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1973,
    "LV": "Saturn IB"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1973,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1973,
    "LV": "Thor Burner 2A"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Titan 33B"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1973,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1973,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1973,
    "LV": "Feng Bao 1"
  },
  {
    "Year": 1973,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1973,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1973,
    "LV": "Titan 24B"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1973,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Delta 1604"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1973,
    "LV": "Scout A-1"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1973,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1973,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1974,
    "LV": "Delta 0300"
  },
  {
    "Year": 1973,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Titan IIID"
  },
  {
    "Year": 1974,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1974,
    "LV": "Saturn IB"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1973,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1974,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1974,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1973,
    "LV": "Delta 1900"
  },
  {
    "Year": 1974,
    "LV": "Soyuz 11A511M"
  },
  {
    "Year": 1974,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1973,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Delta 2313"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Titan IIIE"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Titan 24B"
  },
  {
    "Year": 1974,
    "LV": "Mu-3C"
  },
  {
    "Year": 1974,
    "LV": "Scout D-1"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1974,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1974,
    "LV": "Scout D-1"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Thor Burner 2A"
  },
  {
    "Year": 1974,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1974,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1974,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Titan IIID"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Delta 2914"
  },
  {
    "Year": 1974,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1974,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1974,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1974,
    "LV": "Delta 2914"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1974,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1974,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1974,
    "LV": "Scout E-1"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Titan 24B"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Proton-K"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Soyuz 11A511M"
  },
  {
    "Year": 1974,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1974,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1974,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Feng Bao 1"
  },
  {
    "Year": 1974,
    "LV": "Atlas F/PTS"
  },
  {
    "Year": 1974,
    "LV": "Scout D-1"
  },
  {
    "Year": 1974,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1974,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Thor Burner 2A"
  },
  {
    "Year": 1974,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1974,
    "LV": "Titan 24B"
  },
  {
    "Year": 1974,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1974,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Scout D-1"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1975,
    "LV": "Delta 2914"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Scout B-1"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1975,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1974,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1974,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1974,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1974,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1975,
    "LV": "Titan IIID"
  },
  {
    "Year": 1974,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Soyuz 11A511M"
  },
  {
    "Year": 1974,
    "LV": "Chang Zheng 2"
  },
  {
    "Year": 1975,
    "LV": "Delta 2310"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1975,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1975,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1974,
    "LV": "Delta 2313"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1974,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1974,
    "LV": "Titan IIIE"
  },
  {
    "Year": 1974,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1975,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Delta 2914"
  },
  {
    "Year": 1974,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1975,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1974,
    "LV": "Proton-K"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1974,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1975,
    "LV": "Delta 2910"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1975,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1975,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1975,
    "LV": "Diamant BP.4"
  },
  {
    "Year": 1975,
    "LV": "Delta 2914"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1975,
    "LV": "Mu-3C"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1975,
    "LV": "Titan 34B"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1975,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1975,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1975,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1975,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1975,
    "LV": "Delta 1410"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1975,
    "LV": "Atlas F"
  },
  {
    "Year": 1975,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1975,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Titan 24B"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1975,
    "LV": "Scout F-1"
  },
  {
    "Year": 1975,
    "LV": "Delta 2914"
  },
  {
    "Year": 1975,
    "LV": "Diamant BP.4"
  },
  {
    "Year": 1975,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1975,
    "LV": "Thor Burner 2A"
  },
  {
    "Year": 1975,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1975,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1975,
    "LV": "Titan IIID"
  },
  {
    "Year": 1975,
    "LV": "Delta 2910"
  },
  {
    "Year": 1975,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1975,
    "LV": "Proton-K/D"
  },
  {
    "Year": 1975,
    "LV": "Atlas SLV-3A Agena D"
  },
  {
    "Year": 1975,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1975,
    "LV": "Delta 1910"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1975,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1975,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1975,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1975,
    "LV": "Saturn IB"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1975,
    "LV": "Feng Bao 1"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Delta 2913"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1975,
    "LV": "Titan IIIE"
  },
  {
    "Year": 1975,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1975,
    "LV": "Delta 2914"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1975,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1975,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1975,
    "LV": "N-1"
  },
  {
    "Year": 1975,
    "LV": "Titan IIIE"
  },
  {
    "Year": 1975,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1975,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1975,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1975,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1975,
    "LV": "Diamant BP.4"
  },
  {
    "Year": 1975,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Delta 2910"
  },
  {
    "Year": 1975,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1975,
    "LV": "Titan 24B"
  },
  {
    "Year": 1975,
    "LV": "Scout D-1"
  },
  {
    "Year": 1975,
    "LV": "Proton-K/D-1"
  },
  {
    "Year": 1976,
    "LV": "Delta 2914"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1976,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1975,
    "LV": "Delta 2910"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1975,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1975,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1975,
    "LV": "Titan IIID"
  },
  {
    "Year": 1975,
    "LV": "Scout F-1"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1975,
    "LV": "Delta 3914"
  },
  {
    "Year": 1975,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1975,
    "LV": "Feng Bao 1"
  },
  {
    "Year": 1975,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1976,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1975,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1975,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1976,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1976,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1976,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1976,
    "LV": "Titan IIIE"
  },
  {
    "Year": 1976,
    "LV": "Delta 2914"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1976,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Mu-3C"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1976,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1976,
    "LV": "Thor Burner 2A"
  },
  {
    "Year": 1976,
    "LV": "Delta 2914"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "N-1"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1976,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1976,
    "LV": "Titan 24B"
  },
  {
    "Year": 1976,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1976,
    "LV": "Delta 3914"
  },
  {
    "Year": 1976,
    "LV": "Soyuz 11A511M"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1976,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1976,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1976,
    "LV": "Delta 2914"
  },
  {
    "Year": 1976,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Atlas F/MSD"
  },
  {
    "Year": 1976,
    "LV": "Delta 2913"
  },
  {
    "Year": 1976,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1976,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1976,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1976,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1976,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Scout B-1"
  },
  {
    "Year": 1976,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Titan 34B"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1976,
    "LV": "Delta 2914"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Proton-K"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1976,
    "LV": "Voskhod 11A57"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1976,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1976,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1976,
    "LV": "Titan IIID"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Delta 2914"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1976,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Delta 2310"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Titan 34B"
  },
  {
    "Year": 1976,
    "LV": "Proton-K/D-1"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1976,
    "LV": "E-8-5 VA"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1976,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Feng Bao 1"
  },
  {
    "Year": 1976,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1976,
    "LV": "Scout D-1"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Thor DSV-2U"
  },
  {
    "Year": 1976,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Titan 24B"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Soyuz 11A511"
  },
  {
    "Year": 1976,
    "LV": "Delta 2914"
  },
  {
    "Year": 1977,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1976,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1976,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1976,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Feng Bao 1"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1976,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1976,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Proton-K"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1976,
    "LV": "Titan IIID"
  },
  {
    "Year": 1976,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1976,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1976,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Delta 2914"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Mu-3H"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "N-1"
  },
  {
    "Year": 1977,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Delta 2914"
  },
  {
    "Year": 1977,
    "LV": "Titan 24B"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Delta 2914"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1977,
    "LV": "Atlas SLV-3A Agena D"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Thor DSV-2U"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1977,
    "LV": "Delta 2914"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K63"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Atlas F/SVS"
  },
  {
    "Year": 1977,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1977,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1977,
    "LV": "Titan IIID"
  },
  {
    "Year": 1977,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Delta 2914"
  },
  {
    "Year": 1977,
    "LV": "Proton-K"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Proton-K"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1977,
    "LV": "Titan IIIE"
  },
  {
    "Year": 1977,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Delta 2313"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Titan IIIE"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Delta 3914"
  },
  {
    "Year": 1977,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1977,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1977,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1977,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1977,
    "LV": "Titan 24B"
  },
  {
    "Year": 1977,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Proton-K"
  },
  {
    "Year": 1977,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Delta 2914"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1977,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1977,
    "LV": "Scout D-1"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Delta 2914"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Atlas F/MSD"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Atlas SLV-3A Agena D"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1977,
    "LV": "Delta 2914"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1977,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1977,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1977,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 1978,
    "LV": "Delta 2914"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Mu-3H"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "N-1"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Atlas F/SVS"
  },
  {
    "Year": 1978,
    "LV": "Titan 34B"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Delta 2910"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Titan IIID"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Proton-K"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Atlas SLV-3A Agena D"
  },
  {
    "Year": 1978,
    "LV": "Delta 2914"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Scout D-1"
  },
  {
    "Year": 1978,
    "LV": "Thor DSV-2U"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Delta 3914"
  },
  {
    "Year": 1978,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Atlas F/SVS"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1978,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1978,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Titan IIID"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Delta 2914"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Atlas F/Agena D"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1978,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1978,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Delta 2914"
  },
  {
    "Year": 1978,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1978,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Titan 34B"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1978,
    "LV": "Delta 2914"
  },
  {
    "Year": 1978,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1978,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1978,
    "LV": "Proton-K/D-1"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Proton-K/D-1"
  },
  {
    "Year": 1978,
    "LV": "Mu-3H"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Atlas F/SVS"
  },
  {
    "Year": 1978,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1978,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1978,
    "LV": "Atlas F"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1978,
    "LV": "Delta 2910"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1978,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Delta 2914"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Atlas F/SVS"
  },
  {
    "Year": 1978,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Delta 3914"
  },
  {
    "Year": 1978,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1979,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1978,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1978,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1979,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1979,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Delta 2914"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "N-1"
  },
  {
    "Year": 1979,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1979,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1979,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Scout D-1"
  },
  {
    "Year": 1979,
    "LV": "Mu-3C"
  },
  {
    "Year": 1979,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Atlas F/OIS"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1979,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1979,
    "LV": "Titan IIID"
  },
  {
    "Year": 1979,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1979,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1979,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1979,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1979,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Proton-K"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Titan 24B"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1979,
    "LV": "Scout D-1"
  },
  {
    "Year": 1979,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Thor DSV-2U"
  },
  {
    "Year": 1979,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Atlas F"
  },
  {
    "Year": 1979,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1979,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Feng Bao 1"
  },
  {
    "Year": 1979,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Delta 2914"
  },
  {
    "Year": 1979,
    "LV": "SLV-3"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1979,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1979,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1979,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1979,
    "LV": "Scout G-1"
  },
  {
    "Year": 1979,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1979,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1979,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1979,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1979,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1979,
    "LV": "Delta 3914"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Ariane 1"
  },
  {
    "Year": 1980,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1979,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1980,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1980,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1980,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1980,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Titan IIID"
  },
  {
    "Year": 1980,
    "LV": "Atlas F/SVS"
  },
  {
    "Year": 1980,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1980,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1980,
    "LV": "Delta 3910"
  },
  {
    "Year": 1980,
    "LV": "Mu-3S"
  },
  {
    "Year": 1980,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "N-1"
  },
  {
    "Year": 1980,
    "LV": "Atlas F/MSD"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1980,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1980,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1980,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1980,
    "LV": "Atlas F/SVS"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Ariane 1"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Atlas F"
  },
  {
    "Year": 1980,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1980,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1980,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1980,
    "LV": "Titan IIID"
  },
  {
    "Year": 1980,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1980,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1980,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1980,
    "LV": "Thor DSV-2U"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "SLV-3"
  },
  {
    "Year": 1980,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1980,
    "LV": "Delta 3914"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Delta 3910/PAM"
  },
  {
    "Year": 1980,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1980,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1980,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1980,
    "LV": "Atlas E/MSD"
  },
  {
    "Year": 1980,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1980,
    "LV": "Titan 34B"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1980,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1980,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1981,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1980,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1981,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1981,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1981,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1981,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1981,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1981,
    "LV": "N-2"
  },
  {
    "Year": 1981,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1981,
    "LV": "Mu-3S"
  },
  {
    "Year": 1981,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1981,
    "LV": "Titan 24B"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1981,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1981,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1981,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1981,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1981,
    "LV": "Titan 34B"
  },
  {
    "Year": 1981,
    "LV": "Proton-K"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1981,
    "LV": "Scout G-1"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Delta 3914"
  },
  {
    "Year": 1981,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1981,
    "LV": "SLV-3"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1981,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Ariane 1"
  },
  {
    "Year": 1981,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1981,
    "LV": "Atlas F"
  },
  {
    "Year": 1981,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1981,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1981,
    "LV": "Delta 3913"
  },
  {
    "Year": 1981,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1981,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1981,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1981,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1981,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1981,
    "LV": "N-2"
  },
  {
    "Year": 1981,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1981,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1981,
    "LV": "Titan IIID"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1981,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1981,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Feng Bao 1"
  },
  {
    "Year": 1981,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1981,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1981,
    "LV": "Delta 3910/PAM"
  },
  {
    "Year": 1981,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1981,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Delta 2310"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1981,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1981,
    "LV": "Proton-K/D-1"
  },
  {
    "Year": 1981,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1982,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Proton-K/D-1"
  },
  {
    "Year": 1982,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1981,
    "LV": "Delta 3910/PAM"
  },
  {
    "Year": 1981,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1981,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1981,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1981,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1981,
    "LV": "Atlas E/SVS"
  },
  {
    "Year": 1981,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1981,
    "LV": "Ariane 1"
  },
  {
    "Year": 1981,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Delta 3910/PAM"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Titan 24B"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1982,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1982,
    "LV": "Delta 3910/PAM"
  },
  {
    "Year": 1982,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1982,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Titan IIIC"
  },
  {
    "Year": 1982,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1982,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Delta 3910/PAM"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Proton-K"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1982,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Titan IIID"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1982,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "K65M-RB"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Delta 3910/PAM"
  },
  {
    "Year": 1982,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1982,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Delta 3920"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1982,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Delta 3920/PAM"
  },
  {
    "Year": 1982,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1982,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "N-1"
  },
  {
    "Year": 1982,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Ariane 1"
  },
  {
    "Year": 1982,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1982,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1982,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1982,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1982,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Delta 3924"
  },
  {
    "Year": 1982,
    "LV": "Titan 34D/IUS"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1982,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1982,
    "LV": "Titan IIID"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1983,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1982,
    "LV": "Atlas E"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1983,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1982,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Delta 3910"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "N-2"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Atlas H"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1983,
    "LV": "Mu-3S"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Proton-K"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1983,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1983,
    "LV": "K65M-RB"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1983,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1983,
    "LV": "Proton-K/D-1"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Atlas E"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1983,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Delta 3924"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Titan 24B"
  },
  {
    "Year": 1983,
    "LV": "SLV-3"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1983,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Delta 3914"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Atlas SLV-3D Centaur"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Delta 3914"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Proton-K/D-1"
  },
  {
    "Year": 1983,
    "LV": "Proton-K/D-1"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Atlas H"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Ariane 1"
  },
  {
    "Year": 1983,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1983,
    "LV": "Titan 34D"
  },
  {
    "Year": 1983,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Scout D-1"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Delta 3920/PAM"
  },
  {
    "Year": 1983,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1983,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Atlas E/SGS-2"
  },
  {
    "Year": 1983,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Delta 3920/PAM"
  },
  {
    "Year": 1983,
    "LV": "Titan 34B"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "N-2"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1983,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1983,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Delta 3924"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Delta 3920/PAM"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1983,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Ariane 1"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1983,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1984,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Atlas E"
  },
  {
    "Year": 1983,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1983,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1984,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1983,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1983,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1983,
    "LV": "K65M-RB"
  },
  {
    "Year": 1983,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1983,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1984,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "N-2"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1984,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1984,
    "LV": "Chang Zheng 3"
  },
  {
    "Year": 1984,
    "LV": "Titan 34D/Transtage"
  },
  {
    "Year": 1984,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1984,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1984,
    "LV": "Atlas H"
  },
  {
    "Year": 1984,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Mu-3S"
  },
  {
    "Year": 1984,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Delta 3920"
  },
  {
    "Year": 1984,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1984,
    "LV": "Ariane 1"
  },
  {
    "Year": 1984,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1984,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1984,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1984,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1984,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1984,
    "LV": "Chang Zheng 3"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Titan 34D/Transtage"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1984,
    "LV": "Titan 24B"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1984,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Ariane 1"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1984,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1984,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1984,
    "LV": "Atlas G Centaur"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Atlas E/SGS-2"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1984,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Titan 34D"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1984,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1984,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1984,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1984,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1984,
    "LV": "N-2"
  },
  {
    "Year": 1984,
    "LV": "Ariane 3"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1984,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1984,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Delta 3924"
  },
  {
    "Year": 1984,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1984,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1984,
    "LV": "Titan 34B"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1984,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1984,
    "LV": "Atlas E/SGS-2"
  },
  {
    "Year": 1984,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1984,
    "LV": "Delta 3920/PAM"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1984,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1984,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1984,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1984,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1984,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1984,
    "LV": "Scout G-1"
  },
  {
    "Year": 1984,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1984,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1984,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1984,
    "LV": "Ariane 3"
  },
  {
    "Year": 1984,
    "LV": "Delta 3914"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1984,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1984,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1984,
    "LV": "Titan 34D"
  },
  {
    "Year": 1985,
    "LV": "Atlas E"
  },
  {
    "Year": 1985,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1984,
    "LV": "Proton-K/D-1"
  },
  {
    "Year": 1984,
    "LV": "K65M-RB"
  },
  {
    "Year": 1985,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1984,
    "LV": "Proton-K/D-1"
  },
  {
    "Year": 1984,
    "LV": "Titan 34D/Transtage"
  },
  {
    "Year": 1985,
    "LV": "Mu-3S-II"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1985,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1985,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1985,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1985,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1985,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1985,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1985,
    "LV": "Titan 34B"
  },
  {
    "Year": 1985,
    "LV": "Ariane 3"
  },
  {
    "Year": 1985,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1985,
    "LV": "Atlas E/OIS"
  },
  {
    "Year": 1985,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1985,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1985,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1985,
    "LV": "Atlas G Centaur"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1985,
    "LV": "Zenit-2"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1985,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1985,
    "LV": "Ariane 3"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1985,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1985,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1985,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1985,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1985,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1985,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Zenit-2"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Atlas G Centaur"
  },
  {
    "Year": 1985,
    "LV": "Ariane 1"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1985,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Scout G-1"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1985,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1985,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Mu-3S-II"
  },
  {
    "Year": 1985,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1985,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1985,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1985,
    "LV": "Titan 34D"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Ariane 3"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1985,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Proton-K"
  },
  {
    "Year": 1985,
    "LV": "Atlas G Centaur"
  },
  {
    "Year": 1985,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1985,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1985,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1985,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1985,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1985,
    "LV": "Atlas E/SGS-2"
  },
  {
    "Year": 1985,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 1985,
    "LV": "Zenit-2"
  },
  {
    "Year": 1986,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1985,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1985,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1985,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1986,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1986,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1985,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1986,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1985,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1986,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1985,
    "LV": "Scout G-1"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1986,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1986,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1985,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1985,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1985,
    "LV": "Zenit-2"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1986,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1986,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1986,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1986,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1986,
    "LV": "Chang Zheng 3"
  },
  {
    "Year": 1986,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Atlas H"
  },
  {
    "Year": 1986,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1986,
    "LV": "N-2"
  },
  {
    "Year": 1986,
    "LV": "Proton-K"
  },
  {
    "Year": 1986,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1986,
    "LV": "Ariane 1"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1986,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1986,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Ariane 3"
  },
  {
    "Year": 1986,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1986,
    "LV": "Titan 34D"
  },
  {
    "Year": 1986,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1986,
    "LV": "Delta 3914"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1986,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1986,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Ariane 2"
  },
  {
    "Year": 1986,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1986,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1986,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1986,
    "LV": "Zenit-2"
  },
  {
    "Year": 1986,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "H-1"
  },
  {
    "Year": 1986,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1986,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1986,
    "LV": "Delta 3920"
  },
  {
    "Year": 1986,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1986,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Atlas E"
  },
  {
    "Year": 1986,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1986,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1986,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1986,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1986,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1986,
    "LV": "Zenit-2"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1986,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Scout G-1"
  },
  {
    "Year": 1987,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1987,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1987,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1986,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1987,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1986,
    "LV": "Proton-K"
  },
  {
    "Year": 1986,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1986,
    "LV": "Atlas G Centaur"
  },
  {
    "Year": 1986,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1987,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1986,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1986,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1987,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1987,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1987,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1987,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1987,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1987,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1987,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1987,
    "LV": "Mu-3S-II"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Titan 34B"
  },
  {
    "Year": 1987,
    "LV": "Zenit-2"
  },
  {
    "Year": 1987,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1987,
    "LV": "N-2"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Delta 3924"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1987,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1987,
    "LV": "Zenit-2"
  },
  {
    "Year": 1987,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1987,
    "LV": "Delta 3920/PAM"
  },
  {
    "Year": 1987,
    "LV": "ASLV"
  },
  {
    "Year": 1987,
    "LV": "Atlas G Centaur"
  },
  {
    "Year": 1987,
    "LV": "Proton-K"
  },
  {
    "Year": 1987,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1987,
    "LV": "Zenit-2"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Atlas H"
  },
  {
    "Year": 1987,
    "LV": "Energiya"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1987,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1987,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1987,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1987,
    "LV": "Atlas E"
  },
  {
    "Year": 1987,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1987,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1987,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1987,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1987,
    "LV": "Proton-K"
  },
  {
    "Year": 1987,
    "LV": "Zenit-2"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1987,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 1987,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "H-1"
  },
  {
    "Year": 1987,
    "LV": "Zenit-2"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1987,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1987,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Ariane 3"
  },
  {
    "Year": 1987,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1987,
    "LV": "Scout G-1"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1987,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1987,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Titan 34D"
  },
  {
    "Year": 1987,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1987,
    "LV": "Ariane 2"
  },
  {
    "Year": 1988,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1987,
    "LV": "Titan 34D/Transtage"
  },
  {
    "Year": 1988,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1987,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1988,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1988,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1987,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1988,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1988,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1988,
    "LV": "Atlas E"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Delta 3910"
  },
  {
    "Year": 1988,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "H-1"
  },
  {
    "Year": 1988,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1988,
    "LV": "Chang Zheng 3"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1988,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1988,
    "LV": "Ariane 3"
  },
  {
    "Year": 1988,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1988,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1988,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1988,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1988,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Scout G-1"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1988,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1988,
    "LV": "Scout G-1"
  },
  {
    "Year": 1988,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1988,
    "LV": "Zenit-2"
  },
  {
    "Year": 1988,
    "LV": "Ariane 2"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1988,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1988,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1988,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1988,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1988,
    "LV": "Scout G-1"
  },
  {
    "Year": 1988,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Proton-K/D-2"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Proton-K/D-2"
  },
  {
    "Year": 1988,
    "LV": "ASLV"
  },
  {
    "Year": 1988,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1988,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1988,
    "LV": "Ariane 3"
  },
  {
    "Year": 1988,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1988,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1988,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Scout G-1"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1988,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1988,
    "LV": "Titan 34D/Transtage"
  },
  {
    "Year": 1988,
    "LV": "Titan II SLV"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Chang Zheng 4"
  },
  {
    "Year": 1988,
    "LV": "Ariane 3"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1988,
    "LV": "H-1"
  },
  {
    "Year": 1988,
    "LV": "Shavit"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1988,
    "LV": "Atlas E"
  },
  {
    "Year": 1988,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1988,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1989,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1988,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1989,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Ariane 2"
  },
  {
    "Year": 1988,
    "LV": "Titan 34D"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Energiya/Buran"
  },
  {
    "Year": 1988,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1989,
    "LV": "Zenit-2"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1989,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1988,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1988,
    "LV": "Chang Zheng 3"
  },
  {
    "Year": 1989,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1988,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1988,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1988,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1989,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1989,
    "LV": "Ariane 2"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1989,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1989,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1989,
    "LV": "Delta 6925"
  },
  {
    "Year": 1989,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Mu-3S-II"
  },
  {
    "Year": 1989,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1989,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1989,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1989,
    "LV": "Delta 3920-8"
  },
  {
    "Year": 1989,
    "LV": "Ariane 2"
  },
  {
    "Year": 1989,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1989,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1989,
    "LV": "Titan 34D/Transtage"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1989,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1989,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1989,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1989,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1989,
    "LV": "Delta 6925"
  },
  {
    "Year": 1989,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1989,
    "LV": "Titan 402A/IUS"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1989,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1989,
    "LV": "Ariane 3"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1989,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1989,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Delta 6925"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1989,
    "LV": "Delta 4925-8"
  },
  {
    "Year": 1989,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1989,
    "LV": "Titan 34D/Transtage"
  },
  {
    "Year": 1989,
    "LV": "H-1"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1989,
    "LV": "Titan II SLV"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1989,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Atlas G Centaur"
  },
  {
    "Year": 1989,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1989,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1989,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1989,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1989,
    "LV": "Delta 6925"
  },
  {
    "Year": 1990,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1990,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1989,
    "LV": "Delta 5920-8"
  },
  {
    "Year": 1989,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1990,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1990,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1990,
    "LV": "Proton-K"
  },
  {
    "Year": 1990,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1990,
    "LV": "Proton-K/D-1"
  },
  {
    "Year": 1990,
    "LV": "Delta 6925"
  },
  {
    "Year": 1990,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1989,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1989,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1990,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1990,
    "LV": "Commercial Titan 3"
  },
  {
    "Year": 1990,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1990,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1990,
    "LV": "Ariane 40"
  },
  {
    "Year": 1990,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1990,
    "LV": "Mu-3S-II"
  },
  {
    "Year": 1990,
    "LV": "Delta 6925"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1990,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1990,
    "LV": "Chang Zheng 3"
  },
  {
    "Year": 1990,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1990,
    "LV": "H-1"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1990,
    "LV": "Delta 6920-8"
  },
  {
    "Year": 1990,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1990,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1990,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1990,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1990,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1990,
    "LV": "Commercial Titan 3"
  },
  {
    "Year": 1990,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1990,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1990,
    "LV": "Delta 6925"
  },
  {
    "Year": 1990,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1990,
    "LV": "Shavit"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1990,
    "LV": "Pegasus"
  },
  {
    "Year": 1990,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1990,
    "LV": "Chang Zheng 3"
  },
  {
    "Year": 1990,
    "LV": "Atlas E Altair"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1990,
    "LV": "Delta 6925-8"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1990,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1990,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1990,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1990,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1990,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1990,
    "LV": "Scout G-1"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1990,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1990,
    "LV": "Zenit-2"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1990,
    "LV": "Proton-K"
  },
  {
    "Year": 1990,
    "LV": "Delta 6920-10"
  },
  {
    "Year": 1990,
    "LV": "Titan 405A"
  },
  {
    "Year": 1990,
    "LV": "Delta 4925-8"
  },
  {
    "Year": 1990,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1990,
    "LV": "Proton-K/DM"
  },
  {
    "Year": 1990,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1990,
    "LV": "Commercial Titan 3"
  },
  {
    "Year": 1990,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1990,
    "LV": "Chang Zheng 2E"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1990,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1990,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1990,
    "LV": "Molniya 8K78M-PVB"
  },
  {
    "Year": 1990,
    "LV": "Atlas I"
  },
  {
    "Year": 1990,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1990,
    "LV": "Delta 6925"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1990,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1990,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1990,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1990,
    "LV": "Delta 6925"
  },
  {
    "Year": 1990,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1990,
    "LV": "Molniya 8K78M-PVB"
  },
  {
    "Year": 1990,
    "LV": "H-1"
  },
  {
    "Year": 1990,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1990,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1990,
    "LV": "Chang Zheng 4"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1990,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1990,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1990,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1990,
    "LV": "Delta 6925"
  },
  {
    "Year": 1990,
    "LV": "Zenit-2"
  },
  {
    "Year": 1990,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 1990,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1991,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1991,
    "LV": "Delta 6925"
  },
  {
    "Year": 1991,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1990,
    "LV": "Titan 402A/IUS"
  },
  {
    "Year": 1990,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1991,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1990,
    "LV": "Molniya 8K78M-PVB"
  },
  {
    "Year": 1991,
    "LV": "Ariane 42P"
  },
  {
    "Year": 1990,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1991,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1991,
    "LV": "Delta 7925"
  },
  {
    "Year": 1991,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1990,
    "LV": "Atlas E"
  },
  {
    "Year": 1990,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1990,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1990,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1990,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1991,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1990,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1990,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1991,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1991,
    "LV": "Delta 7925"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1991,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1991,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1991,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1991,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1991,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1991,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1991,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1991,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1991,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1991,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1991,
    "LV": "Titan 403A"
  },
  {
    "Year": 1991,
    "LV": "Delta 6925"
  },
  {
    "Year": 1991,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1991,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1991,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1991,
    "LV": "Proton-K"
  },
  {
    "Year": 1991,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1991,
    "LV": "Ariane 44P"
  },
  {
    "Year": 1991,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1991,
    "LV": "Delta 7925"
  },
  {
    "Year": 1991,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1991,
    "LV": "Atlas I"
  },
  {
    "Year": 1991,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1991,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1991,
    "LV": "Atlas E"
  },
  {
    "Year": 1991,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1991,
    "LV": "Delta 7925"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1991,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1991,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1991,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1991,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1991,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1991,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1991,
    "LV": "Scout G-1"
  },
  {
    "Year": 1991,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1991,
    "LV": "Delta 7925"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1991,
    "LV": "Ariane 40"
  },
  {
    "Year": 1991,
    "LV": "Pegasus/HAPS"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1991,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1991,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1991,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1991,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1991,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1991,
    "LV": "H-1"
  },
  {
    "Year": 1991,
    "LV": "Vostok 8A92M"
  },
  {
    "Year": 1991,
    "LV": "Mu-3S-II"
  },
  {
    "Year": 1991,
    "LV": "Zenit-2"
  },
  {
    "Year": 1991,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1991,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1991,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1992,
    "LV": "Ariane 44P"
  },
  {
    "Year": 1991,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1991,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1991,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1991,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1992,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1991,
    "LV": "Titan 403A"
  },
  {
    "Year": 1992,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1992,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1992,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1992,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1991,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1991,
    "LV": "Atlas E"
  },
  {
    "Year": 1991,
    "LV": "Atlas II"
  },
  {
    "Year": 1992,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1992,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1991,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1992,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1991,
    "LV": "Chang Zheng 3"
  },
  {
    "Year": 1992,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1992,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1992,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1992,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1992,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1992,
    "LV": "Zenit-2"
  },
  {
    "Year": 1992,
    "LV": "Atlas II"
  },
  {
    "Year": 1992,
    "LV": "H-1"
  },
  {
    "Year": 1992,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1992,
    "LV": "Delta 7925"
  },
  {
    "Year": 1992,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1992,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1992,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1992,
    "LV": "Atlas I"
  },
  {
    "Year": 1992,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1992,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1992,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1992,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1992,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1992,
    "LV": "Delta 7925"
  },
  {
    "Year": 1992,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1992,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1992,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1992,
    "LV": "Titan II SLV"
  },
  {
    "Year": 1992,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1992,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1992,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1992,
    "LV": "Delta 7925"
  },
  {
    "Year": 1992,
    "LV": "ASLV"
  },
  {
    "Year": 1992,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1992,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1992,
    "LV": "Delta 6920-10"
  },
  {
    "Year": 1992,
    "LV": "Atlas IIA"
  },
  {
    "Year": 1992,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1992,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1992,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1992,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1992,
    "LV": "Atlas II"
  },
  {
    "Year": 1992,
    "LV": "Scout G-1"
  },
  {
    "Year": 1992,
    "LV": "Delta 7925"
  },
  {
    "Year": 1992,
    "LV": "Molniya 8K78M-PVB"
  },
  {
    "Year": 1992,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1992,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1992,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1992,
    "LV": "Delta 6925"
  },
  {
    "Year": 1992,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1992,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1992,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1992,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1992,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1992,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1992,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 1992,
    "LV": "Ariane 42P"
  },
  {
    "Year": 1992,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1992,
    "LV": "Chang Zheng 2E"
  },
  {
    "Year": 1992,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1992,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1992,
    "LV": "Atlas I"
  },
  {
    "Year": 1992,
    "LV": "Delta 7925"
  },
  {
    "Year": 1992,
    "LV": "Delta 7925"
  },
  {
    "Year": 1992,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1992,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1992,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1992,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1992,
    "LV": "Commercial Titan 3"
  },
  {
    "Year": 1992,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 1992,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1992,
    "LV": "Delta 7925"
  },
  {
    "Year": 1993,
    "LV": "Molniya 8K78M-PVB"
  },
  {
    "Year": 1992,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1992,
    "LV": "Molniya 8K78M-PVB"
  },
  {
    "Year": 1993,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1992,
    "LV": "Ariane 42P"
  },
  {
    "Year": 1992,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1992,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1992,
    "LV": "Zenit-2"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1992,
    "LV": "Scout G-1"
  },
  {
    "Year": 1993,
    "LV": "Delta 7925"
  },
  {
    "Year": 1992,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1993,
    "LV": "Molniya 8K78M-PVB"
  },
  {
    "Year": 1993,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1992,
    "LV": "Titan 404A"
  },
  {
    "Year": 1993,
    "LV": "Ariane 42P"
  },
  {
    "Year": 1992,
    "LV": "Molniya 8K78M-PVB"
  },
  {
    "Year": 1993,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1993,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1993,
    "LV": "Delta 7925"
  },
  {
    "Year": 1992,
    "LV": "Chang Zheng 2E"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1993,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1992,
    "LV": "Zenit-2"
  },
  {
    "Year": 1993,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1993,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1993,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1993,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1993,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1993,
    "LV": "Delta 7925"
  },
  {
    "Year": 1993,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1993,
    "LV": "Pegasus"
  },
  {
    "Year": 1993,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1993,
    "LV": "Mu-3S-II"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1993,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1993,
    "LV": "Start-1"
  },
  {
    "Year": 1993,
    "LV": "Atlas I"
  },
  {
    "Year": 1993,
    "LV": "Zenit-2"
  },
  {
    "Year": 1993,
    "LV": "Delta 7925"
  },
  {
    "Year": 1993,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1993,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1993,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1993,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1993,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1993,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1993,
    "LV": "Pegasus"
  },
  {
    "Year": 1993,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1993,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1993,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1993,
    "LV": "Ariane 42L"
  },
  {
    "Year": 1993,
    "LV": "Delta 7925"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1993,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1993,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1993,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1993,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1993,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1993,
    "LV": "Ariane 42P"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1993,
    "LV": "Scout G-1"
  },
  {
    "Year": 1993,
    "LV": "Delta 7925"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1993,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1993,
    "LV": "Atlas II"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1993,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1993,
    "LV": "Titan 403A"
  },
  {
    "Year": 1993,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1993,
    "LV": "Atlas E"
  },
  {
    "Year": 1993,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1993,
    "LV": "Delta 7925"
  },
  {
    "Year": 1993,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1993,
    "LV": "Atlas I"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1993,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1993,
    "LV": "Zenit-2"
  },
  {
    "Year": 1993,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1993,
    "LV": "PSLV"
  },
  {
    "Year": 1993,
    "LV": "Ariane 40"
  },
  {
    "Year": 1993,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1993,
    "LV": "Titan II SLV"
  },
  {
    "Year": 1993,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 1994,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1993,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1993,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1993,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1994,
    "LV": "Delta 7925"
  },
  {
    "Year": 1993,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1993,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1993,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1994,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1993,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1994,
    "LV": "Atlas II"
  },
  {
    "Year": 1993,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1993,
    "LV": "Delta 7925"
  },
  {
    "Year": 1993,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 1993,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1994,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1994,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1994,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 1994,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1994,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1994,
    "LV": "Titan II SLV"
  },
  {
    "Year": 1994,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1994,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1994,
    "LV": "H-II"
  },
  {
    "Year": 1994,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1994,
    "LV": "Titan 401A/Centaur"
  },
  {
    "Year": 1994,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 1994,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1994,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1994,
    "LV": "Delta 7925-8"
  },
  {
    "Year": 1994,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1994,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1994,
    "LV": "Delta 7925"
  },
  {
    "Year": 1994,
    "LV": "ARPA Taurus"
  },
  {
    "Year": 1994,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1994,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1994,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1994,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1994,
    "LV": "Atlas I"
  },
  {
    "Year": 1994,
    "LV": "Zenit-2"
  },
  {
    "Year": 1994,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1994,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1994,
    "LV": "Titan 401A/Centaur"
  },
  {
    "Year": 1994,
    "LV": "ASLV"
  },
  {
    "Year": 1994,
    "LV": "Scout G-1"
  },
  {
    "Year": 1994,
    "LV": "Pegasus/HAPS"
  },
  {
    "Year": 1994,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1994,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1994,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1994,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1994,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1994,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1994,
    "LV": "Atlas I"
  },
  {
    "Year": 1994,
    "LV": "Pegasus XL"
  },
  {
    "Year": 1994,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1994,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 1994,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1994,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1994,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1994,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1994,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1994,
    "LV": "Chang Zheng 3"
  },
  {
    "Year": 1994,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1994,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1994,
    "LV": "Pegasus"
  },
  {
    "Year": 1994,
    "LV": "Atlas IIA"
  },
  {
    "Year": 1994,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1994,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1994,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1994,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1994,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1994,
    "LV": "Zenit-2"
  },
  {
    "Year": 1994,
    "LV": "Titan 401A/Centaur"
  },
  {
    "Year": 1994,
    "LV": "Chang Zheng 2E"
  },
  {
    "Year": 1994,
    "LV": "H-II"
  },
  {
    "Year": 1994,
    "LV": "Atlas E"
  },
  {
    "Year": 1994,
    "LV": "Ariane 42L"
  },
  {
    "Year": 1994,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1994,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1994,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1994,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1995,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1994,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 1994,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1994,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1994,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 1994,
    "LV": "PSLV"
  },
  {
    "Year": 1994,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1994,
    "LV": "Ariane 42P"
  },
  {
    "Year": 1994,
    "LV": "Delta 7925-10"
  },
  {
    "Year": 1994,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1995,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1994,
    "LV": "Zenit-2"
  },
  {
    "Year": 1994,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1994,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1994,
    "LV": "Zenit-2"
  },
  {
    "Year": 1994,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1995,
    "LV": "Atlas IIA"
  },
  {
    "Year": 1994,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 1995,
    "LV": "Ariane 42P"
  },
  {
    "Year": 1995,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1995,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1994,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1995,
    "LV": "Titan 402A/IUS"
  },
  {
    "Year": 1994,
    "LV": "Rokot"
  },
  {
    "Year": 1995,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1995,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1995,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1994,
    "LV": "Atlas E"
  },
  {
    "Year": 1995,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 1995,
    "LV": "Mu-3S-II"
  },
  {
    "Year": 1995,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1995,
    "LV": "Chang Zheng 2E"
  },
  {
    "Year": 1995,
    "LV": "Atlas II"
  },
  {
    "Year": 1995,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1995,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1995,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1995,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1995,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1995,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1995,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1995,
    "LV": "H-II"
  },
  {
    "Year": 1995,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1995,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 1995,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1995,
    "LV": "Atlas E"
  },
  {
    "Year": 1995,
    "LV": "Start"
  },
  {
    "Year": 1995,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1995,
    "LV": "Pegasus H"
  },
  {
    "Year": 1995,
    "LV": "Shavit 1"
  },
  {
    "Year": 1995,
    "LV": "Atlas IIA"
  },
  {
    "Year": 1995,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1995,
    "LV": "Ariane 40"
  },
  {
    "Year": 1995,
    "LV": "Titan 401A/Centaur"
  },
  {
    "Year": 1995,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1995,
    "LV": "Proton-K"
  },
  {
    "Year": 1995,
    "LV": "Atlas I"
  },
  {
    "Year": 1995,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1995,
    "LV": "Atlas II"
  },
  {
    "Year": 1995,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1995,
    "LV": "Ariane 42P"
  },
  {
    "Year": 1995,
    "LV": "Pegasus XL"
  },
  {
    "Year": 1995,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1995,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1995,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1995,
    "LV": "Ariane 40"
  },
  {
    "Year": 1995,
    "LV": "Titan 401A/Centaur"
  },
  {
    "Year": 1995,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1995,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1995,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1995,
    "LV": "Atlas IIA"
  },
  {
    "Year": 1995,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1995,
    "LV": "Ariane 42L"
  },
  {
    "Year": 1995,
    "LV": "Delta 7925"
  },
  {
    "Year": 1995,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1995,
    "LV": "LLV-1"
  },
  {
    "Year": 1995,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 1995,
    "LV": "Ariane 44P"
  },
  {
    "Year": 1995,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1995,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1995,
    "LV": "Soyuz-U2"
  },
  {
    "Year": 1995,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1995,
    "LV": "Ariane 42L"
  },
  {
    "Year": 1995,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1995,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1995,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1995,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1995,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1995,
    "LV": "Ariane 42L"
  },
  {
    "Year": 1995,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1995,
    "LV": "Atlas II"
  },
  {
    "Year": 1995,
    "LV": "Conestoga 1620"
  },
  {
    "Year": 1996,
    "LV": "Zenit-2"
  },
  {
    "Year": 1996,
    "LV": "Delta 7920-10"
  },
  {
    "Year": 1995,
    "LV": "Titan 401A/Centaur"
  },
  {
    "Year": 1996,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1995,
    "LV": "Ariane 44P"
  },
  {
    "Year": 1996,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1996,
    "LV": "Chang Zheng 2E"
  },
  {
    "Year": 1995,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 1996,
    "LV": "Titan 404A"
  },
  {
    "Year": 1996,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1995,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1995,
    "LV": "Atlas IIA"
  },
  {
    "Year": 1996,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1995,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1995,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1995,
    "LV": "Chang Zheng 2E"
  },
  {
    "Year": 1996,
    "LV": "Delta 7920-10"
  },
  {
    "Year": 1996,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1996,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1996,
    "LV": "Delta 7925"
  },
  {
    "Year": 1996,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1996,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1996,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 1996,
    "LV": "Ariane 44P"
  },
  {
    "Year": 1996,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 1996,
    "LV": "Delta 7925-8"
  },
  {
    "Year": 1996,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1996,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1996,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1996,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1996,
    "LV": "Delta 7925-10"
  },
  {
    "Year": 1996,
    "LV": "Pegasus XL"
  },
  {
    "Year": 1996,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1996,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1996,
    "LV": "PSLV"
  },
  {
    "Year": 1996,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1996,
    "LV": "Delta 7925"
  },
  {
    "Year": 1996,
    "LV": "Atlas IIA"
  },
  {
    "Year": 1996,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 1996,
    "LV": "Ariane 42P"
  },
  {
    "Year": 1996,
    "LV": "Proton-K"
  },
  {
    "Year": 1996,
    "LV": "Delta 7920-10"
  },
  {
    "Year": 1996,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1996,
    "LV": "Titan 401A/Centaur"
  },
  {
    "Year": 1996,
    "LV": "Atlas I"
  },
  {
    "Year": 1996,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1996,
    "LV": "Titan 403A"
  },
  {
    "Year": 1996,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1996,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1996,
    "LV": "Pegasus H"
  },
  {
    "Year": 1996,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1996,
    "LV": "Delta 7925"
  },
  {
    "Year": 1996,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1996,
    "LV": "Ariane 5G"
  },
  {
    "Year": 1996,
    "LV": "Ariane 44P"
  },
  {
    "Year": 1996,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1996,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1996,
    "LV": "Pegasus XL"
  },
  {
    "Year": 1996,
    "LV": "Titan 405A"
  },
  {
    "Year": 1996,
    "LV": "Chang Zheng 3"
  },
  {
    "Year": 1996,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1996,
    "LV": "Delta 7925"
  },
  {
    "Year": 1996,
    "LV": "Atlas II"
  },
  {
    "Year": 1996,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1996,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1996,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1996,
    "LV": "H-II"
  },
  {
    "Year": 1996,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1996,
    "LV": "Chang Zheng 3"
  },
  {
    "Year": 1996,
    "LV": "Pegasus XL"
  },
  {
    "Year": 1996,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1996,
    "LV": "Zenit-2"
  },
  {
    "Year": 1996,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1996,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1996,
    "LV": "Atlas IIA"
  },
  {
    "Year": 1996,
    "LV": "Ariane 42P"
  },
  {
    "Year": 1996,
    "LV": "Delta 7925"
  },
  {
    "Year": 1996,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1996,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 1996,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 1996,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1997,
    "LV": "Pegasus XL"
  },
  {
    "Year": 1997,
    "LV": "Delta 7925"
  },
  {
    "Year": 1997,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1997,
    "LV": "Proton-K/D-2"
  },
  {
    "Year": 1997,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1997,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1997,
    "LV": "Atlas IIA"
  },
  {
    "Year": 1996,
    "LV": "Delta 7925"
  },
  {
    "Year": 1997,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1996,
    "LV": "Atlas IIA"
  },
  {
    "Year": 1996,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1997,
    "LV": "Titan 404A"
  },
  {
    "Year": 1997,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1997,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1997,
    "LV": "Delta 7925"
  },
  {
    "Year": 1997,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1997,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1997,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1997,
    "LV": "M-V"
  },
  {
    "Year": 1997,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1997,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 1997,
    "LV": "Titan 402B/IUS"
  },
  {
    "Year": 1997,
    "LV": "Ariane 44P"
  },
  {
    "Year": 1997,
    "LV": "Start-1.2"
  },
  {
    "Year": 1997,
    "LV": "Atlas IIA"
  },
  {
    "Year": 1997,
    "LV": "Titan II SLV"
  },
  {
    "Year": 1997,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1997,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1997,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1997,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1997,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1997,
    "LV": "Pegasus XL"
  },
  {
    "Year": 1997,
    "LV": "Atlas I"
  },
  {
    "Year": 1997,
    "LV": "Delta 7920-10C"
  },
  {
    "Year": 1997,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 1997,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1997,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1997,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1997,
    "LV": "Zenit-2"
  },
  {
    "Year": 1997,
    "LV": "Delta 7925"
  },
  {
    "Year": 1997,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 1997,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1997,
    "LV": "Proton-K/17S40"
  },
  {
    "Year": 1997,
    "LV": "Chang Zheng 3"
  },
  {
    "Year": 1997,
    "LV": "Proton-K/17S40"
  },
  {
    "Year": 1997,
    "LV": "Ariane 44P"
  },
  {
    "Year": 1997,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1997,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1997,
    "LV": "Delta 7920-10C"
  },
  {
    "Year": 1997,
    "LV": "Delta 7925"
  },
  {
    "Year": 1997,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 1997,
    "LV": "Pegasus XL"
  },
  {
    "Year": 1997,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1997,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1997,
    "LV": "Ariane 44P"
  },
  {
    "Year": 1997,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1997,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 1997,
    "LV": "Delta 7920-10C"
  },
  {
    "Year": 1997,
    "LV": "LMLV-1"
  },
  {
    "Year": 1997,
    "LV": "Delta 7920-8"
  },
  {
    "Year": 1997,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 1997,
    "LV": "Pegasus XL"
  },
  {
    "Year": 1997,
    "LV": "Chang Zheng 2C-III/SD"
  },
  {
    "Year": 1997,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1997,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 1997,
    "LV": "Proton-K/17S40"
  },
  {
    "Year": 1997,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1997,
    "LV": "Ariane 42L"
  },
  {
    "Year": 1997,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1997,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1997,
    "LV": "Delta 7920-10C"
  },
  {
    "Year": 1997,
    "LV": "PSLV"
  },
  {
    "Year": 1997,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1997,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 1997,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1997,
    "LV": "Titan 401B/Centaur"
  },
  {
    "Year": 1997,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 1997,
    "LV": "Pegasus XL"
  },
  {
    "Year": 1997,
    "LV": "Titan 403A"
  },
  {
    "Year": 1997,
    "LV": "Atlas IIA"
  },
  {
    "Year": 1997,
    "LV": "Ariane 5G"
  },
  {
    "Year": 1997,
    "LV": "VLS-1"
  },
  {
    "Year": 1997,
    "LV": "Delta 7925"
  },
  {
    "Year": 1997,
    "LV": "Titan 401A/Centaur"
  },
  {
    "Year": 1997,
    "LV": "Delta 7920-10C"
  },
  {
    "Year": 1998,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 1997,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1998,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1998,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1997,
    "LV": "H-II"
  },
  {
    "Year": 1997,
    "LV": "Ariane 44P"
  },
  {
    "Year": 1998,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 1997,
    "LV": "Chang Zheng 2C-III/SD"
  },
  {
    "Year": 1998,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 1997,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 1998,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1997,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1997,
    "LV": "Delta 7920-10C"
  },
  {
    "Year": 1997,
    "LV": "Ariane 42L"
  },
  {
    "Year": 1998,
    "LV": "Pegasus XL/HAPS"
  },
  {
    "Year": 1998,
    "LV": "Start-1"
  },
  {
    "Year": 1998,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 1998,
    "LV": "Athena-2"
  },
  {
    "Year": 1998,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 1998,
    "LV": "Shavit 1"
  },
  {
    "Year": 1998,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1998,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1998,
    "LV": "Atlas IIA"
  },
  {
    "Year": 1998,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1998,
    "LV": "Taurus 2210"
  },
  {
    "Year": 1998,
    "LV": "Delta 7420-10C"
  },
  {
    "Year": 1998,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1998,
    "LV": "Delta 7920-10C"
  },
  {
    "Year": 1998,
    "LV": "H-II"
  },
  {
    "Year": 1998,
    "LV": "Pegasus XL"
  },
  {
    "Year": 1998,
    "LV": "Ariane 42P"
  },
  {
    "Year": 1998,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 1998,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1998,
    "LV": "Atlas II"
  },
  {
    "Year": 1998,
    "LV": "Ariane 40"
  },
  {
    "Year": 1998,
    "LV": "Chang Zheng 2C-III/SD"
  },
  {
    "Year": 1998,
    "LV": "Delta 7920-10C"
  },
  {
    "Year": 1998,
    "LV": "Pegasus XL"
  },
  {
    "Year": 1998,
    "LV": "Proton-K/17S40"
  },
  {
    "Year": 1998,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1998,
    "LV": "Delta 7420-10C"
  },
  {
    "Year": 1998,
    "LV": "Ariane 44P"
  },
  {
    "Year": 1998,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1998,
    "LV": "Chang Zheng 2C-III/SD"
  },
  {
    "Year": 1998,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1998,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 1998,
    "LV": "Titan 401B/Centaur"
  },
  {
    "Year": 1998,
    "LV": "Titan II SLV"
  },
  {
    "Year": 1998,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1998,
    "LV": "Delta 7920-10C"
  },
  {
    "Year": 1998,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 1998,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1998,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 1998,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 1998,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 1998,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1998,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1998,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1998,
    "LV": "M-V"
  },
  {
    "Year": 1998,
    "LV": "Shtil'-1"
  },
  {
    "Year": 1998,
    "LV": "Zenit-2"
  },
  {
    "Year": 1998,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 1998,
    "LV": "Zenit-2"
  },
  {
    "Year": 1998,
    "LV": "Pegasus XL/HAPS"
  },
  {
    "Year": 1998,
    "LV": "Titan 401A/Centaur"
  },
  {
    "Year": 1998,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1998,
    "LV": "Chang Zheng 2C-III/SD"
  },
  {
    "Year": 1998,
    "LV": "Ariane 44P"
  },
  {
    "Year": 1998,
    "LV": "Delta 8930"
  },
  {
    "Year": 1998,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 1998,
    "LV": "Paektusan 1"
  },
  {
    "Year": 1998,
    "LV": "Delta 7920-10C"
  },
  {
    "Year": 1998,
    "LV": "Zenit-2 11K77.05"
  },
  {
    "Year": 1998,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1998,
    "LV": "Pegasus XL/HAPS"
  },
  {
    "Year": 1999,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1998,
    "LV": "ARPA Taurus"
  },
  {
    "Year": 1998,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1999,
    "LV": "Atlas IIA"
  },
  {
    "Year": 1998,
    "LV": "Atlas IIA"
  },
  {
    "Year": 1998,
    "LV": "Ariane 5G"
  },
  {
    "Year": 1998,
    "LV": "Pegasus H"
  },
  {
    "Year": 1998,
    "LV": "Delta 7326-9.5"
  },
  {
    "Year": 1998,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1999,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1999,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1998,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 1998,
    "LV": "Delta 7920-10C"
  },
  {
    "Year": 1998,
    "LV": "Proton-K"
  },
  {
    "Year": 1999,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 1998,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1998,
    "LV": "Ariane 42L"
  },
  {
    "Year": 1998,
    "LV": "Pegasus XL"
  },
  {
    "Year": 1999,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1999,
    "LV": "Delta 7425-9.5"
  },
  {
    "Year": 1999,
    "LV": "Chang Zheng 2C-III/SD"
  },
  {
    "Year": 1998,
    "LV": "Ariane 42L"
  },
  {
    "Year": 1999,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1999,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1999,
    "LV": "Delta 7425-9.5"
  },
  {
    "Year": 1999,
    "LV": "Athena-1"
  },
  {
    "Year": 1999,
    "LV": "Delta 7426-9.5"
  },
  {
    "Year": 1999,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1999,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 1999,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 1999,
    "LV": "Soyuz-U"
  },
  {
    "Year": 1999,
    "LV": "Delta 7920-10"
  },
  {
    "Year": 1999,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1999,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1999,
    "LV": "Pegasus XL"
  },
  {
    "Year": 1999,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1999,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 1999,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 1999,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1999,
    "LV": "Ariane 42P"
  },
  {
    "Year": 1999,
    "LV": "Titan 402B/IUS"
  },
  {
    "Year": 1999,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 1999,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1999,
    "LV": "Delta 7920-10"
  },
  {
    "Year": 1999,
    "LV": "Dnepr"
  },
  {
    "Year": 1999,
    "LV": "Athena-2"
  },
  {
    "Year": 1999,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1999,
    "LV": "Titan 401B/Centaur"
  },
  {
    "Year": 1999,
    "LV": "Delta 8930"
  },
  {
    "Year": 1999,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 1999,
    "LV": "Pegasus XL/HAPS"
  },
  {
    "Year": 1999,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 1999,
    "LV": "Titan 404B"
  },
  {
    "Year": 1999,
    "LV": "PSLV"
  },
  {
    "Year": 1999,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1999,
    "LV": "Delta 7420-10C"
  },
  {
    "Year": 1999,
    "LV": "Chang Zheng 2C-III/SD"
  },
  {
    "Year": 1999,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 1999,
    "LV": "Titan II SLV"
  },
  {
    "Year": 1999,
    "LV": "Delta 7320-10"
  },
  {
    "Year": 1999,
    "LV": "Proton-K/Briz-M"
  },
  {
    "Year": 1999,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 1999,
    "LV": "Delta 7420-10C"
  },
  {
    "Year": 1999,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1999,
    "LV": "Zenit-2"
  },
  {
    "Year": 1999,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1999,
    "LV": "Delta 7420-10C"
  },
  {
    "Year": 1999,
    "LV": "Ariane 42P"
  },
  {
    "Year": 1999,
    "LV": "Delta 7420-10C"
  },
  {
    "Year": 1999,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1999,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 1999,
    "LV": "Ariane 42P"
  },
  {
    "Year": 1999,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 1999,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1999,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1999,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 1999,
    "LV": "Athena-2"
  },
  {
    "Year": 1999,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1999,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 1999,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1999,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 1999,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 1999,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 1999,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1999,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 2000,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 1999,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 1999,
    "LV": "H-II"
  },
  {
    "Year": 2000,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2000,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 1999,
    "LV": "Atlas IIA"
  },
  {
    "Year": 2000,
    "LV": "Ariane 40"
  },
  {
    "Year": 1999,
    "LV": "Pegasus XL/HAPS"
  },
  {
    "Year": 2000,
    "LV": "Ariane 5G"
  },
  {
    "Year": 1999,
    "LV": "VLS-1"
  },
  {
    "Year": 2000,
    "LV": "Titan II SLV"
  },
  {
    "Year": 2000,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 1999,
    "LV": "Space Shuttle"
  },
  {
    "Year": 1999,
    "LV": "Taurus 2110"
  },
  {
    "Year": 1999,
    "LV": "Ariane 44L"
  },
  {
    "Year": 1999,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 2000,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 2000,
    "LV": "Atlas IIA"
  },
  {
    "Year": 2000,
    "LV": "Ariane 42L"
  },
  {
    "Year": 2000,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2000,
    "LV": "Minotaur I"
  },
  {
    "Year": 2000,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2000,
    "LV": "Zenit-2"
  },
  {
    "Year": 2000,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 2000,
    "LV": "Delta 7420-10C"
  },
  {
    "Year": 2000,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2000,
    "LV": "M-V"
  },
  {
    "Year": 2000,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2000,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2000,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 2000,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2000,
    "LV": "Taurus 1110"
  },
  {
    "Year": 2000,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2000,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2000,
    "LV": "Ariane 5G"
  },
  {
    "Year": 2000,
    "LV": "Delta 7326-9.5"
  },
  {
    "Year": 2000,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2000,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2000,
    "LV": "Ariane 42L"
  },
  {
    "Year": 2000,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2000,
    "LV": "Atlas IIA"
  },
  {
    "Year": 2000,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2000,
    "LV": "Titan 402B/IUS"
  },
  {
    "Year": 2000,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2000,
    "LV": "Rokot"
  },
  {
    "Year": 2000,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2000,
    "LV": "Atlas 3A"
  },
  {
    "Year": 2000,
    "LV": "Proton-K/Briz-M"
  },
  {
    "Year": 2000,
    "LV": "Pegasus XL"
  },
  {
    "Year": 2000,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2000,
    "LV": "Chang Zheng 3"
  },
  {
    "Year": 2000,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2000,
    "LV": "Atlas IIA"
  },
  {
    "Year": 2000,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2000,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 2000,
    "LV": "Proton-K"
  },
  {
    "Year": 2000,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 2000,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2000,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2000,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2000,
    "LV": "Minotaur I"
  },
  {
    "Year": 2000,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2000,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2000,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2000,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 2000,
    "LV": "Titan 403B"
  },
  {
    "Year": 2000,
    "LV": "Delta 8930"
  },
  {
    "Year": 2000,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 2000,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2000,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2000,
    "LV": "Ariane 44P"
  },
  {
    "Year": 2000,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2000,
    "LV": "Ariane 5G"
  },
  {
    "Year": 2000,
    "LV": "Titan II SLV"
  },
  {
    "Year": 2000,
    "LV": "Zenit-2"
  },
  {
    "Year": 2000,
    "LV": "Dnepr"
  },
  {
    "Year": 2000,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2000,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2000,
    "LV": "Ariane 42L"
  },
  {
    "Year": 2000,
    "LV": "Pegasus H"
  },
  {
    "Year": 2001,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2000,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 2001,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2000,
    "LV": "Atlas IIA"
  },
  {
    "Year": 2000,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2001,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2000,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 2000,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2000,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2001,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2000,
    "LV": "Ariane 5G"
  },
  {
    "Year": 2000,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2001,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2001,
    "LV": "Delta 7320-10"
  },
  {
    "Year": 2000,
    "LV": "Ariane 44L"
  },
  {
    "Year": 2001,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2000,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2000,
    "LV": "Start-1"
  },
  {
    "Year": 2000,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 2000,
    "LV": "Ariane 5G"
  },
  {
    "Year": 2000,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2000,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 2001,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2001,
    "LV": "Ariane 44P"
  },
  {
    "Year": 2001,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2001,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2001,
    "LV": "Ariane 44L"
  },
  {
    "Year": 2001,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2001,
    "LV": "Start-1"
  },
  {
    "Year": 2001,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2001,
    "LV": "Titan 401B/Centaur"
  },
  {
    "Year": 2001,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2001,
    "LV": "Ariane 5G"
  },
  {
    "Year": 2001,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2001,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2001,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2001,
    "LV": "GSLV Mk I"
  },
  {
    "Year": 2001,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2001,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2001,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2001,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2001,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2001,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2001,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2001,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2001,
    "LV": "Ariane 44L"
  },
  {
    "Year": 2001,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2001,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 2001,
    "LV": "Delta 7425-10"
  },
  {
    "Year": 2001,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2001,
    "LV": "Ariane 5G"
  },
  {
    "Year": 2001,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 2001,
    "LV": "Atlas IIA"
  },
  {
    "Year": 2001,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 2001,
    "LV": "Titan 402B/IUS"
  },
  {
    "Year": 2001,
    "LV": "Delta 7326-9.5"
  },
  {
    "Year": 2001,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2001,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2001,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 2001,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2001,
    "LV": "Ariane 44L"
  },
  {
    "Year": 2001,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 2001,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2001,
    "LV": "Taurus 2110"
  },
  {
    "Year": 2001,
    "LV": "Ariane 44P"
  },
  {
    "Year": 2001,
    "LV": "Athena-1"
  },
  {
    "Year": 2002,
    "LV": "Titan 404B"
  },
  {
    "Year": 2001,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 2001,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 2002,
    "LV": "Delta 7320-10"
  },
  {
    "Year": 2001,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2001,
    "LV": "PSLV"
  },
  {
    "Year": 2001,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 2002,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2001,
    "LV": "Ariane 44LP"
  },
  {
    "Year": 2002,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 2002,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2002,
    "LV": "Delta 7920-10"
  },
  {
    "Year": 2002,
    "LV": "Zenit-2"
  },
  {
    "Year": 2001,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 2001,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 2002,
    "LV": "Titan 401B/Centaur"
  },
  {
    "Year": 2002,
    "LV": "Ariane 42L"
  },
  {
    "Year": 2002,
    "LV": "H-IIA 2024"
  },
  {
    "Year": 2002,
    "LV": "Pegasus XL"
  },
  {
    "Year": 2002,
    "LV": "Delta 7920-10C"
  },
  {
    "Year": 2002,
    "LV": "Atlas 3B"
  },
  {
    "Year": 2002,
    "LV": "Ariane 44L"
  },
  {
    "Year": 2002,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2002,
    "LV": "Ariane 5G"
  },
  {
    "Year": 2002,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2002,
    "LV": "Atlas IIA"
  },
  {
    "Year": 2002,
    "LV": "Rokot"
  },
  {
    "Year": 2002,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2002,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2002,
    "LV": "Ariane 44L"
  },
  {
    "Year": 2002,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2002,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 2002,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2002,
    "LV": "Ariane 44L"
  },
  {
    "Year": 2002,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2002,
    "LV": "Ariane 42P"
  },
  {
    "Year": 2002,
    "LV": "Delta 7920-10L"
  },
  {
    "Year": 2002,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2002,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2002,
    "LV": "Shavit 1"
  },
  {
    "Year": 2002,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2002,
    "LV": "Ariane 44L"
  },
  {
    "Year": 2002,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2002,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2002,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2002,
    "LV": "Rokot"
  },
  {
    "Year": 2002,
    "LV": "Titan II SLV"
  },
  {
    "Year": 2002,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2002,
    "LV": "Delta 7425-9.5"
  },
  {
    "Year": 2002,
    "LV": "Ariane 5G"
  },
  {
    "Year": 2002,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2002,
    "LV": "Proton-K/17S40"
  },
  {
    "Year": 2002,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2002,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2002,
    "LV": "Ariane 5G"
  },
  {
    "Year": 2002,
    "LV": "Ariane 44L"
  },
  {
    "Year": 2002,
    "LV": "H-IIA 2024"
  },
  {
    "Year": 2002,
    "LV": "PSLV"
  },
  {
    "Year": 2002,
    "LV": "KT-1"
  },
  {
    "Year": 2002,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 2002,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2002,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2002,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2002,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2002,
    "LV": "Proton-K/17S40"
  },
  {
    "Year": 2002,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2002,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2003,
    "LV": "Delta 4M+(4,2)"
  },
  {
    "Year": 2002,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2003,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2002,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2002,
    "LV": "Atlas IIA"
  },
  {
    "Year": 2002,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2002,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2002,
    "LV": "Ariane 44L"
  },
  {
    "Year": 2003,
    "LV": "Dnepr"
  },
  {
    "Year": 2003,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 2002,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 2003,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2003,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2003,
    "LV": "Titan II SLV"
  },
  {
    "Year": 2003,
    "LV": "Delta 7320-10"
  },
  {
    "Year": 2003,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2003,
    "LV": "Pegasus XL"
  },
  {
    "Year": 2003,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2003,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2003,
    "LV": "Ariane 44L"
  },
  {
    "Year": 2003,
    "LV": "Delta 4M"
  },
  {
    "Year": 2003,
    "LV": "H-IIA 2024"
  },
  {
    "Year": 2003,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2003,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 2003,
    "LV": "Titan 401B/Centaur"
  },
  {
    "Year": 2003,
    "LV": "Ariane 5G"
  },
  {
    "Year": 2003,
    "LV": "Atlas 3B"
  },
  {
    "Year": 2003,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 2003,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2003,
    "LV": "Pegasus XL"
  },
  {
    "Year": 2003,
    "LV": "GSLV Mk I"
  },
  {
    "Year": 2003,
    "LV": "M-V"
  },
  {
    "Year": 2003,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2003,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2003,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2003,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2003,
    "LV": "Proton-K/Briz-M"
  },
  {
    "Year": 2003,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2003,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2003,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2003,
    "LV": "Ariane 5G"
  },
  {
    "Year": 2003,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 2003,
    "LV": "Pegasus XL"
  },
  {
    "Year": 2003,
    "LV": "Rokot"
  },
  {
    "Year": 2003,
    "LV": "Delta 7925H"
  },
  {
    "Year": 2003,
    "LV": "Atlas V 521"
  },
  {
    "Year": 2003,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2003,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2003,
    "LV": "Pegasus XL"
  },
  {
    "Year": 2003,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2003,
    "LV": "Delta 7920H"
  },
  {
    "Year": 2003,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2003,
    "LV": "Delta 4M"
  },
  {
    "Year": 2003,
    "LV": "Titan 401B/Centaur"
  },
  {
    "Year": 2003,
    "LV": "KT-1"
  },
  {
    "Year": 2003,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2004,
    "LV": "Ariane 5G"
  },
  {
    "Year": 2003,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2003,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2003,
    "LV": "PSLV"
  },
  {
    "Year": 2003,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2003,
    "LV": "Titan II SLV"
  },
  {
    "Year": 2003,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2003,
    "LV": "Rokot"
  },
  {
    "Year": 2003,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2003,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2003,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2003,
    "LV": "H-IIA 2024"
  },
  {
    "Year": 2003,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 2003,
    "LV": "Strela"
  },
  {
    "Year": 2004,
    "LV": "Proton-K/Briz-M"
  },
  {
    "Year": 2003,
    "LV": "Atlas 3B"
  },
  {
    "Year": 2003,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2004,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2004,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2004,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2004,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2004,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2004,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 2004,
    "LV": "Titan 402B/IUS"
  },
  {
    "Year": 2004,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 2004,
    "LV": "Ariane 5G+"
  },
  {
    "Year": 2004,
    "LV": "Atlas 3A"
  },
  {
    "Year": 2004,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2004,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2004,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 2004,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 2004,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2004,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2004,
    "LV": "Delta 7920-10C"
  },
  {
    "Year": 2004,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2004,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2004,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 2004,
    "LV": "Taurus 3210"
  },
  {
    "Year": 2004,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2004,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 2004,
    "LV": "Zenit-2"
  },
  {
    "Year": 2004,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2004,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2004,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2004,
    "LV": "Dnepr"
  },
  {
    "Year": 2004,
    "LV": "Delta 7920-10L"
  },
  {
    "Year": 2004,
    "LV": "Ariane 5G+"
  },
  {
    "Year": 2004,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2004,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2004,
    "LV": "Delta 7925H"
  },
  {
    "Year": 2004,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2004,
    "LV": "Soyuz-U"
  },
  {
    "Year": 2004,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2004,
    "LV": "Atlas IIAS"
  },
  {
    "Year": 2004,
    "LV": "Shavit 1"
  },
  {
    "Year": 2004,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2004,
    "LV": "GSLV Mk I"
  },
  {
    "Year": 2004,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2004,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2004,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2004,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2005,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2004,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2005,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2004,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2004,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2005,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2004,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2005,
    "LV": "Delta 7320-10C"
  },
  {
    "Year": 2005,
    "LV": "Atlas V 521"
  },
  {
    "Year": 2004,
    "LV": "Ariane 5G+"
  },
  {
    "Year": 2005,
    "LV": "Delta 4H"
  },
  {
    "Year": 2005,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2005,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 2005,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 2005,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2005,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2005,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2005,
    "LV": "Atlas 3B"
  },
  {
    "Year": 2005,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2005,
    "LV": "H-IIA 2022"
  },
  {
    "Year": 2005,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2005,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2005,
    "LV": "Atlas V 431"
  },
  {
    "Year": 2005,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2005,
    "LV": "Minotaur I"
  },
  {
    "Year": 2005,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2005,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2005,
    "LV": "Pegasus XL/HAPS"
  },
  {
    "Year": 2005,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2005,
    "LV": "Titan 405B"
  },
  {
    "Year": 2005,
    "LV": "PSLV"
  },
  {
    "Year": 2005,
    "LV": "Delta 7320-10C"
  },
  {
    "Year": 2005,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2005,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2005,
    "LV": "KT-1"
  },
  {
    "Year": 2005,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2005,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 2005,
    "LV": "Volna"
  },
  {
    "Year": 2005,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2005,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 2005,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2005,
    "LV": "M-V"
  },
  {
    "Year": 2005,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2005,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2005,
    "LV": "Ariane 5GS"
  },
  {
    "Year": 2005,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2005,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2005,
    "LV": "Dnepr"
  },
  {
    "Year": 2005,
    "LV": "Rokot"
  },
  {
    "Year": 2005,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2005,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2005,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2005,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2005,
    "LV": "Minotaur I"
  },
  {
    "Year": 2005,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2005,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2005,
    "LV": "Rokot"
  },
  {
    "Year": 2005,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2005,
    "LV": "Ariane 5GS"
  },
  {
    "Year": 2005,
    "LV": "Titan 404B"
  },
  {
    "Year": 2005,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2006,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2005,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2006,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2006,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2006,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2005,
    "LV": "Ariane 5GS"
  },
  {
    "Year": 2005,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 2005,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2005,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2006,
    "LV": "Atlas V 551"
  },
  {
    "Year": 2006,
    "LV": "H-IIA 2022"
  },
  {
    "Year": 2006,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2006,
    "LV": "H-IIA 2024"
  },
  {
    "Year": 2006,
    "LV": "M-V"
  },
  {
    "Year": 2006,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2006,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2006,
    "LV": "Pegasus XL"
  },
  {
    "Year": 2006,
    "LV": "Falcon 1"
  },
  {
    "Year": 2006,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2006,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2006,
    "LV": "Minotaur I"
  },
  {
    "Year": 2006,
    "LV": "Atlas V 411"
  },
  {
    "Year": 2006,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2006,
    "LV": "Start-1"
  },
  {
    "Year": 2006,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2006,
    "LV": "Delta 7420-10C"
  },
  {
    "Year": 2006,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2006,
    "LV": "Delta 4M+(4,2)"
  },
  {
    "Year": 2006,
    "LV": "Shtil'-1"
  },
  {
    "Year": 2006,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2006,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2006,
    "LV": "Proton-K/DM-2M"
  },
  {
    "Year": 2006,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2006,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2006,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2006,
    "LV": "Tsiklon-2"
  },
  {
    "Year": 2006,
    "LV": "Delta 4M+(4,2)"
  },
  {
    "Year": 2006,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2006,
    "LV": "GSLV Mk I"
  },
  {
    "Year": 2006,
    "LV": "Dnepr"
  },
  {
    "Year": 2006,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 2006,
    "LV": "Dnepr"
  },
  {
    "Year": 2006,
    "LV": "Rokot"
  },
  {
    "Year": 2006,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2006,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2006,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2006,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2006,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2006,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2006,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2006,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2006,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2006,
    "LV": "M-V"
  },
  {
    "Year": 2006,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2006,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2006,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2006,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2006,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2006,
    "LV": "Delta 7925-10L"
  },
  {
    "Year": 2006,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2007,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2006,
    "LV": "Delta 4M"
  },
  {
    "Year": 2007,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2006,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2006,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2006,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2006,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2007,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2007,
    "LV": "Delta 7920-10C"
  },
  {
    "Year": 2007,
    "LV": "Minotaur I"
  },
  {
    "Year": 2006,
    "LV": "H-IIA 204"
  },
  {
    "Year": 2007,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2006,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2007,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 2007,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2007,
    "LV": "PSLV"
  },
  {
    "Year": 2007,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2007,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2007,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2007,
    "LV": "Delta 7925-10C"
  },
  {
    "Year": 2007,
    "LV": "H-IIA 2024"
  },
  {
    "Year": 2007,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2007,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2007,
    "LV": "Falcon 1"
  },
  {
    "Year": 2007,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2007,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2007,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2007,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2007,
    "LV": "Dnepr"
  },
  {
    "Year": 2007,
    "LV": "PSLV"
  },
  {
    "Year": 2007,
    "LV": "Minotaur I"
  },
  {
    "Year": 2007,
    "LV": "Pegasus XL"
  },
  {
    "Year": 2007,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2007,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2007,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2007,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2007,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2007,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2007,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2007,
    "LV": "Delta 7420-10C"
  },
  {
    "Year": 2007,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2007,
    "LV": "Shavit 2"
  },
  {
    "Year": 2007,
    "LV": "Dnepr"
  },
  {
    "Year": 2007,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2007,
    "LV": "Dnepr"
  },
  {
    "Year": 2007,
    "LV": "Zenit-2M"
  },
  {
    "Year": 2007,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2007,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2007,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2007,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2007,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2007,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2007,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2007,
    "LV": "GSLV Mk I"
  },
  {
    "Year": 2007,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2007,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2007,
    "LV": "H-IIA 2022"
  },
  {
    "Year": 2007,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2007,
    "LV": "Delta 7920-10C"
  },
  {
    "Year": 2007,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2007,
    "LV": "Delta 7925H"
  },
  {
    "Year": 2007,
    "LV": "Ariane 5GS"
  },
  {
    "Year": 2007,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2007,
    "LV": "Atlas V 421"
  },
  {
    "Year": 2007,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2008,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2007,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 2007,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2007,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2007,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 2007,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2007,
    "LV": "Delta 4H"
  },
  {
    "Year": 2008,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2007,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2008,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2007,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2007,
    "LV": "Delta 7420-10C"
  },
  {
    "Year": 2008,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2008,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2008,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2008,
    "LV": "Ariane 5GS"
  },
  {
    "Year": 2007,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2008,
    "LV": "Proton-M/DM-2"
  },
  {
    "Year": 2008,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2008,
    "LV": "PSLV"
  },
  {
    "Year": 2008,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2008,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2008,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2008,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2008,
    "LV": "H-IIA 2024"
  },
  {
    "Year": 2008,
    "LV": "Ariane 5ES/ATV"
  },
  {
    "Year": 2008,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2008,
    "LV": "Atlas V 411"
  },
  {
    "Year": 2008,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2008,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2008,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2008,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2008,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2008,
    "LV": "Atlas V 421"
  },
  {
    "Year": 2008,
    "LV": "Pegasus XL"
  },
  {
    "Year": 2008,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2008,
    "LV": "Chang Zheng 3C"
  },
  {
    "Year": 2008,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2008,
    "LV": "PSLV"
  },
  {
    "Year": 2008,
    "LV": "Zenit-3SLB"
  },
  {
    "Year": 2008,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2008,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2008,
    "LV": "Rokot"
  },
  {
    "Year": 2008,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2008,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2008,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2008,
    "LV": "Delta 7920H"
  },
  {
    "Year": 2008,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2008,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2008,
    "LV": "Delta 7320-10C"
  },
  {
    "Year": 2008,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 2008,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2008,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2008,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2008,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2008,
    "LV": "Falcon 1"
  },
  {
    "Year": 2008,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2008,
    "LV": "Safir"
  },
  {
    "Year": 2008,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2008,
    "LV": "Dnepr"
  },
  {
    "Year": 2008,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2008,
    "LV": "Delta 7420-10C"
  },
  {
    "Year": 2008,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2008,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2008,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2008,
    "LV": "Proton-M/DM-2"
  },
  {
    "Year": 2008,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2008,
    "LV": "Falcon 1"
  },
  {
    "Year": 2008,
    "LV": "Dnepr"
  },
  {
    "Year": 2008,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2008,
    "LV": "Pegasus XL"
  },
  {
    "Year": 2008,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2008,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2008,
    "LV": "Delta 7420-10C"
  },
  {
    "Year": 2009,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2008,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2009,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2009,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2008,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2009,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2008,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2008,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 2009,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2008,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2009,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2008,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2009,
    "LV": "Proton-M/DM-2"
  },
  {
    "Year": 2009,
    "LV": "Delta 4H"
  },
  {
    "Year": 2009,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2009,
    "LV": "Tsiklon-3"
  },
  {
    "Year": 2009,
    "LV": "Safir"
  },
  {
    "Year": 2009,
    "LV": "Delta 7320-10C"
  },
  {
    "Year": 2009,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2009,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2009,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2009,
    "LV": "Taurus 3110"
  },
  {
    "Year": 2009,
    "LV": "Zenit-3SLB"
  },
  {
    "Year": 2009,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 2009,
    "LV": "Delta 7925-10L"
  },
  {
    "Year": 2009,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2009,
    "LV": "Rokot"
  },
  {
    "Year": 2009,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2009,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2009,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2009,
    "LV": "Atlas V 421"
  },
  {
    "Year": 2009,
    "LV": "Unha-2"
  },
  {
    "Year": 2009,
    "LV": "Chang Zheng 3C"
  },
  {
    "Year": 2009,
    "LV": "PSLV"
  },
  {
    "Year": 2009,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2009,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2009,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2009,
    "LV": "Delta 7920-10C"
  },
  {
    "Year": 2009,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2009,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2009,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2009,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2009,
    "LV": "Minotaur I"
  },
  {
    "Year": 2009,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2009,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2009,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2009,
    "LV": "Zenit-3SLB"
  },
  {
    "Year": 2009,
    "LV": "Delta 4M+(4,2)"
  },
  {
    "Year": 2009,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2009,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2009,
    "LV": "Rokot"
  },
  {
    "Year": 2009,
    "LV": "Falcon 1"
  },
  {
    "Year": 2009,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2009,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2009,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2009,
    "LV": "Dnepr"
  },
  {
    "Year": 2009,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2009,
    "LV": "Delta 7925-9.5"
  },
  {
    "Year": 2009,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2009,
    "LV": "Naro-1"
  },
  {
    "Year": 2009,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2009,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2009,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2009,
    "LV": "H-IIB"
  },
  {
    "Year": 2009,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2009,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2009,
    "LV": "PSLV"
  },
  {
    "Year": 2009,
    "LV": "Delta 7920-10C"
  },
  {
    "Year": 2009,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2009,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2009,
    "LV": "Delta 7920-10C"
  },
  {
    "Year": 2009,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2009,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2009,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2009,
    "LV": "Rokot"
  },
  {
    "Year": 2010,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2009,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2010,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2010,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2009,
    "LV": "Atlas V 431"
  },
  {
    "Year": 2010,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2009,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2010,
    "LV": "Zenit-3SLB"
  },
  {
    "Year": 2009,
    "LV": "Delta 4M+(5,4)"
  },
  {
    "Year": 2009,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2010,
    "LV": "Proton-M/DM-2"
  },
  {
    "Year": 2010,
    "LV": "Delta 7320-10C"
  },
  {
    "Year": 2009,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2009,
    "LV": "Ariane 5GS"
  },
  {
    "Year": 2010,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2009,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2010,
    "LV": "Chang Zheng 3C"
  },
  {
    "Year": 2010,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2010,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2010,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2010,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2010,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2010,
    "LV": "Proton-M/DM-2"
  },
  {
    "Year": 2010,
    "LV": "Delta 4M+(4,2)"
  },
  {
    "Year": 2010,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2010,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2010,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2010,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2010,
    "LV": "Dnepr"
  },
  {
    "Year": 2010,
    "LV": "GSLV Mk II"
  },
  {
    "Year": 2010,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2010,
    "LV": "Atlas V 501"
  },
  {
    "Year": 2010,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2010,
    "LV": "Kosmos 11K65M"
  },
  {
    "Year": 2010,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2010,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2010,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2010,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2010,
    "LV": "Delta 4M+(4,2)"
  },
  {
    "Year": 2010,
    "LV": "Rokot"
  },
  {
    "Year": 2010,
    "LV": "Chang Zheng 3C"
  },
  {
    "Year": 2010,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2010,
    "LV": "Falcon 9"
  },
  {
    "Year": 2010,
    "LV": "Naro-1"
  },
  {
    "Year": 2010,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2010,
    "LV": "Dnepr"
  },
  {
    "Year": 2010,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2010,
    "LV": "Dnepr"
  },
  {
    "Year": 2010,
    "LV": "Shavit 2"
  },
  {
    "Year": 2010,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2010,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2010,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2010,
    "LV": "PSLV"
  },
  {
    "Year": 2010,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2010,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2010,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2010,
    "LV": "Atlas V 531"
  },
  {
    "Year": 2010,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2010,
    "LV": "Proton-M/DM-2"
  },
  {
    "Year": 2010,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2010,
    "LV": "Rokot"
  },
  {
    "Year": 2010,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2010,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2010,
    "LV": "Atlas V 501"
  },
  {
    "Year": 2010,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2010,
    "LV": "Minotaur IV"
  },
  {
    "Year": 2010,
    "LV": "Molniya 8K78M"
  },
  {
    "Year": 2010,
    "LV": "Chang Zheng 3C"
  },
  {
    "Year": 2010,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2011,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2010,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2010,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2010,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2010,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2011,
    "LV": "Chang Zheng 3C"
  },
  {
    "Year": 2010,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2011,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2010,
    "LV": "Delta 7420-10C"
  },
  {
    "Year": 2011,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2010,
    "LV": "Minotaur IV"
  },
  {
    "Year": 2011,
    "LV": "Delta 4H"
  },
  {
    "Year": 2011,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2010,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2011,
    "LV": "Proton-M/DM-3"
  },
  {
    "Year": 2010,
    "LV": "Falcon 9"
  },
  {
    "Year": 2011,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2011,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2010,
    "LV": "GSLV Mk I"
  },
  {
    "Year": 2011,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2010,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2011,
    "LV": "Zenit-3SLBF"
  },
  {
    "Year": 2011,
    "LV": "Delta 4H"
  },
  {
    "Year": 2011,
    "LV": "H-IIB"
  },
  {
    "Year": 2011,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2011,
    "LV": "Rokot"
  },
  {
    "Year": 2011,
    "LV": "Minotaur I"
  },
  {
    "Year": 2011,
    "LV": "Ariane 5ES/ATV"
  },
  {
    "Year": 2011,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2011,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2011,
    "LV": "Taurus 3110"
  },
  {
    "Year": 2011,
    "LV": "Atlas V 501"
  },
  {
    "Year": 2011,
    "LV": "Delta 4M+(4,2)"
  },
  {
    "Year": 2011,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2011,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2011,
    "LV": "Atlas V 411"
  },
  {
    "Year": 2011,
    "LV": "PSLV"
  },
  {
    "Year": 2011,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2011,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2011,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2011,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2011,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2011,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2011,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2011,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2011,
    "LV": "Delta 7320-10C"
  },
  {
    "Year": 2011,
    "LV": "Safir"
  },
  {
    "Year": 2011,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2011,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2011,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2011,
    "LV": "Minotaur I"
  },
  {
    "Year": 2011,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2011,
    "LV": "Space Shuttle"
  },
  {
    "Year": 2011,
    "LV": "Chang Zheng 3C"
  },
  {
    "Year": 2011,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2011,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2011,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2011,
    "LV": "Delta 4M+(4,2)"
  },
  {
    "Year": 2011,
    "LV": "Zenit-3SLBF"
  },
  {
    "Year": 2011,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2011,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2011,
    "LV": "Atlas V 551"
  },
  {
    "Year": 2011,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2011,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2011,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2011,
    "LV": "Dnepr"
  },
  {
    "Year": 2011,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2011,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2011,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2011,
    "LV": "Delta 7920H"
  },
  {
    "Year": 2011,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2011,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2011,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2011,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2011,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2011,
    "LV": "Minotaur IV+"
  },
  {
    "Year": 2011,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2011,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2011,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2011,
    "LV": "Zenit-3SLB"
  },
  {
    "Year": 2011,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2011,
    "LV": "PSLV"
  },
  {
    "Year": 2012,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2011,
    "LV": "Soyuz-ST-B"
  },
  {
    "Year": 2011,
    "LV": "Delta 7920-10C"
  },
  {
    "Year": 2011,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2012,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2011,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2012,
    "LV": "Zenit-2SB"
  },
  {
    "Year": 2011,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2011,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2011,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2012,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2012,
    "LV": "Atlas V 541"
  },
  {
    "Year": 2011,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2012,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2012,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2012,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2011,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2011,
    "LV": "Soyuz-ST-A"
  },
  {
    "Year": 2012,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2012,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2011,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2012,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2012,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2012,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2012,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2012,
    "LV": "Delta 4M+(5,4)"
  },
  {
    "Year": 2012,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2012,
    "LV": "Safir"
  },
  {
    "Year": 2012,
    "LV": "Vega"
  },
  {
    "Year": 2012,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2012,
    "LV": "Chang Zheng 3C"
  },
  {
    "Year": 2012,
    "LV": "Atlas V 551"
  },
  {
    "Year": 2012,
    "LV": "Ariane 5ES/ATV"
  },
  {
    "Year": 2012,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2012,
    "LV": "Proton-K/DM-2"
  },
  {
    "Year": 2012,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2012,
    "LV": "Delta 4M+(5,2)"
  },
  {
    "Year": 2012,
    "LV": "Unha-3"
  },
  {
    "Year": 2012,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2012,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2012,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2012,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2012,
    "LV": "Atlas V 531"
  },
  {
    "Year": 2012,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2012,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2012,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2012,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2012,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2012,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2012,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2012,
    "LV": "Falcon 9"
  },
  {
    "Year": 2012,
    "LV": "Safir"
  },
  {
    "Year": 2012,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2012,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2012,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2012,
    "LV": "Pegasus XL"
  },
  {
    "Year": 2012,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2012,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2012,
    "LV": "Delta 4H"
  },
  {
    "Year": 2012,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2012,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2012,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2012,
    "LV": "H-IIB"
  },
  {
    "Year": 2012,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2012,
    "LV": "Chang Zheng 3C"
  },
  {
    "Year": 2012,
    "LV": "Rokot"
  },
  {
    "Year": 2012,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2012,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2012,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2012,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2012,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2012,
    "LV": "PSLV"
  },
  {
    "Year": 2012,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2012,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2012,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2012,
    "LV": "Safir"
  },
  {
    "Year": 2012,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2012,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2012,
    "LV": "Delta 4M+(4,2)"
  },
  {
    "Year": 2012,
    "LV": "Falcon 9"
  },
  {
    "Year": 2012,
    "LV": "Soyuz-ST-B"
  },
  {
    "Year": 2012,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2012,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2012,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2012,
    "LV": "Chang Zheng 3C"
  },
  {
    "Year": 2012,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2013,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2013,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2012,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2013,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2013,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2012,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2013,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2012,
    "LV": "Soyuz-ST-A"
  },
  {
    "Year": 2013,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2013,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2013,
    "LV": "Atlas V 501"
  },
  {
    "Year": 2012,
    "LV": "Unha-3"
  },
  {
    "Year": 2013,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2013,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2013,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2013,
    "LV": "Rokot"
  },
  {
    "Year": 2013,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2013,
    "LV": "Naro-1"
  },
  {
    "Year": 2013,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2013,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2013,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2013,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2013,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2013,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2013,
    "LV": "PSLV"
  },
  {
    "Year": 2013,
    "LV": "Falcon 9"
  },
  {
    "Year": 2013,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2013,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2013,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2013,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2013,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2013,
    "LV": "Antares 110"
  },
  {
    "Year": 2013,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2013,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2013,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2013,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2013,
    "LV": "Vega"
  },
  {
    "Year": 2013,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2013,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2013,
    "LV": "Delta 4M+(5,4)"
  },
  {
    "Year": 2013,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2013,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2013,
    "LV": "Ariane 5ES/ATV"
  },
  {
    "Year": 2013,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2013,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2013,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2013,
    "LV": "Soyuz-ST-B"
  },
  {
    "Year": 2013,
    "LV": "Strela"
  },
  {
    "Year": 2013,
    "LV": "Pegasus XL"
  },
  {
    "Year": 2013,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2013,
    "LV": "Proton-M/DM-3"
  },
  {
    "Year": 2013,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2013,
    "LV": "Atlas V 551"
  },
  {
    "Year": 2013,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2013,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2013,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2013,
    "LV": "H-IIB"
  },
  {
    "Year": 2013,
    "LV": "Delta 4M+(5,4)"
  },
  {
    "Year": 2013,
    "LV": "Dnepr"
  },
  {
    "Year": 2013,
    "LV": "Delta 4H"
  },
  {
    "Year": 2013,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2013,
    "LV": "Zenit-3SLB"
  },
  {
    "Year": 2013,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2013,
    "LV": "Minotaur V"
  },
  {
    "Year": 2013,
    "LV": "Rokot"
  },
  {
    "Year": 2013,
    "LV": "Epsilon"
  },
  {
    "Year": 2013,
    "LV": "Atlas V 531"
  },
  {
    "Year": 2013,
    "LV": "Antares 110"
  },
  {
    "Year": 2013,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2013,
    "LV": "Kuaizhou"
  },
  {
    "Year": 2013,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2013,
    "LV": "Falcon 9"
  },
  {
    "Year": 2013,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2013,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2014,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2013,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2013,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2013,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2014,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2014,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2013,
    "LV": "Minotaur I"
  },
  {
    "Year": 2013,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2013,
    "LV": "Dnepr"
  },
  {
    "Year": 2014,
    "LV": "Rokot"
  },
  {
    "Year": 2013,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2014,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2014,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2013,
    "LV": "Falcon 9"
  },
  {
    "Year": 2013,
    "LV": "Atlas V 501"
  },
  {
    "Year": 2014,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2013,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2013,
    "LV": "Soyuz-ST-B"
  },
  {
    "Year": 2014,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2013,
    "LV": "Rokot"
  },
  {
    "Year": 2014,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2014,
    "LV": "Soyuz-2-1V"
  },
  {
    "Year": 2014,
    "LV": "GSLV Mk II"
  },
  {
    "Year": 2014,
    "LV": "Falcon 9"
  },
  {
    "Year": 2014,
    "LV": "Antares 120"
  },
  {
    "Year": 2014,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2014,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2014,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2014,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2014,
    "LV": "Delta 4M+(4,2)"
  },
  {
    "Year": 2014,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2014,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2014,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2014,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2014,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2014,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2014,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2014,
    "LV": "Soyuz-ST-A"
  },
  {
    "Year": 2014,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2014,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2014,
    "LV": "Shavit 2"
  },
  {
    "Year": 2014,
    "LV": "Atlas V 541"
  },
  {
    "Year": 2014,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2014,
    "LV": "Falcon 9"
  },
  {
    "Year": 2014,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2014,
    "LV": "Vega"
  },
  {
    "Year": 2014,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2014,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2014,
    "LV": "Delta 4M+(4,2)"
  },
  {
    "Year": 2014,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2014,
    "LV": "Rokot"
  },
  {
    "Year": 2014,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2014,
    "LV": "Zenit-3SL"
  },
  {
    "Year": 2014,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2014,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2014,
    "LV": "Dnepr"
  },
  {
    "Year": 2014,
    "LV": "PSLV"
  },
  {
    "Year": 2014,
    "LV": "Delta 7320-10C"
  },
  {
    "Year": 2014,
    "LV": "Rokot"
  },
  {
    "Year": 2014,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2014,
    "LV": "Soyuz-ST-B"
  },
  {
    "Year": 2014,
    "LV": "Antares 120"
  },
  {
    "Year": 2014,
    "LV": "Falcon 9"
  },
  {
    "Year": 2014,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2014,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2014,
    "LV": "Delta 4M+(4,2)"
  },
  {
    "Year": 2014,
    "LV": "Ariane 5ES/ATV"
  },
  {
    "Year": 2014,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2014,
    "LV": "Falcon 9"
  },
  {
    "Year": 2014,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2014,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2014,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2014,
    "LV": "Soyuz-ST-B"
  },
  {
    "Year": 2014,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2014,
    "LV": "Falcon 9"
  },
  {
    "Year": 2014,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2014,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2014,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2014,
    "LV": "Falcon 9"
  },
  {
    "Year": 2014,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2014,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2014,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2014,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2014,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2015,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2014,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2014,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2015,
    "LV": "Chang Zheng 3C"
  },
  {
    "Year": 2014,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2015,
    "LV": "Antares 130"
  },
  {
    "Year": 2014,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2015,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2014,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2014,
    "LV": "Dnepr"
  },
  {
    "Year": 2015,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2014,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2014,
    "LV": "Kuaizhou"
  },
  {
    "Year": 2015,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2015,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2014,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2015,
    "LV": "Delta 4H"
  },
  {
    "Year": 2014,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2014,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2015,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2014,
    "LV": "Atlas V 541"
  },
  {
    "Year": 2014,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2015,
    "LV": "Soyuz-ST-B"
  },
  {
    "Year": 2014,
    "LV": "Strela"
  },
  {
    "Year": 2014,
    "LV": "Angara A5"
  },
  {
    "Year": 2014,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2015,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2014,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2015,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2014,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2015,
    "LV": "Falcon 9"
  },
  {
    "Year": 2015,
    "LV": "Atlas V 551"
  },
  {
    "Year": 2015,
    "LV": "Delta 7320-10C"
  },
  {
    "Year": 2015,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2015,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2015,
    "LV": "Safir"
  },
  {
    "Year": 2015,
    "LV": "Vega"
  },
  {
    "Year": 2015,
    "LV": "Falcon 9"
  },
  {
    "Year": 2015,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2015,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2015,
    "LV": "Falcon 9"
  },
  {
    "Year": 2015,
    "LV": "Atlas V 421"
  },
  {
    "Year": 2015,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2015,
    "LV": "Delta 4M+(4,2)"
  },
  {
    "Year": 2015,
    "LV": "Dnepr"
  },
  {
    "Year": 2015,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2015,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2015,
    "LV": "Soyuz-ST-B"
  },
  {
    "Year": 2015,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2015,
    "LV": "Chang Zheng 3C/YZ-1"
  },
  {
    "Year": 2015,
    "LV": "Rokot"
  },
  {
    "Year": 2015,
    "LV": "Falcon 9"
  },
  {
    "Year": 2015,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2015,
    "LV": "Falcon 9"
  },
  {
    "Year": 2015,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2015,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2015,
    "LV": "Atlas V 501"
  },
  {
    "Year": 2015,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2015,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2015,
    "LV": "Vega"
  },
  {
    "Year": 2015,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2015,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2015,
    "LV": "Falcon 9"
  },
  {
    "Year": 2015,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2015,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2015,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2015,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2015,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2015,
    "LV": "Delta 4M+(5,4)"
  },
  {
    "Year": 2015,
    "LV": "Chang Zheng 3B/YZ-1"
  },
  {
    "Year": 2015,
    "LV": "H-IIB"
  },
  {
    "Year": 2015,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2015,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2015,
    "LV": "GSLV Mk II"
  },
  {
    "Year": 2015,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2015,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2015,
    "LV": "Atlas V 551"
  },
  {
    "Year": 2015,
    "LV": "Soyuz-ST-B"
  },
  {
    "Year": 2015,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2015,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2015,
    "LV": "Proton-M/DM-3"
  },
  {
    "Year": 2015,
    "LV": "Chang Zheng 6"
  },
  {
    "Year": 2015,
    "LV": "Rokot"
  },
  {
    "Year": 2015,
    "LV": "Chang Zheng 11"
  },
  {
    "Year": 2015,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2015,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2015,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2015,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2015,
    "LV": "Atlas V 421"
  },
  {
    "Year": 2015,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2015,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2015,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2016,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2015,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2015,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2015,
    "LV": "Super Strypi"
  },
  {
    "Year": 2015,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2015,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2015,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2015,
    "LV": "H-IIA 204"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2015,
    "LV": "Vega"
  },
  {
    "Year": 2016,
    "LV": "Soyuz-2-1V"
  },
  {
    "Year": 2016,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2015,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2016,
    "LV": "Zenit-3SLBF"
  },
  {
    "Year": 2015,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2016,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2015,
    "LV": "PSLV"
  },
  {
    "Year": 2015,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2016,
    "LV": "Soyuz-ST-B"
  },
  {
    "Year": 2015,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2015,
    "LV": "Falcon 9"
  },
  {
    "Year": 2016,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2015,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2016,
    "LV": "Falcon 9"
  },
  {
    "Year": 2016,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2016,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2016,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 3C/YZ-1"
  },
  {
    "Year": 2016,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2016,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2016,
    "LV": "Kwangmyongsong"
  },
  {
    "Year": 2016,
    "LV": "Delta 4M+(5,2)"
  },
  {
    "Year": 2016,
    "LV": "Rokot"
  },
  {
    "Year": 2016,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2016,
    "LV": "Falcon 9"
  },
  {
    "Year": 2016,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2016,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2016,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2016,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2016,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2016,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2016,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2016,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2016,
    "LV": "Falcon 9"
  },
  {
    "Year": 2016,
    "LV": "Soyuz-ST-A"
  },
  {
    "Year": 2016,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2016,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2016,
    "LV": "Falcon 9"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2016,
    "LV": "Soyuz-ST-B"
  },
  {
    "Year": 2016,
    "LV": "Falcon 9"
  },
  {
    "Year": 2016,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2016,
    "LV": "Rokot"
  },
  {
    "Year": 2016,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2016,
    "LV": "Delta 4H"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 3C"
  },
  {
    "Year": 2016,
    "LV": "Falcon 9"
  },
  {
    "Year": 2016,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2016,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2016,
    "LV": "Atlas V 551"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 7/YZ-1A"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2016,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2016,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2016,
    "LV": "Falcon 9"
  },
  {
    "Year": 2016,
    "LV": "Atlas V 421"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2016,
    "LV": "Falcon 9"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2016,
    "LV": "Delta 4M+(4,2)"
  },
  {
    "Year": 2016,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2016,
    "LV": "GSLV Mk II"
  },
  {
    "Year": 2016,
    "LV": "Atlas V 411"
  },
  {
    "Year": 2016,
    "LV": "Shavit 2"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2016,
    "LV": "Vega"
  },
  {
    "Year": 2016,
    "LV": "PSLV"
  },
  {
    "Year": 2016,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2017,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2017,
    "LV": "Antares 230"
  },
  {
    "Year": 2016,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2016,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 5/YZ-2"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 11"
  },
  {
    "Year": 2017,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2017,
    "LV": "Ariane 5ES"
  },
  {
    "Year": 2017,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2017,
    "LV": "Atlas V 541"
  },
  {
    "Year": 2017,
    "LV": "Chang Zheng 3C"
  },
  {
    "Year": 2017,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2016,
    "LV": "Vega"
  },
  {
    "Year": 2016,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2016,
    "LV": "Delta 4M+(5,4)"
  },
  {
    "Year": 2017,
    "LV": "H-IIB"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2016,
    "LV": "Pegasus XL"
  },
  {
    "Year": 2016,
    "LV": "Atlas V 431"
  },
  {
    "Year": 2017,
    "LV": "Epsilon"
  },
  {
    "Year": 2017,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2016,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2016,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2017,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2017,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2017,
    "LV": "Falcon 9"
  },
  {
    "Year": 2017,
    "LV": "SS-520"
  },
  {
    "Year": 2017,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2017,
    "LV": "H-IIA 204"
  },
  {
    "Year": 2017,
    "LV": "Soyuz-ST-B"
  },
  {
    "Year": 2017,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2017,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2017,
    "LV": "Falcon 9"
  },
  {
    "Year": 2017,
    "LV": "Soyuz-U-PVB"
  },
  {
    "Year": 2017,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2017,
    "LV": "KT-2"
  },
  {
    "Year": 2017,
    "LV": "Vega"
  },
  {
    "Year": 2017,
    "LV": "Falcon 9"
  },
  {
    "Year": 2017,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2017,
    "LV": "Delta 4M+(5,4)"
  },
  {
    "Year": 2017,
    "LV": "Falcon 9"
  },
  {
    "Year": 2017,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2017,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2017,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2017,
    "LV": "Chang Zheng 7"
  },
  {
    "Year": 2017,
    "LV": "Falcon 9"
  },
  {
    "Year": 2017,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2017,
    "LV": "GSLV Mk II"
  },
  {
    "Year": 2017,
    "LV": "Falcon 9"
  },
  {
    "Year": 2017,
    "LV": "Soyuz-ST-A"
  },
  {
    "Year": 2017,
    "LV": "Electron"
  },
  {
    "Year": 2017,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2017,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2017,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2017,
    "LV": "Falcon 9"
  },
  {
    "Year": 2017,
    "LV": "GSLV Mk III"
  },
  {
    "Year": 2017,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2017,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2017,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2017,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2017,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2017,
    "LV": "Soyuz-2-1V"
  },
  {
    "Year": 2017,
    "LV": "Falcon 9"
  },
  {
    "Year": 2017,
    "LV": "Falcon 9"
  },
  {
    "Year": 2017,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2017,
    "LV": "Chang Zheng 5"
  },
  {
    "Year": 2017,
    "LV": "Falcon 9"
  },
  {
    "Year": 2017,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2017,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2017,
    "LV": "Vega"
  },
  {
    "Year": 2017,
    "LV": "Falcon 9"
  },
  {
    "Year": 2017,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2017,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2017,
    "LV": "H-IIA 204"
  },
  {
    "Year": 2017,
    "LV": "Falcon 9"
  },
  {
    "Year": 2017,
    "LV": "Minotaur IV"
  },
  {
    "Year": 2017,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2017,
    "LV": "Falcon 9"
  },
  {
    "Year": 2017,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2017,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2017,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2017,
    "LV": "Atlas V 541"
  },
  {
    "Year": 2017,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2017,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2017,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2017,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2017,
    "LV": "Falcon 9"
  },
  {
    "Year": 2018,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2017,
    "LV": "Falcon 9"
  },
  {
    "Year": 2017,
    "LV": "Rokot"
  },
  {
    "Year": 2017,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2017,
    "LV": "Atlas V 421"
  },
  {
    "Year": 2017,
    "LV": "Falcon 9"
  },
  {
    "Year": 2017,
    "LV": "Minotaur-C 3210"
  },
  {
    "Year": 2017,
    "LV": "Chang Zheng 3B/YZ-1"
  },
  {
    "Year": 2017,
    "LV": "Vega"
  },
  {
    "Year": 2018,
    "LV": "Antares 230"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2017,
    "LV": "Delta 7920-10C"
  },
  {
    "Year": 2017,
    "LV": "Chang Zheng 6"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2017,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2018,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2017,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2017,
    "LV": "Ariane 5ES"
  },
  {
    "Year": 2018,
    "LV": "Falcon 9"
  },
  {
    "Year": 2017,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2017,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2017,
    "LV": "Falcon 9"
  },
  {
    "Year": 2017,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2017,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2018,
    "LV": "Zenit-3SLBF"
  },
  {
    "Year": 2018,
    "LV": "Falcon 9"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 3B/YZ-1"
  },
  {
    "Year": 2018,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2018,
    "LV": "Delta 4M+(5,2)"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2018,
    "LV": "Epsilon"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 11"
  },
  {
    "Year": 2018,
    "LV": "Atlas V 411"
  },
  {
    "Year": 2018,
    "LV": "Electron"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2018,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2018,
    "LV": "Falcon 9"
  },
  {
    "Year": 2018,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2018,
    "LV": "SS-520"
  },
  {
    "Year": 2018,
    "LV": "Falcon Heavy"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 3B/YZ-1"
  },
  {
    "Year": 2018,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2018,
    "LV": "Falcon 9"
  },
  {
    "Year": 2018,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2018,
    "LV": "Atlas V 541"
  },
  {
    "Year": 2018,
    "LV": "Falcon 9"
  },
  {
    "Year": 2018,
    "LV": "Soyuz-ST-B"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2018,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2018,
    "LV": "GSLV Mk II"
  },
  {
    "Year": 2018,
    "LV": "Soyuz-2-1V"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 3B/YZ-1"
  },
  {
    "Year": 2018,
    "LV": "Falcon 9"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2018,
    "LV": "Falcon 9"
  },
  {
    "Year": 2018,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2018,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2018,
    "LV": "Atlas V 551"
  },
  {
    "Year": 2018,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2018,
    "LV": "Falcon 9"
  },
  {
    "Year": 2018,
    "LV": "Rokot"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 11"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2018,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2018,
    "LV": "Falcon 9"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2018,
    "LV": "Antares 230"
  },
  {
    "Year": 2018,
    "LV": "Falcon 9"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2018,
    "LV": "Falcon 9"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2018,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2018,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2018,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2018,
    "LV": "Falcon 9"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 3A"
  },
  {
    "Year": 2018,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2018,
    "LV": "Falcon 9"
  },
  {
    "Year": 2018,
    "LV": "Ariane 5ES"
  },
  {
    "Year": 2018,
    "LV": "Falcon 9"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 3B/YZ-1"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2018,
    "LV": "Falcon 9"
  },
  {
    "Year": 2018,
    "LV": "Delta 4H/Star 48BV"
  },
  {
    "Year": 2018,
    "LV": "Vega"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 3B/YZ-1"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2018,
    "LV": "Falcon 9"
  },
  {
    "Year": 2018,
    "LV": "Delta 7420-10C"
  },
  {
    "Year": 2018,
    "LV": "PSLV"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 3B/YZ-1"
  },
  {
    "Year": 2018,
    "LV": "H-IIB"
  },
  {
    "Year": 2018,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2018,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2018,
    "LV": "Falcon 9"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 2C/YZ-1S"
  },
  {
    "Year": 2018,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 3B/YZ-1"
  },
  {
    "Year": 2018,
    "LV": "Atlas V 551"
  },
  {
    "Year": 2018,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2018,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2018,
    "LV": "Zhuque-1"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2018,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2018,
    "LV": "Soyuz-ST-B"
  },
  {
    "Year": 2018,
    "LV": "Electron"
  },
  {
    "Year": 2018,
    "LV": "GSLV Mk III"
  },
  {
    "Year": 2018,
    "LV": "Falcon 9"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2018,
    "LV": "Antares 230"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 3B/YZ-1"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2018,
    "LV": "Vega"
  },
  {
    "Year": 2018,
    "LV": "PSLV"
  },
  {
    "Year": 2018,
    "LV": "Rokot"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2019,
    "LV": "Falcon 9"
  },
  {
    "Year": 2019,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2019,
    "LV": "Falcon 9"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2018,
    "LV": "Electron"
  },
  {
    "Year": 2018,
    "LV": "GSLV Mk II"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-ST-A"
  },
  {
    "Year": 2018,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 11"
  },
  {
    "Year": 2018,
    "LV": "Falcon 9"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 3C"
  },
  {
    "Year": 2018,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2018,
    "LV": "Chang Zheng 2D/YZ-3"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2019,
    "LV": "Falcon 9"
  },
  {
    "Year": 2019,
    "LV": "Simorgh"
  },
  {
    "Year": 2019,
    "LV": "Epsilon"
  },
  {
    "Year": 2019,
    "LV": "Delta 4H"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 11"
  },
  {
    "Year": 2019,
    "LV": "PSLV-DL"
  },
  {
    "Year": 2019,
    "LV": "Safir"
  },
  {
    "Year": 2019,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2019,
    "LV": "Falcon 9"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-ST-B"
  },
  {
    "Year": 2019,
    "LV": "Falcon 9"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2019,
    "LV": "Delta 4M+(5,2)"
  },
  {
    "Year": 2019,
    "LV": "Vega"
  },
  {
    "Year": 2019,
    "LV": "OS-M1"
  },
  {
    "Year": 2019,
    "LV": "Electron"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2019,
    "LV": "PSLV-QL"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-ST-B"
  },
  {
    "Year": 2019,
    "LV": "Falcon Heavy"
  },
  {
    "Year": 2019,
    "LV": "Antares 230"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2019,
    "LV": "Falcon 9"
  },
  {
    "Year": 2019,
    "LV": "Electron"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 3C"
  },
  {
    "Year": 2019,
    "LV": "PSLV"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2019,
    "LV": "Falcon 9"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2019,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 11"
  },
  {
    "Year": 2019,
    "LV": "Falcon 9"
  },
  {
    "Year": 2019,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2019,
    "LV": "Falcon Heavy"
  },
  {
    "Year": 2019,
    "LV": "Electron"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-2-1V"
  },
  {
    "Year": 2019,
    "LV": "Vega"
  },
  {
    "Year": 2019,
    "LV": "Proton-M/DM-3"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2019,
    "LV": "LVM3"
  },
  {
    "Year": 2019,
    "LV": "Shuang Quxian 1"
  },
  {
    "Year": 2019,
    "LV": "Falcon 9"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2019,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2019,
    "LV": "Ariane 5ECA+"
  },
  {
    "Year": 2019,
    "LV": "Falcon 9"
  },
  {
    "Year": 2019,
    "LV": "Atlas V 551"
  },
  {
    "Year": 2019,
    "LV": "Jielong-1"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2019,
    "LV": "Electron"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2019,
    "LV": "Delta 4M+(4,2)"
  },
  {
    "Year": 2019,
    "LV": "Rokot"
  },
  {
    "Year": 2019,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 11"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 3B/YZ-1"
  },
  {
    "Year": 2019,
    "LV": "H-IIB"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-FG"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2019,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2019,
    "LV": "Pegasus XL"
  },
  {
    "Year": 2019,
    "LV": "Electron"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2019,
    "LV": "Antares 230+"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2019,
    "LV": "Falcon 9"
  },
  {
    "Year": 2019,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 6"
  },
  {
    "Year": 2019,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 3B/YZ-1"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-2-1V"
  },
  {
    "Year": 2019,
    "LV": "Ariane 5ECA"
  },
  {
    "Year": 2019,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2019,
    "LV": "Electron"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2019,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2019,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2019,
    "LV": "PSLV-QL"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 3B/YZ-1"
  },
  {
    "Year": 2019,
    "LV": "Falcon 9"
  },
  {
    "Year": 2019,
    "LV": "Soyuz-ST-A"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2020,
    "LV": "Atlas V N22"
  },
  {
    "Year": 2020,
    "LV": "Proton-M/DM-3"
  },
  {
    "Year": 2020,
    "LV": "Rokot"
  },
  {
    "Year": 2019,
    "LV": "Chang Zheng 5"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2020,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2020,
    "LV": "Ariane 5ECA+"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Electron"
  },
  {
    "Year": 2020,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2020,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2020,
    "LV": "Simorgh"
  },
  {
    "Year": 2020,
    "LV": "Atlas V 411"
  },
  {
    "Year": 2020,
    "LV": "Antares 230+"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Ariane 5ECA+"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2020,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 7A"
  },
  {
    "Year": 2020,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2020,
    "LV": "Atlas V 551"
  },
  {
    "Year": 2020,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2020,
    "LV": "Qased"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 5B"
  },
  {
    "Year": 2020,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2020,
    "LV": "Atlas V 501"
  },
  {
    "Year": 2020,
    "LV": "H-IIB"
  },
  {
    "Year": 2020,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2020,
    "LV": "LauncherOne"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 11"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2020,
    "LV": "Electron"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2020,
    "LV": "Electron"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2020,
    "LV": "Shavit 2"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2020,
    "LV": "Kuaizhou-11"
  },
  {
    "Year": 2020,
    "LV": "Minotaur IV"
  },
  {
    "Year": 2020,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 5"
  },
  {
    "Year": 2020,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2020,
    "LV": "Atlas V 541"
  },
  {
    "Year": 2020,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Ariane 5ECA+"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Electron"
  },
  {
    "Year": 2020,
    "LV": "Vega"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2020,
    "LV": "Astra Rocket 3.1"
  },
  {
    "Year": 2020,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 11"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2020,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2020,
    "LV": "Antares 230+"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2020,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2021,
    "LV": "Electron"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 6"
  },
  {
    "Year": 2020,
    "LV": "Gushenxing 1"
  },
  {
    "Year": 2020,
    "LV": "PSLV-DL"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2021,
    "LV": "Atlas V 531"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Vega"
  },
  {
    "Year": 2020,
    "LV": "Electron"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 5"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2020,
    "LV": "Soyuz-ST-A"
  },
  {
    "Year": 2020,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2021,
    "LV": "CE-5 SSQ"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 11"
  },
  {
    "Year": 2020,
    "LV": "Delta 4H"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Angara A5"
  },
  {
    "Year": 2021,
    "LV": "Electron"
  },
  {
    "Year": 2020,
    "LV": "Astra Rocket 3.2"
  },
  {
    "Year": 2020,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2020,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2020,
    "LV": "Falcon 9"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 8"
  },
  {
    "Year": 2020,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-ST-A"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "LauncherOne"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2021,
    "LV": "Electron"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2021,
    "LV": "Shuang Quxian 1"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Antares 230+"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2021,
    "LV": "PSLV-DL"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 7A"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2021,
    "LV": "Electron"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2021,
    "LV": "Delta 4H"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 6"
  },
  {
    "Year": 2021,
    "LV": "Vega"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 5B"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Electron"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Atlas V 421"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 7"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2021,
    "LV": "Simorgh"
  },
  {
    "Year": 2021,
    "LV": "Pegasus XL"
  },
  {
    "Year": 2021,
    "LV": "Minotaur I"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2021,
    "LV": "LauncherOne"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 3C"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 6"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2021,
    "LV": "Proton-M"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2021,
    "LV": "Electron"
  },
  {
    "Year": 2021,
    "LV": "Ariane 5ECA+"
  },
  {
    "Year": 2021,
    "LV": "Shuang Quxian 1"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 6"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2021,
    "LV": "Antares 230+"
  },
  {
    "Year": 2021,
    "LV": "GSLV Mk II"
  },
  {
    "Year": 2021,
    "LV": "Vega"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 2C/YZ-1S"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2021,
    "LV": "Astra Rocket 3.3"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Firefly Alpha"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-2-1V"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 7"
  },
  {
    "Year": 2021,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2021,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2021,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2021,
    "LV": "Nuri"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2021,
    "LV": "Ariane 5ECA+"
  },
  {
    "Year": 2021,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2021,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 2C/YZ-1S"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 6"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2021,
    "LV": "Epsilon"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Vega"
  },
  {
    "Year": 2021,
    "LV": "Electron"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2021,
    "LV": "Astra Rocket 3.3"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2021,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-ST-B"
  },
  {
    "Year": 2021,
    "LV": "Gushenxing 1"
  },
  {
    "Year": 2021,
    "LV": "Atlas V 551"
  },
  {
    "Year": 2021,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2021,
    "LV": "Electron"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2022,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2021,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2021,
    "LV": "H-IIA 204"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 7A"
  },
  {
    "Year": 2022,
    "LV": "Ariane 5ECA+"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2022,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2022,
    "LV": "Angara A5/Persei"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2021,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2021,
    "LV": "Simorgh"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "LauncherOne"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Atlas V 511"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2022,
    "LV": "Soyuz-ST-B"
  },
  {
    "Year": 2022,
    "LV": "Astra Rocket 3.3"
  },
  {
    "Year": 2022,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2022,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2022,
    "LV": "Antares 230+"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 8"
  },
  {
    "Year": 2022,
    "LV": "Electron"
  },
  {
    "Year": 2022,
    "LV": "Atlas V 541"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2022,
    "LV": "Qased"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Astra Rocket 3.3"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2022,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 6A"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 11"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Electron"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2022,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2022,
    "LV": "Angara-1.2"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 11"
  },
  {
    "Year": 2022,
    "LV": "Electron"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 7"
  },
  {
    "Year": 2022,
    "LV": "Shuang Quxian 1"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2022,
    "LV": "Atlas V N22"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2C/YZ-1S"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2022,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Astra Rocket 3.3"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Nuri"
  },
  {
    "Year": 2022,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2022,
    "LV": "Ariane 5ECA+"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2022,
    "LV": "Electron"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "PSLV"
  },
  {
    "Year": 2022,
    "LV": "Atlas V 541"
  },
  {
    "Year": 2022,
    "LV": "LauncherOne"
  },
  {
    "Year": 2022,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2022,
    "LV": "Electron"
  },
  {
    "Year": 2022,
    "LV": "Vega C"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 5B"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Lijian-1"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2022,
    "LV": "Soyuz-2-1V"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2022,
    "LV": "Electron"
  },
  {
    "Year": 2022,
    "LV": "Atlas V 421"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "SSLV"
  },
  {
    "Year": 2022,
    "LV": "Gushenxing 1"
  },
  {
    "Year": 2022,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 6"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2022,
    "LV": "Ariane 5ECA+"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 7A"
  },
  {
    "Year": 2022,
    "LV": "Electron"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2022,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2022,
    "LV": "Delta 4H"
  },
  {
    "Year": 2022,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 6"
  },
  {
    "Year": 2022,
    "LV": "Firefly Alpha"
  },
  {
    "Year": 2023,
    "LV": "Atlas V 531"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 11"
  },
  {
    "Year": 2022,
    "LV": "Electron"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2022,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2022,
    "LV": "Epsilon"
  },
  {
    "Year": 2022,
    "LV": "Proton-M/DM-3"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Angara-1.2"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Soyuz-2-1V"
  },
  {
    "Year": 2023,
    "LV": "LVM3"
  },
  {
    "Year": 2023,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2022,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 5B"
  },
  {
    "Year": 2022,
    "LV": "Falcon Heavy"
  },
  {
    "Year": 2022,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Electron"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2022,
    "LV": "Antares 230+"
  },
  {
    "Year": 2022,
    "LV": "Atlas V 401"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 6A"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 7"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2022,
    "LV": "Gushenxing 1"
  },
  {
    "Year": 2022,
    "LV": "SLS Block 1"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2023,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2023,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2022,
    "LV": "Kuaizhou-11"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Jielong-3"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2023,
    "LV": "Ariane 5ECA+"
  },
  {
    "Year": 2022,
    "LV": "Zhuque-2"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 11"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Vega C"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2022,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2022,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 7A"
  },
  {
    "Year": 2023,
    "LV": "Gushenxing 1"
  },
  {
    "Year": 2023,
    "LV": "LauncherOne"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "RS1"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2023,
    "LV": "Falcon Heavy"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Electron"
  },
  {
    "Year": 2023,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Proton-M/DM-3"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2023,
    "LV": "SSLV"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2023,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Qaem-100"
  },
  {
    "Year": 2023,
    "LV": "H3-22S"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2023,
    "LV": "Proton-M/Briz-M"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 11"
  },
  {
    "Year": 2023,
    "LV": "Electron"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2023,
    "LV": "Terran 1"
  },
  {
    "Year": 2023,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2023,
    "LV": "Electron"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "LVM3"
  },
  {
    "Year": 2023,
    "LV": "Shavit 2"
  },
  {
    "Year": 2023,
    "LV": "Soyuz-2-1V"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2023,
    "LV": "Tianlong 2"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Shuang Quxian 1"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Ariane 5ECA+"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 4B"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Starship V1.0"
  },
  {
    "Year": 2023,
    "LV": "PSLV"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon Heavy"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Electron"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 7"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2023,
    "LV": "Nuri"
  },
  {
    "Year": 2023,
    "LV": "Electron"
  },
  {
    "Year": 2023,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "GSLV Mk II"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2023,
    "LV": "Cheonlima-1"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Lijian-1"
  },
  {
    "Year": 2023,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 6"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Delta 4H"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Ariane 5ECA+"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2C/YZ-1S"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Zhuque-2"
  },
  {
    "Year": 2023,
    "LV": "LVM3"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Electron"
  },
  {
    "Year": 2023,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Gushenxing 1"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon Heavy"
  },
  {
    "Year": 2023,
    "LV": "PSLV"
  },
  {
    "Year": 2023,
    "LV": "Antares 230+"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2023,
    "LV": "Gushenxing 1"
  },
  {
    "Year": 2023,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2023,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2023,
    "LV": "Cheonlima-1"
  },
  {
    "Year": 2023,
    "LV": "Electron"
  },
  {
    "Year": 2023,
    "LV": "Gushenxing 1"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "PSLV-XL"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Gushenxing 1"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2023,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 6A"
  },
  {
    "Year": 2023,
    "LV": "Atlas V 551"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Firefly Alpha"
  },
  {
    "Year": 2023,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2023,
    "LV": "Electron"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Gushenxing 1"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 4C"
  },
  {
    "Year": 2023,
    "LV": "Qased"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Atlas V 501"
  },
  {
    "Year": 2023,
    "LV": "Vega"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon Heavy"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2023,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 6A"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 7A"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2C/YZ-1S"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Starship V1.0"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Cheonlima-1"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Chang Zheng 2D/YZ-3"
  },
  {
    "Year": 2024,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2023,
    "LV": "ADD TV2"
  },
  {
    "Year": 2023,
    "LV": "Gushenxing 1"
  },
  {
    "Year": 2023,
    "LV": "Jielong-3"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Zhuque-2"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2D"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2F"
  },
  {
    "Year": 2023,
    "LV": "Electron"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 5"
  },
  {
    "Year": 2023,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2023,
    "LV": "Shuang Quxian 1"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2024,
    "LV": "Firefly Alpha"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 11"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 3B/YZ-1"
  },
  {
    "Year": 2023,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2023,
    "LV": "Soyuz-2-1V"
  },
  {
    "Year": 2023,
    "LV": "Falcon Heavy"
  },
  {
    "Year": 2023,
    "LV": "Falcon 9"
  },
  {
    "Year": 2023,
    "LV": "Chang Zheng 2C/YZ-1S"
  },
  {
    "Year": 2024,
    "LV": "PSLV-DL"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Vulcan VC2S"
  },
  {
    "Year": 2024,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2024,
    "LV": "Kuaizhou-1A"
  },
  {
    "Year": 2024,
    "LV": "Yinli-1"
  },
  {
    "Year": 2024,
    "LV": "H-IIA 202"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Chang Zheng 7"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Qaem-100"
  },
  {
    "Year": 2024,
    "LV": "Lijian-1"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Simorgh"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Electron"
  },
  {
    "Year": 2024,
    "LV": "Chang Zheng 2C"
  },
  {
    "Year": 2024,
    "LV": "Jielong-3"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Soyuz-2-1V"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Soyuz-2-1A"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "H3-22S"
  },
  {
    "Year": 2024,
    "LV": "GSLV Mk II"
  },
  {
    "Year": 2024,
    "LV": "Electron"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Chang Zheng 5"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Soyuz-2-1B"
  },
  {
    "Year": 2024,
    "LV": "Chang Zheng 3B"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Kairos"
  },
  {
    "Year": 2024,
    "LV": "Electron"
  },
  {
    "Year": 2024,
    "LV": "Chang Zheng 2C/YZ-1S"
  },
  {
    "Year": 2024,
    "LV": "Starship V1.0"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Chang Zheng 8"
  },
  {
    "Year": 2024,
    "LV": "Chang Zheng 2D/YZ-3"
  },
  {
    "Year": 2024,
    "LV": "Electron"
  },
  {
    "Year": 2024,
    "LV": "Falcon 9"
  },
  {
    "Year": 2024,
    "LV": "Soyuz-2-1A"
  }
]

// UPDATED
const DATA_YEARLY_MINUS_MISSIONS = {
  "1957": 2,
  "1958": 20,
  "1959": 17,
  "1960": 29,
  "1961": 47,
  "1962": 61,
  "1963": 72,
  "1964": 87,
  "1965": 113,
  "1966": 120,
  "1967": 125,
  "1968": 122,
  "1969": 111,
  "1970": 111,
  "1971": 124,
  "1972": 117,
  "1973": 97,
  "1974": 117,
  "1975": 130,
  "1976": 138,
  "1977": 125,
  "1978": 123,
  "1979": 109,
  "1980": 108,
  "1981": 125,
  "1982": 127,
  "1983": 128,
  "1984": 126,
  "1985": 121,
  "1986": 111,
  "1987": 108,
  "1988": 121,
  "1989": 99,
  "1990": 116,
  "1991": 96,
  "1992": 86,
  "1993": 95,
  "1994": 86,
  "1995": 81,
  "1996": 73,
  "1997": 85,
  "1998": 75,
  "1999": 78,
  "2000": 78,
  "2001": 45,
  "2002": 57,
  "2003": 55,
  "2004": 42,
  "2005": 52,
  "2006": 53,
  "2007": 55,
  "2008": 58,
  "2009": 62,
  "2010": 58,
  "2011": 64,
  "2012": 67,
  "2013": 66,
  "2014": 75,
  "2015": 75,
  "2016": 71,
  "2017": 80,
  "2018": 92,
  "2019": 91,
  "2020": 95,
  "2021": 131,
  "2022": 163,
  "2023": 210,
  "2024": 59
}