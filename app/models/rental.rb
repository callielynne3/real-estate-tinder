class Rental < ApplicationRecord
  mount_uploaders :pictures, PictureUploader

  belongs_to :rentor, class_name: "User", foreign_key: "user_id"
  has_many :pictures, as: :imageable, dependent: :destroy

  validates :title, presence: true

  # User Picture Validation
  validates_integrity_of  :pictures
  validates_processing_of :pictures

  private
    def picture_size_validation
      errors[:picture] << "should be less than 500KB" if pictures.size > 0.5.megabytes
    end
end