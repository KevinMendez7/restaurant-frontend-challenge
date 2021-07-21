import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../_actions/Pictures.action';

class Pictures extends React.Component {

    componentDidMount() {        
        this.props.actions.fetchPictures(this.props.id);        
    }

    render() {
        console.log(this)
        return (
            <>
                <h3>Fotografias</h3>
                {
                    this.props.pictures.length > 0
                    ? this.props.pictures.map(picture => (
                        <>
                        <img src={picture.url} alt={picture.url} />
                        </>
                        ))                
                    : <h2>No pictures</h2>
                }
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }
  
  const mapStateToProps = state => {
      console.log(state)
    return {
      pictures: state.pictures.data
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Pictures);