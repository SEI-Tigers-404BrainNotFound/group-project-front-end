render={(routerProps) => {
      const { match } = routerProps
      const currentMovieId = match.params.movieId
      const selectedMovie = movies.find(movie => {
        return movie.id.toString() === currentMovieId
      })
      return (
        <Movie
          key={selectedMovie.title}
          title={selectedMovie.title}
          director={selectedMovie.director}
          cast={selectedMovie.cast}
          id={selectedMovie.id}
        />
      )
    }} />
