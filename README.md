# ![LOGO](logo.png) BatchAI **flow**ground Connector

## Description

A generated **flow**ground connector for the BatchAI API (version 2018-05-01).

Generated from: https://api.apis.guru/v2/specs/azure.com/batchai-BatchAI/2018-05-01/swagger.json<br/>
Generated at: 2019-05-07T17:37:40+03:00

## API Description

The Azure BatchAI Management API.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Lists available operations for the Microsoft.BatchAI provider.

*Tags:* `Operations`

#### Input Parameters
* `api-version` - _required_ - Specifies the version of API used for this request.

### Gets the current usage information as well as limits for Batch AI resources for given subscription.

*Tags:* `Usage`

#### Input Parameters
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.
* `location` - _required_ - The location for which resource usage is queried.

### Gets a list of Workspaces associated with the given subscription.

*Tags:* `Workspace`

#### Input Parameters
* `maxresults` - _optional_ - The maximum number of items to return in the response. A maximum of 1000 files can be returned.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Gets a list of Workspaces within the specified resource group.

*Tags:* `Workspace`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `maxresults` - _optional_ - The maximum number of items to return in the response. A maximum of 1000 files can be returned.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Deletes a Workspace.

*Tags:* `Workspace`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Gets information about a Workspace.

*Tags:* `Workspace`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Updates properties of a Workspace.

*Tags:* `Workspace`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Creates a Workspace.

*Tags:* `Workspace`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Gets information about Clusters associated with the given Workspace.

*Tags:* `Cluster`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `maxresults` - _optional_ - The maximum number of items to return in the response. A maximum of 1000 files can be returned.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Deletes a Cluster.

*Tags:* `Cluster`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `clusterName` - _required_ - The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Gets information about a Cluster.

*Tags:* `Cluster`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `clusterName` - _required_ - The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Updates properties of a Cluster.

*Tags:* `Cluster`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `clusterName` - _required_ - The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Creates a Cluster in the given Workspace.

*Tags:* `Cluster`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `clusterName` - _required_ - The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Get the IP address, port of all the compute nodes in the Cluster.

*Tags:* `Cluster`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `clusterName` - _required_ - The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Gets a list of Experiments within the specified Workspace.

*Tags:* `Experiment`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `maxresults` - _optional_ - The maximum number of items to return in the response. A maximum of 1000 files can be returned.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Deletes an Experiment.

*Tags:* `Experiment`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `experimentName` - _required_ - The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Gets information about an Experiment.

*Tags:* `Experiment`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `experimentName` - _required_ - The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Creates an Experiment.

*Tags:* `Experiment`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `experimentName` - _required_ - The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Gets a list of Jobs within the specified Experiment.

*Tags:* `Job`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `experimentName` - _required_ - The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `maxresults` - _optional_ - The maximum number of items to return in the response. A maximum of 1000 files can be returned.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Deletes a Job.

*Tags:* `Job`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `experimentName` - _required_ - The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `jobName` - _required_ - The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Gets information about a Job.

*Tags:* `Job`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `experimentName` - _required_ - The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `jobName` - _required_ - The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Creates a Job in the given Experiment.

*Tags:* `Job`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `experimentName` - _required_ - The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `jobName` - _required_ - The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### List all directories and files inside the given directory of the Job's output directory (if the output directory is on Azure File Share or Azure Storage Container).

*Tags:* `Job`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `experimentName` - _required_ - The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `jobName` - _required_ - The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `outputdirectoryid` - _required_ - Id of the job output directory. This is the OutputDirectory-->id parameter that is given by the user during Create Job.
* `directory` - _optional_ - The path to the directory.
* `linkexpiryinminutes` - _optional_ - The number of minutes after which the download link will expire.
* `maxresults` - _optional_ - The maximum number of items to return in the response. A maximum of 1000 files can be returned.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Gets a list of currently existing nodes which were used for the Job execution. The returned information contains the node ID, its public IP and SSH port.

*Tags:* `Job`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `experimentName` - _required_ - The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `jobName` - _required_ - The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Terminates a job.

*Tags:* `Job`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `experimentName` - _required_ - The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `jobName` - _required_ - The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Gets a list of File Servers associated with the specified workspace.

*Tags:* `FileServer`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `maxresults` - _optional_ - The maximum number of items to return in the response. A maximum of 1000 files can be returned.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Deletes a File Server.

*Tags:* `FileServer`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `fileServerName` - _required_ - The name of the file server within the specified resource group. File server names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Gets information about a File Server.

*Tags:* `FileServer`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `fileServerName` - _required_ - The name of the file server within the specified resource group. File server names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

### Creates a File Server in the given workspace.

*Tags:* `FileServer`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group to which the resource belongs.
* `workspaceName` - _required_ - The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `fileServerName` - _required_ - The name of the file server within the specified resource group. File server names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
* `api-version` - _required_ - Specifies the version of API used for this request.
* `subscriptionId` - _required_ - The subscriptionID for the Azure user.

## License

**flow**ground :- Telekom iPaaS / azure-com-batchai-batch-ai-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
