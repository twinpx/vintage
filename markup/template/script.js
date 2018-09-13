!function(a){"use strict";a(function(){function b(b){a("form.i-invisible").not(".i-animate").each(function(){var b=a(this),c=b.offset().top,d=250,e=c-document.documentElement.clientHeight+d;window.pageYOffset>e&&b.addClass("i-animate")})}function c(b){function c(){d(),e()}function d(){k.$elem=a(b),k.$elem.data("FloatPhone",k),k.scrollEvent=void 0,k.scrollIntervalEvent=void 0,k.scrollIntervalId=void 0,k.showTimeoutId=void 0,k.showTime=3e3}function e(){f(),a(window).bind("scroll",g),k.$elem.find(".b-icon-close").click(j)}function f(){k.showTimeoutId=setTimeout(function(){h()},k.showTime)}function g(a){k.scrollEvent=a,k.scrollIntervalEvent||(k.scrollIntervalEvent=a,clearTimeout(k.showTimeoutId),i(),k.scrollIntervalId=setInterval(function(){return k.scrollIntervalEvent!==k.scrollEvent?void(k.scrollIntervalEvent=k.scrollEvent):(clearInterval(k.scrollIntervalId),k.scrollIntervalEvent=void 0,void f())},100))}function h(){window.Cookies&&"N"!==window.Cookies.get("showMessage")&&k.$elem.addClass("i-visible")}function i(){k.$elem.removeClass("i-visible")}function j(){i(),window.Cookies&&Cookies.set("showMessage","N",{expires:365,path:window.location.href})}var k=this;c()}var d=["/upload/logo-vybor-vkusa.png","/upload/logo-pomidor.jpg","/upload/salat.jpg"];a("#logoVyborVkusa").attr({src:d[Math.floor(Math.random()*d.length)]}),a('[data-toggle="tooltip"]').tooltip(),a(".bj-page-header .bj-logo-space__icon.glyphicon-user").popover({html:!0,trigger:"click",placement:"bottom"}),a(document).click(function(b){a(b.target).hasClass("glyphicon-user")||a(b.target).hasClass("popover-content")||a(".bj-page-header .bj-logo-space__icon.glyphicon-user").popover("hide")}),a(".bj-page-header__menu-link").click(function(b){b.preventDefault(),b.stopPropagation(),a(".bj-page-header__dropdown article").slideDown()}),a(".bj-page-header__dropdown article").click(function(a){a.stopPropagation()}),a(".bj-page-header__dropdown .up").click(function(b){a(this).closest("article").slideUp(),b.preventDefault()}),a(document).click(function(){a(".bj-page-header__dropdown article").slideUp()}),document.getElementById("viewCounter")&&a.ajax({url:a("#viewCounter").data("url"),type:"POST",dataType:"json",success:function(a){},error:function(a,b,c){window.console&&(console.log(a),console.log(b),console.log(c))}}),a(window).bind("scroll",b).scroll(),a("#nav-button").sideNav(),a(".bj-page-header__search .glyphicon").click(function(){a(this).closest(".bj-page-header__search").addClass("i-active").find("input").focus()}),a(".bj-page-header__search__input").blur(function(){a(this).val("").closest(".bj-page-header__search").removeClass("i-active")}),a(".bj-hidden-link").click(function(b){b.preventDefault();var c=a(this);return c.hasClass("i-up")?void c.removeClass("i-up").parent().find(".bj-hidden__hidden").slideUp():void c.addClass("i-up").parent().find(".bj-hidden__hidden").slideDown()}),function(){function b(){return"ontouchstart"in document.documentElement&&a(document).width()<=600?"mobile":"desktop"}function c(){a.ajax({url:a("#banner-carousel-1").data("url"),type:a("#banner-carousel-1").data("method"),dataType:"html",success:function(b){a("#banner-carousel-1").html(html)},error:function(){}})}function d(a){Cookies.set("mobile",a,{expires:30,path:"/",domain:window.location.hostname})}var e,f;e=b(),(f=Cookies.get("mobile"))||e===f||(d(e),c(e))}(),function(){a(".bj-news-unsubscribe-link").click(function(b){b.preventDefault(),a(".bj-news-unsubscribe-form").submit()}),a(".bj-news-subscribe-form").submit(function(b){b.preventDefault();var c=a(this);a.ajax({url:c.attr("action"),type:c.attr("method"),dataType:"json",data:c.serialize(),success:function(b){"success"===b.success?(a(".bj-news-subscribe__s .alert-success").removeClass("hide"),a(".bj-news-subscribe__s .alert-warning").addClass("hide"),a(".bj-news-subscribe__s .bj-news-subscribe-form").addClass("hide")):(a(".bj-news-subscribe__s .alert-warning").removeClass("hide"),a(".bj-news-subscribe__s .alert-success").addClass("hide"))},error:function(b,c,d){a(".bj-news-subscribe__s .alert-warning").removeClass("hide"),a(".bj-news-subscribe__s .alert-success").addClass("hide"),window.console&&(console.log(b),console.log(c),console.log(d))}})}),a(".bj-news-unsubscribe-form").submit(function(b){b.preventDefault();var c=a(this);a.ajax({url:c.attr("action"),type:c.attr("method"),dataType:"json",data:c.serialize(),success:function(b){"success"===b.success&&(a(".bj-news-subscribe__s .alert-success").addClass("hide"),a(".bj-news-subscribe__s .alert-warning").addClass("hide"),a(".bj-news-subscribe__s .bj-news-subscribe-form").removeClass("hide"))},error:function(a,b,c){window.console&&(console.log(a),console.log(b),console.log(c))}})})}(),new c("#b-float-phone"),a.fn.fotorama&&a(".fotorama").fotorama({thumbwidth:65,thumbheight:65}),a.fn.zoomple&&setTimeout(function(){a("img.zoomple").zoomple()},1e3),a.fn.tabs=function(){return this.each(function(){function b(b){var h=a(b.target);b.preventDefault(),h.hasClass("i-active")||(g(h),f(h),e(h),d(h),c(h),a.scrollTo(a(i),500))}function c(a){n.text(a.text())}function d(a){if(window.history){var b=a.data("tab"),c="?tab="+b;c=""===window.location.search||-1!==String(window.location.search).search("#")&&-1===String(window.location.search).search("?")?"?tab="+b+window.location.search:-1===String(window.location.search).search("[?|&]tab=")?window.location.search+"&tab="+b:String(window.location.search).replace(/[\?|&](tab\=\w+)&?/.exec(String(window.location.search))[1],"tab="+b),o||window.history.pushState({tab:b},"page 2",c),o=!1}}function e(b){var c=b.data("tab");j.find(".b-tabs__i").each(function(){var b=a(this);b.data("tab")===c&&(l.removeClass("i-active"),b.addClass("i-active"),b.find(".fotorama").length&&b.find(".fotorama").data("fotorama").resize({width:"100%"}))}),a(".b-tabs__nav__menu i:visible").click()}function f(a){m.css({left:a.position().left+"px",width:a.outerWidth()})}function g(a){k.removeClass("i-active"),a.addClass("i-active")}function h(){var a=String(window.location.search).match(/tab=([-_a-z]+)/);if(a){a=a[1];b({target:k.filter("[data-tab="+a+"]"),preventDefault:function(){}})}}var i=this,j=a(i),k=j.find(".b-tabs__tab"),l=j.find(".b-tabs__i"),m=j.find(".b-tabs__decor"),n=j.find(".b-tabs__nav__top span"),o=(j.find(".b-tabs__nav__menu"),!1);window.matchMedia("(min-width: 768px)").matches&&k.each(function(){var b=a(this),c=b.outerWidth();b.width(c).css({paddingLeft:0,paddingRight:0})}),k.click(b),f(k.eq(0)),h(),a(window).resize(function(){k.each(function(){var b=a(this);b.hasClass("i-active")&&f(b)})}),window.onpopstate=function(a){o=!0,a.state?k.filter("[data-tab="+a.state.tab+"]").click():k.eq(0).click()}})},a(".b-tabs:not(.i-links)").tabs(),a(".b-tabs.i-links").each(function(){var b=a(this),c=b.find(".b-tabs__decor"),d=b.find(".b-tabs__tab.i-active");c.css({left:d.position().left+"px",width:d.outerWidth()})}),a(".b-tabs__nav__top, .b-tabs__nav__menu i").click(function(){a(".b-tabs__nav__top").slideToggle(),a(".b-tabs__nav__menu").slideToggle()});var e=a('.b-tabs__i[data-tab="comments"]');e.find("form").submit(function(b){b.preventDefault();var c=a(this);a.ajax({url:c.attr("action"),type:c.attr("method"),dataType:"json",data:c.serialize(),success:function(b){b&&"Y"===b.STATUS&&b.RESPONSE?(e.find(".b-new-comment:eq(0)").length?e.find(".b-new-comment:eq(0)").before('<div class="b-new-comment">'+b.RESPONSE+'<hr class="i-line i-size-L"></div>'):a("#collapseCommentForm").before('<div class="b-new-comment">'+b.RESPONSE+'<hr class="i-line i-size-L"></div>'),e.find(".b-new-comment:eq(0)").slideDown(),a.scrollTo(e.find(".b-new-comment:eq(0)").offset().top-200,500),c.find("textarea.form-control").val(""),e.find(".b-alert-warning").slideUp(function(){a(this).remove()})):b&&"E"===b.STATUS&&b.MESSAGE&&(e.find(".b-alert-warning").length?(e.find(".b-alert-warning span").addClass("i-hide"),setTimeout(function(){e.find(".b-alert-warning span").text(b.MESSAGE).removeClass("i-hide")},300)):(c.before('<div class="b-alert-warning i-slide"><span>'+b.MESSAGE+"</span></div>"),e.find(".b-alert-warning").slideDown()))},error:function(a,b,c){window.console&&(console.log(a),console.log(b),console.log(c))}})})})}(jQuery);
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * quantize.js Copyright 2008 Nick Rabinowitz
 * Ported to node.js by Olivier Lesnicki
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 */

// fill out a couple protovis dependencies
/*
 * Block below copied from Protovis: http://mbostock.github.com/protovis/
 * Copyright 2010 Stanford Visualization Group
 * Licensed under the BSD License: http://www.opensource.org/licenses/bsd-license.php
 */
if (!pv) {
    var pv = {
        map: function(array, f) {
            var o = {};
            return f ? array.map(function(d, i) {
                o.index = i;
                return f.call(o, d);
            }) : array.slice();
        },
        naturalOrder: function(a, b) {
            return (a < b) ? -1 : ((a > b) ? 1 : 0);
        },
        sum: function(array, f) {
            var o = {};
            return array.reduce(f ? function(p, d, i) {
                o.index = i;
                return p + f.call(o, d);
            } : function(p, d) {
                return p + d;
            }, 0);
        },
        max: function(array, f) {
            return Math.max.apply(null, f ? pv.map(array, f) : array);
        }
    }
}

/**
 * Basic Javascript port of the MMCQ (modified median cut quantization)
 * algorithm from the Leptonica library (http://www.leptonica.com/).
 * Returns a color map you can use to map original pixels to the reduced
 * palette. Still a work in progress.
 * 
 * @author Nick Rabinowitz
 * @example
 
// array of pixels as [R,G,B] arrays
var myPixels = [[190,197,190], [202,204,200], [207,214,210], [211,214,211], [205,207,207]
                // etc
                ];
var maxColors = 4;
 
var cmap = MMCQ.quantize(myPixels, maxColors);
var newPalette = cmap.palette();
var newPixels = myPixels.map(function(p) { 
    return cmap.map(p); 
});
 
 */
var MMCQ = (function() {
    // private constants
    var sigbits = 5,
        rshift = 8 - sigbits,
        maxIterations = 1000,
        fractByPopulations = 0.75;

    // get reduced-space color index for a pixel

    function getColorIndex(r, g, b) {
        return (r << (2 * sigbits)) + (g << sigbits) + b;
    }

    // Simple priority queue

    function PQueue(comparator) {
        var contents = [],
            sorted = false;

        function sort() {
            contents.sort(comparator);
            sorted = true;
        }

        return {
            push: function(o) {
                contents.push(o);
                sorted = false;
            },
            peek: function(index) {
                if (!sorted) sort();
                if (index === undefined) index = contents.length - 1;
                return contents[index];
            },
            pop: function() {
                if (!sorted) sort();
                return contents.pop();
            },
            size: function() {
                return contents.length;
            },
            map: function(f) {
                return contents.map(f);
            },
            debug: function() {
                if (!sorted) sort();
                return contents;
            }
        };
    }

    // 3d color space box

    function VBox(r1, r2, g1, g2, b1, b2, histo) {
        var vbox = this;
        vbox.r1 = r1;
        vbox.r2 = r2;
        vbox.g1 = g1;
        vbox.g2 = g2;
        vbox.b1 = b1;
        vbox.b2 = b2;
        vbox.histo = histo;
    }
    VBox.prototype = {
        volume: function(force) {
            var vbox = this;
            if (!vbox._volume || force) {
                vbox._volume = ((vbox.r2 - vbox.r1 + 1) * (vbox.g2 - vbox.g1 + 1) * (vbox.b2 - vbox.b1 + 1));
            }
            return vbox._volume;
        },
        count: function(force) {
            var vbox = this,
                histo = vbox.histo;
            if (!vbox._count_set || force) {
                var npix = 0,
                    i, j, k, index;
                for (i = vbox.r1; i <= vbox.r2; i++) {
                    for (j = vbox.g1; j <= vbox.g2; j++) {
                        for (k = vbox.b1; k <= vbox.b2; k++) {
                            index = getColorIndex(i, j, k);
                            npix += (histo[index] || 0);
                        }
                    }
                }
                vbox._count = npix;
                vbox._count_set = true;
            }
            return vbox._count;
        },
        copy: function() {
            var vbox = this;
            return new VBox(vbox.r1, vbox.r2, vbox.g1, vbox.g2, vbox.b1, vbox.b2, vbox.histo);
        },
        avg: function(force) {
            var vbox = this,
                histo = vbox.histo;
            if (!vbox._avg || force) {
                var ntot = 0,
                    mult = 1 << (8 - sigbits),
                    rsum = 0,
                    gsum = 0,
                    bsum = 0,
                    hval,
                    i, j, k, histoindex;
                for (i = vbox.r1; i <= vbox.r2; i++) {
                    for (j = vbox.g1; j <= vbox.g2; j++) {
                        for (k = vbox.b1; k <= vbox.b2; k++) {
                            histoindex = getColorIndex(i, j, k);
                            hval = histo[histoindex] || 0;
                            ntot += hval;
                            rsum += (hval * (i + 0.5) * mult);
                            gsum += (hval * (j + 0.5) * mult);
                            bsum += (hval * (k + 0.5) * mult);
                        }
                    }
                }
                if (ntot) {
                    vbox._avg = [~~(rsum / ntot), ~~ (gsum / ntot), ~~ (bsum / ntot)];
                } else {
                    //console.log('empty box');
                    vbox._avg = [~~(mult * (vbox.r1 + vbox.r2 + 1) / 2), ~~ (mult * (vbox.g1 + vbox.g2 + 1) / 2), ~~ (mult * (vbox.b1 + vbox.b2 + 1) / 2)];
                }
            }
            return vbox._avg;
        },
        contains: function(pixel) {
            var vbox = this,
                rval = pixel[0] >> rshift;
            gval = pixel[1] >> rshift;
            bval = pixel[2] >> rshift;
            return (rval >= vbox.r1 && rval <= vbox.r2 &&
                gval >= vbox.g1 && gval <= vbox.g2 &&
                bval >= vbox.b1 && bval <= vbox.b2);
        }
    };

    // Color map

    function CMap() {
        this.vboxes = new PQueue(function(a, b) {
            return pv.naturalOrder(
                a.vbox.count() * a.vbox.volume(),
                b.vbox.count() * b.vbox.volume()
            )
        });;
    }
    CMap.prototype = {
        push: function(vbox) {
            this.vboxes.push({
                vbox: vbox,
                color: vbox.avg()
            });
        },
        palette: function() {
            return this.vboxes.map(function(vb) {
                return vb.color
            });
        },
        size: function() {
            return this.vboxes.size();
        },
        map: function(color) {
            var vboxes = this.vboxes;
            for (var i = 0; i < vboxes.size(); i++) {
                if (vboxes.peek(i).vbox.contains(color)) {
                    return vboxes.peek(i).color;
                }
            }
            return this.nearest(color);
        },
        nearest: function(color) {
            var vboxes = this.vboxes,
                d1, d2, pColor;
            for (var i = 0; i < vboxes.size(); i++) {
                d2 = Math.sqrt(
                    Math.pow(color[0] - vboxes.peek(i).color[0], 2) +
                    Math.pow(color[1] - vboxes.peek(i).color[1], 2) +
                    Math.pow(color[2] - vboxes.peek(i).color[2], 2)
                );
                if (d2 < d1 || d1 === undefined) {
                    d1 = d2;
                    pColor = vboxes.peek(i).color;
                }
            }
            return pColor;
        },
        forcebw: function() {
            // XXX: won't  work yet
            var vboxes = this.vboxes;
            vboxes.sort(function(a, b) {
                return pv.naturalOrder(pv.sum(a.color), pv.sum(b.color))
            });

            // force darkest color to black if everything < 5
            var lowest = vboxes[0].color;
            if (lowest[0] < 5 && lowest[1] < 5 && lowest[2] < 5)
                vboxes[0].color = [0, 0, 0];

            // force lightest color to white if everything > 251
            var idx = vboxes.length - 1,
                highest = vboxes[idx].color;
            if (highest[0] > 251 && highest[1] > 251 && highest[2] > 251)
                vboxes[idx].color = [255, 255, 255];
        }
    };

    // histo (1-d array, giving the number of pixels in
    // each quantized region of color space), or null on error

    function getHisto(pixels) {
        var histosize = 1 << (3 * sigbits),
            histo = new Array(histosize),
            index, rval, gval, bval;
        pixels.forEach(function(pixel) {
            rval = pixel[0] >> rshift;
            gval = pixel[1] >> rshift;
            bval = pixel[2] >> rshift;
            index = getColorIndex(rval, gval, bval);
            histo[index] = (histo[index] || 0) + 1;
        });
        return histo;
    }

    function vboxFromPixels(pixels, histo) {
        var rmin = 1000000,
            rmax = 0,
            gmin = 1000000,
            gmax = 0,
            bmin = 1000000,
            bmax = 0,
            rval, gval, bval;
        // find min/max
        pixels.forEach(function(pixel) {
            rval = pixel[0] >> rshift;
            gval = pixel[1] >> rshift;
            bval = pixel[2] >> rshift;
            if (rval < rmin) rmin = rval;
            else if (rval > rmax) rmax = rval;
            if (gval < gmin) gmin = gval;
            else if (gval > gmax) gmax = gval;
            if (bval < bmin) bmin = bval;
            else if (bval > bmax) bmax = bval;
        });
        return new VBox(rmin, rmax, gmin, gmax, bmin, bmax, histo);
    }

    function medianCutApply(histo, vbox) {
        if (!vbox.count()) return;

        var rw = vbox.r2 - vbox.r1 + 1,
            gw = vbox.g2 - vbox.g1 + 1,
            bw = vbox.b2 - vbox.b1 + 1,
            maxw = pv.max([rw, gw, bw]);
        // only one pixel, no split
        if (vbox.count() == 1) {
            return [vbox.copy()]
        }
        /* Find the partial sum arrays along the selected axis. */
        var total = 0,
            partialsum = [],
            lookaheadsum = [],
            i, j, k, sum, index;
        if (maxw == rw) {
            for (i = vbox.r1; i <= vbox.r2; i++) {
                sum = 0;
                for (j = vbox.g1; j <= vbox.g2; j++) {
                    for (k = vbox.b1; k <= vbox.b2; k++) {
                        index = getColorIndex(i, j, k);
                        sum += (histo[index] || 0);
                    }
                }
                total += sum;
                partialsum[i] = total;
            }
        } else if (maxw == gw) {
            for (i = vbox.g1; i <= vbox.g2; i++) {
                sum = 0;
                for (j = vbox.r1; j <= vbox.r2; j++) {
                    for (k = vbox.b1; k <= vbox.b2; k++) {
                        index = getColorIndex(j, i, k);
                        sum += (histo[index] || 0);
                    }
                }
                total += sum;
                partialsum[i] = total;
            }
        } else { /* maxw == bw */
            for (i = vbox.b1; i <= vbox.b2; i++) {
                sum = 0;
                for (j = vbox.r1; j <= vbox.r2; j++) {
                    for (k = vbox.g1; k <= vbox.g2; k++) {
                        index = getColorIndex(j, k, i);
                        sum += (histo[index] || 0);
                    }
                }
                total += sum;
                partialsum[i] = total;
            }
        }
        partialsum.forEach(function(d, i) {
            lookaheadsum[i] = total - d
        });

        function doCut(color) {
            var dim1 = color + '1',
                dim2 = color + '2',
                left, right, vbox1, vbox2, d2, count2 = 0;
            for (i = vbox[dim1]; i <= vbox[dim2]; i++) {
                if (partialsum[i] > total / 2) {
                    vbox1 = vbox.copy();
                    vbox2 = vbox.copy();
                    left = i - vbox[dim1];
                    right = vbox[dim2] - i;
                    if (left <= right)
                        d2 = Math.min(vbox[dim2] - 1, ~~ (i + right / 2));
                    else d2 = Math.max(vbox[dim1], ~~ (i - 1 - left / 2));
                    // avoid 0-count boxes
                    while (!partialsum[d2]) d2++;
                    count2 = lookaheadsum[d2];
                    while (!count2 && partialsum[d2 - 1]) count2 = lookaheadsum[--d2];
                    // set dimensions
                    vbox1[dim2] = d2;
                    vbox2[dim1] = vbox1[dim2] + 1;
                    // console.log('vbox counts:', vbox.count(), vbox1.count(), vbox2.count());
                    return [vbox1, vbox2];
                }
            }

        }
        // determine the cut planes
        return maxw == rw ? doCut('r') :
            maxw == gw ? doCut('g') :
            doCut('b');
    }

    function quantize(pixels, maxcolors) {
        // short-circuit
        if (!pixels.length || maxcolors < 2 || maxcolors > 256) {
            // console.log('wrong number of maxcolors');
            return false;
        }

        // XXX: check color content and convert to grayscale if insufficient

        var histo = getHisto(pixels),
            histosize = 1 << (3 * sigbits);

        // check that we aren't below maxcolors already
        var nColors = 0;
        histo.forEach(function() {
            nColors++
        });
        if (nColors <= maxcolors) {
            // XXX: generate the new colors from the histo and return
        }

        // get the beginning vbox from the colors
        var vbox = vboxFromPixels(pixels, histo),
            pq = new PQueue(function(a, b) {
                return pv.naturalOrder(a.count(), b.count())
            });
        pq.push(vbox);

        // inner function to do the iteration

        function iter(lh, target) {
            var ncolors = 1,
                niters = 0,
                vbox;
            while (niters < maxIterations) {
                vbox = lh.pop();
                if (!vbox.count()) { /* just put it back */
                    lh.push(vbox);
                    niters++;
                    continue;
                }
                // do the cut
                var vboxes = medianCutApply(histo, vbox),
                    vbox1 = vboxes[0],
                    vbox2 = vboxes[1];

                if (!vbox1) {
                    // console.log("vbox1 not defined; shouldn't happen!");
                    return;
                }
                lh.push(vbox1);
                if (vbox2) { /* vbox2 can be null */
                    lh.push(vbox2);
                    ncolors++;
                }
                if (ncolors >= target) return;
                if (niters++ > maxIterations) {
                    // console.log("infinite loop; perhaps too few pixels!");
                    return;
                }
            }
        }

        // first set of colors, sorted by population
        iter(pq, fractByPopulations * maxcolors);
        // console.log(pq.size(), pq.debug().length, pq.debug().slice());

        // Re-sort by the product of pixel occupancy times the size in color space.
        var pq2 = new PQueue(function(a, b) {
            return pv.naturalOrder(a.count() * a.volume(), b.count() * b.volume())
        });
        while (pq.size()) {
            pq2.push(pq.pop());
        }

        // next set - generate the median cuts using the (npix * vol) sorting.
        iter(pq2, maxcolors - pq2.size());

        // calculate the actual colors
        var cmap = new CMap();
        while (pq2.size()) {
            cmap.push(pq2.pop());
        }

        return cmap;
    }

    return {
        quantize: quantize
    }
})();

module.exports = MMCQ.quantize

},{}],2:[function(require,module,exports){

/*
  Vibrant.js
  by Jari Zwarts
  Color algorithm class that finds variations on colors in an image.
  Credits
  --------
  Lokesh Dhakar (http://www.lokeshdhakar.com) - Created ColorThief
  Google - Palette support library in Android
 */

(function() {
  var CanvasImage, Swatch, Vibrant,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    slice = [].slice;

  window.Swatch = Swatch = (function() {
    Swatch.prototype.hsl = void 0;

    Swatch.prototype.rgb = void 0;

    Swatch.prototype.population = 1;

    Swatch.yiq = 0;

    function Swatch(rgb, population) {
      this.rgb = rgb;
      this.population = population;
    }

    Swatch.prototype.getHsl = function() {
      if (!this.hsl) {
        return this.hsl = Vibrant.rgbToHsl(this.rgb[0], this.rgb[1], this.rgb[2]);
      } else {
        return this.hsl;
      }
    };

    Swatch.prototype.getPopulation = function() {
      return this.population;
    };

    Swatch.prototype.getRgb = function() {
      return this.rgb;
    };

    Swatch.prototype.getHex = function() {
      return "#" + ((1 << 24) + (this.rgb[0] << 16) + (this.rgb[1] << 8) + this.rgb[2]).toString(16).slice(1, 7);
    };

    Swatch.prototype.getTitleTextColor = function() {
      this._ensureTextColors();
      if (this.yiq < 200) {
        return "#fff";
      } else {
        return "#000";
      }
    };

    Swatch.prototype.getBodyTextColor = function() {
      this._ensureTextColors();
      if (this.yiq < 150) {
        return "#fff";
      } else {
        return "#000";
      }
    };

    Swatch.prototype._ensureTextColors = function() {
      if (!this.yiq) {
        return this.yiq = (this.rgb[0] * 299 + this.rgb[1] * 587 + this.rgb[2] * 114) / 1000;
      }
    };

    return Swatch;

  })();

  window.Vibrant = Vibrant = (function() {
    Vibrant.prototype.quantize = require('quantize');

    Vibrant.prototype._swatches = [];

    Vibrant.prototype.TARGET_DARK_LUMA = 0.26;

    Vibrant.prototype.MAX_DARK_LUMA = 0.45;

    Vibrant.prototype.MIN_LIGHT_LUMA = 0.55;

    Vibrant.prototype.TARGET_LIGHT_LUMA = 0.74;

    Vibrant.prototype.MIN_NORMAL_LUMA = 0.3;

    Vibrant.prototype.TARGET_NORMAL_LUMA = 0.5;

    Vibrant.prototype.MAX_NORMAL_LUMA = 0.7;

    Vibrant.prototype.TARGET_MUTED_SATURATION = 0.3;

    Vibrant.prototype.MAX_MUTED_SATURATION = 0.4;

    Vibrant.prototype.TARGET_VIBRANT_SATURATION = 1;

    Vibrant.prototype.MIN_VIBRANT_SATURATION = 0.35;

    Vibrant.prototype.WEIGHT_SATURATION = 3;

    Vibrant.prototype.WEIGHT_LUMA = 6;

    Vibrant.prototype.WEIGHT_POPULATION = 1;

    Vibrant.prototype.VibrantSwatch = void 0;

    Vibrant.prototype.MutedSwatch = void 0;

    Vibrant.prototype.DarkVibrantSwatch = void 0;

    Vibrant.prototype.DarkMutedSwatch = void 0;

    Vibrant.prototype.LightVibrantSwatch = void 0;

    Vibrant.prototype.LightMutedSwatch = void 0;

    Vibrant.prototype.HighestPopulation = 0;

    function Vibrant(sourceImage, colorCount, quality) {
      this.swatches = bind(this.swatches, this);
      var a, allPixels, b, cmap, g, i, image, imageData, offset, pixelCount, pixels, r;
      if (typeof colorCount === 'undefined') {
        colorCount = 64;
      }
      if (typeof quality === 'undefined') {
        quality = 5;
      }
      image = new CanvasImage(sourceImage);
      try {
        imageData = image.getImageData();
        pixels = imageData.data;
        pixelCount = image.getPixelCount();
        allPixels = [];
        i = 0;
        while (i < pixelCount) {
          offset = i * 4;
          r = pixels[offset + 0];
          g = pixels[offset + 1];
          b = pixels[offset + 2];
          a = pixels[offset + 3];
          if (a >= 125) {
            if (!(r > 250 && g > 250 && b > 250)) {
              allPixels.push([r, g, b]);
            }
          }
          i = i + quality;
        }
        cmap = this.quantize(allPixels, colorCount);
        if ( cmap ) {
          this._swatches = cmap.vboxes.map((function(_this) {
            return function(vbox) {
              return new Swatch(vbox.color, vbox.vbox.count());
            };
          })(this));
          this.maxPopulation = this.findMaxPopulation;
          this.generateVarationColors();
          this.generateEmptySwatches();
        } else {
          this.isWhiteImage = true;
        }
      } finally {
        image.removeCanvas();
      }
    }

    Vibrant.prototype.generateVarationColors = function() {
      this.VibrantSwatch = this.findColorVariation(this.TARGET_NORMAL_LUMA, this.MIN_NORMAL_LUMA, this.MAX_NORMAL_LUMA, this.TARGET_VIBRANT_SATURATION, this.MIN_VIBRANT_SATURATION, 1);
      this.LightVibrantSwatch = this.findColorVariation(this.TARGET_LIGHT_LUMA, this.MIN_LIGHT_LUMA, 1, this.TARGET_VIBRANT_SATURATION, this.MIN_VIBRANT_SATURATION, 1);
      this.DarkVibrantSwatch = this.findColorVariation(this.TARGET_DARK_LUMA, 0, this.MAX_DARK_LUMA, this.TARGET_VIBRANT_SATURATION, this.MIN_VIBRANT_SATURATION, 1);
      this.MutedSwatch = this.findColorVariation(this.TARGET_NORMAL_LUMA, this.MIN_NORMAL_LUMA, this.MAX_NORMAL_LUMA, this.TARGET_MUTED_SATURATION, 0, this.MAX_MUTED_SATURATION);
      this.LightMutedSwatch = this.findColorVariation(this.TARGET_LIGHT_LUMA, this.MIN_LIGHT_LUMA, 1, this.TARGET_MUTED_SATURATION, 0, this.MAX_MUTED_SATURATION);
      return this.DarkMutedSwatch = this.findColorVariation(this.TARGET_DARK_LUMA, 0, this.MAX_DARK_LUMA, this.TARGET_MUTED_SATURATION, 0, this.MAX_MUTED_SATURATION);
    };

    Vibrant.prototype.generateEmptySwatches = function() {
      var hsl;
      if (this.VibrantSwatch === void 0) {
        if (this.DarkVibrantSwatch !== void 0) {
          hsl = this.DarkVibrantSwatch.getHsl();
          hsl[2] = this.TARGET_NORMAL_LUMA;
          this.VibrantSwatch = new Swatch(Vibrant.hslToRgb(hsl[0], hsl[1], hsl[2]), 0);
        }
      }
      if (this.DarkVibrantSwatch === void 0) {
        if (this.VibrantSwatch !== void 0) {
          hsl = this.VibrantSwatch.getHsl();
          hsl[2] = this.TARGET_DARK_LUMA;
          return this.DarkVibrantSwatch = new Swatch(Vibrant.hslToRgb(hsl[0], hsl[1], hsl[2]), 0);
        }
      }
    };

    Vibrant.prototype.findMaxPopulation = function() {
      var j, len, population, ref, swatch;
      population = 0;
      ref = this._swatches;
      for (j = 0, len = ref.length; j < len; j++) {
        swatch = ref[j];
        population = Math.max(population, swatch.getPopulation());
      }
      return population;
    };

    Vibrant.prototype.findColorVariation = function(targetLuma, minLuma, maxLuma, targetSaturation, minSaturation, maxSaturation) {
      var j, len, luma, max, maxValue, ref, sat, swatch, value;
      max = void 0;
      maxValue = 0;
      ref = this._swatches;
      for (j = 0, len = ref.length; j < len; j++) {
        swatch = ref[j];
        sat = swatch.getHsl()[1];
        luma = swatch.getHsl()[2];
        if (sat >= minSaturation && sat <= maxSaturation && luma >= minLuma && luma <= maxLuma && !this.isAlreadySelected(swatch)) {
          value = this.createComparisonValue(sat, targetSaturation, luma, targetLuma, swatch.getPopulation(), this.HighestPopulation);
          if (max === void 0 || value > maxValue) {
            max = swatch;
            maxValue = value;
          }
        }
      }
      return max;
    };

    Vibrant.prototype.createComparisonValue = function(saturation, targetSaturation, luma, targetLuma, population, maxPopulation) {
      return this.weightedMean(this.invertDiff(saturation, targetSaturation), this.WEIGHT_SATURATION, this.invertDiff(luma, targetLuma), this.WEIGHT_LUMA, population / maxPopulation, this.WEIGHT_POPULATION);
    };

    Vibrant.prototype.invertDiff = function(value, targetValue) {
      return 1 - Math.abs(value - targetValue);
    };

    Vibrant.prototype.weightedMean = function() {
      var i, sum, sumWeight, value, values, weight;
      values = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      sum = 0;
      sumWeight = 0;
      i = 0;
      while (i < values.length) {
        value = values[i];
        weight = values[i + 1];
        sum += value * weight;
        sumWeight += weight;
        i += 2;
      }
      return sum / sumWeight;
    };

    Vibrant.prototype.swatches = function() {
      return {
        Vibrant: this.VibrantSwatch,
        Muted: this.MutedSwatch,
        DarkVibrant: this.DarkVibrantSwatch,
        DarkMuted: this.DarkMutedSwatch,
        LightVibrant: this.LightVibrantSwatch,
        LightMuted: this.LightMuted
      };
    };

    Vibrant.prototype.isAlreadySelected = function(swatch) {
      return this.VibrantSwatch === swatch || this.DarkVibrantSwatch === swatch || this.LightVibrantSwatch === swatch || this.MutedSwatch === swatch || this.DarkMutedSwatch === swatch || this.LightMutedSwatch === swatch;
    };

    Vibrant.rgbToHsl = function(r, g, b) {
      var d, h, l, max, min, s;
      r /= 255;
      g /= 255;
      b /= 255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      h = void 0;
      s = void 0;
      l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
        }
        h /= 6;
      }
      return [h, s, l];
    };

    Vibrant.hslToRgb = function(h, s, l) {
      var b, g, hue2rgb, p, q, r;
      r = void 0;
      g = void 0;
      b = void 0;
      hue2rgb = function(p, q, t) {
        if (t < 0) {
          t += 1;
        }
        if (t > 1) {
          t -= 1;
        }
        if (t < 1 / 6) {
          return p + (q - p) * 6 * t;
        }
        if (t < 1 / 2) {
          return q;
        }
        if (t < 2 / 3) {
          return p + (q - p) * (2 / 3 - t) * 6;
        }
        return p;
      };
      if (s === 0) {
        r = g = b = l;
      } else {
        q = l < 0.5 ? l * (1 + s) : l + s - (l * s);
        p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - (1 / 3));
      }
      return [r * 255, g * 255, b * 255];
    };

    return Vibrant;

  })();


  /*
    CanvasImage Class
    Class that wraps the html image element and canvas.
    It also simplifies some of the canvas context manipulation
    with a set of helper functions.
    Stolen from https://github.com/lokesh/color-thief
   */

  window.CanvasImage = CanvasImage = (function() {
    function CanvasImage(image) {
      this.canvas = document.createElement('canvas');
      this.context = this.canvas.getContext('2d');
      document.body.appendChild(this.canvas);
      this.width = this.canvas.width = image.width;
      this.height = this.canvas.height = image.height;
      this.context.drawImage(image, 0, 0, this.width, this.height);
    }

    CanvasImage.prototype.clear = function() {
      return this.context.clearRect(0, 0, this.width, this.height);
    };

    CanvasImage.prototype.update = function(imageData) {
      return this.context.putImageData(imageData, 0, 0);
    };

    CanvasImage.prototype.getPixelCount = function() {
      return this.width * this.height;
    };

    CanvasImage.prototype.getImageData = function() {
      return this.context.getImageData(0, 0, this.width, this.height);
    };

    CanvasImage.prototype.removeCanvas = function() {
      return this.canvas.parentNode.removeChild(this.canvas);
    };

    return CanvasImage;

  })();

}).call(this);

},{"quantize":1}]},{},[2]);

/*!
	Autosize v1.18.9 - 2014-05-27
	Automatically adjust textarea height based on user input.
	(c) 2014 Jack Moore - http://www.jacklmoore.com/autosize
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e){var t,o={className:"autosizejs",id:"autosizejs",append:"\n",callback:!1,resizeDelay:10,placeholder:!0},i='<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',n=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],s=e(i).data("autosize",!0)[0];s.style.lineHeight="99px","99px"===e(s).css("lineHeight")&&n.push("lineHeight"),s.style.lineHeight="",e.fn.autosize=function(i){return this.length?(i=e.extend({},o,i||{}),s.parentNode!==document.body&&e(document.body).append(s),this.each(function(){function o(){var t,o=window.getComputedStyle?window.getComputedStyle(u,null):!1;o?(t=u.getBoundingClientRect().width,(0===t||"number"!=typeof t)&&(t=parseInt(o.width,10)),e.each(["paddingLeft","paddingRight","borderLeftWidth","borderRightWidth"],function(e,i){t-=parseInt(o[i],10)})):t=p.width(),s.style.width=Math.max(t,0)+"px"}function a(){var a={};if(t=u,s.className=i.className,s.id=i.id,d=parseInt(p.css("maxHeight"),10),e.each(n,function(e,t){a[t]=p.css(t)}),e(s).css(a).attr("wrap",p.attr("wrap")),o(),window.chrome){var r=u.style.width;u.style.width="0px",u.offsetWidth,u.style.width=r}}function r(){var e,n;t!==u?a():o(),s.value=!u.value&&i.placeholder?(p.attr("placeholder")||"")+i.append:u.value+i.append,s.style.overflowY=u.style.overflowY,n=parseInt(u.style.height,10),s.scrollTop=0,s.scrollTop=9e4,e=s.scrollTop,d&&e>d?(u.style.overflowY="scroll",e=d):(u.style.overflowY="hidden",c>e&&(e=c)),e+=w,n!==e&&(u.style.height=e+"px",f&&i.callback.call(u,u))}function l(){clearTimeout(h),h=setTimeout(function(){var e=p.width();e!==g&&(g=e,r())},parseInt(i.resizeDelay,10))}var d,c,h,u=this,p=e(u),w=0,f=e.isFunction(i.callback),z={height:u.style.height,overflow:u.style.overflow,overflowY:u.style.overflowY,wordWrap:u.style.wordWrap,resize:u.style.resize},g=p.width(),y=p.css("resize");p.data("autosize")||(p.data("autosize",!0),("border-box"===p.css("box-sizing")||"border-box"===p.css("-moz-box-sizing")||"border-box"===p.css("-webkit-box-sizing"))&&(w=p.outerHeight()-p.height()),c=Math.max(parseInt(p.css("minHeight"),10)-w||0,p.height()),p.css({overflow:"hidden",overflowY:"hidden",wordWrap:"break-word"}),"vertical"===y?p.css("resize","none"):"both"===y&&p.css("resize","horizontal"),"onpropertychange"in u?"oninput"in u?p.on("input.autosize keyup.autosize",r):p.on("propertychange.autosize",function(){"value"===event.propertyName&&r()}):p.on("input.autosize",r),i.resizeDelay!==!1&&e(window).on("resize.autosize",l),p.on("autosize.resize",r),p.on("autosize.resizeIncludeStyle",function(){t=null,r()}),p.on("autosize.destroy",function(){t=null,clearTimeout(h),e(window).off("resize",l),p.off("autosize").off(".autosize").css(z).removeData("autosize")}),r())})):this}})(window.jQuery||window.$);
/*! Lazy Load 1.9.7 - MIT license - Copyright 2010-2015 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);

/*!
 * jQuery Magnify Plugin v2.1.0 by T. H. Doan (http://thdoan.github.io/magnify/)
 * Based on http://thecodeplayer.com/walkthrough/magnifying-glass-for-images-using-jquery-and-css3
 *
 * jQuery Magnify by T. H. Doan is licensed under the MIT License.
 * Read a copy of the license in the LICENSE file or at http://choosealicense.com/licenses/mit
 */

(function($) {
  $.fn.magnify = function(oOptions) {
    // Default options
    oOptions = $.extend({
      'src': '',
      'speed': 100,
      'timeout': -1,
      'finalWidth': null,
      'finalHeight': null,
      'magnifiedWidth': null,
      'magnifiedHeight': null,
      'limitBounds': false,
      'afterLoad': function(){}
    }, oOptions);

    var $that = this, // Preserve scope
      $html = $('html'),

      // Initiate
      init = function(el) {
        var $image = $(el),
          $anchor = $image.closest('a'),
          oDataAttr = {};

        // Get data attributes
        for (var i in oOptions) {
          oDataAttr[i] = $image.attr('data-magnify-' + i.toLowerCase());
        }

        // Disable zooming if no valid large image source
        var sZoomSrc = oDataAttr.src || oOptions.src || $anchor.attr('href') || '';
        if (!sZoomSrc) return;

        var $container,
          $lens,
          nImageWidth,
          nImageHeight,
          nMagnifiedWidth,
          nMagnifiedHeight,
          nLensWidth,
          nLensHeight,
          nBoundX = 0,
          nBoundY = 0,
          oContainerOffset, // Relative to document
          oImageOffset,     // Relative to container
          // Get true offsets
          getOffset = function() {
            var o = $container.offset();
            // Store offsets from container border to image inside
            // NOTE: .offset() does NOT take into consideration image border and padding.
            oImageOffset = {
              'top': ($image.offset().top-o.top) + parseInt($image.css('border-top-width')) + parseInt($image.css('padding-top')),
              'left': ($image.offset().left-o.left) + parseInt($image.css('border-left-width')) + parseInt($image.css('padding-left'))
            };
            o.top += oImageOffset['top'];
            o.left += oImageOffset['left'];
            return o;
          },
          // Hide the lens
          hideLens = function() {
            if ($lens.is(':visible')) $lens.fadeOut(oOptions['speed'], function() {
              $html.removeClass('magnifying').trigger('magnifyend'); // Reset overflow-x
            });
          };

        // Data attributes have precedence over options object
        if (!isNaN(+oDataAttr.speed)) {
          oOptions.speed = +oDataAttr.speed;
        }
        if (!isNaN(+oDataAttr.timeout)) {
          oOptions.timeout = +oDataAttr.timeout;
        }
        if (!isNaN(+oDataAttr.finalWidth)) {
          oOptions.finalWidth = +oDataAttr.finalWidth;
        }
        if (!isNaN(+oDataAttr.finalHeight)) {
          oOptions.finalHeight = +oDataAttr.finalHeight;
        }
        if (!isNaN(+oDataAttr.magnifiedWidth)) {
          oOptions.magnifiedWidth = +oDataAttr.magnifiedWidth;
        }
        if (!isNaN(+oDataAttr.magnifiedHeight)) {
          oOptions.magnifiedHeight = +oDataAttr.magnifiedHeight;
        }
        if (oDataAttr.limitBounds==='true') {
          oOptions.limitBounds = true;
        }
        if (typeof window[oDataAttr.afterLoad]==='function') {
          oOptions.afterLoad = window[oDataAttr.afterLoad];
        }

        // Save any inline styles for resetting
        $image.data('originalStyle', $image.attr('style'));

        // Activate magnification:
        // 1. Try to get large image dimensions
        // 2. Proceed only if able to get large image dimensions OK

        // [1] Calculate the native (magnified) image dimensions. The zoomed version is only shown
        // after the native dimensions are available. To get the actual dimensions we have to create
        // this image object.
        var elZoomImage = new Image();
        $(elZoomImage).on({
          'load': function() {
            // [2] Got image dimensions OK.

            var nX, nY;

            // Fix overlap bug at the edges during magnification
            $image.css('display', 'block');
            // Create container div if necessary
            if (!$image.parent('.magnify').length) {
              $image.wrap('<div class="magnify"></div>');
            }
            $container = $image.parent('.magnify');
            // Create the magnifying lens div if necessary
            if ($image.prev('.magnify-lens').length) {
              $container.children('.magnify-lens').css('background-image', 'url(\'' + sZoomSrc + '\')');
            } else {
              $image.before('<div class="magnify-lens loading" style="background:url(\'' + sZoomSrc + '\') 0 0 no-repeat"></div>');
            }
            $lens = $container.children('.magnify-lens');
            // Remove the "Loading..." text
            $lens.removeClass('loading');
            // Cache dimensions and offsets for improved performance
            // NOTE: This code is inside the load() function, which is important. The width and
            // height of the object would return 0 if accessed before the image is fully loaded.
            nImageWidth = oOptions['finalWidth'] || $image.width();
            nImageHeight = oOptions['finalHeight'] || $image.height();
            nMagnifiedWidth = oOptions['magnifiedWidth'] || elZoomImage.width;
            nMagnifiedHeight = oOptions['magnifiedHeight'] || elZoomImage.height;
            nLensWidth = $lens.width();
            nLensHeight = $lens.height();
            oContainerOffset = getOffset(); // Required by refresh()
            // Set zoom boundaries
            if (oOptions['limitBounds']) {
              nBoundX = (nLensWidth/2) / (nMagnifiedWidth/nImageWidth);
              nBoundY = (nLensHeight/2) / (nMagnifiedHeight/nImageHeight);
            }
            // Enforce non-native large image size?
            if (nMagnifiedWidth!==elZoomImage.width || nMagnifiedHeight!==elZoomImage.height) {
              $lens.css('background-size', nMagnifiedWidth + 'px ' + nMagnifiedHeight + 'px');
            }
            // Store zoom dimensions for mobile plugin
            $image.data('zoomSize', {
              'width': nMagnifiedWidth,
              'height': nMagnifiedHeight
            });
            // Clean up
            elZoomImage = null;
            // Execute callback
            oOptions.afterLoad();
            // Handle mouse movements
            $container.off().on({
              'mousemove touchmove': function(e) {
                e.preventDefault();
                // Reinitialize if image initially hidden
                if (!nImageHeight) {
                  refresh();
                  return;
                }
                // x/y coordinates of the mouse pointer or touch point. This is the position of
                // .magnify relative to the document.
                //
                // We deduct the positions of .magnify from the mouse or touch positions relative to
                // the document to get the mouse or touch positions relative to the container.
                nX = (e.pageX || e.originalEvent.touches[0].pageX) - oContainerOffset['left'],
                nY = (e.pageY || e.originalEvent.touches[0].pageY) - oContainerOffset['top'];
                // Toggle magnifying lens
                if (!$lens.is(':animated')) {
                  if (nX>nBoundX && nX<nImageWidth-nBoundX && nY>nBoundY && nY<nImageHeight-nBoundY) {
                    if ($lens.is(':hidden')) {
                      $html.addClass('magnifying').trigger('magnifystart'); // Hide overflow-x while zooming
                      $lens.fadeIn(oOptions['speed']);
                    }
                  } else {
                    hideLens();
                  }
                }
                if ($lens.is(':visible')) {
                  // Move the magnifying lens with the mouse
                  var sBgPos = '';
                  if (nMagnifiedWidth && nMagnifiedHeight) {
                    // Change the background position of .magnify-lens according to the position of
                    // the mouse over the .magnify-image image. This allows us to get the ratio of
                    // the pixel under the mouse pointer with respect to the image and use that to
                    // position the large image inside the magnifying lens.
                    var nRatioX = -Math.round(nX/nImageWidth*nMagnifiedWidth-nLensWidth/2),
                      nRatioY = -Math.round(nY/nImageHeight*nMagnifiedHeight-nLensHeight/2);
                    if (oOptions['limitBounds']) {
                      // Enforce bounds to ensure only image is visible in lens
                      var nBoundRight = -Math.round((nImageWidth-nBoundX)/nImageWidth*nMagnifiedWidth-nLensWidth/2),
                        nBoundBottom = -Math.round((nImageHeight-nBoundY)/nImageHeight*nMagnifiedHeight-nLensHeight/2);
                      // Left and right edges
                      if (nRatioX>0) nRatioX = 0;
                      else if (nRatioX<nBoundRight) nRatioX = nBoundRight;
                      // Top and bottom edges
                      if (nRatioY>0) nRatioY = 0;
                      else if (nRatioY<nBoundBottom) nRatioY = nBoundBottom;
                    }
                    sBgPos = nRatioX + 'px ' + nRatioY + 'px';
                  }
                  // Now the lens moves with the mouse. The logic is to deduct half of the lens's
                  // width and height from the mouse coordinates to place it with its center at the
                  // mouse coordinates. If you hover on the image now, you should see the magnifying
                  // lens in action.
                  $lens.css({
                    'top': Math.round(nY-nLensHeight/2) + oImageOffset['top'] + 'px',
                    'left': Math.round(nX-nLensWidth/2) + oImageOffset['left'] + 'px',
                    'background-position': sBgPos
                  });
                }
              },
              'mouseenter': function() {
                // Need to update offsets here to support accordions
                oContainerOffset = getOffset();
              },
              'mouseleave': hideLens
            });

            // Prevent magnifying lens from getting "stuck"
            if (oOptions['timeout']>=0) {
              $container.on('touchend', function() {
                setTimeout(hideLens, oOptions['timeout']);
              });
            }
            // Ensure lens is closed when tapping outside of it
            $('body').not($container).on('touchstart', hideLens);

            // Support image map click-throughs while zooming
            var sUsemap = $image.attr('usemap');
            if (sUsemap) {
              var $map = $('map[name=' + sUsemap.slice(1) + ']');
              // Image map needs to be on the same DOM level as image source
              $image.after($map);
              $container.click(function(e) {
                // Trigger click on image below lens at current cursor position
                if (e.clientX || e.clientY) {
                  $lens.hide();
                  var elPoint = document.elementFromPoint(
                      e.clientX || e.originalEvent.touches[0].clientX,
                      e.clientY || e.originalEvent.touches[0].clientY
                    );
                  if (elPoint.nodeName==='AREA') {
                    elPoint.click();
                  } else {
                    // Workaround for buggy implementation of elementFromPoint()
                    // See https://bugzilla.mozilla.org/show_bug.cgi?id=1227469
                    $('area', $map).each(function() {
                      var a = $(this).attr('coords').split(',');
                      if (nX>=a[0] && nX<=a[2] && nY>=a[1] && nY<=a[3]) {
                        this.click();
                        return false;
                      }
                    });
                  }
                }
              });
            }

            if ($anchor.length) {
              // Make parent anchor inline-block to have correct dimensions
              $anchor.css('display', 'inline-block');
              // Disable parent anchor if it's sourcing the large image
              if ($anchor.attr('href') && !(oDataAttr['src'] || oOptions['src'])) {
                $anchor.click(function(e) {
                  e.preventDefault();
                });
              }
            }

          },
          'error': function() {
            // Clean up
            elZoomImage = null;
          }
        });

        elZoomImage.src = sZoomSrc;
      }, // END init()

      // Simple debounce
      nTimer = 0,
      refresh = function() {
        clearTimeout(nTimer);
        nTimer = setTimeout(function() {
          $that.destroy();
          $that.magnify(oOptions);
        }, 100);
      };

    /**
     * Public Methods
     */

    // Turn off zoom and reset to original state
    this.destroy = function() {
      this.each(function() {
        var $this = $(this),
          $lens = $this.prev('div.magnify-lens'),
          sStyle = $this.data('originalStyle');
        if ($this.parent('div.magnify').length && $lens.length) {
          if (sStyle) $this.attr('style', sStyle);
          else $this.removeAttr('style');
          $this.unwrap();
          $lens.remove();
        }
      });
      // Unregister event handler
      $(window).off('resize', refresh);
      return $that;
    }

    // Handle window resizing
    $(window).resize(refresh);

    return this.each(function() {
      // Initiate magnification powers
      init(this);
    });

  };
}(jQuery));
/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.2
 */
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});
/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
					attributes.path ? '; path=' + attributes.path : '',
					attributes.domain ? '; domain=' + attributes.domain : '',
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));