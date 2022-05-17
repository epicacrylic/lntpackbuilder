let cobby = "https://raw.githubusercontent.com/epicacrylic/lntpackbuilder/main/blocks/cobblestone.json"

function imagesFromJSON() {

    $.getJSON(cobby, function (data) {

        var arrItems = [];      // The array to store JSON items.
        $.each(data, function (index, value) {
            arrItems.push(value);       // Push values in the array.
        });

        // Extract values for the table header.
        var col = [];
        for (var i = 0; i < arrItems.length; i++) {
            for (var key in arrItems[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a <table> element dynamically.
        // Ref: https://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm
        var table = document.createElement("table");

        var tr = table.insertRow(-1);                   // Table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // Table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // Add JSON data to the table as rows.
        for (var i = 0; i < arrItems.length; i++) {
            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                if (j === 2) {      // The last JSON column has image urls.

                    // Create an <img> element to show the images.
                    var img = document.createElement('img');
                    img.src = arrItems[i].Image;   // The image source from JSON array.
                    tabCell.appendChild(img);
                }
                else
                    tabCell.innerHTML = arrItems[i][col[j]];
            }
        }

        // Finally, add the newly created <table> with data to a container.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    });
};
