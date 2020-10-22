Array.prototype.map ||
  (Array.prototype.map = function(e) {
    var t = this.length;
    if ('function' != typeof e) throw new TypeError();
    for (var n = Array(t), i = arguments[1], o = 0; t > o; o++)
      o in this && (n[o] = e.call(i, this[o], o, this));
    return n;
  }),
  (L.Control.FuseSearch = L.Control.extend({
    includes: L.Evented.prototype,
    options: {
      position: 'topleft',
      title: 'Search',
      panelTitle: '',
      placeholder: 'Search',
      caseSensitive: !1,
      threshold: 0.5,
      maxResultLength: null,
      showResultFct: null,
      showInvisibleFeatures: !0
    },
    initialize: function(e) {
      L.setOptions(this, e),
        (this._panelOnLeftSide = -1 !== this.options.position.indexOf('left'));
    },
    onAdd: function(e) {
      var t = this._createControl();
      return (
        this._createPanel(e), this._setEventListeners(), e.invalidateSize(), t
      );
    },
    onRemove: function(e) {
      return (
        this.hidePanel(e),
        this._clearEventListeners(),
        this._clearPanel(e),
        this._clearControl(),
        this
      );
    },
    _createControl: function() {
      var e = 'leaflet-fusesearch-control',
        t = L.DomUtil.create('div', e);
      (t.style.boxShadow = 'initial'), (t.style.border = '2px solid #cccccc');
      var n = (this._openButton = L.DomUtil.create(
        'a',
        'leaflet-control-zoom-in',
        t
      ));
      (n.style.color = '#111111'),
        (n.href = '#'),
        (n.title = this.options.title),
        (n.style.textDecoration = 'none'),
        (n.innerHTML =
          '<i class="fa fa-search" aria-hidden="true" style="display: flex;justify-content: center; align-items:center;height:30px;width:30px;"></i>'),
        (n.tabIndex = 0);
      var i = L.DomEvent.stopPropagation;
      return (
        L.DomEvent.on(n, 'click', i)
          .on(n, 'mousedown', i)
          .on(n, 'touchstart', i)
          .on(n, 'mousewheel', i)
          .on(n, 'MozMousePixelScroll', i),
        L.DomEvent.on(n, 'click', L.DomEvent.preventDefault),
        L.DomEvent.on(n, 'click', this.showPanel, this),
        t
      );
    },
    _clearControl: function() {
      var e = this._openButton,
        t = L.DomEvent.stopPropagation;
      L.DomEvent.off(e, 'click', t)
        .off(e, 'mousedown', t)
        .off(e, 'touchstart', t)
        .off(e, 'mousewheel', t)
        .off(e, 'MozMousePixelScroll', t),
        L.DomEvent.off(e, 'click', L.DomEvent.preventDefault),
        L.DomEvent.off(e, 'click', this.showPanel);
    },
    _createPanel: function(e) {
      var t = this,
        n = e.getContainer(),
        i = 'leaflet-fusesearch-panel',
        o = (this._panel = L.DomUtil.create('div', i, n));
      o.style.width = '45%';
      var r = L.DomEvent.stopPropagation;
      L.DomEvent.on(o, 'click', r)
        .on(o, 'dblclick', r)
        .on(o, 'mousedown', r)
        .on(o, 'touchstart', r)
        .on(o, 'mousewheel', r)
        .on(o, 'MozMousePixelScroll', r),
        this._panelOnLeftSide
          ? L.DomUtil.addClass(o, 'left')
          : L.DomUtil.addClass(o, 'right');
      var s = L.DomUtil.create('div', 'content', o);
      s.style.boxShadow = 'initial';
      var a = L.DomUtil.create(
          'div',
          'sign_up_notifications_form__input-wrapper-w-icon',
          s
        ),
        l = L.DomUtil.create(
          'div',
          'sign_up_notifications_form__input-wrapper-w-icon__input-group',
          a
        );
      if (
        ((l.style.flexDirection = 'initial'),
        (l.style.width = '100%'),
        this.options.panelTitle)
      ) {
        var c = L.DomUtil.create('p', 'panel-title', l);
        c.innerHTML = this.options.panelTitle;
      }
      (this._input = L.DomUtil.create(
        'input',
        'input sign_up_notifications_form__input-wrapper-w-icon__input-group__input',
        l
      )),
        (this._input.maxLength = 30),
        (this._input.placeholder = this.options.placeholder),
        (this._input.onkeyup = function(e) {
          var n = e.currentTarget.value;
          t.searchFeatures(n);
        });
      var h = L.DomUtil.create(
        'span',
        'sign_up_notifications_form__input-wrapper-w-icon__icon-left',
        l
      );
      h.innerHTML = '<i class="fa fa-search" aria-hidden="true"></i>';
      var u = (this._closeButton = L.DomUtil.create(
        'a',
        'button is-primary',
        l
      ));
      return (
        (u.innerHTML = '&times;'),
        L.DomEvent.on(u, 'click', this.hidePanel, this),
        (u.tabIndex = 0),
        (this._resultList = L.DomUtil.create('div', 'result-list', s)),
        o
      );
    },
    _clearPanel: function(e) {
      var t = L.DomEvent.stopPropagation;
      L.DomEvent.off(this._panel, 'click', t)
        .off(this._panel, 'dblclick', t)
        .off(this._panel, 'mousedown', t)
        .off(this._panel, 'touchstart', t)
        .off(this._panel, 'mousewheel', t)
        .off(this._panel, 'MozMousePixelScroll', t),
        L.DomEvent.off(this._closeButton, 'click', this.hidePanel);
      var n = e.getContainer();
      n.removeChild(this._panel), (this._panel = null);
    },
    _setEventListeners: function() {
      var e = this,
        t = this._input;
      this._map.addEventListener('overlayadd', function() {
        e.searchFeatures(t.value);
      }),
        this._map.addEventListener('overlayremove', function() {
          e.searchFeatures(t.value);
        });
    },
    _clearEventListeners: function() {
      this._map.removeEventListener('overlayadd'),
        this._map.removeEventListener('overlayremove');
    },
    isPanelVisible: function() {
      return L.DomUtil.hasClass(this._panel, 'visible');
    },
    showPanel: function() {
      this.isPanelVisible() ||
        (L.DomUtil.addClass(this._panel, 'visible'),
        this._map.panBy([0.5 * this.getOffset(), 0], { duration: 0.5 }),
        this.fire('show'),
        this._input.select(),
        this.searchFeatures(this._input.value));
    },
    hidePanel: function(e) {
      this.isPanelVisible() &&
        (L.DomUtil.removeClass(this._panel, 'visible'),
        null !== this._map &&
          this._map.panBy([this.getOffset() * -0.5, 0], { duration: 0.5 }),
        this.fire('hide'),
        e && L.DomEvent.stopPropagation(e));
    },
    getOffset: function() {
      return this._panelOnLeftSide
        ? -this._panel.offsetWidth
        : this._panel.offsetWidth;
    },
    indexFeatures: function(e, t) {
      var n = e.features || e;
      this._keys = t;
      var i = n.map(function(e) {
          return (e.properties._feature = e), e.properties;
        }),
        o = {
          keys: t,
          caseSensitive: this.options.caseSensitive,
          threshold: this.options.threshold
        };
      this._fuseIndex = new Fuse(i, o);
    },
    searchFeatures: function(e) {
      for (
        var t = this._fuseIndex.search(e),
          n = document.querySelectorAll('.result-item'),
          i = 0;
        i < n.length;
        i++
      )
        n[i].remove();
      var o = document.querySelector('.result-list'),
        r = 0,
        s = this.options.maxResultLength;
      for (var i in t) {
        var a = t[i],
          l = a._feature,
          c = this._getFeaturePopupIfVisible(l);
        if (
          (void 0 !== c || this.options.showInvisibleFeatures) &&
          (this.createResultItem(a, o, c), void 0 !== s && ++r === s)
        )
          break;
      }
    },
    refresh: function() {
      this.isPanelVisible() && this.searchFeatures(this._input.value);
    },
    _getFeaturePopupIfVisible: function(e) {
      var t = e.layer;
      return void 0 !== t && this._map.hasLayer(t) ? t.getPopup() : void 0;
    },
    createResultItem: function(e, t, n) {
      var i = this,
        o = e._feature,
        r = L.DomUtil.create('p', 'result-item', t);
      if (
        (L.DomUtil.addClass(r, 'clickable'),
        (r.tabIndex = 0),
        (r.onclick = function() {
          i.options._map.setView(o.layer.getLatLng(), 14),
            i.hidePanel(),
            o.layer.openPopup();
        }),
        null !== this.options.showResultFct)
      )
        this.options.showResultFct(o, r);
      else {
        str = '<b>' + e[this._keys[0]] + '</b>';
        for (var s = 1; s < this._keys.length; s++)
          str += '<br/>' + e[this._keys[s]];
        r.innerHTML = str;
      }
      return r;
    },
    _panAndPopup: function(e, t) {
      if (this._panelOnLeftSide) {
        var n = t.options.autoPanPaddingTopLeft,
          i = new L.Point(-this.getOffset(), 10);
        (t.options.autoPanPaddingTopLeft = i),
          e.layer.openPopup(),
          (t.options.autoPanPaddingTopLeft = n);
      } else {
        var n = t.options.autoPanPaddingBottomRight,
          i = new L.Point(this.getOffset(), 10);
        (t.options.autoPanPaddingBottomRight = i),
          e.layer.openPopup(),
          (t.options.autoPanPaddingBottomRight = n);
      }
    }
  })),
  (L.control.fuseSearch = function(e) {
    return new L.Control.FuseSearch(e);
  });
