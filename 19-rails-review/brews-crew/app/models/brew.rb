class Brew < ApplicationRecord
    has_many :purchases
    validates :blend_name, presence: true, uniqueness: true
    validates :origin, presence: true
    validates :strength , presence: true, numericality: {less_than_or_equal_to: 100 }
    def self.strongest
        @strongest = Brew.all.max_by { |brew| brew.strength }
        Brew.all.select { |brew| @strongest.strength == brew.strength}
    end
end
