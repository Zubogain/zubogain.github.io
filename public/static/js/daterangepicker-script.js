import $ from './jquery-3.6.3.min.js'
export default () => {
  var picker = $('#daterangepicker1').daterangepicker({
    language: 'ru',
    parentEl: '#daterangepicker1-container',
    autoApply: !0,
    locale: {
      format: 'MM/DD/YYYY',
      separator: ' - ',
      applyLabel: 'Apply',
      cancelLabel: 'Cancel',
      fromLabel: 'From',
      toLabel: 'To',
      customRangeLabel: 'Custom',
      daysOfWeek: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'сб'],
      monthNames: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      firstDay: 1,
    },
  })
  picker.on('apply.daterangepicker', function (e, a) {
    $('#daterangepicker-result').html(
      'Selected date range: ' +
        a.startDate.format('YYYY-MM-DD') +
        ' to ' +
        a.endDate.format('YYYY-MM-DD'),
    )
  }),
    (picker.data('daterangepicker').hide = function () {}),
    picker.data('daterangepicker').show()
}
