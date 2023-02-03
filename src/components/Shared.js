import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: orange;
  display: flex;
  align-items: center;
  height: 100px;
  margin: 5px;
  box-shadow: 0px 3px 3px orangered;
  font-family: 'Montserrat';
  font-size: 20px;
  justify-content: center;
  list-style-type: none;
`

export const Logo = styled.li`
  width: 32%;
  align-items: center;
  padding: 10px;
  margin: 4px;
`
export const HomeIcon = styled.li`
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 5px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    border: 2px solid orangered;
  }
`

export const DateCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  color: gray;
  justify-content: center;
  border-radius: 5px;
  background-color: gray;
  box-shadow: 2px 2px 2px #f98125;
  padding: 10px;
  margin: 10px;
`

export const WomenList = styled.div`
  display: flex;
  background-color: #fb9b50;
  font-family: 'Montserrat';
  color: gray;
  border-radius: 12px 12px 2px 2px;
  font-size: 14px;
  justify-content: center;
  margin: 10px 8px 0 8px;
  padding: 9px 0;
`

export const List = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  align-items: center;
`
