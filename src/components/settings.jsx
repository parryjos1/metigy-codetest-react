import React, {Component} from 'react';
import axios from 'axios';

class Settings extends Component {

    constructor(props) {
        super(props)
        this.state = {
            browser: {'chrome': false, 'safari': false, 'firefox': false, 'opera': false, 'explorer': false, 'incognito': false},
            counters: {'targetedMin': 0, 'targetedMax': 0, 'visitPage': 0, 'visitMin': 0, 'visitMax': 0, 'operationMin': 0, 'operationMax': 0, 'targetSiteMin': 0, 'targetSiteMax': 0, 'autoReset': 0},
            device: {'Device': false, 'Vinn': false, 'Phone': false, 'Mobile': false, 'Fly': false},
            tools: {'cookies': false, 'resolution': false, 'tracks': false, 'saving': false, 'generate': false, 'protection': false, 'history': false}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/')
        .then( result => {
            // console.log(result)
            this.updateForm( result )
        })
    }

    updateForm = ( response ) => {

        if( Object.entries(response).length === 0 && response.constructor === Object) {
            console.log('response is empty')
        } else {
            // console.log('not empty')
            const newObj = {}
            for (let [key, value] of Object.entries(response.data[0])) {
                const resKey = `${key}`;
                const resValue = `${value}`;
                console.log(`${key}: ${value}`);
                newObj[key] = value;
            }

            this.setState({browser: newObj['browser']})
            this.setState({counters: newObj['counters']})
            this.setState({device: newObj['device']})
            this.setState({tools: newObj['tools']})

        }
    }

    handleClickAdd = (e) => {
        // console.log(e.target.value)
        const stateToChange = `${e.target.value}`
        this.setState( (prevState ) => {
            prevState.counters[stateToChange] = prevState.counters[stateToChange] + 1;
            return prevState
        });
    }
    handleClickSubtract = (e) => {
        // console.log(e.target.value)
        const stateToChange = `${e.target.value}`
        this.setState( (prevState ) => {
            // prevState.counters[`${e.target.value}`] = prevState.counters[`${e.target.value}`] - 1;
            prevState.counters[stateToChange] = prevState.counters[stateToChange] - 1;
            return prevState
        });
    }

    checkboxClick = (e) => {
        const stateValue = `${e.target.value}`;
        const stateToChange = !this.state.browser[stateValue]
        // Updates object in state
        this.setState( (prevState ) => {
            prevState.browser[stateValue] = stateToChange;
            return prevState
        });
    }

    checkboxClickDevice = (e) => {
        const stateValue = `${e.target.value}`;
        const stateToChange = !this.state.device[stateValue]
        // Updates object in state
        this.setState( (prevState ) => {
            prevState.device[stateValue] = stateToChange;
            return prevState
        });
    }

    checkboxClickTools = (e) => {
        const stateValue = `${e.target.value}`;
        const stateToChange = !this.state.tools[stateValue]
        // Updates object in state
        this.setState( (prevState ) => {
            prevState.tools[stateValue] = stateToChange;
            return prevState
        });
    }

    onExport = () => {
        // Here data could be used to send as POST request via Axios as needed
        const exportData = this.state;
        console.log(exportData);
    }

    onStart = () => {
        alert("You've click the Start button")
    }

    onStop = () => {
        alert("You've clicked on the stop button")
    }

    render() {
        return (
            <div>
                <h1>Settings</h1>

                <div className='settings-container'>

                        <form className='browser-checkbox'>
                            <div className='browser-checkbox-item'>
                                <label>Chrome<input type='checkbox' name='Chrome' value='chrome' onChange={this.checkboxClick} checked={this.state.browser.chrome} /></label>
                            </div>
                            <div className='browser-checkbox-item'>
                                <label>Safari<input type='checkbox' name='Safari' value='safari' onChange={this.checkboxClick} checked={this.state.browser.safari} /></label>
                            </div>
                            <div className='browser-checkbox-item'>
                                <label>Firefox<input type='checkbox' name='Firefox' value='firefox' onChange={this.checkboxClick} checked={this.state.browser.firefox} /></label>
                            </div>
                            <div className='browser-checkbox-item'>
                                <label>Opera<input type='checkbox' name='Opera' value='opera' onChange={this.checkboxClick} checked={this.state.browser.opera} /></label>
                            </div>
                            <div className='browser-checkbox-item'>
                                <label>Explorer<input type='checkbox' name='Explorer' value='explorer' onChange={this.checkboxClick} checked={this.state.browser.explorer} /></label>
                            </div>
                            <div className='browser-checkbox-item'>
                                <label>Incognito<input type='checkbox' name='Incognito' value='incognito' onChange={this.checkboxClick} checked={this.state.browser.incognito} /></label>
                            </div>
                        </form>


                        <div className='ad-settings'>

                            <div className='seconds-targeted'>
                                <label className='ad-contents'>
                                    <p className='ad-words'>Wait</p>                                                              
                                    <div className='counter'>
                                        <div className='count'>{this.state.counters['targetedMin']}</div>
                                        <div className='change-counter'>
                                            <button value='targetedMin' onClick={this.handleClickAdd}>+</button>
                                            <button value='targetedMin' onClick={this.handleClickSubtract}>-</button>
                                        </div>
                                    </div>   
                                    <div className='counter'>
                                        <div className='count'>{this.state.counters['targetedMax']}</div>
                                        <div className='change-counter'>
                                            <button value='targetedMax' onClick={this.handleClickAdd}>+</button>
                                            <button value='targetedMax' onClick={this.handleClickSubtract}>-</button>
                                        </div>
                                    </div>   
                                    <p className='ad-words'>seconds on targeted site</p>  
                                </label>
                            </div> 

                            <div className='visit'>
                                <form>
                                    <div className='visit-item'>
                                        <label><input type='checkbox' name='Chrome' />Visit page within the site</label>
                                    </div>
                                </form>
                            </div>

                            <div className='wait-visit'>

                            <label className='ad-contents'>
                                    <div className='counter'>
                                        <div className='count'>{this.state.counters['visitPage']}</div>
                                        <div className='change-counter'>
                                            <button value='visitPage' onClick={this.handleClickAdd}>+</button>
                                            <button value='visitPage' onClick={this.handleClickSubtract}>-</button>
                                        </div>
                                    </div>    
                                    <p className='ad-words'>pages</p>
                                    <div className='counter'>
                                        <div className='count'>{this.state.counters['visitMin']}</div>
                                        <div className='change-counter'>
                                            <button value='visitMin' onClick={this.handleClickAdd}>+</button>
                                            <button value='visitMin' onClick={this.handleClickSubtract}>-</button>
                                        </div>
                                    </div> 
                                    <div className='counter'>
                                        <div className='count'>{this.state.counters['visitMax']}</div>
                                        <div className='change-counter'>
                                            <button value='visitMax' onClick={this.handleClickAdd}>+</button>
                                            <button value='visitMax' onClick={this.handleClickSubtract}>-</button>
                                        </div>
                                    </div> 
                                    <p className='ad-words'>visit from to second.</p>
                                </label>
                            </div> 

                            <div className='operation'>
                            <label className='ad-contents'>
                                    <p className='ad-words'>After the operation is complete</p>

                                    <div className='counter'>
                                        <div className='count'>{this.state.counters['operationMin']}</div>
                                        <div className='change-counter'>
                                            <button value='operationMin' onClick={this.handleClickAdd}>+</button>
                                            <button value='operationMin' onClick={this.handleClickSubtract}>-</button>
                                        </div>
                                    </div>    
                                    <div className='counter'>
                                        <div className='count'>{this.state.counters['operationMax']}</div>
                                        <div className='change-counter'>
                                            <button value='operationMax' onClick={this.handleClickAdd}>+</button>
                                            <button value='operationMax' onClick={this.handleClickSubtract}>-</button>
                                        </div>
                                    </div>    
                                    <p className='ad-words'>seconds wait.</p>
                                </label>
                            </div> 

                            <div className='targetSite'>

                            <label className='ad-contents'>
                                    <p className='ad-words'>Target site</p>
                                    <div className='counter'>
                                        <div className='count'>{this.state.counters['targetSiteMin']}</div>
                                        <div className='change-counter'>
                                            <button value='targetSiteMin' onClick={this.handleClickAdd}>+</button>
                                            <button value='targetSiteMin' onClick={this.handleClickSubtract}>-</button>
                                        </div>
                                    </div>  
                                    <p className='ad-words'>if not found times</p>
                                    <div className='counter'>
                                        <div className='count'>{this.state.counters['targetSiteMax']}</div>
                                        <div className='change-counter'>
                                            <button value='targetSiteMax' onClick={this.handleClickAdd}>+</button>
                                            <button value='targetSiteMax' onClick={this.handleClickSubtract}>-</button>
                                        </div>
                                    </div>     
                                    <p className='ad-words'>minutes wait.</p>
                                </label>
                            </div> 

                            <div className='autoReset'>

                            <label className='ad-contents'>
                                    <div className='counter'>
                                        <div className='count'>{this.state.counters['autoReset']}</div>
                                        <div className='change-counter'>
                                            <button value='autoReset' onClick={this.handleClickAdd}>+</button>
                                            <button value='autoReset' onClick={this.handleClickSubtract}>-</button>
                                        </div>
                                    </div>  
                                    <p className='ad-words'>automatic reset after operation</p>   
                                </label>

                            </div> 

                        </div> 
                        {/* end of ad-settings */}


                        <form className='device-checkbox'>
                            <div className='browser-checkbox-item'>
                                <label>Device Reset<input type='checkbox' name='Device Reset' value='Device' onClick={this.checkboxClickDevice} checked={this.state.device.Device} /></label>
                            </div>
                            <div className='browser-checkbox-item'>
                                <label>Vinn Reset<input type='checkbox' name='Vinn Reset' value='Vinn' onClick={this.checkboxClickDevice} checked={this.state.device.Vinn} /></label>
                            </div>
                            <div className='browser-checkbox-item'>
                                <label>Phone Reset<input type='checkbox' name='Phone Reset' value='Phone' onClick={this.checkboxClickDevice} checked={this.state.device.Phone} /></label>
                            </div>
                            <div className='browser-checkbox-item'>
                                <label>Mobile Data<input type='checkbox' name='Mobile Data' value='Mobile' onClick={this.checkboxClickDevice} checked={this.state.device.Mobile} /></label>
                            </div>
                            <div className='browser-checkbox-item'>
                                <label>Fly Mode<input type='checkbox' name='Fly Mode' value='Fly' onClick={this.checkboxClickDevice} checked={this.state.device.Fly} /></label>
                            </div>
                        </form>

                        <form className='browser-tools-checkbox'>
                            <div className='browser-checkbox-item'>
                                <label>Remove Cookies<input type='checkbox' name='Remove Cookies' value='cookies' onClick={this.checkboxClickTools} checked={this.state.tools.cookies} /></label>
                            </div>
                            <div className='browser-checkbox-item'>
                                <label>Change Resolution<input type='checkbox' name='Change Resolution' value='resolution' onClick={this.checkboxClickTools} checked={this.state.tools.resolution} /></label>
                            </div>
                            <div className='browser-checkbox-item'>
                                <label>Mouse Tracks<input type='checkbox' name='Mouse Tracks' value='tracks' onClick={this.checkboxClickTools} checked={this.state.tools.tracks} /></label>
                            </div>
                            <div className='browser-checkbox-item'>
                                <label>Data Saving Mode<input type='checkbox' name='Data Saving Mode' value='saving' onClick={this.checkboxClickTools} checked={this.state.tools.saving} /></label>
                            </div>
                            <div className='browser-checkbox-item'>
                                <label>Random Generate<input type='checkbox' name='Random Generate' value='generate' onClick={this.checkboxClickTools} checked={this.state.tools.generate} /></label>
                            </div>
                            <div className='browser-checkbox-item'>
                                <label>Analytics Protection<input type='checkbox' name='Analytics Protection' value='protection' onClick={this.checkboxClickTools} checked={this.state.tools.protection} /></label>
                            </div>
                            <div className='browser-checkbox-item'>
                                <label>Remove History<input type='checkbox' name='Remove History' value='history' onClick={this.checkboxClickTools} checked={this.state.tools.history} /></label>
                            </div>
                        </form>

                        <form className='settings-buttons'>
                            <div className='button-left'>
                                <button onClick={this.onExport} >Export Report</button>
                            </div>
                            <div className='button-right'>
                                <button id='left-button' onClick={this.onStop} >Stop</button>
                                <button id='right-button' onClick={this.onStart} >Start</button>
                            </div>
                        </form>

                </div>

            </div>
        )
    }
}


export default Settings