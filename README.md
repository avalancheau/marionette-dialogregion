marionette-dialogregion
=======================

Custom Marionette region setup for dialogs/lightboxes, using the jquery-colorbox lightbox library.

Largely based on Brian Mann's [Building Dialogs with Custom Regions](http://www.backbonerails.com/screencasts/building-dialogs-with-custom-regions) screencast, with a few extra options to make the dialogs un-closeable and to work around issues opening consecutive dialogs with Colorbox.

Usage
-----

In your Marionette app, declare a region to be a dialog by extending `Marionette.Region.Dialog` and providing a selector for the element you wish to use for your dialogs:

```coffeescript
App.addRegions
  dialogRegion: Marionette.Region.Dialog.extend el: "#dialog"
```

Now, when you show a view in that region, it will be displayed in a Colorbox lightbox:

```coffeescript
App.dialogRegion.show view
```

Options
-------

Currently, there is only one option available, `closable`. It defaults to `true`, but if you make it `false`, the dialog will not be closable by clicking on the background overlay or pressing the Escape key:

```coffeescript
view = new MyView closable: true
App.dialogRegion.show view
```

Copyright and Licence
---------------------

 Copyright 2014 Avalanche Technology Group Pty Ltd

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
