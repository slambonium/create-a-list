$(document).ready(function() {
  
  function textInputFocus() {
    // bring focus to text input
    $('#add-textfield').focus();
  }

  textInputFocus();

  function addItem() {
    // get text field value
    var input = $('#add-textfield').val();
    // trim leading and trailing blanks
    input = input.trim();

    // add item only if text field is not blank    
    if (input !== '') {
      $('#list-items').prepend('<div class="item itemNotDone"><span class="remove"><i class="fa fa-remove"></i></span><span class="item-text">'+ input + '</span><span class="check-undo"><i class="fa fa-check"></i></span></div>');
    }

    // reset input text field to show placeholder text
    document.querySelector('#add-textfield').value = '';

    textInputFocus();
  }

  // add an item with the 'Add Item' button
  $('#add-button').click(function() {
    addItem();
  });

  // add an item using the 'enter' key
  $('body').keydown(function(whichKey) {
    if (whichKey.which === 13) {
      addItem();
    }
  });

  // remove an item from the list
  $('#list-items').on('click', '.remove', function() {
    $(this).parent().remove();
  });

}); // end document.ready