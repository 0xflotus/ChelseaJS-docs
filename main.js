

///////////////////////////////////////////////////////////////////////
/////////////// Basic functions //////////////////////////////////////
function setCanvas(element){
    elem=element;
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS(null, "width", "100%");
    svg.setAttributeNS(null, "height", "100%");
    elem.appendChild(svg);
    WIDTH =svg.clientWidth;
    HEIGHT =svg.clientHeight;


}


///////////////////////////////////////////////////////////////////////
///////////////  CONSTANTS /////////////////////////////////////////////

const PI = Math.PI;
const TAU = 2 * Math.PI;
const HALF_PI = Math.PI / 2;
const QUARTER_PI = Math.PI / 4;
const THIRD_PI = Math.PI / 3;
const TWO_PI = Math.PI * 2;
const PHI = (1 + Math.sqrt(5)) / 2;



///////////////////////////////////////////////////////////////////////
///////////////////Scaling functions //////////////////////////////////

function random(a,b){
    return Math.random()*(b-a)+a;
}

function randomInt(a,b){
    return Math.floor(Math.random()*(b-a)+a);
}

function randomBool(){
    return Math.random()>0.5;
}

function randomColorRGB(){
    return "rgb("+randomInt(0,255)+","+randomInt(0,255)+","+randomInt(0,255)+")";
}

function randomColorHex(){
    return "#"+randomInt(0,255).toString(16)+randomInt(0,255).toString(16)+randomInt(0,255).toString(16);
}

function randomColorHSL(){
    return "hsl("+randomInt(0,360)+","+randomInt(0,100)+"%,"+randomInt(0,100)+"%)";
}

function clamp(e,a,b){                        //constrain value of e between a and b
    return Math.min(Math.max(e,a),b);
}



////////////////////////////////////////////////////////////////////////
///////////////  VECTOR FUNCTIONS //////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////
////////////////////// CIRCLE  ///////////////////////////////////////////////

class circle {
    constructor(cx, cy, r, fill,fill_opacity, stroke,stroke_width) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.fill = fill;
        this.stroke = stroke;
        this.stroke_width = stroke_width;
        this.fill_opacity = fill_opacity;
        this.circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.circle.setAttributeNS(null, "cx", this.cx);
        this.circle.setAttributeNS(null, "cy", this.cy);
        this.circle.setAttributeNS(null, "r", this.r);
        this.circle.setAttributeNS(null, "fill", this.fill);
        this.circle.setAttributeNS(null, "stroke", this.stroke);
        this.circle.setAttributeNS(null, "stroke-width", this.stroke_width);
        this.circle.setAttributeNS(null, "fill-opacity", this.fill_opacity); 
        svg.appendChild(this.circle);
        return this;
    }
}

///////////////////////////////////////////////////////////////////////////////
////////////////////// ELLIPSE  ///////////////////////////////////////////////

class ellipse{
    constructor(cx, cy, rx, ry, fill,fill_opacity, stroke,stroke_width) {
        this.cx = cx;
        this.cy = cy;
        this.rx = rx;
        this.ry = ry;
        this.fill = fill;
        this.stroke = stroke;
        this.stroke_width = stroke_width;
        this.fill_opacity = fill_opacity;
        this.ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        this.ellipse.setAttributeNS(null, "cx", this.cx);
        this.ellipse.setAttributeNS(null, "cy", this.cy);
        this.ellipse.setAttributeNS(null, "rx", this.rx);
        this.ellipse.setAttributeNS(null, "ry", this.ry);
        this.ellipse.setAttributeNS(null, "fill", this.fill);
        this.ellipse.setAttributeNS(null, "stroke", this.stroke);
        this.ellipse.setAttributeNS(null, "stroke-width", this.stroke_width);
        this.ellipse.setAttributeNS(null, "fill-opacity", this.fill_opacity);
        svg.appendChild(this.ellipse);
        return this;
    }
}



///////////////////////////////////////////////////////////////////////////////
////////////////////// RECTANGLE  ///////////////////////////////////////////////


class rect{
    constructor(x, y, width, height, fill,fill_opacity, stroke,stroke_width, anchor, border_radius) {
    
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.fill=fill;
        this.stroke=stroke;
        this.stroke_width=stroke_width;
        this.fill_opacity=fill_opacity;
        this.anchor=anchor ?? "top-left";
        this.border_radius=border_radius ?? 0;
        this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.rect.setAttributeNS(null, "fill", this.fill);
        this.rect.setAttributeNS(null, "stroke", this.stroke);
        this.rect.setAttributeNS(null, "stroke-width", this.stroke_width);
        this.rect.setAttributeNS(null, "fill-opacity", this.fill_opacity);
        this.rect.setAttributeNS(null, "rx", this.border_radius);
        this.rect.setAttributeNS(null, "ry", this.border_radius);
        switch(anchor){
            case "center":
                this.rect.setAttributeNS(null, "x", this.x-this.width/2);
                this.rect.setAttributeNS(null, "y", this.y-this.height/2);
                this.rect.setAttributeNS(null, "width", this.width);
                this.rect.setAttributeNS(null, "height", this.height);
                break;
            case "top-left":
                this.rect.setAttributeNS(null, "x", this.x);
                this.rect.setAttributeNS(null, "y", this.y);
                this.rect.setAttributeNS(null, "width", this.width);
                this.rect.setAttributeNS(null, "height", this.height);
                break;
            case "top-right":
                this.rect.setAttributeNS(null, "x", this.x-this.width);
                this.rect.setAttributeNS(null, "y", this.y);
                this.rect.setAttributeNS(null, "width", this.width);
                this.rect.setAttributeNS(null, "height", this.height);
                break;
            case "bottom-left":
                this.rect.setAttributeNS(null, "x", this.x);
                this.rect.setAttributeNS(null, "y", this.y-this.height);
                this.rect.setAttributeNS(null, "width", this.width);
                this.rect.setAttributeNS(null, "height", this.height);
                break;
            case "bottom-right":
                this.rect.setAttributeNS(null, "x", this.x-this.width);
                this.rect.setAttributeNS(null, "y", this.y-this.height);
                this.rect.setAttributeNS(null, "width", this.width);
                this.rect.setAttributeNS(null, "height", this.height);
                break;
        }
        svg.appendChild(this.rect);
        return this;

    
    }
}

///////////////////////////////////////////////////////////////////////////////
////////////////////// POINT  ///////////////////////////////////////////////

class point{
    constructor(x, y, stroke,stroke_width) {
        this.x = x;
        this.y = y;
        this.stroke = stroke;
        this.stroke_width = stroke_width;
        this.point = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.point.setAttributeNS(null, "cx", this.x);
        this.point.setAttributeNS(null, "cy", this.y);
        this.point.setAttributeNS(null, "r", this.stroke_width/2);
        this.point.setAttributeNS(null, "stroke", this.stroke);
        this.point.setAttributeNS(null, "stroke-width", this.stroke_width);
        svg.appendChild(this.point);
        return this;
    }
}


///////////////////////////////////////////////////////////////////////////////
////////////////////// LINE  ///////////////////////////////////////////////

class line{
    constructor(x1, y1, x2, y2, stroke,stroke_width, linecap, dasharray) {

        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.stroke = stroke;
        this.stroke_width = stroke_width;
        this.dasharray = dasharray;
        this.linecap = linecap;
        this.line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        this.line.setAttributeNS(null, "x1", this.x1);
        this.line.setAttributeNS(null, "y1", this.y1);
        this.line.setAttributeNS(null, "x2", this.x2);
        this.line.setAttributeNS(null, "y2", this.y2);
        this.line.setAttributeNS(null, "stroke", this.stroke);
        this.line.setAttributeNS(null, "stroke-width", this.stroke_width);
        this.line.setAttributeNS(null, "stroke-dasharray", this.dasharray);
        this.line.setAttributeNS(null, "stroke-linecap", this.linecap);
        svg.appendChild(this.line);
        return this;

}
}

///////////////////////////////////////////////////////////////////////////////
///////////////////// TEXT ///////////////////////////////////////////////////

class text{
    constructor(x, y, inputtext, font_size, font_family, font_weight,stroke, stroke_width, fill, anchor) {
        this.x = x;
        this.y = y;
        this.inputtext = inputtext;
        this.font_size = font_size;
        this.font_family = font_family;
        this.font_weight = font_weight;
        this.fill = fill;
        this.stroke = stroke;
        this.stroke_width = stroke_width;
        this.anchor = anchor;
        this.text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        this.text.setAttributeNS(null, "x", this.x);
        this.text.setAttributeNS(null, "y", this.y);
        this.text.setAttributeNS(null, "font-size", this.font_size);
        this.text.setAttributeNS(null, "font-family", this.font_family);
        this.text.setAttributeNS(null, "font-weight", this.font_weight);
        this.text.setAttributeNS(null, "fill", this.fill);
        this.text.setAttributeNS(null, "text-anchor", this.anchor);
        this.text.setAttributeNS(null, "stroke", this.stroke);
        this.text.setAttributeNS(null, "stroke-width", this.stroke_width);
        
        this.text.innerHTML = this.inputtext;
        svg.appendChild(this.text);
        return this;
    }
}


///////////////////////////////////////////////////////////////////////////////
///////////////////// REGULAR POLYGON ///////////////////////////////////////////////////

class regpolygon{
    constructor(x,y,radius,sides,rotation,stroke,stroke_width,fill,fill_opacity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.sides = sides;
        this.rotation = rotation;
        this.stroke = stroke;
        this.stroke_width = stroke_width;
        this.fill = fill;
        this.fill_opacity = fill_opacity;
        
        this.regpolygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        this.regpolygon.setAttributeNS(null, "points", this.points());
        this.regpolygon.setAttributeNS(null, "stroke", this.stroke);
        this.regpolygon.setAttributeNS(null, "stroke-width", this.stroke_width);
        this.regpolygon.setAttributeNS(null, "fill", this.fill);
        this.regpolygon.setAttributeNS(null, "fill-opacity", this.fill_opacity);
        svg.appendChild(this.regpolygon);
        return this;
        
    }
    points(){
        var points = "";
        var angle = (Math.PI*2)/this.sides;
        for(var i=0; i<this.sides; i++){
            var x = this.x+this.radius*Math.cos(angle*i+this.rotation);
            var y = this.y+this.radius*Math.sin(angle*i+this.rotation);
            points += x+","+y+" ";
        }
        return points;
    }
   
}


////////////////////////////////////////////////////////////////////
//////////////////// POLYGON //////////////////////////////////////
//////////////////////////////////////////////////////////////////


class polygon{
    constructor(inppoints,stroke,stroke_width,fill , fill_opacity,close){
        this.inppoints=inppoints;
        this.stroke= stroke;
        this.stroke_width = stroke_width;
        this.fill = fill;
        this.fill_opacity = fill_opacity;
        this.close = close ?? false;
        
        this.polygon = document.createElementNS("http://www.w3.org/2000/svg","path");
        this.polygon.setAttributeNS(null, "d",this.pathd());    
        this.polygon.setAttributeNS(null, "stroke", this.stroke);
        this.polygon.setAttributeNS(null,"stroke-width",this.stroke_width);
        this.polygon.setAttributeNS(null, "fill",this.fill);
        this.polygon.setAttributeNS(null, "fill-opacity", this.fill_opacity);
        svg.appendChild(this.polygon);
        return this;
    }

    pathd(){
        var dtext=" M "+this.inppoints[0][0]+","+this.inppoints[0][1];
        for(var i=0 ; i<this.inppoints.length;i++){
            dtext+= "L " +this.inppoints[i][0]+","+this.inppoints[i][1]+ " ";

        }
        if(this.close==true){
            dtext+= "Z";
        }
        
        return dtext;
    }
}

////////////////////////////////////////////////////////////////////
//////////////////// TWO POINT CUBIC BEZIER ////////////////////////
//////////////////////////////////////////////////////////////////


class twoPointCubicBezier{
    constructor(x1,y1,xc1,yc1,x2,y2,xc2,yc2,stroke,stroke_width,fill,fill_opacity){
        this.x1=x1;
        this.y1=y1;
        this.xc1=xc1;
        this.yc1=yc1;
        this.x2=x2;
        this.y2=y2;
        this.xc2=xc2;
        this.yc2=yc2;
        this.stroke=stroke;
        this.stroke_width=stroke_width;
        this.fill=fill;
        this.fill_opacity=fill_opacity;

        this.twoPointCubicBezier = document.createElementNS("http://www.w3.org/2000/svg","path");
        this.twoPointCubicBezier.setAttributeNS(null, "d",`M ${this.x1},${this.y1} C ${this.xc1},${this.yc1} ${this.xc2},${this.yc2} ${this.x2},${this.y2}`);
        this.twoPointCubicBezier.setAttributeNS(null, "stroke", this.stroke);
        this.twoPointCubicBezier.setAttributeNS(null,"stroke-width",this.stroke_width);
        this.twoPointCubicBezier.setAttributeNS(null, "fill",this.fill);
        this.twoPointCubicBezier.setAttributeNS(null, "fill-opacity", this.fill_opacity);
        svg.appendChild(this.twoPointCubicBezier);
        return this;

    }


}


////////////////////////////////////////////////////////////////////
//////////////////// TWO POINT QUADRATIC BEZIER ////////////////////////
//////////////////////////////////////////////////////////////////
class twoPointQuadraticBezier{
    constructor(x1,y1,xc,yc,x2,y2,stroke,stroke_width,fill,fill_opacity){
        this.x1=x1;
        this.y1=y1;
        this.xc=xc;
        this.yc=yc;
        this.x2=x2;
        this.y2=y2;
        this.stroke=stroke;
        this.stroke_width=stroke_width;
        this.fill=fill;
        this.fill_opacity=fill_opacity;

        this.twoPointQuadraticBezier = document.createElementNS("http://www.w3.org/2000/svg","path");
        this.twoPointQuadraticBezier.setAttributeNS(null, "d",`M ${this.x1},${this.y1} Q ${this.xc},${this.yc} ${this.x2},${this.y2}`);
        this.twoPointQuadraticBezier.setAttributeNS(null, "stroke", this.stroke);
        this.twoPointQuadraticBezier.setAttributeNS(null,"stroke-width",this.stroke_width);
        this.twoPointQuadraticBezier.setAttributeNS(null, "fill",this.fill);
        this.twoPointQuadraticBezier.setAttributeNS(null, "fill-opacity", this.fill_opacity);
        svg.appendChild(this.twoPointQuadraticBezier);
        return this;

    }}



////////////////////////////////////////////////////////////////////
//////////////////// CUBIC BEZIER //////////////////////////////////
//////////////////////////////////////////////////////////////////

class cubicbezier{
    constructor(points,stroke,stroke_width,fill,fill_opacity,line_tension){
        this.points=points;
        this.stroke=stroke;
        this.stroke_width=stroke_width;
        this.fill=fill;
        this.fill_opacity=fill_opacity;
        this.line_tension=line_tension??0.2;
        

        this.cubicbezier = document.createElementNS("http://www.w3.org/2000/svg","path");
        this.cubicbezier.setAttributeNS(null, "d",this.svgPath(this.points, this.bezierCommand));
        this.cubicbezier.setAttributeNS(null, "stroke", this.stroke);
        this.cubicbezier.setAttributeNS(null,"stroke-width",this.stroke_width);
        this.cubicbezier.setAttributeNS(null, "fill",this.fill);
        this.cubicbezier.setAttributeNS(null, "fill-opacity", this.fill_opacity);
        svg.appendChild(this.cubicbezier);
        return this;
    }

////////////////////////////////////////////////////////////////////
//////////////////// Code from project-G ///////////////////////////
//////////////////////////////////////////////////////////////////
        
        
    svgPath(points, command) {
        this.dval = points.reduce((acc, point, i, a) => i === 0
            ? `M ${point[0]},${point[1]}`
            : `${acc} ${command(point, i, a)}`
            , '')
            if(this.close==true){
                dval+="Z";
            }


            return this.dval;
    }
    bezierCommand = (point, i, a) => {
        // start control point
        const [cpsX, cpsY] = this.controlPoint(a[i - 1], a[i - 2], point)
        // end control point
        const [cpeX, cpeY] = this.controlPoint(point, a[i - 1], a[i + 1], true)
        return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`
    }
    controlPoint = (current, previous, next, reverse) => {

        const p = previous || current
        const n = next || current
       
        const smoothing =this.line_tension;
       
        const o = this.bline(p, n)
        const angle = o.angle + (reverse ? Math.PI : 0)
        const length = o.length * smoothing
        
        const x = current[0] + Math.cos(angle) * length
        const y = current[1] + Math.sin(angle) * length
        return [x, y]
    }

    bline = (pointA, pointB) => {
        const lengthX = pointB[0] - pointA[0]
        const lengthY = pointB[1] - pointA[1]
        return {
        length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
        angle: Math.atan2(lengthY, lengthX)
        }
    }
    
}


//////////////////////////////////////////////////////////////////////////
/////////////////////// ARC /////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

class arc{
    constructor(cx, cy, rx,ry, start_angle , end_angle, fill_type,stroke,stroke_width,fill, fill_opacity){
        this.cx=cx;
        this.cy=cy;
        this.rx=rx;
        this.ry=ry;
        this.start=start_angle;
        this.end=end_angle;
        this.fill_type= fill_type;
        this.stroke=stroke;
        this.stroke_width=stroke_width;
        this.fill=fill;
        this.fill_opacity=fill_opacity;
        this.arc=document.createElementNS("http://www.w3.org/2000/svg","path");
        this.arc.setAttributeNS(null,"d",this.dval(this.cx,this.cy,this.rx,this.ry,this.start,this.end,this.fill_type));
        this.arc.setAttributeNS(null,"stroke",this.stroke);
        this.arc.setAttributeNS(null,"stroke-width",this.stroke_width);
        this.arc.setAttributeNS(null,"fill",this.fill);
        this.arc.setAttributeNS(null,"fill-opacity",this.fill_opacity);
        svg.appendChild(this.arc);
        return this;



    }

    dval(cx, cy, rx,ry, start_angle , end_angle, fill_type){
        const Δo = (end_angle-start_angle);
        const fA = ((Δo > Math.PI) ? 1 : 0);
        const fS = ((Δo > 0) ? 1 : 0);
        const start_pointx=cx+rx*Math.sin(start_angle);
        const start_pointy=cy-ry*Math.cos(start_angle);
        const end_pointx=cx+rx*Math.sin(end_angle);
        const end_pointy=cy-ry*Math.cos(end_angle);
        var dpath= ` M ${start_pointx},${start_pointy} A ${rx} ${ry} 0 ${fA} ${fS} ${end_pointx} ${end_pointy} `;
        
        switch(fill_type){
            case "pie":
                dpath+= "L " +cx+","+cy+" Z";
                break;
            case "chord":
                dpath+= " Z";
                break;
            case "open":
                break;

        }


        return dpath;

    }
    

}



///////////// function to Clear canvas on every draw /////////////////////////////////

function clearCanvas() {
    while (svg.firstChild) {
        svg.removeChild(svg.lastChild);
    }
}
///////////////////////////////////////////////////////////////////////////////



////////// function to map a value from one range to another ///////////////////////
// linearly maps value from the range (a..b) to (c..d)
function mapRange (value, a, b, c, d) {
    // first map value from (a..b) to (0..1)
    value = (value - a) / (b - a);
    // then map it from (0..1) to (c..d) and return it
    return c + value * (d - c);
}
///////////////////////////////////////////////////////////////////////////////


/////////// function to convert degree to radian ///////////////////
function degToRad(deg) {
    return deg * Math.PI / 180;
}
///////////////////////////////////////////////////////////////////////////////

////////////// common mathematical functions ///////////////////////////////
function sin(angle) {
    return Math.sin(angle);
}

function cos(angle) {
    return Math.cos(angle);
}

function tan(angle) {
    return Math.tan(angle);
}

function asin(angle) {
    return Math.asin(angle);
}

function acos(angle){
    return Math.acos(angle);
}

function abs(e){
    return Math.abs(e);
}
function sqrt(e){
    return Math.sqrt(e);
}
function pow(e,p){
    return Math.pow(e,p);
}
function exp(e){
    return Math.exp(e);
}
function log(e){
    return Math.log(e);
}
function log10(e){
    return Math.log10(e);
}
function floor(e){
    return Math.floor(e);
}
function ceil(e){
    return Math.ceil(e);
}
function round(e){
    return Math.round(e);
}

function dist(x1,y1,x2,y2){
    return Math.sqrt(pow(x2-x1,2)+pow(y2-y1,2));
}

function max(a){
    return Math.max(...a);
}
function min(a){
    return Math.min(...a);
}

function factorial(n) {
    if (n == 0 || n == 1)
        return 1;
    return n * factorial(n - 1);
}

function combinations(n,r){
    return factorial(n)/(factorial(r)*factorial(n-r));
}
 
function makecombinations(arr){
    var combs=[];
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            combs.push([arr[i],arr[j]]);
        }
    }
    return combs;
}
///////////////////////////////////////////////////////////////////////////////
///////////// function to get mouse position /////////////////////////////////


mousepos={x:0,y:0};
  function fetch_mouse_pos(canvas, evt) {
    
    var rect = canvas.getBoundingClientRect();
    canvas.addEventListener(evt, function(evt) {
        //console.log(evt.clientX - rect.left, evt.clientY - rect.top);
        return mousepos={
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    });
};

//// use mousepos.x and mousepos.y to get mouse position /////////////////

///////////////////////////////////////////////////////////////////////////////
////////////// Linear Interpolation Function /////////////////////////////////////////

function lerp(a, b, n) {
    return (1 - n) * a + n * b;
}

///////////////////////////////////////////////////////////////////////////////
/////////////// Cosine Interpolation Function ////////////////////////////////

function cosrp(a, b, n) {
    return a + (b - a) * (1 - Math.cos(n * Math.PI)) / 2;
}

///////////////////////////////////////////////////////////////////////////////
/////////////// PRNG (Psuedo Random Number Generator) /////////////////////////

function PRNG(seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

///////////////////////////////////////////////////////////////////////////////
/////////////// Psuedo Random Array Generator ///////////////////////////////

// x0=seed; a=multiplier; b=increment; m=modulus; n=desired array length;
//  !isnt working well needto be changed

function PRAG(x0,a,b,m,n){
    const results=[];
    for(let i=0;i<n;i++){
        x0=(a*x0+b)%m;
        results.push(x0);
    }
    return results;
}


///////////////////////////////////////////////////////////////////////////////
/////////////// lerp color ///////////////////////////////////////////////////

function lerp_hex(a, b, n) {
    var ah = parseInt(a.replace(/#/g, ''), 16),
        ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
        bh = parseInt(b.replace(/#/g, ''), 16),
        br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
        rr = ar + n * (br - ar),
        rg = ag + n * (bg - ag),
        rb = ab + n * (bb - ab);
    return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
}
