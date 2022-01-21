
import React from 'react';
import './user.css';
import * as Icons from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Topbar from '../../componentes/topbar/Topbar';

export default function User() {
    return (
        <>
        <Topbar />
        
        <div className='user'>
        
            <div className="usertitlecontainer">
                <h1 className="usertitle">Edit User</h1>
                <Link to="/NewUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            
            <div className="usercontainer">
                <div className="usershow">
                    <div className="usershowtop">
                        <img src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" alt="" className="usershowimg" />
                        <div className="usershowtoptitle">
                            <span className="usershowname">tester</span>
                            <span className="usershowusertitle">testes</span>
                        </div>
                    </div>
                    <div className="usershowbutton">
                        <span className="usershowtitle">Account details</span>
                        <div className="usershowinf">
                            <Icons.PermIdentity className='usershowicon' />
                            <span className="usershowinftitle">1234</span>
                        </div>
                        <div className="usershowinf">
                            <Icons.CalendarToday className='usershowicon' />
                            <span className="usershowinftitle">01/01/0101</span>
                        </div>
                        <div className="usershowinf">
                            <Icons.Call className='usershowicon' />
                            <span className="usershowinftitle">+55 555 555</span>
                        </div>
                        <div className="usershowinf">
                            <Icons.Mail className='usershowicon' />
                            <span className="usershowinftitle">testeee3</span>
                        </div>
                    </div>
                </div>
                <div className="userupdate">
                    <span className="userupdatetitle">Edit</span>
                    <form className="userupdateform">
                        <div className="userupdateleft">
                            <div className="userupdateitem">
                                <label>Username</label>
                                <input type="text" placeholder='teste' className='userupdateinput' />
                            </div>
                            <div className="userupdateitem">
                                <label>Full Name</label>
                                <input type="text" placeholder='teste' className='userupdateinput' />
                            </div>
                            <div className="userupdateitem">
                                <label>Email</label>
                                <input type="text" placeholder='teste' className='userupdateinput' />
                            </div>
                            <div className="userupdateitem">
                                <label>Fone</label>
                                <input type="text" placeholder='teste' className='userupdateinput' />
                            </div>
                        </div>
                        <div className="userupdateright">
                            <div className="userupdateupload">
                                <img className='userupdateimg' src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" alt="" />
                                <label htmlFor="file"><Icons.FileUpload className='userupdateicon'/></label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userupdtebutton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

