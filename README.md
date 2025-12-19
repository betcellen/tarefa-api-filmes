# 🎬 Projeto Filmes - OMDB API

Aplicativo Angular para consulta de filmes usando a API OMDB (Open Movie Database).

## Funcionalidades

-**Busca Individual (Opção 't')**: Procura por um filme específico e exibe detalhes completos
-**Busca por Lista (Opção 's')**: Procura por todos os filmes com um determinado título
-**Interface Intuitiva**: Seleção entre os dois tipos de busca com radio buttons
-**Validação de Entrada**: Aviso quando o campo está vazio
-**Tratamento de Erros**: Mensagens claras quando nenhum resultado é encontrado
-**Design Responsivo**: Funciona bem em dispositivos móveis e desktop

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

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
