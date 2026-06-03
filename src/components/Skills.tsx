import { Container, Typography, Chip, Box } from "@mui/material";
import { resume } from "../data/resume";

export default function Skills() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" sx={{ color: "#00ffcc", mb: 3 }}>
        // Skills
      </Typography>

      {Object.entries(resume.skills).map(([key, value]) => (
        <Box key={key} sx={{ mb: 3 }}>
          <Typography sx={{ color: "#00ff88", mb: 1 }}>
            {key.toUpperCase()}
          </Typography>

          {value.map((v) => (
            <Chip key={v} label={v} sx={{ mr: 1, mb: 1 }} />
          ))}
        </Box>
      ))}
    </Container>
  );
}