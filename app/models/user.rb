class User < ApplicationRecord
  mount_uploader :picture, PictureUploader

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, omniauth_providers: [:google_oauth2]
  has_many :pictures, as: :imageable, dependent: :destroy
  has_many :votes, dependent: :destroy
  has_many :rentals, dependent: :destroy

  # User Picture Validation
  validates_integrity_of  :picture
  validates_processing_of :picture

  def self.from_omniauth(access_token)
    data = access_token.info
    user = User.where(email: data["email"]).first

    # Uncomment the section below if you want users to be created if they don't exist
    unless user
      user = User.create(
        email: data['email'],
        password: Devise.friendly_token[0,20],
      )
    end
    user
  end

  private
    def picture_size_validation
      errors[:pictures] << "should be less than 500KB" if pictures.size > 2.5.megabytes
    end
end