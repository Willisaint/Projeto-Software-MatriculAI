const perguntas = document.querySelectorAll('.pergunta-faq');

        // 2. Itera sobre cada pergunta e adiciona um "ouvinte" de clique
        perguntas.forEach(pergunta => {
            pergunta.addEventListener('click', () => {
                // 3. Quando clicado, encontra a "resposta" correspondente
                // (O 'nextElementSibling' pega o próximo elemento, que é a div da resposta)
                const resposta = pergunta.nextElementSibling;

                // 4. Adiciona ou remove a classe 'active' da pergunta (para girar a seta)
                pergunta.classList.toggle('active');
                
                // 5. Adiciona ou remove a classe 'active' da resposta (para mostrar/esconder)
                resposta.classList.toggle('active');
            });
        });