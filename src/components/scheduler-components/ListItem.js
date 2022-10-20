import React, { useMemo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { LoremIpsum } from 'lorem-ipsum';
import { generateFromString } from 'generate-avatar';
import { Typography, Avatar, Space } from 'antd';
import { DragItem, DragItemFlex } from './styles/styles';

const lorem = new LoremIpsum();

const ListItem = ({ item, index }) => {
  const randomHeader = useMemo(() => lorem.generateWords(5), []);

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <DragItem
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Space>
              <Avatar
                shape="square"
                size="large"
                src={`data:image/svg+xml;utf8,${generateFromString(item.id)}`}
              />
              <Typography.Text strong>{randomHeader}</Typography.Text>
            </Space>
            <Typography.Text>Content</Typography.Text>
            <DragItemFlex>
              <Typography.Text strong>{item.content}</Typography.Text>
              <Space>
                <Typography.Text strong>{item.id}</Typography.Text>
              </Space>
            </DragItemFlex>
          </DragItem>
        );
      }}
    </Draggable>
  );
};

export default ListItem;
