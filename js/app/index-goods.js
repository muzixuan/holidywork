/**
 * Created by Administrator on 2017/2/8 0008.
 */
$(function(){
    $gd1 = [{gid:"1",gimg:"images/index-pic/0104goods_a1.jpg"},
        {gid:"2",gimg:"images/index-pic/0104goods_a2.jpg"},
        {gid:"3",gimg:"images/index-pic/0104goods_a3.jpg"},
        {gid:"4",gimg:"images/index-pic/0104goods_a4.jpg"},
        {gid:"5",gimg:"images/index-pic/0104goods_a5.jpg"},
        {gid:"6",gimg:"images/index-pic/0104goods_a6.jpg"}
    ]
    $.each($gd1,function(index){
        var div = $("<div>");
        $("div").addClass("pic");
        var a =$("<a>");
        a.attr("href","#!/"+this.gid);
        var img = $("<img>");
        img.attr("src",this.gimg);
        a.append(img);
        div.append(a);
        $(".goods1-box").append( div)
    });

    $gd2 = [{gid:"1",gimg:"images/index-pic/0105goods_b1.jpg"},
        {gid:"2",gimg:"images/index-pic/0105goods_b2.jpg"},
        {gid:"3",gimg:"images/index-pic/0105goods_b3.jpg"},
        {gid:"4",gimg:"images/index-pic/0105goods_b4.jpg"},
        {gid:"5",gimg:"images/index-pic/0105goods_b5.jpg"},
        {gid:"6",gimg:"images/index-pic/0105goods_b6.jpg"},
    ];

    $.each($gd2,function(index){
        var div = $("<div>");
        $("div").addClass("pic");
        var a =$("<a>");
        a.attr("href","#!/"+this.gid);
        var img = $("<img>");
        img.attr("src",this.gimg);
        a.append(img);
        div.append(a);
        $(".goods2-box").append( div)
    });
    $gd3 = [{gid:"1",gimg:"images/index-pic/0105goods_c1.jpg"},
        {gid:"2",gimg:"images/index-pic/0105goods_c2.jpg"},
        {gid:"3",gimg:"images/index-pic/0105goods_c3.jpg"},
        {gid:"4",gimg:"images/index-pic/0105goods_c4.jpg"},
        {gid:"5",gimg:"images/index-pic/0105goods_c5.jpg"},
        {gid:"6",gimg:"images/index-pic/0105goods_c6.jpg"},
    ];
    $.each($gd3,function(index){
        var div = $("<div>");
        $("div").addClass("pic");
        var a =$("<a>");
        a.attr("href","#!/"+this.gid);
        var img = $("<img>");
        img.attr("src",this.gimg);
        a.append(img);
        div.append(a);
        $(".goods3-box").append( div)
    });
    $gd4 = [{gid:"1",gimg:"images/index-pic/0105goods_d1.jpg"},
        {gid:"2",gimg:"images/index-pic/0105goods_d2.jpg"},
        {gid:"3",gimg:"images/index-pic/0105goods_d3.jpg"},
        {gid:"4",gimg:"images/index-pic/0105goods_d4.jpg"},
        {gid:"5",gimg:"images/index-pic/0105goods_d5.jpg"},
        {gid:"6",gimg:"images/index-pic/0105goods_d6.jpg"},
    ];
    $.each($gd4,function(index){
        var div = $("<div>");
        $("div").addClass("pic");
        var a =$("<a>");
        a.attr("href","#!/"+this.gid);
        var img = $("<img>");
        img.attr("src",this.gimg);
        a.append(img);
        div.append(a);
        $(".goods4-box").append( div)
    });
    $gd5 = [{gid:"1",gimg:"images/index-pic/0105goods_e1.jpg"},
        {gid:"2",gimg:"images/index-pic/0105goods_e2.jpg"},
        {gid:"3",gimg:"images/index-pic/0105goods_e3.jpg"},
        {gid:"4",gimg:"images/index-pic/0105goods_e4.jpg"},
        {gid:"5",gimg:"images/index-pic/0105goods_e5.jpg"},
        {gid:"6",gimg:"images/index-pic/0105goods_e6.jpg"},
    ];
    $.each($gd5,function(index){
        var div = $("<div>");
        $("div").addClass("pic");
        var a =$("<a>");
        a.attr("href","#!/"+this.gid);
        var img = $("<img>");
        img.attr("src",this.gimg);
        a.append(img);
        div.append(a);
        $(".goods5-box").append( div)
    });
    $gd6 = [{gid:"1",gimg:"images/index-pic/0105goods_f1.jpg"},
        {gid:"2",gimg:"images/index-pic/0105goods_f2.jpg"},
        {gid:"3",gimg:"images/index-pic/0105goods_f3.jpg"},
        {gid:"4",gimg:"images/index-pic/0105goods_f4.jpg"},
        {gid:"5",gimg:"images/index-pic/0105goods_f5.jpg"},
        {gid:"6",gimg:"images/index-pic/0105goods_f6.jpg"},
    ];
    $.each($gd6,function(index){
        var div = $("<div>");
        $("div").addClass("pic");
        var a =$("<a>");
        a.attr("href","#!/"+this.gid);
        var img = $("<img>");
        img.attr("src",this.gimg);
        a.append(img);
        div.append(a);
        $(".goods6-box").append( div)
    });
})

