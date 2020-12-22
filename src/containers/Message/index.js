import { connect } from 'react-redux';
import Message from 'src/components/Message';
// import { resetGame } from 'src/actions/tictactoe';

const mapStateToProps = (state) => ({
  content: state.message,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message);
