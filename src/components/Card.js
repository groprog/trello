import React, { useState } from "react";
import { Card, Input,Button,Divider,List } from "antd";
import { CheckSquareFilled,DeleteOutlined } from '@ant-design/icons';
export default function CardColumn(props) {
  const [task, setTask] = useState("");
  const [text, addText] = useState([]);
  const addTask = () =>{
    addText([...text,task]);
    setTask("")
  }
  const deleteTask = (event,item) =>{
     event.preventDefault()
      let items = text.filter((t)=>{
        return t != item
      })
    addText(items)
  }
    const addButton = (
        <Button  type="primary" size="default" icon={<CheckSquareFilled/>} onClick={addTask}></Button>
    )


  const onEnterPress = (e) =>{
    if(e.keyCode == 13){
      addTask();
    }
  }

  return (
    <Card title={props.title} bordered={false}>
      <Input id="task" value={task} onChange={event => setTask(event.target.value) } onKeyDown={(e)=>onEnterPress(e)} placeholder="enter task" suffix={addButton} />
      <Divider orientation="left">Tasks List</Divider>
        <List>
            {text.length? text.map(item=>(
                <List.Item  extra={
                  <Button type="default" size="default" icon={<DeleteOutlined/>} onClick={(e)=>deleteTask(e,item)}></Button>
                } key={item}>{item}</List.Item>
            )):""}
        </List>
    </Card>
  );
}
