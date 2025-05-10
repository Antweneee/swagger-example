const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger.config');

const noteRoutes = require('./routes/notes.routes');

const app = express();
app.use(express.json());

app.use('/api/notes', noteRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => console.log('Server running at http://localhost:3000'));