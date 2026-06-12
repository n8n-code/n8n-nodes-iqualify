import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class IqualifyApi implements ICredentialType {
        name = 'N8nDevIqualifyApi';

        displayName = 'Iqualify API';

        icon: Icon = { light: 'file:../nodes/Iqualify/iqualify.png', dark: 'file:../nodes/Iqualify/iqualify.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.iqualify.com/v1',
                        required: true,
                        placeholder: 'https://api.iqualify.com/v1',
                        description: 'The base URL of your Iqualify API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
