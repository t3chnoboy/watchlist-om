// Compiled by ClojureScript 0.0-2342
goog.provide('watchlist.core');
goog.require('cljs.core');
goog.require('watchlist.components.app');
goog.require('alandipert.storage_atom');
goog.require('watchlist.components.app');
goog.require('alandipert.storage_atom');
goog.require('figwheel.client');
goog.require('figwheel.client');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof watchlist.core.app_state !== 'undefined')
{} else
{watchlist.core.app_state = alandipert.storage_atom.local_storage.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"movies","movies",-255929346),cljs.core.PersistentVector.EMPTY], null)));
}
watchlist.core.main = (function main(){return om.core.root.call(null,watchlist.components.app.app,watchlist.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
});
watchlist.core.main.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),watchlist.core.main);

//# sourceMappingURL=core.js.map