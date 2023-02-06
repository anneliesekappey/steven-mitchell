import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: #155263;
  display: flex;
  align-items: center;
  height: 100px;
  margin: 5px;
  box-shadow: 3px 3px 3px orangered;
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

export const TinaDiv = styled.div`
  display: flex;
  float: left;
  width: 24%;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  color: gray;
  justify-content: center;
  border-radius: 5px;
  background-color: #ff9a3c;
  box-shadow: 3px 3px 2px #155263;
  padding: 10px;
  margin: 10px;
`
export const TinaTextPopUp = styled.p`
  padding: 10px;
  border-radius: 6px;
  margin: 5px;
  width: 380px;
  height: 140px;
  color: white;
  font-family: 'Montserrat';
  line-height: 1.7;
  position: relative;
  left: 0;
  outline: none;
  border: 1px solid black;
  background-color: #155263;
  font-size: 18px;
`
export const GraceDiv = styled.div`
  display: flex;
  float: right;
  width: 24%;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  color: gray;
  justify-content: center;
  border-radius: 5px;
  background-color: #ff9a3c;
  box-shadow: 3px 3px 2px #155263;
  padding: 10px;
  margin: 10px;
`
export const GraceTextPopUp = styled.p`
  padding: 10px;
  border-radius: 6px;
  margin: 5px;
  width: 380px;
  height: 140px;
  color: white;
  font-family: 'Montserrat';
  line-height: 1.7;
  position: absolute;
  right: 0;
  outline: none;
  border: 1px solid black;
  background-color: #155263;
  font-size: 18px;
`

export const PennyDiv = styled.div`
  display: flex;
  float: left;
  width: 24%;
  align-items: center;
  flex-directtion: column;
  text-decoration: none;
  color: gray;
  justify-content: center;
  border-radius: 5px;
  background-color: #ff9a3c;
  box-shadow: 3px 3px 2px #155263;
  padding: 10px 10px 10px 10px;
  margin: 10px;
`
export const PennyTextPopUp = styled.p`
  padding: 10px;
  border-radius: 6px;
  margin: 5px;
  width: 380px;
  height: 140px;
  color: white;
  font-family: 'Montserrat';
  line-height: 1.7;
  position: relative;
  left: 0;
  outline: none;
  border: 1px solid black;
  background-color: #155263;
  font-size: 18px;
`

export const TooMuchDiv = styled.div`
  display: flex;
  float: right;
  width: 24%;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  color: gray;
  justify-content: center;
  border-radius: 5px;
  background-color: #ff9a3c;
  box-shadow: 3px 3px 2px #155263;
  padding: 10px;
  margin: 10px;
`
export const TooMuchTextPopUp = styled.p`
  padding: 10px;
  border-radius: 6px;
  margin: 5px;
  width: 380px;
  height: 180px;
  color: white;
  font-family: 'Montserrat';
  line-height: 1.7;
  position: absolute;
  right: 0;
  outline: none;
  border: 1px solid black;
  background-color: #155263;
  font-size: 18px;
`

export const SignDiv = styled.div`
  padding: 15px;
  margin: 100px;
`
