  var sections = {}, photo = {}, thumb = {};

  function onThumbClick(evt) {
    'use strict'
    var result = true, i = 0, section = {};
    try {
      evt = evt || window.event;
      evt.preventDefault();
      for (i = 0; i < sections.length; i = i + 1) {
        section = sections[i];
        section.className = "blurred";
      }
      photo.style.display = "block";
    } catch (e) {
      alert (e);
      result = false;
    } finally {
      return result;
    }
  }

  function onPhotoClick(evt) {
    'use strict'
    var result = true, i = 0, section = {};
    try {
      evt = evt || window.event;
      evt.preventDefault();
      for (i = 0; i < sections.length; i = i + 1) {
        section = sections[i];
        section.className = "sharp";
      }
      photo.style.display = "none";
    } catch (e) {
      alert (e);
      result = false;
    } finally {
      return result;
    }
  }

  function getById(id) {
    'use strict'
    var item = {};
    try {
      item = document.getElementById(id);
    } catch (e) {
      alert (e);
    } finally {
      return item;
    }
  }
  
  function addItemEvent(item, eType, eHandler) {
    'use strict'
    try {
      if (item.addEventListener) {
        item.addEventListener(eType, eHandler, false);
      } else if (item.attachEvent) {
        item.attachEvent("on" + eType, eHandler);
      } else {
        item["on" + eType] = eHandler;
      }
    } catch (e) {
      alert (e);
    } finally {
      return item;
    }
  }

  window.onload = function() {
    'use strict'
    var result = true, tags;
    try {
      sections = document.getElementsByTagName("section");
      thumb = getById("thumb");
      photo = getById("photo");
      addItemEvent(thumb, "click", onThumbClick);
      addItemEvent(photo, "click", onPhotoClick);
    } catch (e) {
      alert (e);
      result = false;
    } finally {
      return result;
    }
  }