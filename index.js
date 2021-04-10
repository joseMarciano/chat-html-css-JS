const $ = document.querySelector.bind(document);
const btnSendMessage = $('[data-btn-send]');

const template = (message) => {
    return `
    <div class="chat-container__chat inverse">
    <img class="img__profile" src="./assets/img/profile1.png" alt="Imagem de perfil do usuário">
    <span class="phrase-chat-container">
        <p class="phrase-chat inverse">${message}</p>
        <p class="phrase-chat-time">2 min</p>
    </span>
    </div>
    `
}

btnSendMessage.addEventListener("click", () => {
  const message = getMessage();
  if (message) addMessageToConversation(message);
});

function getMessage() {
  const inputMessage = $('[data-input-message]');
  const message = inputMessage.value;
  inputMessage.value = '';
  return message ? message : false;
}

function addMessageToConversation(message) {
  const containerMessage = $('[data-conversation-container]');
  const messageBuilded = document.createRange().createContextualFragment(template(message));
  containerMessage.appendChild(messageBuilded);
}


