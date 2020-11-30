const menuItems = document.querySelectorAll('#navbar-list li a');
const buttonsModal = document.querySelectorAll('.info button');

const form = document.querySelector('form');


menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
});

buttonsModal.forEach(button => {
  button.addEventListener('click', initialazeModal)
})


function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target);
  
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

// modal
function initialazeModal() {
  
  const modal = document.getElementById('modal-info');
  const text = document.getElementById('text')
  const title = document.getElementById('title');
  const items = document.getElementById('items');

  if (modal) {
    
    if (this.id === "qrcode") {
      const item1 = document.createElement('div');
      const item2 = document.createElement('div');
      const foto1 = document.createElement('img');
      const foto2 = document.createElement('img');
      
      item1.classList.add('item');
      item2.classList.add('item');
      
      foto1.src = "./img/qrcode.png";
      foto1.alt = "Foto 1"
      
      foto2.src = "./img/qrcode2.png";
      foto2.alt = "Foto 2"
  
      item1.appendChild(foto1);
      item2.appendChild(foto2);
  
      items.appendChild(item1);
      items.appendChild(item2);
      
  
      title.innerText = "QR CODE REDE AMAZÔNICA";
      text.innerHTML = `Projeto desenvolvido por mim e Michel Câmera. O negócio do sistema é cadastrar promoções dos clientes da empresa Rede Amazônica (filial da Globo), gerar um QR CODE da promoção e mostrar nos comerciais da filiada, porém quando o usuário acessa o QRCODE passará pelos servidores da Rede Amazônica e computará acesso, como: Região, horario, qual promoção. Criando assim BI para os clientes que utilizam a plataforma, sabendo quais promoções foram mais acessadas e quais cidades mais visualizaram. Trabalhei como <strong>Desenvolvedor Backend</strong> no projeto (lado do servidor), utilizado <strong>Web Api do .Net core</strong>; com ORM <strong>Entity Framework Core</strong>; Bancos de dados <strong>MySQl</strong>, atualmente dando continuidade como <strong>Desenvolvedor Fullstack</strong>.`
    }
  
    if(this.id === "paisemestres") {
      const item1 = document.createElement('div');
      const item2 = document.createElement('div');
      const item3 = document.createElement('div');
      const foto1 = document.createElement('img');
      const foto2 = document.createElement('img');
      const foto3 = document.createElement('img');
      
      item1.classList.add('item');
      item2.classList.add('item');
      item3.classList.add('item');
      
      foto1.src = "./img/paisemestre1.png";
      foto1.alt = "Foto 1"
      
      foto2.src = "./img/paisemestre2.png";
      foto2.alt = "Foto 2"
  
      foto3.src = "./img/paisemestre3.png";
      foto3.alt = "Foto 3"
  
      item1.appendChild(foto3);
      item2.appendChild(foto2);
      item3.appendChild(foto1);
      
      items.appendChild(item1);
      items.appendChild(item2);
      items.appendChild(item3);
      
  
      title.innerText = "Pais e Mestres";
      text.innerHTML = `Participação do desenvolvimento do projeto, como <strong>Desenvolvedor Backend Node.js</strong>. Trata-se de sistema de controle de associados, onde há cadastros, controle de contas, envios de e-mail, Sistema de Chat em Reunioes e Encontro, API de Pagamento, Agendamento, Tarefas, etc. Utilizado <strong>Node.js</strong> com <strong>Adonis.js</strong>, banco de dados <strong>Mysql</strong>, <strong>Web Socket</strong>`
    }
    
    if(this.id === "aged") {
      const item1 = document.createElement('div');
      const item2 = document.createElement('div');
      const item3 = document.createElement('div');
      const foto1 = document.createElement('img');
      const foto2 = document.createElement('img');
      const foto3 = document.createElement('img');
      
      item1.classList.add('item');
      item2.classList.add('item');
      item3.classList.add('item');
      
      foto1.src = "./img/aged1.png";
      foto1.alt = "Foto 1"
      
      foto2.src = "./img/aged2.png";
      foto2.alt = "Foto 2"
  
      foto3.src = "./img/aged3.png";
      foto3.alt = "Foto 3"
  
      item1.appendChild(foto3);
      item2.appendChild(foto2);
      item3.appendChild(foto1);
      
      items.appendChild(item1);
      items.appendChild(item2);
      items.appendChild(item3);
      
  
      title.innerText = "Agendamento FAMETRO";
      text.innerHTML = `Software web para controle de horarios de atividades, reuniões e eventos para a coordenação de <strong>Sistemas de Informação da Faculdade Metropolitana de Manaus</strong>, desenvolvido por mim como projeto final de estágio, tecnologias utilizadas .Net Core e React.js, utilizado banco de dados Mysql`
    }

    if (this.id === "urnafakeson") {
      const item1 = document.createElement('div');
      const item2 = document.createElement('div');
      const item3 = document.createElement('div');
      const item4 = document.createElement('div');
      const item5 = document.createElement('div');
      const foto1 = document.createElement('img');
      const foto2 = document.createElement('img');
      const foto3 = document.createElement('img');
      const foto4 = document.createElement('img');
      const foto5 = document.createElement('img');
      
      item1.classList.add('item');
      item2.classList.add('item');
      item3.classList.add('item');
      item4.classList.add('item');
      item5.classList.add('item');
      
      foto1.src = "./img/urna-fakeson1.png";
      foto1.alt = "Foto 1"
      
      foto2.src = "./img/urna-fakeson2.png";
      foto2.alt = "Foto 2"
  
      foto3.src = "./img/urna-fakeson3.png";
      foto3.alt = "Foto 3"
  
      foto4.src = "./img/urna-fakeson4.png";
      foto4.alt = "Foto 4"
  
      foto5.src = "./img/urna-fakeson5.png";
      foto5.alt = "Foto 5"
  
      item1.appendChild(foto3);
      item2.appendChild(foto2);
      item3.appendChild(foto1);
      item4.appendChild(foto4);
      item5.appendChild(foto5);
      
      items.appendChild(item1);
      items.appendChild(item2);
      items.appendChild(item3);
      items.appendChild(item4);
      items.appendChild(item5);
      
  
      title.innerText = "Urna Web Fakeson";
      text.innerHTML = `Autor do Urna Web Fakeson. Trata-se de sistema open-source de controle de votos, cadastro de candidatos e dashboard de apuração. Baseado no sistema de votos do Tribunal Regional Eleitoral do Brasil. Tecnologias utilizadas: <strong>.Net Core</strong> com <strong>Web API</strong>, banco de dados <strong>Mysql</strong>, <strong>React.js</strong> para o lado do cliente.`
    }
    
    modal.classList.add('view');
  
    modal.addEventListener('click', (e) => {
      if (e.target.id === 'modal-info' || e.target.className == 'close') {
        modal.classList.remove('view');
        const fotosDiv = document.querySelectorAll('div.item');
        fotosDiv.forEach(x => x.remove());
      }
    })

  }

}




