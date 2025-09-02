// server.js

// Passo 1: Chamar nosso chef "Express" para o trabalho.
const express = require('express');

//Passo 2: Criar o aplicativo,que é a nossa área de trabalho na cozinha.
const app = express();

// Passo 3: Ensinar nosso servidor a entender o formato JSON.
// JSON é como um bilhete de pedido bem organizado que o Postman vai nos mandar.
app.use(express.json());

// Passo 4: Definir o número da "porta" da nossa cozinha.
// O Postman precisa saber em qual porta bater para fazer pedidos.
// Vamos usar a porta 3000.
const PORT = 3000;

// ============================================
// Passo 5: Criar nossa primeira "porta de entrada" (endpoint), (rota).
// Quando alguém fizer um pedido do tipo POST para /registrar, esse código vai rodar.
// POST sinifica que estamos ENVIANDO dados para o servidor.
app.post('/registrar', (req, res) => {
    
    // Pegamos o nome e a senha que vieram no "corpo" (body) do pedido.
    const nome = req.body.nome;
    const senha = req.body.senha;

    console.log('Recebi um novo pedido de registro!');
    console.log('Nome:', nome);
    console.log('Senha:', senha);

    // Se o pedido veio sem nome ou sem senha...
    if (!nome || !senha) {
        // ...mandamos uma resposta de erro!
        return res.send('Ei, você esqueceu de mandar o nome ou a senha!');
    }

    // Se deu tudo certo, mandamos uma resposta de sucesso!
    res.send(`Olá, ${nome}! Seu registro foi recebido com sucesso. Sua senha secreta é ${senha}, não conte a ninguém!`);

} );
// ============================================

// Passo 6: Ligar o fogão! Ou seja, inciar nosso servidor.
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando e ouvindo na porta ${PORT}. Pode mandar os pedidos!`);
});

// server.js

// Passo 1: Chamar nosso chef "Express" para o trabalho.
const express = require('express');

//Passo 2: Criar o aplicativo,que é a nossa área de trabalho na cozinha.
const app = express();

// Passo 3: Ensinar nosso servidor a entender o formato JSON.
// JSON é como um bilhete de pedido bem organizado que o Postman vai nos mandar.
app.use(express.json());

// Passo 4: Definir o número da "porta" da nossa cozinha.
// O Postman precisa saber em qual porta bater para fazer pedidos.
// Vamos usar a porta 3000.
const PORT = 3000;

// ============================================
// Passo 5: Criar nossa primeira "porta de entrada" (endpoint), (rota).
// Quando alguém fizer um pedido do tipo POST para /registrar, esse código vai rodar.
// POST sinifica que estamos ENVIANDO dados para o servidor.
app.post('/registrar', (req, res) => {
    
    // Pegamos o nome e a senha que vieram no "corpo" (body) do pedido.
    const nome = req.body.nome;
    const senha = req.body.senha;

    console.log('Recebi um novo pedido de registro!');
    console.log('Nome:', nome);
    console.log('Senha:', senha);

    // Se o pedido veio sem nome ou sem senha...
    if (!nome || !senha) {
        // ...mandamos uma resposta de erro!
        return res.send('Ei, você esqueceu de mandar o nome ou a senha!');
    }

    // Se deu tudo certo, mandamos uma resposta de sucesso!
    res.send(`Olá, ${nome}! Seu registro foi recebido com sucesso. Sua senha secreta é ${senha}, não conte a ninguém!`);

} );
// ============================================

// Passo 6: Ligar o fogão! Ou seja, inciar nosso servidor.
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando e ouvindo na porta ${PORT}. Pode mandar os pedidos!`);
});

