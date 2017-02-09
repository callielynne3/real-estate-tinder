Picture.destroy_all
Vote.destroy_all
Rental.destroy_all
User.destroy_all

5.times do
  User.create!(email: Faker::Internet.email, password: "password", remote_picture_url: Faker::LoremPixel.image)
end

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
    pictures: [Faker::LoremPixel.image, Faker::LoremPixel.image].to_a, # FIX: multiple pictures
    user_id: user.id
    )

  Picture.create!(name: "string", alt_text: "string", url: Faker::LoremPixel.image, imageable_type: "Rental", imageable_id: user.id)
end

Rental.all.each do |rental|
  Picture.create!(name: "string", alt_text: "string", url: Faker::LoremPixel.image, imageable_type: "Rental", imageable_id: rental.id)
end

rentals = Rental.all
users = User.all

15.times do
  Vote.create!(user: users.first, rental: rentals.sample, vote: [1,-1].sample)
end