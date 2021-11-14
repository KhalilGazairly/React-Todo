import React from 'react';
import TodoItem from './TodoItem';


class TodoList extends React.Component {

    
    render() { 
        return <div>
            {this.props.tasks.map((item)=>{
                return <TodoItem key={item.id} title={item.task} item={item} deleteItemDet={this.props.deleteItem} markItem={this.props.markItem}  />
            })}
            
        </div>;
    }
}
 
export default TodoList;