import styled from'styled-components'
import {Link} from 'react-router-dom'

export const ListHeader = styled.div`
h3{
    margin-top: 3vh;
    display: inline;
}

h6{
    margin-top: 2vh;
}
strong{
    margin-left: 5vh;
}
span{
    align-items: center;
    color:#1BBB16;
    margin-left:5vh;
    font-size: 2vh;
}
`;

export const Cart = styled(Link)`
display:flex;
align-items: center;
text-decoration:none;
color:black;
transition:opacity 0.2s;
    &:hover{
        opacity:0.7
    }
    div{
        text-align: right;
        strong{
            font-size: 20px; 
            color:black;   
        }
    }
    span{
        color:#B41C8B;
        font-size: 15px;
    }
`;