module SiteHelpers

    def log_movie_titles
      data.halloweenmovies.each do |title|
        puts title
      end
    end

    def detailed_info
        data.halloweenmovies.each do |film|
            film
        end
    end

    def select_monster_movies(monster)
        data.halloweenmovies.select do |film|
            film.monster == monster
        end
    end

end