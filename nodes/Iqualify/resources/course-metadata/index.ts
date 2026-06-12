import type { INodeProperties } from 'n8n-workflow';

export const courseMetadataDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Course Metadata"
					]
				}
			},
			"options": [
				{
					"name": "PUT Courses Metadata Category",
					"value": "PUT Courses Metadata Category",
					"action": "Update course category",
					"description": "Add or update course category in the metadata of a course.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/courses/{{$parameter[\"contentId\"]}}/metadata/category"
						}
					}
				},
				{
					"name": "PUT Courses Metadata Level",
					"value": "PUT Courses Metadata Level",
					"action": "Update course level",
					"description": "Add or update the course level in the metadata of a course.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/courses/{{$parameter[\"contentId\"]}}/metadata/level"
						}
					}
				},
				{
					"name": "PUT Courses Metadata Tags",
					"value": "PUT Courses Metadata Tags",
					"action": "Update course tags",
					"description": "Add or update course tags in the metadata of a course.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/courses/{{$parameter[\"contentId\"]}}/metadata/tags"
						}
					}
				},
				{
					"name": "PUT Courses Metadata Topic",
					"value": "PUT Courses Metadata Topic",
					"action": "Update course topic",
					"description": "Add or update the course topic in the metadata of a course.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/courses/{{$parameter[\"contentId\"]}}/metadata/topic"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /courses/{contentId}/metadata/category",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Course Metadata"
					],
					"operation": [
						"PUT Courses Metadata Category"
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
						"Course Metadata"
					],
					"operation": [
						"PUT Courses Metadata Category"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Course Metadata"
					],
					"operation": [
						"PUT Courses Metadata Category"
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
						"Course Metadata"
					],
					"operation": [
						"PUT Courses Metadata Category"
					]
				}
			}
		},
		{
			"displayName": "PUT /courses/{contentId}/metadata/level",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Course Metadata"
					],
					"operation": [
						"PUT Courses Metadata Level"
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
						"Course Metadata"
					],
					"operation": [
						"PUT Courses Metadata Level"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "level",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Course Metadata"
					],
					"operation": [
						"PUT Courses Metadata Level"
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
						"Course Metadata"
					],
					"operation": [
						"PUT Courses Metadata Level"
					]
				}
			}
		},
		{
			"displayName": "PUT /courses/{contentId}/metadata/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Course Metadata"
					],
					"operation": [
						"PUT Courses Metadata Tags"
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
						"Course Metadata"
					],
					"operation": [
						"PUT Courses Metadata Tags"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Course Metadata"
					],
					"operation": [
						"PUT Courses Metadata Tags"
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
						"Course Metadata"
					],
					"operation": [
						"PUT Courses Metadata Tags"
					]
				}
			}
		},
		{
			"displayName": "PUT /courses/{contentId}/metadata/topic",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Course Metadata"
					],
					"operation": [
						"PUT Courses Metadata Topic"
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
						"Course Metadata"
					],
					"operation": [
						"PUT Courses Metadata Topic"
					]
				}
			}
		},
		{
			"displayName": "Topic",
			"name": "topic",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "topic",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Course Metadata"
					],
					"operation": [
						"PUT Courses Metadata Topic"
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
						"Course Metadata"
					],
					"operation": [
						"PUT Courses Metadata Topic"
					]
				}
			}
		},
];
