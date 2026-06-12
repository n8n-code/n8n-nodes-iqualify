import type { INodeProperties } from 'n8n-workflow';

export const courseMappingsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Course Mappings"
					]
				}
			},
			"options": [
				{
					"name": "GET Course Mappings",
					"value": "GET Course Mappings",
					"action": "Find course mappings",
					"description": "Returns all course mappings for course offerings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/course-mappings"
						}
					}
				},
				{
					"name": "GET Course Mappings Externalcourse",
					"value": "GET Course Mappings Externalcourse",
					"action": "Find course mappings by externalCourseId",
					"description": "Responds with course mapping details by externalCourseId.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/course-mappings/externalcourse/{{$parameter[\"externalCourseId\"]}}"
						}
					}
				},
				{
					"name": "DELETE Course Mappings",
					"value": "DELETE Course Mappings",
					"action": "Remove course mapping",
					"description": "Removes the course mapping between the offering and the externalCourseId.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/course-mappings/{{$parameter[\"offeringId\"]}}/{{$parameter[\"externalCourseId\"]}}"
						}
					}
				},
				{
					"name": "PUT Course Mappings",
					"value": "PUT Course Mappings",
					"action": "Add course mapping",
					"description": "Creates a mapping between the offering and the externalCourseId.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/course-mappings/{{$parameter[\"offeringId\"]}}/{{$parameter[\"externalCourseId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /course-mappings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Course Mappings"
					],
					"operation": [
						"GET Course Mappings"
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
						"Course Mappings"
					],
					"operation": [
						"GET Course Mappings"
					]
				}
			}
		},
		{
			"displayName": "GET /course-mappings/externalcourse/{externalCourseId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Course Mappings"
					],
					"operation": [
						"GET Course Mappings Externalcourse"
					]
				}
			}
		},
		{
			"displayName": "External Course ID",
			"name": "externalCourseId",
			"required": true,
			"description": "external course's id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Course Mappings"
					],
					"operation": [
						"GET Course Mappings Externalcourse"
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
						"Course Mappings"
					],
					"operation": [
						"GET Course Mappings Externalcourse"
					]
				}
			}
		},
		{
			"displayName": "DELETE /course-mappings/{offeringId}/{externalCourseId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Course Mappings"
					],
					"operation": [
						"DELETE Course Mappings"
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
						"Course Mappings"
					],
					"operation": [
						"DELETE Course Mappings"
					]
				}
			}
		},
		{
			"displayName": "External Course ID",
			"name": "externalCourseId",
			"required": true,
			"description": "external course's id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Course Mappings"
					],
					"operation": [
						"DELETE Course Mappings"
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
						"Course Mappings"
					],
					"operation": [
						"DELETE Course Mappings"
					]
				}
			}
		},
		{
			"displayName": "PUT /course-mappings/{offeringId}/{externalCourseId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Course Mappings"
					],
					"operation": [
						"PUT Course Mappings"
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
						"Course Mappings"
					],
					"operation": [
						"PUT Course Mappings"
					]
				}
			}
		},
		{
			"displayName": "External Course ID",
			"name": "externalCourseId",
			"required": true,
			"description": "external course's id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Course Mappings"
					],
					"operation": [
						"PUT Course Mappings"
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
						"Course Mappings"
					],
					"operation": [
						"PUT Course Mappings"
					]
				}
			}
		},
];
