import React from 'react';

class Pictures extends React.Component {
    render() {
        return (
            <>
                <h3>Fotografias</h3>
                {
                    this.props.pictures.length > 0
                    ? this.props.pictures.map(picture => (
                        <>
                        <img scr={picture.url} alt={picture.url} />
                        </>
                        ))                
                    : <h2>No pictures</h2>
                }
            </>
        );
    }
}

export default Pictures;