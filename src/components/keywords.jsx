import React, {Component} from 'react';

class Keywords extends Component {

    constructor(props){
        super(props)
        this.state = {
            keywords: ['Shoes', 'Shoes carnival', 'Shoes palace', 'shoe stores near me', 'shoes for crew', 'shoes station', 'Shoes repair', 'Shoes for women', 'Shoes for fashion week', 'Shoes for instagram', 'Shoes stories', 'Shoes show'],
            addKeyword: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({addKeyword: e.target.value})
      }

    handleSubmitAdd = (e) => {
        e.preventDefault();
        // Add text to array of keywords
        this.setState({ keywords: [...this.state.keywords, this.state.addKeyword] })

        this.input.value = '';
        this.setState({addKeyword: ''})
      }

      handleSubmitClear = (e) => {
        //   console.log('clear clicked')
          console.log(e.target.value)
          this.setState({ keywords: this.state.keywords.filter( function( keyword ) {
              return keyword !== e.target.value
          })});
      }
    

    render() {
        return (
            <div>
                <h1>Keywords</h1>
                <div className='search-container'>
                    <div className='search-bar'>
                        <form onSubmit={this.handleSubmitAdd}>
                            <input className='search'type='text' placeholder="Enter your keywords here 'shoes'" onChange={this.onSearchChange} ref={(input) => this.input = input} />
                            <input className='add' type='submit' value='Add' />
                        </form>
                    </div>
                    <div className='item-list'>
                        {/* <div className='item-name'></div> */}
                        {
                            this.state.keywords.length > 0
                            ?
                            this.state.keywords.map( k => 
                                <ul key={k} className='item-row'>
                                    <li>{k}</li>
                                    <li className='clear'><button value={k}  onClick={this.handleSubmitClear} >Clear</button></li>
                                </ul>
                            )
                            :
                            <div></div>
                        }
                    </div>
                </div>

            </div>
        )
    }
}

export default Keywords

// this.state.keywords.map( k => 
//     <div key={k} className='item-row'>
//         <div className='item-row-left'>
//         <p>{k}</p>
//         </div>
//         <div className='item-row-right'>
//         <button value={k}  onClick={this.handleSubmitClear} >Clear</button>
//         </div>
//     </div>
// )