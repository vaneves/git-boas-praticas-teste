const express = require('express');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/schools', async (req, res) => {
  const schools = await prisma.school.findMany({ where: { status: 1 } });
  res.json(schools);
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
