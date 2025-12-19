# 🎬 Projeto Filmes - OMDB API

Aplicativo Angular para consulta de filmes usando a API OMDB (Open Movie Database).

## Funcionalidades

✅ **Busca Individual (Opção 't')**: Procura por um filme específico e exibe detalhes completos
✅ **Busca por Lista (Opção 's')**: Procura por todos os filmes com um determinado título
✅ **Interface Intuitiva**: Seleção entre os dois tipos de busca com radio buttons
✅ **Validação de Entrada**: Aviso quando o campo está vazio
✅ **Tratamento de Erros**: Mensagens claras quando nenhum resultado é encontrado
✅ **Design Responsivo**: Funciona bem em dispositivos móveis e desktop

## Tecnologias Utilizadas

- **Angular 21** - Framework frontend
- **TypeScript** - Linguagem de programação
- **RxJS** - Tratamento de operações assíncronas
- **HttpClient** - Consumo de APIs REST
- **Angular Forms** - Processamento de formulários

## Estrutura do Projeto

```
src/
├── app/
│   ├── app.ts              # Componente raiz da aplicação
│   ├── app.html            # Template raiz
│   ├── app.css             # Estilos da aplicação
│   ├── app.config.ts       # Configuração do Angular (HttpClient, Router)
│   ├── filme.service.ts    # Serviço para consumo da API OMDB
│   └── filme/
│       ├── filme.ts        # Componente principal de busca
│       ├── filme.html      # Template do componente
│       └── filme.css       # Estilos do componente
├── main.ts                 # Arquivo de inicialização
├── styles.css              # Estilos globais
└── index.html              # Página HTML principal
```

## Como Usar

### 1. Instalar Dependências
```bash
npm install
```

### 2. Iniciar o Servidor de Desenvolvimento
```bash
npm run start
```
ou
```bash
ng serve
```

A aplicação estará disponível em `http://localhost:4200/`

### 3. Usando a Aplicação

1. **Digite o nome do filme** no campo de entrada
2. **Escolha o tipo de busca**:
   - **Busca Individual (t)**: Retorna detalhes completos de um filme específico
   - **Busca por Lista (s)**: Retorna uma lista de todos os filmes com esse título
3. **Clique em "Buscar"** ou pressione **Enter**
4. **Visualize os resultados** com imagens e informações detalhadas

## API OMDB

Este projeto utiliza a API OMDB (Open Movie Database) gratuita:
- **URL Base**: `https://www.omdbapi.com/`
- **API Key**: Obtém uma chave gratuita em https://www.omdbapi.com/apikey.aspx
- **Tipos de Busca**:
  - `t=` (title) - Buscar filme específico por título
  - `s=` (search) - Buscar lista de filmes por título

### Exemplo de URL
```
https://www.omdbapi.com/?apikey=SUACHAVE&t=The%20Matrix
https://www.omdbapi.com/?apikey=SUACHAVE&s=Matrix
```

### Configurando a sua API Key

1. Abra o arquivo `src/app/omdb-config.ts`.
2. Substitua o valor de `OMDB_API_KEY` pela sua chave pessoal obtida em https://www.omdbapi.com/apikey.aspx.

Exemplo:

```ts
export const OMDB_API_KEY = 'SUA_CHAVE_AQUI';
```

Depois de configurar a chave, reinicie o servidor de desenvolvimento se ele estiver em execução.

## FilmeService

Serviço responsável por consumir a API OMDB:

```typescript
@Injectable({ providedIn: 'root' })
export class FilmeService {
  // Buscar um filme específico
  buscarIndividual(titulo: string): Observable<any>
  
  // Buscar uma lista de filmes
  buscarLista(titulo: string): Observable<any>
}
```

## Compilar para Produção

```bash
ng build
```

Os arquivos compilados estarão no diretório `dist/`.

## Rodar Testes

```bash
ng test
```

## Licença

Este projeto é fornecido como está, sem garantias.

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
