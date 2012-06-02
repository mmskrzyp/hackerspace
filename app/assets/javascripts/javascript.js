// http://www.webdeveloper.com/forum/showpost.php?s=5d4268dd0ae19a48cd8d63e12f81b15b&p=949488&postcount=3
var domWrite = (function(){            // by Frank Thuerigen
 // private 

 var dw = document.write,              // save document.write()
          myCalls = [],                // contains all outstanding Scripts
          t = '';                      // timeout
 
 function startnext(){                 // start next call in pipeline
  if ( myCalls.length > 0 ) {
   if ( Object.watch ) console.log( 'next is '+myCalls[0].f.toString() );
   myCalls[0].startCall();
   }
  }

 function evals( pCall ){            // eval embedded script tags in HTML code
  var scripts = [],
      script,
      regexp = /<script[^>]*>([\s\S]*?)<\/script>/gi;
  while ((script = regexp.exec(pCall.buf))) scripts.push(script[1]);
  scripts = scripts.join('\n');
  if (scripts) {
   eval(scripts);
   }
  }

 function finishCall( pCall ){
   pCall.e.innerHTML = pCall.buf;             // write output to element
   evals( pCall );
   document.write=dw;                        // restore document.write()
   myCalls.shift();
   window.setTimeout( startnext, 50 );
   }

 function testDone( pCall ){
   var myCall = pCall;
   return function(){
    if ( myCall.buf !== myCall.oldbuf ){
     myCall.oldbuf = myCall.buf;
     t=window.setTimeout( testDone( myCall ), myCall.ms );
     }
    else {
     finishCall( myCall );
     }
    }
   }  
   
 function MyCall( pDiv, pSrc, pFunc ){                    // Class
  this.e = ( typeof pDiv == 'string' ? 
             document.getElementById( pDiv ) :
             pDiv ),                     // the div element
  this.f = pFunc || function(){},
  this.stat = 0,                         // 0=idle, 1=waiting, 2=running, 3=finished
  this.src = pSrc,                       // script source address
  this.buf = '',                         // output string buffer
  this.oldbuf = '',                      // compare buffer
  this.ms = 100,                         // milliseconds
  this.scripttag;                        // the script tag 
  }
 
 MyCall.prototype={
  startCall: function(){
   this.f.apply( window );                 // execute settings function
   this.stat=1;
   var that = this;                            // status = waiting
   document.write = (function(){
    var o=that,
        cb=testDone( o ),
        t;
    return function( pString ){            // overload document.write()
     window.clearTimeout( t );
     o.stat=2;                             // status = running
     window.clearTimeout(t);
     o.oldbuf = o.buf;
     o.buf += pString;                     // add string to buffer
     t=window.setTimeout( cb, o.ms );
     };
    })();
   var s=document.createElement('script');
   s.setAttribute('language','javascript');
   s.setAttribute('type','text/javascript');
   s.setAttribute('src', this.src);
   document.getElementsByTagName('head')[0].appendChild(s);
   }
  }
  
 return function( pDiv, pSrc, pFunc ){  // public
  var c = new MyCall( pDiv, pSrc, pFunc );
  myCalls.push( c );
  if ( myCalls.length === 1 ){
   startnext();
   }
  }
 })();