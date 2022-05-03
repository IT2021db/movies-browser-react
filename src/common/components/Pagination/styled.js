import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 103px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}){
    margin-top: 32px;
    margin-bottom: 31px;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.lightBlue};
  padding: 8px 16px;
  margin: 0 12px;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.darkGray};
  transition: 0.5s filter;
  
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.color.gray};
    color: ${({ theme }) => theme.color.black};
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0 8px;
    padding: 8px 12px;
  }

`;

export const Previous = styled.img`
  margin: 0px 8px;
`;

export const PreviousMobile = styled(Previous)`
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Next = styled.img`
  margin: 0px 8px;
`;

export const NextMobile = styled(Next)`
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Text = styled.p`
  margin: 0 8px;
  font-family: Poppins;
  font-size: 14px;
  line-height: 1.4;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const PageInformation = styled.p`
  margin: 0 24px;
  font-family: Poppins;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.darkerGray};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0 8px;
    font-size: 10px;
  }
`;

export const Bold = styled.b`
  color: ${({ theme }) => theme.color.black};
`;