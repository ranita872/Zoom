import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
    Card, CardContent, Typography, CircularProgress, 
    Snackbar, Alert, Box, Button, Fab 
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import AddIcon from '@mui/icons-material/Add';

export default function History() {
    const { getHistoryOfUser } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(Array.isArray(history) ? history : []);
            } catch (err) {
                setError("Failed to fetch meeting history!");
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <Box 
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #2e3b55, #1c2331)',
                color: 'white',
                padding: '20px',
            }}
        >
            {/* Left Section - Image */}
            <Box 
                sx={{ 
                    flex: 1, 
                    textAlign: 'center', 
                    
                     // Added padding-right for spacing
                }}
            >
                <img 
                    src="/image.png" 
                    alt="Video Call Illustration" 
                    style={{ 
                        maxWidth: "80%",
                        height: "auto",
                        filter: "drop-shadow(5px 5px 20px rgba(0, 173, 181, 0.5))",
                        transition: "transform 0.5s ease",
                        animation: "float 3s ease-in-out infinite" // Subtle drop shadow for aesthetics
                    }} 
                />
            </Box>

            {/* Right Section - Meeting History */}
            <Box 
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '600px',
                    paddingRight: '100px',
                }}
            >
                {/* Header */}
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Typography variant="h5" fontWeight="bold">
                        <HistoryIcon sx={{ verticalAlign: 'middle', marginRight: '5px' }} /> Meeting History
                    </Typography>
                    <Button 
                        onClick={() => navigate('/home')} 
                        startIcon={<HomeIcon />}
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            '&:hover': { color: '#ffcc00' }
                        }}
                    >
                        Home
                    </Button>
                </Box>

                {/* Loading State */}
                {loading && (
                    <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                        <CircularProgress color="secondary" />
                    </Box>
                )}

                {/* Error Snackbar */}
                <Snackbar open={Boolean(error)} autoHideDuration={3000} onClose={() => setError("")}>
                    <Alert severity="error">{error}</Alert>
                </Snackbar>

                {/* Meeting List */}
                {!loading && meetings.length > 0 ? (
                    <Box sx={{ width: '100%' }}>
                        {meetings.map((meeting, i) => (
                            <Card 
                                key={i} 
                                variant="outlined" 
                                sx={{ 
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: '10px',
                                    padding: '10px',
                                    marginBottom: '15px',
                                    color: 'white',
                                    boxShadow: '0px 4px 8px rgba(0,0,0,0.2)', // Subtle card shadow
                                    transition: '0.3s',
                                    '&:hover': { 
                                        transform: 'scale(1.05)', 
                                        background: 'rgba(255, 255, 255, 0.2)',
                                    }
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold" color="#ffcc00">
                                        Meeting Code: {meeting.meetingCode}
                                    </Typography>
                                    <Typography color="white">
                                        Date: {formatDate(meeting.date)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                ) : (
                    !loading && (
                        <Typography sx={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
                            No past meetings found.
                        </Typography>
                    )
                )}
            </Box>

            {/* Floating Action Button */}
            <Fab 
                color="primary" 
                aria-label="add" 
                onClick={() => navigate('/schedule')}
                sx={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#ffcc00' }}
            >
                <AddIcon />
            </Fab>
        </Box>
    );
}
