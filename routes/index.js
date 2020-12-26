var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/birthday_rank', function(req, res, next) {
  var birthdayMonth = req.query.birthdayMonth;
  var birthdayDay = req.query.birthdayDay;
  var birthday = birthdayMonth + birthdayDay
  var birthdayRank = getBirthdayRank(birthday);
  res.render('birthday_ranking', { birthdayRank: birthdayRank, birthday: birthdayMonth.toUpperCase() + " " + birthdayDay});
});

function getBirthdayRank(birthday) {
  switch (birthday) {
    case "april16": 
      return "1"
    case "march6":
      return "2"
    case "march12":
      return "3"
    case "january5":
      return "4"
    case "october6":
      return "5"
    case "january9":
      return "6"
    case "april2":
      return "7"
    case "february25":
      return "8"
    case "october2":
      return "9"
    case "july16":
      return "10"
    case "august8":
      return "11"
    case "july20":
      return "12"
    case "april22":
      return "13"
    case "april6":
      return "14"
    case "december8":
      return "15"
    case "february4":
      return "16"
    case "october1":
      return "17"
    case "february17":
      return "18"
    case "november6":
      return "19"
    case "december3":
      return "20"
    case "october15":
      return "21"
    case "april1":
      return "22"
    case "may22":
      return "23"
    case "may14":
      return "24"
    case "september14":
      return "25"
    case "august30":
      return "26"
    case "september5":
      return "27"
    case "march24":
      return "28"
    case "june17":
      return "29"
    case "june9":
      return "30"
    case "august12":
      return "31"
    case "july8":
      return "32"
    case "december7":
      return "33"
    case "july29":
      return "34"
    case "november23":
      return "35"
    case "september22":
      return "36"
    case "november18":
      return "37"
    case "november5":
      return "38"
    case "august6":
      return "39"
    case "november13":
      return "40"
    case "january19":
      return "41"
    case "july25":
      return "42"
    case "august22":
      return "43"
    case "january15":
      return "44"
    case "july14":
      return "45"
    case "december13":
      return "46"
    case "november12":
      return "47"
    case "march3":
      return "48"
    case "november7":
      return "49"
    case "march25":
      return "50"
    case "february28":
      return "51"
    case "december19":
      return "52"
    case "september6":
      return "53"
    case "october21":
      return "54"
    case "april28":
      return "55"
    case "june2":
      return "56"
    case "october4":
      return "57"
    case "october16":
      return "58"
    case "may9":
      return "59"
    case "december27":
      return "60"
    case "september24":
      return "61"
    case "december1":
      return "62"
    case "january17":
      return "63"
    case "december24":
      return "64"
    case "may30":
      return "65"
    case "may5":
      return "66"
    case "june29":
      return "67"
    case "december18":
      return "68"
    case "november20":
      return "69"
    case "october17":
      return "70"
    case "november3":
      return "71"
    case "august13":
      return "72"
    case "june1":
      return "73"
    case "june24":
      return "74"
    case "april20":
      return "75"
    case "september28":
      return "76"
    case "february27":
      return "77"
    case "january27":
      return "78"
    case "october26":
      return "79"
    case "july21":
      return "80"
    case "october14":
      return "81"
    case "june6":
      return "82" 
    case "june8":
      return "83"
    case "october11":
      return "84"
    case "june22":
      return "85"
    case "august31":
      return "86"
    case "july5":
      return "87"
    case "may15":
      return "88"
    case "january3":
      return "89" 
    case "june21":
      return "90" 
    case "may28":
      return "91"
    case "december6":
      return "92"
    case "february24":
      return "93"
    case "january25":
      return "94"
    case "july28":
      return "95"
    case "june11":
      return "96" 
    case "july1":
      return "97"
    case "july18":
      return "98" 
    case "march21":
      return "99"
    case "may5":
      return "100"
    case "july9":
      return "101"
    case "december28":
      return "102"
    case "october22":
      return "103"
    case "august19":
      return "104"
    case "september29":
      return "105" 
    case "may13":
      return "106"
    case "february26":
      return "107"
    case "july27":
      return "108"
    case "april24":
      return "109"
    case "august26":
      return "110"
    case "may21":
      return "111"
    case "july24":
      return "112"
    case "june25":
      return "113"
    case "july13":
      return "114" 
    case "january23":
      return "115"
    case "february16":
      return "116"
    case "april17":
      return "117"
    case "december29":
      return "118"
    case "january14":
      return "119" 
    case "december12":
      return "120"
    case "february2":
      return "121"
    case "april29":
      return "122"
    case "july23":
      return "123" 
    case "march26":
      return "124"
    case "november21":
      return "125"
    case "january6":
      return "126"
    case "january1":
      return "127"
    case "june19":
      return "128"
    case "september12":
      return "129" 
    case "september17":
      return "130"
    case "june30":
      return "131" 
    case "april7":
      return "132"
    case "july17":
      return "133"
    case "march5":
      return "134"
    case "january4":
      return "135"
    case "june14":
      return "136"
    case "march19":
      return "137" 
    case "september23":
      return "138"
    case "may25":
      return "139"
    case "august29":
      return "140"
    case "october10":
      return "141" 
    case "october25":
      return "142"
    case "october27":
      return "143"
    case "january30":
      return "144"
    case "february14":
      return "145"
    case "july12":
      return "146"
    case "april21":
      return "147"
    case "september27":
      return "148"
    case "april8":
      return "149"
    case "april5":
      return "150"
    case "june3":
      return "151" 
    case "september30":
      return "152"
    case "october3":
      return "153"
    case "september1":
      return "154"
    case "september4":
      return "155"
    case "may8":
      return "156"
    case "may31":
      return "157"
    case "january31":
      return "158"
    case "december17":
      return "159"
    case "march23":
      return "160"
    case "february5":
      return "161"
    case "august7":
      return "162"
    case "march18":
      return "163"
    case "november11":
      return "164"
    case "november25":
      return "165"
    case "july22":
      return "166"
    case "january18":
      return "167"
    case "may11":
      return "168"
    case "march13":
      return "169"
    case "february10":
      return "170"
    case "february20":
      return "171"
    case "november29":
      return "172"
    case "april11":
      return "173"
    case "february9":
      return "174"
    case "march17":
      return "175"
    case "may12":
      return "176"
    case "may29":
      return "177"
    case "december26":
      return "178"
    case "september20":
      return "179"
    case "may26":
      return "180"
    case "july11":
      return "181"
    case "october12":
      return "182"
    case "may18":
      return "183"
    case "march30":
      return "184"
    case "april27":
      return "185"
    case "october13":
      return "186"
    case "february15":
      return "187"
    case "june18":
      return "188"
    case "january13":
      return "189"
    case "march28":
      return "190"
    case "july6":
      return "191"
    case "november14":
      return "192"
    case "march27":
      return "193"
    case "september26":
      return "194"
    case "april19":
      return "195"
    case "may20":
      return "196" 
    case "november27":
      return "197"
    case "august24":
      return "198"
    case "august17":
      return "199" 
    case "june27":
      return "200"
    case "january26":
      return "201"
    case "march7":
      return "202"
    case "march31":
      return "203"
    case "december23":
      return "204"
    case "april25":
      return "205"
    case "december14":
      return "206"
    case "january28":
      return "207"
    case "august27":
      return "208"
    case "december25":
      return "209"
    case "june15":
      return "210"
    case "june10":
      return "211"
    case "january21":
      return "212"
    case "february19":
      return "213"
    case "january2":
      return "214"
    case "november30":
      return "215"
    case "june26":
      return "216"
    case "january29":
      return "217"
    case "september2":
      return "218"
    case "june5":
      return "219"
    case "september16":
      return "220"
    case "september10":
      return "221"
    case "june23":
      return "222"
    case "april13":
      return "223"
    case "may6":
      return "224"
    case "february11":
      return "225"
    case "march16":
      return "226"
    case "september13":
      return "227"
    case "december22":
      return "228"
    case "march8":
      return "229" 
    case "october8":
      return "230"
    case "december10":
      return "231"
    case "january12":
      return "232"
    case "february18":
      return "233"
    case "may2":
      return "234"
    case "may27":
      return "235"
    case "february22":
      return "236"
    case "october30":
      return "237"
    case "may1":
      return "238"
    case "january20":
      return "239"
    case "september21":
      return "240"
    case "october7":
      return "241"
    case "october9":
      return "242"
    case "september7":
      return "243"
    case "august8":
      return "244"
    case "june16":
      return "245"
    case "may4":
      return "246"
    case "november28":
      return "247"
    case "march4":
      return "248"
    case "december15":
      return "249"
    case "october20":
      return "250"
    case "february7":
      return "251"
    case "may10":
      return "252"
    case "may16":
      return "253"
    case "december9":
      return "254"
    case "february1":
      return "255"
    case "july7":
      return "256"
    case "june12":
      return "257"
    case "april9":
      return "258"
    case "april4":
      return "259"
    case "october28":
      return "260"
    case "march29":
      return "261"
    case "january10":
      return "262"
    case "october5":
      return "263"
    case "august9":
      return "264"
    case "may24":
      return "265"
    case "february6":
      return "266"
    case "april23":
      return "267"
    case "march2":
      return "268"
    case "august2":
      return "269"
    case "april15":
      return "270"
    case "july31":
      return "271"
    case "april14":
      return "272"
    case "august14":
      return "273"
    case "october18":
      return "274"
    case "june13":
      return "275"
    case "april3":
      return "276"
    case "october31":
      return "277"
    case "july26":
      return "278"
    case "march9":
      return "279"
    case "august23":
      return "280"
    case "august28":
      return "281"
    case "december11":
      return "282"
    case "december21":
      return "283"
    case "march15":
      return "284"
    case "august15":
      return "285"
    case "january16":
      return "286"
    case "september19":
      return "287"
    case "august16":
      return "288"
    case "november2": 
      return "289"
    case "april30":
      return "290"
    case "september3":
      return "291"
    case "november8":
      return "292"
    case "november26":
      return "293"
    case "december4":
      return "294"
    case "december31":
      return "295"
    case "november22":
      return "296"
    case "july30":
      return "297"
    case "may17":
      return "298"
    case "july10":
      return "299"
    case "november4":
      return "300"
    case "june7":
      return "301"
    case "september9":
      return "302"
    case "october23":
      return "303"
    case "july4":
      return "304"
    case "april26":
      return "305"
    case "november24":
      return "306"
    case "august11":
      return "307"
    case "december30":
      return "308"
    case "august21":
      return "309"
    case "november17":
      return "310"
    case "january11":
      return "311"
    case "march10":
      return "312"
    case "march14":
      return "313"
    case "april18":
      return "314"
    case "october19":
      return "315"
    case "february21":
      return "316"
    case "october24":
      return "317"
    case "february23":
      return "318"
    case "november15":
      return "319"
    case "august5":
      return "320"
    case "december16":
      return "321"
    case "december2":
      return "322"
    case "december5":
      return "323"
    case "july19":
      return "324"
    case "february8":
      return "325"
    case "august3":
      return "326"
    case "september25":
      return "327"
    case "january7":
      return "328"
    case "january22":
      return "329"
    case "april10":
      return "330"
    case "july15":
      return "331"
    case "november19":
      return "332"
    case "october29":
      return "333"
    case "february13":
      return "334"
    case "november9":
      return "335"
    case "august25":
      return "336"
    case "august18":
      return "337"
    case "march22":
      return "338"
    case "september18":
      return "339"
    case "february12":
      return "340"
    case "may19":
      return "341"
    case "june4":
      return "342"
    case "march1":
      return "343"
    case "february3":
      return "344"
    case "november10":
      return "345"
    case "august4":
      return "346"
    case "november1":
      return "347"
    case "may23":
      return "348"
    case "july2":
      return "349"
    case "august20":
      return "350"
    case "june8":
      return "352"
    case "january24":
      return "353"
    case "september8":
      return "355"
    case "june20":
      return "356"
    case "may7":
      return "357"
    case "september11":
      return "358"
    case "june28":
      return "359"
    case "april12":
      return "360"
    case "july3":
      return "361"
    case "december20":
      return "362"
    case "august1":
      return "363"
    case "march11":
      return "364"
    case "november16":
      return "365"
    case "february1":
      return "366"
      default:
        return "101"
  }
}

module.exports = router;
