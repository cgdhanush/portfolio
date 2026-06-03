import { Container, Typography, Button, Stack, Box, Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import profileImg from "../assets/profile.jpg";

const roles = [
  "Full Stack Developer",
  "SOC Analyst (Fresher)",
  "Cybersecurity Enthusiast",
  "Bug Hunter Mode: ON",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];

    if (index < current.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + current[index]);
        setIndex(index + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [index, roleIndex]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#05070f",
        color: "#00ffcc",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* grid background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,255,204,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,204,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.2,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: 5,
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* LEFT SIDE TEXT */}
        <Box>
          <Typography
            sx={{
              fontFamily: "monospace",
              color: "#00ff88",
              mb: 2,
            }}
          >
            {"<system>"} initializing portfolio...
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: "#00fff0",
              textShadow: "0 0 20px rgba(0,255,255,0.6)",
            }}
          >
            Hi, I'm Dhanush C G
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mt: 2,
              fontFamily: "monospace",
              color: "#00ff88",
              minHeight: 40,
            }}
          >
            {">"} {text}
            <span style={{ opacity: 0.6 }}>|</span>
          </Typography>

          <Typography
            sx={{
              mt: 3,
              maxWidth: 500,
              color: "rgba(255,255,255,0.75)",
              fontFamily: "monospace",
            }}
          >
            Building secure web apps • Exploring SOC operations • Learning threat detection systems
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #00ff88, #00c2ff)",
                color: "#000",
                fontWeight: "bold",
                boxShadow: "0 0 20px rgba(0,255,200,0.4)",
              }}
            >
              PROJECTS
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: "#00ff88",
                color: "#00ff88",
                fontFamily: "monospace",
              }}
            >
              RESUME
            </Button>
          </Stack>
        </Box>

        {/* RIGHT SIDE IMAGE */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* glow ring */}
          <Box
            sx={{
              position: "absolute",
              width: 260,
              height: 260,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,255,200,0.4), transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          <Avatar
            src={profileImg}
            sx={{
              width: 220,
              height: 220,
              border: "3px solid #00ffcc",
              boxShadow: "0 0 30px rgba(0,255,200,0.5)",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;