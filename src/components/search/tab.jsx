import React from "react";
import styled from "styled-components";

const Tab = () => {
  return (
    <TabLayout>
      <TabTopContent>전체강의</TabTopContent>
      <TabContent>개발, 프로그래밍</TabContent>
      <TabContent>보안, 네트워크</TabContent>
      <TabContent>데이터 사이언스</TabContent>
      <TabContent>게임 개발</TabContent>
    </TabLayout>
  );
};

export default Tab;

const TabLayout = styled.div`
  width: 210px;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

const TabTopContent = styled.div`
  width: 200px;
  height: 50px;
  border-bottom: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
  border-left: 1px solid #e4e4e4;
  border-Top: 1px solid #e4e4e4;
  padding: 15px;
  font-size: 16px;
  color: #595959;
  background: #fafafa;
  font-weight: 500;
`;

const TabContent = styled.div`
  width: 200px;
  height: 50px;
  border-bottom: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
  border-left: 1px solid #e4e4e4;
  padding: 15px;
  font-size: 16px;
  color: #595959;
  background: #fafafa;
  font-weight: 500;
`;
