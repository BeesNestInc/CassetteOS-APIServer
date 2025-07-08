const express = require('express');
const app = express();

app.use('/scripts', express.static('scripts'));

app.get('/v1/sys/version', (req, res) => {
  res.json({
    data: {
      version: "v0.4.15-cs1.2.0" , //version: "v0.4.18-cs1.1.0",
      change_log: "# v0.4.15-cs1.2.0\n### Changed \n- Switched version update check to custom CassetteServer update server.\n- Replaced version comparison logic to support custom versioning scheme (e.g. v0.4.18-cs1.0.0). \n  - Updated `VERSION` constant in `constants.go` to reflect CassetteServer versioning. \n ### Removed\n - Removed deprecated ZeroTier-related APIs and constants.",
      created_at: "2025-05-07T00:00:00Z"
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Version API server running at http://localhost:${PORT}`);
});

