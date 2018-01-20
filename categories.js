var data = [{
        CategoryId: 1,
        CategoryTexts: [{
                LanguageId: 1,
                Description: "Netus.",
                CreatedById: 1
            },
            {
                LanguageId: 2,
                Description: "Elementum.",
                CreatedById: 2
            },
            {
                LanguageId: 3,
                Description: "Rhoncus!",
                CreatedById: 3
            }
        ],
        CreatedById: 1,
        IsActive: true
    },
    {
        CategoryId: 2,
        CategoryTexts: [{
                LanguageId: 1,
                Description: "Aptent!",
                CreatedById: 4
            },
            {
                LanguageId: 2,
                Description: "Et.",
                CreatedById: 5
            },
            {
                LanguageId: 3,
                Description: "Pellentesque.",
                CreatedById: 6
            }
        ],
        CreatedById: 2,
        IsActive: true
    },
    {
        CategoryId: 3,
        CategoryTexts: [{
                LanguageId: 1,
                Description: "Metus.",
                CreatedById: 7
            },
            {
                LanguageId: 2,
                Description: "Quis?",
                CreatedById: 8
            },
            {
                LanguageId: 3,
                Description: "Rhoncus.",
                CreatedById: 9
            }
        ],
        CreatedById: 3,
        IsActive: true
    }
];

var columns = "";
var x = 100;
var y = 100;

data.forEach(function(e) {
    var column =
        '<tr id="addr' + x + '">' +
        '<td class="rowCheck"></td>' +
        '<td class="englishCategory rowCheck backgroundWhite"><input class = "form-control no-border input-md inputCheck maxWidth100 borderRadiusZero" type = "text" value = "' +
        e.CategoryTexts[0].Description + '"></td>' +
        '<td class="spanishCategory rowCheck backgroundWhite"><input class = "form-control no-border input-md inputCheck maxWidth100 borderRadiusZero" type = "text" value = "' +
        e.CategoryTexts[1].Description + '"></td>' +
        '<td class="frenchCategory  rowCheck backgroundWhite ColumnDisplayNone"><input class = "form-control no-border input-md inputCheck maxWidth100 borderRadiusZero" type = "text" value = "' +
        e.CategoryTexts[2].Description + '"></td>' +
        '<td class="text-center backgroundWhite toggleColumn">' +
        '<div class="toggleSwitch">' +
        '<input id="myonoffswitch' + (y + 1) + '" type="checkbox"  name="toggleSwitch' + (y + 1) + '" class="toggleSwitch-checkbox"' + "checked" + ">" +
        '<label class="toggleSwitch-label" for="myonoffswitch' + (y + 1) + '">' +
        '<span class="toggleSwitch-inner"></span><span class="toggleSwitch-switch"></span></label></div></td>' +
        '<td class="no-border"></td></tr>';
    columns += column;
    x++;
    y++;
});
var table = $(columns);
$("#tab_logic tbody").append(table);