# Sistema Escolar - Upload de Imagens

Um sistema web simples para upload e gerenciamento de imagens, desenvolvido para fins educacionais. Permite o upload de imagens através de uma interface web e as armazena em um diretório local.

Você pode realizar o envio de arquivos tanto pela interface web quanto utilizando o Postman para testes de API (veja instruções abaixo).

## Funcionalidades

**Upload de Imagens**: Interface web ou via Postman para envio de arquivos de imagem.
- **Validação de Arquivos**: Aceita apenas imagens com tamanho máximo de 5MB.
- **Armazenamento Local**: Imagens são salvas no diretório `publico/uploads` com nomes únicos baseados em timestamp.
- **Serviço de Arquivos Estáticos**: Acesso direto às imagens enviadas via URL.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework web para Node.js.
- **Multer**: Middleware para tratamento de uploads de arquivos multipart/form-data.
- **HTML/CSS**: Interface básica para upload.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/pedro2506/sistema-escolar.git
   cd sistema-escolar
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Uso

### 1. Inicie o servidor

```bash
node server.js
```
Ou para desenvolvimento com recarregamento automático:
```bash
npx nodemon server.js
```

### 2. Enviando arquivos via Postman

Você pode testar o envio de imagens utilizando o Postman:

1. Selecione o método **POST** e a URL `http://localhost:5000/upload`.
2. Em **Body**, escolha a opção **form-data**.
3. Adicione uma chave chamada `image` do tipo **File** e selecione a imagem que deseja enviar.
4. Clique em **Send** para realizar o upload.
5. A resposta será um JSON com a URL da imagem salva.

Exemplo de configuração no Postman:

| Método | URL                        | Body (form-data)         |
|--------|----------------------------|-------------------------|
| POST   | http://localhost:5000/upload | image: [arquivo imagem] |

### 3. Enviando arquivos pela interface web

1. Abra o navegador e acesse `http://localhost:5000` para visualizar a página de upload.
2. Selecione uma imagem e clique em "Enviar" para fazer o upload.
3. Após o upload, a URL da imagem será retornada em formato JSON.

1. Inicie o servidor:
   ```bash
   node server.js
   ```
   Ou para desenvolvimento com recarregamento automático:
   ```bash
   npx nodemon server.js
   ```

2. Abra o navegador e acesse `http://localhost:5000` para visualizar a página de upload.

3. Selecione uma imagem e clique em "Enviar" para fazer o upload.

4. Após o upload, a URL da imagem será retornada em formato JSON.

## Estrutura do Projeto

```
sistema-escolar/
├── LICENSE
├── package.json
├── README.md
├── server.js
└── publico/
    ├── upload.html
    └── uploads/
        └── (imagens enviadas)
```

- `server.js`: Arquivo principal do servidor Express.
- `publico/upload.html`: Página HTML para upload de imagens.
- `publico/uploads/`: Diretório onde as imagens são armazenadas.

## API Endpoints

- `GET /`: Página inicial (retorna "Imagem recebida").
- `POST /upload`: Endpoint para upload de imagens. Aceita um arquivo com o campo `image`.
- `GET /uploads/:filename`: Acesso direto às imagens enviadas.

## Configuração

O servidor roda na porta 5000 por padrão. Você pode alterar isso modificando a linha `app.listen(5000, ...)` no arquivo `server.js`.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Desenvolvido por [pedro2506](https://github.com/pedro2506).

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests no repositório.