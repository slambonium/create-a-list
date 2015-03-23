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

  // toggle item status between not done and done
  $('#list-items').on('click', '.check-undo', function() {

    var target = $(this).children('i');

    // if item is not done - has class fa-check
    // if item is done - has class fa-undo
    if (target.hasClass('fa-check')) {
      // alert('changing item status to done');
      target.addClass('fa-undo');
      target.removeClass('fa-check');
      $(this).parent().addClass('itemDone');
      $(this).parent().removeClass('itemNotDone');
    } else if (target.hasClass('fa-undo')) {
      // alert('changing item status to NOT done');
        target.addClass('fa-check');
        target.removeClass('fa-undo');
        $(this).parent().addClass('itemNotDone');
        $(this).parent().removeClass('itemDone');        
    }

  });

  // clear the list of all items
  $('#clear-button').click(function() {
    // console.log($('#list-items').children().length);
    if ($('#list-items').children().length !== 0) {
      var clearList = confirm("Are you sure you want to clear the list?");
      if (clearList) {
        $('#list-items').empty();
      }
    }
    textInputFocus();
  });

}); // end document.ready