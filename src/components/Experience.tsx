import { Container, Typography, Box } from "@mui/material";
import { resume } from "../data/resume";

export default function Experience() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" sx={{ color: "#00ffcc", mb: 3 }}>
        // Experience
      </Typography>

      {resume.experience.map((exp) => (
        <Box key={exp.role} sx={{ mb: 4 }}>
          <Typography sx={{ color: "#fff", fontWeight: "bold" }}>
            {exp.role} - {exp.company}
          </Typography>

          <Typography sx={{ color: "#00ff88", fontFamily: "monospace" }}>
            {exp.duration}
          </Typography>

          <ul>
            {exp.points.map((p) => (
              <li key={p} style={{ color: "#ccc" }}>
                {p}
              </li>
            ))}
          </ul>
        </Box>
      ))}
    </Container>
  );
}