import type { INodeProperties } from 'n8n-workflow';

export const offeringsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					]
				}
			},
			"options": [
				{
					"name": "GET Offerings",
					"value": "GET Offerings",
					"action": "Find current, past and future offerings",
					"description": "Responds with all offerings for your organisation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings"
						}
					}
				},
				{
					"name": "POST Offerings",
					"value": "POST Offerings",
					"action": "Create offering",
					"description": "Creates a new offering.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/offerings"
						}
					}
				},
				{
					"name": "GET Offerings Current",
					"value": "GET Offerings Current",
					"action": "Find active offerings",
					"description": "Responds with active offerings for your organisation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/current"
						}
					}
				},
				{
					"name": "GET Offerings Future",
					"value": "GET Offerings Future",
					"action": "Find scheduled offerings",
					"description": "Responds with scheduled offerings for your organisation. Scheduled offerings have a start date after today's date (inclusive).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/future"
						}
					}
				},
				{
					"name": "GET Offerings Info",
					"value": "GET Offerings Info",
					"action": "Find offerings where info field matches the specified textPattern",
					"description": "Find offerings where info field matches the specified text pattern.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/info/{{$parameter[\"textPattern\"]}}"
						}
					}
				},
				{
					"name": "GET Offerings Past",
					"value": "GET Offerings Past",
					"action": "Find past offerings",
					"description": "Responds with past offerings for your organisation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/past"
						}
					}
				},
				{
					"name": "GET Offerings Summary",
					"value": "GET Offerings Summary",
					"action": "Offerings summary",
					"description": "Responds with a summary of all offerings for your organisation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/summary"
						}
					}
				},
				{
					"name": "PATCH Offerings",
					"value": "PATCH Offerings",
					"action": "Update offering",
					"description": "Updates the offering.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /offerings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"GET Offerings"
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
						"Offerings"
					],
					"operation": [
						"GET Offerings"
					]
				}
			}
		},
		{
			"displayName": "POST /offerings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"POST Offerings"
					]
				}
			}
		},
		{
			"displayName": "Badge",
			"name": "badge",
			"type": "json",
			"default": "{\n  \"badgeExpiry\": {}\n}",
			"routing": {
				"send": {
					"property": "badge",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"POST Offerings"
					]
				}
			}
		},
		{
			"displayName": "Content ID",
			"name": "contentId",
			"type": "string",
			"default": "",
			"description": "The identifier for a specific version of a course",
			"routing": {
				"send": {
					"property": "contentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"POST Offerings"
					]
				}
			}
		},
		{
			"displayName": "Create Default Channels",
			"name": "createDefaultChannels",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "createDefaultChannels",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"POST Offerings"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"POST Offerings"
					]
				}
			}
		},
		{
			"displayName": "Early Close Off Date",
			"name": "earlyCloseOffDate",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "earlyCloseOffDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"POST Offerings"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "end",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "end",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"POST Offerings"
					]
				}
			}
		},
		{
			"displayName": "Has Early Close Off",
			"name": "hasEarlyCloseOff",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "hasEarlyCloseOff",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"POST Offerings"
					]
				}
			}
		},
		{
			"displayName": "Identifier",
			"name": "identifier",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "identifier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"POST Offerings"
					]
				}
			}
		},
		{
			"displayName": "Is Readonly",
			"name": "isReadonly",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "isReadonly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"POST Offerings"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "metadata",
			"type": "json",
			"default": "{\n  \"tags\": [\n    null\n  ]\n}",
			"routing": {
				"send": {
					"property": "metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"POST Offerings"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"POST Offerings"
					]
				}
			}
		},
		{
			"displayName": "Root Content ID",
			"name": "rootContentId",
			"type": "string",
			"default": "",
			"description": "Every time a course is republished it's assigned a new contentId. rootContentId is the first original contentId associated with a course.",
			"routing": {
				"send": {
					"property": "rootContentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"POST Offerings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Start",
			"name": "start",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"POST Offerings"
					]
				}
			}
		},
		{
			"displayName": "Trailer Video URL",
			"name": "trailerVideoUrl",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "trailerVideoUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"POST Offerings"
					]
				}
			}
		},
		{
			"displayName": "Use Relative Dates",
			"name": "useRelativeDates",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "useRelativeDates",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"POST Offerings"
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
						"Offerings"
					],
					"operation": [
						"POST Offerings"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/current",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"GET Offerings Current"
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
						"Offerings"
					],
					"operation": [
						"GET Offerings Current"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/future",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"GET Offerings Future"
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
						"Offerings"
					],
					"operation": [
						"GET Offerings Future"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/info/{textPattern}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"GET Offerings Info"
					]
				}
			}
		},
		{
			"displayName": "Text Pattern",
			"name": "textPattern",
			"required": true,
			"description": "Text pattern to search for (minimum of 3 characters length).",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"GET Offerings Info"
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
						"Offerings"
					],
					"operation": [
						"GET Offerings Info"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/past",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"GET Offerings Past"
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
						"Offerings"
					],
					"operation": [
						"GET Offerings Past"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/summary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"GET Offerings Summary"
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
						"Offerings"
					],
					"operation": [
						"GET Offerings Summary"
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
						"Offerings"
					],
					"operation": [
						"GET Offerings Summary"
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
						"Offerings"
					],
					"operation": [
						"GET Offerings Summary"
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
						"Offerings"
					],
					"operation": [
						"GET Offerings Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /offerings/{offeringId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"PATCH Offerings"
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
						"Offerings"
					],
					"operation": [
						"PATCH Offerings"
					]
				}
			}
		},
		{
			"displayName": "Badge",
			"name": "badge",
			"type": "json",
			"default": "{\n  \"badgeExpiry\": {}\n}",
			"routing": {
				"send": {
					"property": "badge",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"PATCH Offerings"
					]
				}
			}
		},
		{
			"displayName": "Content ID",
			"name": "contentId",
			"type": "string",
			"default": "",
			"description": "The identifier for a specific version of a course",
			"routing": {
				"send": {
					"property": "contentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"PATCH Offerings"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"PATCH Offerings"
					]
				}
			}
		},
		{
			"displayName": "Early Close Off Date",
			"name": "earlyCloseOffDate",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "earlyCloseOffDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"PATCH Offerings"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "end",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "end",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"PATCH Offerings"
					]
				}
			}
		},
		{
			"displayName": "Has Early Close Off",
			"name": "hasEarlyCloseOff",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "hasEarlyCloseOff",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"PATCH Offerings"
					]
				}
			}
		},
		{
			"displayName": "Identifier",
			"name": "identifier",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "identifier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"PATCH Offerings"
					]
				}
			}
		},
		{
			"displayName": "Is Readonly",
			"name": "isReadonly",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "isReadonly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"PATCH Offerings"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "metadata",
			"type": "json",
			"default": "{\n  \"tags\": [\n    null\n  ]\n}",
			"routing": {
				"send": {
					"property": "metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"PATCH Offerings"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"PATCH Offerings"
					]
				}
			}
		},
		{
			"displayName": "Overview",
			"name": "overview",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "overview",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"PATCH Offerings"
					]
				}
			}
		},
		{
			"displayName": "Root Content ID",
			"name": "rootContentId",
			"type": "string",
			"default": "",
			"description": "Every time a course is republished it is assigned a new contentId. rootContentId is the first original contentId associated with a course.",
			"routing": {
				"send": {
					"property": "rootContentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"PATCH Offerings"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"PATCH Offerings"
					]
				}
			}
		},
		{
			"displayName": "Trailer Video URL",
			"name": "trailerVideoUrl",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "trailerVideoUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"PATCH Offerings"
					]
				}
			}
		},
		{
			"displayName": "Use Relative Dates",
			"name": "useRelativeDates",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "useRelativeDates",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Offerings"
					],
					"operation": [
						"PATCH Offerings"
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
						"Offerings"
					],
					"operation": [
						"PATCH Offerings"
					]
				}
			}
		},
];
