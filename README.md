# Hospital Vetor

Projeto acadêmico de uma página institucional para um hospital e operadora de planos de saúde fictícia, desenvolvido com HTML5, CSS3 e JavaScript.

## Autores

- Instituição: Uninassau
- Equipe: Lucas Matheus, Mateus Trajano, Vinícius Tavares e Pedro Cintra.
- Curso: Análise e Desenvolvimento de Sistemas
- Turma: 2° Período, Manhã.

## Tema

Saúde: apresentação do hospital, números da rede, serviços rápidos, planos de saúde e odontológicos e formulário de cotação.

## Tecnologias

- HTML5 com estrutura semântica (`header`, `nav`, `main`, `section`, `article`, `figure`, `form`, `footer`)
- CSS3 externo com Flexbox e Grid
- JavaScript externo (DOM e eventos)

## Estrutura de arquivos

```
.
├── hvetor.html
├── stylevetor.css
├── script.js
├── logo_vetor.png
├── hospital_vetor.png
└── README.md
```

## Requisitos atendidos

| Requisito | Onde está |
|---|---|
| Estrutura semântica em HTML5 | `hvetor.html` |
| Hero Section | seção `#inicio` |
| Conteúdo | números, serviços, apresentação e planos |
| Formulário | seção `#cotacao` |
| CSS externo | `stylevetor.css` |
| Flexbox e Grid | cabeçalho, hero e botões (Flexbox); números, planos e formulário (Grid) |
| Responsividade básica | media queries em 900px e 600px, menu recolhível no celular |
| JavaScript externo | `script.js` |
| Manipulação do DOM e eventos | `click`, `input`, `change`, `blur`, `submit`, `scroll` |
| Validação e feedback | mensagens de erro por campo, aviso flutuante e mensagem de sucesso |

## Interações funcionais

1. **Menu responsivo:** botão que abre e fecha o menu em telas pequenas.
2. **Contratação de plano:** os botões "Contrate Agora" selecionam o plano no formulário, destacam o cartão escolhido e rolam até a cotação.
3. **Validação do formulário:** verifica nome completo, e-mail, telefone com DDD, plano, quantidade de pessoas e aceite, com feedback visual e textual.
4. **Máscara de telefone:** formata o número enquanto o usuário digita.
5. **Estimativa de valor:** calcula o valor mensal inicial conforme o plano e a quantidade de pessoas.
6. **Serviços rápidos:** os botões exibem um aviso ao serem clicados.
7. **Contador animado:** os números da rede são animados ao aparecerem na tela.
8. **Botão voltar ao topo:** aparece ao rolar a página.

## Como executar

1. Baixe ou clone o repositório.
2. Mantenha todos os arquivos na mesma pasta.
3. Abra o arquivo `hvetor.html` no navegador.

## Publicação no GitHub

```bash
git init
git add .
git commit -m "Projeto Hospital Vetor"
git branch -M main
git remote add origin https://github.com/lucasmatheuslmsg/hospital-vetor.git
git push -u origin main
```

## Observações

Hospital Vetor é uma marca fictícia criada para fins didáticos. Os valores e números exibidos são ilustrativos. O HTML e o CSS foram elaborados com apoio de inteligência artificial e depois revisados e organizados pela equipe.



