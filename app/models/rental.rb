class Rental < ApplicationRecord
  belongs_to :rentor, class_name: "User", foreign_key: "user_id"
  has_many :pictures, as: :imageable, dependent: :destroy

  validates :title, presence: true
end