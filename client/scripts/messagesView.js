var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    setInterval(function () {
      App.fetch(App.stopSpinner)
    }, 1000);

  },

  renderMessage: function (message) {
    this.$chats.prepend(MessageView.render({ username: message.username, text: message.text }))
  }

};
