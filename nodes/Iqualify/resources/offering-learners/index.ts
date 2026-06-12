import type { INodeProperties } from 'n8n-workflow';

export const offeringLearnersDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Learners"
					]
				}
			},
			"options": [
				{
					"name": "GET Offerings Users",
					"value": "GET Offerings Users",
					"action": "Find offering's users",
					"description": "Responds with a list of users in the offering (facilitators, learners and markers.).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/users"
						}
					}
				},
				{
					"name": "POST Offerings Users",
					"value": "POST Offerings Users",
					"action": "Adds user to the offering",
					"description": "Adds one or more users to the offering.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/users"
						}
					}
				},
				{
					"name": "DELETE Offerings Users Marks",
					"value": "DELETE Offerings Users Marks",
					"action": "Remove learners from coach's marking list",
					"description": "Removes an array of learners from coach's marking list.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/users/{{$parameter[\"markerEmail\"]}}/marks"
						}
					}
				},
				{
					"name": "GET Offerings Users Marks",
					"value": "GET Offerings Users Marks",
					"action": "Find Learners marked by a coach",
					"description": "Responds with all learners marked by the specified coach.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/users/{{$parameter[\"markerEmail\"]}}/marks"
						}
					}
				},
				{
					"name": "POST Offerings Users Marks",
					"value": "POST Offerings Users Marks",
					"action": "Add learners to be marked by a coach",
					"description": "Adds an array of learners to be marked by the specified coach.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/users/{{$parameter[\"markerEmail\"]}}/marks"
						}
					}
				},
				{
					"name": "DELETE Offerings Users",
					"value": "DELETE Offerings Users",
					"action": "Removes user from the offering",
					"description": "Removes a user from the offering.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/users/{{$parameter[\"userEmail\"]}}"
						}
					}
				},
				{
					"name": "PATCH Users Transfer",
					"value": "PATCH Users Transfer",
					"action": "Transfer a user between offerings",
					"description": "Moves the user's access and progress from one offering to another.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"userEmail\"]}}/transfer"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /offerings/{offeringId}/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Learners"
					],
					"operation": [
						"GET Offerings Users"
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
						"Offering Learners"
					],
					"operation": [
						"GET Offerings Users"
					]
				}
			}
		},
		{
			"displayName": "Facilitators",
			"name": "facilitators",
			"description": "If true, facilitators are included in the results.",
			"default": "true",
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": "true"
				},
				{
					"name": "False",
					"value": "false"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "facilitators",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Learners"
					],
					"operation": [
						"GET Offerings Users"
					]
				}
			}
		},
		{
			"displayName": "Learners",
			"name": "learners",
			"description": "If true, learners are included in the results.",
			"default": "true",
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": "true"
				},
				{
					"name": "False",
					"value": "false"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "learners",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Learners"
					],
					"operation": [
						"GET Offerings Users"
					]
				}
			}
		},
		{
			"displayName": "Markers",
			"name": "markers",
			"description": "If true, markers are included in the results.",
			"default": "true",
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": "true"
				},
				{
					"name": "False",
					"value": "false"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "markers",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Learners"
					],
					"operation": [
						"GET Offerings Users"
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
						"Offering Learners"
					],
					"operation": [
						"GET Offerings Users"
					]
				}
			}
		},
		{
			"displayName": "POST /offerings/{offeringId}/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Learners"
					],
					"operation": [
						"POST Offerings Users"
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
						"Offering Learners"
					],
					"operation": [
						"POST Offerings Users"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{\n  \"isFacilitator\": false,\n  \"isMarker\": false,\n  \"isReadonly\": false,\n  \"metadata\": {\n    \"tags\": [\n      null\n    ]\n  },\n  \"profile\": {},\n  \"sendInvite\": true,\n  \"sendNotificationEmail\": true\n}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Learners"
					],
					"operation": [
						"POST Offerings Users"
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
						"Offering Learners"
					],
					"operation": [
						"POST Offerings Users"
					]
				}
			}
		},
		{
			"displayName": "DELETE /offerings/{offeringId}/users/{markerEmail}/marks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Learners"
					],
					"operation": [
						"DELETE Offerings Users Marks"
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
						"Offering Learners"
					],
					"operation": [
						"DELETE Offerings Users Marks"
					]
				}
			}
		},
		{
			"displayName": "Marker Email",
			"name": "markerEmail",
			"required": true,
			"description": "marker's email",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Learners"
					],
					"operation": [
						"DELETE Offerings Users Marks"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Learners"
					],
					"operation": [
						"DELETE Offerings Users Marks"
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
						"Offering Learners"
					],
					"operation": [
						"DELETE Offerings Users Marks"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/{offeringId}/users/{markerEmail}/marks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Learners"
					],
					"operation": [
						"GET Offerings Users Marks"
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
						"Offering Learners"
					],
					"operation": [
						"GET Offerings Users Marks"
					]
				}
			}
		},
		{
			"displayName": "Marker Email",
			"name": "markerEmail",
			"required": true,
			"description": "marker's email",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Learners"
					],
					"operation": [
						"GET Offerings Users Marks"
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
						"Offering Learners"
					],
					"operation": [
						"GET Offerings Users Marks"
					]
				}
			}
		},
		{
			"displayName": "POST /offerings/{offeringId}/users/{markerEmail}/marks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Learners"
					],
					"operation": [
						"POST Offerings Users Marks"
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
						"Offering Learners"
					],
					"operation": [
						"POST Offerings Users Marks"
					]
				}
			}
		},
		{
			"displayName": "Marker Email",
			"name": "markerEmail",
			"required": true,
			"description": "marker's email",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Learners"
					],
					"operation": [
						"POST Offerings Users Marks"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Learners"
					],
					"operation": [
						"POST Offerings Users Marks"
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
						"Offering Learners"
					],
					"operation": [
						"POST Offerings Users Marks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /offerings/{offeringId}/users/{userEmail}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Learners"
					],
					"operation": [
						"DELETE Offerings Users"
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
						"Offering Learners"
					],
					"operation": [
						"DELETE Offerings Users"
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
						"Offering Learners"
					],
					"operation": [
						"DELETE Offerings Users"
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
						"Offering Learners"
					],
					"operation": [
						"DELETE Offerings Users"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{userEmail}/transfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Learners"
					],
					"operation": [
						"PATCH Users Transfer"
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
						"Offering Learners"
					],
					"operation": [
						"PATCH Users Transfer"
					]
				}
			}
		},
		{
			"displayName": "From Offering ID",
			"name": "fromOfferingId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "fromOfferingId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Learners"
					],
					"operation": [
						"PATCH Users Transfer"
					]
				}
			}
		},
		{
			"displayName": "Send Invite",
			"name": "sendInvite",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "sendInvite",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Learners"
					],
					"operation": [
						"PATCH Users Transfer"
					]
				}
			}
		},
		{
			"displayName": "To Offering ID",
			"name": "toOfferingId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "toOfferingId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Learners"
					],
					"operation": [
						"PATCH Users Transfer"
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
						"Offering Learners"
					],
					"operation": [
						"PATCH Users Transfer"
					]
				}
			}
		},
];
