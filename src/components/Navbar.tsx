import { AppBar, Toolbar, Typography, Button, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { resume } from "../data/resume";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "rgba(5,7,15,0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0,255,204,0.2)",
      }}
    >
      <Toolbar>
        <Typography sx={{ flexGrow: 1, fontFamily: "monospace", color: "#00ffcc" }}>
          &lt;{resume.name} /&gt;
        </Typography>

        <Stack direction="row" spacing={1}>
          <Button sx={{ color: "#fff" }}>Home</Button>
          <Button sx={{ color: "#fff" }}>Projects</Button>
          <Button sx={{ color: "#fff" }}>Resume</Button>

          <IconButton href={resume.github} target="_blank" sx={{ color: "#00ffcc" }}>
            <GitHubIcon />
          </IconButton>

          <IconButton href={resume.linkedin} target="_blank" sx={{ color: "#00ffcc" }}>
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;