const toMonth = new Intl.DateTimeFormat('en', { month:'long' })

module.exports.ymd = date => (
  date instanceof Date
   ? `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}-${String(date.getUTCDate()).padStart(2, '0')}`
   : ''
)

module.exports.friendly = date => (
  date instanceof Date
    ? `${date.getUTCDate()} ${toMonth.format(date)}, ${date.getUTCFullYear()}`
    : ''
)
