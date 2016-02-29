(function(){

var cfx = window.cfx;
var sfx = window.sfx;

cfx.motif = "topbar";

var topbarPictoGraph = "PictoFigure5";

var gaugeTemplates = sfx["gauge.templates"];

if (gaugeTemplates != undefined) {
    gaugeTemplates.topbarDashBorder = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                      '<DataTemplate.Resources>' +
                        '<sys:String x:Key="plotMargin">targetChart</sys:String>' +
                      '</DataTemplate.Resources>' +
                      '<Canvas>' +
                        '<Border Background="#000000" Opacity="0.25" Canvas.Left="8" Canvas.Top="8">' +
                           '<Border.BitmapEffect>' +
                             '<BlurBitmapEffect Radius="1" />' +
                            '</Border.BitmapEffect>' +
                        '</Border>' +
                        '<Grid Margin="3,3,4,4">' +
                          '<Grid.RowDefinitions>' +
                            '<RowDefinition Height="Auto" MinHeight="32"/>' +
                            '<RowDefinition Height="*"/>' +
                          '</Grid.RowDefinitions>' +
                          '<Border Background="{Binding Class=DashboardCaption.fill}" Stroke="{x:Null}">' +
                            '<TextBlock Margin="8,0" Text="{Binding Path=Title}" FontSize="11" FontFamily="{Binding Class=DashboardTitle.font-family}" VerticalAlignment="Center" HorizontalAlignment="Left" Foreground="{Binding Class=DashboardCaption.stroke}"/>' +
                          '</Border>' +
                          '<Border Grid.Row="1" Background="{Binding Path=Fill}">' +
                          '<Canvas x:Name="targetChart" Margin="4,12,4,10"/>' +
                          '</Border>' +
                        '</Grid>' +
                      '</Canvas>' +
                '</DataTemplate>';

    gaugeTemplates.topbarRadialDashBorder = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
        '<DataTemplate.Resources>' +
          '<Thickness x:Key="borderFactor">0.03</Thickness>' +
        '</DataTemplate.Resources>' +
        '<Viewbox ViewWidth="100" ViewHeight="100"><Canvas>' +
          '<Ellipse Width="100" Height="100" Fill="{Binding Path=Stroke}"/>' +
          '<Ellipse Canvas.Left="3" Canvas.Top="3" Width="94" Height="94" Fill="{Binding Path=Fill}"/>' +
        '</Canvas></Viewbox>' +
      '</DataTemplate>';

    gaugeTemplates.topbarRadialIndicator = "RadialIndicatorDefault";

    gaugeTemplates.topbarRadialCap = "RadialCapDefault";

    gaugeTemplates.topbarRadialGlare = '<DataTemplate/>';

    gaugeTemplates.topbarLinearDashBorder = '<DataTemplate/>';

    gaugeTemplates.topbarLinearGlare = '<DataTemplate/>';

    gaugeTemplates.topbarLinearFiller = "LinearFillerDefault";

    gaugeTemplates["TipBorderDefault"] = '<DataTemplate xmlns:x="a"><DataTemplate.Resources><MultiplyConverter x:Key="multConverter"/><StringConverter x:Key="titleConverter"/><Thickness x:Key="padding">4</Thickness></DataTemplate.Resources><Canvas Padding="{Binding Path=Padding}"><Border Margin="1,1,1,1" Stroke="#40000000" StrokeThickness="1" CornerRadius="0" CornerPercent="0.4" Canvas.Left="3" Canvas.Top="3" Fill="#40000000"><Border.BitmapEffect><BlurBitmapEffect Radius="1"/></Border.BitmapEffect></Border><Border BorderBrush="#00FFFFFF" BorderThickness="0" Background="{Binding Path=Fill}" Opacity="1" CornerPercent="0.4" CornerRadius="0" Padding="0,0,0,0"><DockPanel x:Name="container" Orientation="Vertical" Margin="5,8,5,0"><Border Background="{Binding Class=DashboardCaption.fill}" Stroke="{x:Null}" Margin="0,0,0,5" Visible="{Binding Path=TitleVisible}"><TextBlock Text="{Binding Path=Title, Converter={StaticResource titleConverter},ConverterParameter=%u}}" FontSize="{Binding Path=FontSize, Converter={StaticResource multConverter},ConverterParameter=1}" Visible="{Binding Path=TitleVisible}" HorizontalAlignment="Left" Foreground="{Binding Class=DashboardCaption.stroke}" VerticalAlignment="Center" Margin="5,3,3,3"/></Border></DockPanel></Border></Canvas></DataTemplate>';

    gaugeTemplates.topbarPictoGraph = topbarPictoGraph;
}


var chartTemplates = sfx["vector.templates"];

if (chartTemplates != undefined) {
    chartTemplates["DashboardCaption.fill"] = "0,#57ACDA";
    chartTemplates["DashboardCaption.stroke"] = "0,#FFFFFF";
    chartTemplates["DashboardTitle.font-family"] = "1,Arial";
    chartTemplates["AxisY_Text.fill"] = "0,#666666";

    chartTemplates.topbarBorder = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                      '<DataTemplate.Resources>' +
                        '<sys:String x:Key="plotMargin">targetChart</sys:String>' +
                        '<Thickness x:Key="externalMargin">16</Thickness>' +
                        '<Thickness x:Key="internalRectMargin">2</Thickness>' +
						'<Thickness x:Key="uiMargin">8,8,0,0</Thickness>' +
                        '<DataTemplate x:Key="internalRect">' +
                          '<Border CornerRadius="6" Background="{Binding Path=Fill}" BorderBrush="{Binding Path=Stroke}" CornerPercent="0.5" />' +
                        '</DataTemplate>' +
                        '<DataTemplate x:Key="internal">' +
                          '<Line Stroke="{Binding Path=Stroke}" X1="{Binding Path=X1}" X2="{Binding Path=X2}" Y1="{Binding Path=Y1}" Y2="{Binding Path=Y2}"/>' +
                        '</DataTemplate>' +
                      '</DataTemplate.Resources>' +
                      '<Canvas>' +
                        '<Border Background="#000000" Opacity="0.25" Canvas.Left="8" Canvas.Top="8">' +
                           '<Border.BitmapEffect>' +
                             '<BlurBitmapEffect Radius="1"/>' +
                            '</Border.BitmapEffect>' +
                        '</Border>' +
                        '<Grid Margin="3">' +
                          '<Grid.RowDefinitions>' +
                            '<RowDefinition Height="Auto" MinHeight="32"/>' +
                            '<RowDefinition Height="*"/>' +
                          '</Grid.RowDefinitions>' +
                          '<Border Background="{Binding Class=DashboardCaption.fill}" Stroke="{x:Null}">' +
							'<DockPanel Orientation="Horizontal">' +
                              '<Rectangle Visible="{Binding Path=UIVisible}" Width="{Binding Path=UISize}" Margin="0,0,5,0" Height="1" Fill="{x:Null}" Stroke="{x:Null}" />' +
							  '<TextBlock Margin="8,0" Text="{Binding Path=Title}" FontSize="11" FontFamily="{Binding Class=DashboardTitle.font-family}" VerticalAlignment="Center" HorizontalAlignment="Left" Foreground="{Binding Class=DashboardCaption.stroke}"/>' +
                            '</DockPanel>' +
					      '</Border>' +
                          '<Border Grid.Row="1" Background="{Binding Path=Fill}">' +
                          '<Canvas x:Name="targetChart" Margin="0,6,0,6"/>' +
                          '</Border>' +
                        '</Grid>' +
                      '</Canvas>' +
                '</DataTemplate>';

    chartTemplates["TipBorderDefault"] = '<DataTemplate xmlns:x="a"><DataTemplate.Resources><MultiplyConverter x:Key="multConverter"/><StringConverter x:Key="titleConverter"/><Thickness x:Key="padding">4</Thickness></DataTemplate.Resources><Canvas Padding="{Binding Path=Padding}"><Border Margin="1,1,1,1" Stroke="#40000000" StrokeThickness="1" CornerRadius="0" CornerPercent="0.4" Canvas.Left="3" Canvas.Top="3" Fill="#40000000"><Border.BitmapEffect><BlurBitmapEffect Radius="1"/></Border.BitmapEffect></Border><Border BorderBrush="#00FFFFFF" BorderThickness="0" Background="{Binding Path=Fill}" Opacity="1" CornerPercent="0.4" CornerRadius="0" Padding="0,0,0,0"><DockPanel x:Name="container" Orientation="Vertical"><Border Background="{Binding Class=DashboardCaption.fill}" Stroke="{x:Null}" Margin="0,0,0,5" Visible="{Binding Path=TitleVisible}"><TextBlock Text="{Binding Path=Title, Converter={StaticResource titleConverter},ConverterParameter=%u}}" FontSize="{Binding Path=FontSize, Converter={StaticResource multConverter},ConverterParameter=1}" Visible="{Binding Path=TitleVisible}" HorizontalAlignment="Left" Foreground="{Binding Class=DashboardCaption.stroke}" VerticalAlignment="Center" Margin="8,3,3,3"/></Border><Border Margin="0,4,0,0" /></DockPanel></Border></Canvas></DataTemplate>';

    chartTemplates["TipContentDefault"] = '<DataTemplate xmlns:x="a"><DockPanel Orientation="Horizontal" Margin="6,2,6,1"><TextBlock Text="{Binding Path=SeriesT}" Foreground="{Binding Path=ItemFill}" Margin="0,0,12,0"/><Switch Property="{Binding Path=CurrSeries}"><TextBlock Text="{Binding Path=Value}" FontWeight="Bold" HorizontalAlignment="Right" Switch.Value="1" /><TextBlock Text="{Binding Path=Value}" HorizontalAlignment="Right"/></Switch></DockPanel></DataTemplate>';
    chartTemplates["TipContentPercent"] = '<DataTemplate xmlns:x="a"><DockPanel Orientation="Vertical" Margin="6,0,6,3"><TextBlock Text="{Binding Path=SeriesT}" Foreground="{Binding Path=ItemFill}"/><DockPanel Orientation="Horizontal"><TextBlock Text="{Binding Path=Macro%v out of %t}"/><TextBlock Margin="6,0,0,0" Text="{Binding Path=Macro(%p%%)}" FontWeight="Bold" HorizontalAlignment="Right"/></DockPanel></DockPanel></DataTemplate>';
    chartTemplates["TipContentDefaultX"] = '<DataTemplate xmlns:x="a"><Grid Margin="6,0,6,3"><Grid.ColumnDefinitions><ColumnDefinition Width="Auto"/><ColumnDefinition Width="Auto"/></Grid.ColumnDefinitions><Grid.RowDefinitions><RowDefinition Height="Auto"/><RowDefinition Height="Auto"/></Grid.RowDefinitions><TextBlock Grid.Row="0" Grid.Column="0" Text="{Binding Path=SeriesTX}" Foreground="{Binding Path=ItemFill}" Margin="0,0,18,0"/><TextBlock Grid.Row="0" Grid.Column="1" Text="{Binding Path=ValueX}" FontWeight="Bold" HorizontalAlignment="Right"/><TextBlock Grid.Row="1" Grid.Column="0" Text="{Binding Path=SeriesTY}" Foreground="{Binding Path=ItemFill}" Margin="0,0,18,0"/><TextBlock Grid.Row="1" Grid.Column="1" Text="{Binding Path=Value}" FontWeight="Bold" HorizontalAlignment="Right"/></Grid></DataTemplate>';

    chartTemplates.topbarPictoGraph = topbarPictoGraph;
}


var topbar = function topbar()
{
}

cfx.motifs.topbar = topbar;

topbar.getStyleInfo = function topbar$global(args)
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

topbar.global = function topbar$global(gauge)
{
    gauge.setFont("8pt Arial");
}

topbar.radial = function topbar$radial(gauge, args)
{
    topbar.global(gauge);
 
    var styleInfo = topbar.getStyleInfo(args);
 
    if (styleInfo.name != null)
        gauge.setStyle(styleInfo.name);
}

topbar.linear = function topbar$linear(gauge, args)
{
    topbar.global(gauge);

    var scale = gauge.getMainScale();
    var bar = scale.getBar();
    var indicator = scale.getMainIndicator();

    var styleInfo = topbar.getStyleInfo(args);
 
    if (styleInfo.isGroup) {
        gauge.getBorder().setTemplate("<DataTemplate/>");
        gauge.getDashboardBorder().setTemplate("<DataTemplate/>");
    }

    if (styleInfo.isBullet) {
        scale.setThickness(0.9);
        scale.setPosition(0);
        indicator.setSize(0.25);
        indicator.setPosition(0.475);
        indicator.setTitle("Current");
        var target = new cfx.gauge.Marker();
        target.setSize(0.4);
        target.setPosition(0.6);
        target.setTitle("Target");
        target.setTemplate("MarkerThinRectangle");
        scale.getIndicators().add(target);
        gauge.getDefaultAttributes().setSectionThickness(bar.getThickness());
        gauge.getDefaultAttributes().setSectionPosition(bar.getPosition());
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

topbar.vert = function topbar$vert(gauge, args)
{
    topbar.linear(gauge, args);
}

topbar.horz = function topbar$horz(gauge, args)
{
    topbar.linear(gauge, args);

}

topbar.chart = function topbar$chart(chart, args)
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
}

topbar.heatmap = function topbar$heatmap(heatmap, args) {
    var gradients = heatmap.getGradientStops();
    gradients.getItem(0).setColor("#57ACDA");
    gradients.getItem(1).setColor("#93E24E");
}

topbar.equalizer = function topbar$equalizer(equalizer, args) {
    equalizer.setRoundnessRatio(0);
    var eqItem = new cfx.equalizer.EqualizerItem();
    eqItem.setColor("#F89553");
    eqItem.setCount(2);
    equalizer.getTopItems().add(eqItem);
    eqItem = new cfx.equalizer.EqualizerItem();
    eqItem.setColor("#F5D34A");
    eqItem.setCount(1);
    equalizer.getTopItems().add(eqItem);

    equalizer.setOffColor("#33DBDBD9");
}

topbar.trend = function topbar$trend(trend, args)
{
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

topbar.map = function topbar$map(map, args) {
    map.setShowAdditionalLayers(false);
}

topbar.pictographchart = function topbar$pictographchart(pictograph, args)
{
    pictograph.setTemplate('<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib"><DataTemplate.Resources><sys:String x:Key="ratio">0.54166</sys:String></DataTemplate.Resources><Viewbox ViewWidth="13" ViewHeight="24"><Grid><Path Stroke="{Binding Path=Stroke}" Fill="{Binding Path=Fill}" Reuse="true" Data="M4.581,2B4.581,0,4,4,0,360M12.932,11.337l-2.605-6.876C10.143,4.049,9.564,4,9.229,4C8.891,4,4.364,4,4.044,4s-0.82,0.051-1.009,0.418l-2.946,6.706c-0.207,0.401-0.042,0.897,0.369,1.101l0.343,0.172c0.412,0.201,0.914,0.043,1.12-0.357L3.504,7.98v6.208v9C3.504,23.637,3.877,24,4.338,24h0.385c0.46,0,0.833-0.363,0.833-0.812L6.583,15l1.026,8.188C7.608,23.637,7.98,24,8.443,24h0.383c0.463,0,0.834-0.363,0.834-0.812v-9V8.02l1.391,4.114c0.182,0.412,0.672,0.603,1.096,0.421l0.354-0.147C12.922,12.227,13.113,11.749,12.932,11.337z" ></Path></Grid></Viewbox></DataTemplate>');
}

topbar.border = function topbar$border(border, args)
{
}

})();

cfx.ToolTipAttributes.prototype.setLineMode = function ToolTipAttributes$setLineMode()
{
    var lineMode = new cfx.ToolTipLineAttributes();
    lineMode.getLine().setStyle(0);
    lineMode.setBorderTemplate('<DataTemplate xmlns:x="a"><DataTemplate.Resources><MultiplyConverter x:Key="multConverter"/><StringConverter x:Key="titleConverter"/><Thickness x:Key="padding">2</Thickness></DataTemplate.Resources><Canvas Padding="{Binding Path=Padding}"><Border Canvas.Left="-1" Canvas.Top="0" Fill="{Binding Class=Border.fill}" Opacity="0.95" Stroke="{Binding Class=AxisY_Line.stroke}"><DockPanel x:Name="container" Orientation="Vertical" Margin="0,0,0,0"><Border Background="{Binding Class=DashboardCaption.fill}" Stroke="{x:Null}" Margin="0,0,0,5"><TextBlock Text="{Binding Path=Title, Converter={StaticResource titleConverter},ConverterParameter=%u}}" FontSize="{Binding Path=FontSize, Converter={StaticResource multConverter},ConverterParameter=0.8}" Visible="{Binding Path=TitleVisible}" HorizontalAlignment="Left" FontWeight="Normal" Foreground="{Binding Class=DashboardCaption.stroke}" VerticalAlignment="Center" Margin="5,3,3,3"/></Border><Border Height="1" Stroke="{Binding Class=AxisY_Line.stroke}" StrokeThickness="1" Margin="0,0,0,4" Visible="{Binding Path=TitleVisible}"/></DockPanel></Border></Canvas></DataTemplate>');
    lineMode.getLine().setWidth(1);
    lineMode.setVerticalAlignment(0);
    lineMode.setAlignment(0);
    lineMode.setY(1.04);

    if (this.getTriggerMode() == 0)
        this.setTriggerMode(1);
    this.setMode(lineMode);
}