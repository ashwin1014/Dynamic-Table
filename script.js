$(document).ready(function() {
    //initially enabling English and Spanish Category
    $(".spanishCategory").show();
    $(".frenchCategory").hide();
    $("#btnFrench").removeClass("btn-primary");
    $("#btnFrench").addClass("btn-default");

    //Logic for enable/disable add column button
    $(".addColumn").addClass("isDisabled");
    $("#engText,#esText,#frText").bind("change keyup", function() {
        if (($("#engText").val() || $("#esText").val() || $("#frText").val()) != "") $(".addColumn").removeClass("isDisabled");
        else $(".addColumn").addClass("isDisabled");
    });

});

//Function to add row dynamically
var x = 1;
var y = 1;


function getTableData() {
  return $("tr.category").map((index, element)=>{
  	let categoryObject = {}
  	categoryObject["english"]= $(element).find(".englishCategory input").val()
  	categoryObject["spanish"]= $(element).find(".spanishCategory input").val()
  	categoryObject["french"]= $(element).find(".frenchCategory input").val()
  	return categoryObject
  })
}

function DuplicatesExist() {
  var allData = getTableData()

  var noDuplicates = allData.toArray().every( data => {
    return data.english != $("#engText").val()
  })
  return noDuplicates != true
}

function addClassificationRow() {
    //first row created with id addr1
    addData($("#engText").val(),$("#esText").val(), $("#frText").val())
    $('#engText, #esText, #frText').val(''); //clear fields
    $(".addColumn").addClass("isDisabled");

}

function addData(englishText, spanishText, frenchText) {
  if(DuplicatesExist()){
    alert("Duplicate Text Found")
    return;
  }

  var row = '<tr id="addr' + (x) + '" class="category">' +
      '<td class="rowCheck"></td>' +
      '<td class="englishCategory rowCheck backgroundWhite"><input class = "form-control no-border input-md inputCheck maxWidth100 borderRadiusZero" type = "text" value = "' + englishText + '"></td>' +
      '<td class="spanishCategory rowCheck backgroundWhite"><input class = "form-control no-border input-md inputCheck maxWidth100 borderRadiusZero" type = "text" value = "' + spanishText + '"></td>' +
      '<td class="frenchCategory  rowCheck backgroundWhite ColumnDisplayNone"><input class = "form-control no-border input-md inputCheck maxWidth100 borderRadiusZero" type = "text" value = "' + frenchText + '"></td>' +
      '<td class="text-center backgroundWhite toggleColumn"><div class="toggleSwitch"><input id="myonoffswitch' + (y + 1) + '" type="checkbox"  name="toggleSwitch' + (y + 1) + '" class="toggleSwitch-checkbox"' + 'checked' + '>' +
      '<label class="toggleSwitch-label" for="myonoffswitch' + (y + 1) + '">' +
      '<span class="toggleSwitch-inner"></span><span class="toggleSwitch-switch"></span></label></div></td>' +
      '<td class="no-border"></td></tr>';
  $('#tab_logic tbody').append(row);
  x++;
  y++;
   // disable add button
}

//delete row
function deleteClassificationRow() {
    if (x >= 1) {
        $("#addr" + (x - 1)).remove("tr");
        x--;
    }
}

//function to Hide French language Column
function hideClassificationFrench() {
    $(".spanishCategory").hide();
    $(".frenchCategory").show();

    if ($('#spanishCategory').is(':visible')) {
        $("#btnFrench").removeClass("btn-primary");
        $("#btnFrench").addClass("btn-default");
        $("#btnSpanish").removeClass("btn-default");
        $("#btnSpanish").addClass("btn-primary");
    } else {
        $("#btnFrench").addClass("btn-primary");
        $("#btnFrench").removeClass("btn-default");
        $("#btnSpanish").removeClass("btn-primary");
        $("#btnSpanish").addClass("btn-default");
    }
}

//function to Hide Spanish language Column
function hideClassificationSpanish() {
    $(".spanishCategory").show();
    $(".frenchCategory").hide();

    if ($("#spanishCategory").is(":visible")) {
        $("#btnSpanish").removeClass("btn-primary");
        $("#btnSpanish").addClass("btn-default");
        $("#btnFrench").removeClass("btn-default");
        $("#btnFrench").addClass("btn-primary");
    } else {
        $("#btnSpanish").addClass("btn-primary");
        $("#btnSpanish").removeClass("btn-default");
        $("#btnFrench").removeClass("btn-primary");
        $("#btnFrench").addClass("btn-default");
    }
}

// Function to enable/disable rows on toggle
$(document).on("change", 'input:checkbox', function(e) {
    if ($(this).is(":checked")) {
        $(this).closest('tr').find("td.englishCategory, td.frenchCategory, td.spanishCategory,td.rowCheck .inputCheck").prop("disabled", false).removeClass("disabledRowColor").addClass("backgroundWhite");
        $(this).closest('tr').find("td.toggleColumn").removeClass("backgroundGray");
        $(this).closest('tr').find("td.toggleColumn").addClass("backgroundWhite");
    } else {
        $(this).closest('tr').find("td.englishCategory, td.frenchCategory, td.spanishCategory,td.rowCheck .inputCheck").prop("disabled", true).removeClass("backgroundWhite").addClass("disabledRowColor");
        $(this).closest('tr').find("td.toggleColumn").addClass("backgroundGray");
        $(this).closest('tr').find("td.toggleColumn").removeClass("backgroundWhite");
    }
});
