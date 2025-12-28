let IS_PROD = true;

const server = IS_PROD ? 
    "https://facetalk-f47e.onrender.com":
    "http://localhost:8000"

export default server;