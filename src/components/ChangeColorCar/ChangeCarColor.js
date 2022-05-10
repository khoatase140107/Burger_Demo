import { Component } from "react";

class ChangeCarColor extends Component{
    constructor(props){
        super(props)
        this.state = {
            imageLink: './image/red-car.png'
        }
    }
    
    onChangColor = (colorString) => {
        this.setState({
            imageLink: `./image/${colorString}.png`,
        })
    }

    render(){
        return(
            <div className="changeColor_car">
                <div className="img_car">
                    <h1>Please choose your car's color</h1>
                    <img src={this.state.imageLink} alt="myCar" width={500} height={300} />
                </div>
                <div className="infor_colorCar">
                    <h1 style={{
                        textAlign: "center",
                        marginBottom: 50
                    }}>Change Color</h1>
                    <ul className="listColor">
                        <li onClick={() =>{
                            this.onChangColor("red-car")
                        }}  style={{
                            color: 'red',
                            borderColor: 'red'
                        }}>Red Color</li>
                        <li onClick={() =>{
                             this.onChangColor("black-car")
                        }} style={{
                            color: 'black',
                            borderColor: 'black'
                        }}>Black Color</li>
                        <li onClick={() =>{
                            this.onChangColor("white-car")
                        }} style={{
                            color: 'black',
                            borderColor: 'black'
                        }}>White Color</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ChangeCarColor;