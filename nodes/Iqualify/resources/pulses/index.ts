import type { INodeProperties } from 'n8n-workflow';

export const pulsesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pulses"
					]
				}
			},
			"options": [
				{
					"name": "GET Offerings Analytics Pulses",
					"value": "GET Offerings Analytics Pulses",
					"action": "Find all pulse IDs in the specified offering",
					"description": "Responds with the IDs of all pulses that learners have responded to in a specified offering.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/analytics/pulses"
						}
					}
				},
				{
					"name": "GET Offerings Analytics Pulses Responses",
					"value": "GET Offerings Analytics Pulses Responses",
					"action": "Find pulses by offeringId",
					"description": "Responds with pulse's responses in an offering matching the offeringId.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/analytics/pulses/responses"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /offerings/{offeringId}/analytics/pulses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pulses"
					],
					"operation": [
						"GET Offerings Analytics Pulses"
					]
				}
			}
		},
		{
			"displayName": "Offering ID",
			"name": "offeringId",
			"required": true,
			"description": "offering's id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Pulses"
					],
					"operation": [
						"GET Offerings Analytics Pulses"
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
						"Pulses"
					],
					"operation": [
						"GET Offerings Analytics Pulses"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/{offeringId}/analytics/pulses/responses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pulses"
					],
					"operation": [
						"GET Offerings Analytics Pulses Responses"
					]
				}
			}
		},
		{
			"displayName": "Offering ID",
			"name": "offeringId",
			"required": true,
			"description": "offering's id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Pulses"
					],
					"operation": [
						"GET Offerings Analytics Pulses Responses"
					]
				}
			}
		},
		{
			"displayName": "Pulse Type",
			"name": "pulseType",
			"description": "Filter pulse responses by type.",
			"default": "submit_text",
			"type": "options",
			"options": [
				{
					"name": "Submit Text",
					"value": "submit_text"
				},
				{
					"name": "MCQ",
					"value": "MCQ"
				},
				{
					"name": "Spatial Triangular",
					"value": "spatial_triangular"
				},
				{
					"name": "Spatial Planar",
					"value": "spatial_planar"
				},
				{
					"name": "Spatial Linear",
					"value": "spatial_linear"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "pulseType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pulses"
					],
					"operation": [
						"GET Offerings Analytics Pulses Responses"
					]
				}
			}
		},
		{
			"displayName": "Response Time",
			"name": "responseTime",
			"description": "Filter pulse responses by responseTime. Lower then (`lt`), lower then or equal (`lte`), greater then (`gt`) and greater then or equal (`gte`) operators are available. Example of filtering by time range __gte__2017-03-14T07:30:00Z__",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "responseTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pulses"
					],
					"operation": [
						"GET Offerings Analytics Pulses Responses"
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
						"Pulses"
					],
					"operation": [
						"GET Offerings Analytics Pulses Responses"
					]
				}
			}
		},
];
