import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom'

const BlackButton = ({ url = null, buttonText }) => {
    const history = useHistory();
    
    const Button = styled.div`
        position: relative;
        margin: 0 auto;
        border: 1px solid #2f3542;
        text-transform: uppercase;
        display: inline;
        padding: 10pt 24pt;
        background: #121212;
        letter-spacing: 2px;
        cursor: pointer;
        transition: .3s;
        color: #fff;
    
        &:hover {
            padding-right: 50pt;
            border: 1px solid #b0b0b0;

        &:before {
            content: '';
            position: absolute;
            right: 15pt;
            top: 50%;
            width: 16pt;
            height: 1px;
            background: #fff;
        }
        }
    
        &:before {
        transition: .3s;
        content: '';
        position: absolute;
        right: 15pt;
        top: 50%;
        width: 0;
        height: 1px;
        background: #fff;
        }
    `;

    const handleClick = () => {
        if(url) history.push(url)
    }

    return <Button onClick={handleClick}>{buttonText}</Button>
}

export default BlackButton