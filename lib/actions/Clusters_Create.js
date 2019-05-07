/**
 * Auto-generated action file for "BatchAI" API.
 *
 * Generated at: 2019-05-07T14:37:40.297Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / azure-com-batchai-batch-ai-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'Clusters_Create'
 * Endpoint Path: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/clusters/{clusterName}'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "resourceGroupName",
    "workspaceName",
    "clusterName",
    "api-version",
    "subscriptionId"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "resourceGroupName": "resourceGroupName",
    "workspaceName": "workspaceName",
    "clusterName": "clusterName",
    "api_version": "api-version",
    "subscriptionId": "subscriptionId",
    "azureBlobFileSystems": "azureBlobFileSystems",
    "azureFileShares": "azureFileShares",
    "fileServers": "fileServers",
    "unmanagedFileSystems": "unmanagedFileSystems",
    "mountVolumes": "mountVolumes",
    "id": "id",
    "component": "component",
    "instrumentationKey": "instrumentationKey",
    "secretUrl": "secretUrl",
    "sourceVault": "sourceVault",
    "instrumentationKeySecretReference": "instrumentationKeySecretReference",
    "appInsightsReference": "appInsightsReference",
    "performanceCountersSettings": "performanceCountersSettings",
    "commandLine": "commandLine",
    "environmentVariables": "environmentVariables",
    "secrets": "secrets",
    "stdOutErrPathPrefix": "stdOutErrPathPrefix",
    "stdOutErrPathSuffix": "stdOutErrPathSuffix",
    "setupTask": "setupTask",
    "nodeSetup": "nodeSetup",
    "initialNodeCount": "initialNodeCount",
    "maximumNodeCount": "maximumNodeCount",
    "minimumNodeCount": "minimumNodeCount",
    "autoScale": "autoScale",
    "nodeDeallocationOption": "nodeDeallocationOption",
    "targetNodeCount": "targetNodeCount",
    "manual": "manual",
    "scaleSettings": "scaleSettings",
    "subnet": "subnet",
    "adminUserName": "adminUserName",
    "adminUserPassword": "adminUserPassword",
    "adminUserSshPublicKey": "adminUserSshPublicKey",
    "userAccountSettings": "userAccountSettings",
    "offer": "offer",
    "publisher": "publisher",
    "sku": "sku",
    "version": "version",
    "virtualMachineImageId": "virtualMachineImageId",
    "imageReference": "imageReference",
    "virtualMachineConfiguration": "virtualMachineConfiguration",
    "vmPriority": "vmPriority",
    "vmSize": "vmSize",
    "properties": "properties",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['azure_auth'] = {token: cfg['azure_auth']};

    let callParams = {
        spec: spec,
        operationId: 'Clusters_Create',
        pathName: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/clusters/{clusterName}',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}