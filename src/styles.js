import styled from 'styled-components'
import { Search } from "@styled-icons/material/Search";

import DockerAssetImg from './assets/DockerAsset.png'
import ReactAssetImg from './assets/ReactAsset.png'

import DockerAssetMobileImg from './assets/DockerAssetMobile.png'
import ReactAssetMobileImg from './assets/ReactAssetMobile.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    background: var(--background);
`

export const ContentWrapper = styled.div`
    width: 575px;
    height: 255px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    & > div {
        display: flex;
        flex-direction: column;

        align-items: center;

        & > h3 {
            margin-bottom: 10px;
        }
    }

    @media only screen and (orientation: portrait) {
        width: 232px;
        height: 167px;
    }
`

export const Title = styled.h3`
    font-size: 35px;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;

    color: var(--white);

    @media only screen and (orientation: portrait) {
        font-size: 20px;
    }
`

export const SubTitle = styled.p`
    font-size: 22px;
    
    color: var(--lightwhite);

    @media only screen and (orientation: portrait) {
        width: 85%;

        font-size: 13px;
        word-wrap: break-word;

        text-align: center;
    }
`

export const FindButton = styled.button`
    width: 300px;
    height: 60px;

    font-size: 25px;

    border: none;
    border-radius: 20px;

    box-shadow: 0 4px 4px 0 var(--shadow);

    color: var(--lightblack);
    background-color: var(--white);

    cursor: pointer;

    &:hover {
        background-color: var(--hover);
    }

    &:active {
        transition: all .2s;
        opacity: 0.8;
    }

    @media only screen and (orientation: portrait) {
        width: 160px;
        height: 32px;

        display: flex;

        align-items: center;
        justify-content: center;

        font-size: 15px;

        border-radius: 10px;
    }
`

export const FindIcon = styled(Search)`
    width: 34px;
    height: 34px;

    margin-right: 15px;

    position: relative;
    left: -15px;

    color: var(--lightblack);

    @media only screen and (orientation: portrait) {
        width: 20px;
        height: 20px;

        margin-right: 7px;

        left: 0;
    }
`

export const FooterWrapper = styled.div`
    width: 570.17px;
    height: 100px;

    display: flex;

    align-items: center;
    justify-content: space-between;

    position: absolute;
    bottom: 0;

    @media only screen and (orientation: portrait) {
        width: 306.58px;
        height: 50px;
    }
`

export const ReactAsset = styled.div`
    width: 241px;
    height: 78px;

    background: url(${ReactAssetImg});

    @media only screen and (orientation: portrait) {
        width: 139.04px;
        height: 45px;

        background: url(${ReactAssetMobileImg}) no-repeat;
    }
`

export const DockerAsset = styled.div`
    width: 295.17px;
    height: 100px;

    background: url(${DockerAssetImg});

    @media only screen and (orientation: portrait) {
        width: 147.58;
        height: 50px;

        display: none;

        background: url(${DockerAssetMobileImg}) no-repeat;
    }
    
`