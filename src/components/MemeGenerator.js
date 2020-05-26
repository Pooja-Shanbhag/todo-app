import React from "react"

class MemeGenerator extends React.Component{
  constructor(){
    super()
    this.state={
      topText:"",
      bottomText:"",
      image:"http://i.imgflip.com/1bij.jpg",
      allMemeImgs:[]
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.generate = this.generate.bind(this)
  }

  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        console.log(memes)
        this.setState({allMemeImgs:memes})
  })
  }

  handleChange =(event) =>{
    const {name,value} = event.target
    this.setState({[name]:value})
  }
  generate = (event) => {
    event.preventDefault()
    const len = this.state.allMemeImgs.length
    console.log(len)
    let x = Math.floor((Math.random() * len) );
    this.setState(prevState => {
      console.log(prevState.allMemeImgs[x].url)
      return({
      image:prevState.allMemeImgs[x].url
      })
    })

  }
  render(){
    return(
      <div>
        <form className="meme-form" onSubmit={this.generate}>
          <input type="text" name="topText" onChange={this.handleChange} value={this.state.topText} placeholder="top text"></input>
          <input type="text" name="bottomText" onChange={this.handleChange} value={this.state.bottomText} placeholder="bottom text"></input>
          <button >Generate</button>
        </form>
          <div>
          <img src={this.state.image}></img>
            <h1 className="top">{this.state.topText}</h1>
            <h1 className="bottom">{this.state.bottomText}</h1>
        </div>
      </div>
      
    )
  }
}

export default MemeGenerator