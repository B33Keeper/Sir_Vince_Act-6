import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../entities/movie.entity';

@Injectable()
export class SeederService implements OnModuleInit {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async onModuleInit() {
    await this.seedMovies();
  }

  private async seedMovies(): Promise<void> {
    // Only seed if database is empty (preserve existing movies and reviews)
    const existingMovies = await this.movieRepository.count();
    if (existingMovies > 0) {
      console.log(`✅ Database already contains ${existingMovies} movies. Skipping seeding.`);
      return;
    }

    const movies = [
      {
        title: 'Iron Man',
        director: 'Jon Favreau',
        releaseYear: 2008,
        description: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
        imageUrl: '/images/iron man.jpg',
      },
      {
        title: 'The Incredible Hulk',
        director: 'Louis Leterrier',
        releaseYear: 2008,
        description: 'Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.',
        imageUrl: '/images/the hulk.jpg',
      },
      {
        title: 'Iron Man 2',
        director: 'Jon Favreau',
        releaseYear: 2010,
        description: 'With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father\'s legacy.',
        imageUrl: '/images/iron man 2.jpg',
      },
      {
        title: 'Thor',
        director: 'Kenneth Branagh',
        releaseYear: 2011,
        description: 'The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.',
        imageUrl: '/images/thor.jpg',
      },
      {
        title: 'Captain America: The First Avenger',
        director: 'Joe Johnston',
        releaseYear: 2011,
        description: 'Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a warmonger and a terrorist organization.',
        imageUrl: '/images/captain america.jpg',
      },
      {
        title: 'The Avengers',
        director: 'Joss Whedon',
        releaseYear: 2012,
        description: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
        imageUrl: '/images/avengers.jpg',
      },
      {
        title: 'Iron Man 3',
        director: 'Shane Black',
        releaseYear: 2013,
        description: 'When Tony Stark\'s world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.',
        imageUrl: '/images/iron man 3.jpg',
      },
      {
        title: 'Guardians of the Galaxy',
        director: 'James Gunn',
        releaseYear: 2014,
        description: 'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
        imageUrl: '/images/guardians-of-the-galaxy.jpg',
      },
      {
        title: 'Ant-Man',
        director: 'Peyton Reed',
        releaseYear: 2015,
        description: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.',
        imageUrl: '/images/ant-man.jpg',
      },
      {
        title: 'Spider-Man: Homecoming',
        director: 'Jon Watts',
        releaseYear: 2017,
        description: 'Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.',
        imageUrl: '/images/spider-man-homecoming.jpg',
      },
      {
        title: 'Spider-Man: Into the Spider-Verse',
        director: 'Bob Persichetti, Peter Ramsey, Rodney Rothman',
        releaseYear: 2018,
        description: 'Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.',
        imageUrl: '/images/spider-man-into-the-spider-verse.jpg',
      },
      {
        title: 'Spider-Man: Far From Home',
        director: 'Jon Watts',
        releaseYear: 2019,
        description: 'Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.',
        imageUrl: '/images/spider-man-far-from-home.jpg',
      },
      {
        title: 'Breaking Bad',
        director: 'Vince Gilligan',
        releaseYear: 2008,
        description: 'A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family\'s financial future as he battles terminal lung cancer.',
        imageUrl: '/images/tv-breaking-bad.jpg',
        type: 'tvshow',
      },
      {
        title: 'Game of Thrones',
        director: 'David Benioff, D.B. Weiss',
        releaseYear: 2011,
        description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
        imageUrl: '/images/tv-game-of-thrones.jpg',
        type: 'tvshow',
      },
      {
        title: 'Stranger Things',
        director: 'The Duffer Brothers',
        releaseYear: 2016,
        description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
        imageUrl: '/images/tv-stranger-things.jpg',
        type: 'tvshow',
      },
      {
        title: 'The Office',
        director: 'Greg Daniels',
        releaseYear: 2005,
        description: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
        imageUrl: '/images/tv-the-office.jpg',
        type: 'tvshow',
      },
    ];

    const movieEntities = movies.map((movie) => this.movieRepository.create(movie));
    await this.movieRepository.save(movieEntities);

    console.log(`✅ Seeded ${movies.length} movies successfully!`);
  }
}

