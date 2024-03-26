if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      require('./daterangepicker.js')
      require('./daterangepicker-script.js')
      require('./app.js')
    }, 100)
  })
}
