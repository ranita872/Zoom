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

const theme = createTheme();

export default function Authentication() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState();
    const [message, setMessage] = React.useState();
    const [formState, setFormState] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const { handleRegister, handleLogin } = React.useContext(AuthContext);

//     const { handleRegister, handleLogin } = React.useContext(AuthContext);
//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const [name, setName] = React.useState('');
//   const [message, setMessage] = React.useState('');
//   const [open, setOpen] = React.useState(false);
//   const [formState, setFormState] = React.useState(0);
//   const { handleLogin, handleRegister } = React.useContext(AuthContext);

//   const handleAuth = async () => {
//     const res =
//       formState === 0
//         ? await handleLogin(username, password)
//         : await handleRegister(name, username, password);

//     if (res) {
//       setMessage(res);
//       setOpen(true);
//     }
//   };
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
            // setMessage("Something went wrong!");
            // setOpen(true);
            console.log("Auth error:", err); // <-- helpful for debugging

        // Show the backend error message if it exists
        if (err.response && err.response.data && err.response.data.message) {
            setMessage(err.response.data.message);
        } else {
            setMessage("Something went wrong!");
        }
        setOpen(true);
        }
    };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ display: 'flex', height: '100vh' }}>
        {/* LEFT IMAGE */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'block' },
            width: { sm: '58%', md: '65%' },
            backgroundImage: "url('/videopic.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* RIGHT FORM */}
        <Box
          component={Paper}
          elevation={6}
          square
          sx={{
            width: { xs: '100%', sm: '42%', md: '35%' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #2e3b55, #1c2331)',
            color: 'white',
          }}
        >
          <Box sx={{ mx: 4, width: '100%', maxWidth: 360 }}>
            <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>

            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Button
                variant={formState === 0 ? 'contained' : 'outlined'}
                onClick={() => setFormState(0)}
                sx={{ mr: 1 }}
              >
                Sign In
              </Button>
              <Button
                variant={formState === 1 ? 'contained' : 'outlined'}
                onClick={() => setFormState(1)}
              >
                Sign Up
              </Button>
            </Box>

            {formState === 1 && (
              <TextField
                fullWidth
                margin="normal"
                label="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputLabelProps={{ style: { color: '#ccc' } }}
                                     sx={{
                                         input: { color: 'white' },
                                        fieldset: { borderColor: '#ccc' }
                                     }}
              />
            )}

            <TextField
              fullWidth
              margin="normal"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputLabelProps={{ style: { color: '#ccc' } }}
                                     sx={{
                                         input: { color: 'white' },
                                        fieldset: { borderColor: '#ccc' }
                                     }}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={{ style: { color: '#ccc' } }}
                                     sx={{
                                         input: { color: 'white' },
                                        fieldset: { borderColor: '#ccc' }
                                     }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              onClick={handleAuth}
            >
              {formState === 0 ? 'Login' : 'Register'}
            </Button>
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={open}
        message={message}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </ThemeProvider>
  );
}

// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { AuthContext } from '../contexts/AuthContext';
// import { Snackbar } from '@mui/material';

// const defaultTheme = createTheme();

// export default function Authentication() {
//     const [username, setUsername] = React.useState("");
//     const [password, setPassword] = React.useState("");
//     const [name, setName] = React.useState("");
//     const [error, setError] = React.useState();
//     const [message, setMessage] = React.useState();
//     const [formState, setFormState] = React.useState(0);
//     const [open, setOpen] = React.useState(false);

//     const { handleRegister, handleLogin } = React.useContext(AuthContext);

//     const handleAuth = async () => {
//         try {
//             let result = formState === 0 ? await handleLogin(username, password) : await handleRegister(name, username, password);
            
//             if (result) { 
//                 setMessage(result);
//                 setOpen(true);
//                 setError("");
//             }
            
//             if (formState === 1) { 
//                 setUsername("");
//                 setPassword("");
//                 setName("");  
//                 setFormState(0);
//             }
//         } catch (err) {
//             // setMessage("Something went wrong!");
//             // setOpen(true);
//             console.log("Auth error:", err); // <-- helpful for debugging

//         // Show the backend error message if it exists
//         if (err.response && err.response.data && err.response.data.message) {
//             setMessage(err.response.data.message);
//         } else {
//             setMessage("Something went wrong!");
//         }
//         setOpen(true);
//         }
//     };
    

//     return (
//         <ThemeProvider theme={defaultTheme}>
            

//                 <Grid container sx={{ height: '100vh' }}>

//                 <CssBaseline />

//                 {/* Left Side - Random Image */}
//                 <Grid
//                     // item
//                     // xs= {0} //{false}
//                     // sm={4}
//                     // md={7}
//                     // sx={{
//                     //     display: { xs: 'none', sm: 'block' },
                    
//                     //     //backgroundColor: 'red',
//                     //     backgroundImage: `url('https://picsum.photos/800/600')`,
//                     //     backgroundRepeat: 'no-repeat',
//                     //     backgroundSize: 'cover',
//                     //     backgroundPosition: 'center',
//                     //     minHeight: '100vh',
//                     // }}
                    
//   display={{ xs: 'none', sm: 'block' }}
//   sm={4}
//   md={7}
//   sx={{
//     backgroundColor: 'red',
//     backgroundImage: "url('https://picsum.photos/800/600')",
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   }}
// />

                

//                 {/* Right Side - Auth Form with New Gradient Background */}
//                 <Grid 
                    
//   xs={12}
//   sm={8}
//   md={5}
//   component={Paper}
//   sx={{
//     background: 'linear-gradient(135deg, #2e3b55, #1c2331)',
//     color: 'white',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }}
//                     // item xs={12} sm={8} md={5} 
//                     // component={Paper} elevation={6} square
//                     // sx={{ 
//                     //     background: 'linear-gradient(135deg, #2e3b55, #1c2331)', 
//                     //     color: 'white' 
//                     // }}
//                 >
//                     <Box
//                         sx={{
//                             my: 8,
//                             mx: 4,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                             <LockOutlinedIcon />
//                         </Avatar>

//                         <div>
//                             <Button 
//                                 variant={formState === 0 ? "contained" : "outlined"} 
//                                 onClick={() => setFormState(0)}
//                                 sx={{ mx: 1 }}
//                             >
//                                 Sign In
//                             </Button>
//                             <Button 
//                                 variant={formState === 1 ? "contained" : "outlined"} 
//                                 onClick={() => setFormState(1)}
//                                 sx={{ mx: 1 }}
//                             >
//                                 Sign Up
//                             </Button>
//                         </div>

//                         <Box component="form" noValidate sx={{ mt: 2, width: '100%' }}>
//                             {formState === 1 && (
//                                 <TextField
//                                     margin="normal"
//                                     required
//                                     fullWidth
//                                     id="name"
//                                     label="Full Name"
//                                     name="name"
//                                     value={name}
//                                     autoFocus
//                                     onChange={(e) => setName(e.target.value)}
//                                     InputLabelProps={{ style: { color: '#ccc' } }}
//                                     sx={{
//                                         input: { color: 'white' },
//                                         fieldset: { borderColor: '#ccc' }
//                                     }}
//                                 />
//                             )}

//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 id="username"
//                                 label="Username"
//                                 name="username"
//                                 value={username}
//                                 autoFocus
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 InputLabelProps={{ style: { color: '#ccc' } }}
//                                 sx={{
//                                     input: { color: 'white' },
//                                     fieldset: { borderColor: '#ccc' }
//                                 }}
//                             />
//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 name="password"
//                                 label="Password"
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 id="password"
//                                 InputLabelProps={{ style: { color: '#ccc' } }}
//                                 sx={{
//                                     input: { color: 'white' },
//                                     fieldset: { borderColor: '#ccc' }
//                                 }}
//                             />

//                             <p style={{ color: "red" }}>{error}</p>

//                             <Button
//                                 type="button"
//                                 fullWidth
//                                 variant="contained"
//                                 sx={{ mt: 3, mb: 2 }}
//                                 onClick={handleAuth}
//                             >
//                                 {formState === 0 ? "Login" : "Register"}
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Grid>
//             </Grid>

//             {/* Snackbar (Alert Message) */}
//             <Snackbar
//                 open={open && Boolean(message)}
//                 autoHideDuration={4000}
//                 message={message || "No message"}
//                 onClose={() => {
//                     setOpen(false);
//                     setMessage("");
//                 }}
//                 anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//             />
//         </ThemeProvider>
//     );
// }