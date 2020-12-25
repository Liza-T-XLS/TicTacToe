import { connect } from 'react-redux';
import Grid from 'src/components/Grid';
import { sendMessage } from 'src/actions/tictactoe';

const mapStateToProps = (state) => ({
  grid: state.grid,
  turnCount: state.turnCount,
  victory: state.victory,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (content) => {
    dispatch(sendMessage(content));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Grid);
