$tw.preloadTiddler({"title":"$:/plugins/tiddlywiki/innerwiki","description":"Innerwiki: programmable screenshots","author":"Jeremy Ruston","plugin-type":"plugin","list":"readme docs examples","version":"5.1.20","dependents":"","type":"application/json","text":"{\"tiddlers\":{\"$:/plugins/tiddlywiki/innerwiki/crosshairs.svg\":{\"title\":\"$:/plugins/tiddlywiki/innerwiki/crosshairs.svg\",\"type\":\"image/svg+xml\",\"text\":\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<svg width=\\\"128px\\\" height=\\\"128px\\\" viewBox=\\\"0 0 128 128\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\">\\n    <defs>\\n        <path d=\\\"M104.938091,68 L64,64 L68,103.85205 L68,108 C68,110.209139 66.209139,112 64,112 C61.790861,112 60,110.209139 60,108 L60,103.159803 L63.9305182,64 L22.9924274,68 L20,68 C17.790861,68 16,66.209139 16,64 C16,61.790861 17.790861,60 20,60 L22.9924274,60 L63.9305182,64 L60,24.8401973 L60,20 C60,17.790861 61.790861,16 64,16 C66.209139,16 68,17.790861 68,20 L68,24.1479497 L64,64 L104.938091,60 L108,60 C110.209139,60 112,61.790861 112,64 C112,66.209139 110.209139,68 108,68 L104.938091,68 Z\\\" id=\\\"path-1\\\"></path>\\n        <filter x=\\\"-15.6%\\\" y=\\\"-15.6%\\\" width=\\\"131.2%\\\" height=\\\"131.2%\\\" filterUnits=\\\"objectBoundingBox\\\" id=\\\"filter-2\\\">\\n            <feMorphology radius=\\\"2.5\\\" operator=\\\"dilate\\\" in=\\\"SourceAlpha\\\" result=\\\"shadowSpreadOuter1\\\"></feMorphology>\\n            <feOffset dx=\\\"0\\\" dy=\\\"0\\\" in=\\\"shadowSpreadOuter1\\\" result=\\\"shadowOffsetOuter1\\\"></feOffset>\\n            <feGaussianBlur stdDeviation=\\\"2.5\\\" in=\\\"shadowOffsetOuter1\\\" result=\\\"shadowBlurOuter1\\\"></feGaussianBlur>\\n            <feColorMatrix values=\\\"0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 1 0\\\" type=\\\"matrix\\\" in=\\\"shadowBlurOuter1\\\"></feColorMatrix>\\n        </filter>\\n    </defs>\\n    <g id=\\\"Page-1\\\" stroke=\\\"none\\\" stroke-width=\\\"1\\\" fill=\\\"none\\\" fill-rule=\\\"evenodd\\\">\\n        <g id=\\\"Combined-Shape\\\">\\n            <use fill=\\\"black\\\" fill-opacity=\\\"1\\\" filter=\\\"url(#filter-2)\\\" xlink:href=\\\"#path-1\\\"></use>\\n            <use fill=\\\"#FF0000\\\" fill-rule=\\\"evenodd\\\" xlink:href=\\\"#path-1\\\"></use>\\n        </g>\\n    </g>\\n</svg>\"},\"$:/plugins/tiddlywiki/innerwiki/data.js\":{\"title\":\"$:/plugins/tiddlywiki/innerwiki/data.js\",\"text\":\"/*\\\\\\ntitle: $:/plugins/tiddlywiki/innerwiki/data.js\\ntype: application/javascript\\nmodule-type: widget\\n\\nWidget to represent a single item of data\\n\\n\\\\*/\\n(function(){\\n\\n/*jslint node: true, browser: true */\\n/*global $tw: false */\\n\\\"use strict\\\";\\n\\nvar Widget = require(\\\"$:/core/modules/widgets/widget.js\\\").widget;\\n\\nvar DataWidget = function(parseTreeNode,options) {\\n\\tthis.dataWidgetTag = parseTreeNode.type;\\n\\tthis.initialise(parseTreeNode,options);\\n};\\n\\n/*\\nInherit from the base widget class\\n*/\\nDataWidget.prototype = new Widget();\\n\\n/*\\nRender this widget into the DOM\\n*/\\nDataWidget.prototype.render = function(parent,nextSibling) {\\n\\tthis.parentDomNode = parent;\\n\\tthis.computeAttributes();\\n\\tthis.execute();\\n\\tthis.renderChildren(parent,nextSibling);\\n};\\n\\n/*\\nCompute the internal state of the widget\\n*/\\nDataWidget.prototype.execute = function() {\\n\\t// Construct the child widgets\\n\\tthis.makeChildWidgets();\\n};\\n\\n/*\\nSelectively refreshes the widget if needed. Returns true if the widget or any of its children needed re-rendering\\n*/\\nDataWidget.prototype.refresh = function(changedTiddlers) {\\n\\t// Refresh our attributes\\n\\tvar changedAttributes = this.computeAttributes();\\n\\t// Refresh our children\\n\\treturn this.refreshChildren(changedTiddlers);\\n};\\n\\nexports.data = DataWidget;\\nexports.anchor = DataWidget;\\n\\n})();\\n\",\"type\":\"application/javascript\",\"module-type\":\"widget\"},\"$:/plugins/tiddlywiki/innerwiki/docs\":{\"title\":\"$:/plugins/tiddlywiki/innerwiki/docs\",\"text\":\"! `<$innerwiki>` widget\\n\\nThe `<$innerwiki>` widget encapsulates an embedded wiki. It starts as a blank copy of the current wiki and can have additional payload tiddlers added via embedded `<$data>` widgets (see below).\\n\\nIt supports the following attributes:\\n\\n|!Attribute |!Description |\\n|template |Specifies the template to be used to generate the base wiki (defaults to $:/plugins/tiddlywiki/innerwiki/template) |\\n|width |Width in pixels of the virtual screen for rendering the embedded wiki |\\n|height |Height in pixels of the virtual screen for rendering the embedded wiki |\\n|style |CSS style definitions to be added to the DIV wrapper around the IFRAME containing the embedded wiki |\\n|class |CSS classes to be added to the DIV wrapper around the IFRAME containing the embedded wiki |\\n|filename |Base filename for saving a screenshot of the embedded wiki under Node.js (excludes file extension) |\\n|clipLeft |Position in pixels of the left edge of the clip rectangle (optional) |\\n|clipTop |Position in pixels of the top edge of the clip rectangle (optional) |\\n|clipWidth |Width in pixels of the clip rectangle (optional) |\\n|clipHeight |Height in pixels of the clip rectangle (optional) |\\n\\n! `<$data>` widget\\n\\nThe `<$data>` widget is used within the `<$innerwiki>` widget to specify payload tiddlers to be added to the innerwiki.\\n\\nIt supports the following attributes:\\n\\n|!Attribute |!Description |\\n|$tiddler |The title of a tiddler to be used as a payload tiddler (optional) |\\n|$filter |A filter string identifying tiddlers to be used as payload tiddlers (optional) |\\n|//any attribute<br>not starting<br>with $// |Field values to be assigned to the payload tiddler(s) |\\n\\nIt can be used in three different ways:\\n\\n* Without the `$tiddler` or `$filter` attributes, the remaining attributes provide the fields for a single payload tiddler\\n* With the `$tiddler` attribute present, the payload tiddler takes its fields from that tiddler with the remaining attributes overriding those fields\\n* With the `$filter` attribute present, the payload is a copy of all of the tiddlers identified by the filter, with the remaining attributes overriding those fields of each one\\n\\nThis example injects a copy of the \\\"HelloThere\\\" tiddler with the addition of the field \\\"custom\\\" set to \\\"Alpha\\\":\\n\\n```\\n<$data $tiddler=\\\"HelloThere\\\" custom=\\\"Alpha\\\"/>\\n```\\n\\nThis example injects all image tiddlers with the addition of the field \\\"custom\\\" set to \\\"Beta\\\":\\n\\n```\\n<$data $filter=\\\"[is[image]]\\\" custom=\\\"Beta\\\"/>\\n```\\n\\n! `<$anchor>` widget\\n\\nThe `<$anchor>` widget is used within the `<$innerwiki>` widget to specify draggable anchors to be overlaid on the innerwiki.\\n\\nIt supports the following attributes:\\n\\n|!Attribute |!Description |\\n|x |The title of the tiddler containing the X coordinate of the anchor |\\n|y |The title of the tiddler containing the Y coordinate of the anchor |\\n\\nThis example declares an anchor whose coordinates are contained in the tiddlers [[my-anchor-x]] and [[my-anchor-y]]:\\n\\n```\\n<$anchor x=\\\"my-anchor-x\\\" y=\\\"my-anchor-y\\\"/>\\n```\\n\\n! `screenshot` command\\n\\nSaves PNG screenshots of the `<$innerwiki>` widgets rendered by a set of tiddlers identified by a filter.\\n\\n```\\n--screenshot <filter> <deviceScaleFactor>\\n```\\n\\n* ''filter'': a filter identifying the tiddlers to be rendered, from which the individual `<$innerwiki>` widgets are screenshotted\\n* ''deviceScaleFactor'': a scale factor for the screenshot (optional; defaults to 1)\\n\\nA deviceScaleFactor of 4 or 5 gives high quality screenshots suitable for print use.\\n\"},\"$:/plugins/tiddlywiki/innerwiki/example-data\":{\"title\":\"$:/plugins/tiddlywiki/innerwiki/example-data\",\"text\":\"<$data title=\\\"$:/SiteTitle\\\" text=\\\"Innerwiki Demo\\\"/>\\n<$data title=\\\"$:/SiteSubtitle\\\" text=\\\"Wikis spawning wikis\\\"/>\\n\\n\"},\"$:/plugins/tiddlywiki/innerwiki/examples\":{\"title\":\"$:/plugins/tiddlywiki/innerwiki/examples\",\"text\":\"\\\\define big-arrow(x,y,colour:\\\"#ff0000\\\",border:\\\"#000000\\\")\\n\\t<g transform=\\\"translate($x$,$y$)\\\">\\n\\t\\t<path d=\\\"m-81.43106,34.99315l40.25737,-49.78116l40.25737,49.78116l-20.12869,0l0,50.02069l-40.25737,0l0,-50.02069l-20.12869,0l0,0z\\\" fill=\\\"$colour$\\\" stroke=\\\"$border$\\\" stroke-dasharray=\\\"null\\\" stroke-linecap=\\\"null\\\" stroke-linejoin=\\\"null\\\" stroke-width=\\\"5\\\" transform=\\\"rotate(49.3775 -41.1737 35.1129)\\\"/>\\n\\t</g>\\n\\\\end\\n\\n\\\\define example(text)\\n<$codeblock code=<<__text__>>/>\\n\\nRenders as:\\n\\n$text$\\n\\\\end\\n\\n!! Browser\\n\\nThe innerwiki widget specifies the dimensions of the virtual screen used to render the wiki (in pixels) and CSS styles to apply to it. Nested `<$data>` widgets are used to specify individual payload tiddlers to be loaded into the wiki. In this example, we initialise the innerwiki with two tiddlers \\\"HelloThere\\\" and \\\"$:/DefaultTiddlers\\\":\\n\\n<$macrocall $name=\\\"example\\\" text=\\\"\\\"\\\"<$innerwiki width=\\\"1200\\\" height=\\\"400\\\" style=\\\"width:100%;\\\" filename=\\\"screenshot-1.png\\\">\\n\\t<$data title=\\\"HelloThere\\\" text=\\\"This tiddler is inside a wiki\\\"/>\\n\\t<$data title=\\\"$:/DefaultTiddlers\\\" text=\\\"HelloThere\\\"/>\\n</$innerwiki>\\\"\\\"\\\"/>\\n\\nNote that the \\\"screenshot\\\" is a shrunken but fully interactive TiddlyWiki.\\n\\n!! Node.js\\n\\nTo render these examples as a PNG bitmap under Node.js, execute the following at the command prompt:\\n\\n```\\ntiddlywiki editions/innerwikidemo --screenshot $:/plugins/tiddlywiki/innerwiki/examples\\n```\\n\\nThe screenshots will be saved as `screenshot-1.png` etc in the `./output` folder of the wiki.\\n\\nTo render this example tiddler as a static HTML file that embeds the screenshot images and includes the SVG overlays:\\n\\n```\\ntiddlywiki editions/innerwikidemo --render '[[$:/plugins/tiddlywiki/innerwiki/examples]]' \\\"examples.html\\\" --build index\\n```\\n\\n!! SVG overlays\\n\\nAny displayable content within innerwiki widget is displayed within an automatically created SVG element. This allows overlays to be added:\\n\\n<$macrocall $name=\\\"example\\\" text=\\\"\\\"\\\"<$innerwiki width=\\\"1200\\\" height=\\\"400\\\" style=\\\"width:100%;\\\" filename=\\\"screenshot-2.png\\\">\\n\\t<$data title=\\\"HelloThere\\\" text=\\\"This tiddler is inside a wiki\\\"/>\\n\\t<$data title=\\\"$:/DefaultTiddlers\\\" text=\\\"HelloThere\\\"/>\\n\\t<circle cx=\\\"600\\\" cy=\\\"50\\\" r=\\\"40\\\" stroke=\\\"black\\\" stroke-width=\\\"2\\\" fill=\\\"green\\\" />\\n\\t<<big-arrow 600 50>>\\n</$innerwiki>\\\"\\\"\\\"/>\\n\\nNotice how macros can be used to encapsulate SVG fragments ([[see the source of this tiddler|$:/plugins/tiddlywiki/innerwiki/examples]]).\\n\\n!! Clipping\\n\\nA clipping rectangle can be applied to limit the area of the wiki that is displayed. For example:\\n\\n<$macrocall $name=\\\"example\\\" text=\\\"\\\"\\\"<$innerwiki width=\\\"1200\\\" height=\\\"400\\\" style=\\\"width:100%;\\\" clipLeft=\\\"500\\\" clipTop=\\\"100\\\" clipWidth=\\\"600\\\" clipHeight=\\\"300\\\" filename=\\\"screenshot-3.png\\\">\\n\\t<$data title=\\\"HelloThere\\\" text=\\\"! This tiddler is inside a wiki that is inside a wiki\\\"/>\\n\\t<$data title=\\\"$:/DefaultTiddlers\\\" text=\\\"HelloThere\\\"/>\\n</$innerwiki>\\\"\\\"\\\"/>\\n\\n!! Transcluding payload tiddlers\\n\\nThis example shows how the `<$data>` widget can be transcluded from other tiddlers (see $:/plugins/tiddlywiki/innerwiki/example-data):\\n\\n<$macrocall $name=\\\"example\\\" text=\\\"\\\"\\\"<$innerwiki width=\\\"600\\\" height=\\\"400\\\" style=\\\"width:100%;\\\" filename=\\\"screenshot-4.png\\\">\\n\\t{{$:/plugins/tiddlywiki/innerwiki/example-data}}\\n\\t<$data title=\\\"HelloThere\\\" text=\\\"! This tiddler is inside a wiki that is inside a wiki\\\"/>\\n\\t<$data title=\\\"$:/DefaultTiddlers\\\" text=\\\"HelloThere\\\"/>\\n</$innerwiki>\\\"\\\"\\\"/>\\n\\n!! Customising the wiki state\\n\\nBy injecting the right payload tiddlers, the innerwiki can be initialised to any desired state. In this example we inject a configuration tiddler to make the \\\"more\\\" page control button visible, and a state tiddler to cause the dropdown to appear:\\n\\n<$macrocall $name=\\\"example\\\" text=\\\"\\\"\\\"<$innerwiki template=\\\"$:/plugins/tiddlywiki/innerwiki/template\\\" filename=\\\"screenshot-5.png\\\" width=\\\"1200\\\" height=\\\"400\\\" style=\\\"width:100%;\\\">\\n\\t<$data title=\\\"HelloThere\\\" text=\\\"! This tiddler is inside a wiki that is inside a wiki\\\"/>\\n\\t<$data title=\\\"$:/DefaultTiddlers\\\" text=\\\"HelloThere\\\"/>\\n\\t<$data title=\\\"$:/config/PageControlButtons/Visibility/$:/core/ui/Buttons/more-page-actions\\\" text=\\\"show\\\"/>\\n\\t<$data title=\\\"$:/state/popup/more--1600698846\\\" text=\\\"(151,144,21,25)\\\"/>\\n</$innerwiki>\\\"\\\"\\\"/>\\n\\n<$macrocall $name=\\\"example\\\" text=\\\"\\\"\\\"<$innerwiki template=\\\"$:/plugins/tiddlywiki/innerwiki/template\\\" filename=\\\"screenshot-6.png\\\" width=\\\"1200\\\" height=\\\"400\\\" style=\\\"width:100%;\\\">\\n\\t<$data title=\\\"HelloThere\\\" text=\\\"! This tiddler is inside a wiki that is inside a wiki\\\"/>\\n\\t<$data title=\\\"Draft of 'HelloThere'\\\" text=\\\"This tiddler is inside a wiki that is inside a wiki\\\" draft.of=\\\"HelloThere\\\" draft.title=\\\"HelloThere\\\"/>\\n\\t<$data title=\\\"$:/DefaultTiddlers\\\" text=\\\"[[Draft of 'HelloThere']]\\\"/>\\n\\t<$data title=\\\"$:/state/sidebar\\\" text=\\\"no\\\"/>\\n\\t<$data title=\\\"$:/state/showeditpreview\\\" text=\\\"yes\\\"/>\\n</$innerwiki>\\\"\\\"\\\"/>\\n\\n!! Draggable anchors\\n\\nThis example shows how the `<$anchor>` widget is used to display draggable anchors overlaid on the innerwiki. The `<$anchor>` widget is used to declare the tiddlers containing the coordinates of each anchor. These tiddlers can then be transcluded by SVG graphic primitives to position them according to the anchor locations.\\n\\n<$macrocall $name=\\\"example\\\" text=\\\"\\\"\\\"screenshot-7-anchor-1-x: <$edit-text tag=\\\"input\\\" tiddler=\\\"screenshot-7-anchor-1-x\\\"/>\\n\\nscreenshot-7-anchor-1-y: <$edit-text tag=\\\"input\\\" tiddler=\\\"screenshot-7-anchor-1-y\\\"/>\\n\\nscreenshot-7-anchor-2-x: <$edit-text tag=\\\"input\\\" tiddler=\\\"screenshot-7-anchor-2-x\\\"/>\\n\\nscreenshot-7-anchor-2-y: <$edit-text tag=\\\"input\\\" tiddler=\\\"screenshot-7-anchor-2-y\\\"/>\\n\\n<$innerwiki template=\\\"$:/plugins/tiddlywiki/innerwiki/template\\\" filename=\\\"screenshot-7.png\\\" width=\\\"1200\\\" height=\\\"400\\\" style=\\\"width:100%;\\\">\\n\\t<$anchor x=\\\"screenshot-7-anchor-1-x\\\" y=\\\"screenshot-7-anchor-1-y\\\"/>\\n\\t<$anchor x=\\\"screenshot-7-anchor-2-x\\\" y=\\\"screenshot-7-anchor-2-y\\\"/>\\n\\t<$data title=\\\"HelloThere\\\" text=\\\"! This tiddler is inside a wiki that is inside a wiki\\\"/>\\n\\t<$data title=\\\"$:/DefaultTiddlers\\\" text=\\\"HelloThere\\\"/>\\n\\t<$macrocall $name=\\\"big-arrow\\\" x={{screenshot-7-anchor-1-x}} y={{screenshot-7-anchor-1-y}}/>\\n\\t<circle cx={{screenshot-7-anchor-2-x}} cy={{screenshot-7-anchor-2-y}} r=\\\"50\\\" stroke=\\\"blue\\\" stroke-width=\\\"2\\\" fill=\\\"green\\\" />\\n</$innerwiki>\\\"\\\"\\\"/>\\n\\n!! Inception\\n\\nAn innerwiki can itself contain an inner-innerwiki:\\n\\n<$macrocall $name=\\\"example\\\" text=\\\"\\\"\\\"<$innerwiki width=\\\"1200\\\" height=\\\"600\\\" style=\\\"width:100%;\\\" filename=\\\"screenshot-8.png\\\">\\n\\t<$data title=\\\"HelloThere\\\" text=\\\"! This tiddler is inside a wiki that is inside a wiki\\\"/>\\n\\t<$data title=\\\"$:/DefaultTiddlers\\\" text=\\\"HelloThere $:/plugins/tiddlywiki/innerwiki/inner-example\\\"/>\\n\\t<$data $tiddler=\\\"$:/plugins/tiddlywiki/innerwiki\\\"/>\\n\\t<<big-arrow 100 50 colour:#00ff00>>\\n</$innerwiki>\\\"\\\"\\\"/>\\n\\n(You can see the innerwiki here: $:/plugins/tiddlywiki/innerwiki/inner-example)\\n\\nNote the way that the innerwiki plugin has to be explicitly added to the innerwiki.\\n\"},\"$:/plugins/tiddlywiki/innerwiki/inner-example\":{\"title\":\"$:/plugins/tiddlywiki/innerwiki/inner-example\",\"text\":\"<$innerwiki width=\\\"1200\\\" height=\\\"400\\\" style=\\\"width:100%;\\\">\\n\\t<$anchor x=\\\"screenshot-inner-anchor-1-x\\\" y=\\\"screenshot-inner-anchor-1-y\\\"/>\\n\\t<circle cx={{screenshot-inner-anchor-1-x}} cy={{screenshot-inner-anchor-1-y}} r=\\\"50\\\" stroke=\\\"blue\\\" stroke-width=\\\"2\\\" fill=\\\"green\\\" />\\n\\t<$data title=\\\"HelloThere\\\" text=\\\"! This tiddler is inside a wiki that is inside a wiki that is inside a wiki\\\"/>\\n\\t<$data title=\\\"$:/DefaultTiddlers\\\" text=\\\"HelloThere\\\"/>\\n\\t<$data title=\\\"$:/palette\\\" text=\\\"$:/palettes/SolarFlare\\\"/>\\n</$innerwiki>\"},\"$:/plugins/tiddlywiki/innerwiki/readme\":{\"title\":\"$:/plugins/tiddlywiki/innerwiki/readme\",\"text\":\"!! Introduction\\n\\nThis plugin enables TiddlyWiki to embed a modified copy of itself (an \\\"innerwiki\\\") with overlaid graphics. The primary motivation is to be able to produce screenshot illustrations that are automatically up-to-date with the appearance of TiddlyWiki as it changes over time, or to produce the same screenshot in different languages.\\n\\nIn the browser, innerwikis are displayed as an embedded iframe. Under Node.js [[Google's Puppeteer|https://pptr.dev/]] is used to load the innerwikis as off-screen web pages and then snapshot them as a PNG image.\\n\\n!! Warnings\\n\\nThe `<$innerwiki>` widget is relatively slow and resource intensive: each time it is refreshed it will entirely rebuild the iframe containing the innerwiki.\\n\\nThe `<$innerwiki>` widget does not automatically resize with its container (for example, try hiding the sidebar in this wiki).\\n\\n!! Prequisites\\n\\nIn order to take screenshots under Node.js, Google Puppeteer must first be installed from [[npm|https://npmjs.org//]]. For most situations, it should be installed at the root of the TiddlyWiki 5 repo:\\n\\n```\\ncd Jermolene/TiddlyWiki5\\nnpm install puppeteer\\n```\\n\\nHowever, if you're working in a different repo that uses npm to install TiddlyWiki 5 then you should install Puppeteer into the same repo. The general rule is that the `node_modules` folder containing Puppeteer should be contained within an ancestor of the folder containing TiddlyWiki's `tiddlywiki.js` file.\\n\\n\"},\"$:/plugins/tiddlywiki/innerwiki/innerwiki.js\":{\"title\":\"$:/plugins/tiddlywiki/innerwiki/innerwiki.js\",\"text\":\"/*\\\\\\ntitle: $:/plugins/tiddlywiki/innerwiki/innerwiki.js\\ntype: application/javascript\\nmodule-type: widget\\n\\nWidget to display an innerwiki in an iframe\\n\\n\\\\*/\\n(function(){\\n\\n/*jslint node: true, browser: true */\\n/*global $tw: false */\\n\\\"use strict\\\";\\n\\nvar DEFAULT_INNERWIKI_TEMPLATE = \\\"$:/plugins/tiddlywiki/innerwiki/template\\\";\\n\\nvar Widget = require(\\\"$:/core/modules/widgets/widget.js\\\").widget,\\n\\tDataWidget = require(\\\"$:/plugins/tiddlywiki/innerwiki/data.js\\\").data,\\n\\tdm = $tw.utils.domMaker;\\n\\nvar InnerWikiWidget = function(parseTreeNode,options) {\\n\\tthis.initialise(parseTreeNode,options);\\n};\\n\\n/*\\nInherit from the base widget class\\n*/\\nInnerWikiWidget.prototype = new Widget();\\n\\n/*\\nRender this widget into the DOM\\n*/\\nInnerWikiWidget.prototype.render = function(parent,nextSibling) {\\n\\tvar self = this;\\n\\tthis.parentDomNode = parent;\\n\\tthis.computeAttributes();\\n\\tthis.execute();\\n\\t// Create wrapper\\n\\tthis.domWrapper = dm(\\\"div\\\",{\\n\\t\\tdocument: this.document,\\n\\t\\t\\\"class\\\": (this.innerWikiClass || \\\"\\\").split(\\\" \\\").concat([\\\"tc-innerwiki-wrapper\\\"]).join(\\\" \\\"),\\n\\t\\tstyle: {\\n\\t\\t\\toverflow: \\\"hidden\\\",\\n\\t\\t\\tposition: \\\"relative\\\",\\n\\t\\t\\tboxSizing: \\\"content-box\\\"\\n\\t\\t}\\n\\t});\\n\\t// Set up the SVG container\\n\\tthis.domSVG = dm(\\\"svg\\\",{\\n\\t\\tnamespace: \\\"http://www.w3.org/2000/svg\\\",\\n\\t\\tdocument: this.document,\\n\\t\\tstyle: {\\n\\t\\t\\twidth: \\\"100%\\\",\\n\\t\\t\\tposition: \\\"absolute\\\",\\n\\t\\t\\tzIndex: \\\"1\\\",\\n\\t\\t\\tpointerEvents: \\\"none\\\"\\n\\t\\t},\\n\\t\\tattributes: {\\n\\t\\t\\t\\\"viewBox\\\": \\\"0 0 \\\" + this.innerWikiClipWidth + \\\" \\\" + this.innerWikiClipHeight\\n\\t\\t}\\n\\t});\\n\\tthis.domWrapper.appendChild(this.domSVG);\\n\\tthis.setVariable(\\\"namespace\\\",\\\"http://www.w3.org/2000/svg\\\");\\n\\t// Create the iframe for the browser or image for Node.js\\n\\tif(!this.document.isTiddlyWikiFakeDom) {\\n\\t\\t// Create iframe\\n\\t\\tthis.domIFrame = dm(\\\"iframe\\\",{\\n\\t\\t\\tdocument: this.document,\\n\\t\\t\\t\\\"class\\\": \\\"tc-innerwiki-iframe\\\",\\n\\t\\t\\tstyle: {\\n\\t\\t\\t\\tposition: \\\"absolute\\\",\\n\\t\\t\\t\\tmaxWidth: \\\"none\\\",\\n\\t\\t\\t\\tborder: \\\"none\\\"\\n\\t\\t\\t},\\n\\t\\t\\tattributes: {\\n\\t\\t\\t\\twidth: this.innerWikiWidth,\\n\\t\\t\\t\\theight: this.innerWikiHeight\\n\\t\\t\\t}\\n\\t\\t});\\n\\t\\tthis.domWrapper.appendChild(this.domIFrame);\\n\\t} else {\\n\\t\\t// Create image placeholder\\n\\t\\tthis.domImage = dm(\\\"img\\\",{\\n\\t\\t\\tdocument: this.document,\\n\\t\\t\\tstyle: {\\n\\t\\t\\t\\twidth: \\\"100%\\\"\\n\\t\\t\\t},\\n\\t\\t\\tattributes: {\\n\\t\\t\\t\\tsrc: this.innerWikiFilename\\n\\t\\t\\t}\\n\\t\\t});\\n\\t\\tthis.domWrapper.appendChild(this.domImage);\\n\\t}\\n\\t// Insert wrapper into the DOM\\n\\tparent.insertBefore(this.domWrapper,nextSibling);\\n\\tthis.renderChildren(this.domSVG,null);\\n\\tthis.domNodes.push(this.domWrapper);\\n\\t// If we're on the real DOM, finish the initialisation that needs us to be in the DOM\\n\\tif(!this.document.isTiddlyWikiFakeDom) {\\n\\t\\t// Write the HTML\\n\\t\\tthis.domIFrame.contentDocument.open();\\n\\t\\tthis.domIFrame.contentDocument.write(this.createInnerHTML());\\n\\t\\tthis.domIFrame.contentDocument.close();\\n\\t}\\n\\t// Scale the iframe and adjust the height of the wrapper\\n\\tthis.clipLeft = this.innerWikiClipLeft;\\n\\tthis.clipTop = this.innerWikiClipTop;\\n\\tthis.clipWidth = this.innerWikiClipWidth;\\n\\tthis.clipHeight = this.innerWikiClipHeight;\\n\\tthis.scale = this.domWrapper.clientWidth / this.clipWidth;\\n\\t// Display the anchors\\n\\tif(!this.document.isTiddlyWikiFakeDom) {\\n\\t\\tthis.domAnchorContainer = dm(\\\"div\\\",{\\n\\t\\t\\tdocument: this.document,\\n\\t\\t\\tstyle: {\\n\\t\\t\\t\\tposition: \\\"relative\\\",\\n\\t\\t\\t\\tzIndex: \\\"2\\\",\\n\\t\\t\\t\\ttransformOrigin: \\\"0 0\\\",\\n\\t\\t\\t\\ttransform:  \\\"scale(\\\" + this.scale + \\\")\\\"\\n\\t\\t\\t}\\n\\t\\t});\\n\\t\\tthis.domAnchorBackdrop = dm(\\\"div\\\",{\\n\\t\\t\\tdocument: this.document,\\n\\t\\t\\tstyle: {\\n\\t\\t\\t\\tposition: \\\"absolute\\\",\\n\\t\\t\\t\\tdisplay: \\\"none\\\"\\n\\t\\t\\t}\\n\\t\\t});\\n\\t\\tthis.domAnchorContainer.appendChild(this.domAnchorBackdrop);\\n\\t\\tthis.domWrapper.insertBefore(this.domAnchorContainer,this.domWrapper.firstChild);\\n\\t\\tself.createAnchors();\\n\\t}\\n\\t// Scale the iframe and adjust the height of the wrapper\\n\\tif(!this.document.isTiddlyWikiFakeDom) {\\n\\t\\tthis.domIFrame.style.transformOrigin = this.clipLeft + \\\"px \\\" + this.clipTop + \\\"px\\\";\\n\\t\\tthis.domIFrame.style.transform = \\\"translate(\\\" + (-this.clipLeft) + \\\"px,\\\" + (-this.clipTop) + \\\"px) scale(\\\" + this.scale + \\\")\\\";\\n\\t\\tthis.domWrapper.style.height = (this.clipHeight * this.scale) + \\\"px\\\";\\n\\t}\\n};\\n\\n/*\\nCreate the anchors\\n*/\\nInnerWikiWidget.prototype.createAnchors = function() {\\n\\tvar self = this;\\n\\tthis.findDataWidgets(this.children,\\\"anchor\\\",function(widget) {\\n\\t\\tvar anchorWidth = 40,\\n\\t\\t\\tanchorHeight = 40,\\n\\t\\t\\tgetAnchorCoordinate = function(name) {\\n\\t\\t\\t\\treturn parseInt(self.wiki.getTiddlerText(widget.getAttribute(name)),10) || 0;\\n\\t\\t\\t},\\n\\t\\t\\tsetAnchorCoordinate = function(name,value) {\\n\\t\\t\\t\\tself.wiki.addTiddler({\\n\\t\\t\\t\\t\\ttitle: widget.getAttribute(name),\\n\\t\\t\\t\\t\\ttext: value + \\\"\\\"\\n\\t\\t\\t\\t});\\n\\t\\t\\t},\\n\\t\\t\\tdomAnchor = dm(\\\"img\\\",{\\n\\t\\t\\t\\tdocument: self.document,\\n\\t\\t\\t\\tstyle: {\\n\\t\\t\\t\\t\\tposition: \\\"absolute\\\",\\n\\t\\t\\t\\t\\twidth: anchorWidth + \\\"px\\\",\\n\\t\\t\\t\\t\\theight: anchorHeight + \\\"px\\\",\\n\\t\\t\\t\\t\\ttransformOrigin: \\\"50% 50%\\\",\\n\\t\\t\\t\\t\\ttransform: \\\"scale(\\\" + (1 / self.scale) + \\\")\\\",\\n\\t\\t\\t\\t\\tleft: (getAnchorCoordinate(\\\"x\\\") - anchorWidth / 2) + \\\"px\\\",\\n\\t\\t\\t\\t\\ttop: (getAnchorCoordinate(\\\"y\\\") - anchorHeight / 2) + \\\"px\\\"\\n\\t\\t\\t\\t},\\n\\t\\t\\t\\tattributes: {\\n\\t\\t\\t\\t\\tdraggable: false,\\n\\t\\t\\t\\t\\tsrc: \\\"data:image/svg+xml,\\\" + encodeURIComponent(self.wiki.getTiddlerText(\\\"$:/plugins/tiddlywiki/innerwiki/crosshairs.svg\\\"))\\n\\t\\t\\t\\t}\\n\\t\\t\\t});\\n\\t\\tself.domAnchorContainer.appendChild(domAnchor);\\n\\t\\tvar posX,posY,dragStartX,dragStartY,deltaX,deltaY,\\n\\t\\t\\tfnMouseDown = function(event) {\\n\\t\\t\\t\\tself.domAnchorBackdrop.style.width = self.clipWidth + \\\"px\\\";\\n\\t\\t\\t\\tself.domAnchorBackdrop.style.height = self.clipHeight + \\\"px\\\";\\n\\t\\t\\t\\tself.domAnchorBackdrop.style.display = \\\"block\\\";\\n\\t\\t\\t\\tposX = domAnchor.offsetLeft;\\n\\t\\t\\t\\tposY = domAnchor.offsetTop;\\n\\t\\t\\t\\tdragStartX = event.clientX;\\n\\t\\t\\t\\tdragStartY = event.clientY;\\n\\t\\t\\t\\tdeltaX = 0;\\n\\t\\t\\t\\tdeltaY = 0;\\n\\t\\t\\t\\tself.document.addEventListener(\\\"mousemove\\\",fnMouseMove,false);\\n\\t\\t\\t\\tself.document.addEventListener(\\\"mouseup\\\",fnMouseUp,false);\\n\\t\\t\\t},\\n\\t\\t\\tfnMouseMove = function(event) {\\n\\t\\t\\t\\tdeltaX = (event.clientX - dragStartX) / self.scale;\\n\\t\\t\\t\\tdeltaY = (event.clientY - dragStartY) / self.scale;\\n\\t\\t\\t\\tdomAnchor.style.left = (posX + deltaX) + \\\"px\\\";\\n\\t\\t\\t\\tdomAnchor.style.top = (posY + deltaY) + \\\"px\\\";\\n\\t\\t\\t},\\n\\t\\t\\tfnMouseUp = function(event) {\\n\\t\\t\\t\\tvar x = getAnchorCoordinate(\\\"x\\\") + deltaX,\\n\\t\\t\\t\\t\\ty = getAnchorCoordinate(\\\"y\\\") + deltaY;\\n\\t\\t\\t\\tif(x >= 0 && x < self.clipWidth && y >= 0 && y < self.clipHeight) {\\n\\t\\t\\t\\t\\tsetAnchorCoordinate(\\\"x\\\",x);\\n\\t\\t\\t\\t\\tsetAnchorCoordinate(\\\"y\\\",y);\\n\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\tdomAnchor.style.left = posX + \\\"px\\\";\\n\\t\\t\\t\\t\\tdomAnchor.style.top = posY + \\\"px\\\";\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\tself.domAnchorBackdrop.style.display = \\\"none\\\";\\n\\t\\t\\t\\tself.document.removeEventListener(\\\"mousemove\\\",fnMouseMove,false);\\n\\t\\t\\t\\tself.document.removeEventListener(\\\"mouseup\\\",fnMouseUp,false);\\n\\t\\t\\t};\\n\\t\\tdomAnchor.addEventListener(\\\"mousedown\\\",fnMouseDown,false);\\n\\t});\\n};\\n\\n/*\\nDelete the anchors\\n*/\\nInnerWikiWidget.prototype.deleteAnchors = function() {\\n\\tfor(var index=this.domAnchorContainer.childNodes.length-1; index>=0; index--) {\\n\\t\\tvar node = this.domAnchorContainer.childNodes[index];\\n\\t\\tif(node.tagName === \\\"IMG\\\") {\\n\\t\\t\\tnode.parentNode.removeChild(node);\\n\\t\\t}\\n\\t}\\n};\\n\\n/*\\nCreate the HTML of the innerwiki\\n*/\\nInnerWikiWidget.prototype.createInnerHTML = function() {\\n\\t// Get the HTML of the iframe\\n\\tvar html = this.wiki.renderTiddler(\\\"text/plain\\\",this.innerWikiTemplate);\\n\\t// Insert the overlay tiddlers\\n\\tvar SPLIT_MARKER = \\\"<!--~~ Boot\\\" + \\\" kernel ~~-->\\\\n\\\",\\n\\t\\tIMPLANT_PREFIX = \\\"<\\\" + \\\"script>\\\\n$tw.preloadTiddlerArray(\\\",\\n\\t\\tIMPLANT_SUFFIX = \\\");\\\\n</\\\" + \\\"script>\\\\n\\\",\\n\\t\\tparts = html.split(SPLIT_MARKER),\\n\\t\\ttiddlers = this.readTiddlerDataWidgets(this.children);\\n\\tif(parts.length === 2) {\\n\\t\\thtml = parts[0] + IMPLANT_PREFIX + JSON.stringify(tiddlers) + IMPLANT_SUFFIX + SPLIT_MARKER + parts[1];\\n\\t}\\n\\treturn html;\\n};\\n\\n/*\\nFind child data widgets\\n*/\\nInnerWikiWidget.prototype.findDataWidgets = function(children,tag,callback) {\\n\\tvar self = this;\\n\\t$tw.utils.each(children,function(child) {\\n\\t\\tif(child.dataWidgetTag === tag) {\\n\\t\\t\\tcallback(child);\\n\\t\\t}\\n\\t\\tif(child.children) {\\n\\t\\t\\tself.findDataWidgets(child.children,tag,callback);\\n\\t\\t}\\n\\t});\\n};\\n\\n/*\\nFind the child data widgets\\n*/\\nInnerWikiWidget.prototype.readTiddlerDataWidgets = function(children) {\\n\\tvar self = this,\\n\\t\\tresults = [];\\n\\tthis.findDataWidgets(children,\\\"data\\\",function(widget) {\\n\\t\\tArray.prototype.push.apply(results,self.readTiddlerDataWidget(widget));\\n\\t});\\n\\treturn results;\\n};\\n\\n/*\\nRead the value(s) from a data widget\\n*/\\nInnerWikiWidget.prototype.readTiddlerDataWidget = function(dataWidget) {\\n\\t// Start with a blank object\\n\\tvar item = Object.create(null);\\n\\t// Read any attributes not prefixed with $\\n\\t$tw.utils.each(dataWidget.attributes,function(value,name) {\\n\\t\\tif(name.charAt(0) !== \\\"$\\\") {\\n\\t\\t\\titem[name] = value;\\t\\t\\t\\n\\t\\t}\\n\\t});\\n\\t// Deal with $tiddler or $filter attributes\\n\\tvar titles;\\n\\tif(dataWidget.hasAttribute(\\\"$tiddler\\\")) {\\n\\t\\ttitles = [dataWidget.getAttribute(\\\"$tiddler\\\")];\\n\\t} else if(dataWidget.hasAttribute(\\\"$filter\\\")) {\\n\\t\\ttitles = this.wiki.filterTiddlers(dataWidget.getAttribute(\\\"$filter\\\"));\\n\\t}\\n\\tif(titles) {\\n\\t\\tvar results = [];\\n\\t\\t$tw.utils.each(titles,function(title,index) {\\n\\t\\t\\tvar tiddler = $tw.wiki.getTiddler(title),\\n\\t\\t\\t\\tfields;\\n\\t\\t\\tif(tiddler) {\\n\\t\\t\\t\\tfields = tiddler.getFieldStrings();\\n\\t\\t\\t}\\n\\t\\t\\tresults.push($tw.utils.extend({},item,fields));\\n\\t\\t})\\n\\t\\treturn results;\\n\\t} else {\\n\\t\\treturn [item];\\t\\t\\n\\t}\\n};\\n\\n/*\\nCompute the internal state of the widget\\n*/\\nInnerWikiWidget.prototype.execute = function() {\\n\\tvar parseStringAsNumber = function(num,defaultValue) {\\n\\t\\tnum = parseInt(num + \\\"\\\",10);\\n\\t\\tif(!isNaN(num)) {\\n\\t\\t\\treturn num;\\n\\t\\t} else {\\n\\t\\t\\treturn parseInt(defaultValue + \\\"\\\",10);\\n\\t\\t}\\n\\t};\\n\\t// Get our parameters\\n\\tthis.innerWikiTemplate = this.getAttribute(\\\"template\\\",DEFAULT_INNERWIKI_TEMPLATE);\\n\\tthis.innerWikiWidth = parseStringAsNumber(this.getAttribute(\\\"width\\\"),800);\\n\\tthis.innerWikiHeight = parseStringAsNumber(this.getAttribute(\\\"height\\\"),600);\\n\\tthis.innerWikiStyle = this.getAttribute(\\\"style\\\");\\n\\tthis.innerWikiClass = this.getAttribute(\\\"class\\\");\\n\\tthis.innerWikiFilename = this.getAttribute(\\\"filename\\\");\\n\\tthis.innerWikiClipLeft = parseStringAsNumber(this.getAttribute(\\\"clipLeft\\\"),0);\\n\\tthis.innerWikiClipTop = parseStringAsNumber(this.getAttribute(\\\"clipTop\\\"),0);\\n\\tthis.innerWikiClipWidth = parseStringAsNumber(this.getAttribute(\\\"clipWidth\\\"),this.innerWikiWidth);\\n\\tthis.innerWikiClipHeight = parseStringAsNumber(this.getAttribute(\\\"clipHeight\\\"),this.innerWikiHeight);\\n\\t// Construct the child widgets\\n\\tthis.makeChildWidgets();\\n};\\n\\n/*\\nSelectively refreshes the widget if needed. Returns true if the widget or any of its children needed re-rendering\\n*/\\nInnerWikiWidget.prototype.refresh = function(changedTiddlers) {\\n\\tvar changedAttributes = this.computeAttributes();\\n\\tif(changedAttributes.template || changedAttributes.width || changedAttributes.height || changedAttributes.style || changedAttributes.class) {\\n\\t\\tthis.refreshSelf();\\n\\t\\treturn true;\\n\\t} else {\\n\\t\\tvar childrenRefreshed = this.refreshChildren(changedTiddlers);\\n\\t\\tif(childrenRefreshed) {\\n\\t\\t\\tthis.deleteAnchors();\\n\\t\\t\\tthis.createAnchors();\\n\\t\\t}\\n\\t\\treturn childrenRefreshed\\n\\t}\\n};\\n\\n/*\\nUse Puppeteer to save a screenshot to a file\\n*/\\nInnerWikiWidget.prototype.saveScreenshot = function(options,callback) {\\n\\tvar self = this,\\n\\t\\tbasepath = options.basepath || \\\".\\\",\\n\\t\\tdeviceScaleFactor = options.deviceScaleFactor || 1;\\n\\t// Don't do anything if we don't have a filename\\n\\tif(!this.innerWikiFilename) {\\n\\t\\treturn callback(null);\\n\\t}\\n\\tvar path = require(\\\"path\\\"),\\n\\t\\tfilepath = path.resolve(basepath,this.innerWikiFilename);\\n\\t$tw.utils.createFileDirectories(filepath);\\n\\tconsole.log(\\\"Taking screenshot\\\",filepath);\\n\\t// Fire up Puppeteer\\n\\tvar puppeteer;\\n\\ttry {\\n\\t\\tpuppeteer = require(\\\"puppeteer\\\");\\n\\t} catch(e) {\\n\\t\\tthrow \\\"Google Puppeteer not found\\\";\\n\\t}\\n\\t// Take screenshots\\n\\tpuppeteer.launch().then(async browser => {\\n\\t\\t// NOTE: Copying Google's sample code by using new fangled promises \\\"await\\\"\\n\\t\\tconst page = await browser.newPage();\\n\\t\\tawait page.setContent(self.createInnerHTML(),{\\n\\t\\t\\twaitUntil: \\\"domcontentloaded\\\"\\n\\t\\t});\\n\\t\\tawait page.setViewport({\\n\\t\\t\\twidth: Math.trunc(self.innerWikiWidth),\\n\\t\\t\\theight: Math.trunc(self.innerWikiHeight),\\n\\t\\t\\tdeviceScaleFactor: deviceScaleFactor\\n\\t\\t});\\n\\t\\t// PDF generation isn't great: there's no clipping, and pagination is hard to control\\n\\t\\t// await page.emulateMedia(\\\"screen\\\");\\n\\t\\t// await page.pdf({\\n\\t\\t// \\tscale: 0.5,\\n\\t\\t// \\twidth: self.innerWikiWidth + \\\"px\\\",\\n\\t\\t// \\theight: self.innerWikiHeight + \\\"px\\\",\\n\\t\\t// \\tpath: filepath + \\\".pdf\\\",\\n\\t\\t// \\tprintBackground: true\\n\\t\\t// });\\n\\t\\tawait page.screenshot({\\n\\t\\t\\tpath: filepath,\\n\\t\\t\\tclip: {\\n\\t\\t\\t\\tx: self.innerWikiClipLeft,\\n\\t\\t\\t\\ty: self.innerWikiClipTop,\\n\\t\\t\\t\\twidth: self.innerWikiClipWidth,\\n\\t\\t\\t\\theight: self.innerWikiClipHeight\\n\\t\\t\\t},\\n\\t\\t\\ttype: \\\"png\\\"\\n\\t\\t});\\n\\t\\tawait browser.close();\\n\\t\\tcallback(null);\\n\\t});\\n};\\n\\nexports.innerwiki = InnerWikiWidget;\\n\\n})();\\n\",\"type\":\"application/javascript\",\"module-type\":\"widget\"},\"$:/plugins/tiddlywiki/innerwiki/screenshot.js\":{\"title\":\"$:/plugins/tiddlywiki/innerwiki/screenshot.js\",\"text\":\"/*\\\\\\ntitle: $:/plugins/tiddlywiki/innerwiki/screenshot.js\\ntype: application/javascript\\nmodule-type: command\\n\\nCommands to render tiddlers identified by a filter and save any screenshots identified by <$innerwiki> widgets\\n\\n\\\\*/\\n(function(){\\n\\n/*jslint node: true, browser: true */\\n/*global $tw: false */\\n\\\"use strict\\\";\\n\\nvar InnerWikiWidget = require(\\\"$:/plugins/tiddlywiki/innerwiki/innerwiki.js\\\").innerwiki;\\n\\nexports.info = {\\n\\tname: \\\"screenshot\\\",\\n\\tsynchronous: false\\n};\\n\\nvar Command = function(params,commander,callback) {\\n\\tthis.params = params;\\n\\tthis.commander = commander;\\n\\tthis.callback = callback;\\n};\\n\\nCommand.prototype.execute = function() {\\n\\tvar self = this;\\n\\tif(this.params.length < 1) {\\n\\t\\treturn \\\"Missing filter\\\";\\n\\t}\\n\\tvar filter = this.params[0],\\n\\t\\tdeviceScaleFactor = parseInt(this.params[1],10) || 1,\\n\\t\\ttiddlers = this.commander.wiki.filterTiddlers(filter);\\n\\t// Render each tiddler into a widget tree\\n\\tvar innerWikiWidgets = [];\\n\\t$tw.utils.each(tiddlers,function(title) {\\n\\t\\tvar parser = self.commander.wiki.parseTiddler(title),\\n\\t\\t\\tvariables = {currentTiddler: title},\\n\\t\\t\\twidgetNode = self.commander.wiki.makeWidget(parser,{variables: variables}),\\n\\t\\t\\tcontainer = $tw.fakeDocument.createElement(\\\"div\\\");\\n\\t\\twidgetNode.render(container,null);\\n\\t\\t// Find any innerwiki widgets\\n\\t\\tArray.prototype.push.apply(innerWikiWidgets,self.findInnerWikiWidgets(widgetNode));\\n\\t});\\n\\t// Asynchronously tell each innerwiki widget to save a screenshot\\n\\tvar processNextInnerWikiWidget = function() {\\n\\t\\tif(innerWikiWidgets.length > 0) {\\n\\t\\t\\tvar widget = innerWikiWidgets[0];\\n\\t\\t\\tinnerWikiWidgets.shift();\\n\\t\\t\\twidget.saveScreenshot({\\n\\t\\t\\t\\tbasepath: self.commander.outputPath,\\n\\t\\t\\t\\tdeviceScaleFactor: deviceScaleFactor\\n\\t\\t\\t},function(err) {\\n\\t\\t\\t\\tif(err) {\\n\\t\\t\\t\\t\\tself.callback(err);\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\tprocessNextInnerWikiWidget();\\n\\t\\t\\t});\\n\\t\\t} else {\\n\\t\\t\\tself.callback(null);\\n\\t\\t}\\n\\t};\\n\\tprocessNextInnerWikiWidget();\\n\\treturn null;\\n};\\n\\nCommand.prototype.findInnerWikiWidgets = function(widgetNode) {\\n\\tvar self = this,\\n\\t\\tresults = [];\\n\\tif(widgetNode.saveScreenshot) {\\n\\t\\tresults.push(widgetNode)\\n\\t}\\n\\t$tw.utils.each(widgetNode.children,function(childWidget) {\\n\\t\\tArray.prototype.push.apply(results,self.findInnerWikiWidgets(childWidget));\\n\\t});\\n\\treturn results;\\n};\\n\\nexports.Command = Command;\\n\\n})();\\n\",\"type\":\"application/javascript\",\"module-type\":\"command\"},\"$:/plugins/tiddlywiki/innerwiki/styles\":{\"title\":\"$:/plugins/tiddlywiki/innerwiki/styles\",\"tags\":\"[[$:/tags/Stylesheet]]\",\"text\":\"\\\\rules only filteredtranscludeinline transcludeinline macrodef macrocallinline\\n\\n.tc-innerwiki-wrapper {\\n\\tborder: 1px solid #666;\\n\\t<<box-shadow \\\"2px 2px 5px rgba(0, 0, 0, 0.5)\\\">>\\n}\\n\"},\"$:/plugins/tiddlywiki/innerwiki/template\":{\"title\":\"$:/plugins/tiddlywiki/innerwiki/template\",\"text\":\"\\\\define saveTiddlerFilter()\\n$:/boot/boot.css\\n$:/boot/boot.js\\n$:/boot/bootprefix.js\\n$:/core\\n$:/library/sjcl.js\\n$:/plugins/tiddlywiki/innerwiki\\n$:/plugins/tiddlywiki/railroad\\n$:/themes/tiddlywiki/snowwhite\\n$:/themes/tiddlywiki/vanilla\\n\\\\end\\n{{$:/core/templates/tiddlywiki5.html}}\\n\"}}}"});