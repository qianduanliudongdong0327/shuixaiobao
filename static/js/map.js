var zoomLevel = 12;
var map = new BMap.Map("myMap");
window.map = map;
map.enableDragging();
map.disable3DBuilding();
map.enableScrollWheelZoom(true);
map.disableDoubleClickZoom();
map.centerAndZoom(new BMap.Point(108.944581,34.347198),zoomLevel);
//隐藏百度地图的版权信息
setTimeout(function(){
    $(".anchorBL").hide();
},1000);


$('.mapLeftList li').on('click',function(){
    map.clearOverlays();
    var address = $(this).attr('address');
    var name = $(this).text();
    var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
        '地址：'+ address +'<br/>电话：(010)59928888<br/>简介：'+ name +'。' +
        '</div>';
    var myGeo = new BMap.Geocoder();
    // 将地址解析结果显示在地图上,并调整地图视野
    myGeo.getPoint(address, function(point){
        if (point) {
            map.centerAndZoom(point, zoomLevel);
            //创建检索信息窗口对象
            var searchInfoWindow = null;
            searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
                title  : name,      //标题
                width  :320,             //宽度
                height : 120,              //高度
                panel  : "panel",         //检索结果面板
                enableAutoPan : true,     //自动平移
                searchTypes   :[
                    BMAPLIB_TAB_SEARCH,   //周边检索
                    BMAPLIB_TAB_TO_HERE,  //到这里去
                    BMAPLIB_TAB_FROM_HERE //从这里出发
                ]
            });
            var marker = new BMap.Marker(point); //创建marker对象
            searchInfoWindow.open(marker);
            map.addOverlay(marker);


        }else{
            console.log("您选择地址没有解析到结果!");
        }
    }, "西安市");
})