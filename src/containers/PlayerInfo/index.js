import { connect } from 'react-redux';
import PlayerInfo from 'src/components/PlayerInfo';
import {} from 'src/actions/tictactoe';

const mapStateToProps = (state, ownProps) => ({
  playerName: state.players[ownProps.id - 1].name,
  turnCount: state.turnCount,
  ready: state.ready,
  victory: state.victory,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerInfo);
