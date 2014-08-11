var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

(function(Backbone, Marionette, $) {
  return Marionette.Region.Dialog = (function(_super) {
    __extends(Dialog, _super);

    function Dialog() {
      return Dialog.__super__.constructor.apply(this, arguments);
    }

    Dialog.prototype.onShow = function(view) {
      var options;
      options = _.defaults(view.options, {
        closable: true
      });
      $.colorbox({
        href: this.$el,
        inline: true,
        closeButton: false,
        transition: 'none',
        fadeOut: 100,
        overlayClose: options.closable,
        escKey: options.closable,
        onCleanup: (function(_this) {
          return function() {
            return _this.oldView = _this.currentView;
          };
        })(this),
        onClosed: (function(_this) {
          return function() {
            if (_this.oldView === _this.currentView) {
              if (Marionette.VERSION) {
                return _this.oldView.destroy();
              } else {
                return _this.oldView.close();
              }
            }
          };
        })(this)
      });
      this.listenTo(view, 'close', function() {
        return $.colorbox.remove();
      });
      this.listenTo(view, 'destroy', function() {
        return $.colorbox.remove();
      });
      return this.listenTo(view, 'region:show', function() {
        return $.colorbox.resize();
      });
    };

    return Dialog;

  })(Marionette.Region);
})(Backbone, Marionette, $);