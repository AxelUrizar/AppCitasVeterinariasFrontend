import React from "react";
import axios from "axios";

class TodasMascotas extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: [],
            isLoaded: false,
            error: false
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

        componentDidMount(){
            axios('http://localhost:3000/mascotas')
            .then(response => {
                this.setState({items: response.data, isLoaded: true})
            })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error: true
                })
            })
        }

        render(){
            const {error, isLoaded, items} = this.state;
            if(error) {
                return <div>Error: {error.message}</div>
            } else if (!isLoaded) {
                return <div>Loading...</div>
            } else {
                return (
                    <div>
                        <ul>
                            {items.map(item => (
                                <li key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                )
            }
        }
}

export default TodasMascotas