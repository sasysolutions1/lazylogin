// background.js
if(typeof Object.create !== 'function'){
	Object.create = function(o){
	var F = function(){};
	F.prototype = o;
	return new F(); };};
Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this; };


if docu
var submit = document.getElementById('submit')
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });




});

chrome.browserAction.onClicked.addListener(function(x) {
if(document.getElementById('name')!= undefined){

}//end if

}//end listener
//onclicks cant have parentheses