import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: fit-content;
  background-color: #1a1a1a;
  justify-content: space-between;
  align-items: center;
`;

export const BrandLogo = styled.img`
  width: 100px;
  margin-left: 5%;
`;

export const CelebrateEmoji = styled.img`
  width: 2.1rem;
  height: 2.1rem;
`;

export const NavItems = styled.ul`
  display: flex;
  color: white;
  padding: 0 16px;
  > li {
    color: white;
    list-style-type: none;
    padding: 0 18px;
  }
`;

export const Wrapper = styled.div`
  margin: auto;
  display: grid;
  max-width: calc(100% - 25rem);
  min-height: 70vh;
  grid-template-columns: repeat(${(props) => props.templateSize}, 1fr);
  grid-template-rows: repeat(${(props) => props.templateSize}, 1fr);
  background-color: #bfbfbf;
  column-gap: 6px;
  row-gap: 6px;
`;

export const PlayBox = styled.div`
  min-height: 2rem;
  width: 100%;
  background-color: hsl(
    ${(props) => props.color},
    ${(props) => props.saturate},
    50%
  );
  cursor: pointer;
`;

export const ScoreButton = styled.button`
  display: block;
  height: 3em;
  border-radius: 18px;
  width: calc(100% - 6rem);
  oultine: none;
  border: none;
  background-color: #0d83ff;
  color: white;
  margin: auto;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1.2px;
`;
export const ScoreBoardTitle = styled.h1`
  display: flex;
  justify-content: center;
  padding: 0 1.5rem;

  > img {
    padding: 0 1rem;
  }
`;

export const Timer = styled.p`
  font-size: 24px;
  padding: 0 4.5rem;
`;

export const NameContainer = styled.div`
 width: calc(100% - 1em);
 padding 16px;
 display: flex;
 flex-direction: column;

 >ul  > label{
     display: none;
     padding: 12px 0;
 }

 > ul > li{
    width: 100%;
    display: flex;
    justify-content: space-between;
    p:nth-child(2){
        padding-right: 2rem;
    }
 }
`;

export const NameInput = styled.input`
  border: 1px solid #e1e1e1;
  height: 2rem;
  width: calc(100% - 24rem);
  min-width: 16rem;
`;
