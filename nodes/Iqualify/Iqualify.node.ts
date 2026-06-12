import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apiInfoDescription } from './resources/api-info';
import { courseMappingsDescription } from './resources/course-mappings';
import { coursesDescription } from './resources/courses';
import { courseMetadataDescription } from './resources/course-metadata';
import { offeringsDescription } from './resources/offerings';
import { assessmentManagementDescription } from './resources/assessment-management';
import { assessmentDataDescription } from './resources/assessment-data';
import { channelsDescription } from './resources/channels';
import { learnerActivityDescription } from './resources/learner-activity';
import { pulsesDescription } from './resources/pulses';
import { badgesDescription } from './resources/badges';
import { assessmentGroupsDescription } from './resources/assessment-groups';
import { offeringMetadataDescription } from './resources/offering-metadata';
import { offeringLearnersDescription } from './resources/offering-learners';
import { organisationDescription } from './resources/organisation';
import { usersInIQualifyDescription } from './resources/users-in-i-qualify';

export class Iqualify implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Iqualify',
                name: 'N8nDevIqualify',
                icon: { light: 'file:./iqualify.png', dark: 'file:./iqualify.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'IQualify API provides management responses for building.',
                defaults: { name: 'Iqualify' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevIqualifyApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "API Info",
					"value": "API Info",
					"description": ""
				},
				{
					"name": "Course Mappings",
					"value": "Course Mappings",
					"description": ""
				},
				{
					"name": "Courses",
					"value": "Courses",
					"description": ""
				},
				{
					"name": "Course Metadata",
					"value": "Course Metadata",
					"description": ""
				},
				{
					"name": "Offerings",
					"value": "Offerings",
					"description": ""
				},
				{
					"name": "Assessment Management",
					"value": "Assessment Management",
					"description": ""
				},
				{
					"name": "Assessment Data",
					"value": "Assessment Data",
					"description": ""
				},
				{
					"name": "Channels",
					"value": "Channels",
					"description": ""
				},
				{
					"name": "Learner Activity",
					"value": "Learner Activity",
					"description": ""
				},
				{
					"name": "Pulses",
					"value": "Pulses",
					"description": ""
				},
				{
					"name": "Badges",
					"value": "Badges",
					"description": ""
				},
				{
					"name": "Assessment Groups",
					"value": "Assessment Groups",
					"description": ""
				},
				{
					"name": "Offering Metadata",
					"value": "Offering Metadata",
					"description": ""
				},
				{
					"name": "Offering Learners",
					"value": "Offering Learners",
					"description": ""
				},
				{
					"name": "Organisation",
					"value": "Organisation",
					"description": ""
				},
				{
					"name": "Users In I Qualify",
					"value": "Users In I Qualify",
					"description": ""
				}
			],
			"default": ""
		},
		...apiInfoDescription,
		...courseMappingsDescription,
		...coursesDescription,
		...courseMetadataDescription,
		...offeringsDescription,
		...assessmentManagementDescription,
		...assessmentDataDescription,
		...channelsDescription,
		...learnerActivityDescription,
		...pulsesDescription,
		...badgesDescription,
		...assessmentGroupsDescription,
		...offeringMetadataDescription,
		...offeringLearnersDescription,
		...organisationDescription,
		...usersInIQualifyDescription
                ],
        };
}
