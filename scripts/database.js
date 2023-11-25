const cadastrarUsuario = () => {
    let nome = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    localStorage.setItem('nome_usuario', nome);
    localStorage.setItem('email_usuario', email);
    localStorage.setItem('password_usuario', password);
}

const logarUsuario = () => {

    let email = localStorage.getItem('email_usuario');
    let password = localStorage.getItem('password_usuario');

    let input_email = document.querySelector('#email').value;
    let input_password = document.querySelector('#password').value;

    if(email != null && password != null)
    {
        if(input_email == email && input_password == password)
        {
            let p_logado = document.querySelector('.p-info-logado');

            p_logado.style.display = 'block';
            p_logado.style.color = 'green';
            p_logado.innerHTML = 'Logado com sucesso!';

            setTimeout(() => {
                console.log('logado...');
                window.location.href = '../paginaInicial/paginaInicial.html';
            }, "2000");
        }
        else
        {
            let p_logado = document.querySelector('.p-info-logado');

            p_logado.style.display = 'block';
            p_logado.style.color = 'red';
            p_logado.innerHTML = 'Dados incorretos, tente novamente.';
        }
    }
    else
    {
        let p_logado = document.querySelector('.p-info-logado');

        p_logado.style.display = 'block';
        p_logado.style.color = 'red';
        p_logado.innerHTML = 'Dados incorretos, tente novamente.';
    }
}

const realizarAgendamento = () => {
    let data_agendamento = document.querySelector('.data-agendamento').value;
    let hora_agendamento = document.querySelector('.hora-agendamento').value;
    let data_agendamento_saida = document.querySelector('.data-agendamento-saida').value;
    let hora_agendamento_saida = document.querySelector('.hora-agendamento-saida').value;
    let vaga_adaptada = document.querySelector('#vaga-adptada').checked;
    let necessidade_text = document.querySelector('.necessidade-text').value;

    let pagamento = document.querySelector('.pagamento');
    var text = pagamento.options[pagamento.selectedIndex].text;

    localStorage.setItem('data_agendamento',data_agendamento);
    localStorage.setItem('hora_agendamento',hora_agendamento);
    localStorage.setItem('data_agendamento_saida',data_agendamento_saida);
    localStorage.setItem('hora_agendamento_saida',hora_agendamento_saida);
    localStorage.setItem('vaga_adaptada',vaga_adaptada);
    localStorage.setItem('necessidade_text',necessidade_text);
    localStorage.setItem('pagamento', text);

    setTimeout(() => {
        window.location.href = '../modais/agendamentoConfirmado.html';
    }, '1000');
}

const realizarEdicao = () => {
    let data_agendamento = document.querySelector('.data-agendamento').value;
    let hora_agendamento = document.querySelector('.hora-agendamento').value;
    let data_agendamento_saida = document.querySelector('.data-agendamento-saida').value;
    let hora_agendamento_saida = document.querySelector('.hora-agendamento-saida').value;
    let vaga_adaptada = document.querySelector('#vaga-adptada').checked;
    let necessidade_text = document.querySelector('.necessidade-text').value;

    let pagamento = document.querySelector('.pagamento');
    var text = pagamento.options[pagamento.selectedIndex].text;

    localStorage.setItem('data_agendamento',data_agendamento);
    localStorage.setItem('hora_agendamento',hora_agendamento);
    localStorage.setItem('data_agendamento_saida',data_agendamento_saida);
    localStorage.setItem('hora_agendamento_saida',hora_agendamento_saida);
    localStorage.setItem('vaga_adaptada',vaga_adaptada);
    localStorage.setItem('necessidade_text',necessidade_text);
    localStorage.setItem('pagamento', text);

    setTimeout(() => {
        window.location.href = '../modais/editarAg.html';
    }, '1000');
}