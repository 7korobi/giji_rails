Date.addLocale "ja",
  monthSuffix: "月"
  weekdays: "日曜日,月曜日,火曜日,水曜日,木曜日,金曜日,土曜日"
  units: "ミリ秒,秒,分,時間,日,週間|週,ヶ月|ヵ月|月,年"
  short: "{yyyy}年{M}月{d}日"
  long:  "{yyyy}年{M}月{d}日 {H}時{mm}分"
  full:  "{yyyy}年{M}月{d}日 {Weekday} {H}時{mm}分{ss}秒"
  past:     "{num}{unit}{sign}"
  future:   "{num}{unit}{sign}"
  duration: "{num}{unit}"
  timeSuffixes: "時,分,秒"
  ampm: "午前,午後"
  modifiers: [
    name: "day"
    src: "一昨日"
    value: -2
  ,
    name: "day"
    src: "昨日"
    value: -1
  ,
    name: "day"
    src: "今日"
    value: 0
  ,
    name: "day"
    src: "明日"
    value: 1
  ,
    name: "day"
    src: "明後日"
    value: 2
  ,
    name: "sign"
    src: "前"
    value: -1
  ,
    name: "sign"
    src: "後"
    value: 1
  ,
    name: "shift"
    src: "去|先"
    value: -1
  ,
    name: "shift"
    src: "来"
    value: 1
  ]
  dateParse: ["{num}{unit}{sign}"]
  timeParse: [
    "{shift}{unit=5-7}{weekday?}"
    "{year}年{month?}月?{date?}日?"
    "{month}月{date?}日?"
    "{date}日"
  ]
