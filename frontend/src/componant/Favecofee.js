import React, { Component } from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap/'
export class Favecofee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allCafeeData: {},
            show: false
        }

    }
    componentDidMount = async () => {

        const FaveDatat = await axios.get(`http://localhost:8000/retreive`);
        this.setState({
            allCafeeData: FaveDatat.data,
            show: true
        })
        console.log(this.state.FaveDatat);


    }
    delete = async (e, item) => {
        e.preventDefault()

await axios.delete(`http://localhost:8000/delete/${this.state.allCafeeData{idx}}`,delete)

    }
}
    render() {
        return (
            <>
               {this.state.show && this.state.allCafeeData.map((item, idx) => {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.ingredients}
                                </Card.Text>
                                <Button onClick={(e) =>{this.delete(e,idx)}}  variant="primary">delet </Button>
                            </Card.Body>
                        </Card>

                    )
                }
                )}
            </>
        )
    }
}

export default Favecofee
