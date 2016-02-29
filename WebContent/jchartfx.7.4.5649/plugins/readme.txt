jChartFX Plugins
========================

The jChartFX plugins provide additional features like JavaScript/TypeScript code auto completion support on multiple IDE/editors.

Visual Studio Intellisense
--------------------------

jChartFX provides JavaScript IntelliSense auto-completion support if you use Microsoft Visual Studio as your IDE. To enable this feature, include jchartfx.visualstudio.js library in your project and add a reference directive in your JavaScript code as an XML comment:

/// <reference path="Scripts/jchartfx.visualstudio.js"/>
// your JavaScript Code


Tern: Intelligent stand-alone code-analysis editor plugin
---------------------------------------------------------

Tern is intended to be used with as a code editor plugin to enhance the editor's support for intelligent JavaScript editing. 

There is currently Tern support for different editors, like for example:

Emacs
Vim
Sublime Text
Light Table
Eclipse

To enable Autocompletion, argument hints and other editing features, you need to download and install the Tern package (search for instructions on how to install the Tern plugin for your editor) and then include jchartfx.tern.json as an additional JSON type definition in your preferred editor.

For example, when using Sublime Text(2/3), make sure to copy jchartfx.tern.json file in the tern pakage defs folder: 

	\..\Sublime Text 2\Packages\tern_for_sublime\node_modules\tern\defs\jchartfx.tern.json
	

TypeScript code-analysis editor plugin
--------------------------------------

When working with TypeScript code, jChartFX provides auto-completion and error highlighting support around the TypeScript language. You can use the editor/IDE of your choice where TypeScript is supported.

To enable this feature, include jchartfx.d.ts file in your project and add a reference directive in your TypeScript code as an XML comment:

/// <reference path="include/jchartfx.d.ts"/>
// your TypeScript Code
	
