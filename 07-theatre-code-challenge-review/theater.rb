class Theater

    attr_accessor :title, :city

    @@all = [ ]

    def initialize(title, city)
        @title = title
        @city = city
        @@all << self
    end

    def self.all
        @@all
    end

    def performances
        # binding.pry
        Performance.all.find_all do |performance|
            performance.theater == self
        end  
    end

    def musicals
        # binding.pry
        # performances  = Performance.all.find_all do |performance|
        #     performance.musical == self
        # end
        performances.map do |performance|
            performance.musical
        end            
    end
end