import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Topbar=styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`
const Topcontainer=styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`
const Left=styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const Span=styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;

  &:hover{
    text-decoration: underline;
  }
`
const Center=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`
const CenterSpan=styled.span`
  cursor: pointer;
  margin-right: 5%;
  &:last-child{
  margin-right: 0;
}
`


const Right = styled.div`
 display: flex;
 justify-content: flex-end;
 align-items: center;
 flex-direction: row;
 flex: 1;
 font-size: 11px;
 font-weight: bold;
`
const RightSpan =styled.span`
cursor: pointer;
`
const TopBar = () => {
 return (
   <Topbar>
     <Topcontainer>
       <Left>
         <Span>TOPICS</Span><Span>SEARCH</Span>
       </Left>
       <Center>
         <CenterSpan>GENERAL</CenterSpan><CenterSpan>BROWNBAG</CenterSpan><CenterSpan>RANDOM</CenterSpan><CenterSpan>MUSIC</CenterSpan><CenterSpan>ANNOUNCEMENTS</CenterSpan>
       </Center>
       <Right>
         <RightSpan>LOG IN</RightSpan>
       </Right>
     </Topcontainer>
   </Topbar>
 )
}

export default TopBar;