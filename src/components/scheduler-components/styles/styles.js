import styled from 'styled-components';
import { Col } from 'antd';

export const DragDropContextContainer = styled.div`
  padding: 20px;
  background: #f4f5f6;
  border-radius: 8px;
`;

export const DragColumn = styled(Col)`
  border: 1px solid #ebebeb;
  background: #ebebeb;
  border-radius: 8px;
  overflow: auto;
  height: calc(100vh - 275px);
`;

export const DragItem = styled.div`
  padding: 10px;
  border-radius: 8px;
  background: #fff;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`;

export const DragItemFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CustomFileUpload = styled.label`
  display: inline-block;
  cursor: pointer;
  line-height: 1.5;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  border: 1px solid rgb(237, 242, 249);
  box-shadow: rgb(0 0 0 / 2%) 0px 2px 0px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  user-select: none;
  height: 40px;
  padding: 8.5px 1.25rem;
  font-size: 14px;
  border-radius: 0.625rem;
  color: rgb(69, 85, 96);
  background: rgb(255, 255, 255);

  &:hover {
    border: 1px solid rgba(237, 242, 249, 0.4);
    background: rgba(255, 255, 255, 0.8);
  }
`;
