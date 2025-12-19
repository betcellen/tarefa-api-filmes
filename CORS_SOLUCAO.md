# 🔧 Solução de Problemas - CORS Error

## Problema: "Erro ao buscar o filme!" ou erro de CORS

Se você está vendo a mensagem de erro **"Erro de conexão: Verifique sua internet ou se o servidor está disponível. Pode ser um erro de CORS."**, significa que há um problema de requisição entre sua aplicação Angular e a API OMDB.

### Causas Comuns:

1. **Bloqueio de CORS (Cross-Origin Resource Sharing)**: A API OMDB está bloqueando requisições diretas do navegador
2. **Problema de Conectividade**: Sem acesso à internet
3. **API Key Inválida**: A chave de API pode ter expirado ou estar bloqueada

### Soluções:

#### **Solução 1: Usar um CORS Proxy (Recomendado para Desenvolvimento)**

Se está recebendo erro de CORS, você pode usar um serviço CORS proxy gratuito. Edite o arquivo `src/app/filme.service.ts`:

```typescript
private apiUrl = 'https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/';
```

Ou use outro CORS proxy:
- `https://api.allorigins.win/raw?url=https://www.omdbapi.com/`
- `https://thingproxy.freeboard.io/fetch/https://www.omdbapi.com/`

#### **Solução 2: Usar Proxy Local (Desenvolvimento com Angular CLI)**

1. Crie o arquivo `proxy.conf.json` na raiz do projeto (já foi criado automaticamente)
2. Configure o Angular para usar o proxy ao iniciar:

```bash
ng serve --proxy-config proxy.conf.json
```

#### **Solução 3: Implementar Backend API (Produção)**

Para produção, crie um backend Node.js/Express que faça as requisições à API OMDB. Dessa forma, não há problema de CORS porque o backend é chamado do mesmo domínio.

```javascript
// Exemplo com Express.js
app.get('/api/filme', async (req, res) => {
  const titulo = req.query.t;
  const response = await fetch(`https://www.omdbapi.com/?apikey=SEU_API_KEY&t=${titulo}`);
  const data = await response.json();
  res.json(data);
});
```

### Debug:

1. Abra o **Console do Navegador** (F12 ou Ctrl+Shift+I)
2. Vá para a aba **Network** e tente fazer uma busca
3. Procure por requisições para `omdbapi.com`
4. Clique na requisição e verifique se há mensagens de erro
5. Veja a aba **Response** para ver se a API retorna dados

### Testando a API Diretamente:

Tente acessar a URL da API direto no navegador:
```
https://www.omdbapi.com/?apikey=2c6fceb1&t=The%20Matrix
```

Se receber um JSON com dados do filme, a API está funcionando. O erro é apenas de CORS no navegador.

### Usando Postman ou cURL:

```bash
curl "https://www.omdbapi.com/?apikey=2c6fceb1&t=The%20Matrix"
```

Isso pode ajudar a verificar se a chave de API está válida.

---

**Próximos passos:**
1. Abra o Console do navegador (F12)
2. Tente fazer uma busca
3. Procure pela mensagem de erro específica
4. Implemente uma das soluções acima baseado no erro encontrado
