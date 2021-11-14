import React from 'react';



class TodoItem extends React.Component {

    render() { 
        return <div>
                <div className='container'>
                    <div className='row'>
                    <div className='col-8 m-auto' style={{backgroundColor:this.props.item.done?'blue':'white'}}>
                            <h3 >{this.props.title}</h3>
                        </div>
                        <div className='col-4 m-auto text-center' style={{backgroundColor:this.props.item.done?'blue':'white'}}>
                            <button onClick={()=>this.props.markItem(this.props.item.id)} className='btn btn-info'> Mark</button>
                            <button  onClick={()=>this.props.deleteItemDet(this.props.item.id)} className='btn btn-danger ml-1'> Delete</button>
                        </div>
                    </div>
                </div>
        </div>;
    }
}
 
export default TodoItem;