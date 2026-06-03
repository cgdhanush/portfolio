import { Container, Typography } from "@mui/material";
import { resume } from "../data/resume";

export default function About() {
  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h4" sx={{ color: "#00ffcc", mb: 3 }}>
        // Objective
      </Typography>

      <Typography sx={{ color: "#ccc", fontFamily: "monospace" }}>
        {resume.objective}
      </Typography>
    </Container>
  );
}