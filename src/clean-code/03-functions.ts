(() => {
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  function getMovieCastById(movieId: string) {
    console.log({ movieId });
  }

  function getActorBioById(ActorId: string) {
    console.log({ ActorId });
  }

  interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  // Crear una película
  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  function checkFullName(fullName: String) {
    console.log({fullName});
    return true;
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    if (checkFullName(fullName)) return false;

    console.log("Crear actor");
    return true;
  }

  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }):number => {

    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return (isRetired) ? 3000 : 4000;
  }
})();
