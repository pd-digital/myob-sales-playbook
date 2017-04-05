class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :rememberable, :trackable, :validatable

  enum role: [ :admin, :user ]

  validates :role, presence: true

  def is_admin?
    self.role == 'admin'
  end

  def is_user?
    self.role == 'user'
  end
end
