import type { INodeProperties } from 'n8n-workflow';

export const assessmentGroupsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Groups"
					]
				}
			},
			"options": [
				{
					"name": "GET Offerings Groups",
					"value": "GET Offerings Groups",
					"action": "Find assessment groups",
					"description": "Responds with a list of assessment groups in an offering.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/groups"
						}
					}
				},
				{
					"name": "POST Offerings Groups",
					"value": "POST Offerings Groups",
					"action": "Add an assessment group",
					"description": "Creates a new assessment group in an offering.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/groups"
						}
					}
				},
				{
					"name": "GET Offerings Groups Learners",
					"value": "GET Offerings Groups Learners",
					"action": "Find learners in an assessment group",
					"description": "Responds with a list of learners in a specified assessment group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/groups/{{$parameter[\"groupId\"]}}/learners"
						}
					}
				},
				{
					"name": "POST Offerings Groups Learners",
					"value": "POST Offerings Groups Learners",
					"action": "Add a learner to an assessment group",
					"description": "Adds a learner into the specified assessment group.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/groups/{{$parameter[\"groupId\"]}}/learners"
						}
					}
				},
				{
					"name": "DELETE Offerings Groups Learners",
					"value": "DELETE Offerings Groups Learners",
					"action": "Remove a learner from an assessment group",
					"description": "Removes a learner from the specified assessment group.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/groups/{{$parameter[\"groupId\"]}}/learners/{{$parameter[\"userEmail\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /offerings/{offeringId}/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Groups"
					],
					"operation": [
						"GET Offerings Groups"
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
						"Assessment Groups"
					],
					"operation": [
						"GET Offerings Groups"
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
						"Assessment Groups"
					],
					"operation": [
						"GET Offerings Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /offerings/{offeringId}/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Groups"
					],
					"operation": [
						"POST Offerings Groups"
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
						"Assessment Groups"
					],
					"operation": [
						"POST Offerings Groups"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Groups"
					],
					"operation": [
						"POST Offerings Groups"
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
						"Assessment Groups"
					],
					"operation": [
						"POST Offerings Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/{offeringId}/groups/{groupId}/learners",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Groups"
					],
					"operation": [
						"GET Offerings Groups Learners"
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
						"Assessment Groups"
					],
					"operation": [
						"GET Offerings Groups Learners"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "groupId",
			"required": true,
			"description": "Assessment group id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Groups"
					],
					"operation": [
						"GET Offerings Groups Learners"
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
						"Assessment Groups"
					],
					"operation": [
						"GET Offerings Groups Learners"
					]
				}
			}
		},
		{
			"displayName": "POST /offerings/{offeringId}/groups/{groupId}/learners",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Groups"
					],
					"operation": [
						"POST Offerings Groups Learners"
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
						"Assessment Groups"
					],
					"operation": [
						"POST Offerings Groups Learners"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "groupId",
			"required": true,
			"description": "Assessment group id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Groups"
					],
					"operation": [
						"POST Offerings Groups Learners"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Groups"
					],
					"operation": [
						"POST Offerings Groups Learners"
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
						"Assessment Groups"
					],
					"operation": [
						"POST Offerings Groups Learners"
					]
				}
			}
		},
		{
			"displayName": "DELETE /offerings/{offeringId}/groups/{groupId}/learners/{userEmail}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Groups"
					],
					"operation": [
						"DELETE Offerings Groups Learners"
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
						"Assessment Groups"
					],
					"operation": [
						"DELETE Offerings Groups Learners"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "groupId",
			"required": true,
			"description": "Assessment group id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Groups"
					],
					"operation": [
						"DELETE Offerings Groups Learners"
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
						"Assessment Groups"
					],
					"operation": [
						"DELETE Offerings Groups Learners"
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
						"Assessment Groups"
					],
					"operation": [
						"DELETE Offerings Groups Learners"
					]
				}
			}
		},
];
