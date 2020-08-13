import React from 'react'
import { createComponentWithProxy } from 'react-fela'

const Icon = createComponentWithProxy(
	props => ({
		color: props.color ? props.color : 'inherit',
		fill: props.fill ? props.fill : 'currentColor',
		width: props.width ? props.width : 'inherit',
		height: props.height ? props.height : 'inherit',
		extend: [
			{
				condition: props.shadow,
				style: {
					filter: 'drop-shadow(2px 1px 4px #000)',
				},
			},
			{
				condition: props.rotate180,
				style: {
					transform: 'rotate(180deg)',
				},
			},
		],
	}),
	'svg'
)

export default ({ glyph, children, ...props }) => (
	<Icon viewBox={`${glyph.viewBox}`} {...props}>
		<use
			xlinkHref={`#${glyph.id}`}
		/>
	</Icon>
)
