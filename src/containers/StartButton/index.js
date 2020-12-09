import { connect } from 'react-redux';
import StartButton from 'src/components/StartButton';
import { resetGame } from 'src/actions/tictactoe';

const mapStateToProps = (state, ownProps) => {

};

const mapDispatchToProps = (dispatch) => ({
  resetGame: (id) => {
    dispatch(resetGame(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StartButton);
