import { connect } from 'react-redux';
import GridSquare from 'src/components/Grid/GridSquare';
import { changeMarkForm } from 'src/actions/tictactoe';

const mapStateToProps = (state, ownProps) => {
  const gridSquare = 'gridSquare' + ownProps.id;
  return ({
    markForm: state.[gridSquare],
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeMarkForm: (id) => {
    dispatch(changeMarkForm(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GridSquare);
