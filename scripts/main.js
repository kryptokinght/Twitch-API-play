
$('document').ready(function(){
        
    
    var url = "https://api.twitch.tv/kraken/streams?client_id=nv86pr7en42eh66xwbalnj68xzma8m";
    $.getJSON(url,function(data) {
        var keys = Object.keys(data.streams[0]);
        var str = JSON.stringify(data);
        
        data.streams.forEach(function(streamer) {
            var game = streamer.channel.game;
            var viewers = streamer.viewers;
            var logo_html = '<img src = "'+streamer.channel.logo+'" style="width:100px;height:80px;" >';
            var name = streamer.channel.name;
            console.log(logo_html);
            $("#json-data").append("<tr><th>"+logo_html+"</th><th>"+name+"</th><th>"+game+"</th><th>"+viewers+"</th></tr>");
        });
        
        
        var img_link = data.streams[0].channel.logo;
        console.log(img_link);
    });
});










