function buildMenu()
{
    var links = [
        ["Startsida", "index.html"], 
        ["Kontakta oss", "contact.html"], 
        ["Sortiment", "sort.html"]
    ]

    var content =""

    for(var i = 0; i <links.length; i++)
    {
        var text = links[i][0]
        var adress = links[i][1]
        content = content + "<li><a href=\"" + adress + "\">" + text + "</a></li>"

        // <li><a href="index.html">Startsidan</a></li>
    }

    document.getElementById("menu").innerHTML = content
}

