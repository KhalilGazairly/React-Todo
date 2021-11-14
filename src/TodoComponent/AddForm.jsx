import React from 'react';

export default class AddForm extends React.Component {
    constructor(){
        super();
        this.state={
            text:''
        }
    }

    Additem = () =>{
       let item = {
           task: this.state.text,
           done:false
       }
       this.props.addTask(item)
    }

    setText=(e)=>{
        this.setState({text: e.target.value})
    }

    render() { 
        return <div>
            <div className='m-auto py-4 text-center w-50'>
            <input className='form-control my-2' id='task' type="text" onChange={this.setText} value={this.state.setText}/>
            <button className='btn btn-info  px-5' onClick={this.Additem}>Add</button>
            </div>

        </div>;
    }
}
 
