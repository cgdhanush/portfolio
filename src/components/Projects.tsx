import { Container, Typography, Card, CardContent, Chip } from "@mui/material";
import Grid from "@mui/material/Grid";
import { resume } from "../data/resume";

export default function Projects() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" sx={{ color: "#00ffcc", mb: 3 }}>
        // Projects
      </Typography>

      <Grid container spacing={3}>
        {resume.projects.map((p) => (
          <Grid size={{ xs: 12, md: 6 }} key={p.name}>
            <Card sx={{ background: "#0b0f1a", color: "#fff" }}>
              <CardContent>
                <Typography sx={{ fontWeight: "bold" }}>
                  {p.name}
                </Typography>

                {p.tech.map((t) => (
                  <Chip key={t} label={t} sx={{ mr: 1, mt: 1 }} />
                ))}

                <ul>
                  {p.points.map((pt) => (
                    <li key={pt} style={{ color: "#ccc" }}>
                      {pt}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}