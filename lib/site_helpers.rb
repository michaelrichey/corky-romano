module SiteHelpers
    def log_movie_tiles
      data.halloweenmovies.each do |title|
        puts title
      end
    end
end