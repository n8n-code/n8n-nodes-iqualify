import type { INodeProperties } from 'n8n-workflow';

export const usersInIQualifyDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users In I Qualify"
					]
				}
			},
			"options": [
				{
					"name": "POST Users",
					"value": "POST Users",
					"action": "Add new user",
					"description": "Creates a new user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users"
						}
					}
				},
				{
					"name": "GET Users",
					"value": "GET Users",
					"action": "Find user by email",
					"description": "Responds with a user matching the specified email.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"userEmail\"]}}"
						}
					}
				},
				{
					"name": "PATCH Users",
					"value": "PATCH Users",
					"action": "Update user",
					"description": "Updates the specified user by email.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"userEmail\"]}}"
						}
					}
				},
				{
					"name": "POST Users Invite Email",
					"value": "POST Users Invite Email",
					"action": "Resend invitation email",
					"description": "Re-sends an invitation e-mail to the specified user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"userEmail\"]}}/invite-email"
						}
					}
				},
				{
					"name": "GET Users Offerings",
					"value": "GET Users Offerings",
					"action": "Find user's offerings",
					"description": "Responds with all offerings that the user in.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"userEmail\"]}}/offerings"
						}
					}
				},
				{
					"name": "POST Users Offerings",
					"value": "POST Users Offerings",
					"action": "Adds the user to the specified offerings as a learner",
					"description": "Adds a user to an array of offerings by offeringId.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"userEmail\"]}}/offerings"
						}
					}
				},
				{
					"name": "POST Users Permissions",
					"value": "POST Users Permissions",
					"action": "Add permission to user",
					"description": "Adds additional permissions to the specified user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"userEmail\"]}}/permissions/{{$parameter[\"permissionName\"]}}"
						}
					}
				},
				{
					"name": "PUT Users Suspend",
					"value": "PUT Users Suspend",
					"action": "Suspend user",
					"description": "Suspends the specified user's account.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"userEmail\"]}}/suspend"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users In I Qualify"
					],
					"operation": [
						"POST Users"
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
						"Users In I Qualify"
					],
					"operation": [
						"POST Users"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "firstName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "firstName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users In I Qualify"
					],
					"operation": [
						"POST Users"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "lastName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "lastName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users In I Qualify"
					],
					"operation": [
						"POST Users"
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
						"Users In I Qualify"
					],
					"operation": [
						"POST Users"
					]
				}
			}
		},
		{
			"displayName": "Person ID",
			"name": "personId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "personId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users In I Qualify"
					],
					"operation": [
						"POST Users"
					]
				}
			}
		},
		{
			"displayName": "Profile",
			"name": "profile",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "profile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users In I Qualify"
					],
					"operation": [
						"POST Users"
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
						"Users In I Qualify"
					],
					"operation": [
						"POST Users"
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
						"Users In I Qualify"
					],
					"operation": [
						"POST Users"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{userEmail}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users In I Qualify"
					],
					"operation": [
						"GET Users"
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
						"Users In I Qualify"
					],
					"operation": [
						"GET Users"
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
						"Users In I Qualify"
					],
					"operation": [
						"GET Users"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{userEmail}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users In I Qualify"
					],
					"operation": [
						"PATCH Users"
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
						"Users In I Qualify"
					],
					"operation": [
						"PATCH Users"
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
						"Users In I Qualify"
					],
					"operation": [
						"PATCH Users"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "firstName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "firstName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users In I Qualify"
					],
					"operation": [
						"PATCH Users"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "lastName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "lastName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users In I Qualify"
					],
					"operation": [
						"PATCH Users"
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
						"Users In I Qualify"
					],
					"operation": [
						"PATCH Users"
					]
				}
			}
		},
		{
			"displayName": "Person ID",
			"name": "personId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "personId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users In I Qualify"
					],
					"operation": [
						"PATCH Users"
					]
				}
			}
		},
		{
			"displayName": "Profile",
			"name": "profile",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "profile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users In I Qualify"
					],
					"operation": [
						"PATCH Users"
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
						"Users In I Qualify"
					],
					"operation": [
						"PATCH Users"
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
						"Users In I Qualify"
					],
					"operation": [
						"PATCH Users"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{userEmail}/invite-email",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users In I Qualify"
					],
					"operation": [
						"POST Users Invite Email"
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
						"Users In I Qualify"
					],
					"operation": [
						"POST Users Invite Email"
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
						"Users In I Qualify"
					],
					"operation": [
						"POST Users Invite Email"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{userEmail}/offerings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users In I Qualify"
					],
					"operation": [
						"GET Users Offerings"
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
						"Users In I Qualify"
					],
					"operation": [
						"GET Users Offerings"
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
						"Users In I Qualify"
					],
					"operation": [
						"GET Users Offerings"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{userEmail}/offerings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users In I Qualify"
					],
					"operation": [
						"POST Users Offerings"
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
						"Users In I Qualify"
					],
					"operation": [
						"POST Users Offerings"
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
						"Users In I Qualify"
					],
					"operation": [
						"POST Users Offerings"
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
						"Users In I Qualify"
					],
					"operation": [
						"POST Users Offerings"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{userEmail}/permissions/{permissionName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users In I Qualify"
					],
					"operation": [
						"POST Users Permissions"
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
						"Users In I Qualify"
					],
					"operation": [
						"POST Users Permissions"
					]
				}
			}
		},
		{
			"displayName": "Permission Name",
			"name": "permissionName",
			"required": true,
			"description": "permission name",
			"default": "builder",
			"type": "options",
			"options": [
				{
					"name": "Builder",
					"value": "builder"
				},
				{
					"name": "Manager",
					"value": "manager"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Users In I Qualify"
					],
					"operation": [
						"POST Users Permissions"
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
						"Users In I Qualify"
					],
					"operation": [
						"POST Users Permissions"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{userEmail}/suspend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users In I Qualify"
					],
					"operation": [
						"PUT Users Suspend"
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
						"Users In I Qualify"
					],
					"operation": [
						"PUT Users Suspend"
					]
				}
			}
		},
		{
			"displayName": "Suspended",
			"name": "suspended",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "suspended",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users In I Qualify"
					],
					"operation": [
						"PUT Users Suspend"
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
						"Users In I Qualify"
					],
					"operation": [
						"PUT Users Suspend"
					]
				}
			}
		},
];
