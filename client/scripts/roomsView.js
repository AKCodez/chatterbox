var RoomsView = {

  $button: $('#rooms button'),
  $roomValue: $('#val'),
  $select: $('#rooms select'),


  initialize: function() {
    RoomsView.$button.on('click',function() {
      RoomsView.renderRoom(RoomsView.$roomValue.val);
      console.log('is this working')
    });
  },
  renderRoom: function(name) {
    RoomsView.$select.prepend(Rooms.render({rn: roomname.name}))

  },
};
