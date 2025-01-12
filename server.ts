// server.ts
import * as express from 'express'; // Import all exported members as 'express'
import * as path from 'path';

const app = express();

// Serve the static files from the Angular app
const distFolder = path.join(__dirname, 'dist/country-view'); // Update with your app name
app.use(express.static(distFolder));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(distFolder, 'index.html'));
});

const port = process.env['PORT'] || 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});