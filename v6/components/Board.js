import React from 'react';
import { connect } from 'react-redux';
import { getLetter } from '../actions/board';

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
					x: i,
					y: j,
					content: squares[i][j]
				}

				cells.push(cell);
			}
		}

		return <div className='board'>
			{cells.map((item) => { return <span onClick={() => this.props.onSquareClick(item.x, item.y)} key={item.key} style={item.cellStyles} className={item.className}>{item.content}</span>})}
		</div>;
	}
}

const mapStateToProps = state => {
	return {
	  squares: state.board
	}
  }

const mapDispatchToProps = dispatch => {
	return {
		onSquareClick: (x, y) => {
			dispatch(getLetter(x, y))
		}
	}
}

Board = connect(mapStateToProps,mapDispatchToProps)(Board);

export default Board;