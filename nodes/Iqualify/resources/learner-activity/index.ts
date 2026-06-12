import type { INodeProperties } from 'n8n-workflow';

export const learnerActivityDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Learner Activity"
					]
				}
			},
			"options": [
				{
					"name": "GET Offerings Analytics Learners Progress",
					"value": "GET Offerings Analytics Learners Progress",
					"action": "Find learner progress in a specified offering",
					"description": "Responds with all learner progress in the offering.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/analytics/learners-progress"
						}
					}
				},
				{
					"name": "GET Offerings Analytics Social Notes",
					"value": "GET Offerings Analytics Social Notes",
					"action": "Find shared social notes in an offering",
					"description": "Responds with all shared social notes in a specified offering.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/analytics/social-notes"
						}
					}
				},
				{
					"name": "GET Offerings Analytics Unit Reactions",
					"value": "GET Offerings Analytics Unit Reactions",
					"action": "Find unit reactions",
					"description": "Responds with user reactions to units in a specified offering.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/analytics/unit-reactions"
						}
					}
				},
				{
					"name": "GET Users All Progress",
					"value": "GET Users All Progress",
					"action": "Find learner progress in all offerings",
					"description": "Responds with all learners' progress in all offerings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/all/progress"
						}
					}
				},
				{
					"name": "GET Users Offerings Progress",
					"value": "GET Users Offerings Progress",
					"action": "Find learner's progress in a specified offering",
					"description": "Responds with the learner's progress in a specified offering.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"userEmail\"]}}/offerings/{{$parameter[\"offeringId\"]}}/progress"
						}
					}
				},
				{
					"name": "GET Users Progress",
					"value": "GET Users Progress",
					"action": "Find learner's progress in offerings",
					"description": "Responds with the specified learner's progress in all offerings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"userEmail\"]}}/progress"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /offerings/{offeringId}/analytics/learners-progress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Learner Activity"
					],
					"operation": [
						"GET Offerings Analytics Learners Progress"
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
						"Learner Activity"
					],
					"operation": [
						"GET Offerings Analytics Learners Progress"
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
						"Learner Activity"
					],
					"operation": [
						"GET Offerings Analytics Learners Progress"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/{offeringId}/analytics/social-notes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Learner Activity"
					],
					"operation": [
						"GET Offerings Analytics Social Notes"
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
						"Learner Activity"
					],
					"operation": [
						"GET Offerings Analytics Social Notes"
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
						"Learner Activity"
					],
					"operation": [
						"GET Offerings Analytics Social Notes"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/{offeringId}/analytics/unit-reactions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Learner Activity"
					],
					"operation": [
						"GET Offerings Analytics Unit Reactions"
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
						"Learner Activity"
					],
					"operation": [
						"GET Offerings Analytics Unit Reactions"
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
						"Learner Activity"
					],
					"operation": [
						"GET Offerings Analytics Unit Reactions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/all/progress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Learner Activity"
					],
					"operation": [
						"GET Users All Progress"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Returns only the first n results.",
			"default": "50",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Learner Activity"
					],
					"operation": [
						"GET Users All Progress"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Sorts the results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Learner Activity"
					],
					"operation": [
						"GET Users All Progress"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filters the results, based on a Boolean condition.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Learner Activity"
					],
					"operation": [
						"GET Users All Progress"
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
						"Learner Activity"
					],
					"operation": [
						"GET Users All Progress"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{userEmail}/offerings/{offeringId}/progress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Learner Activity"
					],
					"operation": [
						"GET Users Offerings Progress"
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
						"Learner Activity"
					],
					"operation": [
						"GET Users Offerings Progress"
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
						"Learner Activity"
					],
					"operation": [
						"GET Users Offerings Progress"
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
						"Learner Activity"
					],
					"operation": [
						"GET Users Offerings Progress"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{userEmail}/progress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Learner Activity"
					],
					"operation": [
						"GET Users Progress"
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
						"Learner Activity"
					],
					"operation": [
						"GET Users Progress"
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
						"Learner Activity"
					],
					"operation": [
						"GET Users Progress"
					]
				}
			}
		},
];
