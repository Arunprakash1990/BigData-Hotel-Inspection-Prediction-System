(function(){var e=window.cfx,h=window.sfx;e.motif="jchartfx";var f=h["gauge.templates"];void 0!=f&&(f.jchartfxDashBorder='<T><T.R><s K="plotMargin">targetChart</s></T.R><g><g.CD><CD W="6"/><CD W="*"/><CD W="6"/></g.CD><g.RD><RD H="6"/><RD H="*"/><RD H="12"/></g.RD><B g.C="1" g.R="1" CR="27" F="#000000" S="#33000000" A="0.25" ST="2"><B.BE><BBE R="3" OffsetY="2" Merge="true" Source="SourceAlpha"/></B.BE></B><B g.C="1" g.R="1" CR="24" S="{N}" F="{B F}"><g><g.RD><RD H="Auto"/><RD H="*"/></g.RD><B F="{B F}" CR="30,30,0,0" CP="1"><TextBlock M="10,10,10,0" Text="{B Title}" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="{Binding Class=DashboardTitle.fill}" FontFamily="{Binding Class=DashboardTitle.font-family}" FontSize="11" FontWeight="Normal"/></B><B g.R="1" F="{B F}" CR="0,0,30,30" CP="1"><C N="targetChart" M="8,14,8,12"/></B></g></B><B M="2" g.C="1" g.R="1" CR="24" S="#FFFFFF" ST="5"/><B M="2" g.C="1" g.R="1" CR="24" S="#00000000" ST="5"><B.F><R><R.RT><TG><TS CX="0.40" CY="0.5" SX="4.91" SY="3.11"/><TT X="0.60" Y="0.54"/></TG></R.RT><G C="#CCFFFFFF" O="0"/><G C="#00FFFFFF" O="0.5276"/><G C="#33000000" O="1"/></R></B.F></B></g></T>',
f.jchartfxRadialDashBorder='<T><T.R><Th K="borderFactor">0.02</Th></T.R><V VW="100" VH="100"><C><E W="100" H="100" F="{B S}"/><E C.Left="1" C.Top="1" W="98" H="98" F="{B F}"/></C></V></T>',f.jchartfxRadialIndicator="RadialIndicatorDefault",f.jchartfxRadialCap="RadialCapDefault",f.jchartfxRadialGlare="RadialGlareDefault",f.jchartfxLinearDashBorder="LinearDashBorderDefault",f.jchartfxLinearBorder="LinearBorderDefault",f.jchartfxLinearGlare="<T/>",f.jchartfxLinearFiller="LinearFillerDefault");h=h["vector.templates"];
void 0!=h&&(h["DashboardTitle.fill"]="0,#0296B1",h["DashboardTitle.font-family"]="1,Arial",h["AxisY_Text.fill"]="0,#666666",h.jchartfxBorder='<T><T.R><Th K="externalMargin">16</Th><Th K="internalRectMargin">2</Th><Th K="uiMargin">16,16,0,0</Th><s K="plotMargin">targetChart</s><T K="internalRect"><B CR="6" F="{B F}" S="{B S}" CP="0.5"/></T><T K="internal"><Line S="{B S}" X1="{B X1}" X2="{B X2}" Y1="{B Y1}" Y2="{B Y2}"/></T></T.R><g><g.CD><CD W="6"/><CD W="*"/><CD W="6"/></g.CD><g.RD><RD H="6"/><RD H="*"/><RD H="12"/></g.RD><B g.C="1" g.R="1" CR="27" F="#000000" S="#33000000" A="0.25" ST="2"><B.BE><BBE R="3" OffsetY="2" Merge="true" Source="SourceAlpha"/></B.BE></B><B g.C="1" g.R="1" CR="24" F="{B F}" S="{N}"><g><g.RD><RD H="Auto"/><RD H="*"/></g.RD><B F="{B F}" CR="30,30,0,0" CP="1"><TextBlock M="10,10,10,0" Text="{B Title}" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="{Binding Class=DashboardTitle.fill}" FontFamily="{Binding Class=DashboardTitle.font-family}" FontSize="11" FontWeight="Normal"/></B><B g.R="1" F="{B F}" CR="0,0,30,30" CP="1"><C N="targetChart" M="8,0,8,8"/></B></g></B><B M="2" g.C="1" g.R="1" CR="24" S="#FFFFFF" ST="5"/><B M="2" g.C="1" g.R="1" CR="24" S="#00000000" ST="5"><B.F><R><R.RT><TG><TS CX="0.40" CY="0.5" SX="4.91" SY="3.11"/><TT X="0.60" Y="0.54"/></TG></R.RT><G C="#CCFFFFFF" O="0"/><G C="#00FFFFFF" O="0.5276"/><G C="#33000000" O="1"/></R></B.F></B></g></T>');
var d=function(){};e.motifs.jchartfx=d;d.getStyleInfo=function(a){var c="";void 0!==a&&(a=a[0],void 0!==a&&(c=a[0]));a={isGroup:!1};a.name=c;a.isSingle=!1;a.isBullet=!1;a.sections=[];if(void 0!=c&&(c=c.toUpperCase(),0<=c.indexOf("SINGLE")&&(a.isSingle=!0,a.name=""),0<=c.indexOf("GROUP")&&(a.isGroup=!0,a.name="",a.name=""),0<=c.indexOf("BULLET")&&(a.isBullet=!0,a.name=""),0<=c.indexOf("SECTIONS"))){var b,d;b=c.indexOf("SECTIONS");d=c.indexOf(":",b);0<d&&(b=d,d=c.indexOf("-",b),c=0<=d?c.substring(b+
1,d):c.substring(b+1,c.length),a.sections=c.split(",",100));a.name=""}return a};d.global=function(a){a.setFont("8pt Arial")};d.radial=function(a,c){d.global(a);var b=d.getStyleInfo(c);d.applySections(b,a);null!=b.name&&a.setStyle(b.name);"repeater"==b.name&&(b=a.getMainScale(),b.getCap().setVisible(!1),b.getTickmarks().getMajor().setStyle(e.gauge.TickmarkStyle.None),b.getTickmarks().getMedium().setStyle(e.gauge.TickmarkStyle.None),b.setPosition(.2),b.getTickmarks().getMajor().setPosition(.6),b=b.getBar(),
b.setVisible(!0),b.setThickness(1),b.setPosition(0),b=new e.gauge.Repeater,b.setPaintOff(!0),a.setMainIndicator(b))};d.linear=function(a,c){d.global(a);var b=a.getMainScale();b.getTickmarks();var f=b.getBar(),g=a.getMainIndicator(),h=d.getStyleInfo(c);h.isGroup&&(a.getBorder().setTemplate("<T/>"),a.getDashboardBorder().setTemplate("<T/>"));h.isBullet&&(b.setThickness(.9),b.setPosition(0),g.setSize(.25),g.setPosition(.475),g.setTitle("Current"),g=new e.gauge.Marker,g.setSize(.4),g.setPosition(.6),
g.setTitle("Target"),g.setTemplate("MarkerThinRectangle"),b.getIndicators().add(g),a.getDefaultAttributes().setSectionThickness(f.getThickness()),a.getDefaultAttributes().setSectionPosition(f.getPosition()));d.applySections(h,a)};d.vert=function(a,c){d.linear(a,c);var b=d.getStyleInfo(c);a.getDefaultAttributes().setRepeaterPosition(.55);"repeater"==b.name&&(b=new e.gauge.Repeater,b.setPaintOff(!0),a.setMainIndicator(b))};d.horz=function(a,c){d.linear(a,c);if("repeater"==d.getStyleInfo(c).name){var b=
new e.gauge.Repeater;b.setPaintOff(!0);a.setMainIndicator(b)}};d.applySections=function(a,c){if(0<a.sections.length){for(var b,d=0,g,f=0;f<a.sections.length;f++)g=a.sections[f],b=new e.gauge.ScaleSection,b.setFrom(d),b.setTo(g),c.getMainScale().getSections().add(b),d=g;c.getMainScale().setMax(g)}};d.chart=function(a,c){var b="";if(void 0!==c){var d=c[0];void 0!==d&&(b=d[0])}void 0!=b&&(b=b.toUpperCase(),"GROUP"==b&&a.getBorder().setTemplate("<T/>"))};d.map=function(a,c){a.setShowAdditionalLayers(!1)};
d.heatmap=function(a,c){var b=a.getGradientStops();b.getItem(0).setColor("#57ACDA");b.getItem(1).setColor("#93E24E")};d.equalizer=function(a,c){a.setRoundnessRatio(0);var b=new e.equalizer.EqualizerItem;b.setColor("#F89553");b.setCount(2);a.getTopItems().add(b);b=new e.equalizer.EqualizerItem;b.setColor("#F5D34A");b.setCount(1);a.getTopItems().add(b);a.setOffColor("#33DBDBD9")};d.trend=function(a,c){var b=d.getStyleInfo(c);b.isSingle&&(a.getDelta().setVisible(!1),a.getPercentChange().setVisible(!1),
a.getIndicator().setVisible(!1));b.isGroup&&a.getBorder().setTemplate("<T/>")};d.pictographchart=function(a,c){a.setTemplate('<T><T.R><s K="ratio">0.54166</s><s K="forceBorder">true</s></T.R><V VW="13" VH="24"><g><P S="{B S}" F="{B F}" Reuse="true" D="M4.581,2B4.581,0,4,4,0,360M12.932,11.337l-2.605-6.876C10.143,4.049,9.564,4,9.229,4C8.891,4,4.364,4,4.044,4s-0.82,0.051-1.009,0.418l-2.946,6.706c-0.207,0.401-0.042,0.897,0.369,1.101l0.343,0.172c0.412,0.201,0.914,0.043,1.12-0.357L3.504,7.98v6.208v9C3.504,23.637,3.877,24,4.338,24h0.385c0.46,0,0.833-0.363,0.833-0.812L6.583,15l1.026,8.188C7.608,23.637,7.98,24,8.443,24h0.383c0.463,0,0.834-0.363,0.834-0.812v-9V8.02l1.391,4.114c0.182,0.412,0.672,0.603,1.096,0.421l0.354-0.147C12.922,12.227,13.113,11.749,12.932,11.337z" ></P><P S="{N}" Reuse="true" D="M4.581,2B4.581,0,4,4,0,360M12.932,11.337l-2.605-6.876C10.143,4.049,9.564,4,9.229,4C8.891,4,4.364,4,4.044,4s-0.82,0.051-1.009,0.418l-2.946,6.706c-0.207,0.401-0.042,0.897,0.369,1.101l0.343,0.172c0.412,0.201,0.914,0.043,1.12-0.357L3.504,7.98v6.208v9C3.504,23.637,3.877,24,4.338,24h0.385c0.46,0,0.833-0.363,0.833-0.812L6.583,15l1.026,8.188C7.608,23.637,7.98,24,8.443,24h0.383c0.463,0,0.834-0.363,0.834-0.812v-9V8.02l1.391,4.114c0.182,0.412,0.672,0.603,1.096,0.421l0.354-0.147C12.922,12.227,13.113,11.749,12.932,11.337z" ><P.F><L S="0,0" E="1,0"><G C="#00FFFFFF" O="0"/><G C="#00FFFFFF" O="0.1"/><G C="#4CFFFFFF" O="0.3"/><G C="#00FFFFFF" O="0.75"/><G C="#0D000000" O="1"/></L></P.F></P></g></V></T>')};
d.border=function(a,c){}})();
cfx.ToolTipAttributes.prototype.setLineMode=function(){var e=new cfx.ToolTipLineAttributes;e.getLine().setStyle(0);e.setBorderTemplate('<T xmlns:x="a"><T.R><mc K="multConverter"/><Th K="padding">2</Th></T.R><C Padding="{B Padding}"><B C.Left="-1" C.Top="0" F="{Binding Class=Border.fill}" A="0.85" S="{N}"><DockPanel N="container" Orientation="Vertical" M="0,4,0,0"><TextBlock Text="{B Title}" FontSize="{B FontSize, Converter={S multConverter},ConverterParameter=0.8}" V="{B TitleVisible}" HorizontalAlignment="Left" FontWeight="Bold" M="3,0,3,0"/><B H="1" S="#DBDBD9" ST="1" M="0,0,0,4" V="{B TitleVisible}"/></DockPanel></B></C></T>');e.setVerticalAlignment(0);
e.setAlignment(0);e.setY(1);0==this.getTriggerMode()&&this.setTriggerMode(1);this.setMode(e)};
