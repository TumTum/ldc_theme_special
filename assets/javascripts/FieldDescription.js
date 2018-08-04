var LDC = LDC || {}; // eslint-disable-line no-use-before-define

LDC.FieldDescription = (function () {
  'use strict';

  function FieldDescription() {
    console.log('Init FieldDescription');

    changeLabel('#start_date_area', 'Beginn des Vorgangs\n(Handeintrag; bzw. kommt vom frühesten Datum einer Unteraufgabe)');
    changeLabel('#due_date_area', 'Soll-Termin Fertigstellung bzw. Erledigung\n(Handeintrag; bzw. kommt vom spätesten Datum einer Unteraufgabe');
  }

  function changeLabel(fieldId, text) {
    var label = $('#issue-form ' + fieldId + ' label'),
      span = $('<span>')
        .addClass('field-description')
        .attr('title', text)
        .text(label.text())

    label.html(span);
  }

  return FieldDescription
}());
