function countryIP(ip) {
  var url = "http://ipinfo.io/"+ ip +"?token=9724f07d4aa0be";
  var response = UrlFetchApp.fetch(url);
  var json = JSON.parse(response.getContentText());
  return json.country;
}
function regionIP(ip) {
  var url = "http://ipinfo.io/"+ ip +"?token=9724f07d4aa0be";
  var response = UrlFetchApp.fetch(url);
  var json = JSON.parse(response.getContentText());
  return json.region;
}
function cityIP(ip) {
  var url = "http://ipinfo.io/"+ ip +"?token=9724f07d4aa0be";
  var response = UrlFetchApp.fetch(url);
  var json = JSON.parse(response.getContentText());
  return json.city;
}
function locIP(ip) {
  var url = "http://ipinfo.io/"+ ip +"?token=9724f07d4aa0be";
  var response = UrlFetchApp.fetch(url);
  var json = JSON.parse(response.getContentText());
  return json.loc;
}
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
function charIdGenerator()
 {
     var charId  ="";
       for (var i = 1; i < 10 ; i++) 
       { 
           charId += String.fromCharCode(97 + Math.random()*10);
       }
     return charId;    
 }

function doGet(request){
  /* url of your spreadsheet */
  var url = "https://docs.google.com/spreadsheets/d/1SuOe8K8LanM6Iar1gPDGiRZN4GZbLe6BCemHwdY6aDo/edit#gid=0z";
  var ss = SpreadsheetApp.openByUrl(url);
  /* target sheet */
  var ws = ss.getSheetByName("IP Responder"); 
  var uniqueid = charIdGenerator();
  ws.appendRow([uniqueid,cekIP(),countryIP(cekIP()),regionIP(cekIP()),cityIP(cekIP()),locIP(cekIP()),orgIP(cekIP())]);
  
  var HTMLString = "<!DOCTYPE html><html><head><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'></head><body><div class='container'><div class='row'><div class='col-6'><form><p class='h4 mb-4 text-center'>Klik 'Mulai' untuk melanjutkan!!</p><div class='form-group'><label for='ip'>IP Address:</label>"
  + "<input type='text' class='form-control' id='ip' value="+ cekIP() +" readonly>"
  + "</div><div class='form-group'><label for='unik'>Unique ID:</label><p>silakkan salin unique id anda untuk proses verifikasi jawaban anda nanti.</p>"
  + "<input type='text' class='form-control' id='unik' value="+ uniqueid +" readonly>"
  + "</div><a href='https://forms.gle/pudcDpyqakNPykbL6' target='_blank' onclick='google.script.host.close()'>Mulai</a></form></div></div></div></body></html>";
  
 HTMLOutput = HtmlService.createHtmlOutput(HTMLString);
 return HTMLOutput
}
