import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(5, 7, 15, 0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0,255,204,0.2)",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontFamily: "monospace",
            color: "#00ffcc",
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(0,255,200,0.5)",
          }}
        >
          &lt;Dhanush.dev /&gt;
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mr: 2 }}>
          <Button
            sx={{
              color: "#fff",
              fontFamily: "monospace",
              "&:hover": { color: "#00ffcc" },
            }}
          >
            Home
          </Button>

          <Button
            sx={{
              color: "#fff",
              fontFamily: "monospace",
              "&:hover": { color: "#00ffcc" },
            }}
          >
            Projects
          </Button>

          <Button
            sx={{
              color: "#fff",
              fontFamily: "monospace",
              "&:hover": { color: "#00ffcc" },
            }}
          >
            Resume
          </Button>
        </Stack>

        <Box>
          <IconButton
            href="https://github.com/cgdhanush/"
            target="_blank"
            sx={{
              color: "#00ffcc",
              "&:hover": {
                transform: "scale(1.2)",
                transition: "0.2s",
              },
            }}
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            href="https://linkedin.com/in/dhanush-c-g/"
            target="_blank"
            sx={{
              color: "#00ffcc",
              "&:hover": {
                transform: "scale(1.2)",
                transition: "0.2s",
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;