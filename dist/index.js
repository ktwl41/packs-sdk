"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyFormat = exports.schema = exports.ensureUnreachable = exports.ensureNonEmptyString = exports.ensureExists = exports.assertCondition = exports.withQueryParams = exports.joinUrl = exports.getQueryParams = exports.makeStringArrayParameter = exports.makeStringParameter = exports.makeImageArrayParameter = exports.makeImageParameter = exports.makeHtmlArrayParameter = exports.makeHtmlParameter = exports.makeNumericArrayParameter = exports.makeNumericParameter = exports.makeDateArrayParameter = exports.makeDateParameter = exports.makeBooleanArrayParameter = exports.makeBooleanParameter = exports.simpleAutocomplete = exports.makeSimpleAutocompleteMetadataFormula = exports.autocompleteSearchObjects = exports.makeTranslateObjectFormula = exports.makeSyncTable = exports.makeStringFormula = exports.makeObjectFormula = exports.makeNumericFormula = exports.makeGetConnectionNameFormula = exports.makeEmptyFormula = exports.makeDynamicSyncTable = exports.makeMetadataFormula = exports.makeUserVisibleError = exports.isUserVisibleError = exports.isSyncPackFormula = exports.isStringPackFormula = exports.isObjectPackFormula = exports.isDynamicSyncTable = exports.isArrayType = exports.UserVisibleError = exports.Type = exports.StatusCodeError = exports.PrecannedDateRange = exports.SyncInterval = exports.QuotaLimitType = exports.PackCategory = exports.DefaultConnectionType = exports.FeatureSet = exports.AuthenticationType = void 0;
exports.FakeNpmDefinition = exports.FakeNpmMetadata = exports.FakeNpmPackVersion = exports.FakeNpmPackId = exports.FakeNpmProviderId = exports.FakeBggDefinitionOld = exports.FakeBggDefinition = exports.FakeBggMetadataOld = exports.FakeBggMetadata = exports.FakeBggPackVersionOld = exports.FakeBggPackVersion = exports.FakeBggPackId = exports.FakeBggProviderId = exports.fakeDefinitionToMetadata = exports.transformBody = exports.makeSchema = exports.makeObjectSchema = exports.ValueType = exports.DurationUnit = void 0;
var types_1 = require("./types");
Object.defineProperty(exports, "AuthenticationType", { enumerable: true, get: function () { return types_1.AuthenticationType; } });
var types_2 = require("./types");
Object.defineProperty(exports, "FeatureSet", { enumerable: true, get: function () { return types_2.FeatureSet; } });
var types_3 = require("./types");
Object.defineProperty(exports, "DefaultConnectionType", { enumerable: true, get: function () { return types_3.DefaultConnectionType; } });
var types_4 = require("./types");
Object.defineProperty(exports, "PackCategory", { enumerable: true, get: function () { return types_4.PackCategory; } });
var types_5 = require("./types");
Object.defineProperty(exports, "QuotaLimitType", { enumerable: true, get: function () { return types_5.QuotaLimitType; } });
var types_6 = require("./types");
Object.defineProperty(exports, "SyncInterval", { enumerable: true, get: function () { return types_6.SyncInterval; } });
var api_types_1 = require("./api_types");
Object.defineProperty(exports, "PrecannedDateRange", { enumerable: true, get: function () { return api_types_1.PrecannedDateRange; } });
var api_1 = require("./api");
Object.defineProperty(exports, "StatusCodeError", { enumerable: true, get: function () { return api_1.StatusCodeError; } });
var api_types_2 = require("./api_types");
Object.defineProperty(exports, "Type", { enumerable: true, get: function () { return api_types_2.Type; } });
var api_2 = require("./api");
Object.defineProperty(exports, "UserVisibleError", { enumerable: true, get: function () { return api_2.UserVisibleError; } });
var api_types_3 = require("./api_types");
Object.defineProperty(exports, "isArrayType", { enumerable: true, get: function () { return api_types_3.isArrayType; } });
var api_3 = require("./api");
Object.defineProperty(exports, "isDynamicSyncTable", { enumerable: true, get: function () { return api_3.isDynamicSyncTable; } });
var api_4 = require("./api");
Object.defineProperty(exports, "isObjectPackFormula", { enumerable: true, get: function () { return api_4.isObjectPackFormula; } });
var api_5 = require("./api");
Object.defineProperty(exports, "isStringPackFormula", { enumerable: true, get: function () { return api_5.isStringPackFormula; } });
var api_6 = require("./api");
Object.defineProperty(exports, "isSyncPackFormula", { enumerable: true, get: function () { return api_6.isSyncPackFormula; } });
var api_7 = require("./api");
Object.defineProperty(exports, "isUserVisibleError", { enumerable: true, get: function () { return api_7.isUserVisibleError; } });
var api_8 = require("./api");
Object.defineProperty(exports, "makeUserVisibleError", { enumerable: true, get: function () { return api_8.makeUserVisibleError; } });
// Formula definition helpers
var api_9 = require("./api");
Object.defineProperty(exports, "makeMetadataFormula", { enumerable: true, get: function () { return api_9.makeMetadataFormula; } });
var api_10 = require("./api");
Object.defineProperty(exports, "makeDynamicSyncTable", { enumerable: true, get: function () { return api_10.makeDynamicSyncTable; } });
var api_11 = require("./api");
Object.defineProperty(exports, "makeEmptyFormula", { enumerable: true, get: function () { return api_11.makeEmptyFormula; } });
var api_12 = require("./api");
Object.defineProperty(exports, "makeGetConnectionNameFormula", { enumerable: true, get: function () { return api_12.makeGetConnectionNameFormula; } });
var api_13 = require("./api");
Object.defineProperty(exports, "makeNumericFormula", { enumerable: true, get: function () { return api_13.makeNumericFormula; } });
var api_14 = require("./api");
Object.defineProperty(exports, "makeObjectFormula", { enumerable: true, get: function () { return api_14.makeObjectFormula; } });
var api_15 = require("./api");
Object.defineProperty(exports, "makeStringFormula", { enumerable: true, get: function () { return api_15.makeStringFormula; } });
var api_16 = require("./api");
Object.defineProperty(exports, "makeSyncTable", { enumerable: true, get: function () { return api_16.makeSyncTable; } });
var api_17 = require("./api");
Object.defineProperty(exports, "makeTranslateObjectFormula", { enumerable: true, get: function () { return api_17.makeTranslateObjectFormula; } });
var api_18 = require("./api");
Object.defineProperty(exports, "autocompleteSearchObjects", { enumerable: true, get: function () { return api_18.autocompleteSearchObjects; } });
var api_19 = require("./api");
Object.defineProperty(exports, "makeSimpleAutocompleteMetadataFormula", { enumerable: true, get: function () { return api_19.makeSimpleAutocompleteMetadataFormula; } });
var api_20 = require("./api");
Object.defineProperty(exports, "simpleAutocomplete", { enumerable: true, get: function () { return api_20.simpleAutocomplete; } });
var api_21 = require("./api");
Object.defineProperty(exports, "makeBooleanParameter", { enumerable: true, get: function () { return api_21.makeBooleanParameter; } });
var api_22 = require("./api");
Object.defineProperty(exports, "makeBooleanArrayParameter", { enumerable: true, get: function () { return api_22.makeBooleanArrayParameter; } });
var api_23 = require("./api");
Object.defineProperty(exports, "makeDateParameter", { enumerable: true, get: function () { return api_23.makeDateParameter; } });
var api_24 = require("./api");
Object.defineProperty(exports, "makeDateArrayParameter", { enumerable: true, get: function () { return api_24.makeDateArrayParameter; } });
var api_25 = require("./api");
Object.defineProperty(exports, "makeNumericParameter", { enumerable: true, get: function () { return api_25.makeNumericParameter; } });
var api_26 = require("./api");
Object.defineProperty(exports, "makeNumericArrayParameter", { enumerable: true, get: function () { return api_26.makeNumericArrayParameter; } });
var api_27 = require("./api");
Object.defineProperty(exports, "makeHtmlParameter", { enumerable: true, get: function () { return api_27.makeHtmlParameter; } });
var api_28 = require("./api");
Object.defineProperty(exports, "makeHtmlArrayParameter", { enumerable: true, get: function () { return api_28.makeHtmlArrayParameter; } });
var api_29 = require("./api");
Object.defineProperty(exports, "makeImageParameter", { enumerable: true, get: function () { return api_29.makeImageParameter; } });
var api_30 = require("./api");
Object.defineProperty(exports, "makeImageArrayParameter", { enumerable: true, get: function () { return api_30.makeImageArrayParameter; } });
var api_31 = require("./api");
Object.defineProperty(exports, "makeStringParameter", { enumerable: true, get: function () { return api_31.makeStringParameter; } });
var api_32 = require("./api");
Object.defineProperty(exports, "makeStringArrayParameter", { enumerable: true, get: function () { return api_32.makeStringArrayParameter; } });
// Execution helpers.
var url_1 = require("./helpers/url");
Object.defineProperty(exports, "getQueryParams", { enumerable: true, get: function () { return url_1.getQueryParams; } });
var url_2 = require("./helpers/url");
Object.defineProperty(exports, "joinUrl", { enumerable: true, get: function () { return url_2.join; } });
var url_3 = require("./helpers/url");
Object.defineProperty(exports, "withQueryParams", { enumerable: true, get: function () { return url_3.withQueryParams; } });
// General Utilities
var ensure_1 = require("./helpers/ensure");
Object.defineProperty(exports, "assertCondition", { enumerable: true, get: function () { return ensure_1.assertCondition; } });
var ensure_2 = require("./helpers/ensure");
Object.defineProperty(exports, "ensureExists", { enumerable: true, get: function () { return ensure_2.ensureExists; } });
var ensure_3 = require("./helpers/ensure");
Object.defineProperty(exports, "ensureNonEmptyString", { enumerable: true, get: function () { return ensure_3.ensureNonEmptyString; } });
var ensure_4 = require("./helpers/ensure");
Object.defineProperty(exports, "ensureUnreachable", { enumerable: true, get: function () { return ensure_4.ensureUnreachable; } });
// Object Schemas
const schema = __importStar(require("./schema"));
exports.schema = schema;
var schema_1 = require("./schema");
Object.defineProperty(exports, "CurrencyFormat", { enumerable: true, get: function () { return schema_1.CurrencyFormat; } });
var schema_2 = require("./schema");
Object.defineProperty(exports, "DurationUnit", { enumerable: true, get: function () { return schema_2.DurationUnit; } });
var schema_3 = require("./schema");
Object.defineProperty(exports, "ValueType", { enumerable: true, get: function () { return schema_3.ValueType; } });
var schema_4 = require("./schema");
Object.defineProperty(exports, "makeObjectSchema", { enumerable: true, get: function () { return schema_4.makeObjectSchema; } });
var schema_5 = require("./schema");
Object.defineProperty(exports, "makeSchema", { enumerable: true, get: function () { return schema_5.makeSchema; } });
// Pack response helpers
var handler_templates_1 = require("./handler_templates");
Object.defineProperty(exports, "transformBody", { enumerable: true, get: function () { return handler_templates_1.transformBody; } });
// Testing
var sample_utils_1 = require("./helpers/sample_utils");
Object.defineProperty(exports, "fakeDefinitionToMetadata", { enumerable: true, get: function () { return sample_utils_1.fakeDefinitionToMetadata; } });
var bgg_1 = require("./samples/bgg");
Object.defineProperty(exports, "FakeBggProviderId", { enumerable: true, get: function () { return bgg_1.FakeBggProviderId; } });
var bgg_2 = require("./samples/bgg");
Object.defineProperty(exports, "FakeBggPackId", { enumerable: true, get: function () { return bgg_2.FakeBggPackId; } });
var bgg_3 = require("./samples/bgg");
Object.defineProperty(exports, "FakeBggPackVersion", { enumerable: true, get: function () { return bgg_3.FakeBggPackVersion; } });
var bgg_4 = require("./samples/bgg");
Object.defineProperty(exports, "FakeBggPackVersionOld", { enumerable: true, get: function () { return bgg_4.FakeBggPackVersionOld; } });
var bgg_5 = require("./samples/bgg");
Object.defineProperty(exports, "FakeBggMetadata", { enumerable: true, get: function () { return bgg_5.FakeBggMetadata; } });
var bgg_6 = require("./samples/bgg");
Object.defineProperty(exports, "FakeBggMetadataOld", { enumerable: true, get: function () { return bgg_6.FakeBggMetadataOld; } });
var bgg_7 = require("./samples/bgg");
Object.defineProperty(exports, "FakeBggDefinition", { enumerable: true, get: function () { return bgg_7.FakeBggDefinition; } });
var bgg_8 = require("./samples/bgg");
Object.defineProperty(exports, "FakeBggDefinitionOld", { enumerable: true, get: function () { return bgg_8.FakeBggDefinitionOld; } });
var npm_1 = require("./samples/npm");
Object.defineProperty(exports, "FakeNpmProviderId", { enumerable: true, get: function () { return npm_1.FakeNpmProviderId; } });
var npm_2 = require("./samples/npm");
Object.defineProperty(exports, "FakeNpmPackId", { enumerable: true, get: function () { return npm_2.FakeNpmPackId; } });
var npm_3 = require("./samples/npm");
Object.defineProperty(exports, "FakeNpmPackVersion", { enumerable: true, get: function () { return npm_3.FakeNpmPackVersion; } });
var npm_4 = require("./samples/npm");
Object.defineProperty(exports, "FakeNpmMetadata", { enumerable: true, get: function () { return npm_4.FakeNpmMetadata; } });
var npm_5 = require("./samples/npm");
Object.defineProperty(exports, "FakeNpmDefinition", { enumerable: true, get: function () { return npm_5.FakeNpmDefinition; } });
