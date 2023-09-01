/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import Flmngr from "@edsdk/flmngr-ckeditor5/src/flmngr";
// import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

// import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
// import Image from "@ckeditor/ckeditor5-image/src/image";
// import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
// import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload";

import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Image, ImageUpload } from "@ckeditor/ckeditor5-image";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";

// You can read more about extendinghe bui tld with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {}

Editor.builtinPlugins = [
  Essentials,
  ImageToolbar,
  Image,
  ImageUpload,
  Flmngr,
  Paragraph,
];

Editor.defaultConfig = {
  toolbar: {
    items: ["imageUpload", "undo", "redo"],
  },
  Flmngr: {
    apiKey: "FLMNFLMN",
    urlFileManager: "https://fm.flmngr.com/fileManager",
    urlFiles: "https://fm.flmngr.com/files",
  },
  image: {
    upload: {
      types: ["jpeg", "png", "jpg", "gif"],
    },
    toolbar: ["imgpen"],
  },
};

export default Editor;
