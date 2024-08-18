class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :name, presence: true
  validates :email, presence: true
  validates :password, presence: true, confirmation: true
  validates :password_confirmation, presence: true

  ROLES = %i[user admin].freeze

  def admin?
    role == admin
  end

  def user?
    role == user
  end
end
