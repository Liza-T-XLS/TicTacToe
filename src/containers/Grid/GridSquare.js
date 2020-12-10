import { connect } from 'react-redux';
import GridSquare from 'src/components/Grid/GridSquare';
import { changeMarkForm, checkWin } from 'src/actions/tictactoe';

const mapStateToProps = (state, ownProps) => {
  const gridSquare = state.grid[ownProps.id - 1];
  // console.log(state.[gridSquare].clicked);
  return ({
    markForm: gridSquare.form,
    clickedStatus: gridSquare.clicked,
    victory: state.victory,
    win: gridSquare.win,
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeMarkForm: (id) => {
    dispatch(changeMarkForm(id));
  },
  checkWin: (markForm) => {
    dispatch(checkWin(markForm));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GridSquare);
