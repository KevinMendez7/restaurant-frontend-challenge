import React from 'react';

class Reviews extends React.PureComponent {

    constructor() {
        super();

        this.state = {
            reviews: [],
            loading: true
        };
    }

    componentDidMount() {        
        fetch(`http://localhost:4000/restaurant/${this.props.id}/review`).then(resp => {      
            resp.json().then(({ data }) => {        
            console.log(data);
            this.setState({
                reviews : data,
                loading: false
            });
            })
        }).catch(err => {
            console.error(err)
        }); 
    }

    render() {
        console.log(this.props)
        return (
            <>
                <h3>Comentarios</h3>
                <h3>ESCRIBIR NUEVO COMENTARIO</h3>
                {
                  this.state.reviews.length > 0
                  ? this.state.reviews.map(({ name, comment, createdAt }, index) => {                  
                    const date = new Date(createdAt);
                    return (
                      <div key={index}>
                        <p><span>{name}</span> el <span>{`${date.getDate()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`}</span></p>
                        <p>{comment}</p>
                      </div>
                    )})
                  : <h3>No comments</h3>
                }
                <form>
                  <label>
                    Nombre:
                    <input type="text" name="name" />
                  </label>
                  <label>
                    Comentario:
                    <input type="text" name="comment" />
                  </label>
                  <input type="submit" value="Enviar" />
                </form>   
            </>
        );
    };
}

export default Reviews;