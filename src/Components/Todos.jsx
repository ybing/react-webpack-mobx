/**
 * Created by Min on 2016/11/21.
 */
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import autobind from 'autobind-decorator';

import '../Style/Todos';

@observer
export default class Todos extends Component {
    @autobind
    onPress(event){
        if(event.key === 'Enter'){
            const param = {
                text: event.target.value,
                createdTime: Date.now()
            }
            this.props.route.store.todos.addList(param);
            event.target.value = '';
        }
    }

    @autobind
    remove(index){
        this.props.route.store.todos.removeList(index);
    }

    render(){
        let {todoList} = this.props.route.store.todos;
        return (
            <div className="todo-container">
                <ul>
                    <li><input type="text" placeholder="Please input" onKeyPress={this.onPress}/></li>
                    {
                        todoList.map((val, key) => {
                            return <li className="list" key={key}>{val.text} <span onClick={() => this.remove(key)}>&#10008;</span></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
