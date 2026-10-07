# Hospital Vetor

Projeto acadêmico de uma página institucional para um hospital e operadora de planos de saúde fictícia, desenvolvido com HTML5, CSS3 e JavaScript.

## Autores

- Instituição: Uninassau
- Equipe: Lucas Matheus Silva Gomes, Mateus Henrique Trajano Da Silva Pessoa, Vinícius Tavares Alves e Pedro Fellipe Paixão De Araújo Cintra.
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

## Acessibilidade

O projeto foi desenvolvido seguindo boas práticas de acessibilidade web, com base nas diretrizes da WCAG, para que possa ser usado por o maior número possível de pessoas.

### Práticas aplicadas

- **HTML semântico:** uso de tags como `header`, `nav`, `main`, `section` e `footer` para facilitar a navegação por leitores de tela.
- **Texto alternativo:** todas as imagens possuem o atributo `alt` com uma descrição objetiva.
- **Formulários acessíveis:** campos de entrada associados a `label`, com uso do atributo `for`.
- **Navegação por teclado:** todos os botões, links e campos podem ser acessados e acionados com `Tab` e `Enter`.
- **Foco visível:** os elementos interativos mostram destaque ao receber foco.
- **Contraste de cores:** combinação entre texto e fundo pensada para garantir boa legibilidade.
- **Fontes legíveis:** tamanhos em unidades relativas (`rem`), permitindo ampliar o texto sem quebrar o layout.
- **Layout responsivo:** a interface se adapta a diferentes tamanhos de tela.
- **Idioma definido:** uso de `<html lang="pt-BR">` para que leitores de tela pronunciem o conteúdo corretamente.
- **Atributos ARIA:** uso de `aria-label` e `aria-live` onde necessário, por exemplo para avisar mudanças dinâmicas na tela.

### Ferramentas de verificação

- Lighthouse (Google Chrome DevTools)
- WAVE (Web Accessibility Evaluation Tool)
- Teste manual de navegação apenas com o teclado
