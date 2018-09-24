"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PackCategory;
(function (PackCategory) {
    PackCategory["CRM"] = "CRM";
    PackCategory["Calendar"] = "Calendar";
    PackCategory["Communication"] = "Communication";
    PackCategory["DataStorage"] = "DataStorage";
    PackCategory["Design"] = "design";
    PackCategory["Fun"] = "Fun";
    PackCategory["Geo"] = "Geo";
    PackCategory["Mathematics"] = "Mathematics";
    PackCategory["Organization"] = "Organization";
    PackCategory["Recruiting"] = "Recruiting";
    PackCategory["Weather"] = "Weather";
})(PackCategory = exports.PackCategory || (exports.PackCategory = {}));
var PackId;
(function (PackId) {
    PackId[PackId["Airtable"] = 1001] = "Airtable";
    PackId[PackId["CodaDebug"] = 1009] = "CodaDebug";
    PackId[PackId["CodaDoc"] = 1021] = "CodaDoc";
    PackId[PackId["CodaTrigonometry"] = 1006] = "CodaTrigonometry";
    PackId[PackId["Figma"] = 1010] = "Figma";
    PackId[PackId["FullContact"] = 1019] = "FullContact";
    PackId[PackId["Giphy"] = 1008] = "Giphy";
    PackId[PackId["GitHub"] = 1013] = "GitHub";
    PackId[PackId["GoogleCalendar"] = 1003] = "GoogleCalendar";
    PackId[PackId["GoogleContacts"] = 1011] = "GoogleContacts";
    PackId[PackId["GoogleDirections"] = 1020] = "GoogleDirections";
    PackId[PackId["GoogleNaturalLanguage"] = 1014] = "GoogleNaturalLanguage";
    PackId[PackId["GoogleTasks"] = 1012] = "GoogleTasks";
    PackId[PackId["Gmail"] = 1004] = "Gmail";
    PackId[PackId["Intercom"] = 1002] = "Intercom";
    PackId[PackId["Lob"] = 1023] = "Lob";
    PackId[PackId["Notion"] = 1005] = "Notion";
    PackId[PackId["Slack"] = 1000] = "Slack";
    PackId[PackId["Spotify"] = 1018] = "Spotify";
    PackId[PackId["Twilio"] = 1016] = "Twilio";
    PackId[PackId["Greenhouse"] = 1022] = "Greenhouse";
    PackId[PackId["Twitter"] = 1007] = "Twitter";
    PackId[PackId["Weather"] = 1015] = "Weather";
    PackId[PackId["Zoom"] = 1017] = "Zoom";
})(PackId = exports.PackId || (exports.PackId = {}));
var ProviderId;
(function (ProviderId) {
    ProviderId[ProviderId["Airtable"] = 2001] = "Airtable";
    ProviderId[ProviderId["Coda"] = 2002] = "Coda";
    ProviderId[ProviderId["Figma"] = 2003] = "Figma";
    ProviderId[ProviderId["FullContact"] = 2015] = "FullContact";
    ProviderId[ProviderId["Giphy"] = 2004] = "Giphy";
    ProviderId[ProviderId["GitHub"] = 2010] = "GitHub";
    ProviderId[ProviderId["Google"] = 2005] = "Google";
    ProviderId[ProviderId["Greenhouse"] = 2016] = "Greenhouse";
    ProviderId[ProviderId["Intercom"] = 2006] = "Intercom";
    ProviderId[ProviderId["Lob"] = 2017] = "Lob";
    ProviderId[ProviderId["Notion"] = 2007] = "Notion";
    ProviderId[ProviderId["Slack"] = 2008] = "Slack";
    ProviderId[ProviderId["Spotify"] = 2014] = "Spotify";
    ProviderId[ProviderId["Twilio"] = 2012] = "Twilio";
    ProviderId[ProviderId["Twitter"] = 2009] = "Twitter";
    ProviderId[ProviderId["Weather"] = 2011] = "Weather";
    ProviderId[ProviderId["Zoom"] = 2013] = "Zoom";
})(ProviderId = exports.ProviderId || (exports.ProviderId = {}));
var AuthenticationType;
(function (AuthenticationType) {
    AuthenticationType["None"] = "None";
    AuthenticationType["HeaderBearerToken"] = "HeaderBearerToken";
    AuthenticationType["CustomHeaderToken"] = "CustomHeaderToken";
    AuthenticationType["QueryParamToken"] = "QueryParamToken";
    AuthenticationType["OAuth2"] = "OAuth2";
    AuthenticationType["WebBasic"] = "WebBasic";
})(AuthenticationType = exports.AuthenticationType || (exports.AuthenticationType = {}));
function getCreateAuthenticationDefaults(auth) {
    if (auth.type === AuthenticationType.None) {
        return;
    }
    return auth.creationDefaults;
}
exports.getCreateAuthenticationDefaults = getCreateAuthenticationDefaults;
