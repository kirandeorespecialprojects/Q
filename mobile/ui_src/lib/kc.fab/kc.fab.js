/*===================================================================
 =            KC.FAB : Materialize Floating Action Button            =
 ===================================================================*/
/*
 * Copyright 2015 Mark Luk
 * Released under the MIT license
 * https://github.com/katrincwl/kc_fab/blob/master/LICENSE
 *
 * @author: Mark Luk
 * @version: 1.0
 * @date: 18/3/2015
 */
! function(t) {
    t.kc || (t.kc = new Object), t.kc.fab = function(n, a, i) {
        var o = this;
        o.$el = t(n), o.el = n, o.$el.data("kc.fab", o);
        var l, e;
        o.init = function() {
            if (("undefined" == typeof a || null === a) && (a = [{
                    url: null,
                    bgcolor: "red",
                    icon: "+"
                }, {
                    url: "http://www.example.com",
                    bgcolor: "orange",
                    icon: "+"
                }, {
                    url: "http://www.example.com",
                    bgcolor: "yellow",
                    icon: "+"
                }]), o.links = a, o.links.length > 0) {
                main_btn = o.links[0], color_style = main_btn.color ? "color:" + main_btn.color + ";" : "", bg_color_style = main_btn.bgcolor ? "background-color:" + main_btn.bgcolor + ";" : "", main_btn_dom = "<button data-link-href='" + (main_btn.url ? main_btn.url : "") + "' data-link-target='" + (main_btn.target ? main_btn.target : "") + "'' class='kc_fab_main_btn' style='" + bg_color_style + "'><span style='" + color_style + "'>" + main_btn.icon + "</span></button>", sub_fab_btns_dom = "", o.links.shift();
                for (var n = 0; n < o.links.length; n++) {
                	color_style = o.links[n].color ? "color:" + o.links[n].color + ";" : "", 
                	bg_color_style = o.links[n].bgcolor ? "background-color:" + o.links[n].bgcolor + ";" : "", 
                	sub_fab_btns_dom += "<div style='text-align:right;'><span style='display:inline-block;padding-right:10px;'>" + (o.links[n].text ? o.links[n].text : "") + "</span><span style='display:inline-block;'><button data-link-href='" + (o.links[n].url ? o.links[n].url : "") + "' data-link-target='" + (o.links[n].target ? o.links[n].target : "") + "' class='sub_fab_btn' style='" + bg_color_style + "'><span style='" + color_style + "'>" + o.links[n].icon + "</span></button></span></div>";
                }
                
                sub_fab_btns_dom = "<div class='sub_fab_btns_wrapper'>" + sub_fab_btns_dom + "</div>", o.$el.append(sub_fab_btns_dom).append(main_btn_dom)
            
            } else "undefined" == typeof console && (window.console = {
                log: function(t) {
                    alert(t)
                }
            }), console.log("Invalid links array param");
            o.options = t.extend({}, t.kc.fab.defaultOptions, i), l = o.$el.find(".kc_fab_main_btn"), e = o.$el.find(".sub_fab_btns_wrapper"), l.click(function(n) {
                t(this).attr("data-link-href").length > 0 && (t(this).attr("data-link-target") ? window.open(t(this).attr("data-link-href"), t(this).attr("data-link-target")) : window.location.href = t(this).attr("data-link-href")), e.toggleClass("show"), t(".kc_fab_overlay").length > 0 ? (t(".kc_fab_overlay").remove(), l.blur()) : t("body").append('<div class="kc_fab_overlay" ></div>'), 0 === t(this).find(".ink").length ? t(this).prepend("<span class='ink'></span>") : (t(this).find(".ink").remove(), t(this).prepend("<span class='ink'></span>")), ink = t(this).find(".ink"), ink.height() || ink.width() || (d = Math.max(t(this).outerWidth(), t(this).outerHeight()), ink.css({
                    height: d,
                    width: d
                })), x = n.pageX - t(this).offset().left - ink.width() / 2, y = n.pageY - t(this).offset().top - ink.height() / 2, ink.css({
                    top: y + "px",
                    left: x + "px"
                }).addClass("animate")
            }), e.find(".sub_fab_btn").on("mousedown", function() {
                t(this).attr("data-link-href").length > 0 && (t(this).attr("data-link-target") ? window.open(t(this).attr("data-link-href"), t(this).attr("data-link-target")) : window.location.href = t(this).attr("data-link-href"))
            }), l.focusout(function() {
                e.removeClass("show"), overlay = t(".kc_fab_overlay"), overlay.remove()
            })
        }, o.init()
    }, t.kc.fab.defaultOptions = {}, t.fn.kc_fab = function(n, a) {
        return this.each(function() {
            new t.kc.fab(this, n, a)
        })
    }
}(jQuery);