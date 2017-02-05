Picture.destroy_all
Vote.destroy_all
Rental.destroy_all
User.destroy_all

5.times do
  User.create!(email: Faker::Internet.email, password: "password")
end

User.all.each do |user|
  Rental.create!(
    title: Faker::Lorem.sentence,
    property_type: ["Apartment", "Room"].sample,
    address: Faker::Address.street_address,
    unit: [1..20].sample,
    price: [750, 1000, 1250, 1500, 2000, 5000],
    beds: [0..5].sample,
    baths: [1..5].sample,
    pets: ["Cats OK", "Dogs OK", "No Pets"].sample,
    parking: ["Garage", "Street"].sample,
    description: Faker::Lorem.paragraph,
    user_id: user.id
    )
end

Rental.all.each do |rental|
  Picture.create!(name: "string", alt_text: "string", url: Faker::LoremPixel.image, "imageable_type": ["Rental", "User"].sample, imageable_id: rental.id)
end

rentals = Rental.all
users = User.all

15.times do
  Vote.create!(user: users.sample, rental: rentals.sample, vote: [1,-1].sample)
end