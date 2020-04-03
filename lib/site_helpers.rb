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

    def test_card(film)

        image =
            content_tag :div, class: 'halloween-movies__thumbnail' do
                image_tag("#{film.poster}", class: "halloween-movies__posters")
            end

        text =
            content_tag(:div, class: "halloween-movies__desc") do
                content_tag(:h2, "#{film.title}") + content_tag(:h3, "#{film.synopsis}")
            end
        
        content_tag :div, class: 'halloween-movies__movie-card' do
            [image, text].join
        end
        
    end

    # content_tag :div, class: 'halloween-movies__desc' do

    # Theme song-related

    def eighties_songs
        data.themesongs.select do |song|
            song.year < 1990
        end
    end

    def nineties_songs
        data.themesongs.select do |song|
            song.year > 1990
        end
    end

    # theme song card helpers

    def theme_song_card(song)
        content_tag :div, class: "theme-song-card" do
            embed = theme_song_card__embed(song)
            infobox = theme_song_card__info_box(song)
            [embed, infobox].join
        end
        
    end

    def theme_song_card__embed(song)
        song.embed
    end

    def theme_song_card__info_box(song)
        content_tag :div, class: "theme-song-card__info-box" do
            title = theme_song_card__info_box_title(song)
            show = theme_song_card__info_box_show(song)
            year = theme_song_card__info_box_year(song)
            [title, show, year].join
        end
    end

    def theme_song_card__info_box_title(song)
        content_tag :h2 do
            'Title: ' + song.title
        end
    end

    def theme_song_card__info_box_show(song)
        content_tag :h3 do
            'Show: ' + song.from
        end
    end

    def theme_song_card__info_box_year(song)
        content_tag :h3 do
            'Year: ' + song.year.to_s
        end
    end


end