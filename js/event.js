var el = require('./element');

function detect_submit() {
  el.form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(1);
  });
}

function add_events() {
  detect_submit();
}

module.exports = {
  detect_submit: detect_submit,
  add_events: add_events
};