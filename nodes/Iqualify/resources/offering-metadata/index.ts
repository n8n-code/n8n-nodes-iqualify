import type { INodeProperties } from 'n8n-workflow';

export const offeringMetadataDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Metadata"
					]
				}
			},
			"options": [
				{
					"name": "PUT Offerings Metadata Category",
					"value": "PUT Offerings Metadata Category",
					"action": "Update offering category metadata",
					"description": "Updates the offering category metadata.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/metadata/category"
						}
					}
				},
				{
					"name": "PUT Offerings Metadata Level",
					"value": "PUT Offerings Metadata Level",
					"action": "Update offering level metadata",
					"description": "Updates the offering level metadata.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/metadata/level"
						}
					}
				},
				{
					"name": "PUT Offerings Metadata Tags",
					"value": "PUT Offerings Metadata Tags",
					"action": "Update offering tags metadata",
					"description": "Updates the offering tags metadata.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/metadata/tags"
						}
					}
				},
				{
					"name": "PUT Offerings Metadata Topic",
					"value": "PUT Offerings Metadata Topic",
					"action": "Update offering topic metadata",
					"description": "Updates the offering topic metadata.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/metadata/topic"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /offerings/{offeringId}/metadata/category",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Metadata"
					],
					"operation": [
						"PUT Offerings Metadata Category"
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
						"Offering Metadata"
					],
					"operation": [
						"PUT Offerings Metadata Category"
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
						"Offering Metadata"
					],
					"operation": [
						"PUT Offerings Metadata Category"
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
						"Offering Metadata"
					],
					"operation": [
						"PUT Offerings Metadata Category"
					]
				}
			}
		},
		{
			"displayName": "PUT /offerings/{offeringId}/metadata/level",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Metadata"
					],
					"operation": [
						"PUT Offerings Metadata Level"
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
						"Offering Metadata"
					],
					"operation": [
						"PUT Offerings Metadata Level"
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
						"Offering Metadata"
					],
					"operation": [
						"PUT Offerings Metadata Level"
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
						"Offering Metadata"
					],
					"operation": [
						"PUT Offerings Metadata Level"
					]
				}
			}
		},
		{
			"displayName": "PUT /offerings/{offeringId}/metadata/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Metadata"
					],
					"operation": [
						"PUT Offerings Metadata Tags"
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
						"Offering Metadata"
					],
					"operation": [
						"PUT Offerings Metadata Tags"
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
						"Offering Metadata"
					],
					"operation": [
						"PUT Offerings Metadata Tags"
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
						"Offering Metadata"
					],
					"operation": [
						"PUT Offerings Metadata Tags"
					]
				}
			}
		},
		{
			"displayName": "PUT /offerings/{offeringId}/metadata/topic",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Offering Metadata"
					],
					"operation": [
						"PUT Offerings Metadata Topic"
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
						"Offering Metadata"
					],
					"operation": [
						"PUT Offerings Metadata Topic"
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
						"Offering Metadata"
					],
					"operation": [
						"PUT Offerings Metadata Topic"
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
						"Offering Metadata"
					],
					"operation": [
						"PUT Offerings Metadata Topic"
					]
				}
			}
		},
];
