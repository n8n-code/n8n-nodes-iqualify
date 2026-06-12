import type { INodeProperties } from 'n8n-workflow';

export const badgesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Badges"
					]
				}
			},
			"options": [
				{
					"name": "GET Offerings Badges",
					"value": "GET Offerings Badges",
					"action": "Find offering badges",
					"description": "Responds with the badge for an offering matching the offeringId.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/badges"
						}
					}
				},
				{
					"name": "POST Offerings Users Badges Award",
					"value": "POST Offerings Users Badges Award",
					"action": "Award badge",
					"description": "Awards a badge to a user in the offering.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/users/{{$parameter[\"userEmail\"]}}/badges/award"
						}
					}
				},
				{
					"name": "GET Users Badges",
					"value": "GET Users Badges",
					"action": "Find user's badges",
					"description": "Responds with all badges that the specified user has been awarded.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"userEmail\"]}}/badges"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /offerings/{offeringId}/badges",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Badges"
					],
					"operation": [
						"GET Offerings Badges"
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
						"Badges"
					],
					"operation": [
						"GET Offerings Badges"
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
						"Badges"
					],
					"operation": [
						"GET Offerings Badges"
					]
				}
			}
		},
		{
			"displayName": "POST /offerings/{offeringId}/users/{userEmail}/badges/award",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Badges"
					],
					"operation": [
						"POST Offerings Users Badges Award"
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
						"Badges"
					],
					"operation": [
						"POST Offerings Users Badges Award"
					]
				}
			}
		},
		{
			"displayName": "User Email",
			"name": "userEmail",
			"required": true,
			"description": "user's email",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Badges"
					],
					"operation": [
						"POST Offerings Users Badges Award"
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
						"Badges"
					],
					"operation": [
						"POST Offerings Users Badges Award"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{userEmail}/badges",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Badges"
					],
					"operation": [
						"GET Users Badges"
					]
				}
			}
		},
		{
			"displayName": "User Email",
			"name": "userEmail",
			"required": true,
			"description": "user's email",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Badges"
					],
					"operation": [
						"GET Users Badges"
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
						"Badges"
					],
					"operation": [
						"GET Users Badges"
					]
				}
			}
		},
];
