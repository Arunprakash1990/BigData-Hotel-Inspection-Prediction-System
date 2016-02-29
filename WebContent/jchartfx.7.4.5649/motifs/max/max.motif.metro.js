(function(){

var cfx = window.cfx;
var sfx = window.sfx;

cfx.motif = "metro";

var metroPictoGraph = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib"><DataTemplate.Resources><sys:String x:Key="ratio">0.72454</sys:String><sys:String x:Key="vertSpacing">0.1</sys:String><sys:String x:Key="horzSpacing">0.2</sys:String><sys:String x:Key="vertSpacingHive">0</sys:String><sys:String x:Key="horzSpacingHive">0.2</sys:String></DataTemplate.Resources><Viewbox ViewWidth="17.389" ViewHeight="24"><Grid><Path Stroke="{Binding Path=Stroke}" Fill="{Binding Path=Fill}" Reuse="true" Data="M5.5,0.5B6,0.5,9.234,10.562,0,360M20.201,16.171c-0.167-2.299-2.931-4.547-5.179-5.017c-1.117-0.093-1.872,2.206-4.521,2.036c-2.585-0.167-3.312-2.129-4.399-2.129l0,0c-2.782,0-4.621,2.555-5.042,5.11c0,0-0.61,2.729-0.556,4.558c0.023,0.795,0.174,1.42,0.556,1.575c0.662,0.269,18.469,0.256,19.142,0c0.203-0.077,0.283-0.664,0.297-1.446C20.53,19.042,20.201,16.171,20.201,16.171z" /></Grid></Viewbox></DataTemplate>';

var gaugeTemplates = sfx["gauge.templates"];

if (gaugeTemplates != undefined) {
    gaugeTemplates["Glow.fill"] = "0,#FFFFFF";

    gaugeTemplates.metroDashBorder = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                  '<DataTemplate.Resources>' +
                    '<Thickness x:Key="borderGap">8</Thickness>' +
                    '<sys:String x:Key="plotMargin">targetChart</sys:String>' +
                  '</DataTemplate.Resources>' +
                  '<Canvas Margin="4">' +
                    '<Border Fill="{Binding Path=Fill}" />' +
                    '<Border>' +
                        '<Border.Fill>' +
                            '<LinearGradientBrush StartPoint="0,0" EndPoint="1,0">' +
                                '<GradientStop Color="#10000000" Offset="0"/>' +
                                '<GradientStop Color="#10FFFFFF" Offset="1"/>' +
                            '</LinearGradientBrush>' +
                        '</Border.Fill>' +
                    '</Border>' +
                    '<Grid>' +
                      '<Grid.RowDefinitions>' +
                        '<RowDefinition Height="*"/>' +
                        '<RowDefinition Height="Auto"/>' +
                      '</Grid.RowDefinitions>' +
                      '<Canvas Margin="4,8,4,8" x:Name="targetChart"/>' +
                    '<Border Grid.Row="1" Margin="10,0,0,8" Background="#00FFFFFF" Height="20">' +
                        '<TextBlock Margin="8,0" Text="{Binding Path=Title}" FontSize="10" VerticalAlignment="Center" HorizontalAlignment="Left" Foreground="{Binding Class=DashboardTitle.fill}" FontFamily="{Binding Class=DashboardTitle.font-family}" />' +
                     '</Border>' +
                    '</Grid>' +
                  '</Canvas>' +
            '</DataTemplate>';

    gaugeTemplates.metroRadialDashBorder = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
        '<DataTemplate.Resources>' +
          '<Thickness x:Key="borderFactor">0.03</Thickness>' +
        '</DataTemplate.Resources>' +
        '<Viewbox ViewWidth="100" ViewHeight="100">' +
          '<Ellipse Width="100" Height="100" Stroke="{Binding Class=Glow.fill}" Opacity="0.5" StrokeThickness="3" />' +
        '</Viewbox>' +
      '</DataTemplate>';

    gaugeTemplates.metroRadialIndicator = "RadialIndicatorRounded";

    gaugeTemplates.metroRadialCap = "RadialCapPlain";

    gaugeTemplates.metroRadialGlare = '<DataTemplate/>';

    gaugeTemplates.metroLinearDashBorder = '<DataTemplate/>';

    gaugeTemplates.metroLinearGlare = '<DataTemplate/>';

    gaugeTemplates.metroLinearFiller = "LinearFillerSimple";

    gaugeTemplates.metroLinearBar = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
        '<Canvas Margin="-6">' +
          '<Border Fill="{Binding Path=Fill}" Stroke="{x:Null}" CornerRadius="2" />' +
          '<Border Fill="{x:Null}" StrokeThickness="2" Stroke="#131616" StartCorner="3" Segments="2" CornerRadius="2" />' +
          '<Border Fill="{x:Null}" StrokeThickness="3" Stroke="#282A2B" StartCorner="1" Segments="2" CornerRadius="2" />' +
          '</Canvas>' +
        '</DataTemplate>';

    gaugeTemplates["TipBorderDefault"] = '<DataTemplate xmlns:x="a"><DataTemplate.Resources><MultiplyConverter x:Key="multConverter"/></DataTemplate.Resources><Canvas Padding="12"><Border BorderBrush="#808080" BorderThickness="2" Background="{Binding Path=Fill}" ><DockPanel x:Name="container" Margin="8,9,8,3" Orientation="Vertical"><TextBlock Text="{Binding Path=Title}" FontSize="{Binding Path=FontSize, Converter={StaticResource multConverter},ConverterParameter=0.8}" Visible="{Binding Path=TitleVisible}" HorizontalAlignment="Right" FontWeight="Bold" Margin="3,0,3,0"/><Border Height="1" Stroke="{Binding Path=Foreground}" StrokeThickness="1" Margin="0,0,0,4" Visible="{Binding Path=TitleVisible}"/></DockPanel></Border></Canvas></DataTemplate>';

    gaugeTemplates.metroPictoGraph = metroPictoGraph;

    var gaugePalette = new cfx.gauge.Palette();
    gaugePalette.setColors([
        null,        // Dashboard Back
        "#242527",   // Dashboard Inside
        "#80FFFFFF", // Border Back
        "#1A1C1D",   // Border Inside
        "#A0FFFFFF", // Indicator
        null,        // Indicator Border
        "#FFFFFF",   // Filler
        null,        // Filler Border
        "#80FFFFFF", // Cap
        null,        // Cap Border
        "#80FFFFFF", // Scale
        "#60FFFFFF", // Bar Back
        null,        // Bar Border
        null,        // Bar Alternate
        "#40FFFFFF",   // Section Back 0
        null,        // Section Border 0
        null,        // Section Alternate 0
        "#60FFFFFF",   // Section Back 1
        null,        // Section Border 1
        null,        // Section Alternate 1
        "#90FFFFFF",   // Section Back 2
        null,        // Section Border 2
        null,        // Section Alternate 2
        "#40FFFFFF", // Tickmark
        "#40FFFFFF", // Tickmark Inside
        "#80FFFFFF", // Title
        "#80FFFFFF", // Title Docked
        "#80FFFFFF", // Caption
        "#A0FFFFFF", // Trend
        "#FFFFFF",   // Conditional Less
        null,        // Conditional Equal
        "#FFFFFF",    // Conditional Greater
        "#D0D0D0",   // ToolTipText
        "#202020",   // ToolTipBack
        "#D0D0D0",    // ToolTipBorder
        "#40FFFFFF",    // OffBack        
        "#40FFFFFF",  // EmptyFill
        "#40FFFFFF",  // EmptyBorder
        "#FFFFFF",   // Attribute0Fill       
        "#90FFFFFF",  // Attribute1Fill
        "#40FFFFFF",  // Attribute2Fill
        "#60FFFFFF",  // Attribute3Fill
        "#20FFFFFF",  // Attribute4Fill
        "#FFFFFF",   // Attribute0Stroke
        "#90FFFFFF",  // Attribute1Stroke
        "#40FFFFFF",  // Attribute2Stroke
        "#60FFFFFF",  // Attribute3Stroke
        "#20FFFFFF"  // Attribute4Stroke
    ]);

    cfx.gauge.Palette.setDefaultPalette(gaugePalette);
}


var chartTemplates = sfx["vector.templates"];

if (chartTemplates != undefined) {
    chartTemplates["AxisY_Text.fill"] = "0,#80FFFFFF";
    chartTemplates["Glow.fill"] = "0,#FFFFFF";

    chartTemplates.metroBorder = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                      '<DataTemplate.Resources>' +
                        '<sys:String x:Key="plotMargin">targetChart</sys:String>' +
                      '</DataTemplate.Resources>' +
                      '<Canvas Margin="4">' +
                        '<Border Fill="{Binding Path=Fill}"/>' +
                        '<Border>' +
                            '<Border.Fill>' +
                                '<LinearGradientBrush StartPoint="0,0" EndPoint="1,0">' +
                                    '<GradientStop Color="#10000000" Offset="0"/>' +
                                    '<GradientStop Color="#10FFFFFF" Offset="1"/>' +
                                '</LinearGradientBrush>' +
                            '</Border.Fill>' +
                        '</Border>' +
                        '<Grid>' +
                        '<Grid.RowDefinitions>' +
                            '<RowDefinition Height="*"/>' +
                            '<RowDefinition Height="Auto"/>' +
                        '</Grid.RowDefinitions>' +
                        '<Canvas Margin="8,8,8,8" x:Name="targetChart"/>' +
                        '<Border Grid.Row="1" Margin="10,0,0,8" Background="#00FFFFFF" Height="20">' +
                            '<TextBlock Margin="8,0" Text="{Binding Path=Title}" FontSize="10" VerticalAlignment="Center" HorizontalAlignment="Left" Foreground="{Binding Class=DashboardTitle.fill}" FontFamily="{Binding Class=DashboardTitle.font-family}" />' +
                        '</Border>' +
                        '</Grid>' +
                      '</Canvas>' +
                '</DataTemplate>';

    chartTemplates.metroLine = "LineBasic";
    chartTemplates.metroBar = "BarBasic";
    chartTemplates.metroGantt = "GanttBasic";
    chartTemplates.metroDoughnut = "DoughnutBasic";
    chartTemplates.metroPie = "PieBasic";
    chartTemplates.metroBubble = "BubbleBasic";
    chartTemplates.metroArea = "AreaBasic";
    chartTemplates.metroCurve = "CurveBasic";
    chartTemplates.metroCurveArea = "CurveAreaBasic";
    chartTemplates.metroPyramid = "PyramidBasic";
    chartTemplates["TipBorderDefault"] = '<DataTemplate xmlns:x="a"><DataTemplate.Resources><MultiplyConverter x:Key="multConverter"/></DataTemplate.Resources><Canvas Padding="12"><Border BorderBrush="#808080" BorderThickness="2" Background="{Binding Path=Fill}" ><DockPanel Margin="8,9,8,3" Orientation="Vertical"><DockPanel x:Name="container" Margin="0,0,0,3" Orientation="Vertical" /><Border Height="1" Stroke="{Binding Path=Foreground}" StrokeThickness="1" Margin="0,2,0,7" Visible="{Binding Path=TitleVisible}"/><TextBlock Text="{Binding Path=Title}" FontSize="{Binding Path=FontSize, Converter={StaticResource multConverter},ConverterParameter=1.1}" Visible="{Binding Path=TitleVisible}" HorizontalAlignment="Left" Margin="3,0,3,0"/></DockPanel></Border></Canvas></DataTemplate>';
    chartTemplates["TipContentDefault"] = '<DataTemplate xmlns:x="a"><DockPanel Orientation="Horizontal" Margin="3,2,6,2"><TextBlock Text="{Binding Path=SeriesT}" Margin="0,0,8,0"/><TextBlock Text="{Binding Path=Value}" FontWeight="Bold" HorizontalAlignment="Right" /></DockPanel></DataTemplate>';

    chartTemplates.metroPictoGraph = metroPictoGraph;

    var chartPalette = new cfx.Palette();
    chartPalette.setColors([
        "#FFFFFF",   // Series 0
        "#90FFFFFF", // Series 1
        "#40FFFFFF", // Series 2
        "#60FFFFFF", // Series 3
        "#20FFFFFF",   // Series 4
        "#88888888",   // Series 5
        "#E0E0E0E0",   // Series 6
        "#60E0E0E0",   // Series 7
        "#40000000",   // Series 8
        "#60000000",   // Series 9
        "#90000000",   // Series 10
        "#40777777",   // Series 11
        "#60777777",   // Series 12
        "#90777777",   // Series 13
        "#40444444",   // Series 14
        "#80444444",   // Series 15
		"#606060",   // Label 0
		"#80000000",   // Label 1
		"#80FFFFFF",   // Label 2
		"#80FFFFFF",   // Label 3
		"#80FFFFFF",   // Label 4
		"#80FFFFFF",   // Label 5
		"#80000000",   // Label 6
		"#80FFFFFF",   // Label 7
		"#80FFFFFF",   // Label 8
		"#80FFFFFF",   // Label 9
		"#80FFFFFF",   // Label 10
		"#80FFFFFF",   // Label 11
		"#80FFFFFF",   // Label 12
		"#80FFFFFF",   // Label 13
		"#80FFFFFF",   // Label 14
		"#80FFFFFF",   // Label 15
        "#242527",   // Background
        "#242527",   // AlternateBackground
        "#00000000", // InsideBackground
        "#80FFFFFF",   // Border
        "#80FFFFFF",   // AxesAndGridlines
        "#40FFFFFF",   // AxesAlternate
        "#FFFFFF",   // CustomGridLines
        "#20FFFFFF",   // AxisSections
        "#80FFFFFF",   // AxisLabels
        "#80FFFFFF",   // PointLabels
        "#00000000", // MarkerBorder
        "#80FFFFFF",   // TitlesFore
        "#00000000", // TitlesBack
        "#80FFFFFF",   // LegendText
        "#00000000", // LegendBackground
        "#00000000",   // DataBack
        "#80FFFFFF",   // DataFore
        "#20FFFFFF",   // DataBackAlternate
        "#80FFFFFF",   // DataForeAlternate
        "#00000000",   // DataTitlesBack
        "#80FFFFFF",   // DataTitlesFore
        "#A0FFFFFF",   // DataGridlines
        "#00000000",   // DataBackground
        "#D0D0D0",   // ToolTipText
        "#202020",   // ToolTipBack
        "#D0D0D0",   // ToolTipBorder
        "#80FFFFFF",   // InsideLabels
        "#40FFFFFF",  // EmptyFill
        "#40FFFFFF"  // EmptyBorder
    ]);
    cfx.Chart.setDefaultPalette(chartPalette);
}


var metro = function metro()
{
}

cfx.motifs.metro = metro;

metro.currItem = -1;
metro.fixedHueIndex = -1;
metro.availableHuesCount = 7;
metro.availableSaturationsCount = 4;
metro.useMultipleSaturations = false;

metro.nextBackColor = function metro$nextBackColor()
{
    var n, s;
    if (metro.fixedHueIndex == -1)
        n = (metro.currItem + 1) % metro.availableHuesCount;
    else {
        n = metro.fixedHueIndex;
        s = (metro.currItem + 1) % metro.availableSaturationsCount;
    }

    var back = "#FF0000";
 
    switch(n) {
        case 0:
            if (metro.useMultipleSaturations) {
                switch (s) {
                    case 0:
                        back = "#2571EB";
                        break;
                    case 1:
                        back = "#0047ba";
                        break;
                    case 2:
                        back = "#2d5089";
                        break;
                    case 3:
                        back = "#9fbceb";
                        break;
                }
            }
            else
                back = "#2571EB";
            break;
        case 1:
            if (metro.useMultipleSaturations) {
                switch (s) {
                    case 0:
                        back = "#1B6035";
                        break;
                    case 1:
                        back = "#117e3a";
                        break;
                    case 2:
                        back = "#439c65";
                        break;
                    case 3:
                        back = "#00bb46";
                        break;
                }
            }
            else
                back = "#1B6035";
            break;
        case 2:
            if (metro.useMultipleSaturations) {
                switch (s) {
                    case 0:
                        back = "#DA9216";
                        break;
                    case 1:
                        back = "#ad8032";
                        break;
                    case 2:
                        back = "#80683d";
                        break;
                    case 3:
                        back = "#534937";
                        break;
                }
            }
            else
                back = "#DA9216";
            break;
        case 3:
            if (metro.useMultipleSaturations) {
                switch (s) {
                    case 0:
                        back = "#88A927";
                        break;
                    case 1:
                        back = "#68880a";
                        break;
                    case 2:
                        back = "#aaca4e";
                        break;
                    case 3:
                        back = "#354700";
                        break;
                }
            }
            else
                back = "#88A927";
            break;
        case 4:
            if (metro.useMultipleSaturations) {
                switch (s) {
                    case 0:
                        back = "#8B0096";
                        break;
                    case 1:
                        back = "#731a7a";
                        break;
                    case 2:
                        back = "#aa4cb2";
                        break;
                    case 3:
                        back = "#d900ea";
                        break;
                }
            }
            else
                back = "#8B0096";
            break;
        case 5:
            if (metro.useMultipleSaturations) {
                switch (s) {
                    case 0:
                        back = "#139603";
                        break;
                    case 1:
                        back = "#267a1c";
                        break;
                    case 2:
                        back = "#58b24d";
                        break;
                    case 3:
                        back = "#19ea00";
                        break;
                }
            }
            else
                back = "#139603";
            break;
        case 6:
            if (metro.useMultipleSaturations) {
                switch (s) {
                    case 0:
                        back = "#3B1C81";
                        break;
                    case 1:
                        back = "#25076a";
                        break;
                    case 2:
                        back = "#563898";
                        break;
                    case 3:
                        back = "#9b88c5";
                        break;
                }
            }
            else
                back = "#3B1C81";
            break;
        default:
            break;
    }
 
    if (metro.fixedHueIndex == -1)
        metro.currItem = n;
    else
        metro.currItem = s;

    return back;
}

metro.useFixedHue = function metro$useFixedHue(hueIndex, useMultipleSaturations) {
    
    if (hueIndex >= 0 && hueIndex < metro.availableHuesCount) {
        metro.fixedHueIndex = hueIndex;
        metro.useMultipleSaturations = useMultipleSaturations;
    }
}

metro.getStyleInfo = function metro$global(args)
{
    var style = "";

    if (args !== undefined) {
        var t = args[0];
        if (t !== undefined) {
            style = t[0];
        }
    }

    var styleInfo = {};
    styleInfo.isGroup = false;
    styleInfo.name = style;
    styleInfo.isSingle = false;
    styleInfo.isBullet = false;
    styleInfo.sections = new Array();

    if (style != undefined) {
        style = style.toUpperCase();
        if (style.indexOf("SINGLE") >= 0) {
            styleInfo.isSingle = true;
            styleInfo.name = "";
        }

        if (style.indexOf("GROUP") >= 0) {
            styleInfo.isGroup = true;
            styleInfo.name = "";
            styleInfo.name = "";
        }

        if (style.indexOf("BULLET") >= 0) {
            styleInfo.isBullet = true;
            styleInfo.name = "";
        }

        if (style.indexOf("SECTIONS") >= 0) {
            var index, index2;
            var sections;

            index = style.indexOf("SECTIONS");
            index2 = style.indexOf(":", index);
            if (index2 > 0) {
                index = index2;
                index2 = style.indexOf("-", index);
                if (index2 >= 0)
                    sections = style.substring(index + 1, index2);
                else
                    sections = style.substring(index + 1, style.length);
                styleInfo.sections = sections.split(",", 100);
            }
            styleInfo.name = "";
        }
    }

    return styleInfo;
}

metro.global = function metro$global(gauge, args)
{
    var styleInfo = metro.getStyleInfo(args);

    if (!styleInfo.isGroup) {
        var back = metro.nextBackColor();
        var tag;
        if (metro.fixedHueIndex == -1)
            tag = "Border" + metro.currItem;
        else
            tag = "Border" + metro.fixedHueIndex;
        gauge.getDashboardBorder().setInsideColor(back);
        gauge.getBorder().setInsideColor(back);
        gauge.getDashboardBorder().setTag(tag);
        //gauge.getBorder().setTag(tag);
    }
 
    var scale = gauge.getMainScale();
    var ticks = scale.getTickmarks();
 
    ticks.getMedium().setVisible(false);

    gauge.setFont("9pt 'Segoe UI', 'Lucida Grande'");
    gauge.getToolTips().setFont("9pt 'Segoe UI', 'Lucida Grande'");

 
    return styleInfo;
}

metro.radial = function metro$radial(gauge, args)
{
    var styleInfo = metro.global(gauge, args);
 
    gauge.getDashboardBorder().setInsideGap(0.1);
    var scale = gauge.getMainScale();
    scale.setAllowHalves(false);
 
    if (styleInfo.name != null) {
        gauge.setStyle(styleInfo.name);
 
        if (styleInfo.name == "progress") {
            scale.getBar().setVisible(true);
        }
    }
}

metro.linear = function metro$linear(gauge, args)
{
    var styleInfo = metro.global(gauge, args);
 
    var scale = gauge.getMainScale();
    var bar = scale.getBar();
    var indicator = scale.getMainIndicator();
 
    bar.setVisible(false);
    indicator.setSize(0.2);
    indicator.setPosition(0.35);
 
    if (styleInfo.isGroup) {
        gauge.getBorder().setTemplate("<DataTemplate/>");
        gauge.getDashboardBorder().setTemplate("<DataTemplate/>");
    }

    if (styleInfo.isBullet) {
        scale.setThickness(0.8);
        scale.setPosition(0);
        indicator.setSize(0.25);
        indicator.setPosition(0.375);
        indicator.setTitle("Current");
        var target = new cfx.gauge.Marker();
        target.setSize(0.4);
        target.setPosition(0.5);
        target.setTitle("Target");
        target.setTemplate("MarkerThinRectangle");
        scale.getIndicators().add(target);
        gauge.getDefaultAttributes().setSectionThickness(0.5);
        gauge.getDefaultAttributes().setSectionPosition(0.25);
    }

    if (styleInfo.sections.length > 0) {
        var section;
        var from = 0;
        var to;
        for (var i = 0; i < styleInfo.sections.length; i++) {
            to = styleInfo.sections[i];
            section = new cfx.gauge.ScaleSection();
            section.setFrom(from);
            section.setTo(to);
            gauge.getMainScale().getSections().add(section);
            from = to;
        }
        gauge.getMainScale().setMax(to);
    }

}

metro.vert = function metro$vert(gauge, args)
{
    metro.linear(gauge, args);
}

metro.horz = function metro$horz(gauge, args)
{
    metro.linear(gauge, args);
}

metro.chart = function metro$chart(chart, args)
{
    var gallery = "";

    if (args !== undefined) {
        var t = args[0];
        if (t !== undefined) {
            gallery = t[0];
        }
    }

    if (gallery != undefined) {
        gallery = gallery.toUpperCase();

        if (gallery == "GROUP") {
            chart.getBorder().setTemplate('<DataTemplate/>');
        }
    }

    var yGrids = chart.getAxisY().getGrids();
    yGrids.getMajor().setVisible(false);
    yGrids.getMajor().setTickMark(cfx.TickMark.None);
    yGrids.getMinor().setVisible(false);
    yGrids.getMinor().setTickMark(cfx.TickMark.None);

    yGrids = chart.getAxisY2().getGrids();
    yGrids.getMajor().setVisible(false);
    yGrids.getMajor().setTickMark(cfx.TickMark.None);
    yGrids.getMinor().setVisible(false);
    yGrids.getMinor().setTickMark(cfx.TickMark.None);
 
    chart.setBackColor(metro.nextBackColor());
    var tag;
    if (metro.fixedHueIndex == -1)
        tag = "Border" + metro.currItem;
    else
        tag = "Border" + metro.fixedHueIndex;
    chart.getBorder().setTag(tag);
    chart.getAllSeries().getBorder().setEffect(cfx.BorderEffect.None);
    chart.getAllSeries().getBorder().setUseForLines(false);
    chart.getAllSeries().setMarkerStyle(cfx.MarkerStyle.Filled);
    chart.getAllSeries().setMarkerSize(4);
    chart.getAllSeries().getLine().setWidth(2);
    chart.getAxisX().getLine().setWidth(1);
    chart.setAxesStyle(cfx.AxesStyle.None);

    chart.setFont("9pt 'Segoe UI', 'Lucida Grande'");
    chart.getToolTips().setFont("9pt 'Segoe UI', 'Lucida Grande'");

	chart.getAllSeries().getStackedLabels().setFont("bold");
}

metro.border = function metro$border(border, args)
{
    border.setInsideColor(metro.nextBackColor());
    var tag;
    if (metro.fixedHueIndex == -1)
        tag = "Border" + metro.currItem;
    else
        tag = "Border" + metro.fixedHueIndex;
    border.setTag(tag);
}

metro.trend = function metro$border(trend, args)
{
    trend.getBorder().setInsideColor(metro.nextBackColor());
    var tag;
    if (metro.fixedHueIndex == -1)
        tag = "Border" + metro.currItem;
    else
        tag = "Border" + metro.fixedHueIndex;
    trend.getBorder().setTag(tag);
    trend.getSecondaryValues().setAlphaForeground(1);
    trend.getIndicator().setStyle(cfx.gauge.IndicatorStyle.ArrowVertical);
    trend.getSecondaryValues().setSeparatorWidth(0);

    var trendType = "";

    if (args !== undefined) {
        var t = args[0];
        if (t !== undefined) {
            trendType = t[0];
        }
    }

    if (trendType != undefined) {
        if (trendType.toUpperCase().indexOf("SINGLE") >= 0) {
            trend.getDelta().setVisible(false);
            trend.getPercentChange().setVisible(false);
            trend.getIndicator().setVisible(false);
        }

        if (trendType.toUpperCase().indexOf("GROUP") >= 0) {
            trend.getBorder().setTemplate("<DataTemplate/>");
        }
    }

}

metro.map = function metro$map(map, args) {
    map.setShowAdditionalLayers(false);
    map.setBackColor("#00000000");
}

metro.heatmap = function metro$heatmap(heatmap, args) {
    var gradients = heatmap.getGradientStops();
    gradients.getItem(0).setColor("#FFFFFF");
    gradients.getItem(1).setColor("#A0A0A0");
}

metro.equalizer = function metro$equalizer(equalizer, args) {
    var eqItem = new cfx.equalizer.EqualizerItem();
    eqItem.setColor("#A0FFFFFF");
    eqItem.setCount(2);
    equalizer.getTopItems().add(eqItem);
    eqItem = new cfx.equalizer.EqualizerItem();
    eqItem.setColor("#70FFFFFF");
    eqItem.setCount(1);
    equalizer.getTopItems().add(eqItem);

    equalizer.setOffColor("#10FFFFFF");
}

metro.pictograph = function metro$pictograph(pictograph, args) {
    pictograph.getBorder().setInsideColor(metro.nextBackColor());
    var tag;
    if (metro.fixedHueIndex == -1)
        tag = "Border" + metro.currItem;
    else
        tag = "Border" + metro.fixedHueIndex;
    pictograph.getBorder().setTag(tag);
}

metro.hideCaptions = function metro$hideCaptions()
{
    sfx["vector.templates"].metroBorder = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                  '<DataTemplate.Resources>' +
                    '<sys:String x:Key="plotMargin">2</sys:String>' +
                  '</DataTemplate.Resources>' +
                  '<Border Margin="4" Fill="{Binding Path=Fill}"/>' +
            '</DataTemplate>';

    sfx["gauge.templates"].metroDashBorder = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                  '<DataTemplate.Resources>' +
                    '<Thickness x:Key="borderGap">8</Thickness>' +
                  '</DataTemplate.Resources>' +
                  '<Border Margin="4" Fill="{Binding Path=Fill}"/>' +
            '</DataTemplate>';
}

})();

cfx.ToolTipAttributes.prototype.setLineMode = function ToolTipAttributes$setLineMode()
{
    var lineMode = new cfx.ToolTipLineAttributes();
    lineMode.getLine().setStyle(0);
    lineMode.setBorderTemplate('<DataTemplate xmlns:x="a"><DataTemplate.Resources><MultiplyConverter x:Key="multConverter"/></DataTemplate.Resources><Canvas Padding="{Binding Path=Padding}"><Border Canvas.Left="-1" Canvas.Top="0" Background="{Binding Path=Fill}" Opacity="0.85" Stroke="{Binding Path=Stroke}"><DockPanel x:Name="container" Orientation="Vertical" Margin="10,10,10,10"><TextBlock Text="{Binding Path=Title}" FontSize="{Binding Path=FontSize, Converter={StaticResource multConverter},ConverterParameter=1}" Visible="{Binding Path=TitleVisible}" HorizontalAlignment="Center" FontWeight="Normal" Margin="3,0,3,3" Foreground="{Binding Class=PointLabel.fill}"/><Border Height="1" Stroke="{Binding Path=Foreground}" StrokeThickness="1" Margin="0,2,0,7" Visible="{Binding Path=TitleVisible}"/></DockPanel></Border></Canvas></DataTemplate>');
    lineMode.setVerticalAlignment(0);
    lineMode.setY(0);
    lineMode.setAlignment(1);

    if (this.getTriggerMode() == 0)
        this.setTriggerMode(1);
    this.setMode(lineMode);
}