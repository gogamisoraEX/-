const weatherCode = {
    100: ['100.svg', '500.svg'],
    101: ['101.svg', '501.svg'],
    102: ['102.svg', '502.svg'],
    103: ['102.svg', '502.svg'],
    104: ['104.svg', '504.svg'],
    105: ['104.svg', '504.svg'],
    106: ['102.svg', '502.svg'],
    107: ['102.svg', '502.svg'],
    108: ['102.svg', '502.svg'],
    110: ['110.svg', '510.svg'],
    111: ['110.svg', '510.svg'],
    112: ['112.svg', '512.svg'],
    113: ['112.svg', '512.svg'],
    114: ['112.svg', '512.svg'],
    115: ['115.svg', '515.svg'],
    116: ['115.svg', '515.svg'],
    117: ['115.svg', '515.svg'],
    118: ['112.svg', '512.svg'],
    119: ['112.svg', '512.svg'],
    120: ['102.svg', '502.svg'],
    121: ['102.svg', '502.svg'],
    122: ['112.svg', '512.svg'],
    123: ['100.svg', '500.svg'],
    124: ['100.svg', '500.svg'],
    125: ['112.svg', '512.svg'],
    126: ['112.svg', '512.svg'],
    127: ['112.svg', '512.svg'],
    128: ['112.svg', '512.svg'],
    130: ['100.svg', '500.svg'],
    131: ['100.svg', '500.svg'],
    132: ['101.svg', '501.svg'],
    140: ['102.svg', '502.svg'],
    160: ['104.svg', '504.svg'],
    170: ['104.svg', '504.svg'],
    181: ['115.svg', '515.svg'],
    200: ['200.svg', '200.svg'],
    201: ['201.svg', '601.svg'],
    202: ['202.svg', '202.svg'],
    203: ['202.svg', '202.svg'],
    204: ['204.svg', '204.svg'],
    205: ['204.svg', '204.svg'],
    206: ['202.svg', '202.svg'],
    207: ['202.svg', '202.svg'],
    208: ['202.svg', '202.svg'],
    209: ['200.svg', '200.svg'],
    210: ['210.svg', '610.svg'],
    211: ['210.svg', '610.svg'],
    212: ['212.svg', '212.svg'],
    213: ['212.svg', '212.svg'],
    214: ['212.svg', '212.svg'],
    215: ['215.svg', '215.svg'],
    216: ['215.svg', '215.svg'],
    217: ['215.svg', '215.svg'],
    218: ['212.svg', '212.svg'],
    219: ['212.svg', '212.svg'],
    220: ['202.svg', '202.svg'],
    221: ['202.svg', '202.svg'],
    222: ['212.svg', '212.svg'],
    223: ['201.svg', '601.svg'],
    224: ['212.svg', '212.svg'],
    225: ['212.svg', '212.svg'],
    226: ['212.svg', '212.svg'],
    228: ['215.svg', '215.svg'],
    229: ['215.svg', '215.svg'],
    230: ['215.svg', '215.svg'],
    231: ['200.svg', '200.svg'],
    240: ['202.svg', '202.svg'],
    250: ['204.svg', '204.svg'],
    260: ['204.svg', '204.svg'],
    270: ['204.svg', '204.svg'],
    281: ['215.svg', '215.svg'],
    300: ['300.svg', '300.svg'],
    301: ['301.svg', '701.svg'],
    302: ['302.svg', '302.svg'],
    303: ['303.svg', '303.svg'],
    304: ['300.svg', '300.svg'],
    306: ['300.svg', '300.svg'],
    308: ['308.svg', '308.svg'],
    309: ['303.svg', '303.svg'],
    311: ['311.svg', '711.svg'],
    313: ['313.svg', '313.svg'],
    314: ['314.svg', '314.svg'],
    315: ['314.svg', '314.svg'],
    316: ['311.svg', '711.svg'],
    317: ['313.svg', '313.svg'],
    320: ['311.svg', '711.svg'],
    321: ['313.svg', '313.svg'],
    322: ['303.svg', '303.svg'],
    323: ['311.svg', '711.svg'],
    324: ['311.svg', '711.svg'],
    325: ['311.svg', '711.svg'],
    326: ['314.svg', '314.svg'],
    327: ['314.svg', '314.svg'],
    328: ['300.svg', '300.svg'],
    329: ['300.svg', '300.svg'],
    340: ['400.svg', '400.svg'],
    350: ['300.svg', '300.svg'],
    361: ['411.svg', '811.svg'],
    371: ['413.svg', '413.svg'],
    400: ['400.svg', '400.svg'],
    401: ['401.svg', '801.svg'],
    402: ['402.svg', '402.svg'],
    403: ['403.svg', '403.svg'],
    405: ['400.svg', '400.svg'],
    406: ['406.svg', '406.svg'],
    407: ['406.svg', '406.svg'],
    409: ['403.svg', '403.svg'],
    411: ['411.svg', '811.svg'],
    413: ['413.svg', '413.svg'],
    414: ['414.svg', '414.svg'],
    420: ['411.svg', '811.svg'],
    421: ['413.svg', '413.svg'],
    422: ['414.svg', '414.svg'],
    423: ['414.svg', '414.svg'],
    425: ['400.svg', '400.svg'],
    426: ['400.svg', '400.svg'],
    427: ['400.svg', '400.svg'],
    450: ['400.svg', '400.svg']
  }
  
  let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";

  fetch(url)
      .then(function(response) {
          return response.json();
      })
      .then(function(weather) {
          console.log(weather);
      });
      [
        {
          "publishingOffice": "気象庁",
          "reportDatetime": "2024-12-13T11:00:00+09:00",
          "timeSeries": [
            {
              "timeDefines": [
                "2024-12-13T11:00:00+09:00",
                "2024-12-14T00:00:00+09:00",
                "2024-12-15T00:00:00+09:00"
              ],
              "areas": [
                {
                  "area": {
                    "name": "東京地方",
                    "code": "130010"
                  },
                  "weatherCodes": [
                    "200",
                    "100",
                    "101"
                  ],
                  "weathers": [
                    "くもり",
                    "晴れ　明け方　から　朝　くもり",
                    "晴れ　時々　くもり"
                  ],
                  "winds": [
                    "南の風",
                    "北の風　２３区西部　では　北の風　やや強く",
                    "南の風"
                  ],
                  "waves": [
                    "０．５メートル",
                    "０．５メートル　後　１メートル",
                    "０．５メートル"
                  ]
                },
                {
                  "area": {
                    "name": "伊豆諸島北部",
                    "code": "130020"
                  },
                  "weatherCodes": [
                    "214",
                    "201",
                    "101"
                  ],
                  "weathers": [
                    "くもり　夕方　から　雨　所により　雷　を伴う",
                    "くもり　時々　晴れ　所により　雨",
                    "晴れ　時々　くもり"
                  ],
                  "winds": [
                    "西の風　後　やや強く",
                    "西の風　強く",
                    "西の風　やや強く　後　強く"
                  ],
                  "waves": [
                    "１．５メートル",
                    "２メートル　後　１．５メートル　ただし　新島　では　２．５メートル　後　２メートル",
                    "２メートル　後　２．５メートル"
                  ]
                },
                {
                  "area": {
                    "name": "伊豆諸島南部",
                    "code": "130030"
                  },
                  "weatherCodes": [
                    "214",
                    "203",
                    "201"
                  ],
                  "weathers": [
                    "くもり　夜　雨　所により　夕方　から　雷　を伴う",
                    "くもり　朝　から　夕方　時々　雨　所により　明け方　まで　雷",
                    "くもり　時々　晴れ"
                  ],
                  "winds": [
                    "西の風　後　南西の風　強く",
                    "西の風　強く　後　やや強く",
                    "西の風　やや強く　後　強く"
                  ],
                  "waves": [
                    "２メートル　ただし　三宅島　では　１．５メートル　後　２メートル",
                    "２．５メートル　後　３メートル　ただし　三宅島　では　２メートル　後　３メートル",
                    "３メートル　ただし　三宅島　では　２．５メートル"
                  ]
                },
                {
                  "area": {
                    "name": "小笠原諸島",
                    "code": "130040"
                  },
                  "weatherCodes": [
                    "214",
                    "203",
                    "201"
                  ],
                  "weathers": [
                    "くもり　夜　雨",
                    "くもり　昼過ぎ　まで　時々　雨",
                    "くもり　時々　晴れ"
                  ],
                  "winds": [
                    "東の風　後　南の風　やや強く",
                    "南西の風　やや強く　後　北西の風　やや強く",
                    "北西の風"
                  ],
                  "waves": [
                    "２メートル　うねり　を伴う",
                    "２メートル　後　３メートル",
                    "３メートル　後　２．５メートル　うねり　を伴う"
                  ]
                }
              ]
            },
            {
              "timeDefines": [
                "2024-12-13T12:00:00+09:00",
                "2024-12-13T18:00:00+09:00",
                "2024-12-14T00:00:00+09:00",
                "2024-12-14T06:00:00+09:00",
                "2024-12-14T12:00:00+09:00",
                "2024-12-14T18:00:00+09:00"
              ],
              "areas": [
                {
                  "area": {
                    "name": "東京地方",
                    "code": "130010"
                  },
                  "pops": [
                    "10",
                    "10",
                    "10",
                    "10",
                    "0",
                    "0"
                  ]
                },
                {
                  "area": {
                    "name": "伊豆諸島北部",
                    "code": "130020"
                  },
                  "pops": [
                    "50",
                    "60",
                    "20",
                    "20",
                    "20",
                    "20"
                  ]
                },
                {
                  "area": {
                    "name": "伊豆諸島南部",
                    "code": "130030"
                  },
                  "pops": [
                    "40",
                    "80",
                    "40",
                    "20",
                    "20",
                    "20"
                  ]
                },
                {
                  "area": {
                    "name": "小笠原諸島",
                    "code": "130040"
                  },
                  "pops": [
                    "30",
                    "50",
                    "50",
                    "30",
                    "50",
                    "20"
                  ]
                }
              ]
            },
            {
              "timeDefines": [
                "2024-12-13T09:00:00+09:00",
                "2024-12-13T00:00:00+09:00",
                "2024-12-14T00:00:00+09:00",
                "2024-12-14T09:00:00+09:00"
              ],
              "areas": [
                {
                  "area": {
                    "name": "東京",
                    "code": "44132"
                  },
                  "temps": [
                    "10",
                    "10",
                    "3",
                    "12"
                  ]
                },
                {
                  "area": {
                    "name": "大島",
                    "code": "44172"
                  },
                  "temps": [
                    "13",
                    "13",
                    "6",
                    "13"
                  ]
                },
                {
                  "area": {
                    "name": "八丈島",
                    "code": "44263"
                  },
                  "temps": [
                    "15",
                    "15",
                    "11",
                    "13"
                  ]
                },
                {
                  "area": {
                    "name": "父島",
                    "code": "44301"
                  },
                  "temps": [
                    "22",
                    "22",
                    "20",
                    "24"
                  ]
                }
              ]
            }
          ]
        },
        {
          "publishingOffice": "気象庁",
          "reportDatetime": "2024-12-13T11:00:00+09:00",
          "timeSeries": [
            {
              "timeDefines": [
                "2024-12-14T00:00:00+09:00",
                "2024-12-15T00:00:00+09:00",
                "2024-12-16T00:00:00+09:00",
                "2024-12-17T00:00:00+09:00",
                "2024-12-18T00:00:00+09:00",
                "2024-12-19T00:00:00+09:00",
                "2024-12-20T00:00:00+09:00"
              ],
              "areas": [
                {
                  "area": {
                    "name": "東京地方",
                    "code": "130010"
                  },
                  "weatherCodes": [
                    "100",
                    "101",
                    "101",
                    "101",
                    "101",
                    "101",
                    "101"
                  ],
                  "pops": [
                    "",
                    "10",
                    "20",
                    "20",
                    "20",
                    "20",
                    "20"
                  ],
                  "reliabilities": [
                    "",
                    "",
                    "A",
                    "A",
                    "A",
                    "A",
                    "A"
                  ]
                },
                {
                  "area": {
                    "name": "伊豆諸島北部",
                    "code": "130020"
                  },
                  "weatherCodes": [
                    "201",
                    "101",
                    "101",
                    "201",
                    "201",
                    "101",
                    "201"
                  ],
                  "pops": [
                    "",
                    "20",
                    "20",
                    "30",
                    "30",
                    "20",
                    "30"
                  ],
                  "reliabilities": [
                    "",
                    "",
                    "A",
                    "A",
                    "A",
                    "A",
                    "B"
                  ]
                },
                {
                  "area": {
                    "name": "伊豆諸島南部",
                    "code": "130030"
                  },
                  "weatherCodes": [
                    "203",
                    "201",
                    "201",
                    "201",
                    "201",
                    "201",
                    "201"
                  ],
                  "pops": [
                    "",
                    "30",
                    "30",
                    "30",
                    "30",
                    "30",
                    "30"
                  ],
                  "reliabilities": [
                    "",
                    "",
                    "A",
                    "A",
                    "A",
                    "A",
                    "B"
                  ]
                },
                {
                  "area": {
                    "name": "小笠原諸島",
                    "code": "130040"
                  },
                  "weatherCodes": [
                    "203",
                    "201",
                    "201",
                    "200",
                    "202",
                    "201",
                    "101"
                  ],
                  "pops": [
                    "",
                    "20",
                    "30",
                    "40",
                    "50",
                    "30",
                    "20"
                  ],
                  "reliabilities": [
                    "",
                    "",
                    "A",
                    "B",
                    "C",
                    "A",
                    "A"
                  ]
                }
              ]
            },
            {
              "timeDefines": [
                "2024-12-14T00:00:00+09:00",
                "2024-12-15T00:00:00+09:00",
                "2024-12-16T00:00:00+09:00",
                "2024-12-17T00:00:00+09:00",
                "2024-12-18T00:00:00+09:00",
                "2024-12-19T00:00:00+09:00",
                "2024-12-20T00:00:00+09:00"
              ],
              "areas": [
                {
                  "area": {
                    "name": "東京",
                    "code": "44132"
                  },
                  "tempsMin": [
                    "",
                    "3",
                    "4",
                    "4",
                    "4",
                    "3",
                    "3"
                  ],
                  "tempsMinUpper": [
                    "",
                    "4",
                    "5",
                    "5",
                    "6",
                    "5",
                    "5"
                  ],
                  "tempsMinLower": [
                    "",
                    "2",
                    "2",
                    "3",
                    "2",
                    "1",
                    "1"
                  ],
                  "tempsMax": [
                    "",
                    "12",
                    "14",
                    "13",
                    "12",
                    "11",
                    "11"
                  ],
                  "tempsMaxUpper": [
                    "",
                    "14",
                    "16",
                    "15",
                    "14",
                    "12",
                    "14"
                  ],
                  "tempsMaxLower": [
                    "",
                    "10",
                    "12",
                    "10",
                    "9",
                    "8",
                    "8"
                  ]
                },
                {
                  "area": {
                    "name": "大島",
                    "code": "44172"
                  },
                  "tempsMin": [
                    "",
                    "7",
                    "8",
                    "8",
                    "7",
                    "7",
                    "7"
                  ],
                  "tempsMinUpper": [
                    "",
                    "9",
                    "10",
                    "10",
                    "9",
                    "8",
                    "9"
                  ],
                  "tempsMinLower": [
                    "",
                    "6",
                    "7",
                    "6",
                    "5",
                    "5",
                    "5"
                  ],
                  "tempsMax": [
                    "",
                    "12",
                    "13",
                    "13",
                    "13",
                    "12",
                    "13"
                  ],
                  "tempsMaxUpper": [
                    "",
                    "14",
                    "15",
                    "15",
                    "15",
                    "14",
                    "15"
                  ],
                  "tempsMaxLower": [
                    "",
                    "11",
                    "12",
                    "12",
                    "11",
                    "10",
                    "11"
                  ]
                },
                {
                  "area": {
                    "name": "八丈島",
                    "code": "44263"
                  },
                  "tempsMin": [
                    "",
                    "10",
                    "10",
                    "10",
                    "10",
                    "9",
                    "10"
                  ],
                  "tempsMinUpper": [
                    "",
                    "11",
                    "11",
                    "11",
                    "11",
                    "11",
                    "11"
                  ],
                  "tempsMinLower": [
                    "",
                    "8",
                    "8",
                    "9",
                    "8",
                    "7",
                    "8"
                  ],
                  "tempsMax": [
                    "",
                    "13",
                    "15",
                    "14",
                    "14",
                    "13",
                    "15"
                  ],
                  "tempsMaxUpper": [
                    "",
                    "15",
                    "16",
                    "15",
                    "15",
                    "15",
                    "17"
                  ],
                  "tempsMaxLower": [
                    "",
                    "12",
                    "13",
                    "12",
                    "12",
                    "12",
                    "14"
                  ]
                },
                {
                  "area": {
                    "name": "父島",
                    "code": "44301"
                  },
                  "tempsMin": [
                    "",
                    "18",
                    "18",
                    "18",
                    "18",
                    "17",
                    "18"
                  ],
                  "tempsMinUpper": [
                    "",
                    "19",
                    "20",
                    "19",
                    "19",
                    "19",
                    "19"
                  ],
                  "tempsMinLower": [
                    "",
                    "17",
                    "17",
                    "17",
                    "16",
                    "16",
                    "16"
                  ],
                  "tempsMax": [
                    "",
                    "22",
                    "22",
                    "23",
                    "22",
                    "22",
                    "22"
                  ],
                  "tempsMaxUpper": [
                    "",
                    "23",
                    "23",
                    "24",
                    "23",
                    "23",
                    "23"
                  ],
                  "tempsMaxLower": [
                    "",
                    "21",
                    "21",
                    "22",
                    "21",
                    "21",
                    "21"
                  ]
                }
              ]
            }
          ],
          "tempAverage": {
            "areas": [
              {
                "area": {
                  "name": "東京",
                  "code": "44132"
                },
                "min": "3.5",
                "max": "11.8"
              },
              {
                "area": {
                  "name": "大島",
                  "code": "44172"
                },
                "min": "6.3",
                "max": "13.2"
              },
              {
                "area": {
                  "name": "八丈島",
                  "code": "44263"
                },
                "min": "9.7",
                "max": "15.2"
              },
              {
                "area": {
                  "name": "父島",
                  "code": "44301"
                },
                "min": "18.0",
                "max": "22.6"
              }
            ]
          },
          "precipAverage": {
            "areas": [
              {
                "area": {
                  "name": "東京",
                  "code": "44132"
                },
                "min": "0.6",
                "max": "10.6"
              },
              {
                "area": {
                  "name": "大島",
                  "code": "44172"
                },
                "min": "4.3",
                "max": "24.5"
              },
              {
                "area": {
                  "name": "八丈島",
                  "code": "44263"
                },
                "min": "18.8",
                "max": "45.2"
              },
              {
                "area": {
                  "name": "父島",
                  "code": "44301"
                },
                "min": "4.9",
                "max": "25.5"
              }
            ]
          }
        }
      ]

  const dayList = ["日", "月", "火", "水", "木", "金", "土"];
  const weatherCodeList = new Array();
  const tempsMinList = new Array();
  const tempsMaxList = new Array();
  
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(weather) {
      document
      .getElementById("location").textContent = `${weather[1].timeSeries[0].areas[0].area.name}`;
      const isTodaysData = weather[0].timeSeries[2].timeDefines.length === 4;
      const weatherCodes = weather[0].timeSeries[0].areas[0].weatherCodes;
      const timeDefines = weather[0].timeSeries[0].timeDefines;
      const temps = weather[0].timeSeries[2].areas[0].temps;
      weatherCodeList.push(weatherCodes[0], weatherCodes[1]);
      if (isTodaysData) {
        tempsMinList.push(temps[0] === temps[1] ? "--" : temps[0], temps[2]);
        tempsMaxList.push(temps[1], temps[3]);
      } else {
        tempsMinList.push("--", temps[0]);
        tempsMaxList.push("--", temps[1]);
      }
  
      const startCount = weather[1].timeSeries[0].timeDefines.indexOf(timeDefines[1])+1;
      for (let i=startCount; i < startCount+5; i++) {
        weatherCodeList.push(weather[1].timeSeries[0].areas[0].weatherCodes[i]);
        tempsMinList.push(weather[1].timeSeries[1].areas[0].tempsMin[i]);
        tempsMaxList.push(weather[1].timeSeries[1].areas[0].tempsMax[i]);
      }
  
      const date = document.getElementsByClassName("date");
      const weatherImg = document.getElementsByClassName("weatherImg");
      const tempMin = document.getElementsByClassName("tempMin");
      const tempMax = document.getElementsByClassName("tempMax");
      const todayWeekdayCount = new Date(timeDefines[0]).getDay();
  
      weatherCodeList.forEach(function(el, i) {
        if (i === 0) {
          date[i].textContent = "今日"
        } else {
          const weekdayCount = (todayWeekdayCount + i) % 7;
          if (weekdayCount === 0) { date[i].style.color = "red" };
          if (weekdayCount === 6) { date[i].style.color = "blue" };
          date[i].textContent = "(" + dayList[weekdayCount] + ")";
        }
        var isNight = Number(i === 0 && !isTodaysData)
        weatherImg[i].src = "https://www.jma.go.jp/bosai/forecast/img/" + weatherCode[el][isNight];
        tempMin[i].textContent = tempsMinList[i];
        tempMax[i].textContent = tempsMaxList[i];
      });
    });