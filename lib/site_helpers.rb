module SiteHelpers

    # Halloween-related

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

    def movies_for_robots
        data.halloweenmovies.map do |film|
            film.title + " with Robots!"
        end
    end

    def get_movie_data_by_title(title)
        filmtitle = data.halloweenmovies.select do |film|
            film.title == title
        end
        filmtitle
    end

    def get_list_of_recs(reclist)
        reclist.map do |title|
            get_movie_data_by_title(title)[0]
        end
    end

    # Theme song-related

end