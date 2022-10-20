import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Row, Button, message, Space } from 'antd';
import DraggableElement from '../../../components/scheduler-components/DraggableElement';
import {
  DragDropContextContainer,
  CustomFileUpload,
} from '../../../components/scheduler-components/styles/styles';

const Scheduler = () => {
  const getDragItems = (count, prefix) => {
    return Array.from({ length: count }, (v, k) => k).map((k) => {
      const randomId = Math.floor(Math.random() * 1000);
      return {
        id: `dragItem-${randomId}`,
        prefix,
        content: `dragItem ${randomId}`,
      };
    });
  };

  const removeFromList = (list, index) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
  };

  const addToList = (list, index, element) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
  };

  const lists = ['New', 'Map'];

  const generateLists = () =>
    lists.reduce((acc, listKey) => ({ ...acc, [listKey]: getDragItems(10, listKey) }), {});

  const [dragElements, setDragElements] = useState(generateLists());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDragElements(generateLists());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...dragElements };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(sourceList, result.source.index);
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setDragElements(listCopy);
  };

  const exportData = (data) => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(data))}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'data.json';

    link.click();
  };

  const handleChange = (event) => {
    setIsLoading(true);
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0], 'UTF-8');
    fileReader.onload = (event) => {
      setIsLoading(false);
      setDragElements(JSON.parse(event.target.result));
      message.success('You uploaded file successfully');
    };
  };

  return (
    <DragDropContextContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <Row gutter={[16, 16]}>
          {lists.map((listKey) => (
            <DraggableElement elements={dragElements[listKey]} key={listKey} prefix={listKey} />
          ))}
        </Row>
      </DragDropContext>

      <Space style={{ marginTop: 15, display: 'flex', justifyContent: 'end' }}>
        <Button type="primary" onClick={() => exportData(dragElements)}>
          Export
        </Button>
        <CustomFileUpload htmlFor="json">{isLoading ? 'Loading...' : 'Import'}</CustomFileUpload>
        <input onChange={handleChange} id="json" type="file" accept=".json" />
      </Space>
    </DragDropContextContainer>
  );
};

export default Scheduler;
