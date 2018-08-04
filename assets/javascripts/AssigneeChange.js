var LDC = LDC || {}; // eslint-disable-line no-use-before-define

LDC.AssigneeChange = (function () {
  'use strict';

  var users = [],
    hasUserChangeManuelStatus = false,
    dialog_AssigneeChange = null;

  /**
   * @constructor
   */
  function AssigneeChange() {
    console.log('Init AssigneeChange');

    dialog_AssigneeChange = _bindDialogEvent();

    _init();

    this.openDialog = function () {
      _init();
      _openDialog();
    }
  }

  /**
   * Macht den Dialog Bereit und ist der Controller
   *
   * @returns {jQuery}
   * @private
   */
  function _bindDialogEvent() {
    var input = $('#AssigneeChangeInput');

    $('#AssigneeChangeButton')
      .on("click", function (event) {
        input.trigger("focus");
        // Pass empty string as value to search for, displaying all results
        input.autocomplete("search", "");
      });

    return $('#dialog_AssigneeChange').dialog({
      autoOpen: false,
      modal: true,
      buttons: {
        "Belassen [esc]": function () {
          dialog_AssigneeChange.dialog("close");
        }
      },
      open: function (event, ui) {
        input
          .val('')
          .autocomplete({
            autoFocus: true,
            source: users,
            minLength: 0,
            appendTo: "#AssigneeChangeMenu",
            select: function (event, ui) {
              $('#issue_assigned_to_id option[value=' + ui.item.value + ']').prop('selected', true);
              dialog_AssigneeChange.dialog("close");
            },
            create: function (event, ui) {
              var zIndex = $('#dialog_AssigneeChange').parent().css('z-index');
              $('#AssigneeChangeMenu .ui-autocomplete').css('z-index', ++zIndex)
            }
          })
          .attr('placeholder', $('#issue_assigned_to_id option:selected').text());

      },
      close: function (event, ui) {
        $('#issue_assigned_to_id').parent().effect('bounce')
      }
    });
  }

  /**
   * Verknüpft die Events
   *
   * @private
   */
  function _init() {
    _initSourceData();
    _initIssueStatusId();
  }

  /**
   * Nur beim ändern des Status darf der Dialog Angezeigt werden
   * @private
   */
  function _initIssueStatusId() {
    $('#issue_status_id')
      .mouseup(function (event) {
        hasUserChangeManuelStatus = true;
      });
  }

  /**
   * Für die Combox die passenden Namen herausfinden die
   * @private
   */
  function _initSourceData() {
    var counter = 0;
    $('#issue_assigned_to_id option').each(
      function (index, el) {
        var option = $(el),
          username = option.text(),
          userid = option.val();

        if (userid === '') {
          return;
        }

        users[counter++] = {
          label: username,
          value: userid
        }
      });
  }

  /**
   * Öffnet schluss endich den Dialog, SOFERN der Status geändert wurde.
   * @private
   */
  function _openDialog() {
      if (hasUserChangeManuelStatus) {
        dialog_AssigneeChange.dialog('open');
        hasUserChangeManuelStatus = false;
      }
  }

  return AssigneeChange
}());

