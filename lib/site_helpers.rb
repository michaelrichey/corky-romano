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

    def select_monster_movies_mutant
        data.halloweenmovies.select do |film|
            film.monster == 'mutant'
        end
    end

    def select_monster_movies_vampire
        data.halloweenmovies.select do |film|
            film.monster == 'vampire'
        end
    end
end