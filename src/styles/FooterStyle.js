import styled,{css} from "styled-components"
import {motion} from "framer-motion"

export const FooterNav = styled(motion.div)`
    height:200px;
    margin-top:170px;
    @media (max-width:750px){
        margin-top:100px;
    }
`
export const FlexCustom = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width:500px){
        flex-wrap:wrap;
    }
`  
export const FooterContent = styled.div`
    color: ${props => props.theme.red};
    font-size: 1.8rem;
    font-weight:600;
    line-height:.5rem;
    flex:1;
    
    ${props => props.wider && css`
        flex:2;
    `}
    @media (max-width:600px){
        font-size: 1.3rem;
    }
    @media (max-width:498px){
        font-size: 1.1rem;
    }
    
`

export const FooterSocial = styled.div`
    display:flex;
    position:relative;
    a{
        position: relative;
        display:block;
        width:24px;
        height:24px;
        padding:8px;
        svg{
            width:100%;
            height:100%;
        }
    }  
`