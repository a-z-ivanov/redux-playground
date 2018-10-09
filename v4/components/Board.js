import React from 'react';

class Board extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const squares = this.props.squares;
		const cells = [];	
		let cell;
		
		for (let i = 0; i < squares.length; i++) {
			for (let j = 0; j < squares[i].length; j++) {
				cell = {
					className: 'cell',
					cellStyles: {
						"gridArea": `${i+1}/${j+1}/${i+2}/${j+2}`
					},
					key: i + '_' + j,
					content: squares[i][j]
				}

				cells.push(cell);
			}
		}

		return <div className='board'>
			{cells.map((item) => { return <span key={item.key} style={item.cellStyles} className={item.className}>{item.content}</span>})}
		</div>;
	}
}

export default Board;