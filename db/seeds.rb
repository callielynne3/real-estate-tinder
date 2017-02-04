require 'faker'

Picture.destroy_all
Vote.destroy_all
Rental.destroy_all
User.destroy_all

5.times do |number|
  User.create!(email: "#{number}@email.com", password: "password")
end

User.all.each do |user|
  Rental.create!(
    title: "string",
    property_type: "string",
    address: "string",
    unit: "string",
    price: 1,
    beds: "string",
    baths: 1,
    pets: 1,
    parking: "string",
    description: "text",
    user_id: user.id
    )
end

5.times do
  Picture.create!(name: "string", alt_text: "string", url: "string", "imageable_type": ["Rental", "User"].sample, imageable_id: 1)
end

rentals = Rental.all
users = User.all

15.times do
  Vote.create!(user: users.sample, rental: rentals.sample, vote: [1,-1].sample)
end