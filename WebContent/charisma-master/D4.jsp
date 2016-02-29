<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
   <script type="text/javascript" src="./jchartfx.7.4.5649/js/jchartfx.system.js"></script>
   <script type="text/javascript" src="./jchartfx.7.4.5649/js/jchartfx.coreBasic.js"></script>  
 <!-- Uncomment this section to add extended User Interaction capabilities, including the End-User Menu.
         The UI features require a jChartFX Plus license for deployment.
    <script type="text/javascript" src="jChartFX/jchartfx.userinterface.js"></script>
    <link rel="stylesheet" type="text/css" href="jchartfx.userinterface.css" />
    -->
    <link rel="stylesheet" type="text/css" href="./jchartfx.7.4.5649/styles/Attributes/jchartfx.attributes.css" />
    <link rel="stylesheet" type="text/css" href="./jchartfx.7.4.5649/styles/Attributes/jchartfx.palette.css" />
	<script type="text/javascript" src="http://www.jchartfx.com/libs/jQuery/jquery-1.7.1.js"></script>
	<script type="text/javascript" src="http://www.jchartfx.com/libs/v7/current/js/jchartfx.system.js"></script>
	<script type="text/javascript" src="http://www.jchartfx.com/libs/v7/current/js/jchartfx.coreBasic.js"></script>   
	<script type="text/javascript" src="http://www.jchartfx.com/libs/v7/current/js/jchartfx.advanced.js"></script> 
<style type="text/css">
#divBack
{
        position: absolute;
        width: 111px;
        height: 60px;
        left: 5px;
        top: 13px;
        text-align: center;
}

.jchartfx .Title 
{
        font-size: 12pt;
}
.jchartfx {
	font-family: Verdana, Arial, sans-serif;
	font-weight: normal;
	font-size: 12px;
}
.jchartfx .Attribute0 {
	fill: #0972A5;
	stroke: #07567C;
	stroke-width: 1;
}

.jchartfx .Attribute0Line {
	stroke: #07567C;
	stroke-width: 3;
}

.jchartfx .Attribute0Alt {
	fill: #0B8ECE;
}

.jchartfx .Attribute1 {
	fill: #EEEEEE;
	stroke: #B3B3B3;
	stroke-width: 1;
}

.jchartfx .Attribute1Line {
	stroke: #B3B3B3;
	stroke-width: 3;
}

.jchartfx .Attribute1Alt {
	fill: #B3B3B3;
}

.jchartfx .Attribute2 {
	fill: #FFC73D;
	stroke: #C0962E;
	stroke-width: 1;
}

.jchartfx .Attribute2Line {
	stroke: #C0962E;
	stroke-width: 3;
}

.jchartfx .Attribute2Alt {
	fill: #C0962E;
}

.jchartfx .Attribute3 {
	fill: #CCCCCC;
	stroke: #999999;
	stroke-width: 1;
}

.jchartfx .Attribute3Line {
	stroke: #999999;
	stroke-width: 3;
}

.jchartfx .Attribute3Alt {
	fill: #999999;
}

.jchartfx .Attribute4 {
	fill: #555555;
	stroke: #404040;
	stroke-width: 1;
}

.jchartfx .Attribute4Line {
	stroke: #404040;
	stroke-width: 3;
}

.jchartfx .Attribute4Alt {
	fill: #6A6A6A;
}

.jchartfx .Attribute5 {
	fill: #2E7DB2;
	stroke: #235E86;
	stroke-width: 1;
}

.jchartfx .Attribute5Line {
	stroke: #235E86;
	stroke-width: 3;
}

.jchartfx .Attribute5Alt {
	fill: #399CDE;
}

.jchartfx .Attribute6 {
	fill: #0B93D5;
	stroke: #096FA0;
	stroke-width: 1;
}

.jchartfx .Attribute6Line {
	stroke: #096FA0;
	stroke-width: 3;
}

.jchartfx .Attribute6Alt {
	fill: #0DB7FF;
}

.jchartfx .Border {
	fill: #000000;
	stroke: #555555;
	stroke-width: 1;
}

.jchartfx .PlotArea {
	fill: transparent;
	stroke: #444444;
	stroke-width: 1;
}
.jchartfx .AxisY_Text {
	fill: #FFFFFF;
}

.jchartfx .AxisY_Major {
	stroke: #444444;
}

.jchartfx .AxisY_Minor {
	stroke: #444444;
}

.jchartfx .AxisY_Interlaced {
	fill: #000000;
}

.jchartfx .AxisY_Line {
	stroke: #444444;
	stroke-width: 2;
}

.jchartfx .AxisX_Text {
	fill: #FFFFFF;
}

.jchartfx .AxisX_Major {
	stroke: #444444;
}

.jchartfx .AxisX_Minor {
	stroke: #444444;
}

.jchartfx .AxisX_Interlaced {
	fill: #000000;
}

.jchartfx .AxisX_Line {
	stroke: #444444;
	stroke-width: 2;
}

.jchartfx .PointLabel {
	fill: #FFFFFF;
}

.jchartfx .PointLabelBorder {
	fill: #C0C0C0;
	stroke: #FFFFFF;
}

.jchartfx .Title {
	fill: #FFFFFF;
}

.jchartfx .LegendBox {
	fill: transparent;
	stroke: #555555;
	stroke-width: 1;
}

.jchartfx .LegendItem {
	fill: #FFFFFF;
}

</style>
<script type="text/javascript" language="javascript">
var chart1;
var chartDetail;
var countryName = "";
var currentColor;
var isCallBack = true;

window.onload = function () {
    onLoadDoc();
};

function onLoadDoc() {
    chart1 = new cfx.Chart();
    doStartupChart();
    setupChartDetail();
    var divHolder = document.getElementById('MainChartDiv');
    chart1.create(divHolder);
    $("#MainChartDiv").click(function (evt) {
        doClick(evt);
    });
    divBack.onclick = showMainChart;
    var detailHolder = document.getElementById("DetailChartDiv");
    detailHolder.style.display = "none";
}

function doStartupChart() {
    chart1.setGallery(cfx.Gallery.Pie);
    var data = chart1.getData();
    data.setSeries(1);
    data.setPoints(5);
    chart1.getView3D().setEnabled(true);
    chart1.getLegendBox().setVisible(true);
    setImagesAndColors(true, -1);
    chart1.getAllSeries().getPointLabels().setFormat("%v");
    chart1.getAllSeries().getPointLabels().setVisible(true);
    chart1.getAllSeries().getPointLabels().setAlignment(cfx.StringAlignment.NEAR);
	
	
    doTitle();
    doData();
}

function doTitle() {
    var titles = chart1.getTitles();
    var title = new cfx.TitleDockable();
     var title2 = new cfx.TitleDockable();
    
    if (titles.getCount() === 0) {
        
        title.setText("Overall Ratings");
        titles.add(title);
       
        title2.setText("for <Hotel_name>");
        titles.add(title2);
    } else {
        titles.clear();
        
        title.setText("Overall Ratings");
        titles.add(title);
        
        title2.setText("for <Hotel_name>");
        titles.add(title2);
    }
}

function doTitleCountry(countryName) {
    var titles = chartDetail.getTitles();
    var title = new cfx.TitleDockable();
    var title2 = new cfx.TitleDockable();
    if (titles.getCount() === 0) {
        title.setText("Density (Persons per sq. Km.) in " + countryName);
        titles.add(title);
        title2.setText("From year 1990 To year 2000");
        titles.add(title2);
    } else {
        titles.clear();
        title.setText("Density (Persons per sq. Km.) in " + countryName);
        titles.add(title);
        title2.setText("From year 1990 to year 2000");
        titles.add(title2);
    }
}

function doData() {
    chart1.getDataSourceSettings().getFields().clear();
    var items = [{
        "Country": "Costa Rica",
            "Value": 3711095
    }, {
        "Country": "El Salvador",
            "Value": 6125782
    }, {
        "Country": "Guatemala",
            "Value": 11085025
    }, {
        "Country": "Honduras",
            "Value": 6347658
    }, {
        "Country": "Nicaragua",
            "Value": 4935148
    }];
    chart1.setDataSource(items);
}

function doDataCountry(countryName) {
    var fields = chartDetail.getDataSourceSettings().getFields();
    fields.clear();
    var field1 = new cfx.FieldMap();
    field1.setName("Value");
    field1.setUsage(cfx.FieldUsage.Value);
    fields.add(field1);
    var field2 = new cfx.FieldMap();
    field2.setName("Date");
    field2.setUsage(cfx.FieldUsage.XValue);
    fields.add(field2);
    if (countryName == "Costa Rica") {
        itemsCountry = [{
            "Date": "1990-01-01T00:00:00.000Z",
                "Value": 59.8
        }, {
            "Date": "1991-01-01T00:00:00.000Z",
                "Value": 61.2
        }, {
            "Date": "1992-01-01T00:00:00.000Z",
                "Value": 62.6
        }, {
            "Date": "1993-01-01T00:00:00.000Z",
                "Value": 64.0
        }, {
            "Date": "1994-01-01T00:00:00.000Z",
                "Value": 65.4
        }, {
            "Date": "1995-01-01T00:00:00.000Z",
                "Value": 66.8
        }, {
            "Date": "1996-01-01T00:00:00.000Z",
                "Value": 68.1
        }, {
            "Date": "1997-01-01T00:00:00.000Z",
                "Value": 69.4
        }, {
            "Date": "1998-01-01T00:00:00.000Z",
                "Value": 70.7
        }, {
            "Date": "1999-01-01T00:00:00.000Z",
                "Value": 72.0
        }, {
            "Date": "2000-01-01T00:00:00.000Z",
                "Value": 73.3
        } ];
    } else if (countryName == "El Salvador") {
        itemsCountry = [{
            "Date": "1990-01-01T00:00:00.000Z",
                "Value": 246.1
        }, {
            "Date": "1991-01-01T00:00:00.000Z",
                "Value": 250.3
        }, {
            "Date": "1992-01-01T00:00:00.000Z",
                "Value": 254.6
        }, {
            "Date": "1993-01-01T00:00:00.000Z",
                "Value": 259.1
        }, {
            "Date": "1994-01-01T00:00:00.000Z",
                "Value": 263.9
        }, {
            "Date": "1995-01-01T00:00:00.000Z",
                "Value": 268.8
        }, {
            "Date": "1996-01-01T00:00:00.000Z",
                "Value": 273.9
        }, {
            "Date": "1997-01-01T00:00:00.000Z",
                "Value": 279.2
        }, {
            "Date": "1998-01-01T00:00:00.000Z",
                "Value": 284.6
        }, {
            "Date": "1999-01-01T00:00:00.000Z",
                "Value": 290.1
        }, {
            "Date": "2000-01-01T00:00:00.000Z",
                "Value": 295.6
        } ];
    } else if (countryName == "Guatemala") {
        itemsCountry = [{
            "Date": "1990-01-01T00:00:00.000Z",
                "Value": 82.7
        }, {
            "Date": "1991-01-01T00:00:00.000Z",
                "Value": 85.0
        }, {
            "Date": "1992-01-01T00:00:00.000Z",
                "Value": 86.4
        }, {
            "Date": "1993-01-01T00:00:00.000Z",
                "Value": 87.8
        }, {
            "Date": "1994-01-01T00:00:00.000Z",
                "Value": 90.2
        }, {
            "Date": "1995-01-01T00:00:00.000Z",
                "Value": 92.5
        }, {
            "Date": "1996-01-01T00:00:00.000Z",
                "Value": 94.7
        }, {
            "Date": "1997-01-01T00:00:00.000Z",
                "Value": 96.8
        }, {
            "Date": "1998-01-01T00:00:00.000Z",
                "Value": 98.8
        }, {
            "Date": "1999-01-01T00:00:00.000Z",
                "Value": 100.6
        }, {
            "Date": "2000-01-01T00:00:00.000Z",
                "Value": 102.2
        } ];
    } else if (countryName == "Honduras") {
        itemsCountry = [{
            "Date": "1990-01-01T00:00:00.000Z",
                "Value": 42.8
        }, {
            "Date": "1991-01-01T00:00:00.000Z",
                "Value": 44.1
        }, {
            "Date": "1992-01-01T00:00:00.000Z",
                "Value": 45.4
        }, {
            "Date": "1993-01-01T00:00:00.000Z",
                "Value": 46.7
        }, {
            "Date": "1994-01-01T00:00:00.000Z",
                "Value": 48.1
        }, {
            "Date": "1995-01-01T00:00:00.000Z",
                "Value": 49.6
        }, {
            "Date": "1996-01-01T00:00:00.000Z",
                "Value": 51.0
        }, {
            "Date": "1997-01-01T00:00:00.000Z",
                "Value": 52.4
        }, {
            "Date": "1998-01-01T00:00:00.000Z",
                "Value": 53.8
        }, {
            "Date": "1999-01-01T00:00:00.000Z",
                "Value": 55.2
        }, {
            "Date": "2000-01-01T00:00:00.000Z",
                "Value": 56.7
        } ];
    } else if (countryName == "Nicaragua") {
        itemsCountry = [{
            "Date": "1990-01-01T00:00:00.000Z",
                "Value": 30.6
        }, {
            "Date": "1991-01-01T00:00:00.000Z",
                "Value": 32.2
        }, {
            "Date": "1992-01-01T00:00:00.000Z",
                "Value": 33.4
        }, {
            "Date": "1993-01-01T00:00:00.000Z",
                "Value": 34.4
        }, {
            "Date": "1994-01-01T00:00:00.000Z",
                "Value": 35.5
        }, {
            "Date": "1995-01-01T00:00:00.000Z",
                "Value": 36.5
        }, {
            "Date": "1996-01-01T00:00:00.000Z",
                "Value": 37.4
        }, {
            "Date": "1997-01-01T00:00:00.000Z",
                "Value": 38.4
        }, {
            "Date": "1998-01-01T00:00:00.000Z",
                "Value": 39.2
        }, {
            "Date": "1999-01-01T00:00:00.000Z",
                "Value": 40.1
        }, {
            "Date": "2000-01-01T00:00:00.000Z",
                "Value": 41.0
        } ];
    }
    chartDetail.setDataSource(itemsCountry);
}

function setupChartDetail() {
    chartDetail = new cfx.Chart();
    var data = chartDetail.getData();
    data.setSeries(1);
    data.setPoints(11);
    chartDetail.setGallery(cfx.Gallery.Bar);
    chartDetail.getAxisY().getDataFormat().setFormat(cfx.AxisFormat.NUMBER);
    chartDetail.getAxisY().getDataFormat().setDecimals(2);
    chartDetail.getAxisY().getLabelsFormat().setDecimals(2);
    chartDetail.getAllSeries().getPointLabels().setFormat("%v");
    chartDetail.getAxisY().getGrids().setInterlaced(true);
	
    
    chartDetail.getAxisX().setStaggered(true);
	
    chartDetail.getAllSeries().setBarShape(cfx.BarShape.Cylinder);
    chartDetail.getLegendBox().setVisible(false);
    chartDetail.getAllSeries().getPointLabels().setVisible(false);
		
    
	
	
    var divHolder = document.getElementById('DetailChartDiv');
    chartDetail.create(divHolder);
}

function doClick(evt) {
    var iPoint = 0;
    var iSeries = 0;
    if (evt.hitType == cfx.HitType.Point) {
        iPoint = evt.point;
        iSeries = evt.series;
        if (iPoint === 0) {
            countryName = "Costa Rica";
        } else if (iPoint == 1) {
            countryName = "El Salvador";
        } else if (iPoint == 2) {
            countryName = "Guatemala";
        } else if (iPoint == 3) {
            countryName = "Honduras";
        } else if (iPoint == 4) {
            countryName = "Nicaragua";
        }
        doDataCountry(countryName);
        doTitleCountry(countryName);
        setImagesAndColors(false, iPoint);
        showDetailChart();
    }
}

function showDetailChart() {
    var divMain = document.getElementById('MainChartDiv');
    divMain.style.display = "none";
    var divDetail = document.getElementById('DetailChartDiv');
    divDetail.style.display = "inline-block";
}

function showMainChart() {
    var divDetail = document.getElementById('DetailChartDiv');
    divDetail.style.display = "none";
    document.getElementById('divBack').style.display = "none";
    var divMain = document.getElementById('MainChartDiv');
    divMain.style.display = "inline-block";
}

function showBackImage() {
    var divLoading = document.getElementById('divBack');
    divLoading.style.display = "inline-block";
    divLoading.style.height = "";
    divLoading.style.weight = "";
}

function hideBackImage() {
    var divHide = document.getElementById('divBack');
    divHide.style.display = "none";
}

function setImagesAndColors(isCallBack, iPoint) {
    if (isCallBack) {
        hideBackImage();
    } else {
        showBackImage();
        var tag = "Attribute" + iPoint;
        chartDetail.getSeries().getItem(0).setTag(tag);
    }
}
</script>
</head>
<body>
	<div>
		<table width="550" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td></td>
				<td>
					<div style="width: 550px;position: relative">
						<div id="divBack">
							<img alt="Back" src="sampleImages/backbutton.png" />
						</div>
						<div id="MainChartDiv" style="width:550px;height:400px;display:inline-block"></div>
						<div id="DetailChartDiv" style="width:550px;height:400px;display:inline-block; "></div>
					</div>
				</td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td height="10"></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td>
					<center><a href="http://www.itu.int/ITU-D/icteye/Indicators/Indicators.aspx">Source: http://www.itu.int/ITU-D/icteye/Indicators/Indicators.aspx</a></center>
				</td>
				<td></td>
			</tr>
		</table>
	</div>


</body>
</html>
