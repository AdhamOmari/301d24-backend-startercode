import React, { Component } from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap/'
export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCafeeData: {},
            show: false
        }

    }
    componentDidMount = async () => {

        const allData = await axios.get(`http://localhost:8000/fav-list`);
        this.setState({
            allCafeeData: allData.data,
            show: true
        })
        console.log(allData.data);

    }

    addToFavert = async (e, item) => {
        e.preventDefault()


        const addtoFavert =({
            title:item.title,
            description :item.description,
            ingredients :item.ingredients,
            img :item.img,
            id :item.id,

        })

      

        await axios.post(`http://localhost:8000/create`,addtoFavert);
        console.log(addtoFavert);

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
                                <Button onClick={(e) =>{this.addToFavert(e,item)}}  variant="primary">add</Button>
                            </Card.Body>
                        </Card>

                    )
                }
                )}


            </>
        )
    }
}

export default Home
