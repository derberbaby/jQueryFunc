$(document).ready(function() {

  $('#click').click(function() {
    alert("Haha! Made ya click! :-)");
  })

  $('#hide').click(function() {
    $('#hideShow').hide();
  })

  $('#show').click(function() {
    $('#hideShow').show();
  })

  $('#toggle').click(function() {
    $('#toggleThis').toggle();
  })

  $('#slideDown').click(function() {
    $('#troll').slideDown();
  })

    $('#slideUp').click(function() {
      $('#troll').slideUp();
    })

    $('#slideToggle').click(function() {
      $('#troll').slideToggle();
    })

    $('#fadeIn').click(function() {
      $('#casper').fadeIn(1000);
    })

    $('#fadeOut').click(function() {
      $('#casper').fadeOut(3000);
    })

    $('#addClassBold').click(function() {
      $('#addClassToThis').addClass('addClassBold')
    })

    $('#addClassPurple').click(function() {
      $('#addClassToThis').addClass('addClassPurple')
    })

    $('#removeClass').click(function() {
      $('#addClassToThis').removeClass('addClassBold addClassPurple')
    })

    $('#before').click(function() {
      $('#beforeAfter').before('<h3 class="removeElement">Hello</h3>')
    })

    $('#after').click(function() {
      $('#beforeAfter').after('<h3 class="removeElement">Goodbye</h3>')
    })

    $('#removeElement').click(function() {
      $('.removeElement').remove()
    })

    $('#append').click(function() {
      $('#appendThis').append('<span class="tada">TA DA!!! </span>')
    })

    $('#removeAppend').click(function() {
      $('.tada').remove()
    })

    $('#get').click(function() {
      var htmlString = $('#getHTML').html();
      $('#getHTML').text( htmlString );
    })

    $('#set').click(function() {
      var ogHTML = '<a href="#">Click</a> the <strong>Get HTML button</strong> to see this <span style="font-style: italic;">paragraph elements</span> HTML contents.';
      $('#getHTML').html(ogHTML);
    })

    $('#attr1').click(function() {
      var title = $('#attrLink').attr('title');
      $('#showAttr').text(title);
    })

    $('#attr2').click(function() {
      $('#attrLink').attr('title', "New Title -- WooHoo!");
      $('#showAttr').text('By clicking Set Attributes, we changed the title(value) of the link above! Click Get Value again to see the new title.')
    })

    $('#inputVal').keyup(function() {
      var value = $( this ).val();
      $('#valChange').html(value);
    })

    $('#setVal').click(function() {
      var value = $('#inputVal').val();
      $('.setVal').val(value);
    })
})
