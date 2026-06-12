import type { INodeProperties } from 'n8n-workflow';

export const assessmentDataDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Data"
					]
				}
			},
			"options": [
				{
					"name": "GET Offerings Analytics Activities Responses",
					"value": "GET Offerings Analytics Activities Responses",
					"action": "Find open response activity attempts",
					"description": "Responds with all learner activity attempts for open response activities in an offering matching the offeringId.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/analytics/activities/responses"
						}
					}
				},
				{
					"name": "GET Offerings Analytics Marks Assignments",
					"value": "GET Offerings Analytics Marks Assignments",
					"action": "Find assessment marks",
					"description": "Responds with all learner assessment marks in an offering matching the offeringId.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/analytics/marks/assignments"
						}
					}
				},
				{
					"name": "GET Offerings Analytics Marks Quizzes",
					"value": "GET Offerings Analytics Marks Quizzes",
					"action": "Find quiz marks",
					"description": "Responds with all learner quiz marks in an offering matching the offeringId.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/analytics/marks/quizzes"
						}
					}
				},
				{
					"name": "GET Offerings Analytics Submissions Assignments",
					"value": "GET Offerings Analytics Submissions Assignments",
					"action": "Find submissions to assessments, including marks if any",
					"description": "Responds with all learner assessment submissions and marks, if any, in an offering matching the offeringId.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/analytics/submissions/assignments"
						}
					}
				},
				{
					"name": "GET Offerings Analytics Submissions Open Response",
					"value": "GET Offerings Analytics Submissions Open Response",
					"action": "Find submissions to a specified open response assessment, including marks if any",
					"description": "Responds with all learner assessment submissions and marks, if any, in a specified open response assessment.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/analytics/submissions/open-response/{{$parameter[\"assessmentId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /offerings/{offeringId}/analytics/activities/responses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Data"
					],
					"operation": [
						"GET Offerings Analytics Activities Responses"
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
						"Assessment Data"
					],
					"operation": [
						"GET Offerings Analytics Activities Responses"
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
						"Assessment Data"
					],
					"operation": [
						"GET Offerings Analytics Activities Responses"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/{offeringId}/analytics/marks/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Data"
					],
					"operation": [
						"GET Offerings Analytics Marks Assignments"
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
						"Assessment Data"
					],
					"operation": [
						"GET Offerings Analytics Marks Assignments"
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
						"Assessment Data"
					],
					"operation": [
						"GET Offerings Analytics Marks Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/{offeringId}/analytics/marks/quizzes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Data"
					],
					"operation": [
						"GET Offerings Analytics Marks Quizzes"
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
						"Assessment Data"
					],
					"operation": [
						"GET Offerings Analytics Marks Quizzes"
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
						"Assessment Data"
					],
					"operation": [
						"GET Offerings Analytics Marks Quizzes"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/{offeringId}/analytics/submissions/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Data"
					],
					"operation": [
						"GET Offerings Analytics Submissions Assignments"
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
						"Assessment Data"
					],
					"operation": [
						"GET Offerings Analytics Submissions Assignments"
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
						"Assessment Data"
					],
					"operation": [
						"GET Offerings Analytics Submissions Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/{offeringId}/analytics/submissions/open-response/{assessmentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Data"
					],
					"operation": [
						"GET Offerings Analytics Submissions Open Response"
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
						"Assessment Data"
					],
					"operation": [
						"GET Offerings Analytics Submissions Open Response"
					]
				}
			}
		},
		{
			"displayName": "Assessment ID",
			"name": "assessmentId",
			"required": true,
			"description": "assessment's id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Data"
					],
					"operation": [
						"GET Offerings Analytics Submissions Open Response"
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
						"Assessment Data"
					],
					"operation": [
						"GET Offerings Analytics Submissions Open Response"
					]
				}
			}
		},
];
