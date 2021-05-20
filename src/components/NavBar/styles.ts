import styled from 'styled-components';
import { Link} from 'react-router-dom';

export const LinkCat = styled(Link)`
    color:black;
    align-items: center;
    text-decoration:none;
    transition:opacity 0.2s;
    &:link{
        text-decoration: none
    }
    &:hover{
        opacity:0.7;
    } 

`;

export const CategoryList = styled.div`
   
    margin-top: 10px;
    background:#fff;
    list-style: none;      
`;
export const Cat = styled.div`
    display: flex;
    align-items: center;
    text-decoration:none;
    transition:opacity 0.2s;
    Color:Black;
    font-size: 1.4rem;
    &:hover{
        opacity:0.5
    }
 
`;
