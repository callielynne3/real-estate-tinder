Picture.destroy_all
Vote.destroy_all
Rental.destroy_all
User.destroy_all

# create users
5.times do
  User.create!(email: Faker::Internet.email, password: "password", remote_picture_url: Faker::LoremPixel.image)
end

# create rentals
User.all.each do |user|
  Rental.create!(
    title: Faker::Lorem.sentence,
    property_type: ["Apartment", "Room"].sample,
    latitude: ['37.7449', '37.4449', '37.1449'].sample,
    longitude: ['-122.1194', '-122.4194', '-122.7194'].sample,
    address: Faker::Address.street_address,
    unit: rand(1..20),
    price: [750, 1000, 1250, 1500, 2000, 5000].sample,
    beds: rand(0..5),
    baths: rand(1..5),
    pets: ["Cats OK", "Dogs OK", "No Pets"].sample,
    parking: ["Garage", "Street"].sample,
    description: Faker::Lorem.paragraph,
    pictures: ["test.jpg", "test2.jpg"],
    user_id: user.id
    )

rentals = Rental.all
users = User.all

# create a test user (anglerfish)
u = User.create!(email:"ret@ret.com", password:"password", remote_picture_url:"https://i.imgsafe.org/d4b2ca6b09.png")
# create second test user (stimpy)
u2 = User.create!(email:"ret2@ret2.com", password:"password", remote_picture_url:"https://i.imgsafe.org/d77d13cba8.png")

# create that user's posted rentals
# posted rental 1
u.rentals.create!(title: "beautiful place", property_type: "Apartment",latitude: '37.7449',longitude: '-122.1194',address: "300 street street",unit: 22,price: 5000,beds: 3,baths: 2,pets: "No Pets",parking: "Street",description: "A wonderful place to raise a family of fish", pictures:["http://cdn.freshome.com/wp-content/uploads/2012/10bes-small-apartments-designs-ideas-image-17.jpg"])

# posted rental 2
u.rentals.create!(
  title: Faker::Lorem.sentence,
  property_type: ["Apartment", "Room"].sample,
  latitude: ['37.7449', '37.4449', '37.1449'].sample,
  longitude: ['-122.1194', '-122.4194', '-122.7194'].sample,
  address: Faker::Address.street_address,
  unit: rand(1..20),
  price: [750, 1000, 1250, 1500, 2000, 5000].sample,
  beds: rand(0..5),
  baths: rand(1..5),
  pets: ["Cats OK", "Dogs OK", "No Pets"].sample,
  parking: ["Garage", "Street"].sample,
  description: Faker::Lorem.paragraph,
  pictures: ["http://www.designboom.com/wp-content/uploads/2016/06/olafur-eliasson-palace-of-versailles-france-designboom-081.jpg"])

# posted rental 3
u.rentals.create!(
  title: Faker::Lorem.sentence,
  property_type: ["Apartment", "Room"].sample,
  latitude: ['37.7449', '37.4449', '37.1449'].sample,
  longitude: ['-122.1194', '-122.4194', '-122.7194'].sample,
  address: Faker::Address.street_address,
  unit: rand(1..20),
  price: [750, 1000, 1250, 1500, 2000, 5000].sample,
  beds: rand(0..5),
  baths: rand(1..5),
  pets: ["Cats OK", "Dogs OK", "No Pets"].sample,
  parking: ["Garage", "Street"].sample,
  description: Faker::Lorem.paragraph,
  pictures: ["https://s-media-cache-ak0.pinimg.com/originals/fb/5a/93/fb5a93d988132d35ba2dd04745285194.jpg"])

# create test user's favorites
  u.votes.create!(rental: Rental.first, vote: 1)
  u.votes.create!(rental: Rental.last, vote: 1)


Picture.create!(name: "string", alt_text: "string", url: Faker::LoremPixel.image, imageable_type: "Rental", imageable_id: user.id)
end

Rental.all.each do |rental|
  Picture.create!(name: "string", alt_text: "string", url: Faker::LoremPixel.image, imageable_type: "Rental", imageable_id: rental.id)
end

15.times do
  Vote.create!(user: User.first, rental: rentals.sample, vote: [1,-1].sample)
end