import { connect } from 'react-redux';
import GridSquare from 'src/components/Grid/GridSquare';
import { changeMarkForm, checkWin } from 'src/actions/tictactoe';

const mapStateToProps = (state, ownProps) => {
  const gridSquare = 'gridSquare' + ownProps.id;
  console.log(state.[gridSquare].clicked);
  return ({
    markForm: state.[gridSquare].form,
    clickedStatus: state.[gridSquare].clicked,
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
