/*Criando variáveis para os elementos do DOM que serão manipulados no script*/
const menuToggle = document.getElementById("menuToggle");
const menuPrincipal = document.getElementById("menuPrincipal");
const formulario = document.getElementById("formCotacao");
const campoPlano = document.getElementById("plano");
const campoTelefone = document.getElementById("telefone");
const campoVidas = document.getElementById("vidas");
const retorno = document.getElementById("retorno");
const resumo = document.getElementById("resumo");
const aviso = document.getElementById("aviso");
const botaoTopo = document.getElementById("botaoTopo");
/*Criando objetos para armazenar os nomes e preços dos planos de saúde*/
const nomesPlanos = {
    individual: "Plano de saúde individual",
    familiar: "Plano familiar ou empresarial",
    odontologico: "Plano odontológico"
};

const precosPlanos = {
    individual: 113.6,
    familiar: 88.56,
    odontologico: 39.9
};
/*Variável para armazenar o temporizador do aviso, permitindo que ele seja cancelado se necessário*/
let temporizadorAviso;
/*Função para exibir uma mensagem de aviso na tela por um período de tempo determinado*/
function mostrarAviso(mensagem) {
    aviso.textContent = mensagem;
    aviso.classList.add("ativo");
    clearTimeout(temporizadorAviso);
    temporizadorAviso = setTimeout(function () {
        aviso.classList.remove("ativo");
    }, 3000);
}
/*Função para formatar um valor numérico como moeda brasileira (BRL)*/
function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
/*Função para rolar suavemente a página até um elemento específico identificado por um seletor CSS*/
function rolarPara(seletor) {
    const alvo = document.querySelector(seletor);
    if (alvo) {
        alvo.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
/*Função para fechar o menu principal, removendo a classe "aberto" e atualizando o atributo aria-expanded do botão de toggle*/
function fecharMenu() {
    menuPrincipal.classList.remove("aberto");
    menuToggle.setAttribute("aria-expanded", "false");
}
/*Adicionando um evento de clique ao botão de toggle do menu, alternando a classe "aberto" no menu principal e atualizando o atributo aria-expanded*/
menuToggle.addEventListener("click", function () {
    const aberto = menuPrincipal.classList.toggle("aberto");
    menuToggle.setAttribute("aria-expanded", String(aberto));
});

menuPrincipal.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", fecharMenu);
});
/*Adicionando eventos de clique aos botões que possuem o atributo data-rolar, chamando a função fecharMenu e rolando para o elemento correspondente ao valor do atributo data-rolar*/
document.querySelectorAll("[data-rolar]").forEach(function (botao) {
    botao.addEventListener("click", function () {
        fecharMenu();
        rolarPara(botao.dataset.rolar);
    });
});

document.querySelectorAll("[data-servico]").forEach(function (botao) {
    botao.addEventListener("click", function () {
        mostrarAviso("Você acessou: " + botao.dataset.servico + ". Em breve este serviço estará disponível.");
    });
});

document.querySelectorAll("[data-plano]").forEach(function (botao) {
    botao.addEventListener("click", function () {
        const plano = botao.dataset.plano;
        campoPlano.value = plano;
        atualizarResumo();
        limparErro(campoPlano);
        destacarPlano(plano);
        rolarPara("#cotacao");
        setTimeout(function () {
            document.getElementById("nome").focus({ preventScroll: true });
        }, 600);
        mostrarAviso("Plano selecionado: " + nomesPlanos[plano]);
    });
});
/*Função para destacar o cartão do plano selecionado, adicionando a classe "destaque" ao cartão correspondente e removendo dos demais*/
function destacarPlano(plano) {
    document.querySelectorAll(".plano").forEach(function (cartao) {
        const botao = cartao.querySelector("[data-plano]");
        cartao.classList.toggle("destaque", botao.dataset.plano === plano);
    });
}
/*Função para atualizar o resumo da cotação com base no plano selecionado e na quantidade de vidas, exibindo o valor total estimado por mês*/
function atualizarResumo() {
    const plano = campoPlano.value;
    const vidas = parseInt(campoVidas.value, 10);

    if (!plano || isNaN(vidas) || vidas < 1) {
        resumo.textContent = "";
        return;
    }

    const total = precosPlanos[plano] * vidas;
    resumo.textContent = "Estimativa a partir de " + formatarMoeda(total) + "/mês para " + vidas + (vidas === 1 ? " pessoa." : " pessoas.");
}

campoPlano.addEventListener("change", function () {
    destacarPlano(campoPlano.value);
    atualizarResumo();
});

campoVidas.addEventListener("input", atualizarResumo);
/*Adicionando um evento de input ao campo de telefone, formatando o valor digitado para o padrão brasileiro de telefone, incluindo DDD e hífen*/
campoTelefone.addEventListener("input", function () {
    let numeros = campoTelefone.value.replace(/\D/g, "").slice(0, 11);

    if (numeros.length > 10) {
        numeros = numeros.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (numeros.length > 6) {
        numeros = numeros.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (numeros.length > 2) {
        numeros = numeros.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else if (numeros.length > 0) {
        numeros = numeros.replace(/^(\d{0,2})/, "($1");
    }

    campoTelefone.value = numeros;
});
/*Função para exibir uma mensagem de erro em um campo específico, adicionando a classe "invalido" ao grupo do campo e atualizando o texto do elemento de erro correspondente*/
function mostrarErro(campo, mensagem) {
    const grupo = campo.closest(".campo");
    grupo.classList.add("invalido");
    grupo.classList.remove("valido");
    document.getElementById("erro-" + campo.id).textContent = mensagem;
    campo.setAttribute("aria-invalid", "true");
}
/*Função para limpar a mensagem de erro de um campo específico, removendo a classe "invalido" do grupo do campo e atualizando o texto do elemento de erro correspondente*/
function limparErro(campo) {
    const grupo = campo.closest(".campo");
    grupo.classList.remove("invalido");
    grupo.classList.add("valido");
    document.getElementById("erro-" + campo.id).textContent = "";
    campo.removeAttribute("aria-invalid");
}
/*Função para validar os campos do formulário, verificando se os valores atendem aos critérios específicos de cada campo e exibindo mensagens de erro quando necessário*/
function validarCampo(campo) {
    const valor = campo.value.trim();

    if (campo.id === "nome") {
        if (valor.length < 3 || valor.split(/\s+/).length < 2) {
            mostrarErro(campo, "Informe seu nome completo.");
            return false;
        }
    }

    if (campo.id === "email") {
        const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!padraoEmail.test(valor)) {
            mostrarErro(campo, "Informe um e-mail válido.");
            return false;
        }
    }

    if (campo.id === "telefone") {
        if (valor.replace(/\D/g, "").length < 10) {
            mostrarErro(campo, "Informe um telefone com DDD.");
            return false;
        }
    }

    if (campo.id === "plano") {
        if (!valor) {
            mostrarErro(campo, "Selecione um tipo de plano.");
            return false;
        }
    }

    if (campo.id === "vidas") {
        const quantidade = parseInt(valor, 10);
        if (isNaN(quantidade) || quantidade < 1 || quantidade > 100) {
            mostrarErro(campo, "Informe uma quantidade entre 1 e 100.");
            return false;
        }
    }

    if (campo.id === "aceite") {
        if (!campo.checked) {
            mostrarErro(campo, "É necessário concordar para continuar.");
            return false;
        }
    }

    limparErro(campo);
    return true;
}
/*Selecionando todos os campos do formulário que precisam ser validados e adicionando eventos de validação para cada um deles, dependendo do tipo de campo (checkbox, select ou input)*/
const camposFormulario = formulario.querySelectorAll("input, select");
/*Adicionando eventos de validação para cada campo do formulário, chamando a função validarCampo quando o campo perde o foco (blur) ou quando seu valor muda (change)*/
camposFormulario.forEach(function (campo) {
    const evento = campo.type === "checkbox" || campo.tagName === "SELECT" ? "change" : "blur";
    campo.addEventListener(evento, function () {
        validarCampo(campo);
    });
});
/*Adicionando um evento de submit ao formulário, prevenindo o envio padrão, validando todos os campos e exibindo mensagens de sucesso ou erro conforme necessário*/
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    retorno.className = "retorno";
    retorno.textContent = "";

    let valido = true;
    let primeiroInvalido = null;

    camposFormulario.forEach(function (campo) {
        if (!validarCampo(campo)) {
            valido = false;
            if (!primeiroInvalido) {
                primeiroInvalido = campo;
            }
        }
    });

    if (!valido) {
        retorno.classList.add("falha");
        retorno.textContent = "Corrija os campos destacados e tente novamente.";
        primeiroInvalido.focus();
        return;
    }

    const primeiroNome = document.getElementById("nome").value.trim().split(/\s+/)[0];
    retorno.classList.add("sucesso");
    retorno.textContent = "Obrigado, " + primeiroNome + "! Recebemos sua cotação e entraremos em contato em breve.";
    mostrarAviso("Cotação enviada com sucesso!");

    formulario.reset();
    resumo.textContent = "";
    document.querySelectorAll(".campo").forEach(function (grupo) {
        grupo.classList.remove("valido", "invalido");
    });
    document.querySelectorAll(".plano").forEach(function (cartao) {
        cartao.classList.remove("destaque");
    });
});

window.addEventListener("scroll", function () {
    botaoTopo.classList.toggle("ativo", window.scrollY > 400);
});

botaoTopo.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
/*Função para animar a contagem de números em elementos específicos, incrementando o valor exibido até atingir o valor final definido no atributo data-valor do elemento*/
function animarNumero(elemento) {
    const destino = parseFloat(elemento.dataset.valor);
    const casas = parseInt(elemento.dataset.casas, 10);
    const sufixo = elemento.dataset.sufixo;
    const duracao = 1500;
    const inicio = performance.now();

    function passo(agora) {
        const progresso = Math.min((agora - inicio) / duracao, 1);
        const atual = destino * progresso;
        elemento.textContent = atual.toLocaleString("pt-BR", {
            minimumFractionDigits: casas,
            maximumFractionDigits: casas
        }) + sufixo;
        if (progresso < 1) {
            requestAnimationFrame(passo);
        }
    }

    requestAnimationFrame(passo);
}
/*Criando um observador de interseção para detectar quando o bloco de números entra na viewport, iniciando a animação dos números e parando a observação após a primeira execução*/
const observador = new IntersectionObserver(function (entradas, obs) {
    entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
            entrada.target.querySelectorAll("[data-valor]").forEach(animarNumero);
            obs.unobserve(entrada.target);
        }
    });
}, { threshold: 0.4 });
/*Selecionando o bloco de números e iniciando a observação para animar os números quando ele entrar na viewport*/
const blocoNumeros = document.querySelector(".numeros");
if (blocoNumeros) {
    observador.observe(blocoNumeros);
}