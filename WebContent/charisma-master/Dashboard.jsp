<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

 <%@ page import="java.io.BufferedReader" %>
 <%@ page import="java.io.FileInputStream" %>
  <%@ page import="java.io.FileReader" %>
 <jsp:useBean id="Ratings" class="bigdata.ratings" scope="session"></jsp:useBean>
   <jsp:useBean id="feature" class="bigdata.RatingsExtractor" scope="session"></jsp:useBean>
  <jsp:useBean id="parse" class="bigdata.FeatureExtraction" scope="session"></jsp:useBean>
    <jsp:useBean id="csv_parse" class="bigdata.DateCount" scope="session"></jsp:useBean>
  <jsp:useBean id="Sentiments" class="bigdata.sentiments" scope="session"></jsp:useBean>
     <jsp:useBean id="Area" class="bigdata.TrendCount" scope="session"></jsp:useBean>
       <jsp:useBean id="Rev" class="bigdata.ReviewListExtraction" scope="session"></jsp:useBean>
  <jsp:useBean id="Rat" class="bigdata.getRatings" scope="session"></jsp:useBean>
 <%
 String id = request.getParameter("hid");
 //out.println(id); 
parse.parseJSON(id);
Ratings.getRating(id);
Rev.getReview(id);
String name = request.getParameter("hname");
name=name.replaceAll("-", " ");
 //out.println(name); 
//String sessionId =null;

//sessionId = session.getId();

 %>

<!DOCTYPE html>
<html lang="en">
<head>
    <!--
        ===
        This comment should NOT be removed.

        Charisma v2.0.0

        Copyright 2012-2014 Muhammad Usman
        Licensed under the Apache License v2.0
        http://www.apache.org/licenses/LICENSE-2.0

        http://usman.it
        http://twitter.com/halalit_usman
        ===
    -->
    <meta charset="utf-8">
    <title>Free HTML5 Bootstrap Admin Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Charisma, a fully featured, responsive, HTML5, Bootstrap admin template.">
    <meta name="author" content="Muhammad Usman">

    <!-- The styles -->
    <link id="bs-css" href="css/bootstrap-cerulean.min.css" rel="stylesheet">

    <link href="css/charisma-app.css" rel="stylesheet">
    <link href='bower_components/fullcalendar/dist/fullcalendar.css' rel='stylesheet'>
    <link href='bower_components/fullcalendar/dist/fullcalendar.print.css' rel='stylesheet' media='print'>
    <link href='bower_components/chosen/chosen.min.css' rel='stylesheet'>
    <link href='bower_components/colorbox/example3/colorbox.css' rel='stylesheet'>
    <link href='bower_components/responsive-tables/responsive-tables.css' rel='stylesheet'>
    <link href='bower_components/bootstrap-tour/build/css/bootstrap-tour.min.css' rel='stylesheet'>
    <link href='css/jquery.noty.css' rel='stylesheet'>
     <link href='css/stylesheet.css' rel='stylesheet'>
    <link href='css/noty_theme_default.css' rel='stylesheet'>
    <link href='css/elfinder.min.css' rel='stylesheet'>
    <link href='css/elfinder.theme.css' rel='stylesheet'>
    <link href='css/jquery.iphone.toggle.css' rel='stylesheet'>
    <link href='css/uploadify.css' rel='stylesheet'>
    <link href='css/animate.min.css' rel='stylesheet'>

    <!-- jQuery -->
    <script src="bower_components/jquery/jquery.min.js"></script>

    <!-- The HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- The fav icon -->
    <link rel="shortcut icon" href="img/favicon.ico">
 <script type="text/javascript" src="../jchartfx.7.4.5649/js/jchartfx.system.js"></script>
   <script type="text/javascript" src="../jchartfx.7.4.5649/js/jchartfx.coreBasic.js"></script> 
      <script type="text/javascript" src="../jchartfx.7.4.5649/js/jchartfx.animation.js"></script>  
 <!-- Uncomment this section to add extended User Interaction capabilities, including the End-User Menu.
         The UI features require a jChartFX Plus license for deployment.
    <script type="text/javascript" src="jChartFX/jchartfx.userinterface.js"></script>
    <link rel="stylesheet" type="text/css" href="jchartfx.userinterface.css" />
    -->
        <script type="text/javascript" src="../jchartfx.7.4.5649/js/jchartfx.coreVector.js"></script>
   <script type="text/javascript" src="j../jchartfx.7.4.5649/js/chartfx.coreVector3d.js"></script>
   <script type="text/javascript" src="../jchartfx.7.4.5649/js/jchartfx.advanced.js"></script>
   <script type="text/javascript" src="../jchartfx.7.4.5649/js/jchartfx.axistrend.js"></script>

      <script type="text/javascript" src="../jchartfx.7.4.5649/js/jchartfx.animation.js"></script>  
     <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="//jquerycsvtotable.googlecode.com/files/jquery.csvToTable.js"></script>
    <link rel="stylesheet" type="text/css" href="../jchartfx.7.4.5649/styles/Attributes/jchartfx.attributes.css" />
    <link rel="stylesheet" type="text/css" href="../jchartfx.7.4.5649/styles/Attributes/jchartfx.palette.css" />
     <style>
            table {
                border-collapse: collapse;
                border: 2px black solid;
                font: 12px sans-serif;
            }

            td {
                border: 1px black solid;
                padding: 5px;
            }
        </style>
<script type="text/javascript" language="javascript">
    var chart1;
    var chart2;
    var chart3;
    
    	//alert("into jquery");
    	var xmlHttp;
    	var xmlHttp;
    	function showState(str) {
    		if (typeof XMLHttpRequest != "undefined") {
    			xmlHttp = new XMLHttpRequest();
    		} else if (window.ActiveXObject) {
    			xmlHtp = new ActiveXObject("Microsoft.XMLHTTP");
    		}
    		if (xmlHttp == null) {
    			alert("Browser does not support XMLHTTP Request");
    			return;
    		}
    	alert(str);
    		var url = "siteR_servlet.jsp";
    		url += "?count=" + str;
    	//alert(k);
    		xmlHttp.onreadystatechange = stateChange;
    		xmlHttp.open("GET", url, true);
    		xmlHttp.send(null);
    	}

    	function stateChange() {
    		if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
    			document.getElementById("ChartDiv1").style.display='block';
    			document.getElementById("block").innerHTML = xmlHttp.responseText;
    		
    		
    			//document.getElementById("arrow").style.display='BLOCK';
    		}
    	}


   
    function loadBarChart()
      {  
    
           chart1 = new cfx.Chart();
            chart1.getData().setSeries(1);
        
           var titles = chart1.getTitles();
           var title = new cfx.TitleDockable();
            var title2 = new cfx.TitleDockable();
            chart1.getAnimations().getLoad().setEnabled(true);
           
           if (titles.getCount() === 0) {
               
               title.setText("Overall Ratings");
               titles.add(title);
              
               title2.setText("for <%=name%>");
               titles.add(title2);
           } else {
               titles.clear();
               
               title.setText("Overall Rating");
               titles.add(title);
               
               title2.setText("for <%=name%>");
               titles.add(title2);
           }
           chart1.getAxisX().getTitle().setText("Overall Rating values");
           chart1.getAxisY().getTitle().setText("Count");
           // var series1 = chart1.getSeries().getItem(0);
            var series2 = chart1.getSeries().getItem(0);
            //series1.setGallery(cfx.Gallery.Lines);
            series2.setGallery(cfx.Gallery.Bar);
            <%String s2=Area.getRateCount(id).toString();
  		  System.out.println(s2);%>
            var data = [<%=s2%>];
           chart1.setDataSource(data);
            var divHolder = document.getElementById('ChartDiv');
        chart1.create(divHolder);            
      }
    function loadPieChart()
    {        
         chart2 = new cfx.Chart();
         var td;
         td = new cfx.TitleDockable();
         td.setText("Sentiment classification of Reviews for <%=name%>");
         chart2.getTitles().add(td);
         chart2.getLegendBox().setVisible(false);
         chart2.setGallery(cfx.Gallery.Pie);
         chart2.getView3D().setEnabled(true);
         chart2.getAnimations().getLoad().setEnabled(true);
         var data = chart2.getData();
     
         data.setItem(0, 1, (<%=Sentiments.getPos(id)%>));
         data.setItem(0, 2, (<%=Sentiments.getNeg(id)%>));
         <%
         //int line=Sentiments.getNeg(id);
         //String l=Integer.toString(line);
        // String[] arr=l.split("/");
         //for(String a:arr)
         //{
        	// String date=a.split(",")[0];
        	 //String val=a.split(",")[1];
         //}
         %>
     
         chart2.getPoints().getItem(1).setFillMode(cfx.FillMode.Gradient);
         chart2.getPoints().getItem(2).setFillMode(cfx.FillMode.Gradient);
        
         chart2.getAllSeries().getPointLabels().setVisible(true);

          var divHolder = document.getElementById('ChartDiv1');
      chart2.create(divHolder);            
    }
   function loadAreaChart()
   {
	   chart3 = new cfx.Chart();
	  
	   chart3.setGallery(cfx.Gallery.Lines);
	   PopulateCarProduction(chart3);
	   var titles = chart3.getTitles();
	   var title = new cfx.TitleDockable();
	   title.setText("Trend chart depicting timeline of review sentiment");
	   titles.add(title);

	   function PopulateCarProduction(chart3) {
		  <%String s=csv_parse.getDateCount(id).toString();
		  System.out.println(s);%>
		    var items = [<%=s%>];
	    
		    chart3.setDataSource(items);
		}
       var divHolder = document.getElementById('ChartDiv2');
   chart3.create(divHolder);
   }
</script>
</head>

<body onload="loadBarChart();loadPieChart();loadAreaChart();">
   <div class="navbar navbar-default" role="navigation">
<div class="navbar-inner">
<div class="navbar-header" style="width:50px;">
      <a class="navbar-brand" href="#" style="font-family:Arial;font-size:20px;"> Hotel of Interest</a>
    </div>
</div>
</div>
<div class="ch-container">
    <div class="row"  style="width:1420px;">


       
        <div id="content" class="col-lg-12 col-sm-12"  style="width:1420px;">
            <!-- content starts -->
            <div>
    <ul class="breadcrumb">
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#">Dashboard</a>
        </li>
    </ul>
</div>

<div class="row"  style="width:1420px;">

    <div class="box col-md-6"  >
        <div class="box-inner">
            <div class="box-header well">
                <h2><i class="glyphicon glyphicon-list-alt"></i> Overall</h2>
				<div class="box-icon">
                   
                    <a href="#" class="btn btn-minimize btn-round btn-default"><i
                            class="glyphicon glyphicon-chevron-up"></i></a>
                    <a href="#" class="btn btn-close btn-round btn-default"><i
                            class="glyphicon glyphicon-remove"></i></a>
                </div>
                
            </div>
            <div class="box-content">
            <div class="control-group">


       <div id="ChartDiv" style="width:650px;height:400px"></div>
<div id="block"></div>
        </div>
    </div>
    </div>
    </div>
      <div class="box col-md-6" >
        <div class="box-inner">
            <div class="box-header well">
                <h2><i class="glyphicon glyphicon-list-alt"></i> Count of positive and negative reviews</h2>
<div class="box-icon">
                   
                    <a href="#" class="btn btn-minimize btn-round btn-default"><i
                            class="glyphicon glyphicon-chevron-up"></i></a>
                    <a href="#" class="btn btn-close btn-round btn-default"><i
                            class="glyphicon glyphicon-remove"></i></a>
                </div>
                
            </div>
            <div class="box-content">
       <div id="ChartDiv1" style="width:650px;height:400px"></div>

        </div>
    </div>
</div>
</div>

<div class="row"  style="width:1420px;">
    <div class="box col-md-12" >
        <div class="box-inner">
            <div class="box-header well">
                <h2><i class="glyphicon glyphicon-list-alt"></i> Trend Curve</h2>

                <div class="box-icon">
                   
                    <a href="#" class="btn btn-minimize btn-round btn-default"><i
                            class="glyphicon glyphicon-chevron-up"></i></a>
                    <a href="#" class="btn btn-close btn-round btn-default"><i
                            class="glyphicon glyphicon-remove"></i></a>
                </div>
            </div>
            <div class="box-content">
                <div id="ChartDiv2" style="width:1370px;height:360px"></div>
            </div>
        </div>
    </div>

   

</div><!--/row-->
<div class="row"  style="width:1420px;">
<div class="box col-md-12">
<div class="box-inner">
<div class="box-header well" data-original-title="">
<h2><i class="glyphicon glyphicon-user"></i> Reviews</h2>
<div class="box-icon">
<a href="#" class="btn btn-setting btn-round btn-default"><i class="glyphicon glyphicon-cog"></i></a>
<a href="#" class="btn btn-minimize btn-round btn-default"><i class="glyphicon glyphicon-chevron-up"></i></a>
<a href="#" class="btn btn-close btn-round btn-default"><i class="glyphicon glyphicon-remove"></i></a>
</div>
</div>
<div id="tab" class="box-content">

<script src="http://d3js.org/d3.v3.min.js"></script> 
       

      <script type="text/javascript"charset="utf-8">

            d3.text("ReviewList100505.csv", function(data) {
            
                var parsedCSV = d3.csv.parseRows(data);

                var container = d3.select("#tab")
                    .append("table")

                    .selectAll("tr")
                        .data(parsedCSV).enter()
                        .append("tr")

                    .selectAll("td")
                        .data(function(d) { return d; }).enter()
                        .append("td")
                        .text(function(d) { return d; });
            });
        </script>
</div>
</div>
</div>
 
</div> 

<!-- chart libraries start -->
<script src="bower_components/flot/excanvas.min.js"></script>
<script src="bower_components/flot/jquery.flot.js"></script>
<script src="bower_components/flot/jquery.flot.pie.js"></script>
<script src="bower_components/flot/jquery.flot.stack.js"></script>
<script src="bower_components/flot/jquery.flot.resize.js"></script>
<!-- chart libraries end -->
<script src="js/init-chart.js"></script>

    <!-- content ends -->
    </div><!--/#content.col-md-0-->
</div><!--/fluid-row-->

   
</div><!--/.fluid-container-->

<!-- external javascript -->

<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

<!-- library for cookie management -->
<script src="js/jquery.cookie.js"></script>
<!-- calender plugin -->
<script src='bower_components/moment/min/moment.min.js'></script>
<script src='bower_components/fullcalendar/dist/fullcalendar.min.js'></script>
<!-- data table plugin -->
<script src='js/jquery.dataTables.min.js'></script>

<!-- select or dropdown enhancer -->
<script src="bower_components/chosen/chosen.jquery.min.js"></script>
<!-- plugin for gallery image view -->
<script src="bower_components/colorbox/jquery.colorbox-min.js"></script>
<!-- notification plugin -->
<script src="js/jquery.noty.js"></script>
<!-- library for making tables responsive -->
<script src="bower_components/responsive-tables/responsive-tables.js"></script>
<!-- tour plugin -->
<script src="bower_components/bootstrap-tour/build/js/bootstrap-tour.min.js"></script>
<!-- star rating plugin -->
<script src="js/jquery.raty.min.js"></script>
<!-- for iOS style toggle switch -->
<script src="js/jquery.iphone.toggle.js"></script>
<!-- autogrowing textarea plugin -->
<script src="js/jquery.autogrow-textarea.js"></script>
<!-- multiple file upload plugin -->
<script src="js/jquery.uploadify-3.1.min.js"></script>
<!-- history.js for cross-browser state change on ajax -->
<script src="js/jquery.history.js"></script>
<!-- application script for Charisma demo -->
<script src="js/charisma.js"></script>


</body>
</html>

