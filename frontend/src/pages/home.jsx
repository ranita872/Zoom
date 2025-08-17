import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {
    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState('');
    const { addToUserHistory } = useContext(AuthContext);

    let handleJoinVideoCall = async () => {
        try {
            console.log("Joining meeting with code:", meetingCode);
            await addToUserHistory(meetingCode);  // Ensure this is an async function
            navigate(`/${meetingCode}`);
        } catch (error) {
            console.error("Error joining meeting:", error);
        }
    };
    

    return (
        <div className="home-container">
            {/* Navbar */}
            <div className="navBar">
                <h2 className="logo">🔵 My Video Call</h2>
                <div className="nav-actions">
                    
                    <p className="history-text" onClick={() => navigate('/history')}>
                    <IconButton className="history-btn" style={{ color: "white" }}>
                        <RestoreIcon />
                    </IconButton>History</p>
                    <Button className="logout-btn" onClick={() => {
                        localStorage.removeItem('token');
                        navigate('/auth');
                    }}>
                        Logout
                    </Button>
                </div>
            </div>

            {/* Main Section */}
            <div className="meetContainer">
                {/* Left Panel */}
                <div className="leftPanel">
                    <h1 className="heading">
                        Seamless <span className="highlight">Video Calls</span> <br />
                        For <span className="highlight">Better Connections</span>
                    </h1>
                    <p className="subtext">Join high-quality, secure video calls anytime, anywhere.</p>

                    <div className="meeting-input">
                        <TextField 
                            onChange={e => setMeetingCode(e.target.value)} 
                            id="outlined-basic" 
                            label="Enter Meeting Code" 
                            variant="outlined" 
                            className="meeting-textfield"
                        />
                        <Button onClick={handleJoinVideoCall} variant="contained" className="join-btn">
                            Join Meeting
                        </Button>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="rightPanel">
                    <img src="/logo3.png" alt="Video Call" className="meeting-image animated" />
                </div>
            </div>
        </div>
    );
}

export default withAuth(HomeComponent);