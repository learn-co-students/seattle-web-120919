class Brew < ApplicationRecord
  has_many :purchases
  validates :blend_name, uniqueness: true

  def self.strongest
    Brew.all.order(:strength).last(5).reverse
  end
end
