import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';

const defaultTheme = createTheme();

export default function Authentication() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState();
    const [message, setMessage] = React.useState();
    const [formState, setFormState] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    const handleAuth = async () => {
        try {
            let result = formState === 0 ? await handleLogin(username, password) : await handleRegister(name, username, password);
            
            if (result) { 
                setMessage(result);
                setOpen(true);
                setError("");
            }
            
            if (formState === 1) { 
                setUsername("");
                setPassword("");
                setName("");  
                setFormState(0);
            }
        } catch (err) {
            setMessage("Something went wrong!");
            setOpen(true);
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />

                {/* Left Side - Random Image */}
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        backgroundImage: `url('https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1400&q=80')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                {/* Right Side - Auth Form with New Gradient Background */}
                <Grid 
                    item xs={12} sm={8} md={5} 
                    component={Paper} elevation={6} square
                    sx={{ 
                        background: 'linear-gradient(135deg, #2e3b55, #1c2331)', 
                        color: 'white' 
                    }}
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>

                        <div>
                            <Button 
                                variant={formState === 0 ? "contained" : "outlined"} 
                                onClick={() => setFormState(0)}
                                sx={{ mx: 1 }}
                            >
                                Sign In
                            </Button>
                            <Button 
                                variant={formState === 1 ? "contained" : "outlined"} 
                                onClick={() => setFormState(1)}
                                sx={{ mx: 1 }}
                            >
                                Sign Up
                            </Button>
                        </div>

                        <Box component="form" noValidate sx={{ mt: 2, width: '100%' }}>
                            {formState === 1 && (
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Full Name"
                                    name="name"
                                    value={name}
                                    autoFocus
                                    onChange={(e) => setName(e.target.value)}
                                    InputLabelProps={{ style: { color: '#ccc' } }}
                                    sx={{
                                        input: { color: 'white' },
                                        fieldset: { borderColor: '#ccc' }
                                    }}
                                />
                            )}

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                value={username}
                                autoFocus
                                onChange={(e) => setUsername(e.target.value)}
                                InputLabelProps={{ style: { color: '#ccc' } }}
                                sx={{
                                    input: { color: 'white' },
                                    fieldset: { borderColor: '#ccc' }
                                }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                InputLabelProps={{ style: { color: '#ccc' } }}
                                sx={{
                                    input: { color: 'white' },
                                    fieldset: { borderColor: '#ccc' }
                                }}
                            />

                            <p style={{ color: "red" }}>{error}</p>

                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleAuth}
                            >
                                {formState === 0 ? "Login" : "Register"}
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            {/* Snackbar (Alert Message) */}
            <Snackbar
                open={open && Boolean(message)}
                autoHideDuration={4000}
                message={message || "No message"}
                onClose={() => {
                    setOpen(false);
                    setMessage("");
                }}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            />
        </ThemeProvider>
    );
}