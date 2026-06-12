import type { INodeProperties } from 'n8n-workflow';

export const organisationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Organisation"
					]
				}
			},
			"options": [
				{
					"name": "GET Org",
					"value": "GET Org",
					"action": "Gets the current organisation",
					"description": "Returns the current organisation info.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/org"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /org",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organisation"
					],
					"operation": [
						"GET Org"
					]
				}
			}
		},
		{
			"displayName": "Authorization API Key",
			"name": "security_authorization",
			"type": "string",
			"default": "",
			"description": "API key for Authorization (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organisation"
					],
					"operation": [
						"GET Org"
					]
				}
			}
		},
];
