(function (window) {
    var KEY = 'kc-lang';
    var LANGS = ['ko', 'en', 'zh', 'vi', 'th'];

    function resolveLang() {
        try {
            var q = new URLSearchParams(location.search).get('lang');
            if (q) q = q.toLowerCase();
            if (LANGS.indexOf(q) >= 0) {
                try { localStorage.setItem(KEY, q); } catch (e) {}
                return q;
            }
            var s = localStorage.getItem(KEY);
            if (LANGS.indexOf(s) >= 0) return s;
            var n = (navigator.language || '').toLowerCase();
            if (n.indexOf('ko') === 0) return 'ko';
            if (n.indexOf('zh') === 0) return 'zh';
            if (n.indexOf('vi') === 0) return 'vi';
            if (n.indexOf('th') === 0) return 'th';
        } catch (e) {}
        return 'en';
    }

    function apply(l) {
        if (LANGS.indexOf(l) < 0) return;
        document.documentElement.setAttribute('data-lang', l);
        document.documentElement.setAttribute('lang', l);
        try { localStorage.setItem(KEY, l); } catch (e) {}
    }

    function init() {
        apply(resolveLang());
        document.querySelectorAll('.lang-toggle button').forEach(function (b) {
            b.addEventListener('click', function () {
                apply(b.getAttribute('data-setlang'));
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.KC_I18N = { KEY: KEY, LANGS: LANGS, resolveLang: resolveLang, apply: apply, init: init };
})(window);
