import { connect } from 'react-redux';
import GridSquare from 'src/components/Grid/GridSquare';
import {} from 'src/actions/tictactoe';

const mapStateToProps = (state, ownProps) => {
  const gridSquare = 'gridSquare' + ownProps.id;
  return ({
    markForm: state.[gridSquare],
  });
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GridSquare);
