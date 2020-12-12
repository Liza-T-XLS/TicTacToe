import { connect } from 'react-redux';
import App from 'src/components/App';
import { checkReady } from 'src/actions/tictactoe';

const mapStateToProps = (state) => ({
  players: state.players,
});

const mapDispatchToProps = (dispatch) => ({
  checkReady: () => {
    dispatch(checkReady());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
