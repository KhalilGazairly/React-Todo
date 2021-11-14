import React from 'react';
import TodoList from './TodoList';
import AddForm from './AddForm';

class Todo extends React.Component {
    idIncrement=3;
    constructor(){
        super();
        this.state={
            items:[{
                id:1,
                task:'Go to ITI',
                done:false
            },
            {
                id:2,
                task:'Go to Home',
                done:false
            },
        ]
        }
    }

    Additem = (item) =>{
        item.id = this.idIncrement++;
        this.state.items.push(item);
        this.setState({items: this.state.items})
    }

    Deleteitem=(id)=>{
        let item = this.state.items.findIndex((item)=>{
            return item.id === id;
        })
        this.state.items.splice(item,1);
        this.setState({items: this.state.items})
    }

    DoneItem=(id)=>{
        // let item = this.state.items.find((item)=>item.id==id)
        // item.done = !item.done;
        let item = this.state.items.find((item)=>{
            return item.id === id;
        })
        item.done = !item.done;
        this.setState({items: this.state.items})
    }

    render() { 
        return <div>
            <div className="container py-3 mh-100 overflow-auto">
                <h2 className='text-center' >Todo Tasks </h2>
                <AddForm addTask={this.Additem} />
                <TodoList  tasks={this.state.items} 
                deleteItem={this.Deleteitem} 
                markItem={this.DoneItem} />
                
            </div>
            
        </div>;
    }
}
 
export default Todo;

