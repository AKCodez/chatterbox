var RoomsView = {

  $button: $('#rooms button'),
  $roomValue: $('#val'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click',function() {
      RoomsView.renderRoom(RoomsView.$roomValue.value);
    });
  },

  renderRoom: function(name) {
    RoomsView.$roomValue.prepend(RoomsView.render({rn: name}))
  },

  render: _.template(`

      <div class="roomSelector">
        <option class = "text" > <%- rn %></option>
      </div>

    `)


};
