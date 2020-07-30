import React, { useState } from "react";
import { Card, Input,Button,Divider,List } from "antd";
import { CheckSquareFilled } from '@ant-design/icons';
export default function CardColumn(props) {
  const [task, setTask] = useState("");
  const [text, addText] = useState([]);
  const addTask = () =>{
    addText([...text,task]);
    setTask("")
  }
    const addButton = (
        <Button  type="primary" size="default" icon={<CheckSquareFilled/>} onClick={addTask}></Button>
    )

  return (
    <Card title={props.title} bordered={false}>
      <Input id="task" value={task} onChange={event => setTask(event.target.value) } placeholder="enter task" suffix={addButton} />
      <Divider orientation="left">Tasks List</Divider>
        <List>
            {text.length? text.map(item=>(
                <List.Item key={item}>{item}</List.Item>
            )):""}
        </List>
    </Card>
  );
}
