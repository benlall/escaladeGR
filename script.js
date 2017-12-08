$('.item').css('min-height',$('.item').height()); /*permet de fixer la hauteur du carousel*/


/* flux actualité ffme*/
function myGetElementsByClassName(selector) {
    if ( document.getElementsByClassName ) {
        return document.getElementsByClassName(selector);
    }
    var returnList = new Array();
    var nodes = document.getElementsByTagName('div');
    var max = nodes.length;
    for ( var i = 0; i < max; i++ ) {
        if ( nodes[i].className == selector ) {
            returnList[returnList.length] = nodes[i];
        }
    }
    return returnList;
}

var rssReader = {
    containers : null,
    // initialization function
    init : function(selector) {
        containers = myGetElementsByClassName(selector);
        for(i=0;i<containers.length;i++){
            // getting necessary variables
            var rssUrl = containers[i].getAttribute('rss_url');
            var num = containers[i].getAttribute('rss_num');
            var id = containers[i].getAttribute('id');

            // creating temp scripts which will help us to transform XML (RSS) to JSON
            var url = encodeURIComponent(rssUrl);
            var googUrl = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num='+num+'&q='+url+'&callback=rssReader.parse&context='+id;

            var script = document.createElement('script');
            script.setAttribute('type','text/javascript');
            script.setAttribute('charset','utf-8');
            script.setAttribute('src',googUrl);
            containers[i].appendChild(script);
        }
    },

    // parsing of results by google
    parse : function(context, data) {
        var container = document.getElementById(context);
        container.innerHTML = '';

        // creating list of elements
        var mainList = document.createElement('ul');

        // also creating its childs (subitems)
        var entries = data.feed.entries;
        for (var i=0; i<entries.length; i++) {
            var listItem = document.createElement('li');
            var title = entries[i].title;
            var contentSnippet = entries[i].contentSnippet;
            var contentSnippetText = document.createTextNode(contentSnippet);

            var link = document.createElement('a');
            link.setAttribute('href', entries[i].link);
            link.setAttribute('target','_blank');
            var text = document.createTextNode(title);
            link.appendChild(text);

            // add link to list item
            listItem.appendChild(link);

            var desc = document.createElement('p');
            desc.appendChild(contentSnippetText);

            // add description to list item
            listItem.appendChild(desc);

            // adding list item to main list
            mainList.appendChild(listItem);
        }
        container.appendChild(mainList);
    }
};

window.onload = function() {
    rssReader.init('post_results');
};

/* actu ffme 2eme technique*/
 var fichier="http://www.ffme.fr/toutes-les-actualites-flux.atom"; 
 var limite="1";  //  sujets compris entre 1 
 var limite1="2";   //  et plus  
 var aspect="1";  //  0 ou 1 (1 permet d'afficher lien + description, 0 que les liens)  
 var minute="1";  //  0 ou 1 (1 permet d'afficher date et heure, 0 pas de date et heure) 
 var sujet="1"; //  0 ou 1 (1 permet d'afficher le titre des sujets traités, 0 pas de titre )  
 var te="Comic Sans MS, Verdana";  // Police de caractères (Verdana, arial etc...) 
 var fil_textsize="11"; // taille des liens et description 
 var title_textcolor="1F70B4"; // couleur des liens (000000 donne noir)  
 var tlien="none"; // style du lien none ou underline  
 var text_textcolor="000000";  // couleur description (000000 donne noir) 
 var frame_color="FFFFFF"; // couleur arrière plan (FFFFFF donne blanc) 
 var content="0"; // 0 ou 1 comme paramètre optionnel, 1  format html,  0  format texte 
 var extract="";  // laisser vide ou indiquez le nombre de caractères que vous souhaitez garder dans le corps du flux 
 var cache="15"; // gestion du cache exprimée en minutes - en fonction de la fréquence de mise à jour 
  document.write('<s'+'cript language="JavaScript" type="text/javascript" SRC="http://www.actifpub.com/rss.php?fichier_AP_='+fichier+'&limite_AP_='+limite+'&limite1_AP_='+limite1+'&aspect_AP_='+aspect+'&minute_AP_='+minute+'&sujet_AP_='+sujet+'&te_AP_='+te+'&fil_textsize_AP_='+fil_textsize+'&title_textcolor_AP_='+title_textcolor+'&text_textcolor_AP_='+text_textcolor+'&frame_color_AP_='+frame_color+'&content_AP_='+content+'&cache_AP_='+cache+'&extract_AP_='+extract+'&tlien_AP_='+tlien+'&java=1&member_AP_='+member+'"></sc'+'ript>'); 