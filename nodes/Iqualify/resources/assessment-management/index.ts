import type { INodeProperties } from 'n8n-workflow';

export const assessmentManagementDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Management"
					]
				}
			},
			"options": [
				{
					"name": "GET Offerings Activities Openresponse",
					"value": "GET Offerings Activities Openresponse",
					"action": "Find offering's activities",
					"description": "Responds with the activities in a specific offering.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/activities/openresponse"
						}
					}
				},
				{
					"name": "GET Offerings Assessments",
					"value": "GET Offerings Assessments",
					"action": "Find offering's assessments",
					"description": "Responds with all assessments in an offering matching the offeringId.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/assessments"
						}
					}
				},
				{
					"name": "PATCH Offerings Assessments",
					"value": "PATCH Offerings Assessments",
					"action": "Update assessment details",
					"description": "Updates the assessment details for a specified assessment in an offering.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/assessments/{{$parameter[\"assessmentId\"]}}"
						}
					}
				},
				{
					"name": "DELETE Offerings Assessments Documents",
					"value": "DELETE Offerings Assessments Documents",
					"action": "Remove assessment document",
					"description": "Removes the assessment document file for a specified assessment in an offering.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/assessments/{{$parameter[\"assessmentId\"]}}/documents/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "GET Offerings Learners Pending Submission",
					"value": "GET Offerings Learners Pending Submission",
					"action": "Find learners with assessments pending x days before due date within the specified offeringId",
					"description": "Responds with learners who have one or more assessments due x days before the due date, with each assessment that is due, where x = the number of days specified in the request. The default is 3 days.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/learners/pending-submission"
						}
					}
				},
				{
					"name": "DELETE Offerings Users Assessments",
					"value": "DELETE Offerings Users Assessments",
					"action": "Reset user's assessment to draft state",
					"description": "Resets the user's submitted assessment to a draft state.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/users/{{$parameter[\"userEmail\"]}}/assessments/{{$parameter[\"assessmentId\"]}}"
						}
					}
				},
				{
					"name": "GET Offerings Users Submissions Open Response",
					"value": "GET Offerings Users Submissions Open Response",
					"action": "Find learner's open response assessment submissions",
					"description": "Responds with open response assessment submissions by a learner in an offering.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/users/{{$parameter[\"userEmail\"]}}/submissions/open-response"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /offerings/{offeringId}/activities/openresponse",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Management"
					],
					"operation": [
						"GET Offerings Activities Openresponse"
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
						"Assessment Management"
					],
					"operation": [
						"GET Offerings Activities Openresponse"
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
						"Assessment Management"
					],
					"operation": [
						"GET Offerings Activities Openresponse"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/{offeringId}/assessments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Management"
					],
					"operation": [
						"GET Offerings Assessments"
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
						"Assessment Management"
					],
					"operation": [
						"GET Offerings Assessments"
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
						"Assessment Management"
					],
					"operation": [
						"GET Offerings Assessments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /offerings/{offeringId}/assessments/{assessmentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Management"
					],
					"operation": [
						"PATCH Offerings Assessments"
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
						"Assessment Management"
					],
					"operation": [
						"PATCH Offerings Assessments"
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
						"Assessment Management"
					],
					"operation": [
						"PATCH Offerings Assessments"
					]
				}
			}
		},
		{
			"displayName": "Content",
			"name": "content",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "content",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Management"
					],
					"operation": [
						"PATCH Offerings Assessments"
					]
				}
			}
		},
		{
			"displayName": "Due Date",
			"name": "dueDate",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "dueDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Management"
					],
					"operation": [
						"PATCH Offerings Assessments"
					]
				}
			}
		},
		{
			"displayName": "Mark Number",
			"name": "markNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "markNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Management"
					],
					"operation": [
						"PATCH Offerings Assessments"
					]
				}
			}
		},
		{
			"displayName": "Mark Type",
			"name": "markType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "markType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Management"
					],
					"operation": [
						"PATCH Offerings Assessments"
					]
				}
			}
		},
		{
			"displayName": "Open Date",
			"name": "openDate",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "openDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Management"
					],
					"operation": [
						"PATCH Offerings Assessments"
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
						"Assessment Management"
					],
					"operation": [
						"PATCH Offerings Assessments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /offerings/{offeringId}/assessments/{assessmentId}/documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Management"
					],
					"operation": [
						"DELETE Offerings Assessments Documents"
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
						"Assessment Management"
					],
					"operation": [
						"DELETE Offerings Assessments Documents"
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
						"Assessment Management"
					],
					"operation": [
						"DELETE Offerings Assessments Documents"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "documents's id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Management"
					],
					"operation": [
						"DELETE Offerings Assessments Documents"
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
						"Assessment Management"
					],
					"operation": [
						"DELETE Offerings Assessments Documents"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/{offeringId}/learners/pending-submission",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Management"
					],
					"operation": [
						"GET Offerings Learners Pending Submission"
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
						"Assessment Management"
					],
					"operation": [
						"GET Offerings Learners Pending Submission"
					]
				}
			}
		},
		{
			"displayName": "Days",
			"name": "days",
			"description": "days to assessment due date. Default is 3 days",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "days",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Management"
					],
					"operation": [
						"GET Offerings Learners Pending Submission"
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
						"Assessment Management"
					],
					"operation": [
						"GET Offerings Learners Pending Submission"
					]
				}
			}
		},
		{
			"displayName": "DELETE /offerings/{offeringId}/users/{userEmail}/assessments/{assessmentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Management"
					],
					"operation": [
						"DELETE Offerings Users Assessments"
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
						"Assessment Management"
					],
					"operation": [
						"DELETE Offerings Users Assessments"
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
						"Assessment Management"
					],
					"operation": [
						"DELETE Offerings Users Assessments"
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
						"Assessment Management"
					],
					"operation": [
						"DELETE Offerings Users Assessments"
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
						"Assessment Management"
					],
					"operation": [
						"DELETE Offerings Users Assessments"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/{offeringId}/users/{userEmail}/submissions/open-response",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment Management"
					],
					"operation": [
						"GET Offerings Users Submissions Open Response"
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
						"Assessment Management"
					],
					"operation": [
						"GET Offerings Users Submissions Open Response"
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
						"Assessment Management"
					],
					"operation": [
						"GET Offerings Users Submissions Open Response"
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
						"Assessment Management"
					],
					"operation": [
						"GET Offerings Users Submissions Open Response"
					]
				}
			}
		},
];
