/////////////////////////////////////Improvements/////////////////////////////////////////////////////
//
//		Update assignment table
//		Citizens
//			count (with district limit)
//			Specialists
//			assignment
//		Specific civilisation
//		Recap by city
//		Buildings in disctricts
//		Research tree bonuses
//		Strategic & bonus Ressources
//		Coastal specifics
//		Wonders Bonuses
//		Natural Wonders
//		
//		
//////////////////////////////////////////////////////////////////////////////////////////////////////

function aff(obj) {
 // document.getElementById("display3").innerHTML += obj + " - ";
 // console.log(obj);
 var myString = JSON.stringify(obj);
 document.getElementById("display3").innerHTML += myString + "<br>";
 // console.log({obj})
}
// var bonus = 0;
var imgSource = "";
var cityWidth = 1;
var ccSelected=hex(0,0,0);
var tileSelected = "Campus";
var h0 = hex(0,0,0);
var grid=new Array();
var canvas = document.getElementById("hexmap");
 canvas.setAttribute('width', 0.57 * window.innerWidth);
 canvas.setAttribute('height', 0.5 * window.innerHeight);
 // canvas.setAttribute('height', 0.96 * window.innerHeight);
var ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
var size = Point(zoom.value, zoom.value);
// aff(size)
rayon = document.getElementById("rayon");
var N=parseInt(rayon.value);
var origin = Point(canvas.width / 2, canvas.height / 2);
// aff(size.x*N)
// var origin = Point(size.x*N*3, size.x*N*2+1);
// aff(origin)
var layout_pointy = Orientation(
 Math.sqrt(3.0),
 Math.sqrt(3.0) / 2.0,
 0.0,
 3.0 / 2.0,
 Math.sqrt(3.0) / 3.0,
 -1.0 / 3.0,
 0.0,
 2.0 / 3.0,
 0.5);
var Lpointy = Layout(layout_pointy, size, origin);
var map = document.getElementById("map").value;
var oldhex =hex(0, 0, 0);
var oldQuTy = "Grassland";
var textAreaMap="";
var h=hex(0, 0, 0);
var hShape = makeHexagonalShape(N);
 var bonusTotal = [];
 bonusTotal["production"] = 0;
 bonusTotal["gold"] = 0;
 bonusTotal["science"] = 0;
 bonusTotal["culture"] = 0;
 bonusTotal["faith"] = 0;
 bonusTotal["GreatMerchant"] = 0;
 bonusTotal["GreatScientist"] = 0;
 bonusTotal["GreatEngineer"] = 0;
 bonusTotal["GreatWriter"] = 0;
 bonusTotal["GreatArtist"] = 0;
 bonusTotal["GreatMusician"] = 0;
 bonusTotal["GreatProphet"] = 0;
 bonusTotal["GreatAdmiral"] = 0;
 bonusTotal["GreatGeneral"] = 0;
	
	var listList =[
		"districtList",
		"wonderList",
		"buildableTerrainList",
		"notBuildableTerrainList",
		"otherTileList"
	];
var bonusRessourcesList=[
	"Bananas",
	"Copper",
	"Cattle",
	"Crabs",
	"Deer",
	"Fish",
	"Maize",
	"Rice",
	"Sheep",
	"Stone",
	"Wheat"
];
var strategicRessourcesList=[
	"Horses",
	"Iron",
	"Niter",
	"Coal",
	"Oil",
	"Aluminum",
	"Uranium"
];
var forestList=[
	"Woods",
	"Rainforest"
];
var luxuryRessourcesList=[
	"Amber",
	"Cinnamon",
	"Citrus",
	"Cloves",
	"Cocoa",
	"Coffee",
	"Cosmetics",
	"Cotton",
	"Dyes",
	"Diamonds",
	"Furs",
	"Gold_Ore",
	"Gypsum",
	"Honey",
	"Incense",
	"Ivory",
	"Jade",
	"Jeans",
	"Marble",
	"Mercury",
	"Olives",
	"Pearls",
	"Perfume",
	"Salt",
	"Silk",
	"Silver",
	"Spices",
	"Sugar",
	"Tea",
	"Tobacco",
	"Toys",
	"Truffles",
	"Turtles",
	"Whales",
	"Wine"
];
var districtList =[
 "Commercial_Hub",
 "Industrial_Zone",
 "Campus",
 "Theater_Square",
 "Harbor",
 "Aqueduc",
		"Dam",
		"Canal",
 "Encampment",
 "Holy_Site",
 "Entertainment_Complex",
		"Water_Park",
 "Neighborhood",
 "Aerodrome",
 "Spaceport",
 "Government_Plaza"
];
var wonderList =[
 "Alhambra",
"Colossus",
"Hagia_Sophia",
"Meenakshi_Temple",
"Statue_of_Liberty",
"Amundsen-Scott_Research_Station",
"Cristo_Redentor",
"Hanging_Gardens",
"Mont_St._Michel",
"St_Basils_Cathedral",
"Angkor_Wat",
"Eiffel_Tower",
"Hermitage",
"Oracle",
"Stonehenge",
"Apadana",
"Estadio_do_Maracana",
"Huey_Teocalli",
"Orszaghaz",
"Sydney_Opera_House",
"Big_Ben",
"Forbidden_City",
"Jebel_Barkal",
"Oxford_University",
"Taj_Mahal",
"Bolshoi_Theatre",
"Golden_Gate_Bridge",
"Kilwa_Kisiwani",
"Panama_Canal",
"Temple_of_Artemis",
"Broadway",
"Great_Bath",
"Kotoku-in",
"Petra",
"Terracotta_Army",
"Casa_de_Contratacion",
"Great_Library",
"Machu_Picchu",
"Potala_Palace",
"University_of_Sankore",
"Chichen_Itza",
"Great_Lighthouse",
"Mahabodhi_Temple",
"Pyramids",
"Venetian_Arsenal",
"Colosseum",
"Great_Zimbabwe",
"Mausoleum_at_Halicarnassus",
"Ruhr_Valley"
];
var buildableTerrainList =[
	"Grassland",
	"Plains",
	"Desert",
	"Tundra",
	"Snow",
	"Grassland_Hills",
	"Plains_Hills",
	"Desert_Hills",
	"Tundra_Hills",
	"Snow_Hills",
	"Grassland_Floodplains",
	"Plains_Floodplains",
	"Desert_Floodplains",
	"Volcanic_Soil"
];
var notBuildableTerrainList =[
	"Marsh",
	"Oasis",
	"Coast",
	"Ocean",
	"Reef",
	"Cataract",
	"Ice",
	"Geothermal_Fissure",
	"Volcano",
	"Mountains" 
];
var otherTileList=[
	// "emptyHex",
	"demolish",
	"City_Center"
]
var riverListList=[
	"RiverEE",
	"RiverNE",
	"RiverNW",
	"RiverWW",
	"RiverSW",
	"RiverSE"
]

var tileList = districtList.concat(wonderList,buildableTerrainList,notBuildableTerrainList,otherTileList);

function Hexagon(thisH,thisType) {
 this.q=thisH.q;
 this.type=thisType;
 // this.age=un_age;
}

function Point(x, y) {
 return {
 x: x,
 y: y
 };
}
function hex(q, r, s) {
 if (Math.round(q + r + s) !== 0) /* aff("q + r + s must be 0") */ ;
 return {
 q: q,
 r: r,
 s: s
 };
}
function hex_add(a, b) {
 return hex(a.q + b.q, a.r + b.r, a.s + b.s);
}
function hex_subtract(a, b) {
 return hex(a.q - b.q, a.r - b.r, a.s - b.s);
}
function hex_scale(a, k) {
 return hex(a.q * k, a.r * k, a.s * k);
}
function hex_rotate_left(a) {
 return hex(-a.s, -a.q, -a.r);
}
function hex_rotate_right(a) {
 return hex(-a.r, -a.s, -a.q);
}
var hex_directions = [
 hex(1, 0, -1),
 hex(1, -1, 0),
 hex(0, -1, 1),
 hex(-1, 0, 1),
 hex(-1, 1, 0),
 hex(0, 1, -1)
];
var river_directions = [
 ["RiverEE","RiverWW"],
 ["RiverNE","RiverSW"],
 ["RiverNW","RiverSE"],
 ["RiverWW","RiverEE"],
 ["RiverSW","RiverNE"],
 ["RiverSE","RiverNW"]
];
function hex_direction(direction) {
 return hex_directions[direction];
}
function hex_neighbor(hex, direction) {
 return hex_add(hex,hex_direction(direction));
}
function Coord(col, row) {
 return {
 col: col,
 row: row
 };
}
function coordToArray(h){
	 N= parseInt(N);
	 q= parseInt(h.q);
	 r= parseInt(h.r);
	// if (h.r<0){
		// var row=h.r+N;
		// var col=h.q+N;	
		// var col=h.q+N+h.r;	
	// }else if (h.r>=0){
		// row=r+N;
		// col=q+N;
		row=q+N;
		col=r+N;	
	// }else{
		// aff("pb in coordToArray")
	// }
	// aff(typeof row)
	// aff(typeof col)
 return Coord(row,col);
}
function ArrayToCoord(row,col){
	// if (h.r<0){
		// var row=h.r+N;
		var r=row-N;
		var q=col-N;
		// var col=h.q+N;	
		// var col=h.q+N+h.r;	
	// }else if (h.r>=0){
		// var row=h.r+N;
		// var col=h.q+N;	
	// }else{
		// aff("pb in coordToArray")
	// }
 return hex(q,r,-q-r);
}

var hex_diagonals = [
 hex(2, -1, -1),
 hex(1, -2, 1),
 hex(-1, -1, 2),
 hex(-2, 1, 1),
 hex(-1, 2, -1),
 hex(1, 1, -2)
];
function hex_diagonal_neighbor(hex, direction) {
 return hex_add(hex,hex_diagonals[direction]);
}
function hex_length(hex) {
 return (Math.abs(hex.q) + Math.abs(hex.r) + Math.abs(hex.s)) / 2;
}

function hex_round(h) {
 var qi = Math.round(h.q);
 var ri = Math.round(h.r);
 var si = Math.round(h.s);
 var q_diff = Math.abs(qi -h.q);
 var r_diff = Math.abs(ri -h.r);
 var s_diff = Math.abs(si -h.s);
 if (q_diff > r_diff && q_diff > s_diff) {
 qi = -ri - si;
 } else if (r_diff > s_diff) {
 ri = -qi - si;
 } else {
 si = -qi - ri;
 }
 return hex(qi, ri, si);
}
function hex_lerp(a, b, t) {
 return hex(
 a.q * (1.0 - t) + b.q * t,
 a.r * (1.0 - t) + b.r * t,
 a.s * (1.0 - t) + b.s * t);
}
function hex_linedraw(a, b) {
 var N =hex_distance(a, b);
 var a_nudge =hex(a.q + 1e-6, a.r + 1e-6, a.s - 2e-6);
 var b_nudge =hex(b.q + 1e-6, b.r + 1e-6, b.s - 2e-6);
 var results = [];
 var step = 1.0 / Math.max(N, 1);
 for (var i = 0; i <= N; i++) {
 results.push(hex_round(hex_lerp(a_nudge, b_nudge, step * i)));
 }
 return results;
}
function OffsetCoord(col, row) {
 return {
 col: col,
 row: row
 };
}
var EVEN = 1;
var ODD = -1;
function qoffset_from_cube(offset,h) {
 var col =h.q;
 var row =h.r + (h.q + offset * (h.q & 1)) / 2;
 if (offset !== EVEN && offset !== ODD) {
 throw "offset must be EVEN (+1) or ODD (-1)";
 }
 return OffsetCoord(col, row);
}
function qoffset_to_cube(offset,h) {
 var q =h.col;
 var r =h.row - (h.col + offset * (h.col & 1)) / 2;
 var s = -q - r;
 if (offset !== EVEN && offset !== ODD) {
 throw "offset must be EVEN (+1) or ODD (-1)";
 }
 return hex(q, r, s);
}
function roffset_from_cube(offset,h) {
 var col =h.q + (h.r + offset * (h.r & 1)) / 2;
 var row =h.r;
 if (offset !== EVEN && offset !== ODD) {
 throw "offset must be EVEN (+1) or ODD (-1)";
 }
 return OffsetCoord(col, row);
}
function roffset_to_cube(offset,h) {
 var q =h.col - (h.row + offset * (h.row & 1)) / 2;
 var r =h.row;
 var s = -q - r;
 if (offset !== EVEN && offset !== ODD) {
 throw "offset must be EVEN (+1) or ODD (-1)";
 }
 return hex(q, r, s);
}
function DoubledCoord(col, row) {
 return {
 col: col,
 row: row
 };
}
function qdoubled_from_cube(h) {
 var col =h.q;
 var row = 2 *h.r +h.q;
 return DoubledCoord(col, row);
}
function qdoubled_to_cube(h) {
 var q =h.col;
 var r = (h.row -h.col) / 2;
 var s = -q - r;
 return hex(q, r, s);
}
function rdoubled_from_cube(h) {
 var col = 2 *h.q +h.r;
 var row =h.r;
 return DoubledCoord(col, row);
}
function rdoubled_to_cube(h) {
 var q = (h.col -h.row) / 2;
 var r =h.row;
 var s = -q - r;
 return hex(q, r, s);
}
function Orientation(f0, f1, f2, f3, b0, b1, b2, b3, start_angle) {
 return {
 f0: f0,
 f1: f1,
 f2: f2,
 f3: f3,
 b0: b0,
 b1: b1,
 b2: b2,
 b3: b3,
 start_angle: start_angle
 };
}

function Layout(orientation, size, origin) {
 return {
 orientation: orientation,
 size: size,
 origin: origin
 };
}
var layout_flat = Orientation(
 3.0 / 2.0,
 0.0,
 Math.sqrt(3.0) / 2.0,
 Math.sqrt(3.0),
 2.0 / 3.0,
 0.0,
 -1.0 / 3.0,
 Math.sqrt(3.0) / 3.0,
 0.0);
function hex_to_pixel(layout,h) {
 var M = layout.orientation;
 var size = layout.size;
 var origin = layout.origin;
 var x = (M.f0 *h.q + M.f1 *h.r) * size.x;
 var y = (M.f2 *h.q + M.f3 *h.r) * size.y;
 return Point(x + origin.x, y + origin.y);
}

function pixel_to_hex(layout, p) {
 var M = layout.orientation;
 var size = layout.size;
 var origin = layout.origin;
 var pt = Point((p.x - origin.x) / size.x, (p.y - origin.y) / size.y);
 var q = M.b0 * pt.x + M.b1 * pt.y;
 var r = M.b2 * pt.x + M.b3 * pt.y;
 return hex(q, r, -q - r);
}

function hex_corner_offset(layout, corner) {
 var M = layout.orientation;
 var size = layout.size;
 var angle = (2.0 * Math.PI * (M.start_angle - corner)) / 6.0;
 return Point(size.x * Math.cos(angle), size.y * Math.sin(angle));
}

function polygon_corners(layout, h) {
 var corners = [];
 var center = hex_to_pixel(layout, h);
 var X = 0;
 var Y = 0;
 for (var i = 0; i < 6; i++) {
 var offset = hex_corner_offset(layout, i);
	if (center.x < offset.x){
		X=center.x + offset.x;
	}else{
		X=center.x + offset.x;
	}
	if (center.y < offset.y){
		Y=center.y + offset.y;
	}else{
		Y=center.y + offset.y;
	}
	
	corners.push(Point(X, Y));
 }
 return corners;
}

function complain(name) {
 console.log("FAIL", name);
}

function equal_hex(name, a, b) {
 if (!(a.q === b.q && a.s === b.s && a.r === b.r)) {
 complain(name);
 }else{
		return true;
	}
}

function equal_offsetcoord(name, a, b) {
 if (!(a.col === b.col && a.row === b.row)) {
 complain(name);
 }
}

function equal_doubledcoord(name, a, b) {
 if (!(a.col === b.col && a.row === b.row)) {
 complain(name);
 }
}

function equal_int(name, a, b) {
 if (!(a === b)) {
 complain(name);
 }
}

function equal_hex_array(name, a, b) {
 equal_int(name, a.length, b.length);
 for (var i = 0; i < a.length; i++) {
 equal_hex(name, a[i], b[i]);
 }
	return a[i];
}

function makeHexagonalShape(N) {
 let results = [];
 for (let q = -N; q <= N; q++) {
 for (let r = -N; r <= N; r++) {
 let hexo = new hex(q, r, -q - r);
 if (hexo.s <= N && -hexo.s <= N) {
 results.push(hexo);
 }
 }
 }
 return results;
}

function makeDownTriangularShape(N) {
 let results = [];
 for (let r = 0; r < N; r++) {
 for (let q = 0; q < N - r; q++) {
 results.push(new hex(q, r, -q - r));
 }
 }
 return results;
}
function copy() {
 var copyText = document.getElementById("map");
 copyText.select();
 copyText.setSelectionRange(0, 99999);
 document.execCommand("copy");
}
function link() {
	var saveText = document.getElementById("map").value;
	var copyText = document.getElementById("map");
	urlp=[];
	var textToCopy=location.href;
	// var textToCopy=s[0]+"?"+copyText.value;
	// textToCopy=textToCopy.replace(new RegExp('\t'), '#');
	document.getElementById("map").value=textToCopy;
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand("copy");
	document.getElementById("map").value=saveText;
	// var copyText = document.getElementById("map");
	// urlp=[];
	// s=location.toString().split('?');
	// var textToCopy=s[0]+"?"+copyText.value;
	// textToCopy=textToCopy.replace(new RegExp('\t'), '#');
	
	// aff (textToCopy)
	// document.execCommand("copy");
// var string = textToCopy;
// aff("Size of sample is: " + string.length);
// var compressed = LZString.compress(string);
// aff(compressed)
// aff("Size of compressed sample is: " + compressed.length);
// string = LZString.decompress(compressed);
// aff("Sample is: " + string);
	
	
}
function paste() {
	
	// var rayon = document.getElementById("rayon");
	// N = parseInt(rayon.value);
	// var zoom = document.getElementById("zoom");
	// var canvas = document.getElementById("hexmap");
	// var ctx = canvas.getContext("2d");
	// var origin = Point(canvas.width / 2, canvas.height / 2);
	var map = document.getElementById("map").value;
	var pastedShape = map.split ("#")
	// aff (pastedShape)
	// pastedShape.pop();
	// grid=[];
	// aff(grid)
	while(grid.length > 0) {
		grid.pop();
	}
	// aff(grid)
	// aff("xxxxxxxxxxxxxxxxxxxxxxxxxxx")
	for (i=0;i<pastedShape.length;i++) {
	// aff (pastedShape[i])
		 
		pastedShape[i]= pastedShape[i].split(":");
		pastedShape[i][0]= pastedShape[i][0].split(",");
		pastedShape[i][6]= pastedShape[i][6].split(",");
	// aff (pastedShape[i])
		// pastedShape[i][1]= pastedShape[i][1].split(" - ");	
		// pastedShape[i][2]= pastedShape[i][2].split(" @ ");	
		// if (
		// aff(pastedShape[i][1][0].includes("Grassland"))
		// aff("---------")
		// aff(pastedShape[i][0])
		// aff(pastedShape[i][1])
		// aff(pastedShape[i][2])
		// aff(pastedShape[i][3])
		var s=-pastedShape[i][0][0]-pastedShape[i][0][1];
		var q=pastedShape[i][0][0];
		var r=pastedShape[i][0][1];
		// aff (s)
		// aff(s)
		var pasteHex = hex(q,r,s);
		// aff(pasteHex)
		// aff(N)
		var arrayCoordPaste=coordToArray(pasteHex);
		// aff(arrayCoordPaste)
		var row = arrayCoordPaste.col;
		var col = arrayCoordPaste.row;
		// aff (col)
		if (typeof grid[row] === 'undefined'){
			grid[row] = new Array();
		}
		if (typeof grid[row][col] === 'undefined'){
			grid[row][col] = new Array();
		}
		if (typeof pastedShape[i][6][0] === 'undefined'){
			s_ass = "undefined";
		}else{
			var s_ass=-pastedShape[i][6][0]-pastedShape[i][6][1];
			// aff(s_ass)
			var q_ass=pastedShape[i][6][0];
			var r_ass=pastedShape[i][6][1];
			// aff("ba")
		}
		// aff(s_ass)
		if (s_ass=== null){
			s_ass = undefined
		}
		if (pastedShape[i][6][1] !== 'undefined'){
			var assignment=hex(q_ass,r_ass,s_ass);
			// aff("ici")
		}else{
			var assignment=hex(undefined,undefined,undefined);
			// aff("là")
		}
		// aff(pastedShape[i][6])
		grid[row][col] = [
			pasteHex,
			pastedShape[i][1],
			pastedShape[i][2],
			pastedShape[i][3],
			pastedShape[i][4],
			pastedShape[i][5],
			assignment,
			// "none"
			// hex(q,r,s)
		];
		
	}
	// affGrid()
 drawGrid()
}
function drawGrid(){
	// hShape = makeHexagonalShape(N);
	bonusTotal = [];
 bonusTotal["production"] = 0;
 bonusTotal["gold"] = 0;
 bonusTotal["science"] = 0;
 bonusTotal["culture"] = 0;
 bonusTotal["faith"] = 0;
 bonusTotal["GreatMerchant"] = 0;
 bonusTotal["GreatScientist"] = 0;
 bonusTotal["GreatEngineer"] = 0;
 bonusTotal["GreatWriter"] = 0;
 bonusTotal["GreatArtist"] = 0;
 bonusTotal["GreatMusician"] = 0;
 bonusTotal["GreatProphet"] = 0;
 bonusTotal["GreatAdmiral"] = 0;
 bonusTotal["GreatGeneral"] = 0;
 // document.getElementById("display3").innerHTML = "";
 map="";
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 for (var row=0;row<grid.length;row++){
		if (typeof grid[row]!=='undefined'){
			// aff(row)
			// aff (grid[row].length)
					if (map !==""){
						map += "\r";
					}
			for (var col=0;col<grid[row].length;col++){
			if (typeof grid[row]!=='undefined' && typeof grid[row][col]!==undefined && typeof grid[row][col][0]!=='undefined'){
					drawhex(grid[row][col][0],grid[row][col][1],grid[row][col][2],grid[row][col][3],grid[row][col][4],grid[row][col][5],bonusTotal,row,col,grid[row][col][6]);
					
					// map += grid[row][col][0].q+","+grid[row][col][0].r+": "+grid[row][col][1]+" - "+grid[row][col][4]+" @ "+grid[row][col][5].q+","+grid[row][col][5].r+"\n";
					map += grid[row][col][0].q+","+grid[row][col][0].r;
					for (i=1;i<6;i++){
						if (grid[row][col][i]!== null){
							map += ":"+grid[row][col][i];
						}else{
							// map += ":";
						}
					}
					if (grid[row][col][6].q!==undefined){
						map += ":"+grid[row][col][6].q+","+grid[row][col][6].r;
					} else{
						// map += ":NotAssigned";
					}
					// if (map !==""){
						map += "\t";
						// map += "\t";
					// }
				}
			}
		}
 }
	
document.getElementById("production").innerHTML=bonusTotal["production"];
document.getElementById("gold").innerHTML=bonusTotal["gold"];
document.getElementById("science").innerHTML=bonusTotal["science"];
document.getElementById("culture").innerHTML=bonusTotal["culture"];
document.getElementById("faith").innerHTML=bonusTotal["faith"];
document.getElementById("GreatMerchant").innerHTML=bonusTotal["GreatMerchant"];
document.getElementById("GreatScientist").innerHTML=bonusTotal["GreatScientist"];
document.getElementById("GreatEngineer").innerHTML=bonusTotal["GreatEngineer"];
document.getElementById("GreatWriter").innerHTML=bonusTotal["GreatWriter"];
document.getElementById("GreatArtist").innerHTML=bonusTotal["GreatArtist"];
document.getElementById("GreatMusician").innerHTML=bonusTotal["GreatMusician"];
document.getElementById("GreatProphet").innerHTML=bonusTotal["GreatProphet"];
document.getElementById("GreatAdmiral").innerHTML=bonusTotal["GreatAdmiral"];
document.getElementById("GreatGeneral").innerHTML=bonusTotal["GreatGeneral"];
document.getElementById("map").value=map;
// document.getElementById("map").value=JSON.parse(JSON.stringify(grid));

	var link = location.href.split("?");
if (link[1] !== undefined){
	// aff ("----------")
	// aff (link[1])
	// aff (JSON.stringify(link[1]))
	// link[1]= JSON.stringify(link[1]);
	link[1]=link[1].replace (/%22/g,"\""); 
	// aff ("----------")
	// aff (link[1])
	// aff (JSON.stringify(link[1]))
	// aff (grid)
	// aff (JSON.stringify(grid))
	if (link[1]!==JSON.stringify(grid)){
		location.href=link[0]
		+"?"+JSON.stringify(grid)
		// +"?"+JSON.stringify(cities)
		+"?"
		+"?"+JSON.stringify(ccSelected)
		+"?"+tileSelected
		+"?"+N
		;
	}
}else{
	location.href=link[0]
		+"?"+JSON.stringify(grid)
		// +"?"+JSON.stringify(cities)
		+"?"
		+"?"+JSON.stringify(ccSelected)
		+"?"+tileSelected
		+"?"+N
		;
}
	// affGrid()
if (document.getElementById("map").clientHeight < document.getElementById("map").scrollHeight) document.getElementById("map").style.height=document.getElementById("map").scrollHeight+"px";
}
function hex_distance(a, b){
 return Math.max(Math.abs(a.q - b.q), Math.abs(a.r - b.r), Math.abs(a.s - b.s))
}
function drawHexSimple(h){
	ctx.beginPath();
	var hco = polygon_corners(Lpointy, h);
	for (var z = 0; z < 6; z++) {
		ctx.lineTo(hco[z].x,hco[z].y);
	}
	ctx.fill();
	ctx.closePath();
	ctx.stroke();
	return hco
}
function drawhex(h,Type,Forest,Ressource,District,river,bonusTotal,row,col,cityAttached) {
	// aff (h)
	var textm= "",texth= "",textb = "",bonus=0;
	var lineWidth = 1;
	ctx.lineWidth = lineWidth;
	// ctx.fillStyle = "grey";
	// ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
	ctx.strokeStyle = "white";
	var hco=drawHexSimple(h);
	if (Type=== undefined) {
		Type="emptyHex";
	}
	//dessin des terrains
	var img = new Image();
	img.src = 'img/'+Type+'.webp'; 
	// aff(img.src)
	ctx.drawImage(
	img,
		hco[4].x ,
		hco[2].y ,
		hco[0].x -hco[3].x ,
		hco[5].y -hco[2].y );
	// }
	
	if (Forest!==undefined){	//dessin des forêt
		var img = new Image(); 
		img.src = 'img/'+Forest+'.webp'; 
		// aff(img.src)
		ctx.drawImage(
			img,
			hco[4].x +(size.x)/3 ,
			hco[2].y +(size.y)/8,
			(hco[0].x -hco[3].x)/1.6 ,
			(hco[5].y -hco[2].y)/2 );
	}
	if (Ressource!==undefined){
		var img = new Image(); 
		img.src = 'img/'+Ressource+'.webp'; 
		// aff(img.src)
		ctx.drawImage(
			img,
			hco[4].x +(size.x)/3 ,
			hco[2].y +7*(size.y)/8,
			(hco[0].x -hco[3].x)/1.6 ,
			(hco[5].y -hco[2].y)/2 );
	}
	if (District!==undefined){
		// ctx.globalAlpha = 0.7;
		var img = new Image(); 
		img.src = 'img/'+District+'.webp'; 
		// aff(img.src)
		ctx.drawImage(
			img,
			hco[4].x ,
			hco[2].y ,
			hco[0].x -hco[3].x ,
			hco[5].y -hco[2].y );
		 
		// ctx.globalAlpha = 1;
	}	 
		 
		 
	// ctx.globalAlpha = 0.5;
 
	// ctx.globalAlpha =1;
	// if (tileSelected==="City_Center"){
		// ctx.fillStyle = "rgba(120,0,0, 0.4)"; // red
		// for (trow=0;trow<grid.length;trow++){
					// for (tcol=0;tcol<grid[trow].length;tcol++){
						// var compHex=hex(grid[trow][tcol][0].q,grid[trow][tcol][0].r,grid[trow][tcol][0].s);
						// console.log(trow,tcol,hex_distance(h,compHex))
						// if (hex_distance(h,compHex)>=cityWidth){
							// hco=drawHexSimple(h);
						// }
					// }
				// }
		
		
		// for( var i = 0; i < cities.length; i++){ 
			// if (hex_distance(h,cities[i][0])<=cityWidth){
				// hco=drawHexSimple(h);
			// }
		// }
	// }
	// if (hex_distance(h,ccSelected)<=cityWidth){
		// ctx.fillStyle = "rgba(11,156,49, 0.4)"; // green
		// hco=drawHexSimple(h);
	// } 	
	// aff (cityAttached)
	if (typeof cityAttached.q === "undefined"){
		for (i=0;i<districtList.length;i++){
			if (District === districtList[i]){
				ctx.fillStyle = "rgba(80,80,80, 0.6)";
				hco=drawHexSimple(h);
				textm = "no city";
			}
		}
	}else{
		bonus=bonux(h,District);
		if (bonus!==0){
			textm = "+" + bonus;
		}
	}
		 
		 
		 
		 
		 
		 
 if (river!==null && typeof river!=="undefined"){
			
	// aff(river)
	var count = river.match(/River/g);
	var str="";
	var taille="RiverEE".length;
	for (var x=0;x<count.length;x++){
	var start = x*taille;
	var end = (x+1)*taille;
	// aff(start +"+"+end)
	str = river.substring(start,end);
	// aff(str)
	var imgRiver = new Image(); 
	imgRiver.src = 'img/'+str+'.webp'; // Définit le chemin vers sa source
	ctx.drawImage(
		imgRiver,
		hco[4].x ,
		hco[2].y ,
		hco[0].x -hco[3].x ,
		hco[5].y -hco[2].y );
	}
 }
 
 var fontSize = 15;
 ctx.font = "bolder " + fontSize + "px Sofia";
 ctx.textBaseline = "middle";
 ctx.textAlign = "center";
 ctx.strokeStyle = "rgba(47,79,79, 0.5)";
 ctx.lineWidth = 1;
 var center = hex_to_pixel(Lpointy, h);
 /////////////////////////////////
 // afficher les coord sur les hex
 /////////////////////////////////
 texth = "c:" + col + ";r:" + row;
	
	
 
 textb = "" + h.q + " ; " + h.r;
 /////////////////////////////////
 
 
 
 ctx.stroke();
 ctx.strokeStyle = "black";
 ctx.fillStyle = "white";
 ///////////////////afficher texte haut
 // ctx.fillText(texth, center.x, center.y - fontSize);
 // ctx.strokeText(texth, center.x, center.y - fontSize);
	
 ///////////////////afficher texte milieu
 ctx.fillText(textm, center.x, center.y);
 ctx.strokeText(textm, center.x, center.y);
	
 ///////////////////afficher texte bas
 // ctx.fillText(textb, center.x, center.y + fontSize);
 // ctx.strokeText(textb, center.x, center.y + fontSize);
}
function bonusAdjDis(neiDistrict,bonus) {
	for (var j = 0; j < districtList.length; j++) {
		if (neiDistrict == districtList[j]) {
			bonus = bonus + 0.5;
			// aff("bonus:"+bonus);
		}
	}
	if (neiDistrict ==="City_Center") {
		bonus = bonus + 0.5;
		// aff("bonus:"+bonus);
	}
	return bonus;
}
function bonusGovernment_Plaza(neiDistrict,bonus) {
 // for (var j = 0; j < districtList.length; j++) {
 // if (neiDistrict == districtList[j]) {
 if (neiDistrict === "Government_Plaza") {
 bonus = bonus + 1;
 }
 // }
 // }
 return bonus;
}
function bonux(h, districtType) {

// aff(h);
var bonus = 0;
	var thisTyle=coordToArray(h);
	var col = thisTyle.col;
	var row = thisTyle.row;
		// aff(grid[row][col][5])
	if (districtType==="Commercial_Hub"){
		if (typeof grid[row][col][5] !== 'undefined' && grid[row][col][5] !==undefined && grid[row][col][5]!== null){
			bonus= bonus + 2;
		}
	}
	
 for (var z = 0; z < 6; z++) {
 var nh = hex_neighbor(h, z);
	// aff(nh)
 var arrayCoord = coordToArray(nh);
 var col=arrayCoord.col;
 var row=arrayCoord.row;
	if (typeof grid[row]!== 'undefined' && typeof grid[row][col]!== 'undefined' && typeof grid[row][col][4]!== 'undefined' ){
		var neiDistrict = grid[row][col][4];
		}else{
		var neiDistrict="emptyHex";
 }
	if (typeof grid[row]!== 'undefined' && typeof grid[row][col]!== 'undefined' && typeof grid[row][col][1]!== 'undefined' ){
		var neiTerrain = grid[row][col][1];
		}else{
		var neiTerrain="emptyHex";
 }
	if (typeof grid[row]!== 'undefined' && typeof grid[row][col]!== 'undefined' && typeof grid[row][col][1]!== 'undefined' ){
		var neiForest = grid[row][col][2];
		}else{
		var neiForest="emptyHex";
 }
	// if (districtType=="Campus"|| districtType=="Holy_Site"){
		// if (typeof grid[col]!== 'undefined' && typeof grid[row][col]!== 'undefined' && typeof grid[row][col][1]!== 'undefined' ){
			// var neiDistrict = grid[row][col][1];
			// }else{
			// var neiDistrict="emptyHex";
		// }
	// }
 for (var i = 0; i < districtList.length; i++) {
		 if (districtType === districtList[i]) {
				switch (districtType) {
				 case "City_Center":
					bonus = 0;
					break;
				 case "Commercial_Hub":
					bonus = bonusAdjDis(neiDistrict, bonus);
					bonus = bonusGovernment_Plaza(neiDistrict, bonus);				
					switch (neiDistrict) {
					 case "Harbor":
						bonus = bonus + 2;
						break;}
					if (z===5){
						bonusTotal["GreatMerchant"]+=1;
						bonus=Math.floor(bonus);
						bonusTotal["gold"]+=bonus;}
					break;
				 case "Industrial_Zone":
					bonus = bonusAdjDis(neiDistrict, bonus);
					bonus = bonusGovernment_Plaza(neiDistrict, bonus);
					switch (neiDistrict) {
					 case "Quarry ou Strategic Resource Mine or Lumber Mill":
						bonus += bonus + 1;
						break;
					 case "Aqueduc":
						bonus += bonus + 2;
						break;}
					if (z===5){
						bonusTotal["GreatEngineer"]+=1;
						bonus=Math.floor(bonus);
						bonusTotal["production"]+=bonus;
						bonusTotal["gold"]+=-1;}
					break;
				 case "Campus":
					bonus = bonusAdjDis(neiDistrict, bonus);
					bonus = bonusGovernment_Plaza(neiDistrict, bonus);
					if (neiForest === "Rainforest"){
						bonus = bonus + 2;
					}
					switch (neiTerrain) {
					 case "Mountains":
						bonus = bonus + 1;
						break;
					 case "Geothermal_Fissure":
						bonus = bonus + 2;
						break;
					 case "Reef":
						bonus = bonus + 2;
						break;}
					if (z===5){
						bonusTotal["GreatScientist"]+=1;
						bonusTotal["gold"]+=-1;
						bonus=Math.floor(bonus);
						bonusTotal["science"]+=bonus;}
					break;
				 case "Theater_Square":
					bonus = bonusAdjDis(neiDistrict, bonus);
					bonus = bonusGovernment_Plaza(neiDistrict, bonus);
					switch (neiDistrict) {
					 ///////////////////////a  implementer
					 case "Wonder":
						bonus = bonus + 2;
						break;}
					if (z===5){
						bonusTotal["GreatWriter"]+=1;
						bonusTotal["GreatArtist"]+=1;
						bonusTotal["GreatMusician"]+=1;
						bonusTotal["gold"]+=-1;
						bonus=Math.floor(bonus);
						bonusTotal["culture"]+=bonus;}
					break;
				 case "Harbor":
					bonus = bonusAdjDis(neiDistrict, bonus);
					bonus = bonusGovernment_Plaza(neiDistrict, bonus);
					switch (neiDistrict) {
					 ///////////////////////a  implementer
					 case "CoastalRessources":
						bonus = bonus + 1;
						break;
					 case "City_Center":
						bonus = bonus + 2;
						break;}
					if (z===5){
						bonusTotal["GreatAdmiral"]+=1;
						bonus=Math.floor(bonus);
						bonusTotal["gold"]+=bonus;}
					break;
				 case "Aqueduc":
					break;
				 case "Encampment":
					if (z===5){
						bonusTotal["GreatGeneral"]+=1;}
					break;
				 case "Holy_Site":
					bonus = bonusAdjDis(neiDistrict, bonus);
					bonus = bonusGovernment_Plaza(neiDistrict, bonus);
					if (neiForest === "Woods"){
						bonus = bonus + 0.5;
					}
					switch (neiTerrain) {
					 ///////////////////////a  implementer
					 case "NaturalWonder":
						bonus = bonus + 2;
						break;
					 case "Mountains":
						bonus = bonus + 1;
						break;
					}
					if (z===5){
						bonusTotal["GreatProphet"]+=1;
						bonusTotal["gold"]+=-1;
						bonus=Math.floor(bonus);
						bonusTotal["faith"]+=bonus;}
					break;
				 case "Entertainment_Complex":
					break;
				 case "Neighborhood":
					break;
				 case "Aerodrome":
					if (z===5){
						bonusTotal["gold"]+=-1;}
					break;
				 case "Spaceport":
					break;
				 case "Government_Plaza":
					if (z===5){
						bonusTotal["gold"]+=-1;}
					break;
				 default:
			}
 }
 }
 }
 return bonus;
}

function River (h,typeQuartier){
	
	var arrayCoordh=coordToArray(h);
	var col = arrayCoordh.col;
	var row = arrayCoordh.row;
	if (typeof grid[row] !== 'undefined' && typeof grid[row][col] !== 'undefined' && typeof grid[row][col][5] !== 'undefined'){
		var oldRiver = grid[row][col][5]
		if (oldRiver===null){
			grid[row][col][5]=typeQuartier;
		}else if (oldRiver.search(typeQuartier)===-1){
			grid[row][col][5]+=typeQuartier;
		}else if (temp=oldRiver.search(typeQuartier)!==-1){
			oldRiver=oldRiver.replace(typeQuartier,"");
			grid[row][col][5]=oldRiver;
		}
	}
}
function start (){
	// location.href=location.href+"?toto";
	s=location.toString().split('?');
	if (s[1] === undefined){
		if (typeof grid === 'undefined'){
			grid = new Array();
		}
		for (row=0;row<(2*N+1);row++){
			if (typeof grid[row] === 'undefined'){
				grid[row] = new Array();
			}
			for (col=0;col<(2*N+1);col++){
					grid[row][col]=([ArrayToCoord(row,col),'Grassland',undefined,undefined,undefined,undefined,hex(undefined,undefined,undefined)]);
			}
		}
		var arrayCoordh0=coordToArray(h0);
		var col = arrayCoordh0.col;
		var row = arrayCoordh0.row;
		grid[row][col]= [ArrayToCoord(col,row),"Grassland",undefined,undefined,"City_Center",undefined,h0];
		ccSelected = h0;
		// N=3;
		// affGrid()
	}else{
		var temp = location.href.split ("?");
		// aff (temp[1])
		temp[1]=temp[1].replace (/%22/g,"\""); 
		temp[2]=temp[2].replace (/%22/g,"\""); 
		temp[3]=temp[3].replace (/%22/g,"\""); 
		temp[4]=temp[4].replace (/%22/g,"\""); 
		// temp[1]=temp[1].replace (/null/g,"undefined"); 
		// aff (temp[2])
		// aff (JSON.parse(temp[1]))
		// aff (JSON.parse(temp[2]))
		grid = JSON.parse(temp[1]);
		// aff (temp[3])
		// aff (temp[4])
		
		document.getElementById('selection').innerHTML = temp[4];
		ccSelected = JSON.parse(temp[3]);
		tileSelected = temp[4];
		N = temp[5];
		document.getElementById("map").value=temp[1];
		// document.getElementById("Assignment").value=temp[2];
		document.getElementById("rayon").value=temp[5];
		// aff (map)
		// paste()
		// for (i=0;i<temp.length;i++){
			// aff(temp[i])
		// }
	}
			var source = 'img/'+tileSelected+'.webp';
			// aff(source)
			document.getElementById('cursor').src=source;
 document.getElementById('selection').innerHTML = tileSelected;
	document.getElementById('CCselection').innerHTML = "Q: "+ccSelected.q+" - R: "+ ccSelected.r;
		
	// drawGrid();
}
function affGrid(){
	var txt='<table style="width:100%" border="1">';
		txt+= "<tr><td></td>";
			for (col=0;col<grid[N].length;col++){
					txt += "<td>col: "+col+"</td>";
			}
			txt+= '</tr>';
	for (col=0;col<grid.length;col++){
		txt += "<tr><td>row: "+col+"</td>";
		if (typeof grid[col]!=='undefined'){
			for (row=0;row<grid[col].length;row++){
				 if (grid[row][col]!==undefined){
					// txt += "<td>"+JSON.stringify(grid[row][col])+"</td>";
					// txt += "<td>"+JSON.stringify(grid[row][col][0])+"</td>";
					// txt += "<td>q: "+grid[row][col][0].q+"; r: "+grid[row][col][0].r+"<br>r: "+row+" ; c: "+col+"</td>";
					// txt += "<td>q: "+grid[row][col][0].q+"; r: "+grid[row][col][0].r+"<br>r: "+row+" ; c: "+col+"<br>"+grid[row][col][1]+"<br>"+grid[row][col][4]+"<br>"+grid[row][col][5]+"<br>q: "+grid[row][col][6].q+"; r: "+grid[row][col][6].r+"</td>";
					txt += "<td>q: "+grid[row][col][0].q+"; r: "+grid[row][col][0].r+"; s: "+grid[row][col][0].s
					+"<br>c: "+row+" ; r: "+col
					+"<br>"+grid[row][col][1]
					+"<br>"+grid[row][col][2]
					+"<br>"+grid[row][col][3]
					+"<br>"+grid[row][col][4]
					+"<br>"+grid[row][col][5]
					+"<br>q: "+grid[row][col][6].q+"; r: "+grid[row][col][6].r+"; s: "+grid[row][col][6].s
					+"</td>";
					// txt += "<td>"+JSON.stringify(grid[row][col][4])+"</td>";
					// txt += "<td>"+JSON.stringify(grid[row][col][0])+grid[row][col][1]+"</td>";
				}else{
					txt += "<td>error</td>"
				}
			}
		}
 }
	txt+= '</table>';
	// aff(txt);
}
function increaseRadius(dif){
	for (x=0; x<dif;x++){
		N=N+1;
		document.getElementById("rayon").value=N;
		document.getElementById("rayonDisplay").innerHTML = N
		grid.unshift(new Array());
		grid.push(new Array());
		for (row=0;row<(2*N+1);row++){
			if (row === 0){
				for (col=0;col<(2*N+1);col++){
						grid[row][col]=([ArrayToCoord(row,col),'Snow',undefined,undefined,undefined,undefined,hex(undefined,undefined,undefined)]);
				}
			}else if (row === (2*N)){
				for (col=0;col<(2*N+1);col++){
						grid[row][col]=([ArrayToCoord(row,col),'Snow',undefined,undefined,undefined,undefined,hex(undefined,undefined,undefined)]);
				}
			}else{
					grid[row].unshift([ArrayToCoord(row,0),'Grassland_Floodplains',undefined,undefined,undefined,undefined,hex(undefined,undefined,undefined)]);
					grid[row].push([ArrayToCoord(row,2*N),'Desert',undefined,undefined,undefined,undefined,hex(undefined,undefined,undefined)]);
			}
		}
	}
	// start();
	// aff("oui")
}

function citiyAssignment (thishex,districtType,thisRow,thisCol){
	var existed=false;
	var cityDeleted=false;
	for (row=0;row<grid.length;row++){
		for (col=0;col<grid[row].length;col++){
			if (equal_hex("cities/ccSelected",grid[row][col][6],ccSelected)){
				if (districtType===grid[row][col][4]){
					existed=true;
				}
			}
			if (equal_hex("cities/ccSelected",grid[row][col][6],thishex)){
				if (districtType==="demolish"){
					if (grid[thisRow][thisCol][4]==="City_Center"){
						grid[row][col][6]=hex(undefined,undefined,undefined);
						cityDeleted=true;
					}
				}
			}
		}	
	}
	// aff(thishex)
	if (cityDeleted===true){
		ccSelected=hex(undefined,undefined,undefined);
	}
	if (existed === true){
		grid[thisRow][thisCol][6]=hex(undefined,undefined,undefined);
	}else if (existed === false){
		grid[thisRow][thisCol][6]=hex(ccSelected.q,ccSelected.r,ccSelected.s);
	}
}

(function () {
 var temptext = '<fieldset><legend>Selectionnez une construction</legend>';
	for (i=0;i<otherTileList.length;i++){
		temptext +='<input id="'+otherTileList[i]+'" type="radio" name="credit-card" value="'+otherTileList[i]+'" /><label class="drinkcard-cc '+otherTileList[i]+'" for="'+otherTileList[i]+'" style="background-image:url(img/'+otherTileList[i]+'.webp);" title="'+otherTileList[i]+'"></label>';
	}
	for (i=0;i<forestList.length;i++){
		temptext +='<input id="'+forestList[i]+'" type="radio" name="credit-card" value="'+forestList[i]+'" /><label class="drinkcard-cc '+forestList[i]+'" for="'+forestList[i]+'" style="background-image:url(img/'+forestList[i]+'.webp);" title="'+forestList[i]+'"></label>';
	}
	for (i=0;i<riverListList.length;i++){
		temptext +='<input id="'+riverListList[i]+'" type="radio" name="credit-card" value="'+riverListList[i]+'" /><label class="drinkcard-cc '+riverListList[i]+'" for="'+riverListList[i]+'" style="background-image:url(img/'+riverListList[i]+'.webp); background-image:url(img/'+riverListList[i]+'_ico.webp);" title="'+riverListList[i]+'"></label>';
	}
	temptext += '</fieldset><fieldset><legend>Selectionnez un district</legend>';
	for (i=0;i<districtList.length;i++){
		temptext +='<input id="'+districtList[i]+'" type="radio" name="credit-card" value="'+districtList[i]+'" /><label class="drinkcard-cc '+districtList[i]+'" for="'+districtList[i]+'" style="background-image:url(img/'+districtList[i]+'.webp);" title="'+districtList[i]+'"></label>';
	}
	temptext += '</fieldset><fieldset><legend>Selectionnez un terrain constructible</legend>';
	for (i=0;i<buildableTerrainList.length;i++){
		temptext +='<input id="'+buildableTerrainList[i]+'" type="radio" name="credit-card" value="'+buildableTerrainList[i]+'" /><label class="drinkcard-cc '+buildableTerrainList[i]+'" for="'+buildableTerrainList[i]+'" style="background-image:url(img/'+buildableTerrainList[i]+'.webp);" title="'+buildableTerrainList[i]+'"></label>';
	}
	temptext += '</fieldset><fieldset><legend>Selectionnez un terrain non constructible</legend>';
	for (i=0;i<notBuildableTerrainList.length;i++){
		temptext +='<input id="'+notBuildableTerrainList[i]+'" type="radio" name="credit-card" value="'+notBuildableTerrainList[i]+'" /><label class="drinkcard-cc '+notBuildableTerrainList[i]+'" for="'+notBuildableTerrainList[i]+'" style="background-image:url(img/'+notBuildableTerrainList[i]+'.webp);" title="'+notBuildableTerrainList[i]+'"></label>';
	}
	temptext += '</fieldset><fieldset><legend>Selectionnez une ressource de luxe</legend>';
	for (i=0;i<luxuryRessourcesList.length;i++){
		temptext +='<input id="'+luxuryRessourcesList[i]+'" type="radio" name="credit-card" value="'+luxuryRessourcesList[i]+'" /><label class="drinkcard-cc '+luxuryRessourcesList[i]+'" for="'+luxuryRessourcesList[i]+'" style="background-image:url(img/'+luxuryRessourcesList[i]+'.webp);" title="'+luxuryRessourcesList[i]+'"></label>';
	}
	temptext += '</fieldset><fieldset><legend>Selectionnez une ressource strategique</legend>';
	for (i=0;i<strategicRessourcesList.length;i++){
		temptext +='<input id="'+strategicRessourcesList[i]+'" type="radio" name="credit-card" value="'+strategicRessourcesList[i]+'" /><label class="drinkcard-cc '+strategicRessourcesList[i]+'" for="'+strategicRessourcesList[i]+'" style="background-image:url(img/'+strategicRessourcesList[i]+'.webp);" title="'+strategicRessourcesList[i]+'"></label>';
	}
	temptext += '</fieldset><fieldset><legend>Selectionnez une ressource bonus</legend>';
	for (i=0;i<bonusRessourcesList.length;i++){
		temptext +='<input id="'+bonusRessourcesList[i]+'" type="radio" name="credit-card" value="'+bonusRessourcesList[i]+'" /><label class="drinkcard-cc '+bonusRessourcesList[i]+'" for="'+bonusRessourcesList[i]+'" style="background-image:url(img/'+bonusRessourcesList[i]+'.webp);" title="'+bonusRessourcesList[i]+'"></label>';
	}
 // temptext += '</fieldset><fieldset><legend>Selectionnez une Forêt</legend>';
	// for (i=0;i<forestList.length;i++){
		// temptext +='<input id="'+forestList[i]+'" type="radio" name="credit-card" value="'+forestList[i]+'" /><label class="drinkcard-cc '+forestList[i]+'" for="'+forestList[i]+'" style="background-image:url(img/'+forestList[i]+'.webp);" title="'+forestList[i]+'"></label>';
	// }
	// temptext += '</fieldset><fieldset><legend>Selectionnez une rivère</legend>';
	// for (i=0;i<riverListList.length;i++){
		// temptext +='<input id="'+riverListList[i]+'" type="radio" name="credit-card" value="'+riverListList[i]+'" /><label class="drinkcard-cc '+riverListList[i]+'" for="'+riverListList[i]+'" style="background-image:url(img/'+riverListList[i]+'.webp); background-image:url(img/'+riverListList[i]+'_ico.webp);" title="'+riverListList[i]+'"></label>';
	// }
	temptext += '</fieldset><fieldset><legend>Selectionnez une merveille</legend>';
	for (i=0;i<wonderList.length;i++){
		temptext +='<input id="'+wonderList[i]+'" type="radio" name="credit-card" value="'+wonderList[i]+'" /><label class="drinkcard-cc '+wonderList[i]+'" for="'+wonderList[i]+'" style="background-image:url(img/'+wonderList[i]+'.webp);" title="'+wonderList[i]+'"></label>';
	}
	temptext += '</fieldset>';
	
	
	
	document.getElementById('districts').innerHTML += temptext;
	
	document.getElementById("map").value = '';
	document.getElementById('selection').innerHTML = tileSelected;
	var trans = document.forms["transForm"].elements["credit-card"];
	for (var i = 0, len = trans.length; i < len; i++) {
		trans[i].onclick = function () {
			// document.getElementById('display1').innerHTML += '<br />' + this.value + ' changed';
			oldQuTy = tileSelected;
			tileSelected = this.value;
			document.getElementById('selection').innerHTML = tileSelected;
			// drawGrid();
			var source = 'img/'+tileSelected+'.webp';
			// aff(source)
			document.getElementById('cursor').src=source;
			drawGrid()
					
		}
	};
	
			// tileSelected = this.value;

	document.getElementById("rayonDisplay").innerHTML = N;
	document.getElementById("rayon").value=N;
	start ();
	
	// document.getElementById("display3").innerHTML += affGrid();
 document.getElementById("rayonDisplay").innerHTML = rayon.value;
	document.getElementById("zoomDisplay").innerHTML = zoom.value;
	
		// affGrid();
	drawGrid();
	document.getElementById(tileSelected).checked = true;
	// aff(N)
	
	
rayon.addEventListener("change", function (eventInfo) {
	rayon = document.getElementById("rayon");
	document.getElementById("rayonDisplay").innerHTML = rayon.value;
	N=document.getElementById("rayon").value
	// drawGrid();
});
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
 cursor.setAttribute("style", "top: "+(e.pageY + 5)+"px; left: "+(e.pageX + 5)+"px;")
 })


zoom.addEventListener("change", function (eventInfo) {
	zoom = document.getElementById("zoom");
	document.getElementById("zoomDisplay").innerHTML = zoom.value;
	// drawGrid();

});
canvas.addEventListener("mousemove", function (eventInfo) {
	// var rect = canvas.getBoundingClientRect();
 // var x = eventInfo.clientX - rect.left;
 // var y = eventInfo.clientY - rect.top;
 // var p = Point(x, y);
 
		// var LpointyOver = Layout(layout_pointy, hex_scale(size,3), origin);
 // var hexNum = pixel_to_hex(LpointyOver, p);
 // hexNum=hex_round(hexNum);
		// var hcoOver = polygon_corners(LpointyOver,hexNum);
		
		// ctx.fillStyle = "rgba(120, 120, 120, 0.5)";
		// var lineWidth = 2;
		// ctx.strokeStyle = "white";
		// ctx.lineWidth = lineWidth;
		// ctx.beginPath();
		// for (var z = 0; z < 6; z++) {
			// ctx.lineTo(hcoOver[z].x,hcoOver[z].y);
		// }
		// ctx.fill();
		// ctx.closePath();
		// ctx.stroke();
	// aff("oui")
	});
canvas.addEventListener("click", function (eventInfo) {
	// document.getElementById("display3").innerHTML = affGrid();
 var rect = canvas.getBoundingClientRect();
 var x = eventInfo.clientX - rect.left;
 var y = eventInfo.clientY - rect.top;
 var p = Point(x, y);
 
	// aff(location.href)
		// size = Point(zoom.value, zoom.value);
		// origin = Point(canvas.width / 2, canvas.height / 2);
		// Lpointy = Layout(layout_pointy, size, origin);
 var hexNum = pixel_to_hex(Lpointy, p);
 hexNum=hex_round(hexNum);
		// aff(hexNum)
		
		var hMax = Math.max(Math.abs(hexNum.q),Math.abs(hexNum.r),Math.abs(hexNum.s)) ;
		// aff(hMax)
		var arrayCoordHexNum=coordToArray(hexNum);
		var col = arrayCoordHexNum.col;
		var row = arrayCoordHexNum.row;
		if (hMax>N ){
			increaseRadius(1)
			// N=N+1;
			// drawGrid();
		}
		else{
			for (i=0;i<6;i++){
				if(river_directions[i][0].indexOf(tileSelected)>=0){
					River (hexNum,tileSelected)
					if (tileSelected === river_directions[i][0]){
						var nh = hex_neighbor(hexNum, i);
						River (nh,river_directions[i][1])
						if (hMax>=N ){
							// increaseRadius(1)
						}
					}
				}
			}
			
			city:if (tileSelected==="City_Center"){
				// document.getElementById('CCselection').innerHTML = JSON.stringify(hexNum);
				var existed = false;
				for (trow=0;trow<grid.length;trow++){
					for (tcol=0;tcol<grid[trow].length;tcol++){
						if (grid[trow][tcol][4]==="City_Center"){
							var dist = hex_distance(hexNum,grid[trow][tcol][0]);
							if (dist===0){
								aff("=")
								ccSelected = hexNum;
								document.getElementById('CCselection').innerHTML = "Q: "+hexNum.q+" - R: "+ hexNum.r;
							}else if (dist<=cityWidth){
								aff("<")
								aff("trop proche d'une autre ville")
							}else if (dist>=cityWidth){
								aff(">")
								citiyAssignment (hexNum,tileSelected,row,col);
								document.getElementById('CCselection').innerHTML = "Q: "+hexNum.q+" - R: "+ hexNum.r;
								ccSelected = hexNum;
								grid[row][col][0]= hexNum;
								grid[row][col][4]= tileSelected;
							}
						}
					}
				}
			}
			district:if (districtList.indexOf(tileSelected)>=0) {
				if (buildableTerrainList.indexOf(grid[row][col][1])>=0){
					if (tileSelected=== "Harbor"){
						if (grid[row][col][1]==="Coast"){
							grid[row][col][4]= tileSelected;
							citiyAssignment (hexNum,tileSelected,row,col);
						}else{
							aff ("Impossible de construire un port sur la terre")
							break district;
						}
					}
					if (hex_distance(hexNum,ccSelected)>cityWidth){
						aff("trop loin de la ville selectionne")
						grid[row][col][4]= tileSelected;
						citiyAssignment (hexNum,tileSelected,row,col);
						break district;
					}else{
						if (tileSelected===grid[row][col][4]){
							aff("vous avez deja  construit un "+tileSelected+"dans cette ville")
							
							grid[row][col][4]= tileSelected;
							citiyAssignment (hexNum,tileSelected,row,col);
							break district;
						}
					}
					citiyAssignment (hexNum,tileSelected,row,col);
					
					grid[row][col][4]= tileSelected;
				}
				else{
					if (tileSelected=== "Harbor" && grid[row][col][1]=== "Coast"){
						grid[row][col][4]= tileSelected;
						citiyAssignment (hexNum,tileSelected,row,col);
						break district;
					}else{
						aff("impossible de construire sur ce terrain")
					}
				}
			}
			if (buildableTerrainList.indexOf(tileSelected)>=0 || notBuildableTerrainList.indexOf(tileSelected)>=0) {
				grid[row][col][1]= tileSelected;
			}
			if (forestList.indexOf(tileSelected)>=0) {
				grid[row][col][2]= tileSelected;
			}
			if (bonusRessourcesList.indexOf(tileSelected)>=0 || strategicRessourcesList.indexOf(tileSelected)>=0 || luxuryRessourcesList.indexOf(tileSelected)>=0) {
				grid[row][col][3]= tileSelected;
			}
			if (tileSelected === "demolish"){
				// if (typeof grid[row][col][6]!== undefined){
					citiyAssignment (hexNum,tileSelected,row,col)
				grid[row][col][4]=undefined;
				// }
			}			
		}
		// aff(grid)
	drawGrid();
		// affGrid();
 });
})();
