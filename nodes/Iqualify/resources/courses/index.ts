import type { INodeProperties } from 'n8n-workflow';

export const coursesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Courses"
					]
				}
			},
			"options": [
				{
					"name": "GET Courses",
					"value": "GET Courses",
					"action": "Find courses",
					"description": "Responds with all courses (draft and published.)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/courses"
						}
					}
				},
				{
					"name": "GET Courses Activations",
					"value": "GET Courses Activations",
					"action": "Find activations for a contentId",
					"description": "Responds with all activations for the contentId provided.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/courses/{{$parameter[\"contentId\"]}}/activations"
						}
					}
				},
				{
					"name": "GET Courses Permissions",
					"value": "GET Courses Permissions",
					"action": "Find users who have access to the contentId provided",
					"description": "Responds with users who have access to a specific course by contentId.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/courses/{{$parameter[\"contentId\"]}}/permissions"
						}
					}
				},
				{
					"name": "POST Courses Permissions",
					"value": "POST Courses Permissions",
					"action": "Update course access",
					"description": "Provide a user with access to a specific course by rootContentId.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/courses/{{$parameter[\"rootContentId\"]}}/permissions/{{$parameter[\"userEmail\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /courses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Courses"
					],
					"operation": [
						"GET Courses"
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
						"Courses"
					],
					"operation": [
						"GET Courses"
					]
				}
			}
		},
		{
			"displayName": "GET /courses/{contentId}/activations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Courses"
					],
					"operation": [
						"GET Courses Activations"
					]
				}
			}
		},
		{
			"displayName": "Content ID",
			"name": "contentId",
			"required": true,
			"description": "The content Id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Courses"
					],
					"operation": [
						"GET Courses Activations"
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
						"Courses"
					],
					"operation": [
						"GET Courses Activations"
					]
				}
			}
		},
		{
			"displayName": "GET /courses/{contentId}/permissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Courses"
					],
					"operation": [
						"GET Courses Permissions"
					]
				}
			}
		},
		{
			"displayName": "Content ID",
			"name": "contentId",
			"required": true,
			"description": "The content Id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Courses"
					],
					"operation": [
						"GET Courses Permissions"
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
						"Courses"
					],
					"operation": [
						"GET Courses Permissions"
					]
				}
			}
		},
		{
			"displayName": "POST /courses/{rootContentId}/permissions/{userEmail}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Courses"
					],
					"operation": [
						"POST Courses Permissions"
					]
				}
			}
		},
		{
			"displayName": "Root Content ID",
			"name": "rootContentId",
			"required": true,
			"description": "The content Id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Courses"
					],
					"operation": [
						"POST Courses Permissions"
					]
				}
			}
		},
		{
			"displayName": "User Email",
			"name": "userEmail",
			"required": true,
			"description": "The user email",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Courses"
					],
					"operation": [
						"POST Courses Permissions"
					]
				}
			}
		},
		{
			"displayName": "Is Builder",
			"name": "isBuilder",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "isBuilder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Courses"
					],
					"operation": [
						"POST Courses Permissions"
					]
				}
			}
		},
		{
			"displayName": "Is Reviewer",
			"name": "isReviewer",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "isReviewer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Courses"
					],
					"operation": [
						"POST Courses Permissions"
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
						"Courses"
					],
					"operation": [
						"POST Courses Permissions"
					]
				}
			}
		},
];
