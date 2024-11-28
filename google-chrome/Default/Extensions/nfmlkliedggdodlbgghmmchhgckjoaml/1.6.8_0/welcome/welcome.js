document.getElementById("clickhere").addEventListener("click", openview);
document.getElementById("shortcut").addEventListener("click", openshort);

function openview()
{
    document.getElementById("clickhere").innerHTML = "please follow these steps:"; 
    document.getElementById("clickhere").id = "clicked";
    
    document.getElementById("toggle").className = ""; 
    document.getElementById("scroll2").scrollIntoView();
};

function openshort()
{
    chrome.tabs.create({ url: "chrome://extensions/shortcuts" });
};
/*
setTimeout(function(){
    //injectScript_(chrome.runtime.getURL("permission_check.js"));
},600);
*/

function injectScript_(scriptName) 
{
	return new Promise(function(resolve, reject) 
	{
		var s = document.createElement('script');
		s.src = scriptName;
		s.onload = function() {
			this.parentNode.removeChild(this);
			resolve(true);
		};
		(document.head||document.documentElement).appendChild(s);
	});
};