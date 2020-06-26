import styled from 'styled-components';

export const darkBlue = "#011934";
export const lightBlue = "#e5f1f8";
export const darkGrey = "#808080";
export const lightGrey = "#cccccc";
export const accent = "#198dff";
export const white = "#FFF";

export const tablet = "600px";

export const Links = styled.ul`
li {
    list-style: none;
    margin: 2vh 2vw;
}
a {
    font-weight: bold;
    text-decoration: none;
    color: ${lightBlue};
    &:hover {
        color: ${accent};
    }
}
@media (max-width: ${tablet}){
    text-align: center;
}
@media (min-width: ${tablet}){
    display: flex;
    align-items: center;
}
`

export const Button = styled.button`
padding: 2vh 2vw;
margin: 1vh 0;
width: 100%;
border: none;
color: ${darkBlue};
cursor: pointer;
background: #95c5e2;
box-shadow: 0px 0px 2px 2px ${darkBlue};
&:hover {
    background: ${darkBlue};
    color: ${accent};
}
line-height: 150%;
font-size: inherit;
@media(min-width: ${tablet}){
    line-height: inherit;
    font-size: 90%
}
`
export const PrimaryButton = styled(Button)`
    background: ${accent};
`
