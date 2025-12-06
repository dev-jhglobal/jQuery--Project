$('input[type="checkbox"]').click(function() {
  if ($(`input[type="checkbox"]`).is(":checked")) {
    $(`.monthly-plan`).addClass("d-none");
    $(`.yearly-plan`).removeClass("d-none");
  } else {
    $(`.monthly-plan`).removeClass("d-none");
    $(`.yearly-plan`).addClass("d-none");
  }
});
$(`.card`).mouseenter(function(item) {
  $(`.card`).removeClass("card-selected");
  item.currentTarget.classList.add("card-selected")
});