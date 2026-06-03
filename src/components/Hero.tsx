import { Container, Typography, Button, Stack } from "@mui/material";

const Hero = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 700 }}>
        Hi, I'm Dhanush
      </Typography>

      <Typography
        variant="h5"
        sx={{
          mt: 2,
          color: "text.secondary",
        }}
      >
        Full Stack Developer | SOC & Cybersecurity Analyst (Fresher)
      </Typography>

      <Typography
        sx={{
          mt: 3,
          maxWidth: 700,
        }}
      >
        Building scalable web apps and exploring SOC operations & threat
        detection
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
        <Button variant="contained">Projects</Button>

        <Button variant="outlined">Resume</Button>
      </Stack>
    </Container>
  );
};

export default Hero;
