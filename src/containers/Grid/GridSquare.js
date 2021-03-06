import { connect } from 'react-redux';
import GridSquare from 'src/components/Grid/GridSquare';
import { changeMarkForm, checkWin, sendMessage } from 'src/actions/tictactoe';

const mapStateToProps = (state, ownProps) => {
  const gridSquare = state.grid[ownProps.id - 1];
  return ({
    markForm: gridSquare.form,
    ready: state.ready,
    clickedStatus: gridSquare.clicked,
    victory: state.victory,
    win: gridSquare.win,
    turnCount: state.turnCount,
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeMarkForm: (id) => {
    dispatch(changeMarkForm(id));
  },
  checkWin: (markForm) => {
    dispatch(checkWin(markForm));
  },
  sendMessage: (content) => {
    dispatch(sendMessage(content));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GridSquare);
