$(document).ready(function () {
  $("#delete").click(function () {
    var checkedItems = $("input:checked");
    if (checkedItems.length > 0) {
      $("#confirm-delete").show();
    }
  });

  $("#delete-cancel").click(function () {
    $("#confirm-delete").hide();
  });

  $("#delete-confirm").click(function () {
    $("input:checked").parents("tr").remove();
    $("#confirm-delete").hide();
  });

  $("input[type='checkbox']").click(function () {
    if ($(this).is(":checked")) {
      $(this).parents("tr").addClass("selected");
    } else {
      $(this).parents("tr").removeClass("selected");
    }
  });
});

// 

//delete success
$(document).ready(function () {
  $('#btn-delete-success').click(function () {
    $('#confirm-delete').fadeOut();
    $('#delete-success').fadeIn().fadeOut();
  });

  $('.btn.close').click(function () {
    $('#confirm-delete').fadeOut();
  });
});

// export
$(document).ready(function () {
  $("#export").click(function () {
    var checkedItems = $("input:checked");
    if (checkedItems.length > 0) {
      $(".export-section").show();
    }
  });

  $("#cancel").click(function () {
    $(".export-section").hide();
  });

  $("input[type='checkbox']").click(function () {
    if ($(this).is(":checked")) {
      $(this).parents("tr").addClass("selected");
    } else {
      $(this).parents("tr").removeClass("selected");
    }
  });
});
