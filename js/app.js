const menuItems = document.querySelectorAll('#navbar-list li a');

const sendItem = document.querySelector('#sendButton');
sendItem.disabled = true
const form = document.querySelector('form');

form.addEventListener('keyup', handleValue)

let data = {
  name: '',
  email: '',
  msg: ''
}

sendItem.addEventListener('click', sendMail);

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
});

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


function sendMail() {
  
  const link = "mailto:raziel_libertino@hotmail.com"
           + "&subject=" + escape("Gostaria de entrar em contato com você")
           + "&body=" + `${escape(data.name)}
           ${escape(data.msg)}`
  ;

  window.location.href = link;
}

function handleValue() {

  const { name, email, msg} = this;
  
  data = {
    name: name.value,
    email: email.value,
    msg: msg.value
  }

  if (!(name.value && email.value && msg.value)) {
    sendItem.disabled = true
  } else {
    sendItem.disabled = false
  }
}

