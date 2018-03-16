/** @format */

/**
 * External dependencies
 */
import deepFreeze from 'deep-freeze';

export const queryManagerSchema = deepFreeze( {
	additionalProperties: false,
	required: [ 'data', 'options' ],
	type: 'object',
	properties: {
		data: {
			additionalProperties: false,
			type: 'object',
			properties: {
				items: { type: 'object' },
				queries: {
					type: 'object',
					patternProperties: {
						// Stringified query objects are the keys
						'^\\[.*\\]$': {
							additionalProperties: false,
							required: [ 'itemKeys' ],
							type: 'object',
							properties: {
								itemKeys: {
									type: 'array',
									items: { type: 'string' },
								},
								found: {
									type: 'integer',
								},
							},
						},
					},
				},
			},
		},
		options: {
			additionalProperties: true,
			required: [ 'itemKey' ],
			type: 'object',
			properties: {
				itemKey: { type: 'string' },
			},
		},
	},
} );

export default queryManagerSchema;
