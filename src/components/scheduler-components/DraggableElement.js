import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Typography } from 'antd';
import ListItem from './ListItem';
import { DragColumn } from './styles/styles';

const DraggableElement = ({ prefix, elements }) => (
  <DragColumn className="gutter-row" span={12}>
    <Typography.Title level={4} strong style={{ textAlign: 'center' }}>
      {prefix}
    </Typography.Title>
    <Droppable droppableId={`${prefix}`}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {elements.map((item, index) => (
            <ListItem key={item.id} item={item} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragColumn>
);

export default DraggableElement;
