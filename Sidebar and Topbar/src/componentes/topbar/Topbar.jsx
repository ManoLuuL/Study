import React, { useState } from 'react'
import './topbar.css';
import * as Icons from '@mui/icons-material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData';
import SubMenu from '../Submenu';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';

const NavIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #FFFFFF;
`;

const NavIcon2 = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    margin-top: 25px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: red;
    
`;

const SidebarNav = styled.nav`
  background: darkblue;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  flex: 1;
`;

const SidebarWrap = styled.div`
  width: 100%;
  
`;

export default function Topbar() {

    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="Nav">

                        <NavIcon to='#'>
                            <Icons.Menu onCollapse={(inactive) => {
                                console.log(inactive)
                            }} onClick={showSidebar} 
                            />
                        </NavIcon>
                        <div className='titulo'>
                            <h1>Teste</h1>
                        </div>

                    
                    <SidebarNav sidebar={sidebar} >
                        <SidebarWrap>
                            <NavIcon2 to='#'>
                                <Icons.Close onClick={showSidebar} />
                            </NavIcon2>
                            <div className="search">
                                <button className='searchbutton' >
                                    <SearchIcon className='lupa' />
                                </button>

                                <input type="text" placeholder='Search' />
                            </div>
                            {SidebarData.map((item, index) => {
                                return <SubMenu item={item} key={index} />;
                            })}

                        </SidebarWrap>
                    </SidebarNav>
                    </div>
                </div>
                <div className="topright">
                    <div className="topbaricons">
                        <Icons.Notifications />
                        <span className="topiconbag">2</span>
                    </div>
                    <div className="topbaricons">
                        <Icons.Language />
                        <span className="topiconbag">2</span>
                    </div>
                    <div className="topbaricons">
                        <Icons.Settings />
                    </div>
                    <img src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" alt="" className="topavatar" />
                </div>
            </div>
        </div>
    )
}


