/*
try {
    throw new Error("StopExecution");
} catch (e) {
    if (e.message === "StopExecution") {
        // Stop further execution
    } else {
        throw e; // Rethrow other errors
    }
}
*/

if(typeof thisVariableDoesNotExist_blockifyExt === 'undefined')
{
var thisVariableDoesNotExist_blockifyExt = 1;

chrome.storage.local.get(['staticrules'], (result0) => {
    chrome.storage.local.get(['exceptions'], (result) => {

	console.log(result0.staticrules);
    //if (enabledRulesets.includes("ruleset_1") || enabledRulesets.includes("ruleset_2")) 
    if(result0.staticrules != "disabled")
    {
      console.log(`enabled.`); //partial or complete adblocking enabled -> use css based adblocking as well!
      //check if manually disabled;
      var hostname = window.location.hostname;

        if(result.exceptions == null || result.exceptions == undefined || result.exceptions == "" || result.exceptions == [])
        {
          //exceptions list empty: blocking enabled on all websites
		  injectFunctionInstantly();
		  addcss();

		  if (document.readyState === 'loading') 
		  { 
			document.addEventListener("DOMContentLoaded", observe_changes2); // DOMContentLoaded has not fired yet
		  } 
		  else // DOMContentLoaded has already fired
		  {
			observe_changes2();
		  }
		  
        }
        else if(hostname && result.exceptions.includes(hostname))
        {
            //included in list of exceptions: ad blocking disabled, don't trigger css adblocking mech.
        }
        else
        {
            //not there in the list of exceptions -> adblocking enabled
			injectFunctionInstantly();
			addcss();
			if (document.readyState === 'loading') 
			{ 
			  document.addEventListener("DOMContentLoaded", observe_changes2); // DOMContentLoaded has not fired yet
			} 
			else // DOMContentLoaded has already fired
			{
			  observe_changes2();
			}
        }  
    } 
    else 
    {
      //=== disabled for sure
      console.log(`disabled.`); //adblocking disabled totally -> dont do spotify adblocking
    }
}); 
}); 
/*
chrome.storage.local.get(['exceptions'], (result) => {
	if(result.exceptions == null || result.exceptions == undefined || result.exceptions == "")
	{
	  chrome.storage.local.set({ 'exceptions': [] });
	  //not there in exceptions, bcz empty array, blocking enabled
	  //enabled => continue
	}
	else if(result.exceptions.includes(window.location.hostname))
	{
		//included in exceptions: blocking disabled
		return;
	}
	else
	{
		//not there in the list, blocking enabled
		//enabled => continue
	}

	injectFunctionInstantly();
    addcss();
});
*/
}

//console.log(localStorage);

function addcss()
{
	if(document.getElementById("bugfix_for_spotify") == null)
	{
	var sty = document.createElement("style");
	sty.id = "bugfix_for_spotify";
	sty.innerHTML = 
	`
	.GenericModal[aria-label="error-dialog.generic.header"]:has(button[data-encore-id="buttonPrimary"]),
	.GenericModal[aria-label="Something went wrong"]:has(button[data-encore-id="buttonPrimary"])
    {
     display: none !important;
    }
	`;
	if(document.body)
	{
		document.body.appendChild(sty);
	}
	else if(document.head)
	{
		document.head.appendChild(sty);
	}
	else
	{
		document.getElementsByTagName("html")[0].appendChild(sty);
	}
    }
};

async function injectOtherScripts() 
{
	await injectScript('injected/adsRemovalV1.js');
	await injectScript('lib/sweetalert.min.js');
}

function injectScript(scriptName) 
{
	return new Promise(function(resolve, reject) 
	{
		var s = document.createElement('script');
		s.src = chrome.runtime.getURL(scriptName);
		s.onload = function() {
			this.parentNode.removeChild(this);
			resolve(true);
		};
		(document.head||document.documentElement).appendChild(s);
	});
}

function injectFunctionInstantly()
{
	// Reading from disk seems to slow down the injection
	/* var response = await fetch(chrome.extension.getURL(scriptName));
	   var text = new TextDecoder("utf-8").decode(await response.body.getReader().read().value); */
	
	/*
	var s = document.createElement('script');
	var functionText = injectedFunction.toString();
	s.textContent = functionText.substring(functionText.indexOf('{') + 1, functionText.length - 1);
	console.log(s);
	*/
	//chrome.storage.local.set({ "injectnow": s });

	var s = document.createElement('script');
	s.src = chrome.runtime.getURL("news.js");

	s.onload = function() 
	{
		// This function will be executed after the script has finished loading and executing
		// Place your desired code here
		injectOtherScripts();
	};

	(document.head||document.documentElement).appendChild(s);

	localStorage.removeItem("local_a");
}


//document.addEventListener('updateCounter', onupdated);

/*
function arraysAreSame(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    return arr1.every((element, index) => element === arr2[index]);
};
*/
function arraysAreEqual(arr1, arr2) {
    // Check if the arrays have the same length
	console.log(arr1 + " " + arr2);

    if (arr1.length !== arr2.length) {
        return false;
    }

    // Sort both arrays
    const sortedArr1 = arr1.slice().sort();
    const sortedArr2 = arr2.slice().sort();

    // Compare sorted arrays element by element
    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return false;
        }
    }

    return true;
};

function isSubset(a, b) 
{
	console.log(a + " " + b);
    // Convert array b to a Set
    const setB = new Set(b);

    // Check if every element of a is in setB
    return a.every(element => setB.has(element));
};


function updateDNR(o) 
{
	console.log("check if array is same");
	var a = JSON.parse(o);
	console.log(a);

	if(localStorage.getItem("local_a") === null)
	{
		localStorage.setItem("local_a", JSON.stringify(a)); //1st time
	}
	else if(localStorage.getItem("local_a") && arraysAreEqual(JSON.parse(localStorage.getItem("local_a")), a))
	{
		//arrays are identical
		console.log("identical");
		return;
	}
	else if(localStorage.getItem("local_a") && isSubset(a, JSON.parse(localStorage.getItem("local_a"))) )
	{
		//the new incoming set a (updated) is a subset of already working set in localstorage
		console.log("subset");
		return;
	}
	else
	{
		//arrays not same
		/*
// Define the two arrays
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

// Merge arrays and remove duplicates
const mergedArray = [...new Set([...array1, ...array2])];

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
		*/
		localStorage.setItem("local_a", JSON.stringify(a));
	}
	
	onupdated(); //increase count

	console.log('Updating ruleset with IDs:', a);

	/*
    {
        "id": 6,
        "priority": 1,
        "action": {
            "type": "block"
        },
        "condition": {
            "urlFilter": "||spotify.com/storage-resolve/files/audio/interactive/*",
            "resourceTypes": ["xmlhttprequest"],
            "initiatorDomains": ["open.spotify.com"]
        }
    }
	*/
	var baseId = 50000;  
    /*
	var newRules = a.map((id, index) => (
	{
		"id": baseId + (index*2) + 1,
		"priority": 1000,
		"action": { 
			"type": "redirect",
			"redirect": {
				"extensionPath": "/web_accessible_resources/noop-1s.mp4"
			} 
		},
		"condition": { "urlFilter": `*://*${id}*`, "resourceTypes": ["media"], "initiatorDomains": ["open.spotify.com"] }
	},
	{
		"id": baseId + (index*2) + 2,
		"priority": 1000,
		"action": { 
			"type": "block"
		},
		"condition": { "urlFilter": `||spotify.com/storage-resolve/files/audio/interactive/*${id}*`, "resourceTypes": ["xmlhttprequest"], "initiatorDomains": ["open.spotify.com"] }
	}
	)); //allowAllRequests
	*/
	var newRules = a.flatMap((id, index) => [
		{
		  "id": baseId + (index * 5) + 1,
		  "priority": 100000,
		  "action": {
			"type": "modifyHeaders",
			"responseHeaders": [
			  {
				"header": "Referrer-Policy",
				"operation": "set",
				"value": "unsafe-url"
			  }
			]
		  },
		  "condition": {
			"urlFilter": `*://*${id}*`,
			"resourceTypes": ["media"],
			"initiatorDomains": ["open.spotify.com"]
		  } 
		}
		,
		{
		  "id": baseId + (index * 5) + 2,
		  "priority": 100000,
		  "action": {
			"type": "modifyHeaders",
			"responseHeaders": [
				{
				  "header": "Access-Control-Allow-Origin",
				  "operation": "set",
				  "value": "*"
				}
			  ]
		  },
		  "condition": {
			"urlFilter": `*://*${id}*`,
			"resourceTypes": ["media"],
			"initiatorDomains": ["open.spotify.com"]
		  } 
		}
		,
		{
		  "id": baseId + (index * 5) + 3,
		  "priority": 100000,
		  "action": {
			"type": "modifyHeaders",
			"responseHeaders": [
			  {
				"header": "Location",
				"operation": "set",
				"value": "https://cdn.getblockify.com/noop-1s.mp4"
			  }
			]
		  },
		  "condition": {
			"urlFilter": `*://*${id}*`,
			"resourceTypes": ["media"],
			"initiatorDomains": ["open.spotify.com"]
		  } 
		}
		,
		{
		  "id": baseId + (index * 5) + 4,
		  "priority": 100000,
		  "action": {
			"type": "modifyHeaders",
			"responseHeaders": [
			  {
				"header": "Content-Security-Policy",
				"operation": "remove"
			  }
			]
		  },
		  "condition": {
			"urlFilter": `*://*${id}*`,
			"resourceTypes": ["media"],
			"initiatorDomains": ["open.spotify.com"]
		  } 
		}
		,
		{
		  "id": baseId + (index * 5) + 5,
		  "priority": 10000,
		  "action": {
			"type": "redirect",
			"redirect": {
			  "url": "https://cdn.getblockify.com/noop-1s.mp4"
			}
		  },
		  "condition": {
			"urlFilter": `*://*${id}*`,
			"resourceTypes": ["media"],
			"initiatorDomains": ["open.spotify.com"]
		  }
		}
		/*
		,
		{
		  "id": baseId + (index * 2) + 2,
		  "priority": 100000,
		  "action": {
			"type": "block"
		  },
		  "condition": {
			"urlFilter": `||spotify.com/storage-resolve/files/audio/interactive/*${id}*`,
			"resourceTypes": ["xmlhttprequest"],
			"initiatorDomains": ["open.spotify.com"]
		  }
		  
		}
		*/
	  ]);
	  
	console.log('New rules prepared:');
	console.log(newRules);
	chrome.runtime.sendMessage({ what: 'update_dnr', newRules: newRules })

};

function observe_changes2() 
{
// The target element you want to observe
var target_el2 = document.body; // Replace 'yourElementId' with the actual element ID
if(target_el2 == null || target_el2 == undefined)
{
setTimeout(observe_changes2, 1100);
return;
}

// Options for the MutationObserver (specify which types of mutations to observe)
var observerConfig2 = 
{
  attributes: true, // Set to true to observe attribute changes
  attributeFilter: ['ad_content_id'], // Replace with the attribute you want to monitor
};

// Callback function to handle observed mutations
function handleAttributeChange2(mutationsList, observer) 
{
  for (mutation of mutationsList) 
  {
    if (mutation.type == 'attributes') 
	{
      // Check if the specific attribute you're interested in has changed
        /*
        if (mutation.attributeName == 'a_d_r_m_d') 
		{
          console.log(`'a_d_r_m_d' has changed to: ` + target_el2.getAttribute('a_d_r_m_d'));
		  if(Number(target_el2.getAttribute('a_d_r_m_d')) > 0)
		  {
			onupdated();
		  }
         // Do something with the new attribute value here
        }
		else 
		*/
		if (mutation.attributeName == 'ad_content_id') 
		{
			console.log(`'ad_content_id' has changed to: ` + target_el2.getAttribute('ad_content_id'));
			if(target_el2.getAttribute('ad_content_id') != undefined && target_el2.getAttribute('ad_content_id') != null && target_el2.getAttribute('ad_content_id') != "" && target_el2.getAttribute('ad_content_id') != "[]")
			{
				//correct ad_content_id
				updateDNR(target_el2.getAttribute('ad_content_id'));
			}
			else
			{
				console.log("undef? " + target_el2.getAttribute('ad_content_id'));
			}
		}
    }
  }
};

// Create a MutationObserver instance with the callback function
var observer2 = new MutationObserver(handleAttributeChange2);

// Start observing the target element
observer2.observe(target_el2, observerConfig2);
	
};

function onupdated()
{
	chrome.storage.local.get(["removedcount"]).then((result) => 
	{
	console.log(result.removedcount);
	if(result.removedcount === null || result.removedcount === undefined)
	{
		//new case
		chrome.storage.local.set({ "removedcount": 1 });
	}
	else
	{
		chrome.storage.local.set({ "removedcount": Number(result.removedcount) + 1 });
	}
	return;
	});
	
	return;
};