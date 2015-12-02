# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Dan's peeps
Person.create([
  { fname: 'Scott', lname: 'Romney', background: 'Good friend, will make a dent in the universe', user_id: 1},
  { fname: 'Robert', lname: 'Morain', background: 'Genius.  Brother.  Bestie.', user_id: 1}
])
