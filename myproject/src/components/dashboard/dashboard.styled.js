import styled from "styled-components";

export const StyledWrapper = styled.div`
margin: 0;
  padding: 0;
  `;

export const StyledContainer = styled.div`
margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(253, 101, 133, 1) 0%,
    rgba(255, 211, 165, 1) 90%
  );
`;

export const StyleMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const StyleHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyleCardTitle = styled.div`
  text-align: center;
  padding: 10px;
`;
export const StyleEmailPass = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyleCard = styled.div`
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  width: 200px;
  height: 250px;
  padding: 50px;
  background-color: #ffffff;
  padding: 10px 30px;
`;
export const StyleCardTitleH3 = styled.h3`
  font-size: 26px;
  font-weight: bold;
`;

export const StylePara = styled.p`
  font-size: 10px;
`;

export const StyleInput = styled.input`
  margin: 15px 0 0 0;
  background-color: #e2e2e2;
  border: none;
  outline: none;
  padding: 12px 20px;
  border-radius: 4px;
`;
export const StyleButton = styled.button`
  margin: 25px 0 0 0;
  background-color: #4796ff;
  color: #ffffff;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  border: none;
  padding: 8px 15px;
`;
export const StyleError = styled.div`
  font-size: 13px;
  color: red;
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content:space-around;
  margin:30px;
`;

export const StyledEdit = styled.button`
  display: flex;
  justify-content:space-around;
  margin:30px;
`;
export const StyledDelete = styled.button`
  display: flex;
  justify-content:space-around;
  margin:30px;
`;




export const StyledSave = styled.button`
  display: flex;
  justify-content:space-around;
  margin:30px;
`;

export const StyledLabel = styled.label`
  display: flex;
`;

