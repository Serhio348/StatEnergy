import { Link } from "react-router-dom";
import styled from "styled-components";

const BASE_SIDEBAR_WIDTH = 48;

export const Sidebar = styled.nav`
    grid-area: sidebar;
    width: 100px;
    margin-top:40px;
`;
export const SidebarLabel = styled.label`
    color:white;
    text-transform:capitalize;
    line-height:20px;
    font-size:16px;
    white-space:nowrap;
    text-overflow:clip;
    overflow:hidden;
    display:none;
`;

export const SidebarContent = styled.ul<{ longestLabelWidth: number }>`
    list-style:none;
    margin:0;
    padding: 0;
    padding-left:8px;
    display:flex;
    width:${BASE_SIDEBAR_WIDTH}px;
    flex-direction: column;
    align-items:center;
    background-color:#1C2B36;
    height:100%;
    padding-top:32px;
    overflow:hidden;
    transition:width 0.4s ease;

    &:hover{
        width:${({ longestLabelWidth }) => {
        const computeWidth = BASE_SIDEBAR_WIDTH + longestLabelWidth + 64;
        return computeWidth
    }}px;
       ${SidebarLabel}{
        display:block;

       }
    }
`;

export const SidebarItem = styled.li`
    width:100%;
    cursor:pointer;
    height:60px;
    display:flex;
    align-items:center;
    transition:background-color 0.2s ease;
    &:hover {
        background-color:rgba(255,255,255,0.05)
    }
`;

export const SidebarLink = styled(Link)`
    display:flex;
    align-items:center;
    text-decoration:none;
`;

export const IconContainer = styled.div`
    width:48px;
    min-width:48px;
    height:48px;
    display:flex;
    align-items:center;
`;

