var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

(function(Backbone, Marionette, $) {
  return Marionette.Region.Dialog = (function(superClass) {
    extend(Dialog, superClass);

    function Dialog() {
      return Dialog.__super__.constructor.apply(this, arguments);
    }

    Dialog.prototype.onShow = function(view) {
      var options;
      options = _.defaults(view.options, {
        closable: true,
        dialogClassName: ""
      });
      $.magnificPopup.open({
        items: {
          src: this.$el,
          type: 'inline'
        },
        mainClass: options.dialogClassName,
        modal: !options.closable,
        callbacks: {
          beforeClose: (function(_this) {
            return function() {
              return _this.oldView = _this.currentView;
            };
          })(this),
          close: (function(_this) {
            return function() {
              if ((_this.oldView != null) && _this.oldView === _this.currentView) {
                if (Marionette.VERSION) {
                  return _this.oldView.destroy();
                } else {
                  return _this.oldView.close();
                }
              }
            };
          })(this)
        }
      });
      this.listenTo(view, 'close', function() {
        return $.magnificPopup.close();
      });
      return this.listenTo(view, 'destroy', function() {
        return $.magnificPopup.close();
      });
    };

    return Dialog;

  })(Marionette.Region);
})(Backbone, Marionette, $);
