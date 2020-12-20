import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 5rem;
  background-color: #1a1a1a;
  justify-content: space-between;
  align-items: center;
`;

export const BrandLogo = styled.img`
  width: 15vw;
  max-width: 5rem;
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
    list-style-type: none;
    padding: 0 2vw;
    @media (max-width: 450px) {
      display: none;
    }
    > a {
      color: white;
      text-decoration: none;
    }
  }

  >button{
    background-color: #1a1a1a;
    border: none;
    outline: none;
    @media (min-width: 450px) {
      display: none;
    }
    >img{
      width: 2rem;
    }
  }
`;

export const MenuLinkList = styled.ul`
padding-left: 2vw;
> li {
  list-style-type: none;
  padding: 4vw 2vw;
  > a {
    color: white;
    text-decoration: none;
  }
`

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

  @media (max-width: 795px) {
    max-width: calc(100% - 5rem);
  }

  @media (max-width: 390px) {
    max-width: calc(100% - 1rem);
  }
`;

export const ScoreboardWrapper = styled(Wrapper)`
  display: block;
  position: relative;
  min-height: 0;
  padding-bottom: 1.5rem;
`;

export const PlayBox = styled.div`
  min-height: 0.8rem;
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
  bottom: 1rem;
  height: 3em;
  margin: auto;
  border-radius: 18px;
  width: calc(100% - 6rem);
  min-width: 8rem;
  oultine: none;
  border: none;
  background-color: #0d83ff;
  color: white;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1.2px;
`;
export const ScoreBoardTitle = styled.h1`
  display: flex;
  justify-content: center;
  padding: 1rem;
    margin-bottom: 0;
  > img {
    padding: 0 1rem;
    @media (max-width: 390px) {
      padding:0 1rem;
      width:2rem;
    }
  }

  @media (max-width: 390px) {
    font-size: 14px
  }
`;

export const GameDetails = styled.div`
display: flex;
justify-content: space-between;
`

export const Timer = styled.p`
  font-size: 24px;
  padding: 0 4.5rem;
  @media (max-width: 390px) {
    margin: 1rem;
    padding: .5rem
  }
`;

export const Level = styled(Timer)`
`

export const NameContainer = styled.div`
 width: calc(100% - 1em);
 padding: 1rem;
 padding-top: 0;
 display: flex;
 flex-direction: column;
 >ul {
padding-left: 1rem;
  > label {
    display: none;
    padding: 12px 0;
  }
  > li{
  width: 100%;
  display: flex;
  justify-content: space-between;
  p:nth-child(2){
      padding-right: 2rem;
    }
  }  
}
`;

export const NameInput = styled.input`
  border: 1px solid #e1e1e1;
  height: 2rem;
  width: 60%;
  min-width: 12rem;

  @media (max-width: 390px) {
    min-width: 10rem;
  }
`;
