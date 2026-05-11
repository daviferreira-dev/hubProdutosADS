# Hub de Produtos dos Alunos

Um hub simples e elegante para exibir os projetos de sites de produtos desenvolvidos pelos alunos.

## 📁 Arquivos

- **index.html** - Estrutura HTML
- **styles.css** - Estilos CSS
- **script.js** - Lógica JavaScript
- **README.md** - Este arquivo

## 🚀 Como Usar

### 1. Coloque os 3 arquivos na mesma pasta

```
minha-pasta/
├── index.html
├── styles.css
├── script.js
└── README.md
```

### 2. Abra o arquivo index.html no navegador

Clique duas vezes no arquivo `index.html` ou arraste para o navegador.

### 3. Pronto! 

O hub está funcionando com 1 projeto de exemplo e 6 slots vazios.

## ➕ Como Adicionar Novos Produtos

### Passo 1: Abra o arquivo script.js

Use um editor de texto (VS Code, Notepad++, Sublime Text, etc.)

### Passo 2: Localize o array de produtos

Procure por esta seção (por volta da linha 3):

```javascript
const products = [
    {
        id: 1,
        title: "E-Commerce Shopify",
        description: "Uma loja online moderna e responsiva...",
        image: "https://images.unsplash.com/...",
        studentName: "João Silva",
        websiteUrl: "https://example.com/ecommerce",
        githubUrl: "https://github.com/joaosilva/ecommerce-project"
    },
    // ADICIONE NOVOS PRODUTOS AQUI
];
```

### Passo 3: Adicione um novo produto

Copie e cole este bloco **antes do fechamento do array** (antes de `];`):

```javascript
{
    id: 2,
    title: "Seu Título Aqui",
    description: "Descrição do seu projeto...",
    image: "https://url-da-sua-imagem.com/imagem.jpg",
    studentName: "Seu Nome",
    websiteUrl: "https://seu-site.com",
    githubUrl: "https://github.com/seu-usuario/seu-repo"
},
```

### Passo 4: Preencha os dados

| Campo | O que colocar | Exemplo |
|-------|---------------|---------|
| `id` | Número único (incrementar) | `2`, `3`, `4`... |
| `title` | Nome do projeto | "Landing Page de Startup" |
| `description` | Descrição breve | "Página moderna com animações" |
| `image` | URL da imagem | "https://example.com/image.jpg" |
| `studentName` | Seu nome | "Maria Santos" |
| `websiteUrl` | Link do seu site | "https://seu-site.com" |
| `githubUrl` | Link do GitHub | "https://github.com/usuario/repo" |

### Passo 5: Salve o arquivo

Pressione `Ctrl+S` (ou `Cmd+S` no Mac)

### Passo 6: Recarregue a página

Abra o navegador e pressione `F5` para recarregar

## 📸 Onde Conseguir Imagens

Use URLs de imagens online de sites como:

- **Unsplash**: https://unsplash.com (buscar por "website", "ecommerce", etc.)
- **Pexels**: https://pexels.com
- **Pixabay**: https://pixabay.com

**Como usar:**

1. Encontre uma imagem
2. Clique com botão direito → "Copiar endereço da imagem"
3. Cole no campo `image` do seu produto

## 🎨 Exemplo Completo

```javascript
const products = [
    {
        id: 1,
        title: "E-Commerce Shopify",
        description: "Uma loja online moderna e responsiva com produtos, carrinho de compras e checkout integrado.",
        image: "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=300&fit=crop",
        studentName: "João Silva",
        websiteUrl: "https://example.com/ecommerce",
        githubUrl: "https://github.com/joaosilva/ecommerce-project"
    },
    {
        id: 2,
        title: "Landing Page de Startup",
        description: "Página de apresentação moderna com animações e call-to-action para captação de leads.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
        studentName: "Maria Santos",
        websiteUrl: "https://maria-startup.com",
        githubUrl: "https://github.com/mariasantos/startup-landing"
    },
    {
        id: 3,
        title: "Portfólio Pessoal",
        description: "Portfólio interativo com projetos, habilidades e formulário de contato.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
        studentName: "Pedro Costa",
        websiteUrl: "https://pedrocosta.dev",
        githubUrl: "https://github.com/pedrocosta/portfolio"
    },
];
```

## ✅ Checklist Antes de Salvar

- [ ] Cada produto tem um `id` único (1, 2, 3, 4...)
- [ ] O `title` não está vazio
- [ ] A `image` é uma URL válida (começa com `http://` ou `https://`)
- [ ] O `studentName` tem um nome
- [ ] Os URLs do site e GitHub começam com `https://`
- [ ] Não há vírgula faltando ou extra
- [ ] Não há aspas faltando

## 🐛 Erros Comuns

### ❌ Erro: "Uncaught SyntaxError"

**Causa**: Vírgula faltando ou aspas erradas

**Solução**: Verifique se cada produto tem uma vírgula no final (exceto o último)

```javascript
{
    id: 1,
    title: "Produto 1"
},  // ← Vírgula aqui
{
    id: 2,
    title: "Produto 2"
}   // ← Sem vírgula no último
```

### ❌ Erro: Imagem não carrega

**Causa**: URL da imagem inválida

**Solução**: 
- Verifique se a URL começa com `https://`
- Teste a URL no navegador
- Use uma imagem de um site confiável (Unsplash, Pexels, etc.)

### ❌ Erro: Modal não abre

**Causa**: Geralmente não é um erro, mas verifique o console (F12)

**Solução**: Abra o DevTools (F12) e veja se há mensagens de erro

## 💡 Dicas

1. **Teste após cada adição**: Salve e recarregue a página (F5) para ver o novo produto
2. **Use nomes descritivos**: Quanto melhor a descrição, melhor para busca
3. **Mantenha URLs atualizadas**: Se o site mudar, atualize o `websiteUrl`
4. **Imagens de qualidade**: Use imagens que representem bem o projeto
5. **Backup**: Faça uma cópia do arquivo antes de fazer muitas mudanças

## 🔍 Testando a Busca

Após adicionar um novo produto, teste:

1. Abra o arquivo no navegador
2. Digite no campo de busca:
   - Nome do projeto
   - Nome do aluno
   - Palavra da descrição

O produto deve aparecer nos resultados!

## 📱 Visualizando em Dispositivos Diferentes

O hub é responsivo! Teste em:

- **Desktop**: Abra normalmente
- **Tablet**: Redimensione a janela do navegador
- **Mobile**: Use o DevTools (F12) → Modo responsivo (Ctrl+Shift+M)

## 🎯 Características

- ✨ Design minimalista e moderno
- 📱 Totalmente responsivo (mobile, tablet, desktop)
- 🔍 Busca funcional em tempo real
- 🎯 Modal interativo ao clicar
- 🔗 Links diretos para site e GitHub
- ⚡ Sem dependências externas, apenas HTML/CSS/JS puro

## 📝 Estrutura de um Produto

```javascript
{
    id: 1,                          // ID único (número)
    title: "Nome do Projeto",       // Título (texto)
    description: "Descrição...",    // Descrição (texto)
    image: "https://...",           // URL da imagem
    studentName: "Nome do Aluno",   // Nome (texto)
    websiteUrl: "https://...",      // URL do site (opcional)
    githubUrl: "https://..."        // URL do GitHub (opcional)
}
```

---

**Pronto!** Seu hub está funcionando! 🎉

Para adicionar mais produtos, basta repetir o processo acima.
