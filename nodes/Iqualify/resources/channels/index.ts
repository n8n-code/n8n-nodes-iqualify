import type { INodeProperties } from 'n8n-workflow';

export const channelsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					]
				}
			},
			"options": [
				{
					"name": "GET Offerings Analytics Channels Comments",
					"value": "GET Offerings Analytics Channels Comments",
					"action": "Find comments",
					"description": "Responds with a list of comments made in any posts in a specified channel, within an offering.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/analytics/channels/{{$parameter[\"channelId\"]}}/comments"
						}
					}
				},
				{
					"name": "GET Offerings Analytics Channels Posts",
					"value": "GET Offerings Analytics Channels Posts",
					"action": "Find posts",
					"description": "Responds with a list of posts made in a specified channel, within an offering.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/analytics/channels/{{$parameter[\"channelId\"]}}/posts"
						}
					}
				},
				{
					"name": "GET Offerings Analytics Channels Replies",
					"value": "GET Offerings Analytics Channels Replies",
					"action": "Find replies",
					"description": "Responds with a list of replies to comments in any posts in a specified channel, within an offering.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/analytics/channels/{{$parameter[\"channelId\"]}}/replies"
						}
					}
				},
				{
					"name": "GET Offerings Channels",
					"value": "GET Offerings Channels",
					"action": "Find channels",
					"description": "Responds with a list of channels in an offering.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/channels"
						}
					}
				},
				{
					"name": "POST Offerings Channels",
					"value": "POST Offerings Channels",
					"action": "Add channel",
					"description": "Adds new channel to the specified offering.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/channels"
						}
					}
				},
				{
					"name": "PATCH Offerings Channels",
					"value": "PATCH Offerings Channels",
					"action": "Update channel",
					"description": "Updates a channel in an offering.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/channels/{{$parameter[\"channelId\"]}}"
						}
					}
				},
				{
					"name": "DELETE Offerings Channels Learners",
					"value": "DELETE Offerings Channels Learners",
					"action": "Remove learners from a group channel",
					"description": "Removes a learner from the specified group channel.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/channels/{{$parameter[\"channelId\"]}}/learners"
						}
					}
				},
				{
					"name": "GET Offerings Channels Learners",
					"value": "GET Offerings Channels Learners",
					"action": "Find learners in a group channel",
					"description": "Finds all learners in a specified group channel.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/channels/{{$parameter[\"channelId\"]}}/learners"
						}
					}
				},
				{
					"name": "POST Offerings Channels Learners",
					"value": "POST Offerings Channels Learners",
					"action": "Add learners to a group channel",
					"description": "Adds a learner to a specified group channel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/offerings/{{$parameter[\"offeringId\"]}}/channels/{{$parameter[\"channelId\"]}}/learners"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /offerings/{offeringId}/analytics/channels/{channelId}/comments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"GET Offerings Analytics Channels Comments"
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
						"Channels"
					],
					"operation": [
						"GET Offerings Analytics Channels Comments"
					]
				}
			}
		},
		{
			"displayName": "Channel ID",
			"name": "channelId",
			"required": true,
			"description": "channel's id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"GET Offerings Analytics Channels Comments"
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
						"Channels"
					],
					"operation": [
						"GET Offerings Analytics Channels Comments"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/{offeringId}/analytics/channels/{channelId}/posts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"GET Offerings Analytics Channels Posts"
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
						"Channels"
					],
					"operation": [
						"GET Offerings Analytics Channels Posts"
					]
				}
			}
		},
		{
			"displayName": "Channel ID",
			"name": "channelId",
			"required": true,
			"description": "channel's id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"GET Offerings Analytics Channels Posts"
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
						"Channels"
					],
					"operation": [
						"GET Offerings Analytics Channels Posts"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/{offeringId}/analytics/channels/{channelId}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"GET Offerings Analytics Channels Replies"
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
						"Channels"
					],
					"operation": [
						"GET Offerings Analytics Channels Replies"
					]
				}
			}
		},
		{
			"displayName": "Channel ID",
			"name": "channelId",
			"required": true,
			"description": "channel's id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"GET Offerings Analytics Channels Replies"
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
						"Channels"
					],
					"operation": [
						"GET Offerings Analytics Channels Replies"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/{offeringId}/channels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"GET Offerings Channels"
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
						"Channels"
					],
					"operation": [
						"GET Offerings Channels"
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
						"Channels"
					],
					"operation": [
						"GET Offerings Channels"
					]
				}
			}
		},
		{
			"displayName": "POST /offerings/{offeringId}/channels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"POST Offerings Channels"
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
						"Channels"
					],
					"operation": [
						"POST Offerings Channels"
					]
				}
			}
		},
		{
			"displayName": "Is Broadcast Only",
			"name": "isBroadcastOnly",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "isBroadcastOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"POST Offerings Channels"
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
						"Channels"
					],
					"operation": [
						"POST Offerings Channels"
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
						"Channels"
					],
					"operation": [
						"POST Offerings Channels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /offerings/{offeringId}/channels/{channelId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"PATCH Offerings Channels"
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
						"Channels"
					],
					"operation": [
						"PATCH Offerings Channels"
					]
				}
			}
		},
		{
			"displayName": "Channel ID",
			"name": "channelId",
			"required": true,
			"description": "channel's id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"PATCH Offerings Channels"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"PATCH Offerings Channels"
					]
				}
			}
		},
		{
			"displayName": "Group Discussion",
			"name": "groupDiscussion",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "groupDiscussion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"PATCH Offerings Channels"
					]
				}
			}
		},
		{
			"displayName": "Is Broadcast Only",
			"name": "isBroadcastOnly",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "isBroadcastOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"PATCH Offerings Channels"
					]
				}
			}
		},
		{
			"displayName": "Private Support",
			"name": "privateSupport",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "privateSupport",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"PATCH Offerings Channels"
					]
				}
			}
		},
		{
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
						"Channels"
					],
					"operation": [
						"PATCH Offerings Channels"
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
						"Channels"
					],
					"operation": [
						"PATCH Offerings Channels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /offerings/{offeringId}/channels/{channelId}/learners",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"DELETE Offerings Channels Learners"
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
						"Channels"
					],
					"operation": [
						"DELETE Offerings Channels Learners"
					]
				}
			}
		},
		{
			"displayName": "Channel ID",
			"name": "channelId",
			"required": true,
			"description": "channel's id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"DELETE Offerings Channels Learners"
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
						"Channels"
					],
					"operation": [
						"DELETE Offerings Channels Learners"
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
						"Channels"
					],
					"operation": [
						"DELETE Offerings Channels Learners"
					]
				}
			}
		},
		{
			"displayName": "GET /offerings/{offeringId}/channels/{channelId}/learners",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"GET Offerings Channels Learners"
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
						"Channels"
					],
					"operation": [
						"GET Offerings Channels Learners"
					]
				}
			}
		},
		{
			"displayName": "Channel ID",
			"name": "channelId",
			"required": true,
			"description": "channel's id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"GET Offerings Channels Learners"
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
						"Channels"
					],
					"operation": [
						"GET Offerings Channels Learners"
					]
				}
			}
		},
		{
			"displayName": "POST /offerings/{offeringId}/channels/{channelId}/learners",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"POST Offerings Channels Learners"
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
						"Channels"
					],
					"operation": [
						"POST Offerings Channels Learners"
					]
				}
			}
		},
		{
			"displayName": "Channel ID",
			"name": "channelId",
			"required": true,
			"description": "channel's id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Channels"
					],
					"operation": [
						"POST Offerings Channels Learners"
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
						"Channels"
					],
					"operation": [
						"POST Offerings Channels Learners"
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
						"Channels"
					],
					"operation": [
						"POST Offerings Channels Learners"
					]
				}
			}
		},
];
