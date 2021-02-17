import styled from "styled-components"
import {motion} from "framer-motion"

export const Banner = styled.div`
    background: ${props => props.theme.background};
    height:100vh;
    width:100%;
    position:relative;
    margin-bottom: 296px;
`
export const Video = styled.div`
    height: 100%;
    width: 100%;
    
`
export const Canvas = styled.canvas`
    position:absolute;
    top:0;
    left:0;
    height: 100%;
    display:block;
    
`

export const BannerTitle = styled(motion.h1)`
    position: absolute;
    bottom:40%;
    left:20%;
    color: ${props => props.theme.text};
    pointer-events:none;
    @media (max-width:700px){
        bottom:30%;
        left: 10%;
    }
    
`
export const Headline = styled(motion.span)`
    display:block;
    font-size: 5rem;
    font-weight: 900;
    line-height: .76;
    text-transform: uppercase;
    @media (max-width:700px){
        font-size: 3rem;
    }
`
// HOME CONTENT
export const HomeContent = styled(motion.div)`
    margin-bottom: 200px;

`
export const ContentHeadline = styled(motion.div)`
    
    height:70px;
    color: ${props => props.theme.text};
    
    font-weight:900;
    font-size:3rem;
    display:flex;
    .arrow{
            width:120px;
            height:80px;
            position:relative;
            overflow:hidden;
            @media (max-width:500px){
                    width:80px;
                    
                 }
            svg{
                width:70px;
                path{
                    fill: ${props => props.theme.text};
                }
                @media (max-width:500px){
                    width:50px;
                    margin-left:20px;
                 }

            }
        }
    @media (max-width:600px){
        font-size:2.3rem;
        margin-left:-50px;
    }
    @media (max-width:477px){
        font-size:1.8rem;
        margin-left:-50px;
    }
    @media (max-width:479px){
        font-size:1.8rem;
        margin-left:-98px;
    }
    
`

export const Content = styled(motion.h1)`
    width: 65%;
    font-size: 2rem;
    font-weight:400;
    margin-left:124px;
    color: ${props => props.theme.text};
    @media (max-width:700px){
        font-size: 1.5rem;
        
    }
    @media (max-width:600px){
        margin-left:30px;
        width:70%;
    }
    @media (max-width:477px){
        font-size:1.5rem;
        
    }
    @media (max-width:479px){
        width:100%;
        font-size:1.2rem;
        margin-left:-10px;
    }
    @media (max-width:300px){
        font-size:0.9rem;
        margin-left:-10px;
    }
`
export const HomeFeaturedSection = styled(motion.div)`
    width:100%;
    margin-bottom:200px;
    position: relative;
    @media (max-width:600px){
       height: 200px;
    }
    @media (max-width:450px){
       height: 150px;
    }
    a{
        margin-bottom:280px;
        position: relative;
        display:block;
    }
    @media (max-width:625px){
        margin-bottom:100px;
            }
            @media (max-width:600px){
        margin-bottom:200px;
            }
`
export const ContainerFluid = styled.div`
    flex-grow:1;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    width: auto;
    height: 100%;
    @media (min-width: 1024px){
        max-width:960px; 
    }
    @media (min-width: 1216px){
        max-width:1152px;
         
    }
    @media (min-width: 1408px){
        max-width:1244px;
         
    }
    @media (max-width:800px){
        padding: 0 !important;
    }
    
`
export const FeaturedContent = styled(motion.div)`
    height:480px;
    width:100%;
    padding:50px 124px;
    box-sizing:border-box;
    color: ${props => props.theme.text};
    @media (max-width:600px){
       height: 200px;
    }
    @media (max-width:450px){
       height: 150px;
    }
    h3{
        font-size:1.4rem;
    }
    .meta{
        display:flex;
        h4{
            &:last-child{
                margin-left:1rem;
            }
        }
    }
    
    .featured-title{
        position: absolute;
        bottom: -128px;
        font-size:7rem;
        font-weight:900;
        line-height:90px;
        margin:0;
        @media screen and (max-width: 767px){
            font-size: 3.75rem;
            line-height: 0.716667;
            left:20px;
        }
        @media (max-width:530px){
            position: absolute;
            font-size:2.75rem;
            left: 10px;
        }
        .arrow{
            width:120px;
            height:80px;
            display:block;
            position:relative;
            overflow:hidden;
            svg{
                position:absolute;
                top:16px;
                left:-48px;
                width:108px;
                path{
                    fill: ${props => props.theme.text};
                }
            }
        }
    }
`
export const CusFlex = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    @media (max-width:600px){
        position: absolute;
        top:20px;
        left:20px;
    }
    @media (max-width:450px){
        position: absolute;
        top:5px;
        left:5px;
        .h3{
            font-size:0.4rem;
        }
    }
`
export const FeaturedVideo = styled.div`
    position:absolute;
    z-index: -1;
    width:100%;
    height:480px;
    top:0;
    display:block;
    overflow:hidden;
    object-fit:cover;
    @media (max-width:600px){
       height: 200px;
    }
    @media (max-width:450px){
       height: 150px;
    }
    video{
        @media (max-width:600px){
        height: 200px;
        }
    @media (max-width:450px){
       height: 150px;
        }
    }
`
export const FeaturedProject = styled.div`
    margin-top:200px;
    button{
        background: ${props => props.theme.red};
        color:#fff;
        position:relative;
        padding:20px;
        display:block;
        text-align:left;
        font-size:1.4rem;
        line-height:1;
        font-weight:600;
        border:none;
        span{
            margin-right:108px;
            display:block;
            @media (max-width:388px){
                font-size:1rem;
            }
        }
        &:before,&:after{
            content:"";
            position: absolute;
            top:50%;
            right:20px;
            width:35px;
            height:7px;
            display:block;
            background:#fff;
            transform:translate(-50%);
            @media (max-width:388px){
                width:30px;
                height:5px;
            }

        }
        &:before{
            margin-top:-8px;
        }
        &:after{
            margin-top:8px;
        }
    }
`
//About
export const HomeAboutSection = styled(motion.div)`
`
export const CustomFlex = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    align-items: flex-start;
    @media (max-width:1000px){
        flex-wrap:wrap;
    }
`
export const About = styled.div`
    width:100%;
    @media (max-width:603px){
        margin-top:90px;
    }
    h2{
        width:60%;
        font-size: 2.3rem;
        font-weight:124px;
        color: ${props => props.theme.text};

    }
    p{
        max-width:440px;
        font-size:1rem;
        line-height:1.5rem;
        margin-left:100px;
        color:${props => props.theme.text};
    }
    @media (max-width:1000px){
        h2{
            width:100%;
            
        }
    }
    @media (max-width:722px){
        h2{
            font-size: 1.6rem;  
        }
    }
    @media (max-width:625px){
        h2{
            font-size: 1.3rem;  
        }
        p{
            margin-left:20px;
        }
    }
`

export const Service = styled.div`
    h3{
        color: ${props => props.theme.text};
    }
    @media (max-width:603px){
        
    }
`

export const AccordionHeader = styled(motion.div)`
    width:100%;
    color:${props => props.theme.red};
    height:32px;
    display:flex;
    align-items:center;
    font-weight:600;
    font-size: 1.15rem;
    margin:8px 0;
`
export const AccordionIcon = styled.div`
    display:flex;
    align-items:center;
    height:100%;
    margin-right:8px;
    span{
        width:16px;
        height: 4px;
        background:${props => props.theme.red};
        transition: 0.1 ease-in-out;
    }
`
export const AccordionContent = styled(motion.div)`
    overflow:hidden;
    padding-left:40px;
    span{
        width:100%;
        margin:8px 0;
        font-size: .875rem;
        color: ${props => props.theme.red};
        display:block;
        font-weight:300;
    }
`