import styled from 'styled-components'
import { ReactComponent as Camera } from '../App/assets/videoIcon.svg'
import { ReactComponent as Magnifier } from '../App/assets/searchIcon.svg'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 94px;
    color: white;
    background-color: ${({ theme }) => theme.color.black};
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        height: 142px;
    }
`

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 1400px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        flex-direction: column;
        height: fit-content;
        justify-content: center;
        width: 100%;
    }
`
export const NavContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        padding-left: 16px;
    }
`

export const IconVideo = styled(Camera)`
    height: 40px;
    width: 40px;
    top: calc(50% - 40px / 2);
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileNormal}) {
        width: 17px;
        height: 17px;
    }
`

export const Title = styled.h1`
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1.5px;
    text-transform: capitalize;
    /* top: calc(50% - 40px / 2); */
    margin-left: 16.58px;
    margin-right: 80px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileNormal}) {
        width: 95px;
        height: 100%;

        font-size: 13px;
        margin-left: 10px;
        margin-right: auto;
        /* margin-top: 32px; */
        /* line-height: 130%; */
    }
`

export const Button = styled.button`
    width: 102px;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    margin: 0px 10px;
    align-items: center;
    padding: 8px 24px;
    border-radius: 24px;
    border: 1px solid ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;

    &:hover,
    &:focus {
        border: 1px solid ${({ theme }) => theme.color.white};
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileNormal}) {
        display: flex;
        /* flex-direction: row; */
        align-items: center;
        width: 70px;
        margin: 32px 10px;

        height: 34px;
        font-size: 12px;
        line-height: 18px;
        padding: 8px 12px;
        border-radius: 29px;
    }
`
export const Label = styled.label`
    display: flex;
    align-items: center;
    position: relative;
    left: -440px;
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        top: 30px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileNormal}) {
        /* position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center; */
    }
`

export const SearchIcon = styled(Magnifier)`
    position: absolute;
    right: -45px;
    width: 18.76px;
    height: 19.22px;
    margin-left: 26.76px;
    z-index: 1000;
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        left: calc(50% + 220px);
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileNormal}) {
        width: 16px;
        height: 16px;
    }
`

export const Input = styled.input`
    position: absolute;
    padding-left: 64px;
    width: 432px;
    height: 48px;
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.mystic};
    border-radius: 33px;
    outline: none;
    font-weight: 400;
    font-size: 16px;
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        left: calc(50% + 220px);
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileNormal}) {
        width: 288px;
        height: 44px;
    }
`
