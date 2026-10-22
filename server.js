import express from "express";
const app = express();
app.get("/", (req, res) =>{
res.send("Servidor rodando! 🚀");
});

const PORT = 4000;

app.get("/status", (req, res) => {
res. json({ status: "online", sprint: 1 });
});

app.get("/sobre", (req, res) =>{
res. send("Mensageiro Local - Criado no SENAI");
}); 

app.get('/status', (req, res) =>{
res.json({ status: 'online', sprint: 1 });
});
app.get('/sobre', (req, res) =>{
res.send('Meu primeiro servidor Node.js com Express e ES Modules.');
});
app.listen(PORT, ()=> console.log(`Servidor em http://localhost:${PORT}`));