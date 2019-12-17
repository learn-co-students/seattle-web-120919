class Musical
    attr_accessor :name
    attr_reader :setting_city

    @@all = [ ]

    def initialize(name, setting_city)
        @name = name
        @setting_city = setting_city
        @@all << self
    end

    def self.all
        @@all
    end

    def perform_in_theater(theater, date)
        # binding.pry
        Performance.new(date, self, theater)
    end

    def performances
        # binding.pry
        Performance.all.find_all do |performance|
            performance.musical == self
        end  
    end

    def theaters
        # binding.pry
        # performances  = Performance.all.find_all do |performance|
        #     performance.musical == self
        # end

        self.performances.map do |performance|
            performance.theater
        end            
    end

end