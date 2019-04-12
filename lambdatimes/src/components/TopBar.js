import React from 'react';
import styled, {css} from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopbarStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
@media (min-width: 1280px) {
  .top-bar .container {
    width: 1280px;
`

const Left = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;

`

const Center = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;

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

const Span1 = styled.span `
  cursor: pointer;
  margin-right: 5%;
`

const Span2 = styled.span`
margin-right: 0;

`
const Span3 = styled.span`
cursor: pointer;

`



// .top-bar .container .container-center span:last-child {
//   margin-right: 0;
// }
// .top-bar .container .container-center span:hover {
//   text-decoration: underline;
// }


// .top-bar .container .container-right span {
//   cursor: pointer;
// }


const TopBar = () => {
  return (
    <TopbarStyle>
      <Container>
        <Left>
          <Span1>TOPICS</Span1><Span1>SEARCH</Span1>
        </Left>
        <Center>
          <Span2>GENERAL</Span2><Span2>BROWNBAG</Span2><Span2>RANDOM</Span2><Span2>MUSIC</Span2><Span2>ANNOUNCEMENTS</Span2>
        </Center>
        <Right>
          <Span3>LOG IN</Span3>
        </Right>
      </Container>
    </TopbarStyle>
  )
}

export default TopBar;