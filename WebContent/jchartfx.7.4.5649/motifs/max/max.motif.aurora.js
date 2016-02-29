(function () {

var cfx = window.cfx;
var sfx = window.sfx;

cfx.motif = "aurora";

var auroraPictoGraph = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib"><DataTemplate.Resources><sys:String x:Key="ratio">0.31034</sys:String><sys:String x:Key="vertSpacingHive">-0.6</sys:String><sys:String x:Key="horzSpacingHive">0.3</sys:String></DataTemplate.Resources><Viewbox ViewWidth="9" ViewHeight="29"><Grid><Path Stroke="{Binding Path=Stroke}" Fill="{Binding Path=Fill}" Reuse="true" Data="M2.5,0.5B2.5,0.5,5,5,0,360M7.5,5.5H5H2.5C1.396,5.5,0.5,6.396,0.5,7.5v8c0,1.073,0.848,1.941,1.908,1.99L3.5,29.5h3l1.092-12.01C8.652,17.441,9.5,16.573,9.5,15.5V7.5C9.5,6.396,8.604,5.5,7.5,5.5z" ></Path></Grid></Viewbox></DataTemplate>';

var gaugeTemplates = sfx["gauge.templates"];

if (gaugeTemplates != undefined) {
    gaugeTemplates.auroraDashBorder = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                      '<DataTemplate.Resources>' +
                        '<sys:String x:Key="plotMargin">targetChart</sys:String>' +
                      '</DataTemplate.Resources>' +
                          '<Border Background="{Binding Path=Fill}">' +
                            '<Grid Margin="1">' +
                              '<Grid.RowDefinitions>' +
                                '<RowDefinition Height="Auto" MinHeight="10"/>' +
                                '<RowDefinition Height="*"/>' +
                                '<RowDefinition Height="Auto" MinHeight="32"/>' +
                                '<RowDefinition Height="Auto" MinHeight="4"/>' +
                              '</Grid.RowDefinitions>' +
                               '<Border Grid.Row="0" Height="1" Background="#33000000" />' +
                              '<Border Grid.Row="1" Background="{Binding Path=Fill}">' +
                                '<Canvas x:Name="targetChart" Margin="4"/>' +
                              '</Border>' +
                              '<Border Grid.Row="2" Background="{Binding Path=Fill}">' +
                                '<TextBlock Margin="21,8,21,8" Text="{Binding Path=Title}" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="{Binding Class=DashboardTitle.fill}" FontSize="{Binding Class=DashboardTitle.font-size}" FontFamily="{Binding Class=DashboardTitle.font-family}" />' +
                              '</Border>' +
                            '<Border Grid.Row="3" Height="4" Background="#33000000">' +
                            '</Border>' +
                            '</Grid>' +
                        '</Border>' +
                '</DataTemplate>';

    gaugeTemplates.auroraRadialDashBorder = "<DataTemplate/>";

    gaugeTemplates.auroraRadialIndicator = "NeedleRegularDrop";

    gaugeTemplates.auroraRadialCap = '<DataTemplate>' +
            '<Canvas>' +
                '<Ellipse Fill="{Binding Path=Fill}" />' +
                '<Ellipse Stroke="#11333333" StrokeThickness="3"/>' +
            '</Canvas>' +
        '</DataTemplate>';

    gaugeTemplates.auroraRadialGlare = '<DataTemplate/>';

    gaugeTemplates.auroraLinearDashBorder = '<DataTemplate/>';

    gaugeTemplates.auroraLinearGlare = '<DataTemplate/>';

    gaugeTemplates.auroraLinearFiller = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
            '<Canvas>' +
                '<Border Fill="{Binding Path=Fill}" CornerRadius="5" />' +
                '<Border CornerRadius="5" Stroke="#11333333" StrokeThickness="3"/>' +
            '</Canvas>' +
        '</DataTemplate>';

    gaugeTemplates.auroraRadialFiller = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
            '<Canvas>' +
                '<Path Data="{Binding Path=Geometry}" Fill="{Binding Path=Fill}" />' +
                '<Path Data="{Binding Path=Geometry}" Stroke="#11333333" StrokeThickness="3" />' +
            '</Canvas>' +
        '</DataTemplate>';

    gaugeTemplates.auroraRadialBar = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
    '<Canvas Margin="0">' +
        '<Path Data="{Binding Path=Geometry}" Fill="{Binding Path=Fill}" />' +
        '<Path Data="{Binding Path=Geometry}" Stroke="#11333333" StrokeThickness="3"/>' +
        '<Path Data="{Binding Path=Geometry}">' +
        '<Path.Fill>' +
                '<LinearGradientBrush StartPoint="0,0" EndPoint="0,1" >' +
                    '<GradientStop Color="#22000000" Offset="0"/>' +
                    '<GradientStop Color="#00000000" Offset="1"/>' +
                '</LinearGradientBrush>' +
        '</Path.Fill>' +
        '</Path>' +
        '</Canvas>' +
  '</DataTemplate>';

    gaugeTemplates.auroraLinearBar = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
        '<Canvas Margin="0">' +
          '<Border Fill="{Binding Path=Fill}" CornerRadius="5" />' +
          '<Border CornerRadius="5" Stroke="#11333333" StrokeThickness="3"/>' +
          '<Border CornerRadius="5">' +
            '<Border.Fill>' +
                '<LinearGradientBrush StartPoint="0,0" EndPoint="0,1" >' +
                    '<GradientStop Color="#22000000" Offset="0"/>' +
                    '<GradientStop Color="#00000000" Offset="1"/>' +
                '</LinearGradientBrush>' +
            '</Border.Fill>' +
          '</Border>' + 
          '</Canvas>' +
        '</DataTemplate>';

    gaugeTemplates["TipBorderDefault"] = '<DataTemplate xmlns:x="a"><DataTemplate.Resources><MultiplyConverter x:Key="multConverter"/><Thickness x:Key="padding">10</Thickness></DataTemplate.Resources><Canvas Padding="{Binding Path=Padding}"><Border BorderBrush="{Binding Path=Stroke}" BorderThickness="2" Background="{Binding Class=MarkerHollow.fill}" Opacity="0.95" CornerPercent="0.4" CornerRadius="5" Padding="4,6,4,2"><DockPanel x:Name="container" Orientation="Vertical"><TextBlock Text="{Binding Path=Title}" FontSize="{Binding Path=FontSize, Converter={StaticResource multConverter},ConverterParameter=1.1}" Visible="{Binding Path=TitleVisible}" HorizontalAlignment="Center" Margin="3,0,3,0" Foreground="{Binding Class=DashboardTitle.fill}"/><Border Height="1" Stroke="{Binding Class=AxisX_Line.stroke}" StrokeThickness="1" Margin="0,0,0,4" Visible="{Binding Path=TitleVisible}"/></DockPanel></Border></Canvas></DataTemplate>';
    gaugeTemplates["TipContentDefault"] = '<DataTemplate xmlns:x="a"><DockPanel Orientation="Horizontal" Margin="3,0,3,0"><TextBlock Text="{Binding Path=ValueTitle}" Foreground="{Binding Class=AxisY_Text.fill}" Margin="0,0,8,0"/><TextBlock Text="{Binding Path=Value}" FontWeight="Bold" HorizontalAlignment="Right" Foreground="{Binding Class=AxisY_Text.fill}" /></DockPanel></DataTemplate>';
    
    gaugeTemplates.auroraPictoGraph = auroraPictoGraph;

    var gaugePalette = new cfx.gauge.Palette();
    gaugePalette.setColors([
        "#20CFB6",   // Dashboard Back
        "#373A41",   // Dashboard Inside
        "#20CFB6",   // Border Back
        "#373A41",   // Border Inside
        "#329287",   // Indicator
        "#266E66",   // Indicator Border
        "#329287",   // Filler
        "#266E66",        // Filler Border
        "#626364",   // Cap
        null,   // Cap Border
        "#AAAFB9",   // Scale
        "#2F3238",   // Bar Back 
        "#151619",   // Bar Border 
        null,   // Bar Alternate 
        "#E04E61",   // Section Back 0
        "#A83B49",   // Section Border 0
        null,   // Section Alternate 0
        "#E9EA52",   // Section Back 1
        "#AFB03E",   // Section Border 1
        null,   // Section Alternate 1
        "#65C773",   // Section Back 2
        "#4C9657",    // Section Border 2
        null,    // Section Alternate 2
        "#C0C0C0",   // Tickmark
        "#C0C0C0",   // Tickmark Inside
        "#868A8E",   // Title
        "#868A8E",   // Title Docked
        "#808080",   // Caption
        "#AAAFB9",   // Trend
        "#E04E61",   // Conditional Less
        "#E9EA52",        // Conditional Equal
        "#65C773",   // Conditional Greater
        "#868A8E",   // ToolTipText
        "#26292D",   // ToolTipBack
        "#202327",    // ToolTipBorder
        "#234742",    // OffBack        
        "#5E6267",  // EmptyFill
        "#3A3C3F",  // EmptyBorder
        "#329287",   // Attribute0Fill       
        "#477EA5",  // Attribute1Fill
        "#75AE50",  // Attribute2Fill
        "#50525D",  // Attribute3Fill
        "#965994",  // Attribute4Fill
        "#266E66",   // Attribute0Stroke
        "#365F7C",  // Attribute1Stroke
        "#58833C",  // Attribute2Stroke
        "#3C3E46",  // Attribute3Stroke
        "#71436F"  // Attribute4Stroke

    ]);

    cfx.gauge.Palette.setDefaultPalette(gaugePalette);
}


var chartTemplates = sfx["vector.templates"];

if (chartTemplates != undefined) {
    chartTemplates["DashboardTitle.fill"] = "0,#868A8E";
    chartTemplates["DashboardTitle.font-family"] = "1,'Roboto', sans-serif";
    chartTemplates["DashboardTitle.font-size"] = "2,11";
    chartTemplates["AxisY_Text.fill"] = "0,#626364";

    chartTemplates.auroraBorder = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                      '<DataTemplate.Resources>' +
                        '<sys:String x:Key="plotMargin">targetChart</sys:String>' +
                        '<Thickness x:Key="externalMargin">16</Thickness>' +
                        '<Thickness x:Key="internalRectMargin">0</Thickness>' +
						'<Thickness x:Key="uiMargin">6,6,0,0</Thickness>' +
                        '<DataTemplate x:Key="internalRect">' +
                          '<Border CornerRadius="6" Background="{Binding Path=Fill}" BorderBrush="{Binding Path=Stroke}" CornerPercent="0.5" />' +
                        '</DataTemplate>' +
                        '<DataTemplate x:Key="internal">' +
                          '<Line Stroke="{Binding Path=Stroke}" X1="{Binding Path=X1}" X2="{Binding Path=X2}" Y1="{Binding Path=Y1}" Y2="{Binding Path=Y2}"/>' +
                        '</DataTemplate>' +
                      '</DataTemplate.Resources>' +
                      '<Border Background="{Binding Path=Fill}">' +
                          '<Grid Margin="1">' +
                            '<Grid.RowDefinitions>' +
                            '<RowDefinition Height="Auto" MinHeight="10"/>' +
                              '<RowDefinition Height="*"/>' +
                              '<RowDefinition Height="Auto" MinHeight="32"/>' +
                              '<RowDefinition Height="Auto" MinHeight="4"/>' +
                            '</Grid.RowDefinitions>' +
                            '<Border Grid.Row="0" Height="1" Background="#33000000" />' +
                            '<Border Grid.Row="1" Background="{Binding Path=Fill}">' +
                                '<Canvas x:Name="targetChart" Margin="20,0,20,0"/>' +
                            '</Border>' +
                            '<Border Grid.Row="2" Background="{Binding Path=Fill}">' +
                                '<TextBlock Margin="21,8,21,8" Text="{Binding Path=Title}" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="{Binding Class=DashboardTitle.fill}" FontSize="{Binding Class=DashboardTitle.font-size}" FontFamily="{Binding Class=DashboardTitle.font-family}" />' +
                            '</Border>' +
                              '<Border Grid.Row="3" Height="4" Background="#33000000">' +
                            '</Border>' +
                          '</Grid>' +
                      '</Border>' +
                '</DataTemplate>';

    chartTemplates.auroraBar = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
            '<Canvas>' +
                '<Border Fill="{Binding Path=Fill}" CornerRadius="5" />' +
                '<Border CornerRadius="5" Stroke="#11333333" StrokeThickness="3"/>' +
            '</Canvas>' +
        '</DataTemplate>';

    chartTemplates.auroraGantt = chartTemplates.auroraBar;

    chartTemplates.auroraArea = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                  '<DataTemplate.Resources>' +
                    '<sys:Double x:Key="cfxDefStrokeThickness">3</sys:Double>' +
                  '</DataTemplate.Resources>' +
                  '<Canvas>' +
                    '<Polygon Points="{Binding Path=PointsPolygon}" Fill="{Binding Path=Fill}" />' +
                    '<Polygon Points="{Binding Path=PointsPolygon}" Stroke="#11333333" StrokeThickness="3" />' +
                  '</Canvas>' +
          '</DataTemplate>';

    chartTemplates.auroraLine = "LineBasic";

    chartTemplates.auroraCurve = "CurveBasic";

    chartTemplates.auroraCurveArea = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
            '<Canvas>' +
                '<Path Data="{Binding Path=Geometry}" Fill="{Binding Path=Fill}" />' +
                '<Path Data="{Binding Path=Geometry}" Stroke="#11333333" StrokeThickness="3"/>' +
            '</Canvas>' +
    '</DataTemplate>';

    chartTemplates.auroraBubble = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
            '<Canvas>' +
                '<Ellipse Fill="{Binding Path=Fill}" />' +
                '<Ellipse Stroke="#11333333" StrokeThickness="3"/>' +
            '</Canvas>' +
    '</DataTemplate>';

    chartTemplates.auroraOverlayBubble = chartTemplates.auroraBubble;

    chartTemplates.auroraPyramid = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
        '<Canvas>' +
            '<Polygon Points="{Binding Path=PointsPolygon}" Fill="{Binding Path=Fill}" Stroke="{Binding Path=Stroke}" StrokeThickness="{Binding Path=StrokeThickness}" />' +
            '<Polygon Points="{Binding Path=PointsPolygon}" Stroke="#11333333" StrokeThickness="3" />' +
        '</Canvas>' +
    '</DataTemplate>';

    chartTemplates.auroraFunnel = chartTemplates.auroraPyramid;

    chartTemplates.auroraPie = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
        '<Canvas>' +
            '<Path Data="{Binding Path=Geometry}" Fill="{Binding Path=Fill}" />' +
            '<Path Data="{Binding Path=Geometry}" Stroke="#11333333" StrokeThickness="3"/>' +
        '</Canvas>' +
    '</DataTemplate>';

    chartTemplates.auroraDoughnut = chartTemplates.auroraPie;

    chartTemplates.auroraTreeMap = chartTemplates.auroraBar;

    chartTemplates.auroraHeatMap = chartTemplates.auroraBar;

    chartTemplates.auroraDensity = '<DataTemplate xmlns:x="a">' +
            '<Canvas>' +
                '<Border Fill="{Binding Path=Fill}" CornerRadius="5"/>' +
                '<Border Stroke="#11333333" StrokeThickness="1" CornerRadius="5"/>' +
            '</Canvas>' +
    '</DataTemplate>';

    chartTemplates.auroraSparklineLine = chartTemplates.auroraLine;

    chartTemplates.auroraSparklineBar = chartTemplates.auroraBar;

    chartTemplates.auroraSparklineArea = chartTemplates.auroraArea;

    chartTemplates.auroraSparklineCurve = chartTemplates.auroraCurve;

    chartTemplates.auroraSparklineCurveArea = chartTemplates.auroraCurveArea;

    chartTemplates.auroraBullet = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                '<DataTemplate.Resources>' +
                  '<DataTemplate x:Key="templateLine">' +
                    '<Line X1="{Binding Path=X1}" X2="{Binding Path=X2}" Y1="{Binding Path=Y1}" Y2="{Binding Path=Y2}" Stroke="{Binding Path=Stroke}" StrokeThickness="3" />' +
                  '</DataTemplate>' +
                '</DataTemplate.Resources>' +
                '<Canvas>' +
                    '<Border Fill="{Binding Path=Fill}" CornerRadius="5"/>' +
                    '<Border Stroke="#11333333" StrokeThickness="1" CornerRadius="5"/>' +
                '</Canvas>' +
                '</DataTemplate>';

    chartTemplates.auroraEqualizer = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                '<DataTemplate.Resources>' +
                    '<DataTemplate x:Key="off">' +
                        '<Border Opacity="{Binding Path=Opacity}" Background="{Binding Path=Fill}" BorderBrush="#11333333" BorderThickness="1" CornerRadius="2" CornerPercent="1" />' +
                    '</DataTemplate>' +
                '</DataTemplate.Resources>' +
                '<Canvas>' +
                    '<Border Opacity="{Binding Path=Opacity}" Background="{Binding Path=Fill}" CornerRadius="2" CornerPercent="1" />' +
                    '<Border Opacity="{Binding Path=Opacity}" BorderBrush="#11333333" BorderThickness="1" CornerRadius="2" CornerPercent="1" />' +
                '</Canvas>' +
        '</DataTemplate>';

    chartTemplates.auroraRose = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                  '<DataTemplate.Resources>' +
                    '<sys:Double x:Key="cfxDefStrokeThickness">3</sys:Double>' +
                  '</DataTemplate.Resources>' +
                  '<Canvas>' +
                    '<Path Data="{Binding Path=Geometry}" Fill="{Binding Path=Fill}" />' +
                    '<Path Data="{Binding Path=Geometry}" Stroke="#11333333" StrokeThickness="3"/>' +
                  '</Canvas>' +
          '</DataTemplate>';

    chartTemplates.auroraMarker1 = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
    '<Border Background="{Binding Path=Fill}" BorderBrush="{Binding Path=Stroke}" BorderThickness="{Binding Path=StrokeThickness}" CornerRadius="5" />' +
'</DataTemplate>';

    chartTemplates["TipBorderDefault"] = '<DataTemplate xmlns:x="a"><DataTemplate.Resources><MultiplyConverter x:Key="multConverter"/><Thickness x:Key="padding">10</Thickness></DataTemplate.Resources><Canvas Padding="{Binding Path=Padding}"><Border BorderBrush="{Binding Path=ItemFillS}" BorderThickness="2" Background="{Binding Class=MarkerHollow.fill}" Opacity="0.95" CornerPercent="0.4" CornerRadius="5" Padding="4,6,4,2"><DockPanel x:Name="container" Orientation="Vertical"><TextBlock Text="{Binding Path=Title}" FontSize="{Binding Path=FontSize, Converter={StaticResource multConverter},ConverterParameter=1.1}" Visible="{Binding Path=TitleVisible}" HorizontalAlignment="Center" Margin="3,0,3,0" Foreground="{Binding Class=DashboardTitle.fill}"/><Border Height="1" Stroke="{Binding Class=AxisX_Line.stroke}" StrokeThickness="1" Margin="0,0,0,4" Visible="{Binding Path=TitleVisible}"/></DockPanel></Border></Canvas></DataTemplate>';
    chartTemplates["TipContentDefault"] = '<DataTemplate xmlns:x="a"><DockPanel Orientation="Horizontal" Margin="3,2,3,1"><TextBlock Text="{Binding Path=SeriesT}" Foreground="{Binding Path=ItemFill}" Margin="0,0,8,0"/><Switch Property="{Binding Path=CurrSeries}"><TextBlock Text="{Binding Path=Value}" HorizontalAlignment="Right" FontWeight="Bold" Foreground="{Binding Class=AxisY_Text.fill}" Switch.Value="1" /><TextBlock Text="{Binding Path=Value}" HorizontalAlignment="Right" Foreground="{Binding Class=AxisY_Text.fill}"/></Switch></DockPanel></DataTemplate>';
    chartTemplates["TipContentPercent"] = '<DataTemplate xmlns:x="a"><DockPanel Orientation="Vertical" Margin="3,0,3,3"><Switch Property="{Binding Path=CurrSeries}"><TextBlock Text="{Binding Path=SeriesT}" Foreground="{Binding Path=ItemFill}" FontWeight="Bold" Switch.Value="1" /><TextBlock Text="{Binding Path=SeriesT}" Foreground="{Binding Path=ItemFill}"/></Switch><DockPanel Orientation="Horizontal"><TextBlock Text="{Binding Path=Macro%v out of %t}" Foreground="{Binding Class=AxisY_Text.fill}"/><TextBlock Margin="6,0,0,0" Text="{Binding Path=Macro(%p%%)}" FontWeight="Bold" HorizontalAlignment="Right" Foreground="{Binding Class=AxisY_Text.fill}"/></DockPanel></DockPanel></DataTemplate>';
    chartTemplates["TipContentDefaultX"] = '<DataTemplate xmlns:x="a"><Grid Margin="3,0,3,6"><Grid.ColumnDefinitions><ColumnDefinition Width="Auto"/><ColumnDefinition Width="Auto"/></Grid.ColumnDefinitions><Grid.RowDefinitions><RowDefinition Height="Auto"/><RowDefinition Height="Auto"/></Grid.RowDefinitions><TextBlock Grid.Row="0" Grid.Column="0" Text="{Binding Path=SeriesTX}" Foreground="{Binding Path=ItemFill}" VerticalAlignment="Center" Margin="0,1,12,2"/><TextBlock Grid.Row="0" Grid.Column="1" Text="{Binding Path=ValueX}" FontWeight="Bold" HorizontalAlignment="Right" VerticalAlignment="Center" Foreground="{Binding Class=AxisY_Text.fill}" Margin="0,1,0,2"/><TextBlock Grid.Row="1" Grid.Column="0" Text="{Binding Path=SeriesTY}" Foreground="{Binding Path=ItemFill}" VerticalAlignment="Center" Margin="0,1,12,2"/><TextBlock Grid.Row="1" Grid.Column="1" Text="{Binding Path=Value}" FontWeight="Bold" HorizontalAlignment="Right" VerticalAlignment="Center" Foreground="{Binding Class=AxisY_Text.fill}" Margin="0,1,0,2" /></Grid></DataTemplate>';

    chartTemplates.auroraPictoGraph = auroraPictoGraph;

    var chartPalette = new cfx.Palette();
    chartPalette.setColors([
        "#329287",   // Series 0
        "#477EA5",   // Series 1
        "#75AE50",   // Series 2
        "#50525D",   // Series 3
        "#965994",   // Series 4
        "#65c773",   // Series 5
        "#5abec7",   // Series 6
        "#ce9884",   // Series 7
        "#5f6775",   // Series 8
        "#e9ea52",   // Series 9
        "#e04e61",   // Series 10
        "#6fe4c8",   // Series 11
        "#eca63f",   // Series 12
        "#99d0a0",   // Series 13
        "#ce8fbe",   // Series 14
        "#8dc3e0",   // Series 15
        "#53F3E1",   // Label0
        "#76D2FF",   // Label1
        "#C3FF85",   // Label2
        "#85889B",   // Label3
        "#FA94F6",   // Label4
        "#264B2B",   // Label5
        "#22474B",   // Label6
        "#4D3931",   // Label7
        "#9EABC3",   // Label8
        "#57581F",   // Label9
        "#541D24",   // Label10
        "#2A554B",   // Label11
        "#583E18",   // Label12
        "#394E3C",   // Label13
        "#4D3647",   // Label14
        "#354954",   // Label15
        "#373A41",   // Background
        "#373A41",   // AlternateBackground
        "#00000000", // InsideBackground
        "#20CFB6",   // Border
        "#313439",   // AxesAndGridlines
        "#3D4148",   // AxesAlternate
        "#848F93",   // CustomGridLines
        "#5B6472",   // AxisSections
        "#626364",   // AxisLabels
        "#626364",   // PointLabels
        "#00000000", // MarkerBorder
        "#868A8E",   // TitlesFore
        "#00000000", // TitlesBack
        "#626364",   // LegendText
        "#00000000", // LegendBackground
        "#373A41",   // DataBack
        "#626364",   // DataFore
        "#3D4148",   // DataBackAlternate
        "#727374",   // DataForeAlternate
        "#313439",   // DataTitlesBack
        "#868A8E",   // DataTitlesFore
        "#313439",   // DataGridlines
        "#373A41",   // DataBackground
        "#868A8E",   // ToolTipText
        "#26292D",   // ToolTipBack
        "#202327",   // ToolTipBorder
		"#626364",	 // LabelInside
        "#5E6267",  // EmptyFill
        "#3A3C3F"  // EmptyBorder
    ]);

    cfx.Chart.setDefaultPalette(chartPalette);
}

var aurora = function aurora()
{
}

cfx.motifs.aurora = aurora;

aurora.getStyleInfo = function aurora$global(args)
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

aurora.global = function aurora$global(gauge) {
    gauge.setFont("8pt 'Roboto', sans-serif");
}

aurora.radial = function aurora$radial(gauge, args)
{
    aurora.global(gauge);
 
    var styleInfo = aurora.getStyleInfo(args);
 
    if (styleInfo.name != null)
        gauge.setStyle(styleInfo.name);

    var mainScale = gauge.getMainScale();
    var mainIndicator = gauge.getMainIndicator();

    if (styleInfo.name == "progress") {
        mainScale.setThickness(1);
        mainScale.setPosition(0);
        var bar = mainScale.getBar();
        bar.setVisible(true);
        bar.setTemplate(gaugeTemplates.auroraRadialBar);
        bar.setThickness(0.25);
 
        var tickmarks = mainScale.getTickmarks();
        var major = tickmarks.getMajor();
        major.setVisible(true);
        major.setWidth(0.01);
        major.setSize(0.04);
        major.setStyle(cfx.gauge.TickmarkStyle.Line);
        major.setPosition(0.03);
        mainScale.setAlignment(cfx.StringAlignment.Near);
        mainScale.setStartAngle(130);
        mainScale.setSweepAngle(280);
        
        var filler = new cfx.gauge.Filler();
        filler.setTemplate(gaugeTemplates.auroraRadialFiller);
        filler.setPosition(0.25);
        filler.setSize(0.25);
        gauge.setMainIndicator(filler);
    }
    else {
        mainScale.setThickness(0.6);
        mainScale.setPosition(0);
        mainScale.setAllowHalves(false);
        var bar = mainScale.getBar();
        bar.setVisible(true);
        bar.setTemplate(gaugeTemplates.auroraRadialBar);
        bar.setThickness(0.23);
        bar.setPosition(.34);

        var tickmarks = mainScale.getTickmarks();
        var major = tickmarks.getMajor();
        major.setVisible(true);
        major.setWidth(0.01);
        major.setSize(0.02);
        major.setStyle(cfx.gauge.TickmarkStyle.Line);
        major.setPosition(0);
        mainScale.setAlignment(cfx.StringAlignment.Near);

        var cap = mainScale.getCap();
        cap.setSize(0.3);

        mainScale.setStartAngle(140);
        mainScale.setSweepAngle(260);

        mainIndicator.setSize(0.9);
        mainIndicator.setPosition(0.75);

        tickmarks.getMedium().setVisible(false);
        var defaultAttributes = gauge.getDefaultAttributes();
        defaultAttributes.setSectionPosition(0.275);
        defaultAttributes.setSectionThickness(0.01);
    }
}

aurora.linear = function aurora$linear(gauge, args)
{
    aurora.global(gauge);
    var scale = gauge.getMainScale();
    var bar = scale.getBar();

    bar.setVisible(true);
    bar.setPosition(0.25);
    
    scale.setThickness(0.8);
    scale.setAlignment(cfx.StringAlignment.Near);

    var tickmarks = scale.getTickmarks();
    var major = tickmarks.getMajor();
    major.setVisible(true);
    major.setSize(0.1);
    major.setStyle(cfx.gauge.TickmarkStyle.Line);
    major.setWidth(0.025);
    major.setPosition(0.75);
    tickmarks.getMedium().setVisible(false);

    var mainIndicator = gauge.getMainIndicator();
    mainIndicator.setSize(0.35);
    mainIndicator.setPosition(0.325);

    bar.setTemplate(gaugeTemplates.auroraLinearBar);

    scale.setAllowHalves(false);

    gauge.getDefaultAttributes().setRepeaterPosition(0.5);

    var styleInfo = aurora.getStyleInfo(args);
 
    if (styleInfo.isGroup) {
        gauge.getBorder().setTemplate("<DataTemplate/>");
        gauge.getDashboardBorder().setTemplate("<DataTemplate/>");
    }

    if (styleInfo.isBullet) {
        scale.setThickness(0.8);
        scale.setPosition(0);
        mainIndicator.setSize(0.25);
        mainIndicator.setPosition(0.375);
        mainIndicator.setTitle("Current");
        var target = new cfx.gauge.Marker();
        target.setSize(0.4);
        target.setPosition(0.5);
        target.setTitle("Target");
        var targetTemplate = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib"><DataTemplate.Resources><sys:String x:Key="ratio">0.1</sys:String></DataTemplate.Resources><Viewbox ViewWidth="25" ViewHeight="50"><Grid><Canvas><Border Fill="{Binding Path=Fill}" CornerRadius="5"/><Border Stroke="#11333333" StrokeThickness="2" CornerRadius="5"/></Canvas></Grid></Viewbox></DataTemplate>';
        target.setTemplate(targetTemplate);
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

aurora.vert = function aurora$vert(gauge, args)
{
    aurora.linear(gauge, args);
}

aurora.horz = function aurora$horz(gauge, args)
{
    aurora.linear(gauge, args);
    gauge.getMainScale().setThickness(0.9);
}

aurora.chart = function aurora$chart(chart, args)
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
    yGrids.getMajor().setTickMark(cfx.TickMark.Cross);
    yGrids.getMinor().setTickMark(cfx.TickMark.None);

    yGrids = chart.getAxisY2().getGrids();
    yGrids.getMajor().setTickMark(cfx.TickMark.Cross);
    yGrids.getMinor().setTickMark(cfx.TickMark.None);
 
    var xGrids = chart.getAxisX().getGrids();
    xGrids.getMinor().setTickMark(cfx.TickMark.None);
    xGrids.getMajor().setTickMark(cfx.TickMark.Outside);

    xGrids.getMajor().setStyle(xGrids.getMajor().getStyle() | cfx.AxisStyles.Centered);

    chart.getAxisX().getLine().setWidth(2);
    chart.getAllSeries().getBorder().setUseForLines(false);
    chart.getAxisX().getGrids().getMajor().setTickMark(cfx.TickMark.Outside);
    chart.getAllSeries().setMarkerShape(cfx.MarkerShape.Rect);

    chart.setFont("8pt 'Roboto', sans-serif");
	  chart.getAllSeries().getStackedLabels().setFont("bold");
}

aurora.map = function aurora$map(map, args) {
    map.setShowAdditionalLayers(false);
}

aurora.heatmap = function aurora$heatmap(heatmap, args) {
    var gradients = heatmap.getGradientStops();
    gradients.getItem(0).setColor("#329287");
    gradients.getItem(1).setColor("#75AE50");
}

aurora.equalizer = function aurora$equalizer(equalizer, args) {
    var eqItem = new cfx.equalizer.EqualizerItem();
    eqItem.setColor("#477EA5");
    eqItem.setCount(2);
    equalizer.getTopItems().add(eqItem);
    eqItem = new cfx.equalizer.EqualizerItem();
    eqItem.setColor("#75AE50");
    eqItem.setCount(1);
    equalizer.getTopItems().add(eqItem);

    equalizer.setOffColor("#3350525D");
}

aurora.trend = function aurora$trend(trend, args)
{
    trend.getSecondaryValues().setAlphaForeground(.3);
    trend.getDelta().setVisible(false);
    var secondaryValues = trend.getSecondaryValues();
    secondaryValues.setSeparatorWidth(0.1);
    var indicator = trend.getIndicator();
    indicator.setStyle(cfx.gauge.IndicatorStyle.TriangleVertical);

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

aurora.border = function aurora$border(border, args)
{
}

})();

cfx.ToolTipAttributes.prototype.setLineMode = function ToolTipAttributes$setLineMode()
{
    var lineMode = new cfx.ToolTipLineAttributes();
    lineMode.getLine().setStyle(0);
    lineMode.setBorderTemplate('<DataTemplate xmlns:x="a"><DataTemplate.Resources><MultiplyConverter x:Key="multConverter"/><Thickness x:Key="padding">1</Thickness></DataTemplate.Resources><Canvas Padding="{Binding Path=Padding}"><Border Canvas.Left="-1" Canvas.Top="0" Fill="{Binding Class=Border.fill}" Opacity="0.95" Stroke="{x:Null}"><DockPanel x:Name="container" Orientation="Vertical" Margin="3,0,0,0"><TextBlock Text="{Binding Path=Title}" FontSize="{Binding Path=FontSize, Converter={StaticResource multConverter},ConverterParameter=1.1}" Visible="{Binding Path=TitleVisible}" HorizontalAlignment="Center" FontWeight="Normal" Foreground="{Binding Class=DashboardTitle.fill}" VerticalAlignment="Center" Margin="5,3,3,3" /></DockPanel></Border></Canvas></DataTemplate>');
    lineMode.setContentTemplate('<DataTemplate xmlns:x="a"><DockPanel Orientation="Horizontal" Margin="3,0,3,0"><TextBlock Text="{Binding Path=SeriesT}" Foreground="{Binding Path=ItemFill}" Margin="0,0,8,0"/><Switch Property="{Binding Path=CurrSeries}"><TextBlock Text="{Binding Path=Value}" HorizontalAlignment="Right" FontWeight="Bold" Foreground="{Binding Class=AxisY_Text.fill}" Switch.Value="1" /><TextBlock Text="{Binding Path=Value}" HorizontalAlignment="Right" Foreground="{Binding Class=AxisY_Text.fill}"/></Switch></DockPanel></DataTemplate>');

    lineMode.getLine().setWidth(1);
    lineMode.setY(1);

    /*lineMode.getLine().setStyle(0);
    lineMode.setBorderTemplate('<DataTemplate xmlns:x="a"><DataTemplate.Resources><MultiplyConverter x:Key="multConverter"/><Thickness x:Key="padding">2</Thickness></DataTemplate.Resources><Canvas Padding="{Binding Path=Padding}"><Border Canvas.Left="-1" Canvas.Top="0" Fill="{Binding Class=Border.fill}" Opacity="0.85" Stroke="{x:Null}"><DockPanel x:Name="container" Orientation="Vertical" Margin="0,4,0,0"><TextBlock Text="{Binding Path=Title}" FontSize="{Binding Path=FontSize, Converter={StaticResource multConverter},ConverterParameter=0.8}" Visible="{Binding Path=TitleVisible}" HorizontalAlignment="Left" FontWeight="Bold" Margin="3,0,3,0"/><Border Height="1" Stroke="#DBDBD9" StrokeThickness="1" Margin="0,0,0,4" Visible="{Binding Path=TitleVisible}"/></DockPanel></Border></Canvas></DataTemplate>');
    lineMode.setVerticalAlignment(0);
    lineMode.setAlignment(0);
    lineMode.setY(1);*/
    if (this.getTriggerMode() == 0)
        this.setTriggerMode(1);
    this.setMode(lineMode);
}