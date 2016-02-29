<!DOCTYPE html>
<html>
<meta charset="utf-8">
<head>
  <title>Hotel Inspection Dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="style.css"/>
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
</head>
<body>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"> Inspection Dashboard </a>
    </div>
    <div>
      <ul class="nav navbar-nav">  
      </ul>
	  
	  <div class="col-sm-3 col-md-3 pull-right">
        <form class="navbar-form pull-right" role="search">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" name="search-term" id="search-term">
            <div class="input-group-btn">
                <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
            </div>
        </div>
        </form>
        </div>
    </div>
  </div>
</nav>
<div class="col-md-8">
              <div class="box box-info">
                <div class="box-header with-border">
                  <h3 class="box-title">Hotels Priority List</h3>
                </div><!-- /.box-header -->
                <div class="box-body">
				
                  <div class="table-responsive">
                   
					<script src="http://d3js.org/d3.v3.min.js"></script>
					<script>
            d3.csv("list.csv", function(data) {
    
    var columns = ["hotel_id","hotel_name","hotel_URL","city"];

    var table = d3.select(".table-responsive").append("table"),
        
        tbody = table.append("tbody");

   
    var rows = tbody.selectAll("tr")
        .data(data)
        .enter()
        .append("tr");

    var cells = rows.selectAll("td")
        .data(function(row) {
            return columns.map(function(column) {
			console.log(row["hotel_id"]);
                return {column: column, id: row["hotel_id"], name: row["hotel_name"], url: row["hotel_URL"], c: row["city"]};
            });
        })
        .enter()
        .append("td")
            .html(function(d) 
			{ if(d.column == "hotel_name")
			{
			console.log(d.c);
			var name = d.name;
			name=name.split(" ").join("-")
			console.log(name);
			    return "<a href=NewFile.jsp?hid="+d.id+"&hname="+name+">"+d.name+"<a>"+" "+d.c;
				}});
});
        </script>
                  </div><!-- /.table-responsive -->
                </div><!-- /.box-body -->
				
                <div class="box-footer clearfix">
                  <a class="btn btn-sm btn-default btn-flat pull-right" href="javascript::;">View All Hotels</a>
                </div>
              </div><!-- /.box -->
			 </div> 
           <div class="col-md-8">
              <!-- MAP & BOX PANE -->
              <div class="box box-success">
                <div class="box-header with-border">
                  <h3 class="box-title">World Map</h3>
                </div><!-- /.box-header -->
                <div class="box-body no-padding">
                  <div class="row">
                    <div class="col-md-9 col-sm-8">
                      <div class="pad">
                        <script src="http://d3js.org/d3.v3.min.js"></script>
<script src="http://d3js.org/topojson.v0.min.js"></script>
<script src="http://d3js.org/queue.v1.min.js"></script>
<script src="http://maps.google.com/maps/api/js?sensor=true"></script>

<script>
var mapwidth = 1250, mapheight = 500;

var svg = d3.select(".pad").append("svg")
    .attr("width", mapwidth)
    .attr("height", mapheight);
	
var g = svg.append("g");
	
var zoomin = d3.behavior.zoom()
	.scaleExtent([1,6])
    .on("zoom", zoomfunc);
	
var geoprojection = d3.geo.mercator();

var geopath = d3.geo.path()
    .projection(geoprojection);
	
function zoomfunc() {
        g.attr("transform","translate("+ d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("circle").attr("d", geopath.projection(geoprojection));
        g.selectAll("path").attr("d", geopath.projection(geoprojection)); 
  };

 queue().defer(d3.json, "world.json").defer(d3.tsv, "world-country-names.tsv")
    .await(map);
  
function map(error, world, country_name) {
if (error) throw error;


 var total_countries = topojson.object(world, world.objects.countries).geometries,
      i = -1,
      n = total_countries.length;
	  
	  total_countries.forEach(function(d) { 
    var check = country_name.filter(function(n) { return d.id == n.id; })[0];
    if (typeof check === "undefined"){
      d.name = "Unknown";
    } else {
      d.name = check.name; 
    }
  });


g.selectAll("path")
      .data(total_countries)
	  .enter().append("path")
      .attr("d", geopath)
	  .attr("class", "countries").on("mouseover", function() {
  
            var display = d3.select(this);
				}).append("svg:title")
				.text(function(d,i){return d.name;});	
				
var radius = d3.scale.sqrt()
	.domain([0,50])
    .range([0,5]);
				
d3.csv("list.csv", function(error, data) {
if (error) throw error;

var newdata = d3.nest()
.key(function(d){return d.city; })
//.key(function(d){return d.gender;})
.rollup(function(d){
return {
city: d[0].city,
count: d.length,
lat: +d[0].latitude,
lng: +d[0].longitude
};
}).entries(data); 

var radius = d3.scale.sqrt()
.domain([0,10])
.range([0,20]);

    g.selectAll("pins")
       .data(newdata)
       .enter()
       .append("circle")
	   .attr("r", function(d,i){return radius(newdata[i].values.count);})
       .attr("transform", function(d,i) { return "translate(" + geoprojection([+newdata[i].values.lng,+newdata[i].values.lat]) + ")";})
	   .attr("class", "bubbles")
	   .on("mouseover", function() {
  
            var display = d3.select(this);
				}).append("svg:title")
				.text(function(d,i){return "Count: "+newdata[i].values.count+"\nLocation: "+newdata[i].values.city;});
});

};

svg.call(zoomin);

</script>
                        </div>
                    </div><!-- /.col -->
                    
                  </div><!-- /.row -->
                </div><!-- /.box-body -->
              </div><!-- /.box -->
</div>
</body>
</html>