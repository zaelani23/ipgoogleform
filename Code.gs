function orgIP(ip) {
  var url = "http://ipinfo.io/"+ ip +"?token=9724f07d4aa0be";
  var response = UrlFetchApp.fetch(url);
  var json = JSON.parse(response.getContentText());
  return json.org;
}

function cekIP() {
  var url = "http://api.ipify.org/?format=json";
  var response = UrlFetchApp.fetch(url);
  var json = JSON.parse(response.getContentText());
  return json.ip;
}

function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

/* @Include JavaScript and CSS Files */
function include() {
  var HTMLString = "<input type='text' class='form-control' id='ip' value='"+ cekIP() +"' readonly>";
  HTMLOutput = HtmlService.createHtmlOutput(HTMLString);
  return HTMLOutput.getContent();
}
 
/* @Process */
function processForm(x,y,z) {
  var url = "Paste URL DISINI#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("NAMA SHEET");
  var lokasi = Maps.newGeocoder().reverseGeocode(y, z);
  alamat= lokasi.results[0].formatted_address;
  
  ws.appendRow([x,cekIP(),orgIP(cekIP()),y,z,alamat]);
}
