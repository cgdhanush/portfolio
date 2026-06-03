import { Box, Container, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "rgba(5,7,15,0.85)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(0,255,204,0.2)",
        color: "#fff",
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} Dhanush C G
          </Typography>
          <Typography variant="body2" color="textSecondary">
            All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
