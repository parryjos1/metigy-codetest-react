import React, {Component} from 'react';

class Sites extends Component {

    constructor(props){
        super(props)
        this.state = {
            sites: ['www.dockers.com', 'www.adidas.com', 'www.nike.com', 'www.underarmour.com', 'www.newbalance.com', 'www.puma.com', 'www.prada.com', 'www.fredperry.com', 'www.catapillar.com', 'www.gucci.com', 'www.almonds.com', 'www.brunoarmagio.com'],
            addKeyword: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({addKeyword: e.target.value})
      }

    handleSubmitAdd = (e) => {
        e.preventDefault();
        // Add text to array of sites
        this.setState({ sites: [...this.state.sites, this.state.addKeyword] })

        this.input.value = '';
        this.setState({addKeyword: ''})
      }

      handleSubmitClear = (e) => {
        //   console.log('clear clicked')
          console.log(e.target.value)
          this.setState({ sites: this.state.sites.filter( function( keyword ) {
              return keyword !== e.target.value
          })});
      }
    

    render() {
        return (
            <div>
                <h1>Sites</h1>

                <div className='search-container'>
                    <div className='search-bar'>
                        <form onSubmit={this.handleSubmitAdd}>
                            <input className='search'type='text' placeholder="Enter your site here" onChange={this.onSearchChange} ref={(input) => this.input = input} />
                            <input className='add' id='site-add' type='submit' value='Add' />
                        </form>
                    </div>
                    <div className='item-list'>
                        {
                            this.state.sites.length > 0
                            ?
                            this.state.sites.map( k => 
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

export default Sites

{/* <div className='search-container'>
                    <div className='search-bar'>
                        <form onSubmit={this.handleSubmitAdd}>
                            <input type='text' placeholder="enter your sites here 'shoes'" onChange={this.onSearchChange} ref={(input) => this.input = input} />
                            <input type='submit' value='Add' />
                        </form>
                    </div>
                    <div className='item-list'>
                        {
                            this.state.sites.length > 0
                            ?
                            this.state.sites.map( k => 
                                <div key={k}>
                                    <p>{k}</p>
                                    <button value={k}  onClick={this.handleSubmitClear} >Clear</button>
                                </div>
                            )
                            :
                            <div></div>
                        }
                    </div>
                </div> */}